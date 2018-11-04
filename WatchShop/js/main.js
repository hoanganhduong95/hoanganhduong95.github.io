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
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});




