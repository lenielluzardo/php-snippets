let navMenu = document.querySelector('.nav_menu');
let navIcon = document.querySelector('.nav_icon').addEventListener("click", e => {

console.log(navMenu);

  if(navMenu.classList.contains('hidden')){
    navMenu.classList.remove('hidden');
}
else {
  navMenu.classList.add('hidden');
}
});
