let textArea = document.querySelector("#textArea")
let countWord8tn = document.querySelector("#countWord8tn")
let p_displayWords = document.querySelector("#displayWords")

countWord8tn.addEventListener("click", countWords)

function countWords(){
    console.log("Kör funktionen countWords")
    let text = textArea.value
    console.log(text)
    let words = text.split(" ")
    console.log(words)
    console.log(words.length)
    p_displayWords.innerHTML = words.length
}
