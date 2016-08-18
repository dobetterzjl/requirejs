require(['jquery', 'carousel'], function($, Carousel){

	var imgDate = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
	var settings1 = {
		selector : '#container',
		imgs : imgDate,
		buttonStyle : 'squire',//circle
		arrows : 'bottom',//center
		speed : 500
	};
	var carousel = new Carousel(settings1);
	carousel.init();

	var settings2 = {
		selector : '#container2',
		imgs : imgDate,
		buttonStyle : 'circle',//circle
		arrows : 'center',//center
		speed : 1000
	};

	var carousel2 = new Carousel(settings2);
	carousel2.init();

});