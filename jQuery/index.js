$('h1').addClass('big margin color');

$(document).keypress(function(event) {
    $('h1').text(event.key);
});