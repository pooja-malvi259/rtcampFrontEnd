var a;
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('.date-part').html(momentNow.format('dddd') + ' , ' + momentNow.format('DD MMMM'));
        $('.time-part').html(momentNow.format('hh:mm:ss'));
    }, 100);

    $('#slider2').bxSlider({
        auto: true,
        autoControls: false,
        pause: 3000
    });
});

