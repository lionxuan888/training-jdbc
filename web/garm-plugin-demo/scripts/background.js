// background.js
chrome.webRequest.onCompleted.addListener(
    function (details) {
        console.info('查询已完成');
        if (details.statusCode == 200) {
            sendMessageTo("fillingPass", details.tabId, (e) => {
                console.log('查询已完成');
            })
        }
    },

    { urls: ["*://garm.pt.xiaomi.com/*"] }  //监听页面请求,你也可以通过*来匹配。
);