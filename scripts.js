$(document).ready(function() {

    // Toggle between menu and content on click
    $('a').click( function(e) {
        if ( $('p').css('display') == 'none' ) {
            $('a').fadeToggle()
            setTimeout(function() {
                $('p').fadeToggle()
            }, 300);
        } else {
            $('p').fadeToggle()
            setTimeout(function() {
                $('a').fadeToggle()
            }, 300);
        }
    })

});