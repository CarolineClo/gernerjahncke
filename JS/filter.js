const ceramicButton = document.querySelector("#ceramicbutton");
const glassButton = document.querySelector("#glassbutton");
const countryNav = document.querySelector("#countrynav");
const firstImage = document.querySelector("#firstproductimage");
const nocountry = document.querySelector("nav.countrynav");
const showcountry = document.querySelector("nav.showcountrynav");
const firstImage2 = document.querySelector(".productslistimage");

function toggleCountry() {
  if (countryNav.classList.contains("countrynav")) {
    countryNav.classList.remove("countrynav");
    countryNav.classList.add("showcountrynav");
    firstImage.classList.remove("productslistimage");
    firstImage.classList.add("firstproductimage");
    ceramicButton.classList.remove("container");
    ceramicButton.classList.add("selected");
    glassButton.classList.remove("selected");
  } else {
    countryNav.classList.remove("showcountrynav");
    countryNav.classList.add("countrynav");
    firstImage.classList.remove("firstproductimage");
    firstImage.classList.add("productslistimage");
    ceramicButton.classList.add("container");
    ceramicButton.classList.remove("selected");
    glassButton.classList.remove("selected");
  }
  console.log("what");
}

ceramicButton.addEventListener("click", toggleCountry);
glassButton.addEventListener("click", toggleGlass);

function toggleGlass() {
  if (countryNav.classList.contains("countrynav")) {
    countryNav.classList.remove("countrynav");
    countryNav.classList.add("showcountrynav");
    firstImage.classList.remove("productslistimage");
    firstImage.classList.add("firstproductimage");
    glassButton.classList.add("selected");
    ceramicButton.classList.remove("selected");
  } else {
    countryNav.classList.remove("showcountrynav");
    countryNav.classList.add("countrynav");
    firstImage.classList.remove("firstproductimage");
    firstImage.classList.add("productslistimage");
    ceramicButton.classList.add("container");
    glassButton.classList.remove("selected");
    ceramicButton.classList.remove("selected");
  }
  console.log("what");
}
