// page/zhuye/chaxun/chaxun.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '2016-09-01',
        market: ['云南通海金山蔬菜批发市场', '云南省呈贡县龙城蔬菜批发市场', '云南省元谋县蔬菜批发市场'],
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
        sindex: 0
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

    }
})