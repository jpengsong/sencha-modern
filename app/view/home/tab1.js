Ext.define("App.view.home.tab1", {
    extend: "Ext.Panel",
    xtype: "tab1",
    title: '首页',
    iconCls: 'x-fa fa-home',
    layout: {
        type: "vbox"
    },
    items: [
        {
            xtype: "titlebar",
            ui: "titlebar",
            docked: 'top',
            title: 'Navigation',
            items: [
                {
                    xtype: "button",
                    ui: "titlebar_btn",
                    iconCls: 'x-fa fa-bars',
                    align: 'center'
                },
                {
                    ui: "titlebar_btn",
                    ui: "titlebar_btn",
                    iconCls: 'x-fa fa-plus',
                    align: 'right'
                }
            ]
        },
        {
            xtype: "rotatingcarousel",
            delay:2000,
            height: 150,
            items: [
                {
                    xtype: "image", src: "/resources/images/home/Panel_1/Carousel/01.jpg"
                },
                {
                    xtype: "image", src: "/resources/images/home/Panel_1/Carousel/02.jpg"
                },
                {
                    xtype: "image", src: "/resources/images/home/Panel_1/Carousel/03.jpg"
                },
                {
                    xtype: "image", src: "/resources/images/home/Panel_1/Carousel/04.jpg"
                }
            ]
        },
        {
            xtype: "container",
            layout: {
                type: "vbox"
            },
            defaultType: "container",
            items: [
                {
                    margin: "10 0 0 0",
                    defaultType: "button",
                    defaults: {
                        ui: "listbtn",
                        iconAlign: 'top',
                        iconCls: "menu_icon",
                        width: "25%",
                        listeners:{
                            tap:"onMenuTap"
                        }
                    },
                    items: [
                        {
                            icon: '/resources/images/home/Panel_1/Menu/人员情况_64.png',
                            viewType:"sysuser",
                            text: "人员情况"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/风险分析_64.png',
                            viewType:"personnelist",
                            text: "风险分析"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/培训视频_64.png',
                            viewType:"personnelist",
                            text: "培训视频"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/通知公告管理_64.png',
                            viewType:"personnelist",
                            text: "通知公告管理"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/项目审核_64.png',
                            viewType:"personnelist",
                            text: "项目审核"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/项目台帐情况_64.png',
                            viewType:"personnelist",
                            text: "项目台帐情况"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/通知公告_64.png',
                            viewType:"personnelist",
                            text: "通知公告"
                        },
                        {
                            icon: '/resources/images/home/Panel_1/Menu/风险预警_64.png',
                            viewType:"personnelist",
                            text: "风险预警"
                        }
                    ]
                }
            ]
        }
    ]
})