Ext.define("App.ux.navigation.Navigation", {
    extend: "Ext.Container",
    xtype:"navigation",
    config: {

        /**
         * 左组件
         */
        lcom: null,

        /**
         * 右组件
         */
        rcom: null,

        /**
         * 滑动方向
         */
        direction: "l",

        /**
         * 左侧面板最大偏移量
        */
        maxlOffset: 0,

        /**
         * 右侧面板最大偏移量
         */
        maxrOffset: 0,

        /**
         * 是否允许拖动
         */
        isDrag:true,

        /**
         * 拖动手势开始位置
         */
        dragStartOffset: 0,

        /**
         * 动画时间
         */
        duration: 0,

        /**
         * 左侧宽度屏幕占比
         */
        proportion: 0.8,

        /**
         * 屏幕宽度
         */
        clientWidth: 0,

        /**
         * 导航栏
         */
        titlebar:[]
    },
    
    items: [
        {
            xtype: "container",
            html: "菜单",
            cls: "lNavigation"
        },
        {
            xtype: "container",
            cls: "rNavigation",
            layout:"fit",
            items: [

            ]
        }
    ],

    /**
     * 左侧栏子项
    */
    litems:[],
    
    /**
     * 右侧栏子项
    */
    ritems:[],
    
    defaults: {
        hidden: true
    },

    layout: {
        type: "hbox",
        align: "stretch"
    },

    beforeInitialize: function (config) {
        var me = this;
        
        //初始化Items
        me.initNavigationItems();
        
        //拖拽事件
        me.element.on({
            dragstart: 'onDragStart',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            scope: me
        });

        me.callParent([config]);
    },

    //初始化子组件
    initNavigationItems: function () {
        var me = this, lCom = me.down("component[cls='lNavigation']"), rCom = me.down("component[cls='rNavigation']");
        me.setLcom(lCom), me.setRcom(rCom), me.setClientWidth(document.body.clientWidth);
        lCom.setWidth(me.getClientWidth() * me.getProportion()), rCom.setWidth(me.getClientWidth());
        lCom.add(me.litems),rCom.add(me.ritems);
        me.refreshNavigationOffset();
    },

    onDragStart: function (e) {
        var me = this;
        if(!me.getIsDrag()){
            return
        } ;
        me.setDuration(0);
        me.dragStartOffset = parseInt(e.deltaX);
        if (me.getDirection() == "r") {
            me.r_lastOffset = 0;
            me.l_lastOffset = 0;
        }
        me.offsetdx = me.offset3dx();
    },

    onDrag: function (e) {
        var me = this; 
        var offset = parseInt((e.deltaX - me.dragStartOffset)); me.setDirection(e.deltaX > me.dragStartOffset ? "r" : "l");
        if(!me.getIsDrag()){
            return
        };
        if (me.onDragDisabled() == false) {
            return;
        };
        me.l_lastOffset = (me.offsetdx[0] + offset / 2); me.r_lastOffset = (me.offsetdx[1] + offset);
        me.toPointReset();
        me.getLcom().el.dom.style.transform = "translate3d(" + me.l_lastOffset + "px, 0px, 0px)";
        me.getRcom().el.dom.style.transform = "translate3d(" + me.r_lastOffset + "px, 0px, 0px)";
    },

    onDragEnd: function () {
        var me = this;
        me.onFireEvent();
        if(!me.getIsDrag()){
            return
        };
        if (me.onDragDisabled() == false) {
            return;
        };
        me.setDuration(100);
        var clientWidth = me.getClientWidth() / 2;   //二分之一宽
        var rClientWidth = me.getClientWidth() - me.getClientWidth() * me.getProportion(); //右面板左滑动初始宽
        var r_lastOffset = me.getDirection() == "r" ? (Math.abs(me.getMaxrOffset()) - Math.abs(me.r_lastOffset)) : (rClientWidth + Math.abs(me.r_lastOffset)); //获取实际位置
        if (me.getDirection() == "r" && r_lastOffset < clientWidth) { //左偏移
            me.setOffsetAnimated(me.getLcom(), Math.abs(me.l_lastOffset), -me.getMaxlOffset());
            me.setOffsetAnimated(me.getRcom(), Math.abs(me.r_lastOffset), -me.getMaxrOffset());
        } else if (me.getDirection() == "r" && r_lastOffset > clientWidth) {//右偏移
            me.setOffsetAnimated(me.getLcom(), Math.abs(me.l_lastOffset), 0);
            me.setOffsetAnimated(me.getRcom(), Math.abs(me.r_lastOffset), 0);
        } else if (me.getDirection() == "l" && r_lastOffset < clientWidth) { //左偏移
            me.setOffsetAnimated(me.getLcom(), me.l_lastOffset, 0);
            me.setOffsetAnimated(me.getRcom(), me.r_lastOffset, 0);
        } else if (me.getDirection() == "l" && r_lastOffset > clientWidth) {  //右偏移
            me.setOffsetAnimated(me.getLcom(), me.l_lastOffset, me.getMaxlOffset());
            me.setOffsetAnimated(me.getRcom(), me.r_lastOffset, me.getMaxrOffset());
        }
    },

    //展开折叠导航
    onBarTap: function () {
        var me = this;
        me.setDuration(300);
        me.setDirection((me.offset3dx()[0] == 0 ? "r" : "l"));
        me.setDirection((me.getDirection() == "l" ? "r" : "l"));
        me.setOffsetAnimated(me.getLcom(), (me.getDirection() == "r" ? me.getMaxlOffset() : 0), (me.getDirection() == "r" ? 0 : me.getMaxlOffset()));
        me.setOffsetAnimated(me.getRcom(), (me.getDirection() == "r" ? me.getMaxrOffset() : 0), (me.getDirection() == "r" ? 0 : me.getMaxrOffset()));
        me.onFireEvent();
    },

    /**
     * private function 
     * 
     * 
     */
    privates: {

        //触发展开折叠事件
        onFireEvent:function(){
            var me =this;
            Ext.defer(function(){
                if(me.offset3dx()[0]==0 &&me.offset3dx()[1]==0){
                    me.fireEvent("onNavigationExpand",me);
                }else{
                    me.fireEvent("onNavigationCollapsed",me);
                }
            },500)
        },

        //获取X轴位置
        offset3dx: function () {
            var me = this, l3dX = me.getLcom().el.dom.style.transform.replace("translate3d(", "").replace(")", "").split(',')[0].replace("px", ""), r3dX = me.getRcom().el.dom.style.transform.replace("translate3d(", "").replace(")", "").split(',')[0].replace("px", "");
            return [parseInt(l3dX), parseInt(r3dX)];
        },

        //禁止拖拽
        onDragDisabled: function () {
            var me = this;
            if (me.offset3dx()[0] == 0 && me.offset3dx()[1] == 0 && me.getDirection() == "r" || me.offset3dx()[0] == -me.getMaxlOffset() && me.offset3dx()[1] == -me.getMaxrOffset() && me.getDirection() == "l") {
                return false;
            }
        },

        //超过偏移重置初始值
        toPointReset: function () {
            var me = this;
            if (me.getDirection() == "r") {
                me.r_lastOffset = me.r_lastOffset >= 0 ? 0 : me.r_lastOffset;
                me.l_lastOffset = me.l_lastOffset >= 0 ? 0 : me.l_lastOffset;
            } else {
                me.r_lastOffset = me.r_lastOffset <= -me.getMaxrOffset() ? -me.getMaxrOffset() : me.r_lastOffset;
                me.l_lastOffset = me.l_lastOffset <= -me.getMaxlOffset() ? -me.getMaxlOffset() : me.l_lastOffset;
            }
        },

        //偏移动画
        setOffsetAnimated: function (com, fromX, toX) {
            var me = this, config;
            config = {
                direction: me.getDirection(),
                opacity: false,
                'z-index': false,
                duration: me.getDuration(),
                autoClear: false,
                before: function (el) {
                    zIndex = com.getCls() == "lNavigation" ? 1 : 2,
                        direction = this.direction;
                    if (direction == 'l') {
                        fromX = fromX;
                        toX = -toX;
                    } else if (direction == 'r') {
                        fromX = -fromX;
                        toX = toX;
                    }
                    this.from = {
                        '-webkit-transform': 'translate3d(' + fromX + 'px, 0px, 0)',
                        'z-index': zIndex
                    };
                    this.to = {
                        '-webkit-transform': 'translate3d(' + toX + 'px, 0px, 0)',
                        'z-index': zIndex
                    };
                }
            };
            Ext.Anim.run(com.element, "slide", config);
        },

        //恢复默认状态
        refreshNavigationOffset: function () {
            var me = this;
            me.setDirection("l");
            me.setDuration(0);
            me.setMaxlOffset(me.getClientWidth() * me.getProportion() * 0.5);
            me.setMaxrOffset(me.getClientWidth() * me.getProportion());
            me.setOffsetAnimated(me.getLcom(), 0, me.getMaxlOffset());
            me.setOffsetAnimated(me.getRcom(), 0, me.getMaxrOffset());
            Ext.defer(function () {
                me.getLcom().show();
                me.getRcom().show();
            }, 200);
        }
    }
})