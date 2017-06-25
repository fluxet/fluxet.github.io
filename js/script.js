var container = document.querySelector(".header-top");
var nav = document.querySelector(".nav-list");
var button= document.querySelector(".navigation-button");
container.classList.remove("no-js");
button.addEventListener("click",function() {
  nav.classList.toggle("nav-list--hided");
  button.classList.toggle("navigation-button--closed");
});
