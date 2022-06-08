let hamBurger = document.querySelector("#hamburger");
let menuItems = document.querySelector("#dropDown");

hamBurger.addEventListener('click', burgerMenu);

function burgerMenu() {
    if (menuItems.style.display ==="none") {
        menuItems.style.display = "grid";
    } else {
        menuItems.style.display = "none"
    }
}