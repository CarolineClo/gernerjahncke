//const url =
//"http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=${6}&_embed";

const urlParams = new URLSearchParams(window.location.search);
const categories = urlParams.get("categories");
console.log(urlParams.get("categories"));

let url =
  "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=";

if (categories) {
  url += `${categories}&_embed`;
}

console.log(url);

fetch(url)
  .then((res) => res.json())
  .then(setupCollection);

function setupCollection(catArray) {
  catArray.forEach((prod) => {
    console.log(prod);
    const template = document.querySelector("template#product_card").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src =
      prod._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector("h2").textContent = prod.product_name;
    copy.querySelector("p.price").textContent = prod.price;
    copy
      .querySelector("a")
      .setAttribute("href", `productpage.html?id=${prod.id}`);
    const parentElement = document.querySelector("main");
    parentElement.appendChild(copy);
  });
}
/*
function getCategories() {
    fetch(endpoint + "categories?parent=5")
      .then((res) => res.json())
      .then(setupCategories);
  }
  
  function setupCategories(catArray) {
    const template = document.querySelector("template#collection_button").content;
    const parentElement = document.querySelector(".countrynav");
    catArray.forEach((cat) => {
      const copy = template.cloneNode(true);
      copy.querySelector("h2").textContent = cat.name;
      copy
        .querySelector("a")
        .setAttribute(
          "href",
          `productslist.html?product&collection=${cat.id}&_embed`
        );
      parentElement.appendChild(copy);
    });
  }*/
