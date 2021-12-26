//获取应用实例
const app = getApp()

Page({
  data: {
    name: '皮皮子',
    stuid: '1871234',
    gatename: '浑南校区西门',
    avatar: '',
    isKnownAlert: false,
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
  chooseImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => { // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        this.setData({
          avatar: res.tempFilePaths
        })
      }
    })
  },
  deleteImg() {
    this.setData({
      avatar: ''
    })
  },
  changeRadio(e) {
    let status = e.detail.value === 'true'
    this.setData({
      isKnownAlert: status
    })
  },
  navToHome() {
    if (this.data.name == '' || this.data.stuid == '' || this.data.gatename == '' || this.data.avatar == '') {
      wx.showToast({ title: '请将上述信息填写完整', icon: 'none' })
      return
    }
    this.setData({ show: false })
    wx.redirectTo({
      url: `/pages/home/home?name=${this.data.name}&stuid=${this.data.stuid}&gatename=${this.data.gatename}` + 
           `&avatar=${this.data.avatar}&pass=${this.data.isKnownAlert}`
    })
    this.setCache()
  },
  setCache() {
    wx.setStorage({
      key: "name",
      data: this.data.name
    })
    wx.setStorage({
      key: "stuid",
      data: this.data.stuid
    })
    wx.setStorage({
      key: "avatar",
      data: this.data.avatar
    })
  },
  getCache() {
    wx.getStorage({
      key: 'name',
      success: (res) => {
        this.setData({
          name: res.data
        })
      }
    })
    wx.getStorage({
      key: 'stuid',
      success: (res) => {
        this.setData({
          stuid: res.data
        })
      }
    })
    wx.getStorage({
      key: 'avatar',
      success: (res) => {
        this.setData({
          avatar: res.data
        })
      }
    })
  },
  goQuestion() {
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },
  onLoad() {
    this.getCache()
  },
  onShareAppMessage() {
    return {
      title: '东大通行许可',
      path: '/pages/index/index'
    }
  }
})