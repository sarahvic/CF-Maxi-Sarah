$(document).ready(function(){
	$("[src^='notebook']").css("background-color", "red");
	$("[src^='phone']").css("background-color", "green");
	$("[src^='tablet']").css("background-color", "blue");
})

$(document).ready(function(){
	$("div .col-xs-12:eq(0)").clone().appendTo(".container");
})