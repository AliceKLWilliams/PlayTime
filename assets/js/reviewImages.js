const reviewImages = document.querySelectorAll(".review__image");

let i = 1;
reviewImages.forEach(image => {
	if(i < 4) {
		image.style.backgroundImage = 'url("assets/img/reviews/parent'+i+'.jpg")'
	} else{
		image.style.backgroundImage = 'url("assets/img/reviews/child'+i+'.jpg")'
	}
	i++;
});