
//scrool menu

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.main-menu').addClass('fixed');
    } else {
        $('.main-menu').removeClass('fixed');
    }
});

//back to top 

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

