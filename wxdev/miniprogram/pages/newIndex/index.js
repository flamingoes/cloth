// pages/newIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAuth: null,
    infoList: [
      {id: 1, clothCode: 6587679, name: '批次1', operator: '小兰', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 2, clothCode: 3691261, name: '批次2', operator: '小兰', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 3, clothCode: 4489417, name: '批次3', operator: '小华', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 4, clothCode: 1174952, name: '批次4', operator: '小张', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 5, clothCode: 8484385, name: '批次5', operator: '小兰', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 6, clothCode: 1262274, name: '批次6', operator: '小兰', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 7, clothCode: 4897897, name: '批次7', operator: '小月', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 8, clothCode: 1213587, name: '批次8', operator: '张齐', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
      {id: 9, clothCode: 9696969, name: '批次9', operator: '小兰', supplier: '供应商1', createTime: 1626580083, modifyTime: 1626608883},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userAuth: wx.getStorageSync('userAuth')
    })
  },
  //查看详情
  toDetail(item){
    let clothCode = item.currentTarget.dataset.clothcode
    wx.navigateTo({
      url: '/pages/detail/index?clothCode=' + clothCode,
    })
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