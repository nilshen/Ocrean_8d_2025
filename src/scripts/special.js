// import { Garbage } from "./garbage";
// import { flowGarbage } from "./garbage";

// window.addEventListener("DOMContentLoaded", () => {

//     let special = window.canvasBoard.addEventListener('click', function () {
//         if (score >= 0) {
//             score -= 0;
//             image1.src = "./assets/images/a1.png";
//             for (let j = 0; j < arrGarbage.length; j++) {
//                 arrGarbage.splice(j, 1);
//             }
//             audioAddLife.play();
//         }
//     });

//     //aquaman 
//     const arrAquaman = [];
//     export const Aquaman = function Aquaman() {
//         this.x = -400;
//         this.y = 400;
//         this.radius = 50;
//         this.speedX = 10;
//     };

//     Aquaman.prototype.drawAquaman = function () {
//         ctxBoard.drawImage(image1, this.x, this.y - 50, 800, 460);
//     };

//     Aquaman.prototype.moveAquaman = function () {
//         this.x += this.speedX;
//     };


//     const flowAquaman = function flowAquaman(aquaman) {
//         aquaman.moveAquaman();
//         aquaman.drawAquaman();
//         for (let j = 0; j < arrAquaman.length; j++) {
//             if (arrAquaman[j].x > canvasBoard.width + arrAquaman[j].radius) {
//                 arrAquaman.splice(j, 1);
//             }
//         }
//     };
//     function animate() {

//         flowAquaman(aquaman);
//         if (aquaman !== -1) {
//             requestAnimationFrame();
//         }
//     }
//     animate();
// });

// const image1 = new Image();



