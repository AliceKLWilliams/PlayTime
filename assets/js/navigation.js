const navButton = document.querySelector(".nav__open");
const navClose = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__items");

navButton.addEventListener("click", () => {
	navList.classList.add("nav__items--show");
});

navClose.addEventListener("click", () =>{
	navList.classList.remove("nav__items--show");
});

window.addEventListener("resize", () => {
	//Close nav on resize
	if(window.innerWidth >= 768){
		navList.classList.remove("nav__items--show");
		navList.classList.remove("nav__items--transition-show");
		navList.classList.remove("nav__items--transition-hide");
	}
});