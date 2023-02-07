const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menuOpener");
const menuOpener = document.querySelector('.menuOpener');
const acceptBtn = document.querySelector(".accept");
const rejectBtn = document.querySelector(".reject");
const cookiesDiv = document.querySelector(".cookies")
const darkenDiv = document.querySelector(".darken"); 

// Toggle menu
menu.style.display = "none";
menuBtn.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// Rotate menu btn
menuOpener.addEventListener('click', () => {
menuOpener.classList.toggle('rotate');
});

// Cookie pop-up
document.addEventListener("DOMContentLoaded", () => {
  acceptBtn.addEventListener("click", () => {
    cookiesDiv.style.display = "none";
    darkenDiv.style.display = "none"; // Hides the dark div after pop-up is closed
  });

  rejectBtn.addEventListener("click", () => {
    cookiesDiv.style.display = "none";
    darkenDiv.style.display = "none"; // Hides the dark div after pop-up is closed
  });
});


