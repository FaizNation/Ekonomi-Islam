/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


  function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Validasi dasar
    if (!name || !email || !phone || !message) {
      alert("Mohon isi semua kolom sebelum mengirim pesan.");
      return;
    }

    var fullMessage = `Halo, saya ${name} %0AEmail: ${email}, %0ATelp: ${phone} ingin menyampaikan pesan:%0A${message}`;
    var whatsappNumber = "6281477084703"; // Ganti dengan nomormu (pakai 62 ya!)

    var whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    // Buka WhatsApp
    window.open(whatsappURL, "_blank");

    // Alert sukses
    alert("Pesan kamu akan dikirim lewat WhatsApp. Terima kasih!");
    
    // Reset form (opsional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  }


  function scrollFooter(scrollY, heightFooter)
  {
      console.log(scrollY);
      console.log(heightFooter);
  
      if(scrollY >= heightFooter)
      {
          $('footer').css({
              'bottom' : '0px'
          });
      }
      else
      {
          $('footer').css({
              'bottom' : '-' + heightFooter + 'px'
          });
      }
  }
  
  $(window).load(function(){
      var windowHeight        = $(window).height(),
          footerHeight        = $('footer').height(),
          heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
  
      // Definindo o tamanho do elemento pra animar
      $('#scroll-animate, #scroll-animate-main').css({
          'height' :  heightDocument + 'px'
      });
  
      // Definindo o tamanho dos elementos header e conteúdo
      $('header').css({
          'height' : windowHeight + 'px',
          'line-height' : windowHeight + 'px'
      });
  
      $('.wrapper-parallax').css({
          'margin-top' : windowHeight + 'px'
      });
  
      scrollFooter(window.scrollY, footerHeight);
  
      // ao dar rolagem
      window.onscroll = function(){
          var scroll = window.scrollY;
  
          $('#scroll-animate-main').css({
              'top' : '-' + scroll + 'px'
          });
          
          $('header').css({
              'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
          });
  
          scrollFooter(scroll, footerHeight);
      }
  });function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});