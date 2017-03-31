//Business Logic
var counts = []


var pingPong = function(inputNumber) {
  var changedCounts = []

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
    $("ul li").remove();

    var userNumber = Math.round(parseInt($('input#input').val()));
    var results = pingPong(userNumber);

    results.forEach(function(result){
    $("ul#result").append($("<li>").text(result));
    });

  });

  $('#og').click(function(event) {
    event.preventDefault();
    $("ul li").remove();

    var userNumber = Math.round(parseInt($('input#input').val()));
    var results = pingPong(userNumber);
    var backwards = results.reverse();

    backwards.forEach(function(back){
    $("ul#result").append($("<li>").text(back));
    });

  });

  $("#reset").click(function(){
    location.reload()
  });

});
