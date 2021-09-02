const menuBar = document.querySelector('.menu-bars');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.bx-x');
const menuLinks = document.querySelectorAll('.menu-links');

menuBar.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

for (let i = 1; i <= menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
}

// const divBar = document.createElement('div')
// navMenu.style.height = '100%';
// navMenu.style.width = '100%';
// navMenu.style.backgroundColor = 'white'
// navMenu.style.position = 'absolute'
// navMenu.style.top = '0'
// navMenu.style.left = '0'
// navMenu.style.zIndex = '20'

// header.appendChild(divBar)
