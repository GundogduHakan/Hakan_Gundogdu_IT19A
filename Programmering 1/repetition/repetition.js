console.log("Repetition v10")


// skapa variabler
let namn = "kokchun"
let ålder = "18"
console.log(`hej ${namn} du är ${ålder} år gammal`)

// if - sats

if (ålder => 18  ){
    console.log("Du är vuxen")
} else{
    console.log("du är barn")
}

// for -sats skriva ut jämna tal 0-100

for (let i = 0; i <20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
    
//modulusoperator
console.log(`${5%2}`)

let tal = 25

//avgöra om talet är jämnt eller udda

//tal%2 är 0: jämnt
//tal%2 är 1: udda

if (tal%2 === 0){
    console.log("jämnt")
} else{
    console.log("udda")

}
    


//1. låt användaren skriva in ett tal   
//2. avgör om talet är positivt, 0 eller negativt
let tal1 = prompt("Ange ett tal: ")

if (tal1 >=0 ){
    console.log("Positivt")
} else if (tal1 == 0){
    console.log("Talet är 0")
} else {
    console.log("Negativt")
}
    
    