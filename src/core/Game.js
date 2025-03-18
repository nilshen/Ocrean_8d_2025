import { GAME_CONFIG } from '../config/gameConfig';
import { AudioManager } from '../managers/AudioManager';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.audioManager = new AudioManager();

        // Initialize game state
        this.state = GAME_CONFIG.STATES.MENU;
        this.score = GAME_CONFIG.GAME.INITIAL_SCORE;
        this.dollars = GAME_CONFIG.GAME.INITIAL_DOLLARS;
        this.lives = GAME_CONFIG.GAME.INITIAL_LIVES;
        this.gameFrame = 0;

        // Initialize mouse position
        this.mouse = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        };

        // Bind methods
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.startGame = this.startGame.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    initialize() {
        this.setupEventListeners();
        this.setupAudioControls();
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('click', this.handleClick);

        // Game control buttons
        document.getElementById('start').addEventListener('click', this.startGame);
        document.getElementById('pause').addEventListener('click', this.pauseGame);
        document.getElementById('restart').addEventListener('click', this.restartGame);
    }

    setupAudioControls() {
        const musicOn = document.getElementById('musicOn');
        const musicOff = document.getElementById('musicOff');
        const soundOn = document.getElementById('soundOn');
        const soundOff = document.getElementById('soundOff');

        musicOn.addEventListener('click', () => {
            const isMusicEnabled = this.audioManager.toggleMusic();
            musicOn.style.display = isMusicEnabled ? "block" : "none";
            musicOff.style.display = isMusicEnabled ? "none" : "block";
        });

        musicOff.addEventListener('click', () => {
            const isMusicEnabled = this.audioManager.toggleMusic();
            musicOn.style.display = isMusicEnabled ? "block" : "none";
            musicOff.style.display = isMusicEnabled ? "none" : "block";
        });

        soundOn.addEventListener('click', () => {
            const isSoundEnabled = this.audioManager.toggleSound();
            soundOn.style.display = isSoundEnabled ? "block" : "none";
            soundOff.style.display = isSoundEnabled ? "none" : "block";
        });

        soundOff.addEventListener('click', () => {
            const isSoundEnabled = this.audioManager.toggleSound();
            soundOn.style.display = isSoundEnabled ? "block" : "none";
            soundOff.style.display = isSoundEnabled ? "none" : "block";
        });
    }

    handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = event.clientX - rect.left;
        this.mouse.y = event.clientY - rect.top;
    }

    handleClick() {
        if (this.state !== GAME_CONFIG.STATES.PLAYING) return;

        if (this.score >= GAME_CONFIG.GAME.SCORE_TO_DOLLAR_RATIO) {
            this.score -= GAME_CONFIG.GAME.SCORE_TO_DOLLAR_RATIO;
            this.dollars += GAME_CONFIG.GAME.DOLLAR_REWARD;
            this.audioManager.play('dollar');
        }
    }

    startGame() {
        if (this.state === GAME_CONFIG.STATES.MENU) {
            this.audioManager.play('start');
            setTimeout(() => {
                this.state = GAME_CONFIG.STATES.PLAYING;
                this.showGameBoard();
                this.audioManager.play('background_music');
                this.animate();
            }, 1500);
        }
    }

    pauseGame() {
        if (this.state === GAME_CONFIG.STATES.PLAYING) {
            this.state = GAME_CONFIG.STATES.PAUSED;
            this.audioManager.play('pause');
            document.getElementById('pause').innerHTML = 'Resume Game';
        } else if (this.state === GAME_CONFIG.STATES.PAUSED) {
            this.state = GAME_CONFIG.STATES.PLAYING;
            document.getElementById('pause').innerHTML = 'Pause Game';
            this.animate();
        }
    }

    restartGame() {
        if (this.state === GAME_CONFIG.STATES.PLAYING || this.state === GAME_CONFIG.STATES.GAME_OVER) {
            window.location.reload();
        }
    }

    showGameBoard() {
        document.querySelector('.board').style.display = "block";
        document.querySelector('.home').style.display = "none";
    }

    update() {
        if (this.state !== GAME_CONFIG.STATES.PLAYING) return;

        // Update game objects
        // TODO: Update player, garbage, monsters, etc.

        this.gameFrame++;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw game objects
        // TODO: Draw player, garbage, monsters, etc.

        // Draw UI
        this.drawUI();

        if (this.state === GAME_CONFIG.STATES.GAME_OVER) {
            this.drawGameOver();
        }
    }

    drawUI() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px myFont';
        this.ctx.fillText('💰: $' + this.dollars, this.canvas.width / 2 - 125, 85);
        this.ctx.fillText('🗑️: ' + this.score, this.canvas.width / 2 - 125, 55);
        this.ctx.fillText('❤️: ' + this.lives, this.canvas.width / 2 - 125, 25);
    }

    drawGameOver() {
        this.audioManager.play('game_over');
        this.audioManager.stopAll();

        let message;
        if (this.dollars > GAME_CONFIG.GAME.EXCELLENT_THRESHOLD) {
            message = `Excellent job! You made ${this.dollars} dollars💵! You can buy Patrick a dream gift!`;
        } else if (this.dollars > 1) {
            message = `Great job, you made ${this.dollars} dollars💵! You can buy Patrick a fancy gift!`;
        } else {
            message = 'Nice try...Patrick will be happy even you dont have money to buy him any gifts!';
        }

        this.ctx.fillText(message, this.canvas.width / 2 - 400, this.canvas.height / 2 - 200);
    }

    checkGameOver() {
        if (this.lives <= 0 && this.state !== GAME_CONFIG.STATES.GAME_OVER) {
            this.state = GAME_CONFIG.STATES.GAME_OVER;
        }
    }

    animate() {
        if (this.state === GAME_CONFIG.STATES.PLAYING) {
            this.update();
            this.draw();
            this.checkGameOver();
            setTimeout(() => {
                requestAnimationFrame(() => this.animate());
            }, 1000 / GAME_CONFIG.CANVAS.FPS);
        }
    }
} 