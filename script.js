$(document).ready(function() {
    
    // Scroll to top button
    $('#go-to-top').hide();

    $(window).scroll(function() {
        if($(this).scrollTop() >= $('#section-1').offset().top)
            $('#go-to-top').fadeIn();
        else
            $('#go-to-top').fadeOut();
    });

    $('#go-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });

    // Navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
     
        var targetEle = this.hash;
        var $targetEle = $(targetEle);
     
        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top
        }, 600, 'swing', function() {
            window.location.hash = targetEle;
        });
    });

    $('nav a').hover(
        function() {
            $(this).animate({color: '#FFFFFF'}, 'fast');
        },
        function() {
            $(this).animate({color: '#FFD05B'}, 'fast');
        }
    );
});