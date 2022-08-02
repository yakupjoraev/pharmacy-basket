$('.slide-product__body').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

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