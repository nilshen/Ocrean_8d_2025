// window.addEventListener("DOMContentLoaded", () => {
//Player selection
// window.playerSelection = document.querySelector('input[name="player"]:checked').value;
const playerImageLeft = new Image();
const playerImageRight = new Image();
// function radioSelection() {
//     let ele = document.getElementsByName('player');
//     for (let i = 0; i < ele.length; i++ ) {
//         if (ele[i].checked)
//         return ele[i].value
//         console.log(ele[i])
//     }
// }

    // if (playerSelection === 'Spongebob') {
        playerImageLeft.src = "./assets/images/player1Left.png";
        playerImageRight.src = "./assets/images/player1Right.png";
    // } else {
        // playerImageLeft.src = "./assets/images/player2Left.png";
        // playerImageRight.src = "./assets/images/player2Right.png";
    // }
// })

//Player 
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
        ctxBoard.drawImage(playerImageLeft, this.x - 50, this.y - 40, 90, 90);
    } else {
        ctxBoard.drawImage(playerImageRight, this.x - 50, this.y - 40, 90, 90);
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
    this.color = 'blue';
    // this.spriteWidth = 512;
    // this.spriteHeight = 512;
    // this.Width = this.spriteWidth / 3;
    // this.Height = this.spriteHeight / 3;
    // this.frame = 0;
    // this.image = bubbleImage;
};

PlayerBubble.prototype.moveplayerBubble = function () {
    this.x += this.speedX;
    this.y -= this.speedY;

    // for (let i = 0; i < arrBubble.length; i++) {
    //     if (arrBubble[i].frame > 2) {
    //         arrBubble.splice(i, 1);
    //     } else {
    //         arrBubble[i].frame += 1;
    //     }
    // }
};

PlayerBubble.prototype.drawplayerBubble = function () {

    // ctxBoard.fillStyle = 'red';
    // ctxBoard.strokeStyle = 'red';
    // ctxBoard.lineWidth = 1;
    // ctxBoard.beginPath();
    // ctxBoard.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // ctxBoard.fill();
    // ctxBoard.stroke();

    ctxBoard.drawImage(bubbleImage, this.x - 17, this.y - 17, 50, 50);
    // ctxBoard.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, 50, 50) 

};

export const playerBubbleEffect = function playerBubbleEffect (player) {
    if (gameFrame % 20 === 0) {
        for (let i = 0; i < 1; i++) {
            arrBubble.push(new PlayerBubble());
        }
    }
    for (let i = 0; i < arrBubble.length; i++) {
        arrBubble[i].drawplayerBubble();
        arrBubble[i].moveplayerBubble();
    }

    // if (gameFrame % 23 === 0) {
    //     arrBubble.splice(0, 1);
    // }


    for (let i = 0; i < arrBubble.length; i++) {
        if (arrBubble[i].y < 0) {
            arrBubble.splice(i, 1);
        }
    }
};
