

$(document).ready(function() {
  


  $('.header__toggler').click(function() {
    $(this).toggleClass('header__toggler--active');
    $('.navbar').slideToggle()
  })

  $('select').niceSelect();
  $('#opt-tabs-1').tabs();
  $('#opt-tabs-2').tabs();
  $('#main-tabs-mobile').tabs();

  $('#item-slider-1').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#item-slider-2').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#tab-slider-1').slick({
    slidesToShow: 5,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#tab-slider-2').slick({
    slidesToShow: 5,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#tab-slider-3').slick({
    slidesToShow: 5,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#model-slider-1').slick({
    slidesToShow: 5,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#item-page-slider-1').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#item-page-slider-2').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#item-page-slider-3').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('#model-slider-2').slick({
    slidesToShow: 6,
    nextArrow: '<a href="javascript://" class="slider-arrow slider-arrow--next"><span class="icon-chevron-drop"></span></a>',
    prevArrow: '<a href="javascript://" class="slider-arrow slider-arrow--prev"><span class="icon-chevron-drop"></span></a>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })

  $('.priceSelect__slider').slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true
  })

  $('.popup-brands__tabBlock').tabs()

  $('.popup-brands').tabs();

  $('.brand-filter-btn').click(() => {
    $('.popups').addClass('popups--show', function(){
      // $('.popups').click(function(e) {
      //   if (!(e.target.class === 'popup-brands')) {
      //     $('.popups').removeClass('popups--show')                    
      //   }
      // });
    })
    
  },)

  $('#brand-filter-hide').click(() => {
    $('.popups').removeClass('popups--show')
  })


  $('.variantBlock__body').tabs();
  
  $('.bottomTabs').tabs();

  $('.tabSlider__body').tabs();

})  