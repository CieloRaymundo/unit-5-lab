class NewGame{
    constructor(){
        this.players = ["Player 1", "Player 2"];
        this.charm = ["X", "O"];
        this.turn = 0;
    }
    
    clearBoard(){
        this.board = [];
    }
    
    switchTurn(){
        if (this.turn === 0){
            this.turn === 1;
        }this.turn === 0;
    }
    
    winner(){
        if(this.board[0] === this.board[1] === this.board[2]){
            if(this.board[0]==="X"){
                let player = this.players[0];
                document.getElementByTagName('h1').innerHTML = `${player} wins!`;
            }let player = this.players[1];
            document.getElementByTagName('h1').innerHTML = `${player} wins!`;
        }else if (this.board[3] === this.board[4] === this.board[5]){
            if(this.board[3]==="X"){
                let player = this.players[0];
                document.getElementByTagName('h1').innerHTML = `${player} wins!`;
            }let player = this.players[1];
            document.getElementByTagName('h1').innerHTML = `${player} wins!`;
        }else if (this.board[6] === this.board[7] === this.board[8]){
            if(this.board[6]==="X"){
                let player = this.players[0];
                document.getElementByTagName('h1').innerHTML = `${player} wins!`;
            }let player = this.player[1];
            document.getElementByTagName('h1').innerHTML = `${player} wins!`;
        }else if (this.board[0] === this.board[4] === this.board[8]){
            if(this.board[0]==="X"){
                let player = this.players[0];
                document.getElementByTagName('h1').innerHTML = `${player} wins!`;
            }let player = this.players[1];
            document.getElementByTagName('h1').innerHTML = `${player} wins!`;
        }else if (this.board[2] === this.board[4] === this.board[6]){
            if(this.board[2]==="X"){
                let player = this.players[0];
                document.getElementByTagName('h1').innerHTML = `${player} wins!`;
            }let player = this.players[1];
            document.getElementByTagName('h1').innerHTML = `${player} wins!`;
        }
    }
}

const game = new NewGame;
document.getElementsByClassName("clicked").addEventListener("click", addSymbol());

function addSymbol(){
    document.getElementsByClassName("clicked").innerHTML = '<span>' + `${game.charm[game.turn]}` + '</span>';
    game.switchTurn();
}