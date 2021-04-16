// pages/response/response.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'actionsheet',
      type: 'actionsheet',
      text_zh: '底部弹出操作菜单',
      text_en: 'ActionSheet'
    }, {
        id: 2,
        icon: 'toast',
        type: 'toast',
        text_zh: '提示',
        text_en: 'Toast'
    }, {
      id: 3,
      icon: 'message',
      type: 'message',
      text_zh: '消息提示',
      text_en: 'Message'
    }, {
      id: 4,
      icon: 'dialog',
      type: 'dialog',
      text_zh: '模态框',
      text_en: 'Dialog'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'actionsheet') {
      wx.navigateTo({
        url: '/pages/response/hsheet/hsheet'
      })
    }
    if (type == 'toast') {
      wx.navigateTo({
        url: '/pages/response/toast/toast'
      })
    }
    if (type == 'dialog') {
      wx.navigateTo({
        url: '/pages/response/dialog/dialog'
      })
    }    
    if (type == 'message') {
      wx.navigateTo({
        url: '/pages/response/message/message'
      })
    }
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

  }
})