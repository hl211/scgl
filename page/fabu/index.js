// page/fabu/index.js
var util = require('../../util/util.js')
var showModal = util.showModal

Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '2016-09-01',
        market: '',
        mindex: 0,
        shop: [{
                id: 11,
                name: "红蒜6.0公分"
            },
            {
                id: 12,
                name: '豌豆尖'
            }
        ],
        sindex: 0,
        multiPrice: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2]
        ],
        multiIndex: [0, 0],
    },
    bindMarketChange: function(e) {
        var that = this;
        console.log('picker发送选择改变，携带值为', e)
        that.setData({
            mindex: e.detail.value
        })
    },

    bindDateChange: function(e) {
        var that = this;
        that.setData({
            date: e.detail.value
        })
    },
    bindShopChange: function(e) {
        var that = this;
        console.log('picker发送选择改变，携带值为', e)
        that.setData({
            sindex: e.detail.value
        })
    },

    //多列选择器
    bindMultiPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex: e.detail.value
        })
    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
            chosen: ''
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.getLocation({
            success: function(res) {
                var latitude = res.latitude; //纬度
                var longitude = res.longitude; //经度
                console.log(latitude + "----" + longitude);
                that.getCity(latitude, longitude); //调用自己写的函数获得城市
            },
            fail: function() {
                // fail
                wx.getSetting({
                    success(res) {
                        if (!res.authSetting['scope.userLocation']) {
                            wx.openSetting({})
                        } else {
                            //打开gps
                            showModal("提示", "打开gps")
                        }
                    },
                    fail(res) {
                        console.log('调用失败')
                    }
                });
            },
            complete: function() {
                // complete
                console.log("请求完成");
            }
        })
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
    //获得城市的函数定义
    getCity: function(lat, lng) {
        var url = "https://api.map.baidu.com/geocoder/v2/";
        var param = {
            location: lat + "," + lng,
            output: "json", //返回的数据格式
            ak: "MKABLw7PZssnQPy0BmnV2e6vcUyKWZxf" //地图api的ak
        };
        var that = this;
        //发出请求获取数据
        wx.request({
            url: url,
            data: param,
            success: function(res) {
                console.log(res);
                var city = res.data.result.addressComponent.city;
                var district = res.data.result.addressComponent.district;
                var street = res.data.result.addressComponent.street;
                let map = city + district + street;
                that.setData({
                    market: map
                });
            }
        })
    },
})