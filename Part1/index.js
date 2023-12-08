
let player = 'X';
let turnsRemaining = 9;
let winner;

const squares = document.querySelectorAll('.square');
for(const square of squares) {
    square.addEventListener('click', play)
}

function play(evt) {
    turnsRemaining--;
    targetSquare = evt.target;
    targetSquare.innerText = player;
    player === 'X' ? player = 'O' : player = 'X';
    let playerHTML = document.querySelector('#current-player');
    playerHTML.textContent = player;
    winner = gameDone();
    if (winner) {
        alert(`${winner} is the winner!`)
    }
}

function gameDone () {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let line of lines) {
        const matchX = line.filter((sq) => squares[sq].innerText === 'X');
        const matchO = line.filter((sq) => squares[sq].innerText === 'O');
        if (matchX.length === 3) {
            return 'X';
        } else if (matchO.length === 3) {
            return 'O';
        } 
    }
    if (turnsRemaining < 1){
        alert("Tie game");
        return;
    }
}