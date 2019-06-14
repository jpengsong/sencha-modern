/**
 * 获取导航菜单
 * 
 */
Ext.define('App.data.home.SysMenu', {
    extend: "App.data.Simulated",
    Init: function () {
        var me = this;
        me.dataSource = [
            { "SysMenuId": "2ee4b173-4e09-44db-8550-23d54392077e", "ViewType": "personnelist", "MenuName": "人员情况", "Description": "", "Order": 0, "IconCls": "x-fa fa-tags", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "4fd54f9d-34fd-46a7-81a5-bdf0cbb69339", "ViewType": "", "MenuName": "风险分析", "Description": "", "Order": 1, "IconCls": "x-fa fa-usd", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "a562d8b2-2990-4595-a9eb-04d0c8665710", "ViewType": "", "MenuName": "集成插件", "Description": "", "Order": 2, "IconCls": "x-fa fa-cogs", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "186ffc34-1bc1-408c-a8d2-01f5a4499315", "ViewType": "", "MenuName": "主题", "Description": "", "Order": 3, "IconCls": "x-fa fa-tv", "IsEnable": 1, "isDel": 0 },
        ];
        me.GetSysMenuByRule();
    },

    //获取数据
    GetSysMenuByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/home/SysMenu/GetSysMenuByRule",
            getData: function (ctx) {
                return me.SqlQuery(null);
            }
        })
    }
})
