const SHOT_SPEED = 6.0;
const SHOT_LIFE = 30;
const SHOT_DISPLAY_RADIUS = 2.0;

function ShotClass() {

    this.angle = 0;

    this.init = function (whichGraphic) {
        this.myBitmap = whichGraphic;
        this.reset();
    }

    this.reset = function () {
        this.shotLife = 0;
    }

    this.move = function() {
        if (this.shotLife > 0) {
            this.x += this.xVelocity;
            this.y += this.yVelocity;
            this.handleScreenWrap();
            this.shotLife--;
        }
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

    this.shootFrom = function(playerShip) {
        if (this.shotLife === 0) {
            this.x = playerShip.x;
            this.y = playerShip.y;

            this.xVelocity = Math.cos(playerShip.angle) * SHOT_SPEED + playerShip.velocityX;
            this.yVelocity = Math.sin(playerShip.angle) * SHOT_SPEED + playerShip.velocityY;

            this.shotLife = SHOT_LIFE;
        }
    }

    this.drawShot = function() {
        if (this.shotLife > 0) {
            colorCircle(this.x, this.y, SHOT_DISPLAY_RADIUS, "#FFFFFF");
        }
    }
}
