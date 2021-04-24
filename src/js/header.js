function headerDropdownClose(evt) {
  if (!$('.header__menu-dropdown').is(evt.target) && $('.header__menu-dropdown').has(evt.target).length === 0) {
    $('body').removeClass('menu-open');

    $('.header__menu-dropdown').removeClass('is-open');

    $('.js-menu-toggler').removeClass('is-active').find('svg use').attr('xlink:href', '#burger');

    document.removeEventListener('click', headerDropdownClose);
	}
}

//главное меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')) {
    $('body').addClass('menu-open');
    $(this).find('svg use').attr('xlink:href', '#close');
    $('.header__menu-dropdown').addClass('is-open');

    document.addEventListener('click', headerDropdownClose);
  } else {
    $('body').removeClass('menu-open');
    $(this).find('svg use').attr('xlink:href', '#burger');
    $('.header__menu-dropdown').removeClass('is-open');

    document.removeEventListener('click', headerDropdownClose);
  }

  return false;
});
