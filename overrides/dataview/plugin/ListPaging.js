Ext.define("override.dataview.plugin.ListPaging", {
    override: "Ext.dataview.plugin.ListPaging",
   
    /**
     * @private
    */
    loadNextPage: function() {
        var me = this,
            list = me.cmp;
 
        if (me.storeFullyLoaded()) {
            return;
        }
         me.setLoading(true);
         me.disableDataViewMask();
         me.currentScrollToTopOnRefresh = list.getScrollToTopOnRefresh();
         list.setScrollToTopOnRefresh(false);
         document.activeElement.blur();
         list.getStore().nextPage({ addRecords: true });
    }
})