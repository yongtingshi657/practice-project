let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
               
let add1ptBtnHome = document.querySelector(".homeadd1pt")
let add2ptsBtnHome = document.querySelector(".homeadd2pts")
let add3ptsBtnHome = document.querySelector(".homeadd3pts")

let add1ptBtnGuest = document.querySelector(".guestadd1pt")
let add2ptsBtnGuest = document.querySelector(".guestadd2pts")
let add3ptsBtnGuest = document.querySelector(".guestadd3pts")

let homeCount = 0;

function add1ptHome(){
    homeCount = homeCount +1;
    homeScore.textContent = homeCount;
   
}

function add2ptsHome(){
   homeCount = homeCount +2;
    homeScore.textContent = homeCount;
   
}

function add3ptsHome(){
    homeCount = homeCount +3;
    homeScore.textContent = homeCount;
   
}
add1ptBtnHome.addEventListener("click", add1ptHome);
add2ptsBtnHome.addEventListener("click", add2ptsHome);
add3ptsBtnHome.addEventListener("click", add3ptsHome);


let guestCount = 0;

function add1ptGuest(){
    guestCount = guestCount +1;
    guestScore.textContent = guestCount;
   
}

function add2ptsGuest(){
   guestCount = guestCount +2;
    guestScore.textContent = guestCount;
   
}

function add3ptsGuest(){
    guestCount = guestCount +3;
    guestScore.textContent = guestCount;
   
}
add1ptBtnGuest.addEventListener("click", add1ptGuest);
add2ptsBtnGuest.addEventListener("click", add2ptsGuest);
add3ptsBtnGuest.addEventListener("click", add3ptsGuest);

let resetBtn = document.querySelector("#reset-btn")
resetBtn.addEventListener("click", function(){
     homeCount = 0;
    guestCount = 0;
    guestScore.textContent = 0;
     homeScore.textContent = 0;
})