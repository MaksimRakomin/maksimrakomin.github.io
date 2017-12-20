//Начало выезжающего меню
var options = {
  offset: 500
}

var header = new Headhesive('.header' , options);
//Конец выезжающего меню



//Начало слайдера
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n >slides.length) {
        slideIndex = 1
    }    
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}
function slideTime(n) {
     n=1
     showSlides(slideIndex += n);
 }
setInterval(slideTime, 5000);
//Конец слайдера




//Начало всплывающей формы Jqwery
$('.openFast').click(function(){
    $('.popupFast').css({'top': $(window).scrollTop() +100}).fadeIn();
    $('.bgPopup').fadeIn();
    
    $('.bgPopup').click(function(){
       $('.popupFast').fadeOut();
       $('.bgPopup').fadeOut();
    });
   
   $('.canselPopup').click(function(){
       $('.popupFast').fadeOut();
       $('.bgPopup').fadeOut();
    });
   
   
});

$(window).scroll(function(){
   $('.popupFast').css({'top': $(window).scrollTop() +100})
}).scroll();
//Конец всплывающей формы Jqwery



//Начало отправки формы Ajax
;(function($){

  	jQuery.fn.sendFormLP = function(options){

  		options = $.extend({
            toEmail: 'zerakul87@mail.ru',
            fromEmail: 'info@sergeibelousov.ru',
            interval : 5000
        }, options);

	    var make = function(){
	      
	    	$(this).submit(function(e){
	        	e.preventDefault();

	        	var $this = $(this);

	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            var objHide = $this.data('hide')

	            $items.removeClass('error');

	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });

	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });

		            var m_data = '';

		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }
		            
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();
		                    $(objHide).hide();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });

	    };
	 
	    return this.each(make); 

  	};

})(jQuery);

$(function(){

	$('form').sendFormLP({
		toEmail: 'maksim.rakomin@gmail.com',
		fromEmail: 'bigdrakon@rambler.ru',
		interval: 1000
	});

});
//Конец отправки формы Ajax











