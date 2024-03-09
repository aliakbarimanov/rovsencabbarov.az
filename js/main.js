// navbar function
const navBar = document.querySelector("#navBar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
        navBar.classList.add("fixed");
    }else{
        navBar.classList.remove("fixed");
    }
});


// mobile menu function
const mobileMenu = document.querySelector("#mobileMenu");
const barIcon = document.querySelector("#barIcon");
const closeBtn = document.querySelector("#closeBtn");

barIcon.addEventListener("click", () => mobileMenu.classList.add("active"));
closeBtn.addEventListener("click", () => mobileMenu.classList.remove("active"));