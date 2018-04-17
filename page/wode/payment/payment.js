// page/wode/payment/payment.js

const paymentUrl = require('../../../config').paymentUrl
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    requestPayment: function() {
        var self = this

        self.setData({
            loading: true
        })
        // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
        // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
        app.getUserOpenId(function(err, openid) {
            if (!err) {
                wx.request({
                    url: paymentUrl,
                    data: {
                        openid
                    },
                    method: 'POST',
                    success: function(res) {
                        console.log('unified order success, response is:', res)
                        var payargs = res.data.payargs
                        wx.requestPayment({
                            timeStamp: payargs.timeStamp,
                            nonceStr: payargs.nonceStr,
                            package: payargs.package,
                            signType: payargs.signType,
                            paySign: payargs.paySign
                        })

                        self.setData({
                            loading: false
                        })
                    }
                })
            } else {
                console.log('err:', err)
                self.setData({
                    loading: false
                })
            }
        })
    },
})