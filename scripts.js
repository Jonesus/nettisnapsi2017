$(document).ready(function() {
    $('a').click( function(e) {
        if ($('a').css('opacity') == 0) {
            $('a').css('opacity', 1);
        }
        else {
            $('a').css('opacity', 0);
            setTimeout(function() {
                $('a').css('display', 'none');
                $('p').css('display', 'block');
            }, 300);
            setTimeout(function() {
                $('p').css('opacity', 1);
            }, 600);
        }
    })
});