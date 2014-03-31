$(document).ready(function(){
	$("#showCV").click(function() {
			$("#cv").animate({left:'0'});
			$("#whoAmIC").hide();
			$(".topnav").show();
	});
	$("#unshowCV").click(function() {
			$("#cv").animate({left:'-100%'});
			$("#whoAmIC").show();
			$(".topnav").hide();
	});


	 $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('#move p',{
    	delay:400, duration:995, property:'opacity',start:0.1, end:1
    });

	
});


