//söker upp P_taggar
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klasslista")
let p_Udda = document.querySelector("#Udda")
let p_Jämna = document.querySelector("#Jämna")
let summa = 0


Jämna.innerHTML = "Jämna tal från 0 till 100: ";
//skriver mellan vad talen skall vara (0-100) och börjar från noll för att det är jämna tal.
for(let i=0; i<=100; i++){
    //skriver modulus för att talen skall bli jämn
    if( i % 2==0){
    Jämna.innerHTML += `${i},`;
    }
}
Udda.innerHTML = "Udda tal från 0 till 100: "
//skriver vad talen skall vara mellan (1-100) och börjar från 1 eftersom det är udda tal
for(let j=1; j<=100; j++){
    //skriver modulus för att talen skall vara udda
    if(j % 2==1){
        Udda.innerHTML += `${j},`;
    }
}



//skriver vilka ämnen är i rätt ordning.
let ämnen = ["svenska", "engelska" , "programmering" , "matematik" , "idrott"]

// skapa en lista med lektioner


p_klass.innerHTML = "Mina lektioner är <br/>"
//skriver kod för att göra en lista (Lägger till <BR/> så att listan blir inte i samma rad utan hoppar steg för varje lektion)
for (let k =0; k < ämnen.length; k++){
    p_klass.innerHTML += `${k+1} ${ämnen[k]} <br/>`
}
