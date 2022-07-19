// import { Garbage } from "./scripts/garbage";
import { flowGarbage } from "./scripts/garbage";

// import { Monster } from "./scripts/monster";
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
    window.addEventListener('resize', ()=> {
        window.edgePosition = canvasBoard.getBoundingClientRect();
    });

    window.gameFrame = 0;
    window.score = 0;
    window.dollar = 0;
    window.life = 3;
    let gameOver = false;
    // window.canvasBoard = canvasBoard

    window.mouse = {
        x: canvasBoard.width / 2,
        y: canvasBoard.height / 2,
    };

    //mousemove bubble effect & player follow mousemove
    window.canvasBoard.addEventListener('mousemove', (event) => {
        mouse.x = event.x - edgePosition.left;
        mouse.y = event.y - edgePosition.top;
    });


    //game function: 10 scores for 1 life
    window.canvasBoard.addEventListener('click',  () =>{
        if (score >= 10 && gameOver === false && pause === false) {
            score -= 10;
            dollar += 100;
            if (soundEffect === true) {
                audioDollar.play();
            }
        }
    });

    //home menu switch
    function show() {
        let div1 = document.querySelector('.board');
        let div2 = document.querySelector('.home');

        if (div1.style.display == "block") {
            div1.style.display = "none";
            div2.style.display = "block";
        } else {
            div1.style.display = "block";
            div2.style.display = "none";
        }
    }

    //start game
    let gameStart = document.getElementById('start');
    let start = false;
    gameStart.addEventListener('click', ()=> {
        if (start === false) {
            if (soundEffect === true){
                audioStart.play();
            }
            start = true;
            setTimeout(() => {
                animate();
                show();
                audioBackground.play();
            }, 1500);
        }
    });

    //restart game
    let gameRestart = document.getElementById('restart');
    gameRestart.addEventListener('click', ()=> {
        if (start === true) {
            window.location.reload();
        }
    });

    //pause game
    let gamePause = document.getElementById('pause');
    let pause = false;

    gamePause.addEventListener('click', ()=> {

        if (pause === false) {
            pause = true;
            gamePause.innerHTML = 'Resume Game';
            if (soundEffect === true){    
                audioPause.play();
            }
        } else {
            pause = false;
            gamePause.innerHTML = 'Pause Game';
            animate();
        }
    });

    //gameover status
    function gameOverStatus() {
        if (life === 0) {
            gameOver = true;
            if (soundEffect === true){    
                audioGameover.play();
            }
            audioBackground.pause();
            if (dollar > 499) {
                ctxBoard.fillText('Excellent job! You made ' + dollar + ' dollars💵! You can buy Patrick a dream gift!', canvasBoard.width / 2 - 400, canvasBoard.height / 2 - 200);
            } else if (dollar < 500 && dollar > 1) {
                ctxBoard.fillText('Great job, you made ' + dollar + ' dollars💵! You can buy Patrick a fancy gift!', canvasBoard.width / 2 - 400, canvasBoard.height / 2 - 200);
            } else (
                ctxBoard.fillText('Nice try...Patrick will be happy even you dont have money to buy him any gifts!', canvasBoard.width / 2 - 400, canvasBoard.height / 2 - 200)
            );
        }
    }


    window.player = new Player();
    window.mouseMove = new MouseMove();
    // window.aquaman = new Aquaman();
    const playerBubble = new PlayerBubble();

    //sound track
    window.audioBackground = document.getElementById("audioBackground");
    window.audioGameover = document.getElementById("audioGameover");
    window.audioDollar = document.getElementById("audioDollar");
    window.audioReduceLife = document.getElementById("audioReduceLife");
    window.audioScore = document.getElementById("audioScore");
    window.audioGarbShark = document.getElementById("audioGarbShark");
    window.audioPause = document.getElementById("audioPause");
    window.audioStart = document.getElementById("audioStart");
    //background music control
    const musicOn = document.getElementById('musicOn');
    const musicOff = document.getElementById('musicOff');

    musicOn.addEventListener('click', ()=> {
        audioBackground.pause();
        musicOn.style.display = "none";
        musicOff.style.display = "block";
    });

    musicOff.addEventListener('click', ()=> {
        audioBackground.play();
        musicOn.style.display = "block";
        musicOff.style.display = "none";
    });

    //audio effect control
    const soundOn = document.getElementById('soundOn');
    const soundOff = document.getElementById('soundOff');
    window.soundEffect = true

    soundOn.addEventListener('click', ()=> {
        soundEffect = false
        soundOn.style.display = "none";
        soundOff.style.display = "block";
    });

    soundOff.addEventListener('click', ()=> {
        soundEffect = true
        soundOn.style.display = "block";
        soundOff.style.display = "none";
    });


    function animate() {

        ctxBoard.clearRect(0, 0, canvasBoard.width, canvasBoard.height);

            //player
            flowPlayer(player);

            //playerBubble
            playerBubbleEffect(player);

            // Garbage
            flowGarbage()

            // Monster
            flowMonster()
            
            //mouseMove
            flowmouseMove(mouseMove);
            
            gameFrame++;

        //score & life 
        ctxBoard.fillStyle = 'white'; //'rgb(85, 91, 95)';
        ctxBoard.font = '30px myFont';
        ctxBoard.fillText('💰: $' + dollar, canvasBoard.width / 2 - 125, 85);
        ctxBoard.font = '30px myFont';
        ctxBoard.fillText('🗑️: ' + score, canvasBoard.width / 2 - 125, 55);
        ctxBoard.font = '30px myFont';
        ctxBoard.fillText('❤️: ' + life, canvasBoard.width / 2 - 125, 25);

        //for resize
        window.edgePosition = canvasBoard.getBoundingClientRect();
        
        var fps = 60;
        //gameover
        gameOverStatus();
        if (gameOver === false && pause === false) {
            setTimeout(function(){
                requestAnimationFrame(animate);
            }, 1000/fps)
        }
    }
});

