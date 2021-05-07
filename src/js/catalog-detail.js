$(document).on('click', '.js-tab-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.catalog-detail__tab-inner').slideToggle('300', function () {
    $(this).toggleClass('is-active');
  });
  $('.catalog-detail__tab').removeClass('is-active');
  $(this).parent('.catalog-detail__tab').addClass('is-active');
  return false;
});

$(document).on('click', '.js-tab-nav', function () {
  $('.js-tab-nav').removeClass('is-active');
  $(this).addClass('is-active');
  $('.catalog-detail__tab').removeClass('is-active');
  $('.catalog-detail__tab[data-target="'+$(this).attr('href').substring(1)+'"]').addClass('is-active');

  $(".js-sticky-block").trigger("sticky_kit:recalc");
  return false;
});

$(document).ready(function() {
  if($('.js-detail-slider').length) {
    $('.js-detail-slider').slick({
      arrows: true,
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-detail-thumbs',
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_prev"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_next"/></svg></button>',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false
          }
        }
      ]
    });
  }

  if($('.js-detail-thumbs').length) {
    $('.js-detail-thumbs').slick({
      arrows: false,
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-detail-slider',
      focusOnSelect: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1023,
          settings: {
            vertical: true,
            centerMode: false,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 120
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

window.addEventListener("orientationchange", function() {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").stick_in_parent({
      offset_top: 120
    });
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});
