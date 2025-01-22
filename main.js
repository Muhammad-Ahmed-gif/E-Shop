// Special Countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let Countdown = () => {
    let futureDate = new Date("30 Novmber 2026");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days =Math.floor(myDate /1000 / 60 /60 /24);
    let hours =Math.floor(myDate /1000 / 60 /60) % 24;
    let min = Math.floor(myDate /1000 /60) % 60;
    let sec = Math.floor(myDate /1000)% 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

Countdown()
setInterval(Countdown, 1000);

//scroll back to top
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollTopButton.classList.add('scrollActive');
        } else {
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();

//nav hide
let navBars = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBars.forEach(function(navBar) {
    navBar.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});
