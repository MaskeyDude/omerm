// nav drop down
const A_Lil = document.querySelector(".a-lil");

A_Lil?.addEventListener("click", function() {
    let Nav_Main = document.querySelector(".nav-main");
    let Nav_Dropdown = document.querySelector(".nav-dropdown");
    Nav_Main.classList.toggle("after-dropdown");
    Nav_Dropdown.classList.toggle("nav-visible");
});