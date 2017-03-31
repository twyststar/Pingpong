var counts = []
var newCounts = []
var pingPong = function(inputNumber) {

  if (isNaN(inputNumber)) {
  alert("Please enter a number");
  }

  for (var i = 1; i <= inputNumber; i ++) {
    counts.push(i);
  }

  for (var i = 1; i <= inputNumber; i ++) {

    if (i % 15 === 0) {
      newCounts.push("ping-pong");

    }else if (i % 5 === 0) {
      newCounts.push("pong");

    } else if (i % 3 === 0) {
      newCounts.push("ping");

    } else {
      newCounts.push(i);
    }

  }
    console.log(newCounts);
}






$(document).ready(function() {

  $('form#form1').submit(function(event) {
    event.preventDefault();
    var userNumber = Math.round(parseInt($('input#input').val()));
    // pingPong(userNumber);
   var result = pingPong(userNumber);
  });
});
  //  $('ul#result').text(result);
