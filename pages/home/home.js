Page({
  data: {
    name: '',
    stuid: '',
    gatename: '',
    placeholderFigureVisible: true
  },
  goPreview() {
    wx.scanCode({
      success: () => {
        wx.redirectTo({
          url: `/pages/preview/preview?name=${this.data.name}&stuid=${this.data.stuid}&gatename=${this.data.gatename}`
        })
      }
    })
  },
  // 生命周期函数--监听页面加载
  onLoad(options) {
    this.setData({
      name: options.name,
      stuid: options.stuid,
      gatename: options.gatename
    })
    setTimeout(() => {
      this.setData({
        placeholderFigureVisible: false
      })
    }, 3000)
  }
})