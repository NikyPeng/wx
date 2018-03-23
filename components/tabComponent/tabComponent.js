// components/tabComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array
    },
    tabIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    idx: 0
  },
  ready: function(){

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _clickTab: function(e){
      this.triggerEvent('clickTabEvent', e.currentTarget.dataset.tabKey)
    }
  }
})
