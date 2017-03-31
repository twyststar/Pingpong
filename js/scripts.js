var pingPong = function(inputNumber) {

  if (inputNumber !== /[\d]/) {
  alert("Please enter a number");
  }

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
