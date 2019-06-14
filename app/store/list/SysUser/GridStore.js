Ext.define('App.store.list.SysUser.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.list.sysuser.gridstore',
    model: 'App.model.list.SysUser',
    pageSize: 20,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            datatype:config.DataType.GridStore
        },
        url: '/api/list/SysUser/GetSysUserPage',
    },
    sorters: [{
        property: 'ModifyDate',
        direction: 'DESC'
    }]
});