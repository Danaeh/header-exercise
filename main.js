"use strict";
var list = document.querySelector(".list");
var btnmenu = document.querySelector("#btnmenu");
var navMobile = document.querySelector(".nav-mobile");
var listElementLink =document.querySelector(".list-element-link");
var nav = document.querySelector(".nav");
var header = document.querySelector("header");
var btnOne = document.getElementById("one");
var btnTwo = document.getElementById("two");
var btnThree = document.getElementById("three");
var maincontainer = document.querySelector(".main-container");


btnmenu.addEventListener("click", showMenu);
btnOne.addEventListener("click", changeOne);
btnTwo.addEventListener("click", changeOne);
btnThree.addEventListener("click", changeOne);

var currentSlideClass = "slide-one";
var currentButtonId = "one";

var image2 = new Image();
image2.src = "images/Pueblo 50 opacidad.jpg";
var image3 = new Image();
image3.src = "images/Manos abuela 50 opacidad.jpg";

function changeOne(event) {
  var currentButton = event.currentTarget;
  var id = currentButton.getAttribute('id');

  if (id !== currentButtonId) {
    var previousButton = document.getElementById(currentButtonId);
    var nextSlideClass = "slide-" + id;

    previousButton.classList.remove("btn-active");
    currentButton.classList.add("btn-active");
    maincontainer.classList.remove(currentSlideClass);
    maincontainer.classList.add(nextSlideClass);

    currentButtonId = id;
    currentSlideClass = nextSlideClass;
  }

}

function showMenu(){
  list.classList.toggle("list-show");
}

window.addEventListener("scroll", changeOpacity);

function changeOpacity() {
  if( document.body.scrollTop > header.offsetHeight){
    navMobile.classList.add("opacity");
    listElementLink.classList.add("opacity");
    nav.classList.add("opacity");
  }else{
    navMobile.classList.remove("opacity");
    listElementLink.classList.add("opacity");
    nav.classList.remove("opacity");
  }
}
