Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',
    //登录
    onLogin: function () {
        var me =this;
        App.UserInfo.Token="123456";
        me.redirectTo('view.home', true);
    }
})