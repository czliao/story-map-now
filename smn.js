$(document).ready(function() {

    // EXTRA: Presentation Mode //

    var pMode = false;

    $(document).on("keydown", function (e) {
        // console.log(e.which);
        switch(e.which) {
        case 80: //'p'
            if (!pMode) {
                $('.linkSocialContainer').hide();
                $('iframe').contents().find('#slideDeckContainer').hide();
                $('iframe').contents().find('.mapControlsContainer').hide();
                pMode = true;
            } else {
                $('.linkSocialContainer').show();
                $('iframe').contents().find('#slideDeckContainer').show();
                $('iframe').contents().find('.mapControlsContainer').show();

                $('#floatingPanel .backdrop').fadeTo(100, 0.8);
                $('#floatingPanel .navDotsInner').fadeTo(100, 0.8);
                pMode = false;
            }
            break;
        default:
            break;
        }
    });

    $('#floatingPanel').mouseenter( function() {
        if (pMode) {
            $('#floatingPanel .backdrop').fadeTo(200, 0.8);
            $('#floatingPanel .navDotsInner').fadeTo(200, 0.8);
        }
    });

    $('#floatingPanel').mouseleave( function() {
        if (pMode) {
            $('#floatingPanel .backdrop').fadeTo(200, 0);
            $('#floatingPanel .navDotsInner').fadeTo(200, 0);
        }
    });

});