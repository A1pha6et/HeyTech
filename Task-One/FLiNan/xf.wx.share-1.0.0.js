
function xf_ju_wx_GetMetaInfo(metaTag, defaultValue) {
  try {
    var realValue = document.getElementsByTagName('meta');
    if (realValue.length == 0){
      return (typeof defaultValue != 'undefined') ? defaultValue : '';
    }
    var length = realValue.length;
    for (var i = 0; i < length; i++) {
      if (realValue[i].getAttribute('name') == metaTag){
        return realValue[i].getAttribute('content');
      }
    }
    return (typeof defaultValue != 'undefined') ? defaultValue : '';
  } catch (e) {
    return (typeof defaultValue != 'undefined') ? defaultValue : '';
  }
}
wx.config({ debug: false, appId: 'wxdd7c4f6a2021509b', timestamp: '1473155868', nonceStr: 'ae4915b2621540d1824a8b5f154ee952',
                    signature: '30575fc0529da53fa85a2ac35c7e7a9eff260633', 
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] });
wx.ready(function () {
    var defaultTitle = '搜房活动',defaultDesc = '搜房活动专题页',defaultImgType = '1',defaultImgUrl = 'http://newhouse.js.soufunimg.com/ju/WeChatFront/fang.png';
    var setTitle = xf_ju_wx_GetMetaInfo('xf_ju_wx_title', defaultTitle),setDesc = xf_ju_wx_GetMetaInfo('xf_ju_wx_desc', defaultDesc),setImgType = xf_ju_wx_GetMetaInfo('xf_ju_wx_imgType', defaultImgType);

    var setImgUrl = xf_ju_wx_GetMetaInfo('xf_ju_wx_imgUrl');
      if (setImgUrl != '') {
        if (setImgType == '1') {
          setImgUrl = setImgUrl;
        }
        else if (setImgType == '2') {
          var temphref = window.location.href;
          setImgUrl = window.location.href.substring(0, temphref.lastIndexOf('/') + 1) + setImgUrl;
        }
        else if (setImgType == '3') {}
      }
    else {
      setImgUrl = defaultImgUrl;
    }
    xf_media_wx_ShareConfig(setTitle,setDesc,location.href,setImgUrl);
 });
 function xf_media_wx_ShareConfig(title, desc, link, imgUrl) {
      wx.onMenuShareTimeline({ title: title, link: link, imgUrl: imgUrl });
      wx.onMenuShareAppMessage({ title: title, desc: desc, link: link, imgUrl: imgUrl });
      wx.onMenuShareQQ({ title: title, desc: desc, link: link, imgUrl: imgUrl });
      wx.onMenuShareWeibo({ title: title, desc: desc, link: link, imgUrl: imgUrl });
      wx.onMenuShareQZone({ title: title, desc: desc, link: link, imgUrl: imgUrl });
    }

 function xf_media_wx_ShareConfigCallback(title, desc, link, imgUrl,callbackSucc) {
      wx.onMenuShareTimeline({ title: title, link: link, imgUrl: imgUrl,success:callbackSucc });
      wx.onMenuShareAppMessage({ title: title, desc: desc, link: link, imgUrl: imgUrl,success:callbackSucc });
      wx.onMenuShareQQ({ title: title, desc: desc, link: link, imgUrl: imgUrl ,success:callbackSucc});
      wx.onMenuShareWeibo({ title: title, desc: desc, link: link, imgUrl: imgUrl ,success:callbackSucc});
      wx.onMenuShareQZone({ title: title, desc: desc, link: link, imgUrl: imgUrl ,success:callbackSucc});
    }
