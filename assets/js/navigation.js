const navButton = document.querySelector(".nav__open");
const navClose = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__items");

navButton.addEventListener("click", () => {
	navList.classList.add("nav__items--transition-show");
	requestAnimationFrame((ts) => {
		navList.classList.add("nav__items--show")
	});
});

navClose.addEventListener("click", () =>{
	navList.classList.remove("nav__items--transition-show");
	navList.classList.add("nav__items--transition-hide");

	requestAnimationFrame((ts) => {
		navList.classList.remove("nav__items--show");
	});

	setTimeout(() => navList.classList.remove("nav__items--transition-hide"), 501); //clean up classes
});

window.addEventListener("resize", () => {
	//Close nav on resize
	if(window.innerWidth >= 768){
		navList.classList.remove("nav__items--show");
		navList.classList.remove("nav__items--transition-show");
		navList.classList.remove("nav__items--transition-hide");
	}
});