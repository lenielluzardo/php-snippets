let navMenu = document.getElementById('nav-menu');
let navIcon = document.getElementById('nav-icon');
let header = document.getElementById('header-container');


navIcon.addEventListener("click", showNavMenu);

function showNavMenu(){
  // alert("I'm working");

  if(navMenu.classList.contains('hidden')){
    
    navMenu.classList.remove('hidden');
    header.style.position = "fixed";
    header.style.width = "100%";
    navIcon.src='../assets/x-icon.svg';
  }
  else {
    navMenu.classList.add('hidden');
    header.style.position = "sticky";
    navIcon.src='./assets/nav-icon.svg';
  }
}


