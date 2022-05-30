

    //Garbage
    const arrGarbage = [];
    export const Garbage = function Garbage() {
        // debugger
        this.x = Math.random() * canvasBoard.width;
        //Commented this out because the garbage needs to fall from the ceiling;
        this.y = Math.random(); //* canvasBoard.height; 
        this.radius = 20;
        this.speedX = (Math.random() * 20 - 9.5) / 4; //goes two ways left/right  
        this.speedY = Math.random() * 3 + 2;
        this.killMonster = false; //if sliced the monster, then dont need to set the boolean.
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

    export const flowGarbage = function flowGarbage () {
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
                    && arrGarbage[j].killMonster === false) {
                    // arrMonster.splice(i, 1);
                    score -= 3;
                    arrGarbage[j].killMonster = true  //if sliced the monster, then dont need to set the boolean. 
                }
        }

        if (gameFrame % 40 === 0) {
            arrGarbage.push(new Garbage());
        }

        while (arrGarbage.length < 4) {
            arrGarbage.push(new Garbage());
        }
    }
    //first try. code work but garbage disappear before hit the ground. 
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


// module.exports = Garbage