const SPEED_DECAY_MULT = 0.99;
const THRUST_POWER = 0.15;
const TURN_RATE = 0.03;

const INITIAL_SPEED = 0;
const INITIAL_ANGLE = -0.5 * Math.PI;

SpaceShipClass.prototype = new MovingWrapPosition();
function SpaceShipClass() {

    //control
    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.myShot = new ShotClass();

    this.angle = 0;

    this.init = function (whichGraphic) {
        this.myBitmap = whichGraphic;
        this.reset();

        this.myShot.reset();
    }

    this.setUpControls = function (forwardKey, leftKey, rightKey, shotKey) {
        this.controlKeyForGas = forwardKey;
        this.controlKeyForTurnLeft = leftKey;
        this.controlKeyForTurnRight = rightKey;
        this.controlKeyForShot = shotKey;
    }

    this.superClassMove = this.move;
    this.move = function() {
        if (this.keyHeld_Gas) {
            this.xVelocity += Math.cos(this.angle) * THRUST_POWER;
            this.yVelocity += Math.sin(this.angle) * THRUST_POWER;
        }
        if (this.keyHeld_TurnRight) {
            this.angle += TURN_RATE * Math.PI;
        }
        if (this.keyHeld_TurnLeft) {
            this.angle += -TURN_RATE * Math.PI;
        }

        this.superClassMove();

        this.handleScreenWrap();

        this.xVelocity *= SPEED_DECAY_MULT;
        this.yVelocity *= SPEED_DECAY_MULT;

        this.myShot.move();
    }

    this.superclassReset = this.reset;
    this.reset = function () {
        this.superclassReset();
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = INITIAL_ANGLE;
    }

    this.drawPlayer = function() {
        this.myShot.drawShot();
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, this.angle);
    }

    this.fireShot = function() {
        if (this.myShot.isShotReadyToFire()) {
            this.myShot.shootFrom(this);
        }
    }
}
