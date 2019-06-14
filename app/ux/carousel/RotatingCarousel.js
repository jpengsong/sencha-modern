Ext.define('App.ux.carousel.RotatingCarousel', {
    extend: "Ext.carousel.Carousel",
    xtype: "rotatingcarousel",
    config: {

        delay: 1000,

        start: true
    },

    initialize: function () {
        var me = this;
        me.Task();
    },

    Task: function () {
        var me = this, runner, max;
        if (me.config.start) {
            max = me.getIndicator() ? me.getIndicator().indicators.length : me.items.length;
            runner = new Ext.util.TaskRunner(), task = runner.newTask({
                run: function () {
                    if (me.getActiveIndex() + 1 == max) {
                        me.setActiveItem(0);
                    } else {
                        me.next();
                    }
                },
                interval: me.config.delay

            });
            task.start();
        }
    }
});