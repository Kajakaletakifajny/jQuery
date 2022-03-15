$(function (){
    $('input').on('focus',function (){$('#span').css('display','inline').fadeOut(4500);});
    $('input').on('blur',function (){$('#span1').css('display','inline').fadeOut(4500);});
    $('input').on('change   ',function (){$('#span2').css('display','inline').fadeOut(4500);});
});
$(function (){
    let i =0;
    let n=0;
    $('#wew').mouseover(function (){
        i +=1;
        $('#komm').text('Najechano na prostokat '+i+' razy');
    }).mouseout(function () {
        $('#komm').text('Opuszczono obszar prostokata');
    });
    $('#wew').click(function () {
        n += 1;
        $('#komm').text('Kliknieto prostokat '+n+' Razy');
    });
});