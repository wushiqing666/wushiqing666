$(document).ready(function() {
    $(".header .an").click(function() {
        $("html").addClass("on");

        $("body").addClass("on");

        $(".sj_bj").slideDown(0);

        $(".nav").find(".e_j").slideUp();

        $(this).addClass("n");
    });

    $(".sj_bj").click(function() {
        $(".header .an").removeClass("n");

        $(".sj_bj").slideUp(0);

        $("html").removeClass("on");

        $("body").removeClass("on");

        $(".nav").find(".e_j").slideUp();
    });

    $(".nav .y_j i").click(function() {
        $(this).parent(".y_j").siblings(".e_j").slideToggle();

        $(this).parents("li").siblings().find(".e_j").slideUp();
    });


    // 竞赛平台 导航
    $(document).scroll(function() {
        let nowSite = $(document).scrollTop();
        let documentHeight = $(window).height(); // 浏览器高度
        let positionHeight = $(".line_content").offset().top;
        let positionHei = $(".line_content").height();
        // nowSite > 1.5 * documentHeight
        // 	? $('.floating_window').fadeIn()
        // 	: $('.floating_window').fadeOut()
        if (nowSite > positionHeight + positionHei) {
            $(".line_content aside").fadeOut();
        } else if (nowSite > positionHeight - 300) {
            $(".line_content aside").fadeIn();
        } else {
            $(".line_content aside").fadeOut();
        }
    });


    // 首页精选文档
    $(".qh_t .bt:nth-child(1)").addClass("on");
    $(".xia_zg .nr:nth-child(1)").fadeIn();
    $(".qh_t .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".xia_zg .nr").eq(index).fadeIn(0).siblings().fadeOut(0);
    });


    // 首页 最新上传资源
    $(".zuo_tpi .bt:nth-child(1)").addClass("on");
    $(".you_shz .nei_nong:nth-child(1)").fadeIn();
    $(".zuo_tpi .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".you_shz .nei_nong").eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    // 首页 热门资源
    $(".y_qht .bt:nth-child(1)").addClass("on");
    $(".xia_rmzy .neir_rong:nth-child(1)").fadeIn();
    $(".y_qht .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".xia_rmzy .neir_rong").eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    // 首页 PPT
    $(".y_ppt .bt:nth-child(1)").addClass("on");
    $(".ppt_xia_nr .neir:nth-child(1)").fadeIn();
    $(".y_ppt .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".ppt_xia_nr .neir").eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    // 首页 优选
    $(".y_yxuan .bt:nth-child(1)").addClass("on");
    $(".yx_qhbod .neir2:nth-child(1)").fadeIn();
    $(".y_yxuan .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".yx_qhbod .neir2").eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    // 首页 友情链接
    $(".qhkat_yqlj .bt:nth-child(1)").addClass("on");
    $(".yqlj_qhbod .neir:nth-child(1)").fadeIn();
    $(".qhkat_yqlj .bt").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $(".yqlj_qhbod .neir").eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    $(".tabncxhua .xijie").click(function() {
        // $(this).siblings(".tan_shang").css({ "display": "block" });
        $(this).siblings(".tan_shang").slideDown();
    });

    $(".tan_shang .xiaoc").click(function() {
        // $(this).parent(".tan_shang").css({ "display": "none" });
        $(this).parent(".tan_shang").slideUp();
    });
    // 顶部轮播
    var swiper = new Swiper('.pc_ban', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        // effect: 'fade',

        navigation: {
            nextEl: '.pc_ban .swiper-button-next',
            prevEl: '.pc_ban .swiper-button-prev',
        },
        pagination: {
            el: '.pc_ban .swiper-pagination',
            clickable: true,
        },
    });
    //鼠标覆盖停止自动切换
    swiper.el.onmouseover = function() {
        swiper.autoplay.stop();
    }

    //鼠标离开开始自动切换
    swiper.el.onmouseout = function() {
        swiper.autoplay.start();
    }

    $(".e_m").click(function() {
        $(this).slideUp();
    });

    $(".header .s_ch").click(function() {
        $(".search").slideDown();

        $(".header .an").removeClass("n");

        $(".sj_bj").slideUp(0);

        $("html").removeClass("on");

        $("body").removeClass("on");

        $(".nav").find(".e_j").slideUp();
    });

    // 产品组合套装
    var swiper = new Swiper(".cp_tz_ban", {
        on: {
            init: function() {
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChangeTransitionEnd: function() {
                swiperAnimate(this);
            },
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,

        pagination: {
            el: ".cp_tz_ban .swiper-pagination",
            clickable: true,
        },
    });

    if ($(window).width() > 1024) {
        let containerwidth =
            (($(window).width() - $(".container").width()) / $(window).width()) * 100;

        let fenlei_xiawidth = ($(".fenlei_xia").width() / $(window).width()) * 100;
        $(".you_liebiao").css({
            width: 100 - containerwidth - fenlei_xiawidth + "vw",
        });
    }
    // 首页产品导航下拉
    if ($(window).width() < 1024) {
        // 三级
        $(".quanb_fl .dantiao").click(function() {
            $(this).children(".you_liebiao").slideToggle();
            $(this).find("em").toggleClass("on");
            // $(this).children('.you_liebiao').siblings("ul").children("li").slideDown();
        });
        // 二级
        $(".quanb_fl .biaot_cpfl").click(function() {
            $(this).siblings(".fenlei_xia").slideToggle();
            $(this).children("em").toggleClass("on");
            // $(this).children('.you_liebiao').siblings("ul").children("li").slideDown();
        });
    }

    $(".w_x").click(function() {
        $(".e_m .n_r").empty().append($(this).children('.yinc').html());
        $(".e_m").slideDown();


    });

    $(".e_m").click(function() {
        $(".e_m .n_r").empty();
        $(this).slideUp();
    });

    $(".fh").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
    // Sincoheren网站js
    let header_h = $(".header").height();
    $(".header_h").css("height", header_h);
    $(".search").css("top", header_h);
});

$(function() {
    //加的效果
    var i = $(".much").val();

    $(".much").bind("input propertychange", function() {
        i = $(this).val();
        // console.log(i);
    });
    $(".add").click(function() {
        i++;
        $(".much").val(i);
    });

    $(".reduce").click(function() {
        if (i > 0) {
            i--;
            $(".much").val(i);
        }
    });
});

$(window).scroll(function() {
    var top = $(window).scrollTop();
    var th = $(".header").height();
    console.log(th);

    if (top > th) {
        $(".header").addClass("on");
    } else {
        $(".header").removeClass("on");
    }
});

$(function() {
    var swiper = new Swiper(".mySwiper", {
        // loop: true,
        spaceBetween: 10,

        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 5,
            },
            1360: {
                slidesPerView: 5,
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        // loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        on: {
            slideChangeTransitionStart: function() {
                let imgSrc = $(".mySwiper .swiper-slide-thumb-active img").attr("src");
                console.log(imgSrc);
                $(".bigimg  img").attr("src", imgSrc);
                //   alert(this.activeIndex);
            },
        },
    });
    // 首页更多好物
    var swiper = new Swiper(".gd_ban", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".gd_ban .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            750: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 9,
            },
            1360: {
                slidesPerView: 6,
                spaceBetween: 9,
            },
        },
    });
});

// 内页二级下拉
$(document).ready(function() {
    var th = $(window).width();
    if (th < 767) {
        $(".yiji_bg").click(function() {
            // $(".cp_yiji ul li").slideToggle();

            if ($(this).siblings("ul").children("li").is(":hidden")) {
                $(this).siblings("ul").children("li").slideDown();
            } else {
                $(this).siblings("ul").children("li").slideUp();
            }
        });
    }
});