$(document).ready(function() {

    // Toggle between menu and content on click
    $('a').click( function(e) {
        var id = e.target.id;
        var targetElement = '#p' + id;
        if ( $(targetElement).css('display') == 'none' ) {
            $('a').fadeToggle()
            setTimeout(function() {
                $(targetElement).fadeToggle()
            }, 400);
        } else {
            $('p').fadeOut()
            setTimeout(function() {
                $('a').fadeToggle()
            }, 400);
        }
    })

});