var currentPlayer = 'X';
var boxes = document.querySelectorAll('.box');
var player = document.getElementById("player");
var winner = document.getElementById("winner");

boxes.forEach(box => box.addEventListener('click',playerClick));

function playerClick(event) {
    if (event.target.innerText != '' ||winner.innerText != ''){
        return;
    }
    event.target.innerText = currentPlayer;
    if (isWinner()) {
        winner.innerText = "Player   " + currentPlayer + "  WINS!!";
    }
    else{
        currentPlayer = (currentPlayer =='X') ? 'O': 'X';
        player.innerText = "Current Player: " + currentPlayer;
    }
    if (isDraw()) {
        winner.innerText = "Game is DRAWN!!"
    }
}
        var reset = document.getElementById("reset");
        reset.addEventListener("click", clear);
        function clear(){
        winner.innerText = "";
         currentPlayer = 'X';
         player.innerText = "Current player: " + currentPlayer;
         boxes.forEach(box => box.innerText="");
}

const winPositions = ['012', '345', '678', '036', '147', '258', '048','246'];
function isWinner() {
    for(let position of winPositions) {
        let position1 = boxes[position[0]].innerText;
        let position2 = boxes[position[1]].innerText;
        let position3 = boxes[position[2]].innerText;
        if (position1 == currentPlayer && position2 == currentPlayer && position3 == currentPlayer){
        return true;
    }
}
return false;
}
function isDraw() {
    let draw = true;
    for (let box of boxes){
        draw = draw && box.innerText  != '';
    }
    return draw;
}


