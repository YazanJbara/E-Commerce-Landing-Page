'use strict';

const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navBar = document.querySelector('.nav-links ul');
const overlay = document.querySelector('.overlay');
const imgProducts = document.querySelectorAll('.product-image');
const btnNext = document.querySelector('.--next');
const btnPrev = document.querySelector('.--prev');
const dots = document.querySelectorAll('.dot');

function openNav() {
  openMenu.setAttribute('aria-expanded', 'true');
  navBar.classList.add('open');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  overlay.classList.remove('hidden');
}

function closeNav() {
  openMenu.setAttribute('aria-expanded', 'false');
  navBar.classList.remove('open');
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none'
  overlay.classList.add('hidden');
}

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav)
closeMenu.style.display = 'none';
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
