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


    let gameFrame = 0;
    const edgePosition = canvasBoard.getBoundingClientRect();
    // window.addEventListener('resize', function (){
    //     return edgePosition = canvasBoard.getBoundingClientRect();
    // })

    const mouse = {
        x: canvasBoard.width / 2,
        y: canvasBoard.height / 2,
        click: false
    };

    //mousemove effect
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

    //for player follow mouse
    // canvasBoard.addEventListener('mousedown', function (event) {
    //     mouse.x = event.x - edgePosition.left;
    //     mouse.y = event.y - edgePosition.top;
    //     mouse.click = true;
    // });

    // canvasBoard.addEventListener('mouseup', function (event) {
    //     mouse.x = event.x - edgePosition.left;
    //     mouse.y = event.y - edgePosition.top;
    //     mouse.click = false;
    // });

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
        // if (mouse.click) {
        //     ctxBoard.lineWidth = 1;
        //     ctxBoard.beginPath();
        //     ctxBoard.moveTo(this.x, this.y);
        //     ctxBoard.lineTo(mouse.x, mouse.y);
        //     ctxBoard.stroke();
        // }

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

    PlayerBubble.prototype.playerBubbleEffect = function() {
        if (gameFrame % 10 === 0) {
            for (let i = 0; i < 1; i++) {
                arrBubble.push(new PlayerBubble());
            }
        }   
        for (let i = 0; i < arrBubble.length; i++) {
            arrBubble[i].moveplayerBubble();
            arrBubble[i].drawplayerBubble();
            }
    }


    const playerBubble = new PlayerBubble();


    //Monster
    const arrMonster = []
    function Monster() {
        this.x = Math.random() * canvasBoard.width;
        this.y = Math.random() * (canvasBoard.height / 2);
        this.radius = Math.random() + 30;
        this.speedX = Math.random() * 10 / 2;
        this.speedY = Math.random() * 10 / 2;
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
    
    function flowMonster(){
        for (let i = 0; i < arrMonster.length; i++) {
            arrMonster[i].moveMonster();
            arrMonster[i].drawMonster();
            }

        while (arrMonster.length < 1) {
            arrMonster.push(new Monster());
        }

        if (gameFrame % 100 === 0) {
            for (let i = 0; i < 1; i++) {
                arrMonster.push(new Monster());
            }
        }   
    }
    // const monster = new Monster();
    // monster.draw();



    //Garbage
    const arrGarbage = [];
    function Garbage() {
        this.x = Math.random() * canvasBoard.width;
        //Commented this out because the garbage needs to fall from the ceiling;
        this.y = Math.random(); //* canvasBoard.height; 
        this.radius = 20;
        this.speedX = (Math.random() * 20 - 9.5) / 4; //goes two ways left/right  
        this.speedY = Math.random() * 3 + 2;
        // this.draw();
        this.distance;

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

    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

        //player
        player.movePlayer();
        player.drawPlayer();

        //playerBubble
        playerBubble.playerBubbleEffect();
        
        // Garbage
        flowGarbage();
        gameFrame++;

        // Monster
        flowMonster()

        //mouse effect
        // ctxBoard.fillStyle = 'rgba(1,1,1,0)';
        // ctxBoard.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
        // mouseBubbleEffect();
        // hue += 3;

        canvasBoard.getBoundingClientRect();
        requestAnimationFrame(animate);
    }
    animate();



});