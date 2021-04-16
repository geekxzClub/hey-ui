// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rate: 3,
    cardCur: 0,
    isPlay: true,
    current: 0,//banner当前的index
    swiperList2: [{
      id: 0,
      type: 'video',
      url: 'https://oss.geekxz.com/hey-ui-oss/video/test.mp4',
      img: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'      
    }, {
      id: 1,
        type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
    }, {
      id: 2,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner3.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner4.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner6.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
    }],
    goodsList: [{
      id: 1,
      title: '一抹朱砂 古董18K金珊瑚水晶托戒指',
      price: 18900,
      store: 2,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png'
    }, {
      id: 2,
      title: '心有灵犀 复古宫廷满钻戒指 钻石5克拉',
      price: 22800,
      store: 3,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
    }, {
      id: 3,
      title: '花开见佛 翡翠A货 黄翡花开见佛挂件',
      price: 25800,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/14.png'
    }, {
      id: 3,
      title: '火树银花 古董14K黄金青金石/蓝松石/钻石套装',
      price: 39800,
      store: 8,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png'
    }, {
      id: 4,
      title: '假日花园 古董18K黄金cameo珍珠项链',
      price: 19800,
      store: 10,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/4.png'
    }, {
      id: 3,
      title: '财源广进 翡翠A货 老坑蓝水财神挂件',
      price: 12800,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/13.png'
    }, {
      id: 1,
      title: '玫瑰余香 意大利18K双色金拉丝手镯',
      price: 36800,
      store: 8,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/5.png'
    }, {
      id: 2,
      title: '伊甸园 古董18K黄金珐琅彩蛇形手镯',
      price: 78000,
      store: 20,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/6.png',
    }, {
      id: 3,
      title: '龙腾万里 翡翠A货 冰绿飘花悟道挂件',
      price: 19800,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/11.png'
    }, {
      id: 3,
      title: '依马可待 古董18K黄金cameo吊坠/胸针',
      price: 7800,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/7.png'
    }, {
      id: 4,
      title: '花团锦簇 古董18K金无烧蓝宝石满钻胸针',
      price: 68000,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/8.png'
    }, {
      id: 4,
      title: '江南烟雨 翡翠A货 冰蓝飘花山水牌挂件',
      price: 68000,
      store: 188,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/12.png'
    }],
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
    this.videoContext = wx.createVideoContext("bannerVideo");
  },
  bannerChage(e) {
    var that = this;

    console.log(that.videoContext)
    // console.log(e.detail.current)
    that.setData({
      current: e.detail.current
    })
    if (e.detail.current == 0) {
      that.videoContext.play()
    } else {
      that.videoContext.pause()
    }
    console.log(e.detail.current)
  },
  goToDetail: function (e) {
    wx.navigateTo({
      url: '/heyui-shop/pages/detail/detail'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal: function (e) {
    this.setData({
      modalName: null
    })
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