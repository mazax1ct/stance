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
  return false;
});
