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
        idx: 0,
        page: 0,
        dataSource: [
            {id: 0,content: 'Hello World!!'},
            {id: 1,content: 'Hello World!!'},
            {id: 2,content: 'Hello World!!'},
            {id: 3,content: 'Hello World!!'},
            {id: 4,content: 'Hello World!!'},
            {id: 5,content: 'Hello World!!'},
            {id: 6,content: 'Hello World!!'},
            {id: 7,content: 'Hello World!!'},
            {id: 8,content: 'Hello World!!'},
            {id: 9,content: 'Hello World!!'},
            {id: 10,content: 'Hello World!!'}
        ],
        data: [
            {id: 0,content: 'Hello World!!'},
            {id: 1,content: 'Hello World!!'},
            {id: 2,content: 'Hello World!!'},
            {id: 3,content: 'Hello World!!'},
            {id: 4,content: 'Hello World!!'},
            {id: 5,content: 'Hello World!!'},
            {id: 6,content: 'Hello World!!'},
            {id: 7,content: 'Hello World!!'},
            {id: 8,content: 'Hello World!!'},
            {id: 9,content: 'Hello World!!'},
            {id: 10,content: 'Hello World!!'}
        ],
        noMoreData: null,
        isChangeTab: false
    },
    _clickTab: function(e){
        let isChangeTab = this.data.idx !== e.detail
        this.setData({
            idx: e.detail,
            isChangeTab: isChangeTab,
            page: isChangeTab ? 0 : this.data.page,
            data: isChangeTab ? this.data.dataSource : this.data.data
        })
    },
    _downLoad: function(){
        console.log("********")
        this.setData({
            page: 0,
            data: [].concat(this.data.dataSource)
        })
    },
    _upLoad: function(){
        if(this.data.page > 5){
            return
        }
        this.setData({
            page: this.data.page++,
            data: this.data.data.concat(this.data.dataSource)
        })
    }
})