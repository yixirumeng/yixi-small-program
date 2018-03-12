// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classify: ['前端开发', '框架学习', 'web扩展'],
      listDetail1: [
          {
              title: 'JS判断用户是否在浏览当前页面1',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面2',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面3',
              time: '2018-3-3'
          }
      ],
      listDetail2: [
          {
              title: 'JS判断用户是否在浏览当前页面4',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面5',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面6',
              time: '2018-3-3'
          }
      ],
      listDetail3: [
          {
              title: 'JS判断用户是否在浏览当前页面7',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面8',
              time: '2018-3-3'
          },
          {
              title: 'JS判断用户是否在浏览当前页面9',
              time: '2018-3-3'
          }
      ],
      listCurrent: 0,
      title: '文章',
      href: 'https://yixirumeng.github.io/2018/03/03/browser-tab-change/',
      opacity: 0,
      zIndex: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  changeList: function(event){
      this.setData({
          listCurrent: event.currentTarget.dataset.idx
      })
  },
  callBomb() {
      this.setData({
          opacity: 1,
          zIndex: 1
      })
  },
  hideBomb() {
      this.setData({
          opacity: 0,
          zIndex: -1
      })
  }
})