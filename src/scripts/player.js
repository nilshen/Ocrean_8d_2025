//Player 
const playerImageLeft = new Image();
const playerImageRight = new Image();
playerImageLeft.src = "./assets/images/playerLeft.png";
playerImageRight.src = "./assets/images/playerRight.png";

export const Player = function Player() {
    // debugger
    // this.canvasBoard = canvasBoard
    this.x = canvasBoard.width / 2;
    this.y = canvasBoard.height / 2;
    this.radius = 40;
    this.color = 'blue';
};

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
    // ctxBoard.beginPath();
    // ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctxBoard.fillStyle = this.color;
    // ctxBoard.fill();
    // ctxBoard.closePath();
    // ctxBoard.fillRect(this.x, this.y, this.radius, 10);

    if (this.x > mouse.x) {
        ctxBoard.drawImage(playerImageLeft, this.x - 40, this.y - 35, 80, 80);
    } else {
        ctxBoard.drawImage(playerImageRight, this.x - 40, this.y - 35, 80, 80);
    }

};

export const flowPlayer = function flowPlayer(player) {
    player.drawPlayer();
    player.movePlayer();
};


// playerBubble 
const arrBubble = [];
const bubbleImage = new Image();
bubbleImage.src = './assets/images/bubble.png';

export const PlayerBubble = function PlayerBubble() {
    this.x = player.x;
    this.y = player.y - player.radius;
    this.size = 15;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 + 1;
    this.color = 'black';
};

PlayerBubble.prototype.moveplayerBubble = function () {
    this.x += this.speedX;
    this.y -= this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
};

PlayerBubble.prototype.drawplayerBubble = function () {

    // ctxBoard.fillStyle = this.color;
    // ctxBoard.beginPath();
    // ctxBoard.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // ctxBoard.fill();
    // ctxBoard.closePath();

    ctxBoard.drawImage(bubbleImage, this.x - 17, this.y - 17, 35, 35);

};

export const playerBubbleEffect = PlayerBubble.prototype.playerBubbleEffect = function () {
    if (gameFrame % 20 === 0) {
        for (let i = 0; i < 1; i++) {
            arrBubble.push(new PlayerBubble());
        }
    }
    for (let i = 0; i < arrBubble.length; i++) {
        arrBubble[i].drawplayerBubble();
        arrBubble[i].moveplayerBubble();
    }

    if (gameFrame % 23 === 0) {
        arrBubble.splice(0, 1);
    }


    for (let i = 0; i < arrBubble.length; i++) {
        if (arrBubble[i].y < 0) {
            arrBubble.splice(i, 1);
        }
    }


};
