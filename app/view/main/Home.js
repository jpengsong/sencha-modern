Ext.define("App.view.main.Home", {
    extend: "App.ux.navigation.Navigation",
    xtype: "home",
    controller: {

        //展开折叠事件
        onBarTap: function () {
            var me = this, view = me.getView();
            view.onBarTap();
        },

        //展开
        onNavigationExpand: function () {

        },

        //折叠
        onNavigationCollapsed: function () {

        }
    },

    ritems: [
        {
            xtype: "tabpanel",
            tabBarPosition :"bottom",
            flex:1,
            layout:{
                animation: null
            },
            defaults:{
                iconAlign: 'top'
            },
            items: [
                {
                    title: '首页',
                    html: '',
                    iconCls: 'x-fa fa-home'
                },
                {
                    title: '消息',
                    iconCls: 'x-fa fa-comment-o',
                    badgeText: '3',
                    layout:"fit",
                    items:[
                        {
                            xtype: "list",
                            flex:1,
                            itemConfig: {
                                height: 70
                            },
                            itemTpl: '{title}',
                            data: [
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' },
                                { title: 'Item 1' },
                                { title: 'Item 2' },
                                { title: 'Item 3' },
                                { title: 'Item 4' }
                            ],
                            plugins: {
                                listswiper: {
                                    defaults: {
                                        width: 48
                                    },
                        
                                    right: [{
                                        iconCls: 'x-fa fa-envelope',
                                        ui: 'alt confirm',
                                        commit: 'onMessage'
                                    }, {
                                        iconCls: 'x-fa fa-phone',
                                        ui: 'alt action',
                                        commit: 'onCall',
                                        undoable: true
                                    }, {
                                        iconCls: 'x-fa fa-trash',
                                        ui: 'alt decline',
                        
                                        precommit: 'onDeleteItem',
                                        commit: 'onCommitDeleteItem',
                                        revert: 'onUndoDeleteItem',
                                        undoable: true
                                    }]
                                }
                            }
                        }
                    ]
                },
                {
                    title: '我',
                    iconCls: 'x-fa fa-user-o'
                }
            ]
        }
    ],

    initialize: function () {
        var me = this;
        me.setTitlebar({
            xtype: "titlebar",
            docked: 'top',
            title: 'Navigation',
            style: {
                //"background": "white"
            },
            items: [
                {
                    xtype: "button",
                    reference: "barTap",
                    iconCls: 'x-fa fa-bars',
                    align: 'left',
                    listeners: {
                        tap: "onBarTap"
                    }
                },
                {
                    iconCls: 'x-fa fa-plus',
                    align: 'right'
                }
            ]
        });
        me.getRcom().add(me.getTitlebar());
    },

    listeners: {
        onNavigationExpand: "onNavigationExpand",
        onNavigationCollapsed: "onNavigationCollapsed"
    }
})