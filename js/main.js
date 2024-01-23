const navBar = document.querySelector("#navBar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
        navBar.classList.add("fixed");
    }else{
        navBar.classList.remove("fixed");
    }
});