Ext.application({
    extend: 'App.Application',
    name: 'App',
    requires: [
        'App.*'
    ],
    mainView: 'App.view.main.Main'
    //mainView:'App.view.authentication.Login'
});
