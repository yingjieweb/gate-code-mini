//获取应用实例
const app = getApp()

Page({
  data: {
    name: '吴彦祖',
    stuid: '1871234',
    gatename: '浑南校区西门',
    show: true
  },
  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindStuidInput(e) {
    this.setData({
      stuid: e.detail.value
    })
  },
  bindGatenameInput(e) {
    this.setData({
      gatename: e.detail.value
    })
  },
  goHome() {
    if (this.data.name == '' || this.data.stuid == '' || this.data.gatename == '') {
      wx.showToast({
        title: '请填写完整',
        icon: 'none'
      })
      return;
    }
    this.setData({
      show: false
    })
    wx.redirectTo({
      url: `/pages/home/home?name=${this.data.name}&stuid=${this.data.stuid}&gatename=${this.data.gatename}`
    })
  },

  goQuestion() {
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },

  onShareAppMessage() {
    return {
      title: '东大通行许可',
      path: '/pages/index/index'
    }
  }
})