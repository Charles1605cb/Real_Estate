
let buy = document.querySelectorAll(".buy");
let lease = document.querySelectorAll(".lease");
let agent = document.querySelectorAll(".agent");
let sold = document.querySelectorAll(".sold");
let dashboard = document.querySelectorAll(".dashboard");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");
let loader = document.getElementById("loader");
let contact = document.getElementById("contact");




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

for (let i = 0; i < sold.length; i++) {
    sold[i].addEventListener("click", () => {
        window.location.href = "sold.html"
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
        contact.style.display = "block"
    }, 1000);
};

ShowLoader();