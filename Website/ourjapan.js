window.addEventListener("load", setup);
const endpoint = "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/";
function setup() {
  getJapan();
}

function getJapan() {
  console.log(67);
  fetch(endpoint + "product?categories=7&_embed")
    .then((res) => res.json())
    .then(setupJapan);
}

function setupJapan(japArray) {
  console.log(japArray);
  const template = document.querySelector("template#product_card").content;
  const parentElement = document.querySelector("main");
  japArray.forEach((prod) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src =
      prod._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector("h2").textContent = prod.product_name;
    copy.querySelector("p.price").textContent = prod.price;
    copy
      .querySelector("a")
      .setAttribute("href", `productpage.html?id=${prod.id}`);
    parentElement.appendChild(copy);
  });
}
