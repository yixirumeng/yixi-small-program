// pages/bomb/bomb.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
        type: String,
        value: '文章'
    },
    href: {
        type: String,
        value: ''
    },
    opacity: {
        type: Number,
        value: 0
    },
    zIndex: {
        type: Number,
        value: -1
    }
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
      closeBomb(){
          this.triggerEvent('hideBomb')
      }
  }
})
