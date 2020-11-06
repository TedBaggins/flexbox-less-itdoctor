let mixer = mixitup('.wrapper-filter');

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});