class TicTacToe {
    constructor() {
      this.marks = ['x', 'o'];
      this.matrix = matrixArray(3);
      this.currentIndex = 0;
    }

    getCurrentPlayerSymbol() {
      return this.marks[this.currentIndex];
    }

    nextTurn(row, col) {
      if (!this.getFieldValue(row, col)) {
        this.matrix[row][col] = this.getCurrentPlayerSymbol();
        this.currentIndex = (this.currentIndex + 1) % 2 ;
      }
    }

    isFinished() {
      return ((this.isDraw()) || (this.getWinner())) ? true : false;
    }

    getWinner() {
      var winner = null;
        for (var i = 0; i < 3; i++) {
          if ((this.matrix[i][0] == this.matrix[i][1]) &&
              (this.matrix[i][0] == this.matrix[i][2]))
            winner = this.matrix[i][0];
          if ((this.matrix[0][i] == this.matrix[1][i]) &&
              (this.matrix[0][i] == this.matrix[2][i]))
            winner = this.matrix[0][i];
        }
        if ((this.matrix[0][0] == this.matrix[1][1]) &&
            (this.matrix[0][0] == this.matrix[2][2]))
          winner = this.matrix[1][1];
        if ((this.matrix[0][2] == this.matrix[1][1])  &&
            (this.matrix[0][2] == this.matrix[2][0]))
          winner = this.matrix[1][1];
      return winner;
    }

    noMoreTurns() {
      for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
          if (!this.matrix[i][j]) return false;
      return true;
    }

    isDraw() {
      return  ((this.noMoreTurns()) && (!this.getWinner())) ?  true : false;
    }

    getFieldValue(row, col) {
      return this.matrix[row][col];
    }
}

function matrixArray(col){
  var arr = new Array();
  for(var i=0; i<col; i++){
    arr[i] = new Array();
    for(var j=0; j<col; j++){
      arr[i][j] = null;
    }
  }
  return arr;
}

module.exports = TicTacToe;
