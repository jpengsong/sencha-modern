Ext.define("App.ux.utility.SimulateDB", {
    alternateClassName: ['App.SimulateDB'],
    statics: {
        
        list: new Ext.util.MixedCollection(),

        Add: function (className, data) {
            var me; me = this;
            if (me.list.containsKey(className)) {
                me.list.removeAtKey(className);
            }
            me.list.add(className, data);
        },

        Get: function (className) {
            var me = this;
            if (!me.list.containsKey(className)) {
                return null;
            }
            else {
                return me.list.get(className);
            }
        }
    }
})