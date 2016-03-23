console.log("hi")

var sequenceLength = 4;
var playerTurn     = 0;
var randomSequence = [];

///// button click has three functions within: blink, checkLoss, winLogic
$('.squaresGreen').click(function() {
  blinkGreen();
  checkLoss("green");
  winLogic();
});

$('.squaresRed').click(function() {
  blinkRed();
  checkLoss("red");
  winLogic();
});

$('.squaresBlue').click(function() {
  blinkBlue();
  checkLoss("blue");
  winLogic();
});

$('.squaresYellow').click(function() {
  blinkYellow();
  checkLoss("yellow");
  winLogic();
});

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
  setTimeout(function() {
      alert("Your turn. Ready?"); }, 4000)
});

///////////////////////////////////////////////////////////////////////

//// IF COLOR IN ARRAY = PLAYER CHOICE COLOR IN SAME ARRAY POSITION THEN CORRECT
function checkLoss (color) {
  if (color === randomSequence[playerTurn]) {
    console.log("correct")
  } else {
    incorrectAnswer();
  }
  playerTurn++
}

///// IF PLAYERTURN = END OF SEQ U WIN
function winLogic () {
  if (playerTurn === randomSequence.length) {
    alert("You win. Continue?");
    window.location.href='medium.html'
  }
}


////// HOW COMP PICKS COLOR TO PUT INTO ARRAY
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

////// HOW TO CREATE COMP ARRAY
function generateRandomSequence(sequenceLength) {
  var randomSequence = [];
  for (var i = 0; i < sequenceLength; i++) {
    randomSequence.push(randomColor());
  }
    return randomSequence;
}

////// BUTTONS BLINK
function blinkGreen(pauseTime) {
  // if no pause time is given, we will default to 500ms
  if (pauseTime == undefined) {
    pauseTime = 500;
  }
  setTimeout(function () {
    $('.squaresGreen').addClass('glowGreen');
    setTimeout(function() {
      $('.glowGreen').removeClass('glowGreen');
    }, 600);
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
    }, 600);
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
      }, 600);
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
    }, 600);
  }, pauseTime);
}

function incorrectAnswer() {
  $('#object').fadeIn(2000);
}

$("#object").click(function() {
    window.location.href='easy.html';
});
