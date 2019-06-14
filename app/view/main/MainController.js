Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    routes: {

        //跳转视图
        'view.:node': {
            before: "onBeforeUser",
            action: "onRouteChange"
        },

        //登录成功跳转
        'user.:node': {
            before: "onBeforeLoginUser",
            action: "onRouteUserChange"
        }
    },

    //登录检测
    onBeforeUser: function (id, action) {
        var me = this;
        if (Ext.isEmpty(App.UserInfo.Token) && id != "login") {
            action.stop();
            me.redirectTo('view.login', true);
        } else {
            action.resume();
        }
    },

    //用户登录检测
    onBeforeLoginUser: function (id, action) {
        if (!Ext.isEmpty(App.UserInfo.Token)) {
            action.resume();
        } else {
            action.stop();
            this.redirectTo('view.login', true);
        }
    },

    //view.:node路由触发
    onRouteChange: function (id) {
        var me = this;
        me.setCurrentView("mainCard", id);
    },

    //user.:node路由触发
    onRouteUserChange: function (id) {
        var me = this;
        me.setCurrentView("mainCard", id);
    },

    //渲染视图
    setCurrentView: function (maincard, hashTag) {
        var me, vm; me = this; vm = me.getViewModel(), refs = me.getReferences();
        //散列值转小写
        hashTag = (hashTag || '').toLowerCase();
        //获取容器
        var mainCard = Ext.getCmp(maincard);
        //如果白名单没有找到，返回404
        var view = vm.getStore("plist").find("ViewType", hashTag, 0, false, true, true) > -1 ? hashTag : null || 'page404';

        //当前视图
        var lastView = me.lastView;
        //查找项
        var existingItem = mainCard.child('component[routeId=' + hashTag + ']');

        //获取当前已经存在的window窗口
        //新视图
        var newView;
        //当前视图隐藏事件
        if (lastView) {
            lastView.fireEvent("viewHide", lastView);
        }
        if (!Ext.isEmpty(lastView)) {
            //判断如果是Window窗口 销毁
            if (lastView.isWindow) {
                lastView.destroy();
            } else {
                //上个视图不是Window视图窗口,当前页面有则关闭它
                if (lastView && !lastView.isToast) {
                    window.close();
                }
            }
        }
        //容器不存在显示视图项 创建
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag
            });
        }

        //新视图不存在或者非窗口
        if (!newView || !newView.isWindow) {
            if (existingItem) {
                lastView = mainCard.getActiveItem();
                if (existingItem !== lastView) {
                    mainCard.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                mainCard.add(newView);
                mainCard.setActiveItem(newView);
            }
        }

        //新视图显示事件
        if (newView) {
            newView.fireEvent("viewShow", newView);
        }

        //将当前视图保存到lastView中
        me.lastView = newView;
    },

    //初始化主页
    onMainViewInitialize: function () {
        var me = this, hash = window.location.hash.replace('#', '');
        App.UserInfo.Token="123";
        if (Ext.isEmpty(App.UserInfo.Token) && hash != 'view.login') {
            me.redirectTo('view.login', true);
        } else if (!Ext.isEmpty(App.UserInfo.Token)) {
            me.redirectTo('view.home', true);
        }
    }
});
