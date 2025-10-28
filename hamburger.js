// hamburger configure
const hamburger = document.querySelector('.hamburger')
const ulMenu = document.querySelector('.list-menu')


hamburger.addEventListener('click', (e) => {
  ulMenu.classList.toggle('active')
  console.log(ulMenu)
})