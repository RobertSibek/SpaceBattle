
var canvas, ctx;

var p1 = new shipClass();
var enemy = new UFOClass();

window.onload = function() {
	createCanvas();
	canvas = document.getElementById(CANVAS_NAME);
	ctx = canvas.getContext('2d');
  
  loadImages();
}

function loadingDoneSoStartGame() {
  // these next few lines set up our game logic and render to happen 30 times per second
  var framesPerSecond = 30;
  setInterval(function() {
      moveEverything();
      drawEverything();
    }, 1000/framesPerSecond);
  
  p1.init(playerPic);
  enemy.init(UFOPic);
  initInput();  
}

function moveEverything() {
  p1.move();
  enemy.move();
  p1.checkMyShipAndShotCollisionAgainst(enemy);
}

function drawEverything() {
  colorRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');
  p1.draw();
  enemy.draw();
}