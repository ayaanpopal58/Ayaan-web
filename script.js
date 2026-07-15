// Button click message

let button = document.querySelector(".hero-buttons a");

if(button){
button.onclick = function(){
    alert("Welcome! Let's build your business website.");
};
}


// Simple scroll animation

let cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function(){

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){
themeBtn.onclick = function(){
    document.body.classList.toggle("dark");
};
}


// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn && nav){
menuBtn.onclick = function(){
    nav.classList.toggle("active");
};
}