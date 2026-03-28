let menubar=document.getElementById("menu-btn")
let navlist=document.querySelector(".nav")
menubar.addEventListener('click',()=>{
    navlist.classList.toggle("active")
})

let search=document.getElementById("search-btn")
let searchform=document.querySelector(".search-form")

search.addEventListener('click' ,()=>{
    searchform.classList.toggle("active")
})

let cart=document.getElementById("cart-btn")
let cartcontainer=document.querySelector(".cart-item-container");
