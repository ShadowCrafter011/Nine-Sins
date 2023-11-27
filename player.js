export default class Player {
    constructor(game) {
        this.game = game;
        [this.x, this.y] = this.game.middle();
        this.vx = 0;
        this.vy = 0;
        this.vkonst = 500 * this.game.scale;
        this.radius = 10 * this.game.scale;
        this.hp = 100;
        this.lives = 10;
    }

    enfore_borders() {
        let time_sec = this.game.time_per_frame_sec()
        if (this.x + this.vx * time_sec - this.radius < 0) {
            this.x = this.radius;
            this.vx = 0;
        }
        if (this.x + this.vx * time_sec + this.radius > this.game.canvas.width) {
            this.x = canvas.width - this.radius;
            this.vx = 0;
        }

        if (this.y + this.vy * time_sec - this.radius < 0) {
            this.y = this.radius;
            this.vy = 0;
        }
        if (this.y + this.vy * time_sec + this.radius > this.game.canvas.height) {
            this.y = canvas.height - this.radius;
            this.vy = 0;
        }
    }
}