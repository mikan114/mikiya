let header = document.querySelector(".header-top");
let btn = document.querySelector(".hamburger");

btn.onclick = () => {
  header.classList.toggle("open");
};
