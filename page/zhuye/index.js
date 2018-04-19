// page/zhuye/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        slider: [{
            picUrl: '../../image/sc/11.jpg',
        }, {
            picUrl: '../../image/sc/12.jpg',
        }, {
            picUrl: '../../image/sc/13.jpg',
        }],
        swiperCurrent: 0,
        listItem: [{
            id: "11",
            imgSrc: "../../image/sc/11.jpg",
            name: "土豆",
            time: "2018-4-16",
            market: "云南通海金山蔬菜批发市场",
            price: "5元/kg"
        }, {
            id: "12",
            imgSrc: "../../image/sc/12.jpg",
            name: "花菜",
            time: "2018-4-16",
            market: "云南通海金山蔬菜批发市场",
            price: "5元/kg"
        }, {
            id: "12",
            imgSrc: "../../image/sc/13.jpg",
            name: "西兰花",
            time: "2018-4-16",
            market: "云南通海金山蔬菜批发市场",
            price: "5元/kg"
        }],

    },

    //轮播图的切换事件
    swiperChange: function(e) {
        //只要把切换后当前的index传给<swiper>组件的current属性即可
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    //点击指示点切换
    chuangEvent: function(e) {
        this.setData({
            swiperCurrent: e.currentTarget.id
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