// pages/show/show.js
Page({
  data: {
    state:1,
    backgroundposition:0,
    ismoving:false
  },
  move(e){
    if(this.data.ismoving==false&&this.data.state<=4){
      this.setData({
        backgroundposition:this.data.backgroundposition-200,
        state:this.data.state+1
      })
    this.setData({
      ismoving:true
    })
    setTimeout(()=>{this.setData({ismoving:false})},1500)
    }else if(this.data.state==5){
      wx.navigateTo({
        url: '../index/index',
      })
    }
  },
  onLoad(options) {

  },
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})