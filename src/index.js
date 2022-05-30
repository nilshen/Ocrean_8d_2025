// const Garbage = require("./scripts/garbage")
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
    const edgePosition = canvasBoard.getBoundingClientRect();

    // window.addEventListener('resize', function (){
    //     edgePosition = canvasBoard.getBoundingClientRect();
    // })
    
    let gameFrame = 0;
    let score = 0;
    let life = 3;
    let gameOver = false;


    const mouse = {
        x: canvasBoard.width / 2,
        y: canvasBoard.height / 2,
    };

    //mousemove bubble effect & player follow mousemove
    canvasBoard.addEventListener('mousemove', function (event) {
        mouse.x = event.x - edgePosition.left;
        mouse.y = event.y - edgePosition.top;

        // for (let i = 0; i < 1; i++) {
        //     arrMouse.push(new mouseBubble());
        // }
    });

    // const arrMouse = [];
    // // const bubble = new Imgage()
    // // bubble.src = ''
    // let hue = 0;


    // class mouseBubble {
    //     constructor() {
    //         this.x = mouse.x;
    //         this.y = mouse.y;

    //         this.size = 10;
    //         this.speedX = Math.random() * 2 - 1;
    //         this.speedY = Math.random() * 1.5;
    //         this.color = 'rgb(231,254,255)';
    //         // this.color = 'hsl(' + hue + ', 100%, 50%)';
    //     }
    //     moveMouse() {
    //         this.x += this.speedX;
    //         this.y -= this.speedY;
    //         if (this.size > 0.2) this.size -= 0.1;
    //     }

    //     drawMouse() {
    //         ctxBoard.fillStyle = this.color;
    //         ctxBoard.beginPath();
    //         ctxBoard.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    //         ctxBoard.fill();
    //         // ctxBoard.drawImage(bubble, this.x, this.y, this.radius, this.radius)
    //     }
    // }

    // function mouseBubbleEffect() {
    //     for (let i = 0; i < arrMouse.length; i++) {
    //         arrMouse[i].moveMouse();
    //         arrMouse[i].drawMouse();

    //         if (arrMouse[i].size > 30) {
    //             arrMouse.splice(i, 1);
    //             i--;
    //         }
    //     }
    // }

    //Player 
    function Player() {
        this.x = canvasBoard.width / 2;
        this.y = canvasBoard.height / 2;
        this.radius = 30;
        this.color = 'blue';
    }

    Player.prototype.movePlayer = function () {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        if (this.x !== mouse.x) {
            this.x -= dx / 13;
        }
        if (this.y !== mouse.y) {
            this.y -= dy / 13;
        }
    };

    Player.prototype.drawPlayer = function () {
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctxBoard.fillStyle = this.color;
        ctxBoard.fill();
        ctxBoard.closePath();
        ctxBoard.fillRect(this.x, this.y, this.radius, 10);

    };

    const player = new Player();
    // player.drawPlayer();

    //playerBubble 
    const arrBubble = [];

    function PlayerBubble() {
        this.x = player.x;
        this.y = player.y - player.radius;
        this.size = 15;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1.5;
        this.color = 'rgb(231,254,255)';
    }

    PlayerBubble.prototype.moveplayerBubble = function () {
        this.x += this.speedX;
        this.y -= this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    };

    PlayerBubble.prototype.drawplayerBubble = function () {

        ctxBoard.fillStyle = this.color;
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxBoard.fill();
        // ctxBoard.drawImage(bubble, this.x, this.y, this.radius, this.radius)

    };

    PlayerBubble.prototype.playerBubbleEffect = function () {
        if (gameFrame % 10 === 0) {
            for (let i = 0; i < 1; i++) {
                arrBubble.push(new PlayerBubble());
            }
        }
        for (let i = 0; i < arrBubble.length; i++) {
            arrBubble[i].drawplayerBubble();
            arrBubble[i].moveplayerBubble();
        }
    };


    const playerBubble = new PlayerBubble();


    //Monster
    const arrMonster = [];

    function Monster() {
        this.radius = 30;
        const posMonster = Math.random() * 100 + 1;
        if (posMonster > 70) {
            this.x = 0 - this.radius;
            this.y = Math.random() * canvasBoard.height + 1 - this.radius;
            this.speedX = (Math.random() * 20 - 9.5) / 5;
            this.speedY = 0; //Math.random() * 10 / 2;
        }
        else if (posMonster < 40) {
            this.x = canvasBoard.width + this.radius;
            this.y = Math.random() * canvasBoard.height + 1;
            this.speedX = (Math.random() * 20 - 9.5) / 5;
            this.speedY = 0; //Math.random() * -10 / 2;
        }
        else if (posMonster <= 70 && posMonster >= 40) {
            this.x = Math.random() * canvasBoard.width + 1;
            this.y = canvasBoard.height + this.radius;
            this.speedX = Math.random() * -10 / 4;
            this.speedY = Math.random() * -10 + 3;
        }

        this.killLife = false;
    }

    Monster.prototype.drawMonster = function () {
        ctxBoard.fillStyle = 'red';
        // ctxBoard.strokeStyle = 'yellow';
        // ctxBoard.lineWidth = 5;
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctxBoard.fill();
        // ctxBoard.stroke();
    };

    Monster.prototype.moveMonster = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    Monster.prototype.distanceMonster = function (otherObject) {
        let dx = this.x - otherObject.x;
        let dy = this.y - otherObject.y;
        return Math.sqrt(dx * dx + dy * dy);
    };


    function flowMonster() {
        for (let i = 0; i < arrMonster.length; i++) {
            arrMonster[i].moveMonster();
            arrMonster[i].drawMonster();
        }

        while (arrMonster.length < 3) {
            arrMonster.push(new Monster());
        }

        if (gameFrame % 200 === 0) {
            for (let i = 0; i < 1; i++) {
                arrMonster.push(new Monster());
            }
        }

        for (let i = 0; i < arrMonster.length; i++) {
            if (arrMonster[i].x > canvasBoard.width + arrMonster[i].radius
                || arrMonster[i].x < 0 - arrMonster[i].radius
                || arrMonster[i].y < 0 - arrMonster[i].radius) {
                arrMonster.splice(i, 1);
            }
        }

        for (let j = 0; j < arrMonster.length; j++) {
            if (arrMonster[j].distanceMonster(player) <= arrMonster[j].radius + player.radius 
            && arrMonster[j].killLife === false) {
                life -= 1;
                arrMonster[j].killLife = true;

                setTimeout(() => {
                    // console.log("test delay 1 sec")
                    arrMonster[j].killLife = false}, 1000
                )
                
            }
        }
    }


    //Garbage
    const arrGarbage = [];
    function Garbage() {
        this.x = Math.random() * canvasBoard.width;
        //Commented this out because the garbage needs to fall from the ceiling;
        this.y = Math.random(); //* canvasBoard.height; 
        this.radius = 20;
        this.speedX = (Math.random() * 20 - 9.5) / 4; //goes two ways left/right  
        this.speedY = Math.random() * 3 + 2;
        this.killGarbage = false;

    }

    Garbage.prototype.drawGarbage = function () {
        ctxBoard.fillStyle = "yellow";
        ctxBoard.beginPath();
        ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctxBoard.fill();
        ctxBoard.closePath();

    };

    Garbage.prototype.moveGarbage = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    Garbage.prototype.distanceGarbage = function (otherObject) {
        let dx = this.x - otherObject.x;
        let dy = this.y - otherObject.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    //first try. code work but garbage disappear before hit the ground. 
    function flowGarbage() {
        for (let i = 0; i < arrGarbage.length; i++) {
            arrGarbage[i].moveGarbage();
            arrGarbage[i].drawGarbage();
        }

        for (let j = 0; j < arrGarbage.length; j++) {
            if (arrGarbage[j].y > canvasBoard.height) {
                arrGarbage.splice(j, 1);    //should have been arrGarbage.splice(j, 1) not arrGarbage.splice(arrGarbage[j], 1)!!!!
            }
        }


        for (let j = 0; j < arrGarbage.length; j++) {
            if (arrGarbage[j].distanceGarbage(player) <= arrGarbage[j].radius + player.radius) {
                arrGarbage.splice(j, 1);
                score += 1;
            }
        }

        for (let j = 0; j < arrGarbage.length; j++) {
            for (let i = 0; i < arrMonster.length; i++)
                if (arrGarbage[j].distanceGarbage(arrMonster[i]) <= arrGarbage[j].radius + arrMonster[i].radius
                    && arrGarbage[j].killGarbage === false) {
                    // arrMonster.splice(i, 1);
                    score -= 3;
                    arrGarbage[j].killGarbage = true;
                }
        }


        if (gameFrame % 40 === 0) {
            arrGarbage.push(new Garbage());
        }

        while (arrGarbage.length < 4) {
            arrGarbage.push(new Garbage());
        }
    }
    //option 2 with gameFrame to generate garbage. Combined with option 1 to make it more inteactive and more fun.
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


    //game class control

    function gameOverStatus () {
        if (life === 0) {
            gameOver = true
        }
    }

    // function Game () {
    // Game.prototype.handleGameover = function() {
    //         if (life === 0 ) {
    //         gameOver = true
    //         } 
    //     }
    // }


    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

        //player
        player.drawPlayer();
        player.movePlayer();

        //playerBubble
        playerBubble.playerBubbleEffect();

        // Garbage
        flowGarbage();
        gameFrame++;

        // Monster
        flowMonster();

        //mouse effect
        // ctxBoard.fillStyle = 'rgba(1,1,1,0)';
        // ctxBoard.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
        // mouseBubbleEffect();
        // hue += 3;

        //score & life 
        ctxBoard.fillStyle = "black";
        ctxBoard.font = '30px serif';
        ctxBoard.fillText('score: ' + score, canvasBoard.width / 2 - 50, 50, 500);

        ctxBoard.fillStyle = "black";
        ctxBoard.fillText('life: ' + life, canvasBoard.width / 2 - 50, 30, 500);
        // canvasBoard.getBoundingClientRect();
        gameOverStatus()
        if (gameOver === false) {
            requestAnimationFrame(animate);
        }
    }
    animate();



});