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

    function switchToArticle(id) {
        $('#home').fadeToggle();
        setTimeout(function() {
            $('#article' + id).fadeToggle();
            $('.button').fadeToggle();
        }, 400);
    }


    // Toggle between menu and content on click
    $('a').click( function(e) {
        if ( e.target.id == 'back' || $(e.target).parent().attr('id') == 'back' ) {
            resetToHome();
        }
        else if ( e.target.id == 0 ) { // Special case for kiltis
            var video = document.getElementById('kiltis');
            if ( !video.src.endsWith('dank.webm') ) {
                video.src = 'dank.webm';
                $(video).parent().load();
            }
            switchToArticle(e.target.id);
        }
        else {
            switchToArticle(e.target.id);
        }
    })

});