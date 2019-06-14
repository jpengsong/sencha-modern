Ext.define('App.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    stores: {
        plist: {
            type: "main.plist"
        }
    }
});
