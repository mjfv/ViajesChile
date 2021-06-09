$(document).ready(function(){

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior
            
            var hash = this.hash; // Store hash
              	$('html, body').animate({
                	scrollTop: $(hash).offset().top
                }, 800, function(){ // milliseconds it takes to scroll to the specified area
                	window.location.hash = hash;
              	});
        }
    });

	//Transparent and color navbar
	var nav = document.querySelector('nav');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) { 
          $('nav').addClass('bg-dark', 'shadow');
        } else { 
          $('nav').removeClass('bg-dark', 'shadow');
        }
      }); 

	//Navbar active -- Bootstrap
	var scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbarNav'
	  })

	


});
