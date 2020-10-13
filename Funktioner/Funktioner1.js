let namn = "Hakan"


function sayHello(){
    let alder = 16

    console.log(`Hej ${namn}, du är ${alder} år gammal`)
}
//anropar funktionen sayhello
sayHello()
sayHello()

function addera(tal1, tal2){
let summa = tal1+tal2
return summa
}


console.log(`2+5=${addera(2,5)}`)

//skapa en subrafunktion
//skapa en multiplikationsfunktion
//skapa en dividerarfunktion

function Subtract(tal1,tal2){
    let differens = tal1-tal2
    return differens
}

console.log(`5-2=${Subtract(5,2)}`)

function multiply(tal1,tal2){
    let product=tal1*tal2
    return product
}

console.log(`5*2=${multiply(5,2)}`)

function division(tal1,tal2){
    let kvot = tal1/tal2
    return kvot
}

console.log(`10/2=${division(10,2)}`)