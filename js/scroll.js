$(document).mousemove(function(e) {
    $("html, body").scrollTop(function(i, v) {
        var h = $(window).height();
        var y = e.clientY - h / 2;
        return v + y * 0.1;
    });
});