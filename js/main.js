var offcanvas = document.getElementById('offcanvas');
var openBtn = document.getElementById('open-btn');
var closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
 offcanvas.classList.add('show');
});

closeBtn.addEventListener('click', function() {
 offcanvas.classList.remove('show');
});

// dropdown

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 