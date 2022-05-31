import { Garbage } from "./scripts/garbage";
import { flowGarbage } from "./scripts/garbage";

import { Monster } from "./scripts/monster";
import { flowMonster } from "./scripts/monster";

import { Player } from "./scripts/player";
import { flowPlayer } from "./scripts/player";

import { PlayerBubble } from "./scripts/player";
import { playerBubbleEffect } from "./scripts/player";

import { flowmouseMove, MouseMove } from "./scripts/mouseMove";

window.addEventListener("DOMContentLoaded", () => {

    document.canvasBoard = document.getElementById("canvasBoard");
    canvasBoard.width = 1400;
    canvasBoard.height = 800;
    window.ctxBoard = canvasBoard.getContext('2d');

    window.edgePosition = canvasBoard.getBoundingClientRect();
    window.addEventListener('resize', function () {
        window.edgePosition = canvasBoard.getBoundingClientRect();
    });

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

    //game function: 10 scores for 1 life
    window.canvasBoard.addEventListener('click', function () {
        if (score >= 10) {
            score -= 10;
            life += 1;
            audioAddLife.play();
        }
    });

    //start game
    let gameStart = document.getElementById('start');
    let start = false
    gameStart.addEventListener('click', function () {
        if (start === false) {
            animate();
            start = true
            audioBackground.play()
            gameStart.innerHTML ='Restart'
        } else {
            window.location.reload();
        }
    });


    //pause game
    let gamePause = document.getElementById('pause');
    let pause = false;

    gamePause.addEventListener('click', function () {
    
        if (pause === false) {
            pause = true;
            gamePause.innerHTML = 'Resume Game'
            audioPause.play();
        } else {
            pause = false;
            gamePause.innerHTML = 'Pause Game'
            animate()
        }
        

    });



    //game class control
    // document.canvasBoard.addEventListener('click', function startGame() {
    //     window.player = new Player();
    //     const playerBubble = new PlayerBubble();
    // })


    window.player = new Player();
    window.mouseMove = new MouseMove();
    const playerBubble = new PlayerBubble();

    //sound track
    window.audioBackground = document.getElementById("audioBackground");
    window.audioGameover = document.getElementById("audioGameover");
    window.audioAddLife = document.getElementById("audioAddLife");
    window.audioReduceLife = document.getElementById("audioReduceLife");
    window.audioScore = document.getElementById("audioScore");
    window.audioGarbShark = document.getElementById("audioGarbShark");
    window.audioPause = document.getElementById("audioPause");

    

    function gameOverStatus() {
        if (life === 0) {
            gameOver = true;

            audioGameover.play();
            audioBackground.pause();
        }
    }


    function animate() {
        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

        //player
        flowPlayer(player);

        //playerBubble
        playerBubbleEffect(player);

        // Garbage
        flowGarbage();
        gameFrame++;

        // Monster
        flowMonster();

        //mouseMove
        flowmouseMove(mouseMove);

        //score & life 
        ctxBoard.fillStyle = "black";
        ctxBoard.font = '30px serif';
        ctxBoard.fillText('score: ' + score, canvasBoard.width / 2 - 50, 50, 500);

        ctxBoard.fillStyle = "black";
        ctxBoard.fillText('life: ' + life, canvasBoard.width / 2 - 50, 30, 500);
        // canvasBoard.getBoundingClientRect();


        gameOverStatus();
        if (gameOver === false && pause === false) {
            requestAnimationFrame(animate);
        }
    }




});
