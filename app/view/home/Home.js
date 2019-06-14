Ext.define("App.view.home.Home", {
    extend: "Ext.Container",
    xtype: "home",
    controller:"home",
    layout: {
        type: "vbox"
    },
    items: [
        {
            xtype: "tabpanel",
            fullscreen: true,
            tabBarPosition: 'bottom',
            defaults: {
                iconAlign: "top"
            },
            layout: {
                type: 'card',
                animation: {
                    type: null
                }
            },
            tabBar:{
                defaultTabUI :"tab"
            },
            items: [
                {
                    xtype: "tab1"
                },
                {
                    xtype: "tab2"
                },
                {
                    xtype: "tab3"
                }
            ]
        }
    ]
})