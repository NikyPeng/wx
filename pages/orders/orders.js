/**
 * Created by glzc on 2018/3/23.
 */
Page({
    data: {
        tabs: [
            {id: 0, title: '待确认'},
            {id: 1, title: '进行中'},
            {id: 2, title: '已完成'}
        ],
        idx: 0
    },
    _clickTab: function(e){
        this.setData({
            idx: e.detail
        })
    }
})