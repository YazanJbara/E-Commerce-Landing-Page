'use strict';

const toggleButton = document.getElementById('toggleButton');
const navBar = document.querySelector('.nav-links ul');
const background = document.querySelector('.bg');
const overlay = document.querySelector('.overlay')
const imgProducts = document.querySelectorAll('.product-image');
const btnNext = document.querySelector('.--next');
const btnPrev = document.querySelector('.--prev');
const dots = document.querySelectorAll('.dot');

function toggleMenu() {
  overlay.classList.toggle('open')
  background.classList.toggle('open');
  navBar.classList.toggle('open');
  toggleButton.classList.toggle('open');
}

toggleButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click' , toggleMenu )
// Image slider functionality
let currentImg = 0;
document.addEventListener('DOMContentLoaded', initializeImg);

function initializeImg() {
  imgProducts[currentImg].classList.add('displayImg');
}

function showImg(index) {
  if (index >= imgProducts.length) {
    currentImg = 0;
  } else if (index < 0) {
    currentImg = imgProducts.length - 1;
  }
  imgProducts.forEach((img) => {
    img.classList.remove('displayImg');
  });
  imgProducts[currentImg].classList.add('displayImg');
}

function prevImg() {
  currentImg++;
  showImg(currentImg);
}
function nextImg() {
  currentImg--;
  showImg(currentImg);
}

btnNext.addEventListener('click', nextImg);
btnPrev.addEventListener('click', prevImg);
