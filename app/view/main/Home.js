Ext.define("App.view.main.Home", {
    extend: "Ext.Container",
    id: "mainCardPanel",
    xtype:"home",
    config: {

        /**
         * 左组件
         */
        leftCom: null,

        /**
         * 右组件
         */
        rightCom: null,

        /**
         * 滑动方向
         */
        direction: "left",

        /**
         * 偏移量
         */
        offset: 0,

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
        titlebar: null
    },
    defaults: {
        hidden: false
    },

    layout: {
        type: "hbox",
        align: "stretch"
    },

    items: [
        {
            xtype: "titlebar",
            docked: 'top',
            title: 'Navigation',
            items: [
                {
                    iconCls: 'x-fa fa-bars',
                    align: 'left'
                },
                {
                    iconCls: 'x-fa fa-plus',
                    align: 'right'
                }
            ]
        }
        // {
        //     xtype: "container",
        //     width: "100%",
        //     cls:"leftNavigationArea",
        //     scrollable: true,
        //     layout: {
        //         type: "vbox",
        //         align: "stretch"
        //     },
        //     items: [

        //     ]
        // }
        // {
        //     xtype: "container",
        //     cls: "rightNavigationArea",
        //     style: "background:#ddd"
        // }
    ],

    // beforeInitialize: function () {
    //     var me = this, el = me.element;
    //     //me.initNavigationItems();
    // },

    //初始化子组件
    initNavigationItems: function () {
        var me, leftCom, rightCom;
        me = this,
            me.setClientWidth(document.body.clientWidth),
            leftCom = me.down("component[cls='leftNavigationArea']"),
            rightCom = me.down("component[cls='rightNavigationArea']"),
            me.setLeftCom(leftCom),
            me.setRightCom(rightCom),
            leftCom.setWidth(me.getClientWidth() * me.getProportion()),
            rightCom.setWidth(me.getClientWidth());
            me.refreshNavigationOffset();
    },

    //恢复默认状态
    refreshNavigationOffset: function () {
        var me = this, left = me.getLeftCom(), right = me.getRightCom();
        me.setDirection("left");
        me.setDuration(3000);
        me.setOffset(me.getClientWidth() * me.getProportion());
        me.setOffsetAnimated(left.element, me.getOffset() * (me.getProportion() * 0.5));
        me.setOffsetAnimated(right.element, me.getOffset());
        // Ext.defer(function () {
        //     left.show();
        //     right.show();
        // }, 200);
    },

    //开始偏移动画
    setOffsetAnimated: function (el, x) {
        var me = this, config;
        config = {
            direction: me.getDirection(),
            opacity: false,
            'z-index': false,
            duration: me.getDuration(),
            autoClear: false,
            before: function (el) {
                var currentZIndex = el.getStyle('z-index') == 'auto' ? 0 : el.getStyle('z-index'),
                    zIndex = currentZIndex + 1,
                    direction = this.direction,
                    toX = 0,
                    fromX = 0,
                    elW = el.getWidth();
                if (direction == 'left') {
                    toX = -x;
                } else if (direction == 'right') {
                    fromX = elW;
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
        Ext.Anim.run(el, "slide", config);
    }
})