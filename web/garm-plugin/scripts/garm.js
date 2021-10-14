    // select * from scf_account_ctr.repayment_term limit 10 ;
    console.info('哈哈哈，哈哈哈，哈哈哈');
    console.info('4444');
    // $("#app").html("999");
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    setTimeout(function () {
        console.info("开始执行渲染。。。。。")
        var transformButton = "<button id=\"transformTime\" class='el-button  el-button--warning el-button--mini' style='float:right'>时间戳转换</button>";
        var $transformButton = $(transformButton);
        var resultPanel = $("#show-result-panel") ;
        console.info("panel:" + resultPanel.html());
        var $elButtonGroup = $("#show-result-panel").find(".el-button-group");
        console.info("button的内容:" + $elButtonGroup.html());
        $transformButton.insertAfter($elButtonGroup);

        $transformButton.on("click", function(){
            // alert( 'done' );
            doTransformTime();
        });

    }, 2000);

    function doTransformTime() {
        console.info("开始执行转换方法时间戳方法。。。")
        // 获取所有的表头，然后迭代，找出带后缀带time的字段，然后匹配修改后续对应的所有的tr数据。
        var $thsOfTableHead = $(".show-result  .head_wrap .el-table__head .cell");
        var i = 0;
        $(".transformTimeSpan").remove();
        $(".trContentSpan").show();

        // 如何循环一个jquery对象，在循环里面如何使用。
        $thsOfTableHead.each(function (index) {
            var $column = $(this);
            var columnName = $column.html();
            console.info("列的名称是：" + $column.html());
            // todo 把需要修改的这一列改成红丝的。
            // todo 判断后缀是否是以time或者date结尾
            var colunIndex = index;
            // if (columnName.endsWith("pay_start_time")){
            if (columnName.endsWith("time") || columnName.endsWith("date")) {
                // todo 查找后面所有的tr的内容，然后进行格式化。
                var $trsOfTableBody = $(".show-result  .el-table__body").find("tr");
                // 循环处理每一行
                $trsOfTableBody.each(function (trIndex) {
                    // 注意这里需要用$包装一下转换成jquery对象。
                    let $tr = $($trsOfTableBody[trIndex]);
                    let $td = $($tr.children().get(colunIndex));
                    var $trContentSpanWrapper = $td.find("span").first();
                    var trContent = $trContentSpanWrapper.html();
                    console.info("时间内容："+ trContent);
                    // 判断是否为整型
                    if (!trContent.startsWith("<span") && trContent != null && trContent != '0' && trContent != 'NULL' && trContent != '' && trContent != ' ') {
                        // todo 整型时间格式话
                        var formatTime = new Date(parseFloat(trContent)).format("yyyy-MM-dd hh:mm:ss");
                        $trContentSpanWrapper.after("<span class=\"transformTimeSpan\">" + formatTime + "</span>");
                        $trContentSpanWrapper.addClass("trContentSpan")
                        $trContentSpanWrapper.hide();
                        // $trContentSpanWrapper.html(formatTime);
                        // var $tranformSpan = $("<span class=\"transformTimeSpan\">转换</span>&nbsp&nbsp");
                    }

                });
            }
            i++;
        });
        console.info("列循环完毕：" + i);
    }


    //
    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //     console.log("收到ajax查询完成的事件消息33:" + message);
    //     // 获取所有的表头，然后迭代，找出带后缀带time的字段，然后匹配修改后续对应的所有的tr数据。
    //     var $thsOfTableHead = $(".show-result  .head_wrap .el-table__head .cell");
    //     var i = 0;
    //     // 如何循环一个jquery对象，在循环里面如何使用。
    //     $thsOfTableHead.each(function (index) {
    //         var $column = $(this);
    //         var columnName = $column.html();
    //         console.info("列的名称是：" + $column.html());
    //         // todo 把需要修改的这一列改成红丝的。
    //         // todo 判断后缀是否是以time或者date结尾
    //         var colunIndex = index;
    //         if (columnName.endsWith("time") || columnName.endsWith("date")) {
    //             // todo 查找后面所有的tr的内容，然后进行格式化。
    //             var $trsOfTableBody = $(".show-result  .el-table__body").find("tr");
    //             // 循环处理每一行
    //             $trsOfTableBody.each(function (trIndex) {
    //                 // 注意这里需要用$包装一下转换成jquery对象。
    //                 let $tr = $($trsOfTableBody[trIndex]);
    //                 let $td = $($tr.children().get(colunIndex));
    //                 var $trContentSpanWrapper = $td.find("span").first();
    //                 var trContent = $trContentSpanWrapper.html();
    //                 // console.info("时间内容："+ trContent);
    //                 // 判断是否为整型
    //                 if (!trContent.startsWith("<span") && trContent != null && trContent != '0' && trContent != 'NULL' && trContent != '' && trContent != ' ') {
    //                     // todo 整型时间格式话
    //                     var formatTime = new Date(parseFloat(trContent)).format("yyyy-MM-dd hh:mm:ss");
    //                     $trContentSpanWrapper.html(formatTime);
    //                 }
    //
    //             });
    //         }
    //         i++;
    //     });
    //     console.info("列循环完毕：" + i);
    //     setTimeout(function () {
    //         sendResponse({status: true});
    //     }, 1);
    //     return true;
    // });

    // // 监听 ajax 请求
    // $(document).ajaxComplete(function (e) {
    //     console.info("jquery ajax请求事件完成了！！");
    //     console.info("参数:" + arguments);
    //     console.info(arguments[1]);
    //
    //     var url = arguments[2].url
    //         , details = arguments[1];
    //     console.info("ajax的请求url:" + url);
    //     // 没有返回数据 直接刷新
    //     if (details.responseText == "") {
    //         location.reload();
    //     }
    //
    //     // 如果接口返回的 code 不是200 绝对没有成功 刷新
    //     if (url.indexOf("balance/assign") >= 0) {
    //         if (details.status == 504 || details.responseJSON.code == 200) {
    //             // 成功, 在rechargeHandler.js中监听这个事件
    //             var myEvent = new CustomEvent("rachangeOk")
    //             window.dispatchEvent(myEvent)
    //         } else {
    //             var time2 = setTimeout(() => {
    //                 // debugger
    //                 location.reload();
    //             }, 10000);
    //         }
    //     }
    // });
