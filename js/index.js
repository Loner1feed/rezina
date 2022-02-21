

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

})  