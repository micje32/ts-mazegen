/// <reference path="Cell.ts"/>

class Draw extends Maze {
    render(): void {
        if(this.data.length === 0) {
            this.setUp()
        }

        this.draw(10,10,10)
    }

    draw(numRows: number, numCols: number, cellLength: number) {
        this._context.clearRect(0, 0, this._width, this._height)

        for (let row=0; row < numRows; row++) {
            for (let col=0; col < numCols; col++) {
                let rectX = col * cellLength
                let rectY = col * cellLength
                let currentCell = this.data[row][col]
                this._context.fillStyle = currentCell.getColor()
                this._context.fillRect(rectX, rectY, cellLength, cellLength)
            }
        }
    }

}