//弹窗基础类
Ext.define('App.ux.pages.Dialog', {
    extend: 'Ext.Window',
    displayed: true,
    fullscreen :true,
    listeners:{
        initialize:function(sender, eOpts ){
            var width=document.documentElement.clientWidth;
            var height=document.documentElement.clientHeight;
            sender.setSize(width,height);
        }
    }
});