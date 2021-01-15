let navMenu = document.querySelector('.nav_menu-list');
let hambIcon = document.querySelector('.hamb_icon').addEventListener("click", e => {

  if(!navMenu.classList.contains('show_menu')){
  navMenu.classList.add('show_menu');
}
else {
  navMenu.classList.remove('show_menu');
}

});
