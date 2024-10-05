const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')
const player = ['X', 'O']
let currentPlayer = player[0]
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign = 'center'
board.after(endMessage)
const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (squares[i].textContent !== '') {
            return
        }
        squares[i].textContent = currentPlayer
        if (checkWin(currentPlayer)) {
            endMessage.textContent = `Game Over! ${currentPlayer}  Wins!`
            return
        }
        if (checkTie()) {
            endMessage.textContent = `Game is Tied!`
            return
        }
        currentPlayer = (currentPlayer === player[0]) ? player[1] : player[0]
        if (currentPlayer == player[0]) {
            endMessage.textContent = `X's turn!`
        }
        else {
            endMessage.textContent = `O's turn!`
        }
    })
}
function checkWin(currentPlayer) {
    for (let i = 0; i < winning_combination.length; i++) {
        const [a, b, c] = winning_combination[i]
        if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
            return true
        }
    }
    return false
}
function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true
}
function restartButton() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent = `X's turn!`
    currentPlayer = player[0]
}
