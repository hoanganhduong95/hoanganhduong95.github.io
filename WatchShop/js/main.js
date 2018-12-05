// navbar

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
});

//back to top 

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

$('#button').click(function(){
  $('body, html').animate({scrollTop: 0}, 500);
  return false;
});




