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
            var video0 = document.getElementById('kiltis0');
            var src = $(video0).parent().get(0).currentSrc;
            var split = src.split('/');
            var file = split[split.length - 1];
            var filename = file.split('.')[0];
            var filetype = file.split('.')[1];

            if ( filename !== 'dank' ) {
                var element = $('source[src="'+file+'"]').first();
                element.attr('src', 'dank.'+filetype);
                $(element).parent().load();
                $(element).parent().get(0).play();
            }
            switchToArticle(e.target.id);
            setTimeout(function() {
                $('#article0').fadeOut();
            }, 12000);
        }
        else {
            switchToArticle(e.target.id);
        }
    })

});