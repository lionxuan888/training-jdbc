
// select * from scf_account_ctr.repayment_term limit 10 ;
    console.info('哈哈哈，哈哈哈，哈哈哈');
    console.info('4444');
    // $("#app").html("999");


    // 监听 ajax 请求
    $(document).ajaxComplete(function (e) {
        console.info("jquery ajax请求事件完成了！！");
        console.info("参数:" + arguments);
        console.info(arguments[1]);

        var url = arguments[2].url
            , details = arguments[1];
        console.info("ajax的请求url:" + url);
        // 没有返回数据 直接刷新
        if (details.responseText == "") {
            location.reload();
        }

        // 如果接口返回的 code 不是200 绝对没有成功 刷新
        if (url.indexOf("balance/assign") >= 0) {
            if (details.status == 504 || details.responseJSON.code == 200) {
                // 成功, 在rechargeHandler.js中监听这个事件
                var myEvent = new CustomEvent("rachangeOk")
                window.dispatchEvent(myEvent)
            }else{
                var time2 = setTimeout(() => {
                    // debugger
                    location.reload();
                }, 10000);
            }
        }
    });
