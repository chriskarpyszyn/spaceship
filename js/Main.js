var canvas;
var canvasContext;
const FPS = 30;

var imagesToLoad = 3;

var player1 = new SpaceShipClass();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    loadImages();
};

function move() {
    player1.move();
}

function draw() {
    colorRect(0, 0, canvas.width, canvas.height, "#000000");
    player1.drawPlayer();
}

function startGame() {
    
    setInterval(function() {
        move();
        draw();
    }, 1000 / FPS);

    player1.init(playerPic);
    initInput();
}
