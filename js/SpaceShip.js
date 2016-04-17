const SPEED_DECAY_MULT = 0.99;
const THRUST_POWER = 0.15;
const TURN_RATE = 0.03;

const INITIAL_SPEED = 0;
const INITIAL_ANGLE = -0.5 * Math.PI;

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

    this.move = function() {
        if (this.keyHeld_Gas) {
            this.velocityX += Math.cos(this.angle) * THRUST_POWER;
            this.velocityY += Math.sin(this.angle) * THRUST_POWER;
        }
        if (this.keyHeld_TurnRight) {
            this.angle += TURN_RATE * Math.PI;
        }
        if (this.keyHeld_TurnLeft) {
            this.angle += -TURN_RATE * Math.PI;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;

        this.handleScreenWrap();

        this.velocityX *= SPEED_DECAY_MULT;
        this.velocityY *= SPEED_DECAY_MULT;

        this.myShot.move();
    }

    this.handleScreenWrap = function() {
        if (this.x < 0) {
            this.x += canvas.width;
        }
         else if (this.x > canvas.width) {
            this.x -= canvas.width;
        }
        if (this.y < 0) {
            this.y += canvas.height;
        }
        else if (this.y > canvas.height) {
            this.y -= canvas.height;
        }
    }

    this.reset = function() {
        this.velocityX = 0.0;
        this.velocityY = 0.0;

        this.angle = INITIAL_ANGLE;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
    }

    this.drawPlayer = function() {
        this.myShot.drawShot();
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, this.angle);
    }

    this.fireShot = function() {
        this.myShot.shootFrom(this);
    }
}
