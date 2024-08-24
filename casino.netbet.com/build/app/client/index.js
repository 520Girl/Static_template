$(document).ready(function () {

    // var currentScroll = 0
    function disabledEle(that, Ele = "right") {
        if (Ele == "right") {
            that.find('.z1AOhaK99cp0j5CjkD9K i').prop('disabled', true);
            that.find('.z1AOhaK99cp0j5CjkD9K').prop('disabled', true);
            that.find('.z1AOhaK99cp0j5CjkD9K').css('cursor', 'not-allowed');
            that.find('.z1AOhaK99cp0j5CjkD9K i').css('cursor', 'not-allowed');
        } else {
            that.find('.XchIlJA_sW5h53iZX4eQ i').prop('disabled', true);
            that.find('.XchIlJA_sW5h53iZX4eQ').prop('disabled', true);
            that.find('.XchIlJA_sW5h53iZX4eQ').css('cursor', 'not-allowed');
            that.find('.XchIlJA_sW5h53iZX4eQ i').css('cursor', 'not-allowed');
        }
    }

    //显示left right 图标高亮显示
    function leftRightIcon() {
        $('.CoWWEeYMx2XDEmxk9Xbd').each(function () {
            const childWidth = $(this).find('.YL4n3cLSUh_mZz1cZ474').width();
            const parentWidth = $('.MWXSfnlNJCFiohJBvgmt').width();
            $(this).find('.z1AOhaK99cp0j5CjkD9K i').css('color', 'white')
            $(this).find('.XchIlJA_sW5h53iZX4eQ i').css({ color: 'white', opacity: 1 })
            $(this).find('.TVr9fehWzzOKnhyq_tMw_right').css({ color: 'white', opacity: 1 })
            $(this).find('.TVr9fehWzzOKnhyq_tMw_left').css({ color: 'white', opacity: 1 })
        })
    }
    leftRightIcon()
    //点击事件 游戏列表
    function clickButtonLeftRight(mainEle='.CoWWEeYMx2XDEmxk9Xbd',childEle='.YL4n3cLSUh_mZz1cZ474', parentEle='.MWXSfnlNJCFiohJBvgmt',leftButton='.XchIlJA_sW5h53iZX4eQ',rightButton='.z1AOhaK99cp0j5CjkD9K') {
        $(mainEle).each(function () {
            const child = $(this).find(childEle);
            const childWidth = child.outerWidth(true);
            const parent = $(this).find(parentEle);
            const parentWidth = parent.outerWidth(true);
           
            var currentScroll = 0
            //right
            $(this).find(rightButton).on('click', function () {
                console.log(child)
                console.log(childWidth, parentWidth,rightButton)
                if ((childWidth - parentWidth) > parentWidth) {
                    currentScroll = currentScroll + parentWidth
                } else {
                    if (childWidth > currentScroll + parentWidth) {
                        currentScroll = currentScroll + (childWidth - parentWidth)
                    }
                }
                child.each(function () {
                    console.log( ' $(this)',$(this),currentScroll)
                    $(this).css('transform', 'translateX(-' + currentScroll + 'px)')
                })
                // console.log(currentScroll)
            })
            //left

            $(this).find(leftButton).css('pointer-events', 'auto')
            $(this).find(leftButton).on('click', function () {
                // console.log(currentScroll, childWidth, parentWidth)
                if (currentScroll > 0) {
                    if (currentScroll >= parentWidth) {
                        currentScroll = currentScroll - parentWidth
                    } else {
                        currentScroll = 0
                    }
                }
                child.each(function () {
                    $(this).css('transform', 'translateX(-' + currentScroll + 'px)')
                })

            })
        })
    }
    clickButtonLeftRight()

    //点击nav
    clickButtonLeftRight('.ZT6LYdUv7lk4tvUNaN7Y','.navSliderContent','.MWXSfnlNJCFiohJBvgmt','.TVr9fehWzzOKnhyq_tMw_left','.TVr9fehWzzOKnhyq_tMw_right')

    //轮播图滚动起来
    var currentSlideIndex = 0
    function slider() {
        function updateSlides() {
            // console.log(9999);
            $('.pLHEBWJhAKasbsmD0tsw .slick-list .slick-slide').each(function (index, element) {
                if (index == currentSlideIndex) {
                    $(element).addClass('slick-active slick-center slick-current');
                    $(element).css('opacity', 1);
                    // console.log(index, currentSlideIndex);
                } else {
                    $(element).removeClass('slick-active slick-center slick-current');
                    $(element).css('opacity', 0);
                }
            });
            $('.pLHEBWJhAKasbsmD0tsw .slick-slider .slick-dots li').each(function (index, element) {
                if (index == currentSlideIndex) {
                    $(element).addClass('slick-active');
                } else {
                    $(element).removeClass('slick-active');
                }
            });
            currentSlideIndex = currentSlideIndex >= 2 ? 0 : currentSlideIndex + 1;
        }
    
        // 启动定时器前先执行一次
        updateSlides();

        const Timer = setInterval(updateSlides, 2500);
        return Timer;
    }

    var Timer = slider()
    //点击轮播图时切换按钮
    $('.pLHEBWJhAKasbsmD0tsw .slick-slider .slick-dots li').each(function (index, element) {
        $(this).click(function () {
            $(this).addClass('slick-active')
            currentSlideIndex = index
            clearInterval(Timer)
            Timer = slider()
        })
    })

    //点击关闭注册
    $('.AVyQ9YTfIfrd_3vFYywL').click(function () {
        $('.register').hide()
    })
    //点击显示
    $('#uidt-sign-up-register').click(function () {
            $('.LISBaKDCQUT1oM5QeqjR.mqPOXvVCbmWJwRE3Mqmm.register').show()
    })
    //登录 
    $('.AVyQ9YTfIfrd_3vFYywL').click(function () {
        $('.login').hide()
    })
    $('#uidt-login').click(function () {
        $('.login').show()
    })
    //search
    $('.sefgopi0eyNdAC9iXEak').click(function () {
        $('.GTfOoFr6T9g36TueXqAC').hide()
    })
    $('.search-button').click(function () {
        $('.GTfOoFr6T9g36TueXqAC').show()
    })
    //promotions 点击过滤元素
    // const eleClass={
    //     all:'',
    //     purple:'WELCOME OFFER',
    //     orange:'LOYALTY REWARDS',
    //     blue:'MYSTERY PRIZE',
        
    // }
    $('.OMAWxQ1pymow77jADcoq .F4iBlASNjaKLTj7Q3heg').each(function(index,element){
        $(element).click(function(){
            $(this).find('.YPyWtisz1so9d4jyf47s').addClass('EaLj3z2_915OtStrHVCC')
            //text
            var text = $(this).text();
            $('.NaqyDkgKZE6KBrQVbcrc').each(function(index2,element2){
                console.log($(element2).find('._24M2MSoPPqrhv60UG2gy').text() == text,text)
                if($(element2).find('._24M2MSoPPqrhv60UG2gy').text() != text){
                    $(element2).hide()
                }else{
                    $(element2).show()
                }
            })

            $('.OMAWxQ1pymow77jADcoq .F4iBlASNjaKLTj7Q3heg').each(function(index1,element1){
                if(index!=index1){
                    $(element1).find('.YPyWtisz1so9d4jyf47s').removeClass('EaLj3z2_915OtStrHVCC')
                }
            })
        })
    })

    //setting
    $('#didomi-notice-agree-button').click(function(){
        // 选择所有 ID 为 'didomi-host' 的元素
        $('[id="didomi-host"]').each(function() {
            // 对每个选中的元素执行操作
            $(this).remove(); // 示例操作：移除元素
        });

    })
    //点击调准啊slots
    $('#uidt_nav_cashier').click(function(){
        window.location.href = '/slots.html'
    })
});
