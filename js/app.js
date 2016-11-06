var a;
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('.date-part').html(momentNow.format('dddd') + ' , ' + momentNow.format('DD MMMM'));
        $('.time-part').html(momentNow.format('hh:mm:ss'));
    }, 100);
    $('.carousel').carousel();
});

