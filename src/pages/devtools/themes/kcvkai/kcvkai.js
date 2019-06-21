// placeholder

$(document).on('ready', function(){
    // initialization code
    // tab switcher
    $('.tabs-tab').on('click', function() {
        let target = $(this).data('target');
        $('.tabs-tab').removeClass('active');
        $(this).addClass('active');
        $('.panel-content').hide();
        $(`#content-${target}`).show();
    });
    
    // stratroom click handler
    $('#btn-stratroom').on('click', function() {
        new RMsg('service', 'strategyRoomPage', {
            tabPath: 'profile'
        }).execute();
        return false;
    });

    // set UI to ready state
    makeReady();
    // hide the overlay
    $('#waiting-overlay').hide();
});

function makeReady() {
    $('#statusbar').removeClass('waiting onsortie').addClass('ready');
    $('#tab-panel').removeClass('onsortie');
    $('#status-text').html('Ready');
    $('#tab-main').click();
}

function onSortie(map) {
    $('#statusbar').removeClass('ready').addClass('onsortie');
    $('#tab-panel').addClass('onsortie');
    $('#status-text').html(`On sortie: map ${map}`);
    $('#tab-battle').click();
}