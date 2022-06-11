//const url =
//"http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product?categories=6&_embed";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let url = "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product";

if (id) {
  url += `?q={"categories": "${id}&_embed"}`;
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
    //copy.querySelector("img").src =
    //  prod._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector("h2").textContent = prod.product_name;
    copy.querySelector("p.price").textContent = prod.price;
    copy
      .querySelector("a")
      .setAttribute("href", `productpage.html?id=${prod.id}`);
    const parentElement = document.querySelector("main");
    parentElement.appendChild(copy);
  });
}
