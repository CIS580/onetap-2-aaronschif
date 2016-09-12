"use strict";

/**
 * @module exports the Player class
 */
module.exports = exports = Player;

/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Player(position) {
  this.state = "walking";
  this.frame = 0;
  this.animateTime = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 16;
  this.height = 32;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/link/not link/notlink up.png');
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Player.prototype.update = function(time) {
    this.animateTime += time|0;
    if (this.animateTime > 1000/16) {
        this.animateTime = 0;
        this.frame = (this.frame+1) %4;
        this.y -= 1;
    }
}

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Player.prototype.render = function(time, ctx) {
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.width * this.frame, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, 2*this.width, 2*this.height
  );
}
