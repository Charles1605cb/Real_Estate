let image = document.querySelectorAll(".aimage");
let sold = document.querySelectorAll(".sold");
let lease = document.querySelectorAll(".alease");
let agent = document.querySelectorAll(".aagent");
let contact = document.querySelectorAll(".contact");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");
let nav = document.getElementById("nav_links");
let dashboard = document.querySelectorAll(".dashboard")


for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
         window.location.href = "description.html"
    });
    
};

for (let i = 0; i < sold.length; i++) {
    sold[i].addEventListener("click", () => {
        window.location.href = "sold.html"
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

for (let i = 0; i < array.length; i++) {
    contact[i].addEventListener("click", () => {
        window.location.href = "contact.html";
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
