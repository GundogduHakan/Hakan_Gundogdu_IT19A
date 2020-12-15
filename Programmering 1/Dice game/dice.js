let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#dice_p1_pic")
let p2_result = document.querySelector("#dice_p2_pic")
let check_btn = document.querySelector("#buttonCheck")


let result = document.querySelector("#result")



dice1_btn.addEventListener("click", diceRoll1)
dice2_btn.addEventListener("click", diceRoll2)
check_btn.addEventListener("click", checkWin)
function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
p1_result.src = `Assets/dice${diceNumber1}.png`
    console.log(diceNumber1)
}

function diceRoll2(){
    diceNumber2 = Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber2
}



function checkWin(){
    if (diceNumber > diceNumber2){
        console.log("Player 1 wins")
        result.innerHTML = " Player 1 wins"
    } else if (diceNumber1 < DiceNumber2){
        console.log("Player 2 wins")
        result.innerHTML = " Player 2 wins"
    } else {
        console.log("DRAW")
        result.innerHTML = " Draw"
    }
}
