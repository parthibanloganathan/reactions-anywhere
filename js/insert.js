var div = $('<div>');
$div.load('../html/reactions.html #reactions-div', function() {});
var logo_div = $('#hplogo');
logo_div.append(div);
console.log("inserted");
