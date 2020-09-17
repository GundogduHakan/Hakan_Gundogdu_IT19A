let antal = prompt ("Hur många gånger åker du spår varje månad?")

if (antal*30<775){
    console.log("Du bör inte köpa en månadskort")
    console.log(`Det kostar ${antal*30} kr med engångsbiljett`)
}
else {
    console.log("Du bör köpa en månadskort, du sparar pengar på det.")
    console.log(`Det kostar ${antal*30} kr med engångsbiljett`)
}


