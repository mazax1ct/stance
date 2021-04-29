$(document).on('click', '.js-filter-opener', function () {
  $('.catalog__filter').addClass('is-open');
  $('body').addClass('menu-open');
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.catalog__filter').removeClass('is-open');
  $('body').removeClass('menu-open');
  return false;
});

$(document).on('click', '.js-catalog-section-toggler', function () {
  $(this).toggleClass('is-active');
  if($(this).hasClass('is-active')) {
    $(this).next('.catalog__filter-section-inner').slideDown();
  } else {
    $(this).next('.catalog__filter-section-inner').slideUp();
  }
  return false;
});
