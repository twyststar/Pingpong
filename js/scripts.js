//Business Logic
var counts = []


var pingPong = function(inputNumber) {
  var changedCounts = []

  if (isNaN(inputNumber) || (inputNumber < 0)) {
    alert("Please enter a number");
  }

  if (inputNumber === 0905) {
    $("#wife").show();
  }
  if (inputNumber === 000) {
    $("#ghost").show();
  }
  if (inputNumber === 314) {
    $("#pie").show();
  }
  if (inputNumber === 666) {
    $("#devil").show();
  }
  if (inputNumber === 1776) {
    $("#usa").show();
  }
  if (inputNumber === 404) {
    alert("404 GAME NOT FOUND");
  }
  if (inputNumber === 1021) {
    $("#ping").show();
  }
  if (inputNumber === 1020) {
    $("#star").show();
  }
  if (inputNumber === 1029) {
    $("#glass").show();
  }
  if (inputNumber === 42) {
    $("#answer").show();
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
    $(".toggle img").hide();
    
    var userNumber = Math.round(parseInt($('input#input').val()));
    var results = pingPong(userNumber);

    results.forEach(function(result){
    $("ul#result").append($("<li>").text(result));
    });

  });

  $('#og').click(function(event) {
    event.preventDefault();
    $("ul li").remove();
    $(".toggle img").hide();

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
