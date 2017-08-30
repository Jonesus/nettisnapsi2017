// >Disabling javascript
// >2017
// (c) Inkubio ry

$(document).ready(function() {

    function resetToHome() {
        $('[id*=article]').fadeOut();
        $('.button').fadeOut();
        setTimeout(function() {
            $('#home').fadeIn();
        }, 400);
    }


    // Toggle between menu and content on click
    $('a').click( function(e) {
        if ( e.target.id == 'back' || $(e.target).parent().attr('id') == 'back' ) {
            resetToHome();
        } else {
            $('#home').fadeToggle();
            setTimeout(function() {
                $('#article'+e.target.id).fadeToggle();
                $('.button').fadeToggle();
            }, 400);
        }
    })

});