const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;

const KEY_SPACEBAR = 32;

function keyPressed(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Pushed: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, player1, true);
    evt.preventDefault(); //stops the default behavior of arrow keys

    if (evt.keyCode == player1.controlKeyForShot) {
        player1.fireShot();
    }
}

function keyReleased(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Released: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, player1, false);
}

function setKeyHoldState(keyCode, spaceShip, setTo) {
    if (keyCode === spaceShip.controlKeyForGas) {
        spaceShip.keyHeld_Gas = setTo;
    }
    if (keyCode === spaceShip.controlKeyForTurnRight) {
        spaceShip.keyHeld_TurnRight = setTo;
    }
    if (keyCode === spaceShip.controlKeyForTurnLeft) {
        spaceShip.keyHeld_TurnLeft = setTo;
    }
}

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    player1.setUpControls(KEY_UP_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW, KEY_SPACEBAR);

}
