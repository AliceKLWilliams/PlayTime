const cardContainer = document.querySelector(".signup__cards");
const cards = document.querySelectorAll(".form__card");
const formContainer = document.querySelector(".form__container");

const nextButtons = document.querySelectorAll(".form__next");
const prevButtons = document.querySelectorAll(".form__prev");

nextButtons.forEach((bttn) =>{

	bttn.addEventListener("click", (e) => {
		const parentCard = bttn.parentNode.parentNode;
		const nextCard = parentCard.nextElementSibling;

		if(!parentCard.reportValidity()) return;

		if(nextCard){ // We have another sibling
			nextCard.classList.remove("form__card--hidden--right");
			parentCard.classList.add("form__card--hidden--left");
		}
	});
});

prevButtons.forEach((bttn) =>{

	bttn.addEventListener("click", (e) => {

		const parentCard = bttn.parentNode.parentNode;
		const prevCard = parentCard.previousElementSibling;

		if(prevCard){ // We have another sibling
			prevCard.classList.remove("form__card--hidden--left");
			parentCard.classList.add("form__card--hidden--right");
		}
	});
});

sizeContainer();

function sizeContainer(){
	let maxHeight = 0;
	cards.forEach( card =>{
		let cardHeight = parseInt(window.getComputedStyle(card).height);
		if(cardHeight > maxHeight){
			maxHeight = cardHeight;
		}
	});

	cardContainer.style.height = maxHeight + 31  + "px";
}

window.addEventListener("resize", sizeContainer);