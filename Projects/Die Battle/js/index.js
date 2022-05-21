dieBattle();

function dieBattle() {
    var rollX = Math.floor(Math.random() * 6) + 1;
    var rollY = Math.floor(Math.random() * 6) + 1;

    var winner = findWinner(rollX, rollY);

    rollDice(rollX, rollY)

    if (winner == "draw") {
        document.querySelector("h1").innerHTML = "It's a draw!";
    } else {
        document.querySelector("h1").innerHTML = winner + " won!";
    }
}

function findWinner(x, y) {
    if (x > y) {
        return "Player X"
    }
    if (x < y) {
        return "Player Y"
    }
    return "draw"
}

function rollDice(x, y) {
    document.querySelector(".die-x").src="images/dice-six-faces-" + x + ".png";
    document.querySelector(".die-y").src="images/dice-six-faces-" + y + ".png";
}