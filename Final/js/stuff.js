function Carousel(car){
	var carousel = this;    //current carousel we work at

	carousel.element = $(car);
	carousel.currentSlide = 0;
	carousel.numberOfSlides = carousel.element.find(".carousel-slide").length;

	carousel.element.find(".carousel-move-left").on("click",function(){
		console.log("clecked left");
		carousel.changePositon(false);
	});
	carousel.element.find(".carousel-move-right").on("click",function(){
		console.log("clecked right");
		carousel.changePositon(true);
	});

	carousel.changePositon = function(direction){
		if (direction === true) {
			carousel.currentSlide++;
		}else if(direction === false){
			carousel.currentSlide--;
		}else{
			carousel.currentSlide = direction;
		}

		if(carousel.currentSlide < 0){
			carousel.currentSlide = carousel.numberOfSlides-1;
		}else if (carousel.currentSlide >= carousel.numberOfSlides){
			carousel.currentSlide = 0;
		}

		console.log(carousel.currentSlide);

		carousel.showPosition();
	}

	carousel.showPosition = function(){

		var rightposition, leftposition;

		if(carousel.currentSlide == 0){
			leftposition = carousel.numberOfSlides-1;
		}else leftposition = carousel.currentSlide-1;

		if(carousel.currentSlide == carousel.numberOfSlides-1){
			rightposition = 0;
		}else rightposition = carousel.currentSlide+1;

		var test = carousel.element.find(".carousel-slide")

			.eq(carousel.currentSlide).addClass("atCenter")
			.siblings().removeClass("atCenter").end().end()

			.eq(rightposition).addClass("atRight")
			.siblings().removeClass("atRight").end().end()

			.eq(leftposition).addClass("atLeft")
			.siblings().removeClass("atLeft").end().end()

	}
}

$(function(){  //document ready
	$(".carousel").each(function(){
		new Carousel(this);
	});
});