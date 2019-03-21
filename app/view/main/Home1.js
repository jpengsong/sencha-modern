Ext.define('App.view.main.Home1', {
    extend: 'Ext.Container',
    xtype: 'home1',
    viewModel: 'main',
    layout: {
        type: "hbox",
        align: "stretch",
    },
    items: [
        {
            xtype: "container",
            width: "100%",
            scrollable: true,
            layout: {
                type: "vbox",
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
                },
                {
                    xtype: "carousel",
                    height: 180,
                    defaultType: "image",
                    defaults: {
                        cls: "x-img-background"
                    },
                    items: [
                        {
                            src: "resources/images/main/carousel1.jpg"
                        },
                        {
                            src: "resources/images/main/carousel2.jpg"
                        },
                        {
                            src: "resources/images/main/carousel3.jpg"
                        }
                    ]
                },
                {
                    xtype: "container",
                    layout: {
                        type: "vbox",
                    },
                    items: [
                        {
                            xtype: "container",
                            defaultType: "button",
                            defaults: {
                                flex: 1,
                                ui: "tablebtn",
                                iconAlign: "top",
                                padding:"5 0 0 0"
                            },
                            layout: "hbox",
                            items: [
                                { text: "button", icon: "resources/images/main/table/btn1.jpg"},
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" },
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" },
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" }
                            ]
                        },
                        {
                            xtype: "container",
                            defaultType: "button",
                            defaults: {
                                flex: 1,
                                ui: "tablebtn",
                                iconAlign: "top"
                            },
                            layout: "hbox",
                            items: [
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" },
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" },
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" },
                                { text: "button", icon: "resources/images/main/table/btn1.jpg" }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    
    beforeInitialize: function() {

    }
});
