Page({
  data: {
    show: false
  },
  getCurrentTime() {
    let date = new Date()
    let YY = date.getFullYear()
    let MM = parseInt(date.getMonth())
    MM = MM < 9 ? '0' + ++MM : ++MM
    let DD = parseInt(date.getDate()) < 10 ? '0' + date.getDate() : date.getDate()
    let hh = parseInt(date.getHours()) < 10 ? '0' + date.getHours() : date.getHours()
    let mm = parseInt(date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let ss = parseInt(date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds()

    this.setData({
      currentTime: `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    })
  },
  onLoad(options) {
    this.getCurrentTime();
    this.setData({
      name: options.name,
      stuid: options.stuid,
      gatename: options.gatename,
      avatar: options.avatar,
      pass: options.pass === true
    })

    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 2000)
  },
})