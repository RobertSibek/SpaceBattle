const SHOT_SPEED = 6;
const SHOT_LIFE = 30;
const SHOT_DISPLAY_RADIUS = 2.0;

shotClass.prototype = new movingWrapPositionClass();

function shotClass() {
	this.x = CX;
	this.y = CY;

	// we save the superclass definition of move()
	this.superClassReset = this.reset;

	// now it's been overwritten by our own definition
	this.reset = function () {
		this.superClassReset();
		this.shotLife = 0;
		this.driftX = 0;
		this.driftY = 0;
		this.ang = -0.5 * Math.PI;
	}

	this.superClassMove = this.move;

	this.move = function () {
		if (this.shotLife > 0) {
			this.shotLife--;
			this.superClassMove();
		}
	}

	this.isShotReadyToFire = function () {
		return (this.shotLife <= 0);
	}

	this.hitTest = function (thisEnemy) {
		if (this.shotLife <= 0) {
			return false;
		}
		return thisEnemy.isOverlappingPoint(this.x, this.y);
	}
	this.shootFrom = function (shipFiring) {
		if (this.shotLife == 0) {
			this.x = shipFiring.x;
			this.y = shipFiring.y;
		}

		this.xv = Math.cos(shipFiring.ang) * SHOT_SPEED + shipFiring.xv;
		this.yv = Math.sin(shipFiring.ang) * SHOT_SPEED + shipFiring.yv;

		this.shotLife = SHOT_LIFE;
	}

	this.draw = function () {
		if (this.shotLife > 0) {
			colorCircle(this.x, this.y, SHOT_DISPLAY_RADIUS, 'white');
		}
	}
}
