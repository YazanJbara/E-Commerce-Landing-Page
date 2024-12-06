const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const imgProducts = document.querySelectorAll('.product-image');
const btnNext = document.querySelector('.--next');
const btnPrev = document.querySelector('.--prev');
const dots = document.querySelectorAll('.dot')


// navigation functionality
function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('open');
  overlay.classList.remove('hidden');
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
  overlay.classList.add('hidden');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);


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
