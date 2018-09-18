// variable that holds the menu button
const menuButton = document.getElementById('menu-button');

// variable that holds the vertical menu
const verticalMenu = document.getElementById('main-menu');

// function that toggles the menu
function openMenu() {
  verticalMenu.classList.toggle('open');
}

//function that replaces the text on the menu button
function replaceText() {
  menuButton.innerHTML ='Close Menu';
}

//click event
menuButton.addEventListener('click', function() {
  openMenu();
  if(verticalMenu.className === 'container open') {
    replaceText();
  } else {
    menuButton.innerHTML = 'Menu';
  }
});
