// background.js
// chrome.webRequest.onCompleted.addListener(
//     function (details) {
//         console.info('查询已完成');
//
//         if (details.url =="https://garm.pt.xiaomi.com/api/workflow/dbquery/query?cluster=200711") {
//             console.info("查询语句执行结束,url="+ details.url);
//             if (details.statusCode == 200) {
//                 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//                     chrome.tabs.sendMessage(tabs[0].id, {action: "dataQueryDone"}, function(response) {});
//                 });
//
//             }
//
//         }
//     },
//
//     { urls: ["*://garm.pt.xiaomi.com/*"] }  //监听页面请求,你也可以通过*来匹配。
// );