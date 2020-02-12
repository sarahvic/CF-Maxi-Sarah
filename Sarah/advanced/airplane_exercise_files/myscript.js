$(document).ready(function(){
	$(window).mousemove(function(event){
		$("#moveme").css({"left": event.pageX, "top": event.pageY});
	});
});
