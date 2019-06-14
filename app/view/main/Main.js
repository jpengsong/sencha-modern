Ext.define("App.view.main.Main", {
    id: "mainCard",
    controller: "main",
    viewModel: "main",
    fullscreen: true,
    extend: "Ext.Container",
    layout: {
        type:"card",
        animation: {
            type: 'slide'
        }
    },
    items: [
        { xtype: "home", routeId: "home" }
    ],
    listeners: {
        initialize: "onMainViewInitialize"
    }
})