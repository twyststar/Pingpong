var counts = []
var newCounts = []
var pingPong = function(inputNumber) {

  if (isNaN(inputNumber)) {
  alert("Please enter a number");
  }
  for (var i = 1; i <= inputNumber; i ++) {
    counts.push(i);
  }

      // counts.slice(, 1, "ping");
    // });

  for (var i = 1; i <= inputNumber; i ++) {
    if (i % 3 === 0) {
      newCounts.push("ping");

    } else {
      newCounts.push(i);
    }

      console.log(newCounts);
      console.log(counts);

  }
 console.log(counts);
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
