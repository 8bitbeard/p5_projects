class Piece {
  constructor(type, x = 0, y = 0) {
    this.originalShape = type.shape;
    this.x = x;
    this.y = y;
    this.color = type.color;
    this.shape = this.fillPiece(this.originalShape.length);
    this.moved = false;
  }

  fillPiece(pieceLength) {
    return Array.from( new Array(pieceLength), (row, i) =>
           Array.from( new Array(pieceLength), (col, j) =>
           this.originalShape[i][j] == 1 ? new Box(this.x + j * boxDimension, this.y + i * boxDimension, boxDimension, this.color) : null)
    )
  }

  moveDown() {
    this.y += boxDimension;
    this.moved = true;
  }

  updatePiecePosition() {
    this.shape.forEach( (row, i) => row.forEach( (col, j) => {
      if (col) {
        col.x = this.x + j * boxDimension;
        col.y = this.y + i * boxDimension;
      }
    }))
  }

  rotateMatrix() {
    this.shape.reverse()[0].map((column, index) => {
      this.shape.map(row => row[index])
    })
  }

  transposeMatrix() {
    let dimension = this.shape.length;
    let aux = Array.from( new Array(dimension), element => Array.from(new Array(dimension), x => null) );
    this.shape.forEach( (row, i) => row.forEach( (col, j) => aux[j][i] = col));
    this.shape = aux;
  }

  rotatePiece() {
    if (this.x >= begginingPoint && this.originalShape[0].length * boxDimension + this.x <= endPoint) {
      this.transposeMatrix();
      this.rotateMatrix();
      this.updatePiecePosition();
    }
  }

  canCollide(callbackfn) {
    return this.shape.reduce( (z, row) => z.concat(row.filter(col => col != null).filter( box => callbackfn(box))), []).length > 0
  }

  show() {
    this.updatePiecePosition();
    this.shape.forEach( x => x.filter( j => j != null).forEach(box => box.show()))
  }
}