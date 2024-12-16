
const menu = document.getElementById("toggle_show")
console.log(menu)

const images = document.querySelectorAll(".card-img-top");
console.log(images)

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        window.location.href = "description2.html"
    });
};

// let menu_control = document.getElementById("toggle_show")
const cancel = document.getElementById("toggle_hide")
const nav_contents = document.querySelector(".nav_links")

const toggle_show = () => {
    if (nav_contents.style.display = "none") { 
        nav_contents.style.display = "block";
        menu.style.display = "none";
        cancel.style.display = "block";
    };
};

menu.addEventListener("click", toggle_show);

const toggle_hide = () => {
    if (nav_contents.style.display === "block") { 
        nav_contents.style.display = "none";
        cancel.style.display = "none";
        menu.style.display = "block";
    };
};

cancel.addEventListener("click", toggle_hide);

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

