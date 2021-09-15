let navbar = document.querySelector('.navbar');

document.querySelector('#btn-bars').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#btn-cart').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#btn-search').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

/*Đọc thêm */
const readMore = document.querySelector('.btn-read-more');
const text = document.querySelector('.text');

readMore.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMore.innerHTML === "Đọc thêm.."){
        readMore.innerHTML = "Thu gọn";
    }else{
        readMore.innerHTML = "Đọc thêm..";
    }
})

const findMore = document.querySelector('.btn-find-more');
const contentText = document.querySelector('.content-text')

findMore.addEventListener('click',(e)=>{
    contentText.classList.toggle('shows-more');
    if(findMore.innerHTML === 'Tìm hiểu'){
        findMore.innerHTML = 'Thu gọn';
    }else{
        findMore.innerHTML = 'Tìm hiểu'
    }
})
/* Cart */
const cart_btn = document.querySelectorAll('.icons-cart')
var changeCart = function (e) {
    cart_btn.forEach((btn)=>{
    })
    cart_btn[e].classList.toggle("icons-cart-active")
}
cart_btn.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        changeCart(i)
    })
})

/* Eye */
const eye_btn = document.querySelectorAll('.icons-eye')
var changeEye = function (e) {
    eye_btn.forEach((btn)=>{
    })
    eye_btn[e].classList.toggle("icons-eye-active")
}
eye_btn.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        changeEye(i)
    })
})

/* Heart */
const heart_btn =document.querySelectorAll('.icons-heart')

var changeHeart = function (e) {
    heart_btn.forEach((btn)=>{
    })
    heart_btn[e].classList.toggle("icons-heart-active")
}
heart_btn.forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
        changeHeart(i)
    })
})