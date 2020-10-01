let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klasslista")
let p_Udda = document.querySelector("#Udda")
let p_Jämna = document.querySelector("#Jämna")
let summa = 0

Jämna.innerHTML = "Jämna tal från 0 till 100: ";
for(let i=0; i<=100; i++){
    if( i % 2==0){
    Jämna.innerHTML += `${i},`;
    }
}
Udda.innerHTML = "Udda tal från 0 till 100: "
for(let j=1; j<=100; j++){
    if(j % 2==1){
        Udda.innerHTML += `${j},`;
    }
}




let ämnen = ["Svenska", "Engelska" , "Programmering" , "Matematik" , "Idrott"]

// skapa en lista med lektioner


p_klass.innerHTML = "Mina lektioner är <br/>"

for (let k =0; k < ämnen.length; k++){
    p_klass.innerHTML += `${k+1} ${ämnen[k]} <br/>`
}
