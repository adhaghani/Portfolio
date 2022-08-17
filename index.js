const hamburger = document.getElementById("hamburger");
const sidenav = document.getElementById("sidenav");

hamburger.addEventListener('click' ,activeside = () => {
    hamburger.classList.toggle("active");
    sidenav.classList.toggle("active");
});