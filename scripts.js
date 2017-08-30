$(document).ready(function() {

    // Transformation on click
    $('a').click( function(e) {
        $('a').fadeToggle()
        setTimeout(function() {
            $('p').fadeToggle()
        }, 300);
    })

});