let navMenu = document.querySelector('.nav_menu');
let navIcon = document.querySelector('.nav_icon');

console.log(navIcon);

navIcon.addEventListener("click", e => {

  if(navMenu.classList.contains('hidden')){
    navMenu.classList.remove('hidden');
    navIcon.src='../assets/x_button.svg';
  }
else {
  navMenu.classList.add('hidden');
  navIcon.src='./assets/hamb_button.svg';
}
});
