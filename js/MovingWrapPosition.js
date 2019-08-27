function movingWrapPositionClass() {
	this.x = CX;
	this.y = CY;

	this.reset = function () {
		this.xv = this.yv = 0.0;
		this.x = CX;
		this.y = CY;
		
	}
	
	this.move = function () {
		this.x += this.xv;
		this.y += this.yv;
		this.handleScreenWrap();
	}

	this.handleScreenWrap = function () {
		if (this.x > CANVAS_WIDTH) {
			this.x -= CANVAS_WIDTH;
		}
		if (this.x < 0) {
			this.x += CANVAS_WIDTH;
		}
		if (this.y < 0) {
			this.y += CANVAS_HEIGHT;
		}
		if (this.y > CANVAS_HEIGHT) {
			this.y -= CANVAS_HEIGHT;
		}
	}

}
