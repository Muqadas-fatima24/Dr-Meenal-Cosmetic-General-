
<footer>
    <div class="wrap">
        <p class="text-center">© <span id="yearFooter">2024</span> DR MEENAL PATEL - ALL RIGHTS RESERVED / SITE LAST UPDATED 31/12/2023 <span> &nbsp; |  &nbsp; <a href="privacy-policy.php" style="color:#161c2f">PRIVACY &amp; COOKIE POLICY</a></span></p>
<!--        <p class="text-center mb-0"> <a href="privacy-policy.php" style="color:#161c2f">PRIVACY &amp; COOKIE POLICY</a></p>-->
    </div>
</footer>



        <!-- JAVASCRIPT FILES LINK -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
    $("#puts-need-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000, // Changed to a faster timing (3 seconds)
        items: 1, // Ensures only one item is shown at a time
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
    </script>
    <!-- kkkkkkkkkkkkkkkkkkkkkkkkppppppppppppppppp -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
     <!-- ppppppppppppppppppppppppppppppppppppppppp -->


<!-- preloader -->
 <script>
$(window).on('load', function() {
    // This function will run only when the whole site is loaded.
    // .delay(50) adds a small pause before fading out.
    // .fadeOut('fast') fades out the preloader background.
    $('#preloader-Bg').delay(50).fadeOut('fast'); 
    $('html').css({
        'overflow-y': 'auto'
    });
});
 
</script>

</script>

<!-- form popup -->
        <div class="error-popup" id="error-popup" style="display: none;">
            <div class="popup-wrap">
                <div class="hide-popup" onclick="hidePopup()">
                    x
                </div>
                <div class="popup-text">
                    Form has been submitted Successfully
                </div>
            </div>
        </div>
        <!-- script of popup -->
<script>
    function hidePopup() {
        document.getElementById('error-popup').style.display = "none";
        location.reload();
    } 
</script>
<!-- for banner carousel left side of vedio -->
 <script>
    $(document).ready(function(){
  $(".nitime-car").owlCarousel({
    items: 1, 
    loop: true, 
    autoplay: true,
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    nav: false, 
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
 </script>