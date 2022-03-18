$(function(){

    $('input').on('keydown keyup keypress', function(){
        $('span').eq(7).text(' ' + event.type);
    });
    $('input').on('keydown keypress', function(){
        $('span').eq(8).text(' ' + event.which);
    });

    $('h2').on('click dblclick mouseover mouseout', function(){
        $('span').eq(7).text(' ' + event.type);
        const target = $(event.target);
        if(target.is('h2')) $('span').eq(8).text('Nie dotyczy');
    });

    $('input, h2').on('click', function(){
        $('span').eq(9).text(event.target.nodeName);
    });
});