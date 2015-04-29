// @koala-prepend "jquery-1.8.3.min.js"
// @koala-append "jquery.queryloader2.js"
// @koala-append "BaseUtil.min.js"
// @koala-append "UserAgent.js"
// @koala-append "underscore-min.js"
// @koala-append "backbone-min.js"
// @koala-append "greensock/TweenMax.js"
// @koala-append "purl.js"
//
//   █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
// ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
// ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
// ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
// ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
//  ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
//  ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
//  ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
//           ░     ░ ░      ░  ░
//   
$(document).ready(function () {
    console.log("ready!!!");
    var styles = ['background: linear-gradient(#D33106, #571402)',
                  'font-family: "微軟正黑體", "Microsoft JhengHei", "新細明體", "PMingLiU", AppleGothic, Dotum, Lucida Grande, Verdana Sans-serif',
                  'border: 1px solid #3E0E02',
                  'color: white',
                  'font-size:35px',
                  'display: block',
                  'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
                  'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
                  'line-height: 40px',
                  'text-align: center',
                  'font-weight: bold'].join(';');
    console.log('%c 請不要這樣', styles);

    //var _someView=new APP.SomeView();
    $("#send_btn").click(function () {
        console.log("click")
        
        //新增
        $.ajax({
            type: "POST",
            url: "http://localhost:1337/sleep",
            dataType: "json",
            data:{name:"george",age:5},
            success: function (data, status, jqXHR) {
                console.log("success data:", data);
                console.log("success status:", status);
                console.log("success jqXHR:", jqXHR);
                if (status == "success") {

                }

                if (jqXHR.status == "200") {

                }
            },
            error: function (jqXHR, status) {
                console.log("err status:", status);
                console.log("err jqXHR:", jqXHR);
                console.log("err jqXHR.status:", jqXHR.status);
            }
        });
        /*
        //查詢
        $.ajax({
            type: "GET",
            url: "http://localhost:1337/sleep/9",
            dataType: "json",
            success: function (data, status, jqXHR) {
                console.log("success data:", data);
                console.log("success status:", status);
                console.log("success jqXHR:", jqXHR);
                if (status == "success") {

                }

                if (jqXHR.status == "200") {

                }
            },
            error: function (jqXHR, status) {
                console.log("err status:", status);
                console.log("err jqXHR:", jqXHR);
                console.log("err jqXHR.status:", jqXHR.status);
            }
        });
        //修改
        $.ajax({
            type: "PUT",
            url: "http://localhost:1337/sleep/9",
            dataType: "json",
            data:{name:"george王",age:15},
            success: function (data, status, jqXHR) {
                console.log("success data:", data);
                console.log("success status:", status);
                console.log("success jqXHR:", jqXHR);
                if (status == "success") {

                }

                if (jqXHR.status == "200") {

                }
            },
            error: function (jqXHR, status) {
                console.log("err status:", status);
                console.log("err jqXHR:", jqXHR);
                console.log("err jqXHR.status:", jqXHR.status);
            }
        });
        //刪除
        $.ajax({
            type: "DELETE",
            url: "http://localhost:1337/sleep/1",
            dataType: "json",
            success: function (data, status, jqXHR) {
                console.log("success data:", data);
                console.log("success status:", status);
                console.log("success jqXHR:", jqXHR);
                if (status == "success") {

                }

                if (jqXHR.status == "200") {

                }
            },
            error: function (jqXHR, status) {
                console.log("err status:", status);
                console.log("err jqXHR:", jqXHR);
                console.log("err jqXHR.status:", jqXHR.status);
            }
        });
        */

    });


    /*----------------------------------------------------------
        ga
    ----------------------------------------------------------*/
    /*
    ga
    click event
    ga('send', 'event', 'button', 'click', '/menubar_1');
    
    page view
    ga('send', 'pageview', '/free_movie_page.html');
    */


    /*----------------------------------------------------------
        facebook init
    ----------------------------------------------------------*/
    $.ajaxSetup({
        cache: true
    });

    $.getScript('//connect.facebook.net/zh_TW/all.js', function () {
        FB.init({
            appId: '931417113576201',
            status: true,
            cookie: true,
            xfbml: true
        });
        // In your onload method
        FB.Event.subscribe('auth.login', authLoginHandler);
        FB.Event.subscribe('auth.authResponseChanged', authResponseChangedHandler);
    });

    function authResponseChangedHandler(response) {

        //console.log("authResponseChangedHandler");
        //console.log(response);
    }

    function authLoginHandler(response) {
        //console.log("authLoginHandler");
        //console.log(response);
    }

    /*----------------------------------------------------------
        facebook getPic
    ----------------------------------------------------------*/
    function getPic() {

        FB.api(
            "/me/picture", {
                "redirect": true,
                "height": "200",
                "type": "large",
                "width": "200"
            },
            function (response) {
                if (!response || response.error) {
                    //console.log(response);
                } else {
                    $("#fb_pic").attr("src", response.data.url);
                    //console.log(response);
                }
            }
        );
    }

    /*----------------------------------------------------------
        facebook apprequests
    ----------------------------------------------------------*/
    function apprequests() {
        //要玩過此API的朋友才可邀請
        FB.ui({
            method: 'apprequests',
            message: '快來！快來呀！'
        }, function (response) {
            //console.log(response);
        });
    }

    function share() {
        //手機 pc ok
        FB.ui({
                method: 'share',
                href: 'https://www.youtube.com/watch?v=mGQLXRTl3Z0',
            },
            function (response) {
                if (response && !response.error_code) {
                    //console.log(response);
                } else {
                    //console.log(response);
                }
            }
        );
    }

    /*----------------------------------------------------------
        facebook share
    ----------------------------------------------------------*/
    function share() {

        FB.ui({
                method: 'share',
                href: 'https://www.youtube.com/watch?v=mGQLXRTl3Z0',
            },
            function (response) {
                if (response && !response.error_code) {
                    //console.log(response);
                } else {
                    //console.log(response);
                }
            }
        );
    }

    /*----------------------------------------------------------
        facebook send
    ----------------------------------------------------------*/
    function send() {
        //手機 don't work
        FB.ui({
            method: 'send',
            link: 'https://www.youtube.com/watch?v=mGQLXRTl3Z0',
        });
    }
});