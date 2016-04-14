const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;



function keyPressed(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Pushed: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, player1, true);
    evt.preventDefault(); //stops the default behavior of arrow keys
}

function keyReleased(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Released: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, player1, false);
}

function setKeyHoldState(keyCode, car, setTo) {
    if (keyCode === car.controlKeyForGas) {
        car.keyHeld_Gas = setTo;
    }
    if (keyCode === car.controlKeyForBreak) {
        car.keyHeld_Reverse = setTo;
    }
    if (keyCode === car.controlKeyForTurnRight) {
        car.keyHeld_TurnRight = setTo;
    }
    if (keyCode === car.controlKeyForTurnLeft) {
        car.keyHeld_TurnLeft = setTo;
    }
}

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    player1.setUpControls(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW);

}
