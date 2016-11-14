$(function() {
  $('.github').mouseenter(function() {
    $('.github').addClass('animated tada');
  });

  $('.github').mouseleave(function() {
    $('.github').removeClass('animated tada');
  });

  $('.email').mouseenter(function() {
    $('.email').addClass('animated tada');
  });

  $('.email').mouseleave(function() {
    $('.email').removeClass('animated tada');
  });

  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("header").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('header').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
});
