$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})

$(window).scroll(function(event) {
	function footer()
    {
        var scroll = $(window).scrollTop(); 
        if(scroll > 50)
        { 
            $(".footer-nav").fadeIn("slow").addClass("show");
        }
        else
        {
            $(".footer-nav").fadeOut("slow").removeClass("show");
        }
        
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if ($('.footer-nav').is(':hover')) {
	        	footer();
    		}
            else
            {
            	$(".footer-nav").fadeOut("slow");
            }
		}, 2000));
    }
    footer();
});