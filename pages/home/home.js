/**
 * Created by glzc on 2018/3/23.
 */
Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
    },
    _makePhoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: '18510676740',
            success: function (res) {
                console.log('MakePhoneCall is Success!!', res)
            },
            fail: function (err) {
                console.log('MakePhoneCall is Fail!!', err)
            },
            complete: function () { //不管成功还是失败都会调用次方法
                console.log('MakePhoneCall is over!!')
            }
        })
    }
})