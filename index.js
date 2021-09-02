const menuBar = document.querySelector('.menu-bars')
const navMenu = document.querySelector('.nav-menu')
const header = document.querySelector('header')

menuBar.addEventListener('click', () => {
  header.style.display = 'none'
  navMenu.style.display = 'flex'
})

// const divBar = document.createElement('div')
// navMenu.style.height = '100%';
// navMenu.style.width = '100%';
// navMenu.style.backgroundColor = 'white'
// navMenu.style.position = 'absolute'
// navMenu.style.top = '0'
// navMenu.style.left = '0'
// navMenu.style.zIndex = '20'



//header.appendChild(divBar)