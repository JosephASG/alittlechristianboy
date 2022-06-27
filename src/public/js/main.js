const navMenu = document.querySelector("#navMenu");
const sidebar__ = document.querySelector(".sidebar__");
const item_navbar = document.querySelector("#item_navbar");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sidebar__.classList.toggle("active");
});
sidebar__.addEventListener("click", () => {
    navMenu.classList.remove('active');
    sidebar__.classList.remove('active');
});


window.addEventListener('load', () => {
    setTimeout(function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 500)
})
