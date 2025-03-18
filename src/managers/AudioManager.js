import { GAME_CONFIG } from '../config/gameConfig';

export class AudioManager {
    constructor() {
        this.sounds = {};
        this.isSoundEnabled = true;
        this.isMusicEnabled = true;
        this.initializeAudio();
    }

    initializeAudio() {
        // Initialize all audio elements
        Object.entries(GAME_CONFIG.AUDIO).forEach(([key, path]) => {
            const audio = new Audio(path);
            audio.id = key.toLowerCase();
            this.sounds[key.toLowerCase()] = audio;
        });
    }

    play(soundName) {
        if (!this.isSoundEnabled) return;
        const sound = this.sounds[soundName.toLowerCase()];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(error => console.warn(`Failed to play sound ${soundName}:`, error));
        }
    }

    toggleSound() {
        this.isSoundEnabled = !this.isSoundEnabled;
        return this.isSoundEnabled;
    }

    toggleMusic() {
        this.isMusicEnabled = !this.isMusicEnabled;
        const backgroundMusic = this.sounds.background_music;

        if (this.isMusicEnabled) {
            backgroundMusic.play().catch(error => console.warn('Failed to play background music:', error));
        } else {
            backgroundMusic.pause();
        }

        return this.isMusicEnabled;
    }

    stopAll() {
        Object.values(this.sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }
} 