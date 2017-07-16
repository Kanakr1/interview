let ConnectFour = function() {
  this.board = Array(7);
  this.init();
  this.nextSpace = Array(7).fill(0);
  this.piecesPlayed = 0;
}

ConnectFour.prototype.init = function() {
  let col = [];
  for (let i = 0; i < 6; i++) {
    col[i] = '.';
  }
  for (let i = 0; i < this.board.length; i++) {
    this.board[i] = col.slice();
  }
};

ConnectFour.prototype.checkWin = function(i, j) {
  if (this.checkHorizontal(i, j)) {
    console.log('winner');
  }
};

ConnectFour.prototype.makeMove = function(player, i) {
  let j = this.nextSpace[i];
  this.board[i][j] = player;
  this.nextSpace[i]++;
  this.displayBoard();
  this.checkWin(i, j);
}

ConnectFour.prototype.checkHorizontal = function(index, j) {
  let piece = this.board[index][j];
  let h = index - 1;
  let total = 1;
  let board = this.board;
  let flag = false;
  for (let i = index + 1; i < index + 5; i++) {
    if (total === 4 || flag) { break; }
    let found = false;
    if (i < 7 && board[i][j] === piece) {
      found = true;
      total++;
    }
    if (h > -1 && board[h][j] === piece) {
      found = true;
      total++;
    } 
    if (!found) {
      flag = true;
    }
    h--;
  }

  return total === 4 ? true : false;
};

ConnectFour.prototype.displayBoard = function() {
  console.log(this.board);
};

let game = new ConnectFour();
game.displayBoard();

game.makeMove('x', 5);
game.makeMove('x', 3);
game.makeMove('x', 2);
game.makeMove('x', 4);
// game.makeMove('x', 5);




