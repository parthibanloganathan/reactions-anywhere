$div = $("<div id='like-container'>");
var count = 1.1;
$div.html(
  "<div class='box' id='like-button'>" +
    "<input type='checkbox' id='like' class='field-reactions'>" +
    "<label for='like' class='label-reactions'>Like</label>" +
    "<label class='overlay' for='like'></label>" +
    "<button class='reaction-like'><span class='legend-reaction'>Like</span></button>" +
    "<button class='reaction-love'><span class='legend-reaction'>Love</span></button>" +
    "<button class='reaction-haha'><span class='legend-reaction'>Haha</span></button>" +
    "<button class='reaction-wow'><span class='legend-reaction'>Wow</span></button>" +
    "<button class='reaction-sad'><span class='legend-reaction'>Sad</span></button>" +
    "<button class='reaction-angry'><span class='legend-reaction'>Angry</span></button>" +
    "<p class='count_text'><span id='count'>" + count + "</span> billion people liked this Doodle!</p>" +
    "</div>");
  var $logo_div = $('#hplogo');
  $logo_div.append($div);

$(".reaction-love").click(function() {
  count = count + 0.1;
  print_count = count.toFixed(1).replace(/\.?0+$/, ""); 
  $('#count').text(print_count);
});

$(".reaction-haha").click(function() {
  count = count + 0.1;
  print_count = count.toFixed(1).replace(/\.?0+$/, ""); 
  $('#count').text(print_count);
});

$(".reaction-wow").click(function() {
  count = count + 0.1;
  print_count = count.toFixed(1).replace(/\.?0+$/, ""); 
  $('#count').text(print_count);
});

$(".reaction-sad").click(function() {
  count = count + 0.1;
  print_count = count.toFixed(1).replace(/\.?0+$/, ""); 
  $('#count').text(print_count);
});


$(".reaction-angry").click(function() {
  count = count + 0.1;
  print_count = count.toFixed(1).replace(/\.?0+$/, ""); 
  $('#count').text(print_count);
});
