$(document).ready(function() {
  $(".header__hamburger").click(function() {
    $(".header__nav").addClass("header__nav--open");
  });

  $(".header__hamburger-inner").click(function() {
    $(".header__nav").removeClass("header__nav--open");
  });
});


$("html").click(function(e) {
    if($(e.target).closest(".header").length == 0)
      $(".header__nav").removeClass("header__nav--open");
});


