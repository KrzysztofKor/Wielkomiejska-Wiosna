$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
    });
});

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})
//$('.koniec').on('click', function () {
//    $('body, html').animate({
//        scrollTop: $('.gal6').offset().top
//    }, 1200)
//})
$('.menu a').on('click', function () {
    //    console.log(this);
    //    console.log($(this).attr('class'));
    const moveToGal = '#' + $(this).attr('class')
    //    console.log(typeof moveToGal);
    $('body, html').animate({
        scrollTop: $(moveToGal).offset().top
    }, 1250)
})
