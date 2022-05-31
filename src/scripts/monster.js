//Monster
window.arrMonster = [];

export const Monster = function Monster() {
    this.radius = 50;
    const posMonster = Math.floor(Math.random() * 10);

    if (posMonster > 6) {
        this.x = 0 - this.radius;
        this.y = Math.random() * canvasBoard.height + 1 - this.radius;
        this.speedX = (Math.random() * 20 - 9.5) / 5;
        this.speedY = 0; //Math.random() * 10 / 2;
        this.spriteWidth = 608;
        this.spriteHeight = 372;
        this.width = this.spriteWidth / 3.5;
        this.height = this.spriteHeight / 3.5;
        this.frame = 0;


        const random = Math.floor(Math.random() * 2 + 1);
        switch (random) {
            case 1:
                this.image = m11;
                break;
            case 2:
                this.image = m22;
                break;
        }
    }
    else if (posMonster < 4) {
        this.x = canvasBoard.width + this.radius;
        this.y = Math.random() * canvasBoard.height + 1;
        this.speedX = (Math.random() * 20 - 9.5) / 5;
        this.speedY = 0; //Math.random() * -10 / 2;
        this.spriteWidth = 608;
        this.spriteHeight = 372;
        this.width = this.spriteWidth / 3.5;
        this.height = this.spriteHeight / 3.5;
        this.frame = 0;

        const random = Math.floor(Math.random() * 2 + 1);
        switch (random) {
            case 1:
                this.image = m33;
                break;
            case 2:
                this.image = m44;
                break;

        }
    }
    else if (posMonster <= 6 && posMonster >= 4) {
        this.x = Math.random() * canvasBoard.width + 1;
        this.y = canvasBoard.height + this.radius;
        this.speedX = (Math.random() * -20 + 9.5) / 4;
        this.speedY = Math.random() * -10 + 3;

        if (this.speedX < 0) {
            this.image = m5;
        } else {
            this.image = m6;
        }
    }

    this.killLife = false;
};

Monster.prototype.drawMonster = function () {
    // ctxBoard.fillStyle = 'red';
    // ctxBoard.strokeStyle = 'red';
    // ctxBoard.lineWidth = 5;
    // ctxBoard.beginPath();
    // ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctxBoard.fill();
    // ctxBoard.stroke();
    // let randomRow = Math.floor(Math.random() * 3)

    if (this.image !== m5 && this.image !== m6) {
        ctxBoard.drawImage(this.image, this.frame * this.spriteWidth, 1 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - this.spriteWidth / 7, this.y - this.spriteHeight / 7, this.width, this.height);
    } else {
        ctxBoard.drawImage(this.image, this.x - 50, this.y - 50, 100, 100);
    }
};

Monster.prototype.moveMonster = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.frame > 2 ? this.frame = 0 : this.frame++;
};

Monster.prototype.distanceMonster = function (otherObject) {
    let dx = this.x - otherObject.x;
    let dy = this.y - otherObject.y;
    return Math.sqrt(dx * dx + dy * dy);
};


export const flowMonster = function flowMonster() {
    for (let i = 0; i < arrMonster.length; i++) {
        arrMonster[i].moveMonster();
        arrMonster[i].drawMonster();
    }

    while (arrMonster.length < 3) {
        arrMonster.push(new Monster());
    }

    if (gameFrame % 20 === 0 && arrMonster.length < 10) {
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
        if (arrMonster[j].distanceMonster(player) <= arrMonster[j].radius + player.radius - 5
            && arrMonster[j].killLife === false) {
            life -= 1;
            arrMonster[j].killLife = true;

            setTimeout(() => {
                // console.log("test delay 1 sec")
                arrMonster[j].killLife = false;
            }, 1000
            );

        }
    }
};



const m11 = new Image();
const m22 = new Image();
const m33 = new Image();
const m44 = new Image();
const m5 = new Image();
const m6 = new Image();

m11.src = "./assets/images/m11.png";
m22.src = "./assets/images/m22.png";
m33.src = "./assets/images/m33.png";
m44.src = "./assets/images/m44.png";
m5.src = "./assets/images/m5.png";
m6.src = "./assets/images/m6.png";
