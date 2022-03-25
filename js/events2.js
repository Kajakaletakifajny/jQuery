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

    $('input, h2, h1, button,p ,span').on('click', function(){
        $('p').last().text(event.target.nodeName);
    });

    $('#pokaz2').on('click', function(){
        $('img').show();
    });
    $('#ukryj').on('click', function(){
        $('img').hide();
    });
    $('#przelacz').on('click', function(){
        $('img').toggle;
    });

});

//kwadraty zwijające się
$(function (){
    $('#wysun').on('click', function (){
        $('#pierwszy').toggle().slideDown(1000);
    });
    $('#wysun2').on('click', function (){
        $('#drugi').toggle().slideUp(2000);
    });
    $('#wysun3').on('click', function (){
        $('#trzeci').slideToggle('slow');
    });
});

//kulki
$(function (){
    $('#start1').on('click', function (){
        $('#pierwszy2').animate({'left': '+=300px'}, 'slow');
        $('#pierwszy2').animate({'top': '+=50px'}, 'slow');
        $('#pierwszy2').animate({'left': '+=700px'}, 600, 'swing', function(){$('#log').text('Niebieski wygra')});
    });

    $('#start2').on('click', function (){
        $('#drugi2').animate({'left': '+=300px'}, 'slow');
        $('#drugi2').animate({'top': '+=50px'}, 'slow');
        $('#drugi2').animate({'left': '+=700px'}, 800);
    });

    $('#start3').on('click', function (){
        $('#start1 , #start2').click();
    });

    $('#reset').on('click', function (){
        $('#log').text('');
        $('#pierwszy2 , #drugi2').css({left: '' , top: ''});
    });

    $('#stop').on('click', function () {
        $('.kulka').clearQueue();
        $('.kulka').stop();
    });
});

/*
$(function (){
    $('#wgore').on('click', function (){
        $('#trzeci2').animate({'bottom': '+=50px'});
    });

    $('#wdol').on('click', function (){
        $('#trzeci2').animate({'top': '+=50px'});
    });

    $('#wprawo').on('click', function (){
        $('#trzeci2').animate({'left': '+=50px'});
    });

    $('#wlewo').on('click', function (){
        $('#trzeci2').animate({'right': '+=50px'});
    });

});*/


$(function(){
    $('input').on('keyup', function(){
        const wartosc=$(this).val();
        $('p').eq(0).text(wartosc);
    }).keyup();

    function wyswietlPojedynczyWybor(){
        const pojedynczyWybor=$('#tylkoJeden').val();
        $('p').eq(1).text('Twój wybór to: ' + pojedynczyWybor);
    }

    $('select').change(wyswietlPojedynczyWybor);
    wyswietlPojedynczyWybor();

    function wyborJezyka() {
        const jakiJezyk = $('#tylkoJeden').val();
        if (jakiJezyk == 'Stron internetowych'){
            $('#log').text('');
            $('#ulubionyJezyk').html('PHP <input type="radio" name="www" value="PHP"> Java Script <input type="radio" name="www" value="JavaScript">');
            $('input').on('click', function (){
                $('#log').html('wybrano' + $('input:checked').val());
            });
        }
        else if (jakiJezyk=='Aplikacji desktopowych'){
            $('#log').text('');
            $('#ulubionyJezyk').html('C++ <input type="checkbox" name ="desktop"  value="C++"> Java <input type="checkbox" name="desktop" value="Java"> <button type="button"> Sprawdz zaznaczenie</button>');
            $('button').on('click', function (){
                const favorite = [];
                $.each($('input[name="desktop"]:checked'), function (){
                    favorite.push($(this).val());
                });
                const ilosc = function (){
                    const n = $('input:checked').length;
                    const x = (n === 1 ? 'Moim ulubionym jezykiem jest:' : 'Moimi ulubionymi jezykami są: ');
                    alert(x + favorite.join(', '));
                };
                ilosc();
            });
        };
        else {
            $('#log').text('');
            $('#ulubionyJezyk').html('<img src="best5.png">');
        };
    };
    $('select').change(wyborJezyka());
    wyborJezyka();
    function wyswietlWyborWielokrotny () {
        const wielokrotnyWybor = $('#wiele').val();
        $('p').eq(6).text('Twoj wybor to : '+ wielokrotnyWybor.join(', '));
    }
    $('select').change(wyswietlWyborWielokrotny);
    wyswietlWyborWielokrotny();
});