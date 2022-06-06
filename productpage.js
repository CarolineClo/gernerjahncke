const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url="http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/" + id;
//const endpoint = "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/";

//fetching

fetch(url)
.then((res) => res.json())
.then((data) => showProduct(data));

//populating the product page

function showProduct(product) {
console.log(product)
document.querySelector(".product_name").textContent = product.product_name;
document.querySelector(".product_description").textContent = product.content.rendered;
//document.querySelector("img.otherview").src = `http://michalinaoniszczuk.com/examwp/wp-content/uploads/2022/06/IMG_8143.webp`;
document.querySelector("img.otherview").alt = product.product_name;
document.querySelector(".capacity").textContent = `${product.height}ml`;
document.querySelector(".height").textContent = `Height: ${product.height}mm`;
document.querySelector(".width").textContent = `Width: ${product.width}mm`;
document.querySelector(".radius").textContent = `Radius: ${product.radius}mm`;
document.querySelector(".price").textContent = `${product.price} DKK`;
}