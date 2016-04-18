const SHOT_SPEED = 6.0;
const SHOT_LIFE = 30;
const SHOT_DISPLAY_RADIUS = 2.0;

ShotClass.prototype = new MovingWrapPosition();
function ShotClass() {

    this.angle = 0;

    this.init = function (whichGraphic) {
        this.myBitmap = whichGraphic;
        this.reset();
    }

    this.reset = function () {
        this.shotLife = 0;
    }

    this.superclassMove = this.move; //save a reference to the parent class's move function
    this.move = function () {
        if (this.shotLife > 0) {
            this.shotLife--;
            this.superclassMove();
        }
    }

    this.shootFrom = function (playerShip) {
            this.x = playerShip.x;
            this.y = playerShip.y;

            this.xVelocity = Math.cos(playerShip.angle) * SHOT_SPEED + playerShip.xVelocity;
            this.yVelocity = Math.sin(playerShip.angle) * SHOT_SPEED + playerShip.yVelocity;

            this.shotLife = SHOT_LIFE;
    }

    this.isShotReadyToFire  = function() {
        return (this.shotLife <= 0);
    }

    this.drawShot = function() {
        if (this.shotLife > 0) {
            colorCircle(this.x, this.y, SHOT_DISPLAY_RADIUS, "#FFFFFF");
        }
    }
}
