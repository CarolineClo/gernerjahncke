//if (collection) {
//  url += `?q={"Collection": "${collection}"}`;

window.addEventListener("load", setup);
const endpoint = "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/";
function setup() {
  //getMaterials();
  //getCategories();
  getDenmark();
  //getIceland();
  //getJapan();
}

const denmark_button = document.querySelector("#denmark_button");
denmark_button.addEventListener("click", getDenmark);

function getDenmark() {
  fetch(endpoint + "product?categories=6&_embed")
    .then((res) => res.json())
    .then(setupDenmark);
}

function setupDenmark(prodArray) {
  console.log(prodArray);
  const template = document.querySelector("template#product_card").content;
  const parentElement = document.querySelector("main");
  prodArray.forEach((prod) => {
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

let iceland_button = document.querySelector("#iceland_button");
iceland_button.addEventListener("click", getIceland);

function getIceland() {
  fetch(endpoint + "product?categories=8&_embed")
    .then((res) => res.json())
    .then(setupIceland);
}

function setupIceland(iceArray) {
  console.log(iceArray);
  const template = document.querySelector("template#product_card").content;
  const parentElement = document.querySelector("main");
  iceArray.forEach((prod) => {
    const copy = template.cloneNode(true);
    copy.querySelector("img").src =
      prod._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector("h2").textContent = prod.product_name;
    copy.querySelector("p.price").textContent = prod.price;
    parentElement.appendChild(copy);
  });
}

const japan_button = document.getElementById("japan_button");
japan_button.addEventListener("click", getJapan);

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
    parentElement.appendChild(copy);
  });
}

/*function getCategories() {
    fetch(endpoint + "categories?parent=5")
    .then(res => res.json())
    .then(setupCategories);
    
}

function setupCategories(catArray) {
const template = document.querySelector("template#collection_button").content;
const parentElement = document.querySelector(".countrynav");
catArray.forEach(cat => {
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = cat.name;
    parentElement.appendChild(copy);
    
});
}

function getMaterials() {
    fetch(endpoint + "categories?parent=14")
    .then(res => res.json())
    .then(setupMaterials);
}

function setupMaterials(matArray) {
const template = document.querySelector("template#material_button").content;
const parentElement = document.querySelector(".materialnav");
matArray.forEach(mat => {
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = mat.name;
    parentElement.appendChild(copy);
});
}
*/