// Toggle Active Class On Hover

let navLists = document.querySelectorAll(".nav-item a");

navLists.forEach((element) => {
    element.addEventListener("click", (e) => {
        navLists.forEach((element) => {
            element.classList.remove("active")
        })
        // Add Active
        e.target.classList.add("active");
    });
});

// Click On Map Carousel

let mapSection = document.querySelector(".map");
let flag = false;

mapSection.addEventListener("click", function() {
    flag = !flag;
    if (flag === false) {
        document.querySelector(".map-carousel").classList.remove("show");
        document.querySelector(".map-header").innerHTML = "open map";
    }
    else {
        document.querySelector(".map-carousel").classList.add("show");
        document.querySelector(".map-header").innerHTML = "close map";
    }
});

// Click On Navigate Icon

let navigateIcon = document.querySelector(".navigate");

window.onscroll = function() {
    if (window.scrollY >= 657) {
        document.querySelector(".navigate-top").style.display = "block";
        navigateIcon.addEventListener("click", function() {
            window.scrollTo(0, 0);
        })
    }
    else {
        document.querySelector(".navigate-top").style.display = "none";
    }
};

// Hover On Cards Overlay 

let cardsContainers = document.querySelectorAll(".card-container");

cardsContainers.forEach((card) => {
    card.addEventListener("mouseover", function() {
        this.querySelector(".card-overlay").style.display = "block";
    });
    card.addEventListener("mouseout", function() {
        this.querySelector(".card-overlay").style.display = "none";
    });
});