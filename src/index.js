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
    if (score >= 10 && gameOver === false && pause === false) {
        score -= 10;
        life += 1;
        audioAddLife.play();
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
    let start = false
    gameStart.addEventListener('click', function () {
        if (start === false) {
            audioStart.play()
            start = true
            setTimeout(()=>{
                animate();
                show()
                audioBackground.play()
            },1500)
        } 
    });

    //restart game
    let gameRestart = document.getElementById('restart');
    gameRestart.addEventListener('click', function () {
        if (start === true) {
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

    //gameover status
    function gameOverStatus() {
        if (life === 0) {
            gameOver = true;

            audioGameover.play();
            audioBackground.pause();
            if (score > 19) {
                ctxBoard.fillText('Great job! You recycled '+ score + ' garbages!', canvasBoard.width/2 - 200, canvasBoard.height/2 - 200)
            } else if (score < 20 && score > 1 ){
                ctxBoard.fillText('Well done, you recycled '+ score + ' garbages!', canvasBoard.width/2 - 200, canvasBoard.height/2 - 200)
            } else (
                ctxBoard.fillText('Nice try... You recycled '+ score + ' garbage!', canvasBoard.width/2 - 200, canvasBoard.height/2 - 200)
            )
        }
    }

    //game class control
    // document.canvasBoard.addEventListener('click', function startGame() {
    //     window.player = new Player();
    //     const playerBubble = new PlayerBubble();
    // })

    window.player = new Player();
    window.mouseMove = new MouseMove();
    // window.aquaman = new Aquaman();
    const playerBubble = new PlayerBubble();
    // const fps = 100
    //sound track
    window.audioBackground = document.getElementById("audioBackground");
    window.audioGameover = document.getElementById("audioGameover");
    window.audioAddLife = document.getElementById("audioAddLife");
    window.audioReduceLife = document.getElementById("audioReduceLife");
    window.audioScore = document.getElementById("audioScore");
    window.audioGarbShark = document.getElementById("audioGarbShark");
    window.audioPause = document.getElementById("audioPause");
    window.audioStart = document.getElementById("audioStart");

    //volumn control
    // function thisVolume(volume_value) { 
    //     var myvideo = document.getElementById("myvid"); 
    //     document.getElementById("vol").innerHTML=volume_value; 
    //     myvideo.volume = volume_value / 100; 
    // }
    // var ppbutton = document.getElementById("vidbutton");
    //     ppbutton.addEventListener("click", playPause);
    //     myVideo = document.getElementById("myvid");
    // function playPause() { 
    //     if (myVideo.paused) {
    //         myVideo.play();
    //         ppbutton.innerHTML = "Pause";
    //         }
    //     else  {
    //         myVideo.pause(); 
    //         ppbutton.innerHTML = "Play";
    //         }
    // } 
    // function thisVolume(volume_value)
    //     {
    //         var myvideo = document.getElementById("myvid");
    //         document.getElementById("vol").innerHTML=volume_value;
    //         myvideo.volume = volume_value / 100;
            
    // }
    


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
        ctxBoard.fillStyle =  'white' //'rgb(85, 91, 95)';
        ctxBoard.font = '30px serif';
        ctxBoard.fillText('Score: ' + score, canvasBoard.width/2 - 50, 60, 500);
        ctxBoard.font = '30px serif';
        ctxBoard.fillText('Lives: ' + life, canvasBoard.width/2 - 50, 30, 500);
        // ctxBoard.fillRect(j * 25, i * 25, 25, 25);
        // ctxBoard.fillStyle = "blue";
        // ctxBoard.font = '30px serif';
        // ctxBoard.fillText('Score: ' + score, canvasBoard.width / 2 - 50, 50, 500);

        // ctxBoard.fillStyle = "blue";
        // ctxBoard.font = '30px serif';
        // ctxBoard.fillText('Lives: ' + life, canvasBoard.width / 2 - 50, 30, 500);
        // canvasBoard.getBoundingClientRect();
        window.edgePosition = canvasBoard.getBoundingClientRect();
        gameOverStatus();
        if (gameOver === false && pause === false) {
            setTimeout(() => {
                requestAnimationFrame(animate);
            }, 18)
        } 
    }




});
