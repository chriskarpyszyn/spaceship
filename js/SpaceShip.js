const SPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

const INITIAL_SPEED = 0;
const INITIAL_ANGLE = -0.5 * Math.PI;

function SpaceShipClass() {
    this.x = 75;
    this.y = 75;

    //control
    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.speed = 0;
    this.angle = 0;

    this.init = function (whichGraphic) {
        this.myBitmap = whichGraphic;
        this.reset();
    }

    this.setUpControls = function (forwardKey, backKey, leftKey, rightKey) {
        this.controlKeyForGas = forwardKey;
        this.controlKeyForBreak = backKey;
        this.controlKeyForTurnLeft = leftKey;
        this.controlKeyForTurnRight = rightKey;
    }

    this.move = function() {
        if (this.keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }

        if (this.keyHeld_Reverse) {
            this.speed += -REVERSE_POWER;
        }

        if (this.keyHeld_TurnRight) {
            if (Math.abs(this.speed) > MIN_TURN_SPEED) {
                this.angle += TURN_RATE * Math.PI;
            }
        }

        if (this.keyHeld_TurnLeft) {
            if (Math.abs(this.speed) > MIN_TURN_SPEED) {
                this.angle += -TURN_RATE * Math.PI;
            }
        }
        const nextX = this.x + Math.cos(this.angle) * this.speed;
        const nextY = this.y + Math.sin(this.angle) * this.speed;
        this.x = nextX;
        this.y = nextY;

        this.speed *= SPEED_DECAY_MULT;
    }

    this.reset = function() {
        this.speed = INITIAL_SPEED;
        this.angle = INITIAL_ANGLE;


    }

    this.drawPlayer = function() {
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, this.angle);
    }
}
