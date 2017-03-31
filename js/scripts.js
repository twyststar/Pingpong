//Business Logic
var counts = []
var changedCounts = []
var pingPong = function(inputNumber) {

  if (isNaN(inputNumber)) {
  alert("Please enter a number");
  }

  for (var i = 1; i <= inputNumber; i ++) {
    counts.push(i);
  }

  for (var i = 1; i <= inputNumber; i ++) {

    if (i % 15 === 0) {
      changedCounts.push("ping-pong");

    }else if (i % 5 === 0) {
      changedCounts.push("pong");

    } else if (i % 3 === 0) {
      changedCounts.push("ping");

    } else {
      changedCounts.push(i);
    }

  }
    return changedCounts;
}

//UI logic
$(document).ready(function() {

  $('form#form1').submit(function(event) {
    event.preventDefault();
    var userNumber = Math.round(parseInt($('input#input').val()));
    // pingPong(userNumber);
   var result = pingPong(userNumber);
   $('ul#result').append("<li>" + result);
   console.log(typeof result);
  });
});
