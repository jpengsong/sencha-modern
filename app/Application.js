Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'plugin.listswiper',
        'Ext.chart.axis.*',
        'Ext.chart.series.Bar',
        'Ext.panel.Collapser'
    ],
    name: 'App',
    quickTips: false
});
