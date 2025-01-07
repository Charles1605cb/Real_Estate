
// .nav_container
// Please take note of this code below, it is very important for the functionality of the website

// Prevent Image dragging

    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mousedown", function (event) {
        event.preventDefault();
      });
      img.addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });
    });

 // Add a box_shadow to the nav_container when a user scrolls
    let nav_Container = document.querySelector(".nav_container");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            // Add a box_shadow to the nav_container
            nav_Container.classList.add("nav_shadow");
        }else{
            nav_Container.classList.remove("nav_shadow");
        }
    });

const images = document.querySelectorAll(".card-img-top");
console.log(images)

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        window.location.href = "description2.html"
    });
};

const menu = document.getElementById("menu")
console.log(menu);
const cancel = document.getElementById("cancel")
const nav_contents = document.querySelector(".nav_links")

menu.addEventListener("click", () => {
    menu.style.display = "none";
    cancel.style.display = "block";
    nav_links.style.display = "block"
});

cancel.addEventListener("click", () => {
    menu.style.display = "block";
    cancel.style.display = "none";
    nav_links.style.display = "none"
});

let buy = document.getElementById("buy");
let lease = document.getElementById("lease");
let sold = document.getElementById("sold");

buy.addEventListener("click", () => {
    window.location.href = "index.html"
});

lease.addEventListener("click", () => {
    window.location.href = "lease.html"
});

sold.addEventListener("click", () => {
    window.location.href = "sold.html"
});


const Loader = document.getElementById("loader")
const main = document.getElementById("main")

let ShowLoader = () => {
    setTimeout(() => {
        Loader.style.display = "none"
        main.style.display = "block"
    }, 9000);
};

ShowLoader();
