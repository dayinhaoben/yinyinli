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

	$("#showColorM").click(function() {
		$("#colorMInfo").toggle(1500);
	});
	$("#showBlog").click(function() {
		$("#blogInfo").toggle(1500);
	});


	 $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('#move p',{
    	delay:500, duration:995, property:'opacity',start:0, end:1
    });

	scrollorama.animate('#project a',{
    	delay:1300, duration:995, property:'opacity',start:0, end:1
    });

    scrollorama.animate('#project a',{
    	delay:1100, duration:995, property:'left',start:-1200, end:0
    });

	
});


