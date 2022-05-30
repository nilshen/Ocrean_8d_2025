//Monster
window.arrMonster = [];

export const Monster = function Monster() {
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


export const flowMonster = function flowMonster() {
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
                arrMonster[j].killLife = false;
            }, 1000
            );

        }
    }
}








// module.exports = Monster;