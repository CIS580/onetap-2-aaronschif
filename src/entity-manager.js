"use strict";

module.exports = exports = EntityManager;

class EntityManager {
    constructor(width, height, cellSize) {
        this.worldWidth = width;
        this.worldHeight = height;
        this.cellSize = cellSize;
        this.widthInCells = Math.ceil(width / cellSize);
        this.numberOfCells = this.widthInCells * Math.ceil(height /cellSize);
        this.cells = [];
        for (let i = 0; i < this.numberOfCells; i++) {
            this.cells[i] = [];
        }
    }

    addEntity(entity {
        let left = Math.floor(entity.x / this.cellSize),
            right = left + entity.width,
            top = Math.floor(entity.y / this.cellSize),
            bottom = top + entity.height;
    })
}
