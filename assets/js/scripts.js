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
	
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {  //scroll
          $('nav').addClass('bg-dark');
        } else { 
          $('nav').removeClass('bg-dark');
        }
      }); 

	//Navbar active -- Bootstrap
	var scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbarNav'
	});

	//Tooltip -- Bootstrap
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  		return new bootstrap.Tooltip(tooltipTriggerEl)
	});

	//Carousel -- Bootstrap
	var myCarousel = document.querySelector('#myCarousel');
	var carousel = new bootstrap.Carousel(myCarousel, {
		interval: 2000,
		wrap: true,
		pause: 'hover'
	});
	// test


});
