/*require.config({
	paths : {
		jquery: 'jquery-1.12.3'
	}
});
*/
require(['jquery', 'dialog'], function($, Dialog){
	$('#btn').on('click', function(){
		var settings = {
			width : '500',
			// height : '100',
			title : '我的弹出层',
			content : 'login.html'
		};
		var dialog = new Dialog(settings);
		dialog.open();

	});
});
