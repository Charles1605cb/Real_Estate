
let image = document.querySelectorAll(".image");
let buy = document.querySelectorAll(".buy");
let lease = document.querySelectorAll(".lease");
let agent = document.querySelectorAll(".agent");
let dashboard = document.querySelectorAll(".dashboard");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");
let loader = document.getElementById("loader");
let sold = document.getElementById("sold");

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
    let nav_Container = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            // Add a box_shadow to the nav_container
            nav_Container.classList.add("nav_shadow");
        }else{
            nav_Container.classList.remove("nav_shadow");
        }
    });


for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
         window.location.href = "description.html"
    });
    
};

for (let i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", () => {
        window.location.href = "index.html"
    });
};

for (let i = 0; i < agent.length; i++) {
    agent[i].addEventListener("click", () => {
        window.location.href = "realtor.html"
    });
};

for (let i = 0; i < lease.length; i++) {
    lease[i].addEventListener("click", () => {
        window.location.href = "lease.html"
    });
};

for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", () => {
        window.location.href = "dashboard.html"
    });
};

menu.addEventListener("click", () => {
    menu.style.display = "none";
    cancel.style.display = "block";
    nav.style.display = "block"
});

cancel.addEventListener("click", () => {
    menu.style.display = "block";
    cancel.style.display = "none";
    nav.style.display = "none"
});

let ShowLoader = () => {
    setTimeout(() => {
        loader.style.display = "none";
        sold.style.display = "block"
    }, 1000);
};

ShowLoader();