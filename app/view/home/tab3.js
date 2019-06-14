Ext.define("App.view.home.tab3", {
    extend: "Ext.Panel",
    xtype: "tab3",
    title: '我的',
    iconCls: 'x-fa fa-user-o',
    layout: {
        type: "vbox"
    },
    items: [
        {
            xtype: "container",
            height: 200,
            layout: {
                type: "vbox"
            },
            style:{
                "background-image":"url(/resources/images/home/Panel_3/background.jpg)",
                "background-size": "100% 100%",
                "background-repeat":"no-repeat",
            },
            items: [
                {
                    xtype: "container",
                    html: ""
                },
                {
                    xtype: "container",
                    layout: {
                        type: "hbox"
                    },
                    items: [
                        { xtype: "container", html: "", flex: 1 },
                        { xtype: "container", html: "", flex: 1 }
                    ]
                }
            ]
        },
        {
            xtype: 'menu',
            floated: false,
            autoHide: false,
            items: [
                {
                    xtype: "menuitem",
                    iconCls: 'x-fa fa-user-o',
                    text: '有奖邀请',
                    menu:[]
                },
                {
                    xtype: "menuitem",
                    iconCls: 'x-fa fa-user-o',
                    text: '有奖邀请',
                    menu:[]
                },
                {
                    xtype: "menuitem",
                    iconCls: 'x-fa fa-user-o',
                    text: '有奖邀请',
                    menu:[]
                }
            ]
        }
    ]
})