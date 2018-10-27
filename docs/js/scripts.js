// Menu Toggle

function mobileMenu() {
   var mobileMenu = document.getElementById("mobile-nav");
   var hamBurger = document.getElementById("menu");

   mobileMenu.classList.toggle("is-open");
   hamBurger.classList.toggle("open");
}


// Menu Tab Fade in
$(function() {
  var taburl = window.location.href;
  if (taburl.indexOf('#') < 0) {
    $('[data-tab="featured"],[data-tab-button="featured"]').attr('id','active').fadeIn(300);
  }

  $('button.tab-nav-button').click(function() {
    var $content = $('[data-tab="' + $(this).attr('data-tab-button') +
      '"]');
    $('[data-tab]').each(function () {
      $(this).fadeOut(300);
    });
    setTimeout(function () {
      $content.fadeIn();
    }, 300);
    $(this).attr('id', 'active');
    $(this).siblings().removeAttr('id');
  });
});

// Nav Scroll bg color
$(document).ready(function(){
  var scrollTop;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop > 50) {
      $('.desktop-nav').addClass('scrolled-nav');
    } else if (scrollTop < 50) {
      $('.desktop-nav').removeClass('scrolled-nav');
    }
  });
});
