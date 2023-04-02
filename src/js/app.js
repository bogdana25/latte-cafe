
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.navbar__link');
let icons = document.querySelector('.navbar__icons');
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
   icons.classList.toggle('active');
})