const menuBtn = document.querySelector('.navbar-2__menu-btn');
let link = document.getElementsByClassName('link');

menuBtn.addEventListener('click', () => {
  for (i = 0; i < link.length; i++) {
    link[i].classList.toggle('menu-open')
  }
});
    