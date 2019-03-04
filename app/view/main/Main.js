Ext.define("App.view.main.Main", {
    id: "mainCardPanel",
    extend: "Ext.Container",
    controller: "main",
    viewModel: "main",
    layout: 'card',
    activeItem: 0,
    items: [
        { xtype: "home" }
    ]
})