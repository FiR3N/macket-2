"use strict"
import * as flsFunctions from "./modules/isWebp.js"
import * as accorion from "./modules/accordion.js"
import * as animation from "./modules/anim-items.js"
import * as numAnimation from "./modules/numAnimation.js"
import Swiper from "swiper"
import {Navigation,Pagination} from "swiper"

flsFunctions.isWebp();


const swiper = new Swiper('.review-slider', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'     
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    simulateTouch: false,
    grabCursor: true,   
    watchOverflow: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
});

// import * as swipers from "./modules/slider.js"

// function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//        change.target.classList.add('_active');
//       }
//     });
//   }
  
//   let options = {
//     threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('._anim-item');
  
//   for (let elm of elements) {
//     observer.observe(elm);
//   }