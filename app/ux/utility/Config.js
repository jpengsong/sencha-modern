Ext.define('App.ux.utility.Config', {
    alternateClassName: ['config'],
    statics: {
        Url: "http://localhost:5868",

        //代理返回数据类型
        DataType: {
            /**
             * GridStore
             * @readonly
             */
            GridStore: "GridStore",
            /**
             * TreeStore
             * @readonly
             */
            TreeStore: "TreeStore",
            /**
             * ComboxStore
             * @readonly
             */
            ComboxStore: "ComboxStore"
        },

    }
})