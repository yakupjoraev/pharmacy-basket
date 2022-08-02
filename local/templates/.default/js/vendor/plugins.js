$(window).on('load', function () {
    if ($(".slider_banner:not(.slider_banner_main)").length>0)
    {
        $(".slider_banner:not(.slider_banner_main)").slick({
            infinite: !0,
            pauseOnDotsHover: !1,
            dots: !0,
            autoplay: !0,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            adaptiveWidth: !0,
            prevArrow: '<div class="arrow prev"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            nextArrow: '<div class="arrow next"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
        });
    }

    if ($(".slider_breeder .slider").length>0)
    {
        $(".slider_breeder .slider").slick({
            infinite: !0,
            pauseOnDotsHover: !1,
            dots: !1,
            autoplay: !0,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            adaptiveWidth: !0,
            arrows: !1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }]
        });
    }

    if ($(".slider_preview_recall .slider").length>0)
    {
        $(".slider_preview_recall .slider").slick({
            infinite: !0,
            pauseOnDotsHover: !1,
            dots: !1,
            fade: !0,
            autoplay: !0,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            adaptiveWidth: !0,
            prevArrow: '<div class="arrow prev"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            nextArrow: '<div class="arrow next"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
        });
    }

    if ($(".slider_product_preview-js").length > 0) {
        $('.slider_product_preview-js').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider_product_preview-nav'
        });
    }
        
        
    if ($(".slider_product_preview-nav-js").length > 0) {
        $('.slider_product_preview-nav-js').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider_product_preview',
            arrows: true,
            prevArrow: '<div class="arrow prev"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            nextArrow: '<div class="arrow next"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            dots: false,
            focusOnSelect: true
        });
    }

    if ($(".slider_viewed_need").length>0)
    {
        $(".slider_viewed_need").slick({
            infinite: !0,
            pauseOnDotsHover: !1,
            dots: !1,
            autoplay: !0,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            adaptiveWidth: !0,
            prevArrow: '<div class="arrow prev"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            nextArrow: '<div class="arrow next"><i class="fa fa-chevron" aria-hidden="true"></i></div>',
            responsive: [{
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                }
            },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }]
        });
    }

    if ($(".karera-slider .slider").length>0)
    {
        $('.karera-slider .slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            prevArrow: '<div class="arrow prev slick-arrow"></div>',
            nextArrow: '<div class="arrow next slick-arrow"></div>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });
    }

    /*-----------------------------------------------------*/
    /* FANCYBOX */
    /*-----------------------------------------------------*/
    $('[data-fancybox]').click(function(){
    	$.fancybox.close();
    });

    $("header .catalog ul, .city_list .block_js, .filter .block .list_js").mCustomScrollbar({
        theme: "dark",
    });

    if ($(".phone").length > 0)
    {
        $('.phone').mask('+7 000 000 00 00', {
            placeholder: '+7 ___ ___ __ __',
            onKeyPress: function(line, event, currentField, options)
            {
                var arLine,key,updateLine = false;
        
                line = line.replace(/[^+\d]/g, '');
                arLine = line.split('');
                if(arLine.length)
                {
                    for(key in arLine)
                    {
                        if(key <= 2 && arLine[key] == 8)
                        {
                            updateLine = true;
                            arLine[key] = '';
                            break;
                        }
                    }
                }
        
                if(updateLine)
                {
                    line = '';
                    arLine = arLine.filter(element => element !== '');
                    
                    for(key in arLine)
                    {
                        line += arLine[key];
                        if(key == 1 || key == 4 || key == 7 || key == 9)
                            line += ' ';
                    }
        
                    event.target.value = line;
                }  
            }
        });
    }

    if ($(".numberCard").length>0)
    {
        $('.numberCard').mask('0000-0000-0000-0000', {});
    }

    if ($(".datepicker-here").length>0)
    {
        $('.datepicker-here').datepicker({
            autoClose: true
        });
    }

});

