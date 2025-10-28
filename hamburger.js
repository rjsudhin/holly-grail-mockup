// hamburger configure
const hamburger = document.querySelector('.hamburger')
const ulMenu = document.querySelector('.list-menu')
const lines = hamburger.querySelectorAll('span')


hamburger.addEventListener('click', (e) => {
  // showing the menu list element
  ulMenu.classList.toggle('active')

  // change the lines to x adding class 
  lines.forEach(line => {
    line.classList.toggle('change')
    console.log(line)
  })
  console.log(ulMenu)
})