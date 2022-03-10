$('div').each(function(bot){
    console.log('Numer diva o nazwie', this.id, 'to', bot)
});

$('button').click(function(){
    $('a').each(function(){
        alert($(this).text());
    });
});
