let image = document.querySelectorAll(".image");
let buy = document.querySelectorAll(".buy");
let lease = document.querySelectorAll(".lease");
let sold = document.querySelectorAll(".sold")
let contact = document.querySelectorAll(".contact")
let agent = document.querySelectorAll(".agent");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");
let loader = document.getElementById("loader");
let dashboard = document.getElementById("dashboard");
let date = document.getElementById("date");



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

for (let i = 0; i < sold.length; i++) {
    sold[i].addEventListener("click", () => {
        window.location.href = "sold.html"
    });
};

for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click", () => {
        window.location.href = "contact.html"
    });
    
}

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
        dashboard.style.display = "block"
    }, 3000);
};

ShowLoader();

let current_date = new Date();

let current_Day = current_date.toDateString();

date.textContent = `${current_Day}`;


// Add active link to the active page
let currentPage = document.getElementById("active");

const addActiveLink = () => {  
    if (currentPage) {
        currentPage.classList.add("active");
    }else{
        currentPage.classList.remove("active");
    }
};

document.addEventListener("DOMContentLoaded", addActiveLink);