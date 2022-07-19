//---------------------------ES6---------------------------------------------
    //Garbage
    const arrGarbage = [];
    window.arrGarbage = arrGarbage;
    export const Garbage = class Garbage {
        constructor() {
            // debugger
            this.x = Math.random() * canvasBoard.width;
            //Commented this out because the garbage needs to fall from the ceiling;
            this.y = Math.random(); //* canvasBoard.height; 
            this.radius = 25;
            this.speedX = (Math.random() * 20 - 9.5) / 4; //goes two ways left/right  
            this.speedY = Math.random() * 3 + 2;
            this.killMonster = false; //if sliced the monster, then dont need to set the boolean.
    
            const random = Math.floor(Math.random() * 8 + 1)
            
            switch(random) {
                case 1:
                    this.image = image1;
                    break;
                case 2:
                    this.image = image2;
                    break;
                case 3:
                    this.image = image3;
                    break;
                case 4:
                    this.image = image4;
                    break;
                case 5:
                    this.image = image5;
                    break;
                case 6:
                    this.image = image6;
                    break;
                case 7:
                    this.image = image7;
                    break;
                case 8:
                    this.image = image8;
                    break;
                // case 9:
                //     this.image = image9;
                //     break;
                // case 10:
                //     this.image = image10;
                //     break;
            } 
        }

    drawGarbage() {
        // ctxBoard.fillStyle = "yellow";
        // ctxBoard.beginPath();
        // ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctxBoard.fill();
        // ctxBoard.closePath();

            ctxBoard.drawImage(this.image, this.x-23, this.y-22, 50, 53)
    
            // ctxBoard.drawImage(g2, this.x-20, this.y-25, 42, 45)

    };

    moveGarbage() {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    distanceGarbage(otherObject) {
        let dx = this.x - otherObject.x;
        let dy = this.y - otherObject.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
}

    export const flowGarbage = (flowGarbage) => {
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
                if (soundEffect === true){    
                    audioScore.play()
                }
            }
        }

        for (let j = 0; j < arrGarbage.length; j++) {
            for (let i = 0; i < arrMonster.length; i++)
                if (arrGarbage[j].distanceGarbage(arrMonster[i]) <= arrGarbage[j].radius + arrMonster[i].radius
                    && arrGarbage[j].killMonster === false) {
                    // arrMonster.splice(i, 1);
                    if (score > 0){
                        score -= 1;
                        if (soundEffect === true){    
                            audioGarbShark.play()
                        }
                    }
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

const image1 = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
const image5 = new Image();
const image6 = new Image();
const image7 = new Image();
const image8 = new Image();
// const image9 = new Image();
// const image10 = new Image();
// const image11 = new Image();
// const image12 = new Image();
// const image13 = new Image();
// const image14 = new Image();
// const image15 = new Image();

image1.src = "./assets/images/g1.png"
image2.src = "./assets/images/g2.png"
image3.src = "./assets/images/g3.png"
image4.src = "./assets/images/g4.png"
image5.src = "./assets/images/g5.png"
image6.src = "./assets/images/g6.png"
image7.src = "./assets/images/g7.png"
image8.src = "./assets/images/g8.png"
// image9.src = "./assets/images/g9.png"
// image10.src = "./assets/images/g10.png"
// image11.src = "./assets/images/g11.png"
// image12.src = "./assets/images/g12.png"
// image13.src = "./assets/images/g13.png"
// image14.src = "./assets/images/g14.png"
// image15.src = "./assets/images/g15.png"




//---------------------------ES5---------------------------------------------
//     //Garbage
//     const arrGarbage = [];
//     window.arrGarbage = arrGarbage;
//     export const Garbage = function Garbage() {
//         // debugger
//         this.x = Math.random() * canvasBoard.width;
//         //Commented this out because the garbage needs to fall from the ceiling;
//         this.y = Math.random(); //* canvasBoard.height; 
//         this.radius = 25;
//         this.speedX = (Math.random() * 20 - 9.5) / 4; //goes two ways left/right  
//         this.speedY = Math.random() * 3 + 2;
//         this.killMonster = false; //if sliced the monster, then dont need to set the boolean.

//         const random = Math.floor(Math.random() * 8 + 1)
        
//         switch(random) {
//             case 1:
//                 this.image = image1;
//                 break;
//             case 2:
//                 this.image = image2;
//                 break;
//             case 3:
//                 this.image = image3;
//                 break;
//             case 4:
//                 this.image = image4;
//                 break;
//             case 5:
//                 this.image = image5;
//                 break;
//             case 6:
//                 this.image = image6;
//                 break;
//             case 7:
//                 this.image = image7;
//                 break;
//             case 8:
//                 this.image = image8;
//                 break;
//             // case 9:
//             //     this.image = image9;
//             //     break;
//             // case 10:
//             //     this.image = image10;
//             //     break;
//         } 

//     Garbage.prototype.drawGarbage = function () {
//         // ctxBoard.fillStyle = "yellow";
//         // ctxBoard.beginPath();
//         // ctxBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         // ctxBoard.fill();
//         // ctxBoard.closePath();

//             ctxBoard.drawImage(this.image, this.x-23, this.y-22, 50, 53)
    
//             // ctxBoard.drawImage(g2, this.x-20, this.y-25, 42, 45)

//     };

//     Garbage.prototype.moveGarbage = function () {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     };

//     Garbage.prototype.distanceGarbage = function (otherObject) {
//         let dx = this.x - otherObject.x;
//         let dy = this.y - otherObject.y;
//         return Math.sqrt(dx * dx + dy * dy);
//     };
// }

//     export const flowGarbage = function flowGarbage () {
//         for (let i = 0; i < arrGarbage.length; i++) {
//             arrGarbage[i].moveGarbage();
//             arrGarbage[i].drawGarbage();
//         }

//         for (let j = 0; j < arrGarbage.length; j++) {
//             if (arrGarbage[j].y > canvasBoard.height) {
//                 arrGarbage.splice(j, 1);    //should have been arrGarbage.splice(j, 1) not arrGarbage.splice(arrGarbage[j], 1)!!!!
//             }
//         }


//         for (let j = 0; j < arrGarbage.length; j++) {
//             if (arrGarbage[j].distanceGarbage(player) <= arrGarbage[j].radius + player.radius) {
//                 arrGarbage.splice(j, 1);
//                 score += 1;
//                 if (soundEffect === true){    
//                     audioScore.play()
//                 }
//             }
//         }

//         for (let j = 0; j < arrGarbage.length; j++) {
//             for (let i = 0; i < arrMonster.length; i++)
//                 if (arrGarbage[j].distanceGarbage(arrMonster[i]) <= arrGarbage[j].radius + arrMonster[i].radius
//                     && arrGarbage[j].killMonster === false) {
//                     // arrMonster.splice(i, 1);
//                     if (score > 0){
//                         score -= 1;
//                         if (soundEffect === true){    
//                             audioGarbShark.play()
//                         }
//                     }
//                     arrGarbage[j].killMonster = true  //if sliced the monster, then dont need to set the boolean. 
//                 }
//         }

//         if (gameFrame % 40 === 0) {
//             arrGarbage.push(new Garbage());
//         }

//         while (arrGarbage.length < 4) {
//             arrGarbage.push(new Garbage());
//         }
//     }

// const image1 = new Image();
// const image2 = new Image();
// const image3 = new Image();
// const image4 = new Image();
// const image5 = new Image();
// const image6 = new Image();
// const image7 = new Image();
// const image8 = new Image();
// // const image9 = new Image();
// // const image10 = new Image();
// // const image11 = new Image();
// // const image12 = new Image();
// // const image13 = new Image();
// // const image14 = new Image();
// // const image15 = new Image();

// image1.src = "./assets/images/g1.png"
// image2.src = "./assets/images/g2.png"
// image3.src = "./assets/images/g3.png"
// image4.src = "./assets/images/g4.png"
// image5.src = "./assets/images/g5.png"
// image6.src = "./assets/images/g6.png"
// image7.src = "./assets/images/g7.png"
// image8.src = "./assets/images/g8.png"
// // image9.src = "./assets/images/g9.png"
// // image10.src = "./assets/images/g10.png"
// // image11.src = "./assets/images/g11.png"
// // image12.src = "./assets/images/g12.png"
// // image13.src = "./assets/images/g13.png"
// // image14.src = "./assets/images/g14.png"
// // image15.src = "./assets/images/g15.png"