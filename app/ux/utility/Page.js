﻿
/**
 * 处理页面的工具类 
 */
Ext.define('App.ux.utility.Page', {
    alternateClassName: ['App.Page'],
    statics: {
        /**
        * 获取组件 QueryItems ,适用于所有请求。
        * @param {Object} component
        */
        getQueryItems: function (component) {
            var queryItems = {}, fields = Ext.ComponentQuery.query("field", component);
            Ext.Array.each(fields, function (field, index) {
                if(!Ext.isEmpty(field.getValue())){
                    queryItems[field.name] = field.getValue();
                }
            })
            return queryItems;
        },

        /**
        * 设置 QueryItem
        * @param {Object} store 需要设置参数的store对象
        * @param {Array} items 需要设置的QueryItems数组
        */
        setQueryItems: function (store, items) {
            var me = this, queryItems = {};
            if (!Ext.isEmpty(items)) {
                queryItems = items;
            }
            me.setExtraParamData(store, { QueryItems: queryItems });
        },

        /**
        * 设置 Store 请求的参数
        * @param {Object} store 需要设置参数的store对象
        * @param {Object} paramData 需要设置的参数
        */
        setExtraParamData: function (store, paramData) {
            var me = this, requestData = Ext.decode(store.proxy.extraParams.RequestData), data, objData = {}, arrData = [];
            if (Ext.isEmpty(requestData.Data)) {
                store.getProxy().setExtraParam("RequestData", App.Ajax.getRequestData(paramData));
            } else {
                data = Ext.decode(requestData.Data);
                if (Ext.typeOf(data) === "object") {
                    objData = data;
                    if (Ext.typeOf(paramData) === "object") {
                        Ext.apply(objData, paramData);
                    } else if (Ext.typeOf(paramData) === "array") {
                        Ext.each(paramData, function (item, index) {
                            Ext.apply(objData, item);
                        });
                    }
                    store.getProxy().setExtraParam("RequestData", App.Ajax.getRequestData(objData));
                } else if (Ext.typeOf(data) === "array") {
                    Ext.each(data, function (item, index) {
                        arrData.push(item);
                    });
                    if (Ext.typeOf(paramData) === "object") {
                        arrData.push(paramData);
                    } else if (Ext.typeOf(paramData) === "array") {
                        Ext.each(paramData, function (item, index) {
                            arrData.push(item);
                        });
                    }
                    store.getProxy().setExtraParam("RequestData", App.Ajax.getRequestData(arrData));
                }
            }
        },

        /**
        * 获取url参数名称内容
        * @param {String} url 
        * @param {String} name 
        * @return {Object} 没有返回null
        * @static
        * 
        */
        getQueryString: function (url, name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = url.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },

        //选择行数据
        selectionModel: function (grid, isMultSet) {
            var records, rs; rs = false;
            records = grid.getSelectionModel().getSelection();
            if (records.length > 0) {
                if (records.length > 1 && !isMultSet) {
                    App.Msg.Warning("只能选择一行数据");
                } else {
                    rs = true;
                }
            } else {
                App.Msg.Warning("请选择数据,再操作！");
            }
            return rs;
        },

        //删除
        getGridField: function (grid, field) {
            var records, ids; ids = new Array();
            records = grid.getSelectionModel().getSelection();
            for (var i = 0; i < records.length; i++) {
                ids.push(records[i].data[field]);
            }
            return ids;
        }
    }
})


