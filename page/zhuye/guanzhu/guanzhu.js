// page/zhuye/guanzhu/guanzhu.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /** 
         * 页面配置 
         */
        winWidth: 0,
        winHeight: 0,
        // tab切换  
        currentTab: 0,

        listItem: [{
            id: "11",
            imgSrc: "../../../image/sc/11.jpg",
            name: "土豆",
        }, {
            id: "12",
            imgSrc: "../../../image/sc/12.jpg",
            name: "花菜",
        }, {
            id: "12",
            imgSrc: "../../../image/sc/13.jpg",
            name: "西兰花",
        }, {
            id: "12",
            imgSrc: "../../../image/sc/13.jpg",
            name: "西兰花",
        }, {
            id: "12",
            imgSrc: "../../../image/sc/13.jpg",
            name: "西兰花",
        }],
    },
    /** 
     * 滑动切换tab 
     */
    bindChange: function(e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });

    },
    /** 
     * 点击tab切换 
     */
    swichNav: function(e) {

        var that = this;

        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        /** 
         * 获取系统信息 
         */
        wx.getSystemInfo({
            success: function(res) {
                console.log((res.windowWidth - 150) / 3);
                that.setData({
                    winWidth: (res.windowWidth - 50) / 3,
                    winHeight: res.windowHeight
                });
            }

        });
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