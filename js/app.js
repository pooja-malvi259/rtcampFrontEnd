var a;
$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('.date-part').html(momentNow.format('dddd') + ' , ' + momentNow.format('DD MMMM'));
        $('.time-part').html(momentNow.format('hh:mm:ss'));
    }, 100);
    $('.carousel').carousel();
    $('.video-slider').carousel({
        interval: false
    });
    $('.carousel-item').carousel({
        interval: false
    });
    $('.video-slider .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    $('.carousel-item .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 3   ; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
});
