Ext.define('App.view.main.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],
    controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },
    tabBarPosition: 'bottom',
    items: [
        {
            title: '首页',
            iconCls: 'x-fa fa-home',
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: 'searchfield',
                    margin: "5 5 0 5",
                    name: 'query',
                    triggers: {
                        search: {
                            type: 'search',
                            side: 'right'
                        }
                    }
                },
                {
                    xtype: "carousel",
                    indicator: true,
                    resetFocusPosition: true,
                    height: 170,
                    ui: "dark",
                    items: [
                        {
                            cls: "main-carousel-image main-carousel-one-background"
                        },
                        {
                            cls: "main-carousel-image main-carousel-two-background"
                        },
                        {
                            cls: "main-carousel-image main-carousel-three-background"
                        }
                    ]
                },
                {
                    xtype: "container",
                    layout: {
                        type: "vbox",
                        align: "stretch",
                        pack: "center"
                    },
                    items: [
                        
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch",
                                pack: "center"
                            },
                            defaultType: "button",
                            defaults:{
                                margin:"10 10",
                                height:100,
                                iconCls:"main-table-btn-size"
                            },
                            items: [
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch",
                                pack: "center"
                            },
                            defaultType: "button",
                            defaults:{
                                margin:"10 10",
                                height:100,
                                iconCls:"main-table-btn-size"
                            },
                            items: [
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch",
                                pack: "center"
                            },
                            defaultType: "button",
                            defaults:{
                                margin:"10 10",
                                height:100,
                                iconCls:"main-table-btn-size"
                            },
                            items: [
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                },
                                {
                                    text: 'Button',
                                    iconAlign:"top",
                                    icon:"resources/images/main/table/btn1.jpg",
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: '消息',
            iconCls: 'x-fa fa-comment-o'
        },
        {
            title: '我的',
            iconCls: 'x-fa fa-users'
        }
    ]
});
