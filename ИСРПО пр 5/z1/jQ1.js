$(document).ready(function(){
						   
	$("div").bind("mouseover", function(){
		$(this).css({"background-color":"#FAFFEA",cursor:"pointer"});	
		
	}).bind("mouseout", function(){
		$(this).css("background-color", "");		
	});
$('#something').animate({'margin-top': '300px', 'margin-left': '400px'},1000);

});
