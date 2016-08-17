define(['jquery'], function($){
	function Dialog(options){
		this.settings = {//存储默认值
			width : '400',
			height : '300',
			title : '弹出层',
			content : ''
		};
		$.extend(this.settings, options);
		this.$container = $('<div class="dialog-container"></div>');
		this.$mask = $( '<div class="dialog-mask"></div>');
		this.$box = $( '<div class="dialog-box"></div>').css({
			width : this.settings.width,
			height : this.settings.height,
			marginTop : -this.settings.height / 2,
			marginLeft : -this.settings.width / 2
		});
		this.$title = $( '<div class="dialog-title"></div>');
		this.$item = $( '<div class="dialog-title-item">'+ this.settings.title +'</div>');
		this.$close = $('<div class="dialog-title-close">[X]</div>');
		this.$content = $('<div class="dialog-content"></div>');
	}
	Dialog.prototype.open = function(){
		this.$container.append(this.$mask).append(this.$box);
		this.$title.append(this.$item).append(this.$close);
		this.$box.append(this.$title).append(this.$content);
		this.$content.load(this.settings.content);
		$(document.body).append(this.$container);
		var _this = this;
		this.$close.on('click', function(){
			_this.close();
		});
	};
	Dialog.prototype.close = function(){
		this.$container.remove();
	};
	return Dialog;

});