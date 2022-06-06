let hamBurger = document.querySelector("#hamburger");
let menuItems = document.querySelector("#dropDown");

// toggle click on hamburger = add/remove class display grid to menuItems


hamBurger.addEventListener('click', burgerMenu);

function burgerMenu() {
    if (menuItems.style.display ==="none") {
        menuItems.style.display = "grid";
    } else {
        menuItems.style.display = "none"
    }
}