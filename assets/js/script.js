/*

  using 
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge blend mode

  this could be enhanced with some 3d effects
  which change the background positions
  
*/

var $cards = $(".tarjeta");
var $style = $(".hover");
$cards.on("mousemove", function(e) {
  var $card = $(this);
  var l = e.offsetX;
  var t = e.offsetY;
  var h = $card.height();
  var w = $card.width();
  var lp = Math.abs(Math.floor(100 / w * l)-100);
  var tp = Math.abs(Math.floor(100 / h * t)-100);
  var bg = `background-position: ${lp}% ${tp}%;`
  var style = `.tarjeta.active:before { ${bg} }`
  $cards.removeClass("active");
  $card.addClass("active");
  $style.html(style);
}).on("mouseout", function() {
  $cards.removeClass("active");
});