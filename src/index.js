import { Garbage } from "./scripts/garbage";
import { flowGarbage } from "./scripts/garbage";

import { Monster } from "./scripts/monster";
import { flowMonster } from "./scripts/monster";

import { Player } from "./scripts/player";
import { flowPlayer } from "./scripts/player";

import { PlayerBubble } from "./scripts/player";
import { playerBubbleEffect } from "./scripts/player";

window.addEventListener("DOMContentLoaded", () => {


    document.canvasBoard = document.getElementById("canvasBoard");
    canvasBoard.width = 1400;
    canvasBoard.height = 800;
    window.ctxBoard = canvasBoard.getContext('2d');
    window.edgePosition = canvasBoard.getBoundingClientRect();
    // window.addEventListener('resize', function (){
    //     edgePosition = canvasBoard.getBoundingClientRect();
    // })

    window.gameFrame = 0;
    window.score = 0;
    window.life = 3;
    let gameOver = false;
    // window.canvasBoard = canvasBoard

    window.mouse = {
        x: canvasBoard.width / 2,
        y: canvasBoard.height / 2,
    };

    //mousemove bubble effect & player follow mousemove
    window.canvasBoard.addEventListener('mousemove', function (event) {
        mouse.x = event.x - edgePosition.left;
        mouse.y = event.y - edgePosition.top;
    });


    //game class control
    window.player = new Player();
    const playerBubble = new PlayerBubble();

    let audio = document.getElementById("myAudio");

    function gameOverStatus() {
        if (life === 0) {
            gameOver = true;
        }
    }


    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

        //player
        // player.drawPlayer();
        // player.movePlayer();
        flowPlayer(player)

        //playerBubble
        playerBubbleEffect();

        // Garbage
        flowGarbage();
        gameFrame++;

        // Monster
        flowMonster();

        //score & life 
        ctxBoard.fillStyle = "black";
        ctxBoard.font = '30px serif';
        ctxBoard.fillText('score: ' + score, canvasBoard.width / 2 - 50, 50, 500);

        ctxBoard.fillStyle = "black";
        ctxBoard.fillText('life: ' + life, canvasBoard.width / 2 - 50, 30, 500);
        // canvasBoard.getBoundingClientRect();

        gameOverStatus();
        if (gameOver === false) {
            requestAnimationFrame(animate);
        }
    }
    animate();



});
