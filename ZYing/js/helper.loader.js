/***2017-11-16 19:12:00***/!function(){var e={addHandler:function(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}},n={loader:function(e,n){var t=document.createElement("script");t.type="text/javascript",t.charset="gb2312",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,t.parentNode.removeChild(t))}:t.onload=function(){t.parentNode.removeChild(t)};var o=this.callback(n);t.src=e+"callback=helper_publish."+o+"&_="+(new Date).getTime(),document.getElementsByTagName("head")[0].appendChild(t)},callback:function(e){var t;return"string"==typeof e&&""!==e?t=e:"function"==typeof e&&(t="callback"+(new Date).getTime()+"_"+Math.round(1e5*Math.random()),n[t]=e),t}};window.helper_publish=n,e.addHandler(window,"load",function(){function e(){if(!window.helper&&document.doctype){var e=document.createElement("script");e.type="text/javascript",e.src="http://cdn.leju.com/helper/js/helper.main.js",document.getElementsByTagName("head")[0].appendChild(e)}}if(window.cookie||(window.cookie=function(e,n,t){if(arguments.length>1&&"[object Object]"!==String(n)){if(null!==n&&void 0!==n||(t.expires=-1),"number"==typeof t.expires){var o=t.expires,a=t.expires=new Date;a.setDate(a.getDate()+o)}return n=String(n),document.cookie=[encodeURIComponent(e),"=",t.raw?n:encodeURIComponent(n),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}t=n||{};var r,i=t.raw?function(e){return e}:decodeURIComponent;return(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?i(r[1]):null}),cookie("admin_permit"))e();else if(/(jiaju)/.test(location.host))n.loader("http://s.pub.leju.com/api/dochelper/getuseradminpermit?",function(n){if(n.status){var t="";for(var o in n.params.admin_permit)t+=n.params.admin_permit[o];e()}});else{var t=helperCount=0;document.onkeypress=function(n){var o,n=n||window.event;null==n.which?o=String.fromCharCode(n.keyCode):0!=n.which&&0!=n.charCode&&(o=String.fromCharCode(n.which)),"h"===o?(helperCount+=1,t||(t=window.setTimeout(function(){window.console&&window.console.log(helperCount),helperCount>30&&e()},2e3))):(document.onkeypress=null,t&&window.clearTimeout(t))}}})}();