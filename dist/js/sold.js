let image = document.querySelectorAll(".image");
let buy = document.getElementById("buy");
let lease = document.getElementById("lease");
let agent = document.getElementById("agent");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");


for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
         window.location.href = "description.html"
    });
    
};

buy.addEventListener("click", () => {
    window.location.href = "index.html"
});

lease.addEventListener("click", () => {
    window.location.href = "lease.html"
});

agent.addEventListener("click", () => {
    window.location.href = "realtor.html"
});

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