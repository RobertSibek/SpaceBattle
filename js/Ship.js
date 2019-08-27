// tuning constants //// removed the word "car"
const SPACESPEED_DECAY_MULT = 0.99;
const THRUST_POWER = 0.15;
const TURN_RATE = 0.03;

shipClass.prototype = new movingWrapPositionClass();

function shipClass() {
	this.x = CX;
	this.y = CY;

	this.keyHeld_Gas = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.setupControls = function (forwardKey, leftKey, rightKey, shotKey) {
		this.controlKeyForThrust = forwardKey;
		this.controlKeyForTurnLeft = leftKey;
		this.controlKeyForTurnRight = rightKey;
		this.controlKeyForShot = shotKey;
	}

	this.init = function (whichGraphic) {
		this.myShot = new shotClass();
		this.myBitmap = whichGraphic;
		this.reset();
	}

	// we save the superclass definition of move()
	this.superClassReset = this.reset;

	// now it's been overwritten by our own definition
	this.reset = function () {
		this.superClassReset();
		this.x = CX + 100;
		this.y = CY + 100;
		this.ang = -0.5 * Math.PI;
		this.myShot.reset();
	}

	this.superClassMove = this.move;

	this.move = function () {
		if (this.keyHeld_TurnLeft) {
			this.ang -= TURN_RATE * Math.PI;
		}

		if (this.keyHeld_TurnRight) {
			this.ang += TURN_RATE * Math.PI;
		}

		if (this.keyHeld_Thrust) {
			this.speed += THRUST_POWER;
		}

		if (this.keyHeld_Thrust) {
			this.xv += Math.cos(this.ang) * THRUST_POWER;
			this.yv += Math.sin(this.ang) * THRUST_POWER;
		}

		this.superClassMove();

		this.xv *= SPACESPEED_DECAY_MULT;
		this.yv *= SPACESPEED_DECAY_MULT;

		this.myShot.move();

	}
	
	this.checkMyShipAndShotCollisionAgainst = function (thisEnemy) {
		if (thisEnemy.isOverlappingPoint(this.x, this.y)) {
			this.reset();
			console.log('Player crashed');
		}
		if (this.myShot.hitTest(thisEnemy)) {
			thisEnemy.reset();
			this.myShot.reset();
			console.log('Enemy blasted');
		}
	}

	this.cannonFire = function () {
		if (this.myShot.isShotReadyToFire()) {
			this.myShot.shootFrom(this);
		}
	}

	this.draw = function () {
		drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, this.ang);
		this.myShot.draw();
	}

}
