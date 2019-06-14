Ext.define("App.model.home.SysMenu", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'SysMenuId', type: 'string' },
        { name: 'MenuName', type: 'string' },
        { name: 'ViewType', type: 'string' },
        { name: 'IconCls', type: 'string' },
        { name: 'Order', type: 'int' },
        { name: 'IsDel', type: 'int' },
        { name: 'CreateUserId', type: 'string' },
        { name: 'CreateUserName', type: 'string' },
        { name: 'CreateDate', type: 'date' },
        { name: 'ModifyUserId', type: 'string' },
        { name: 'ModifyUserName', type: 'string' },
        { name: 'ModifyDate', type: 'date' }
    ],
    idProperty: 'SysMenuId'
})