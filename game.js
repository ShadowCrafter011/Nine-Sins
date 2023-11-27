import Player from "player";

export default class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.update_scale();
        window.addEventListener("resize", this.update_scale);

        this.fps = 60;

        this.waves = [];
        this.wave_count = 0;

        this.time_passed = 0;
        this.frame_count = 0;

        this.player = new Player(this);
    }

    start() {

    }

    update_scale() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        if (this.canvas.width / this.canvas.height > 2) {
            this.canvas.width = this.canvas.height * 2;
        } else {
            this.canvas.height = this.canvas.width / 2;
        }

        this.scale = Math.sqrt(Math.PI / (2000 * 1000) * canvas.height * canvas.width);
    }

    middle() {
        return [this.canvas.width / 2, this.canvas.height / 2];
    }

    time_per_frame() {
        return 1000 / this.fps;
    }

    time_per_frame_sec() {
        return 1 / this.fps;
    }
}