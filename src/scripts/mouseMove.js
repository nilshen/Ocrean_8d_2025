//mouseMove 
const mouseMoveImage = new Image();
mouseMoveImage.src = "./assets/images/mouseMove.png";

export const MouseMove = function MouseMove() {
    this.x = mouse.x
    this.y = mouse.y

};

MouseMove.prototype.movemouseMove = function () {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;

    if (this.x !== mouse.x) {
        this.x -= dx;
    }
    if (this.y !== mouse.y) {
        this.y -= dy;
    }
};

MouseMove.prototype.drawmouseMove = function () {
    // ctxBoard.beginPath();
    // ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctxBoard.fillStyle = this.color;
    // ctxBoard.fill();
    // ctxBoard.closePath();
    // ctxBoard.fillRect(this.x, this.y, this.radius, 10);

    ctxBoard.drawImage(mouseMoveImage, this.x - 40, this.y - 35, 80, 80);

    

};

export const flowmouseMove = function flowmouseMove(mouseMove) {
    mouseMove.drawmouseMove();
    mouseMove.movemouseMove();
};


