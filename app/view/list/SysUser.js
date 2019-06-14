Ext.define("App.view.list.SysUser", {
    xtype: "sysuser",
    routeId: "sysuser",
    viewModel: "sysuser",
    extend: 'Ext.Panel',
    items: [
        {
            xtype: "titlebar",
            reference: "title",
            ui: "titlebar",
            docked: 'top',
            bind: {
                title: "{title}"
            },
            defaults: {
                ui: "titlebar_btn"
            },
            items: [
                {
                    xtype: "button",
                    reference: "back",
                    iconCls: 'x-fa fa-chevron-left',
                    text: "返回",
                    align: 'left',
                    bind: {
                        hidden: "{btnhide}"
                    }
                },
                {
                    xtype: "button",
                    reference: "del",
                    text: "删除",
                    align: 'left',
                    handler: "onDel",
                    bind: {
                        hidden: "{!btnhide}"
                    }
                },
                {
                    xtype: "button",
                    reference: "add",
                    iconCls: "x-fa fa-plus",
                    align: 'right',
                    handler: "onAdd",
                    bind: {
                        hidden: "{btnhide}"
                    }
                },
                {
                    xtype: "button",
                    reference: "cancel",
                    text: "取消",
                    align: 'right',
                    handler: "onCancel",
                    bind: {
                        hidden: "{!btnhide}"
                    }
                }
            ]
        },
        {
            xtype: 'list',
            reference: "userlist",
            selectable:false,
            fullscreen: true,
            itemTpl: '<div class="user_container">' +
                '<div class="user_content">' +
                '<div>用户名：<span>{UserName}</span></div>  <div>部门：<span>{OrgName}</span></div>' +
                '<div>创建日期：<span>{CreateDate}</span></div>' +
                '</div>' +
                '</div>',
            bind: {
                store: '{gridstore}',
                selectable: "{selectmodel}",
                cls: "{listcls}"
            },
            plugins: {
                requestdata: {
                    autoLoad: true,
                    pagination: true
                },
                pullrefresh: {
                    pullText: 'Pull down for more new Tweets!'
                },
                listpaging: {
                    autoPaging: true,
                    bufferZone: 0,
                    loadMoreText: "点击加载",
                    noMoreRecordsText: "我是有底线的"
                },
                lswiper: {
                    defaults: {
                        xtype: "button"
                    },
                    right: [
                        {
                            text: '编辑',
                            ui:"orangebtn",
                            width: 80,
                            handler:function(sen){
                                alert(sen);
                            }
                        },
                        {
                            text: '删除',
                            ui:"gulesbtn",
                            width: 80
                        }
                    ]
                }
            },
            deselectOnContainerClick: false,
            listeners: {
                childlongpress: "onChildlongpress",
                childtouchend: "onChildtap"
            }
        }
    ],
    controller: {

        //新增
        onAdd: function () {
            alert();
            var me = this, refs = me.getReferences();
        },

        //删除
        onDel: function () {

        },

        //取消
        onCancel: function () {
            var me = this, refs = me.getReferences(), vm = me.getViewModel();
            vm.set("selectmodel", "single");
            vm.set("title", "人员列表");
            vm.set("btnhide", false);
        },

        //长按事件
        onChildlongpress: function () {
            var me = this, refs = me.getReferences(), vm = me.getViewModel();
            if (vm.get("listcls").indexOf("selectable") === -1) {
                vm.set("selectmodel", "multi");
                vm.set("title", "选择人员");
                vm.set("btnhide", true);
                refs.userlist.getSelectable().deselectAll();
            }
        },

        //点击事件
        onChildtap: function (obj, location, eOpts) {

        }
    }
})