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

  $('header').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 25;
    var y = -(e.pageY + this.offsetTop) / 25;
    $(this).css('background-position', x + 'px ' + y + 'px');
  });
});
