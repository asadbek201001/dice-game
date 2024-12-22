document.getElementById("refresh").onclick = function() {
    var dice = document.querySelectorAll(".dicee");
    var player1Value = 0;
    for (let i = 0; i < dice.length; i++) {
        var randomNum = Math.floor(Math.random() * 6) + 1; 
        dice[i].src = `./images/dice${randomNum}.png`;
        player1Value = randomNum; 
    }
    var dice2 = document.querySelectorAll(".dicee2");
    var player2Value = 0;
    for (let i = 0; i < dice2.length; i++) {
        var randomNum2 = Math.floor(Math.random() * 6) + 1; 
        dice2[i].src = `./images/dice${randomNum2}.png`;  
        player2Value = randomNum2; 
    }
    var title = document.getElementsByClassName("click")[0];
    if (player1Value > player2Value) {
        if (title) { 
            title.textContent = "Player 1 Win!"; 
        }
    }
    else if (player1Value < player2Value) {
        if (title) { 
            title.textContent = "Player 2 Win!"; 
        }
    }
    else {
        if (title) { 
            title.textContent = "🚩Draw! 🚩"; 
        }
    }
};











  


