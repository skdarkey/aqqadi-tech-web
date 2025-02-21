// script.js
// document.querySelector(".card").addEventListener("click", function () {
//     this.classList.toggle("flipped");
// });

// make all cards flip
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        this.classList.toggle("flipped");
    });
});

// hambuger navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});
