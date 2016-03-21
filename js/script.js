console.log("hi")

function randomColor() {
  var randomNumber = Math.random();
  if (randomNumber < 0.25) {
    return 'green';
  } else if (randomNumber < 0.50) {
    return 'red';
  } else if (randomNumber < 0.75) {
    return 'blue';
  } else {
    return 'yellow';
  }
}

$('#play').click(function(e) {
  // console.log("You clicked play!");
  var randomSequence = generateRandomSequence(100);
  console.log(randomSequence);
});


function generateRandomSequence(sequenceLength) {
  var randomSequence = [];

  for (var i = 0; i < sequenceLength; i++) {
    randomSequence.push(randomColor());
  }

  return randomSequence;
}

// PLAYER TURN

var playerSeq = [];

$('.squaresGreen').click(function() {
  setTimeout(function () {
    $('.squaresGreen').addClass('glowGreen');
    setTimeout(function() {
      $('.glowGreen').removeClass('glowGreen');
    }, 500);
  }, 500);
});

$('.squaresRed').click(function() {
  setTimeout(function () {
    $('.squaresRed').addClass('glowRed');
    setTimeout(function() {
      $('.glowRed').removeClass('glowRed');
    }, 500);
  }, 500);
});

$('.squaresBlue').click(function() {
  setTimeout(function () {
    $('.squaresBlue').addClass('glowBlue');
    setTimeout(function() {
      $('.glowBlue').removeClass('glowBlue');
      }, 500);
  }, 500);
});

$('.squaresYellow').click(function() {
  setTimeout(function () {
    $('.squaresYellow').addClass('glowYellow');
    setTimeout(function() {
      $('.glowYellow').removeClass('glowYellow');
    }, 500);
  }, 500);
});

// WIN LOGIC
// playerSeq === randomSeq;
