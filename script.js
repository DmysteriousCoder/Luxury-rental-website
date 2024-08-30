let cancel = document.querySelector(".cancel");
let nav = document.querySelector(".nav-links");
let navToggler = document.querySelector(".ham");

navToggler.addEventListener("click", open);
cancel.addEventListener("click", close);

function open() {
    nav.classList.add("active");
}

function close() {
    nav.classList.remove("active");
}