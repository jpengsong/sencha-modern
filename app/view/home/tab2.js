Ext.define("App.view.home.tab2", {
    extend: "Ext.Panel",
    xtype: "tab2",
    title: '消息',
    iconCls: 'x-fa fa-bell-o',
    layout: {
        type: "vbox"
    },
    items: [
        {
            xtype: 'list',
            itemTpl: '<div>{title}</div>',
            fullscreen: true,
            inline :true,
            itemConfig :{
                xtype: 'simplelistitem',
                userSelectable :true,
                style:{
                    "min-width":"25%"
                }
            },
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
                { title: 'Item 4' }
            ]
        }
    ]
})