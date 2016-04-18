const UFO_SPEED = 1.9;
const UFO_TIME_BETWEEN_DIRECTION_CHANGE = 85;
const UFO_COLLISION_RADIUS = 13;

UFO.prototype = new MovingWrapPosition();
function UFO() {

    this.myShot = new ShotClass();

    this.init = function (whichGraphic) {
        this.myBitmap = whichGraphic;
        this.reset();

        this.myShot.reset();
    }

    this.superClassMove = this.move;
    this.move = function () {

        this.superClassMove();

        this.cyclesUntilDirectionChange--;
        if (this.cyclesUntilDirectionChange <= 0) {
            var randAngle = Math.random() * Math.PI * 2;
            this.xVelocity = Math.cos(randAngle) * UFO_SPEED;
            this.yVelocity = Math.sin(randAngle) * UFO_SPEED;
            this.cyclesUntilDirectionChange = UFO_TIME_BETWEEN_DIRECTION_CHANGE;
        }
    }

    this.superclassReset = this.reset;
    this.reset = function () {
        this.superclassReset();
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.cyclesUntilDirectionChange = 0;
    }

    this.drawPlayer = function() {
        this.myShot.drawShot();
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, 0);
    }

    this.fireShot = function() {

    }

    this.isOverlappingPoint = function(testX, testY) {
        var deltaX = testX - this.x;
        var deltaY = testY - this.y;
        var dist = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
        return (dist <= UFO_COLLISION_RADIUS);
    }
}
