const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

const changeIcon = () => {
   menuMobile.classList.contains('bi-list')
      ? menuMobile.classList.replace('bi-list', 'bi-x')
      : menuMobile.classList.replace('bi-x', 'bi-list');
   body.classList.toggle('menu-nav-active');
}
menuMobile.addEventListener('click', changeIcon);

const navItem = document.querySelectorAll('.nav-item');

const closeMenuOnItemClick = () => {
   if (body.classList.contains('menu-nav-active')) {
      body.classList.remove('menu-nav-active');
      menuMobile.classList.replace('bi-x', 'bi-list');
   }
}
navItem.forEach(item => {
   item.addEventListener('click', closeMenuOnItemClick);
});

const item = document.querySelectorAll('[data-animate]');

const animateScroll = () => {
   const windowTop = window.scrollY + window.innerHeight * 0.85;

   item.forEach((element) => {
      if (windowTop > element.offsetTop) {
         element.classList.add('animate');
      } else {
         element.classList.remove('animate');
      }
   });
}
window.addEventListener('scroll', animateScroll);

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

const changeButtons = () => {
   btnEnviarLoader.style.display = 'block';
   btnEnviar.style.display = 'none';
}

btnEnviar.addEventListener('click', changeButtons);

setTimeout(() => {
   document.querySelector('#alerta').style.display = 'none';
}, 3000);