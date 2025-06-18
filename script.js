
//for modal display only
let contacky = document.getElementById('contactform')

contacky.addEventListener("submit", funk);

function funk(event)
{
    event.preventDefault();

    if(contacky.checkValidity())
    {
        let modal = new bootstrap.Modal(document.getElementById('myModal'));
        modal.show();
        contacky.reset();

    }
    else
    {
        contacky.reportValidity();
    }

}

//collapsing navbar quickly 
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  });