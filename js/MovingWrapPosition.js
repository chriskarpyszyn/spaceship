function MovingWrapPosition() {

    this.reset = function () {
        this.xVelocity = 0.0;
        this.yVelocity = 0.0;
    }

    this.move = function() {
            this.x += this.xVelocity;
            this.y += this.yVelocity;
            this.handleScreenWrap();
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
}
