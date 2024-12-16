
const menu = document.getElementById("menu")
console.log(menu);

const images = document.querySelectorAll(".card-img-top");
console.log(images)

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        window.location.href = "description2.html"
    });
};

// let menu_control = document.getElementById("toggle_show")
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

