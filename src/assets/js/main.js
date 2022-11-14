console.log('%c Hello world! :)', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

function animateElements() {
  if ($('.animate').length > 0) {
    $('.animate').bind('inview', function (event, isInView) {
      if (isInView) {
        var animate = $(this).attr('data-animation');
        var speedDuration = $(this).attr('data-duration');
        var $t = $(this);
        setTimeout(function () {
          $t.addClass(animate + ' animated');
        }, speedDuration);
      }
    });
  }
}

$(document).ready(function () {
  mobileMenu();
  animateElements();
})


function mobileMenu() {
  if ($(window).width() < 992) {
    var menuTimeline = gsap.timeline({paused: true})
    menuTimeline.fromTo('.main-navigation', {autoAlpha: 0}, {autoAlpha: 1, duration: .2})
    menuTimeline.fromTo('.main-navigation-menu', {translateX: '-100%', duration: 0}, {translateX: '0%'})
    $(".mobile-menu-btn").click(function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        menuTimeline.play();
        $("body").addClass("overflow-hidden");
      } else {
        menuTimeline.reverse();
        $("body").removeClass("overflow-hidden");
      }
    })
  }
}
