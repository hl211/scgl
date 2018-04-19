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

        listItem: [{
            id: "11",
            imgSrc: "../../../image/sc/11.jpg",
            name: "土豆",
            state: 0,
        }, {
            id: "12",
            imgSrc: "../../../image/sc/12.jpg",
            name: "花菜",
            state: 0,
        }, {
            id: "12",
            imgSrc: "../../../image/sc/13.jpg",
            name: "西兰花",
            state: 0,
        }, {
            id: "12",
            imgSrc: "../../../image/sc/13.jpg",
            name: "西兰花",
            state: 0,
        }],
    },
    select_date: function(e) {
        var index = e.currentTarget.dataset.key;

        if (this.data.listItem[index].state == 1) {
            this.data.listItem[index].state = 0;

        } else if (this.data.listItem[index].state == 0) {
            this.data.listItem[index].state = 1;

        }
        this.setData({
            listItem: this.data.listItem,

        });

    },
    del_date: function(e) {
        var that = this;
        for (let index in that.data.listItem) {
            if (that.data.listItem[index].state === 1) {
                console.log(that.data.listItem[index].name)
            }
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
                console.log((res.windowWidth - 50) / 3);
                that.setData({
                    winWidth: (res.windowWidth - 55) / 3,
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