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




function Validator(options) {
/*Hàm thực hiện*/
    function validator(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)           
        if(errorMessage){
            errorElement.innerHTML = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerHTML = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }
/*Lấy element của form*/
    var formElements = document.querySelector(options.form)
    if(formElements){
        options.rules.forEach(function (rule) {
            var inputElement = formElements.querySelector(rule.selector)
                if(inputElement){
                inputElement.onblur = function () {
                   validator(inputElement, rule)
                }
                inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector('.form-message') 
                    errorElement.innerHTML = '';
                     inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }

}
    Validator.isRequired = function (selector) {
    return {
        selector : selector,
        test : function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập dữ liệu'
        }
    };
    
}
    Validator.isEmail = function (selector) {
    return {
        selector : selector,
        test : function (value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : 'Vui lòng nhập dữ liệu'
            
        }
    };
}
    Validator.isPhone = function (selector) {
    return {
        selector : selector,
        test : function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập dữ liệu'
        }
    };
}
    Validator.minLength = function (selector, min) {
    return {
        selector : selector,
        test : function (value) {
            return value.length >=min ? undefined : `Vui long nhập tối thiểu ${min} kí tự`
        }
    };
    
}
  