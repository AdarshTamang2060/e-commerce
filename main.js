
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,3000); // Change image every 2 seconds
}


let cart_box=document.querySelector(".main-box-cart");

document.querySelector('#open-cart').onclick=()=>{
  cart_box.style.right="0px";
}
document.querySelector('#close-cart').onclick=()=>{
  cart_box.style.right="-110%";
}
 
let small_menu=document.querySelector(".small-menu-section");
document.querySelector(".text-cata").onclick=()=>{
  small_menu.style.display="block";
   
}
document.querySelector("#close-small-menu").onclick=()=>{
  small_menu.style.display="none";
}

 