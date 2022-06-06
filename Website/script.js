const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});




/*window.addEventListener("load", setup);
function setup() {
  getCategories();
}

function getCategories() {
fetch(endpoint + "categories?parent=5")
.then(res => res.json())
.then(setupCategories);
}
*/

//function setupCategories(catArray)
//const template = document.querySelector(template#categorytemplate).textContent;
//to HTML: #categorytemplate
/*
ENDPOINTS:
Small glass - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/118
Medium glass - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/111
Large glass - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/114
Galloken cup small - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/42
Galloken cup large - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/65
Totayama soil flask small - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/94
Totayama soil flask http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/40
Totayama cup small - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/78
Totoyama cup medium - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/81
Totayama cup large - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/75
Totayama cup large 2 - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/91
Galloken soil flask - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/68
Reykjavik cup medium - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/57
Reykjavik cup medium 2 - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/60
Reykjavik soil flask - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/34
Reykjavik soil flask 2 - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/54



CATEGORIES
Collection + material (all of the products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories?parent=0

Galloken collection (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/6
Galloken collection (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=6
Galloken collection (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/6
Totayama Collection (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=7
Reykjavik collection (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/8
Reykjavik Collection (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=8
Glass collection (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/13
Glass (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=13
http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=13&_fields=product_name

Glass material (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/12
Glass (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=12

Ceramic material (just the name/ no products included) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/categories/11
Ceramic (products) - http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=11



*/

//document.querySelector(img.container mainproduct).src = endpoint + "product/65.webp"
