const diceTable = document.querySelector(".luckyNumber");

function rolling(number) {
    const tr = 'tr',
          td = 'td';
    diceTable.appendChild(tr);
    dicetable.appendChild(td);
    
}

function rollDice() {
    const num = parseInt(Math.random()*6)+1;
    console.log(num);
    rolling(num);
}