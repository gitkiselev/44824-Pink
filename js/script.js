var link = document.querySelector(".page-header__open");
var close = document.querySelector(".page-header__close");
var opened = document.querySelector(".main-nav");
var bg = document.querySelector(".page-header__opacity");


link.addEventListener("click", function(event) {
event.preventDefault();
opened.classList.toggle("main-nav-js");//выскакивает/убирается меню
link.classList.toggle("page-header__close");//бургер меняется на крестикadd
//link.classList.remove("page-header__open");//при щелчке удаляется бургер
bg.classList.toggle("page-header__opacity--no");//делаем фон полностью непрозрачным




});








