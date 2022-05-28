// const Monster = require("./scripts/monster")
// const Player = require("./scripts/player")
// window.MovingObject = MovingObject;
// window.GameView = GameView;
// window.Game = Game;
// window.Monster = Monster;
// window.Garbage = Garbage;
// window.Player = Player;

document.addEventListener("DOMContentLoaded", () => {

    const canvasBoard = document.getElementById("canvasBoard");
    canvasBoard.width = 800;
    canvasBoard.height = 600;
    

    const ctxBoard = canvasBoard.getContext('2d');

    var background = new Image();
    background.src = "./assets/SPONGEBOB.png";

    background.onload = function () {
        ctxBoard.drawImage(background.src, 0, 0);
    };

    let arrGarbage = [];

    //Player 
    function Player(x, y, radius, color) {
        this.x = canvasBoard.width / 2;
        this.y = canvasBoard.height / 2;
        this.radius = radius;
        this.color = color;
    }

    Player.prototype.draw = function () {
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctxBoard.fillStyle = this.color;
        ctxBoard.fill();
    };


    Player.prototype.move = function () {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        if (this.x !== mouse.x) {
            this.x -= dx;
        }
        if (this.y !== mouse.y) {
            this.y -= dy;
        }
    };

    const player = new Player(300, 300, 30, "blue");
    player.draw();
    console.log(player);


    //Monster
    function Monster() {
        this.x = Math.random() * canvasBoard.width;
        this.y = Math.random() * (canvasBoard.height / 2);
        this.radius = Math.random() + 30;
        this.speedX = Math.random() * 10;
        this.speedY = Math.random() * 10;
    }

    Monster.prototype.draw = function () {
        ctxBoard.fillStyle = 'red';
        // ctxBoard.strokeStyle = 'yellow';
        // ctxBoard.lineWidth = 5;
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctxBoard.fill();
        // ctxBoard.stroke();
    };

    Monster.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;

    };

    const monster = new Monster();
    monster.draw();
    console.log(monster);


    //Garbage
    function Garbage() {
        this.x = Math.random() * canvasBoard.width;
        this.y = Math.random(); //* canvasBoard.height;
        this.radius = Math.random() + 30;
        // this.speedX = Math.random() * 10;
        this.speedY = Math.random() * 3 + 2;
    }

    Garbage.prototype.draw = function () {
        ctxBoard.fillStyle = "yellow";
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctxBoard.fill();
    };

    Garbage.prototype.move = function () {
        // this.x += this.speedX;
        this.y += this.speedY;
    };

    function init() {
        for (let i = 0; i < 13; i++) {
            arrGarbage.push(new Garbage());
        }
    }
    init();

    function handleGarbage() {
        for (let i = 0; i < arrGarbage.length; i++) {
            arrGarbage[i].move();
            arrGarbage[i].draw();
        }
        arrGarbage.filter((el) => el.y > 0);

        if (arrGarbage.length < 5) {
            arrGarbage.push(new Garbage());
        }
    }
    console.log(arrGarbage);

    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

        handleGarbage();
        requestAnimationFrame(animate);
    }
    animate();



});