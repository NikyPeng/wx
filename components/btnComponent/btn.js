// components/btnCompont/btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { type: String, value: '确定' },
    width: { type: Number },
    height: { type: Number },
    backgroundColor: { type: String },
    color: { type: String },
    fontSize: {
      type: Number,
      value: 25
    },
    onClick: { type: Function }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  externalClasses: ['btn']
})
