var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) { //Añadimos clases con jquery
          $('nav').addClass('bg-dark', 'shadow');
        } else { 
          $('nav').removeClass('bg-dark', 'shadow');
        }
      }); 