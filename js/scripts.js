var counts = []

var pingPong = function(inputNumber) {

  if (isNaN(inputNumber)) {
  alert("Please enter a number");
  }
  for (var i = 1; i <= inputNumber; i ++) {
    counts.push(i);
  }
 console.log(counts);
}






$(document).ready(function() {

  $('form#form1').submit(function(event) {
    event.preventDefault();
    var userNumber = Math.round(parseInt($('input#input').val()));
    pingPong(userNumber);
    // var result = pingPong(userNumber);
  });
});
  // $('ul#result').text(res);
