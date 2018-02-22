$('#derecha').click(function() {
    var auto = $('#auto');
    auto.animate({
           left : parseInt(auto.css('left'))+50)
    },2000);
});
