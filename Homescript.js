$(document).ready(function(){
	$("#signup").click(function(){
		$("#signup").toggle();		
		$("#register").toggle('slow');
		$("#register").css("display","inline-block");
		console.log("I got here");
	});
});