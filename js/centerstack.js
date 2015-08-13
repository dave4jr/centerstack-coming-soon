/*=======================
 *  Author:		 Dave Luke Jr
 *  Company:	 CenterStack.io
 *  Description:	 custom.js
 *=======================*/


$(function() {

	/*	Flexbox Outlines
	================================================== */
	var button = $('.outline-btn');
	var flex_containers = $('.flex-row, .flex-col, [class*="space-"]');
	button.click(function(){
		flex_containers.toggleClass('outline');
	});


	/*	JQuery-UI: Tabs
	================================================== */
	function jquery_tabs(id) {
		$('#' + id).tabs();
	}
	
	
	/*	Animate CSS
	================================================== */
	function animate_css(id, type) {
		var obj = $('#' + id);
		var animation_type = 'animated  ' + type;
		var animation_prefix = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		obj.addClass(animation_type);
		obj.one(animation_prefix, function() {
			$(this).removeClass(animation_type);
		});
	};

	function set_interval(id, type, interval) {
		var update = setInterval(function() {animate_css(id,type)}, interval);
	};


	/*	Main
	========================================= */
	animate_css('js-animate-logo','flipInX');
	animate_css('js-animate','flipInY');
	set_interval('js-animate','pulse',5000);

	










});