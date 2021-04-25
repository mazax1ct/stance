$(document).on('mouseenter', '.catalog-item__image-toggler', function () {
  $(this).parent('.catalog-item__image-togglers').find('.catalog-item__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.catalog-item__image-block').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.catalog-item__image-block').find('img').attr('setsrc', $(this).attr('data-setsrc'));
  return false;
});

function shadeClose(evt) {
  if (!$('.cart-add').is(evt.target) && $('.cart-add').has(evt.target).length === 0) {
    $('.shade').fadeOut();
    document.removeEventListener('click', shadeClose);
	}
}

$(document).on('click', '.js-add-cart', function () {
  $('.shade').fadeIn();
  document.addEventListener('click', shadeClose);
  return false;
});

$(document).on('click', '.js-cart-add-close', function () {
  $('.shade').fadeOut();
  document.removeEventListener('click', shadeClose);
  return false;
});
