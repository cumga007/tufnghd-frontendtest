(function($) {
 
	$(document).ready(function(){
    $(".search-input-subtopic").click(function() {
        $(".search-input-subtopic > ul").slideToggle(500);
        return false;
    }); 
    $(".search-input-subtopic > ul li a").click(function() {

        var content = $(this).text();
        $(".search-input-subtopic > span").text(content);
        $("input.search-input-subtopic-value").val(content);


        $(".search-input-subtopic > ul").slideToggle(500);
        return false;
    }); 


    $(".search-input-topic").click(function() {
        $(".search-input-topic > ul").slideToggle(500);
        return false;
    }); 
    $(".search-input-topic > ul li a").click(function() {

        var content = $(this).text();
        $(".search-input-topic > span").text(content);
        $("input.search-input-topic-value").val(content);


        $(".search-input-topic > ul").slideToggle(500);
        return false;
    }); 

    
    $(".search-input-area > span, .search-input-area > input").hover(function() {
        $(".search-input-area > span").css({
          "z-index": '-1',
          "opacity" : '0'
        });
        $(".search-input-area > input").css({
         
          "opacity" : '1'
        });;
    }, function() {
      var distant = $(this).val() + " mi";
        $(".search-input-area > span").text(distant);
         
        
    });

    $(".search-input-area > input").focusout(function(event) {
        var distant = $(this).val() + " mi";
        $(".search-input-area > span").text(distant);
        $(".search-input-area > span").css({
         "z-index": '1',
         "opacity" : '1'
        });
        $(".search-input-area > input").css({
          "opacity" : '0'
        });;
    });


    $(".mobile-nav").click(function() {
        $(".menu-wrapper").slideToggle(300);
        return false;
    }); 

	});
 
	$(window).resize(function(){
 
	});
 
  

})(jQuery);
 