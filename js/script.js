// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var Tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(Tujuan);

   // pindahkan scroll
   $('body').animate({
       scrollTop: elemenTujuan.offset().top -50
   }, 1250, 'easeInOutExpo');

    e.preventDefault();

});


// parallax
// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

// jumbotron
    $('.jumbotron img').css({
        'transfrom' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transfrom' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transfrom' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

// Portfolio
if (wScroll > $('.Portfolio').offset().top - 250 ) {
    $('.Portfolio .thumbnail').each(function(i) {
        setTimeout(function() {
            $('.Portfolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * (i+1));
    });
}


});







