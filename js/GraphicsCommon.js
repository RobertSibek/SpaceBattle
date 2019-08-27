const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const CANVAS_NAME = 'gameCanvas';
const CX = CANVAS_WIDTH / 2;
const CY = CANVAS_HEIGHT / 2;

function createCanvas() {
	canvas = document.createElement('canvas');
	canvas.id = CANVAS_NAME;
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	canvas.style.zIndex = 8;
	canvas.style.position = "absolute";
	canvas.style.border = "1px solid";
	document.body.appendChild(canvas);
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  ctx.fill();
}
  
function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY,withAngle) {
  ctx.save(); // allows us to undo translate movement and rotate spin
  ctx.translate(atX,atY); // sets the point where our graphic will go
  ctx.rotate(withAngle); // sets the rotation
  ctx.drawImage(graphic,-graphic.width/2,-graphic.height/2); // center, draw
  ctx.restore(); // undo the translation movement and rotation since save()
}