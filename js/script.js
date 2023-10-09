$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('html').toggleClass('overflow-hidden');
        $('.burger-content').toggleClass('active')
    });
});

