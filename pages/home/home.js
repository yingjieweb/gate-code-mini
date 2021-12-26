Page({
  data: {
    name: '',
    stuid: '',
    gatename: '',
    avatar: '',
    isKnownAlert: false,
    placeholderFigureVisible: true
  },
  goPreview() {
    wx.scanCode({
      success: (res) => {
        let realGateName = this.getGateNameFromUrl(res.result)
        //如果从二维码中获取到了大门信息，则覆盖输入的大门名称
        if (realGateName) {
          this.data.gatename = realGateName
        }
        wx.redirectTo({
          url: `/pages/preview/preview?name=${this.data.name}&stuid=${this.data.stuid}&gatename=${this.data.gatename}` + 
               `&avatar=${this.data.avatar}&pass=${this.data.pass}`
          
        })
      }
    })
  },  
  getGateNameFromUrl(url) {
    let matches = url.match(/entrance_id=(\d+)&/)
    if (!matches) return ''
    let gateName = ''
    switch (matches[1]) {
      case '1':
        gateName = '南湖校区北门'
        break
      case '2':
        gateName = '南湖校区南门'
        break
      case '3':
        gateName = '南湖校区西门'
        break
      case '4':
        gateName = '南湖校区东门'
        break
      case '5':
        gateName = '浑南校区东门'
        break
      case '6':
        gateName = '南湖校区测试'
        break
      case '7':
        gateName = '南湖校区小北门'
        break
      case '8':
        gateName = '浑南校区南门'
        break
      case '9':
        gateName = '浑南校区西门'
        break
      case '10':
        gateName = '浑南校区北门'
        break
      case '11':
        gateName = '沈河校区'
        break
    }
    return gateName
  },
  onLoad(options) {
    this.setData({
      name: options.name,
      stuid: options.stuid,
      gatename: options.gatename,
      avatar: options.avatar,
      pass: options.pass
    })
    setTimeout(() => {
      this.setData({
        placeholderFigureVisible: false
      })
    }, 3000)
  }
})