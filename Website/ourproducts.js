//const urlParams = new URLSearchParams(window.location.search);
//const id = urlParams.get("product");


//let url="http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/product/";

//if (collection) {
  //  url += `?q={"Collection": "${collection}"}`;

  window.addEventListener("load", setup);
  const endpoint = "http://michalinaoniszczuk.com/examwp/wp-json/wp/v2/";
function setup(){
    getMaterials();
    getCategories();
    getDenmark();

   
    
}

//console.log(url);

//fetch(url)
//.then((res) => res.json())
//.then((data) => showProduct(data));

//populating the product page

/*function showProducts(products) {
    products.forEach((product) => {
        console.log(product);
        const template_material = document.querySelector("#material_button").content;
        const template_collection = document.querySelector("#collection_button").content;
        const clone_material = template.cloneNode(true);
        const clone_collection = template.cloneNode(true);

       /clone_material.querySelector(h2).textContent = product.product_name;
        clone_collection.querySelector(h2).textContent = category.name;
    
        const parent = document.querySelector("main");

        parent.appendChild(clone_collection);
    });

}

*/

function getCategories() {
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

function getDenmark() {
fetch(endpoint + "product?categories=6&_embed")
.then(res => res.json())
    .then(setupDenmark);
}

function setupDenmark(prodArray) {
    console.log(prodArray);
    const template = document.querySelector("template#product_card").content;
    const parentElement = document.querySelector("main");
    prodArray.forEach(prod => {
        const copy = template.cloneNode(true);
        copy.querySelector("img").src = prod._embedded["wp:featuredmedia"][0].source_url;
        copy.querySelector("h2").textContent = prod.product_name;
        copy.querySelector("p.price").textContent = prod.price;
        parentElement.appendChild(copy);
    });
    }


    function getIceland() {
        fetch(endpoint + "product?categories=8&_embed")
        .then(res => res.json())
            .then(setupIceland);
        }
        
        function setupIceland(prodArray) {
            console.log(prodArray);
            const template = document.querySelector("template#product_card").content;
            const parentElement = document.querySelector("main");
            prodArray.forEach(prod => {
                const copy = template.cloneNode(true);
                copy.querySelector("img").src = prod._embedded["wp:featuredmedia"][0].source_url;
                copy.querySelector("h2").textContent = prod.product_name;
                copy.querySelector("p.price").textContent = prod.price;
                parentElement.appendChild(copy);
            });
            }

            function getJapan() {
                fetch(endpoint + "product?categories=7&_embed")
                .then(res => res.json())
                    .then(setupJapan);
                }
                
                function setupJapan(prodArray) {
                    console.log(prodArray);
                    const template = document.querySelector("template#product_card").content;
                    const parentElement = document.querySelector("main");
                    prodArray.forEach(prod => {
                        const copy = template.cloneNode(true);
                        copy.querySelector("img").src = prod._embedded["wp:featuredmedia"][0].source_url;
                        copy.querySelector("h2").textContent = prod.product_name;
                        copy.querySelector("p.price").textContent = prod.price;
                        parentElement.appendChild(copy);
                    });
                    }

            