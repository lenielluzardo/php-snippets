let navMenu = document.querySelector('.nav_menu');
let navIcon = document.querySelector('.nav_icon').addEventListener("click", e => {

console.log(navMenu);

  if(navMenu.classList.contains('hide')){
    navMenu.classList.remove('hide');
}
else {
  navMenu.classList.add('hide');


}

});
