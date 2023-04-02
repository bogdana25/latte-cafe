let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.navbar');
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
})