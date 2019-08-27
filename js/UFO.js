const UFO_SPEED = 1.9;
const UFO_TIME_BETWEEN_CHANGE_DIR = 85;
const UFO_COLLISION_RADIUS = 13.0;

UFOClass.prototype = new movingWrapPositionClass();

function UFOClass() {
	this.x = CX;
	this.y = CY;

	this.init = function (whichGraphic) {
		this.myBitmap = whichGraphic;
		this.reset();
	}

	// we save the superclass definition of move()
	this.superClassReset = this.reset;

	// now it's been overwritten by our own definition
	this.reset = function () {
		this.superClassReset();
		this.x = Math.random() * CANVAS_WIDTH;
		this.y = Math.random() * CANVAS_HEIGHT;
		this.cyclesTilDirectionChange = 0;
	}

	this.superClassMove = this.move;

	this.move = function () {
		this.superClassMove();
		
		this.cyclesTilDirectionChange--;
		if (this.cyclesTilDirectionChange <= 0) {
			var randAng = Math.random()*Math.PI*2.0;
			this.xv = Math.cos(randAng) * UFO_SPEED;
			this.yv = Math.sin(randAng) * UFO_SPEED;
			this.cyclesTilDirectionChange = UFO_TIME_BETWEEN_CHANGE_DIR;
		}
	}
	
	this.isOverlappingPoint = function(testX, testY) {
		var deltaX = testX - this.x;
		var deltaY = testY - this.y;
		var dist = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
		return (dist <= UFO_COLLISION_RADIUS);
	}

	this.draw = function () {
		drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, 0);
	}

}
