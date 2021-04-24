$(document).ready(function() {
  $('.js-input-label .input').each(function( index ) {
    if($(this).val() != '') {
      $(this).parent('.js-input-label').addClass('focused');
    } else {
      $(this).parent('.js-input-label').removeClass('focused');
    }
  });
});

$('.js-input-label .input').on('blur', function () {
  if($(this).val() != '') {
    $(this).parent('.js-input-label').addClass('focused');
  } else {
    $(this).parent('.js-input-label').removeClass('focused');
  }
});
