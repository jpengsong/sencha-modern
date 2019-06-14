/**
 * This plugin provides a way to map actions to swipe gesture on all list items.
 */
Ext.define('Ext.ux.LSwiper', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.lswiper',

    requires: [
        'Ext.util.DelayedTask'
    ],

    config: {

        right: [],

        widget: {
            xtype: "container",
            layout: {
                type: "hbox"
            }
        }
    },

    init: function (list) {
        var me = this, scrollable = list.getScrollable();
        me.items = [];
        list.el.on({
            scope: this,
            dragstart: 'onDragStart',
            drag: 'onDragMove',
            dragend: 'onDragEnd'
        });
        if (scrollable) {
            scrollable.setX(false);
        }
    },

    destroy: function () {
        var me = this, list = me.cmp;
        list.el.un({
            scope: this,
            dragstart: 'onDragStart',
            drag: 'onDragMove',
            dragend: 'onDragEnd'
        });
        this.callParent();
    },

    createWidget: function (config) {
        var me = this,
            rightItems = me.getRight();

        return Ext.apply({
            owner: me,
            defaults: me.defaults,
            items: rightItems
        }, config);
    },

    onDragStart: function (evt, kkk) {
        var me = this,
            list = me.cmp,
            record = list.mapToRecord(evt),
            translationTarget;
        if (record) {
            item = list.mapToItem(record);
            if (item) {
                widget = item.$swiperWidget;
                if (!widget) {
                    widget = me.createWidget(me.getWidget());
                    widget.ownerCmp = item;
                    item.$swiperWidget = widget = Ext.create(widget);
                    translationTarget = item.el.first();
                    translationTarget.insertSibling(widget.el, "after");
                    me.setCSS(widget, translationTarget);
                    widget.endX = 0;
                }
                widget.startX = evt.x;
            }
        }
    },

    onDragMove: function (evt) {
        var me = this,
            list = me.cmp,
            item = list.mapToItem(evt),
            widget,
            x;
        if (item) {
            widget = item.$swiperWidget;
            swiperDOM = widget.el.dom;
            translationDOM = item.el.first().dom;
            if (!me.hasActions() || !widget) {
                return;
            }
            x = (evt.x - widget.startX) + widget.endX;

            if (x <= 0) {
                if (Math.abs(x) >= swiperDOM.clientWidth) {
                    x = -(swiperDOM.clientWidth);
                }
            } else {
                x = 0;
            }
            swiperDOM.style.transform = "translateX( " + x + "px)";
            translationDOM.style.transform = "translateX(" + x + "px)";
        }
    },

    onDragEnd: function (evt) {
        var me = this,
            list = me.cmp,
            item = list.mapToItem(evt),
            widget,
            x;
        if (item) {
            widget = item.$swiperWidget;
            widgetDOM = widget.el.dom;
            translationDOM = item.el.first().dom;
            if (!me.hasActions() || !widget) {
                return;
            }
            x = (evt.x - widget.startX);
            if (x <= 0 && Math.abs(x) > 50) {
                widget.endX = x = -(widgetDOM.clientWidth);
                me._swiperDOM = widgetDOM;
                me._translationDOM = translationDOM;
            } else {
                widget.endX = x = 0;
                me._swiperDOM = null;
                me._translationDOM = null;
            }
            widgetDOM.style.transform = "translateX(" + x + "px)";
            translationDOM.style.transform = "translateX(" + x + "px)";
        }
    },

    hasActions: function () {
        return this.getRight();
    },

    hasExpand: function () {
        var me = this;
        return me._swiperDOM + me._translationDOM;
    },

    privates: {

        setCSS: function (widget, translationTarget) {
            var style = widget.el.dom.style;
            style.position = "absolute";
            style.height = "100%";
            style.right = "-" + widget.el.dom.clientWidth + "px";
        }
    }
});