Ext.define('App.view.home.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',

    onMenuTap:function(obj){
        this.redirectTo('view.'+obj.viewType);
    }
})