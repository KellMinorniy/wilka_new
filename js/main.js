var offcanvas = document.getElementById('offcanvas');
var openBtn = document.getElementById('open-btn');
var closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
 offcanvas.classList.add('show');
});

closeBtn.addEventListener('click', function() {
 offcanvas.classList.remove('show');
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 



// hamburger
var menu = document.querySelector('.menu');
var button = document.querySelector('.menu__button');

button.addEventListener('click', function() {
 menu.classList.toggle('menu--open');
 button.classList.toggle('menu__button--hidden');
});

document.addEventListener('click', function(event) {
 var isClickInsideMenu = menu.contains(event.target);
 var isClickOnButton = button.contains(event.target);

 if (!isClickInsideMenu && !isClickOnButton) {
  menu.classList.remove('menu--open');
  button.classList.remove('menu__button--hidden');
 }
});

