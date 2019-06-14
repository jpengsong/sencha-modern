Ext.define("App.view.list.sysuser.SysUserModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysuser",
    stores: {
        gridstore: {
            type: "list.sysuser.gridstore"
        }
    },
    data:{
        listcls:"userlist",
        selectmodel:'multi',
        title:"人员列表",
        btnhide:false
    }
})