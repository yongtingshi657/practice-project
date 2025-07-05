/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let convertBtn = document.querySelector("#convert-btn")
let inputNumber = document.querySelector("input")
let lengthText = document.querySelector(".length-text")
let volumnText = document.querySelector(".volumn-text")
let massText = document.querySelector(".mass-text")

let lengthBtn = document.querySelector(".length-btn")
let volumeBtn = document.querySelector(".volume-btn")
let massBtn = document.querySelector(".mass-btn")

let lengthContainer = document.querySelector(".length-container")
let volumeContainer = document.querySelector(".volume-container")
let massContainer = document.querySelector(".mass-container")

console.log(volumeContainer);

lengthBtn.addEventListener("click", function(){
    lengthContainer.style.display = "block" 
    volumeContainer.style.display = "none"
    massContainer.style.display = "none"


})

volumeBtn.addEventListener("click", function(){
    volumeContainer.style.display = "block" 
    lengthContainer.style.display = "none"
    massContainer.style.display = "none"
})

massBtn.addEventListener("click", function(){
    massContainer.style.display = "block" 
    lengthContainer.style.display = "none"
    volumeContainer.style.display = "none"
})

function lengthConvert(){
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    let inputValue = Number(inputNumber.value)
    let meterToFeet = inputValue * 3.281
    let feetToMeter = inputValue / 3.281

    lengthText.innerHTML = ` ${inputValue} meters =  ${meterToFeet.toFixed(3)} feet | 
    ${inputValue} feet =  ${feetToMeter.toFixed(3)} meters`
   
}
function volumnConvert(){
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    let inputValue = Number(inputNumber.value)
    let literToGallons = inputValue * 0.2641
    let gallonsToLiter = inputValue / 0.2641

    volumnText.innerHTML = ` ${inputValue} liters =  ${literToGallons.toFixed(3)} gallons | 
    ${inputValue} gallons =  ${gallonsToLiter.toFixed(3)} liters`
   
}
function massConvert(){
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
    let inputValue = Number(inputNumber.value)
    let kiloToPounds = inputValue * 2.204
    let poundsToKilo = inputValue / 2.204

    massText.innerHTML = ` ${inputValue} kilos =  ${kiloToPounds.toFixed(3)} pounds | 
    ${inputValue} pounds =  ${poundsToKilo.toFixed(3)} kilos`
   
}

convertBtn.addEventListener("click", function(){
    lengthConvert()
    volumnConvert()
    massConvert()
})

inputNumber.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
         lengthConvert()
         volumnConvert()
         massConvert()
    }
})