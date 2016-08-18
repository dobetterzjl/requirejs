define(['jquery'], function($){
	function Carousel(options){
		this.settings = {
			imgs : [],
			buttonStyle : 'squire',//circle
			arrows : 'bottom',//center
			speed : 1000
		};
		$.extend(this.settings, options);
		this.$container = $('<div class="carousel-container"></div>');
		this.$imgs = $('<div class="carousel-imgs"></div>');
		this.$tab = $('<ul class="carousel-tab"></ul>');
		this.$arrows = $('<div class="carousel-arrows"></div>').addClass(this.settings.arrows);
		this.$prev = $('<span class="carousel-arrows-prev">&lt;</span>').addClass(this.settings.arrows);
		this.$next = $('<span class="carousel-arrows-next">&gt;</span>').addClass(this.settings.arrows);
	}
	Carousel.prototype.init = function(){
		for(var i=0; i<this.settings.imgs.length; i++){
			this.$imgs.append($('<img src='+ this.settings.imgs[i] + '>'));
			this.$tab.append($('<li>'+ (this.settings.buttonStyle == 'circle'? '': (i + 1)) +'</li>'));
		}
		this.$imgs.children().eq(0).addClass('selected');
		this.$tab.children().eq(0).addClass('selected');
		this.$arrows.append(this.$prev).append(this.$next);
		this.$container.append(this.$imgs).append(this.$tab).append(this.$arrows);
		$(this.settings.selector).append(this.$container);

		var $lis = 	$('li', this.$tab);
		$lis.addClass(this.settings.buttonStyle);
		var $imgs = $('img', this.$imgs);
		var nowIdx = 0;
		$lis.on('click', function(){
			changeImg($(this).index());
		});
		this.$prev.on('click', function(){
			nowIdx--;
			if(nowIdx == -1){
				nowIdx = $lis.length - 1;
			}
			changeImg(nowIdx);
		});
		this.$next.on('click', function(){
			nowIdx++;
			if(nowIdx == $lis.length){
				nowIdx = 0;
			}
			changeImg(nowIdx);
		});

		var _this = this;
		start();
		this.$container.hover(function() {
			clearInterval(_this.timer);
		}, function() {
			start();
		});

		function start(){
			_this.timer = setInterval(function(){
				_this.$next.trigger('click');
			}, _this.settings.speed);
		}

		function changeImg(idx){
			nowIdx = idx;
			$lis.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
			$imgs.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
		}
		
	};








































	return Carousel;


});



























