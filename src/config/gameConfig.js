export const GAME_CONFIG = {
    // Canvas settings
    CANVAS: {
        WIDTH: 1400,
        HEIGHT: 800,
        FPS: 60
    },

    // Game settings
    GAME: {
        INITIAL_LIVES: 3,
        INITIAL_SCORE: 0,
        INITIAL_DOLLARS: 0,
        SCORE_TO_DOLLAR_RATIO: 10,
        DOLLAR_REWARD: 100,
        EXCELLENT_THRESHOLD: 500
    },

    // Audio settings
    AUDIO: {
        BACKGROUND_MUSIC: './assets/music/music.mp3',
        GAME_OVER: './assets/music/gameover.wav',
        DOLLAR: './assets/music/audioDollar.mp3',
        REDUCE_LIFE: './assets/music/audioReduceLife.wav',
        GARBAGE_SHARK: './assets/music/audioGarbShark.wav',
        SCORE: './assets/music/audioScore.wav',
        PAUSE: './assets/music/audioPause.wav',
        START: './assets/music/audioStart.wav'
    },

    // Game states
    STATES: {
        MENU: 'MENU',
        PLAYING: 'PLAYING',
        PAUSED: 'PAUSED',
        GAME_OVER: 'GAME_OVER'
    }
}; 