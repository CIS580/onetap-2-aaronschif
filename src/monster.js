
class Monster {
    constructor (args) {
        let {x, y} = args;
        this.x = x;
        this.y = y;
        this.width = 16;
        this.height = 16
        this.spriteWidth = 16;
        this.spriteHeight = 16;
        this.spritesheet = new Image();
        this.spritesheet.src = encodeURI('assets/bat/bat.png');

        this.frame = 0;
        this.spriteFrames = 6;
        this.animateTime = 0;
        this.framerate = 16;
    }

    update(time) {

    }

    render(time, ctx){
        this.animateTime += time;
        if (((this.animateTime|0)) % 4 === 0) {
            this.frame = (this.frame + 1) % this.spriteFrames
        }

        ctx.drawImage(
          // image
          this.spritesheet,
          // source rectangle
          this.width * this.frame, 0, this.width, this.height,
          // destination rectangle
          this.x, this.y, this.spriteWidth, this.spriteHeight
        );
    }
}

module.exports = exports = Monster;
