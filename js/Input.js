const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;
const KEY_SPACEBAR = 32;

function initInput() {
	document.addEventListener("keydown", keyPressed);
	document.addEventListener("keyup", keyReleased);
	p1.setupControls(KEY_UP_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW, KEY_SPACEBAR);
}

function setKeyHoldState(thisKey, thisShip, setTo) {
	if (thisKey == thisShip.controlKeyForTurnLeft) {
		thisShip.keyHeld_TurnLeft = setTo;
	}
	if (thisKey == thisShip.controlKeyForTurnRight) {
		thisShip.keyHeld_TurnRight = setTo;
	}
	if (thisKey == thisShip.controlKeyForThrust) {
		thisShip.keyHeld_Thrust = setTo;
	}
}

function keyPressed(evt) {
	if (evt.keyCode == p1.controlKeyForShot) {
		p1.cannonFire();
	}
	setKeyHoldState(evt.keyCode, p1, true);
	evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
	setKeyHoldState(evt.keyCode, p1, false);
}
