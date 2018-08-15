const GALLERY__PATH = "assets/img/gallery/gallery";

const leftButton = document.querySelector(".gallery__button--left");
const rightButton = document.querySelector(".gallery__button--right");

const imageHolders = document.querySelectorAll(".gallery__img");

const NUM_IMAGES = 3;

let currImage = 0;

leftButton.addEventListener("click", () => {
	if(currImage === NUM_IMAGES -1){
		currImage = 0;
	} else {
		currImage++;
	}

	let i = 0;
	imageHolders.forEach((holder) => {
		holder.src = GALLERY__PATH + ((currImage + i) % NUM_IMAGES) + ".png";
		i++;
	});
});

rightButton.addEventListener("click", () => {
	if(currImage === 0) {
		currImage = NUM_IMAGES -1;
	} else {
		currImage--;
	}

	let i = 0;
	imageHolders.forEach((holder) => {
		holder.src = GALLERY__PATH + ((currImage + i) % NUM_IMAGES) + ".png";
		i++;
	});
});