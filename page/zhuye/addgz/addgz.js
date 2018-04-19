// page/zhuye/addgz/addgz.js
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    scNameClick: function(event) {
        var name = event.currentTarget.dataset.name;
        console.log(name);

        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1]; //当前页面
        var prevPage = pages[pages.length - 2]; //上一个页面
        console.log(prevPage.data.listItem)

        var scmap = {
            id: "11",
            imgSrc: "../../../image/sc/11.jpg",
            name: "土豆",
            state: 0,
        }
        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
            listItem: prevPage.data.listItem.concat(scmap)
        })

        wx.navigateBack();
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