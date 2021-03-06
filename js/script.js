console.log("hi")

var sequenceLength = 4;
var playerTurn     = 0;
var randomSequence = [];
var round          = 0;

$('.squaresGreen').click(function() {
  window.location.href='easy.html'});

$('.squaresRed').click(function() {
  window.location.href='easy.html'
});

$('.squaresBlue').click(function() {
  window.location.href='easy.html'
});

$('.squaresYellow').click(function() {
  window.location.href='easy.html';
});

$('#easy').click(function () {
  window.location.href='easy.html'
})

$('#medium').click(function () {
  window.location.href='medium.html'
})

$('#difficult').click(function () {
  window.location.href='difficult.html'
})

$('#insane').click(function () {
  window.location.href='insane.html'
})

$('#play').click(function(e) {
  // console.log("You clicked play!");
  randomSequence = generateRandomSequence(sequenceLength);
  console.log(randomSequence);
  for (var i = 0; i < randomSequence.length; i++) {
    var color = randomSequence[i];
    var pauseTime = (i+1) * 750;
    if (color === 'green') {
      blinkGreen(pauseTime);
    } else if (color === 'red') {
      blinkRed(pauseTime);
    } else if (color === 'blue') {
      blinkBlue(pauseTime);
    } else if (color === 'yellow') {
      blinkYellow(pauseTime);
    }
  }
});

///////////////////////////////////////////////////////////////////////
function checkLoss (color) {
  if (color === randomSequence[playerTurn]) {
    console.log("correct")
  } else {
    alert("incorrect")
  }
  playerTurn++
}



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


function generateRandomSequence(sequenceLength) {
  var randomSequence = [];
  for (var i = 0; i < sequenceLength; i++) {
    randomSequence.push(randomColor());
  }
    return randomSequence;
}


function blinkGreen(pauseTime) {
  // if no pause time is given, we will default to 500ms
  if (pauseTime == undefined) {
    pauseTime = 500;
  }
  setTimeout(function () {
    $('.squaresGreen').addClass('glowGreen');
    setTimeout(function() {
      $('.glowGreen').removeClass('glowGreen');
    }, 750);
  }, pauseTime);
}

function blinkRed(pauseTime) {
  // if no pause time is given, we will default to 500ms
  if (pauseTime == undefined) {
    pauseTime = 500;
  }
  setTimeout(function () {
    $('.squaresRed').addClass('glowRed');
    setTimeout(function() {
      $('.glowRed').removeClass('glowRed');
    }, 750);
  }, pauseTime);
}

function blinkBlue(pauseTime) {
  // if no pause time is given, we will default to 500ms
  if (pauseTime == undefined) {
    pauseTime = 500;
  }
  setTimeout(function () {
    $('.squaresBlue').addClass('glowBlue');
    setTimeout(function() {
      $('.glowBlue').removeClass('glowBlue');
      }, 750);
  }, pauseTime);
}

function blinkYellow(pauseTime) {
  // if no pause time is given, we will default to 500ms
  if (pauseTime == undefined) {
    pauseTime = 500;
  }
  setTimeout(function () {
    $('.squaresYellow').addClass('glowYellow');
    setTimeout(function() {
      $('.glowYellow').removeClass('glowYellow');
    }, 750);
  }, pauseTime);
}
