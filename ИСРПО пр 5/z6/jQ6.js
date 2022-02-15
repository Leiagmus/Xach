$(document).ready(function(){
						   
	$('#featured').orbit({
		animation: 'fade', //fade, horizontal-slide, vertical-slide
		animationSpeed: 800, // скорость анимации
		advanceSpeed: 4000, // скорость между переходами по таймеру
		startClockOnMouseOut: true, // таймер перезагрузится на MouseOut
		startClockOnMouseOutAfter: 3000, //через сколько старутет таймер, если мышка отведена.
		directionalNav: true, //подсказки при навигации captions: true,
		 // заголовок будет подписью к картинке
		captionAnimationSpeed: 800, //как быстро загружать описание, как я понял: how quickly to animate in caption on load and between captioned and uncaptioned 
		timer: false //если нужен таймер
		});
		
});
