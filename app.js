const game = new NewGame;
document.getElementById("1").addEventListener("click", addSymbol);

function addSymbol(){
    if (game.player === "player1"){
        document.getElementByI("1").innerHTML = '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff6%2FLetterX.svg%2F1200px-LetterX.svg.png&f=1&nofb=1" class="symbol">';
    }
}