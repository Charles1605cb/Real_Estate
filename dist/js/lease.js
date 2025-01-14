let image = document.querySelectorAll(".image");
let buy = document.querySelectorAll(".buy");
let agent = document.querySelectorAll(".agent");
let dashboard = document.querySelectorAll(".dashboard")
let menu = document.getElementById("bar");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");
let sold = document.querySelectorAll(".sold");


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


for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", () => {
        window.location.href = "dashboard.html"
    });
};

for (let i = 0; i < sold.length; i++) {
    sold[i].addEventListener("click", () => {
        window.location.href = "sold.html"
    });
};


menu.addEventListener("click", () => {
    nav.style.display = "block"
    menu.style.display = "none";
    cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
    menu.style.display = "block";
    cancel.style.display = "none";
    nav.style.display = "none"
});
// console.log(menu)
