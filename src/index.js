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
    canvasBoard.width = 1400;
    canvasBoard.height = 800;
    const ctxBoard = canvasBoard.getContext('2d');

    // let gameFrame = 0;
    // const edgePosition = canvasBoard.getBoundingClientRect();
    // var background = new Image();
    // background.src = "./assets/SPONGEBOB.png";

    // background.onload = function () {
    //     ctxBoard.drawImage(background.src, 0, 0);
    // };

   

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



    //Garbage
    const arrGarbage = [];
    function Garbage() {
        this.x = Math.random() * canvasBoard.width;
        //Commented this out because the garbage needs to fall from the ceiling;
        this.y = Math.random() //* canvasBoard.height; 
        this.radius = 20;
        this.speedX = (Math.random() * 10 - 4.5) / 5; //goes two ways left/right  
        this.speedY = Math.random() * 3 + 2;
        // this.draw();
        this.distance;

    }

    Garbage.prototype.draw = function () {
        ctxBoard.fillStyle = "yellow";
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctxBoard.fill();
        ctxBoard.closePath();

    };

    Garbage.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    function addGarbage() {
        for (let i = 0; i < 20; i++) {
            arrGarbage.push(new Garbage());
        }
    }

//first try. code work but garbage disappear before hit the ground. 
    function flowGarbage() {
        for (let i = 0; i < arrGarbage.length; i++) {
            arrGarbage[i].move();
            arrGarbage[i].draw();
        }

        for (let j = 0; j < arrGarbage.length; j++) {
            if (arrGarbage[j].y > canvasBoard.height) {
                arrGarbage.splice(j, 1);    //should have been arrGarbage.splice(j, 1) not arrGarbage.splice(arrGarbage[j], 1)!!!!
            }
        }

        while (arrGarbage.length < 8) {
            arrGarbage.push(new Garbage());
        }
    }

    // function flowGarbage() {
    //     if (gameFrame % 30 === 0) {
    //         arrGarbage.push(new Garbage())
    //     }

    //     for (let i = 0; i < arrGarbage.length; i++) {
    //         arrGarbage[i].move()
    //         arrGarbage[i].draw()
    //         if (arrGarbage[i].y > canvasBoard.height) {
    //             arrGarbage.splice(i, 1);
    //     }
    // }
    // }

    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);
        flowGarbage();
        // gameFrame++;
        requestAnimationFrame(animate);
    }
    animate();



});