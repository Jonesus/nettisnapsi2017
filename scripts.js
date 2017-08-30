$(document).ready(function() {

    function resetToHome() {
        $('p').fadeOut();
        $('.button').fadeOut();
        if ( $('h1').css('display') == 'none' ) {
            setTimeout(function() {
                $('h1').fadeIn();
                $('a:not(.button)').fadeIn();
            }, 400);
        } else {
            setTimeout(function() {
                $('a:not(.button)').fadeIn();
            }, 400);
        }
    }


    // Toggle between menu and content on click
    $('a').click( function(e) {
        var id = e.target.id;
        var targetElement = '#p' + id;

        // Generic article toggle
        if ( $(targetElement).css('display') == 'none' ) {
            $('a').fadeToggle();
            setTimeout(function() {
                $(targetElement).fadeToggle();
            }, 400);
        
        // Fullscreen kiltis
        } else if ( $(targetElement).is('h1') ){
            $('h1').fadeOut();
            $('a:not(.button)').fadeOut();
            setTimeout(function() {
                $('.button').fadeIn();
            }, 400);

        } else {
            resetToHome();
        }
    })

});