$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('#whoAmI img',{
		duration:200, property:'rotate', start:0, end:20
	});
	scrollorama.animate('#whoAmI h2',{
		duration:200, property:'rotate', start:0, end:20
	});
	scrollorama.animate('#whoAmI p',{
		duration:200, property:'rotate', start:0, end:20
	});
    
    scrollorama.animate('#move .front',{
    	delay:993, duration:993, property:'left',start:0, end:950,  easing:'easeOutBounce'
    });

  	  scrollorama.animate('#project span', {
    	delay:993,duration:1986, property:'letter-spacing', start:120
    });

  	   scrollorama.animate('#project p', {
    	delay:993,duration:1986, property:'left',start:800, end:-200,  easing:'easeOutBounce'
    });

  	 scrollorama.animate('#personality h2',{
		delay:2979, duration:993, property:'font-size', start:70, end:10
	});

  	 scrollorama.animate('#personality p',{
		delay:2979, duration:993, property:'font-size', start:20, end:5
	});

  	 scrollorama.animate('#personality ul li:nth-child(1)',{
		delay:2979, duration:993, property:'top', start:0, end: -300
	});
  	 
	scrollorama.animate('#personality ul li:nth-child(3)',{
		delay:2979, duration:993, property:'top', start:0, end: -300
	});
	scrollorama.animate('#personality ul li:nth-child(5)',{
		delay:2979, duration:993, property:'top', start:0, end: -300
	});
	
});

