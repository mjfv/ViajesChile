var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) { //Añadimos clases con jquery
          $('nav').addClass('bg-dark', 'shadow');
        } else { 
          $('nav').removeClass('bg-dark', 'shadow');
        }
      }); 

$(document).ready(function(){

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior
            
            var hash = this.hash; // Store hash
              	$('html, body').animate({
                	scrollTop: $(hash).offset().top
                }, 800, function(){ // milliseconds it takes to scroll to the specified area
                	// Add hash (#) to URL when done scrolling (default click behavior)
                	window.location.hash = hash;
              	});
        }
    });
});
