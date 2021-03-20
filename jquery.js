$(function() {

  var indexNum = 0;

  function slide(){

    $('.box-action').addClass('box-reverse');
    setTimeout(function(){
      $('.box-reverse').removeClass('box-action box-reverse');
    },500)

    indexNum++;
    if(indexNum==4){
      indexNum = 0;
    }

    $('.now').addClass('active');
    $('.slide-img').eq(indexNum).css({opacity: 0.0}).addClass('now').fadeTo(1000, 1, 'linear', function() {
      $('.active').removeClass('now active');
    });

    $('.box').eq(indexNum).addClass('box-action');


  }

  var slider;

  function startSlider(){
     slider = setInterval(slide, 5000);
  }

  function stopSlider(){
    clearInterval(slider);
  }



  $('.num').click(function() {
    indexNum = $('.num').index($(this))-1;
    stopSlider();
    slide();
    startSlider();
  });

  startSlider()

  $(window).scroll(function(){
    var navTop = $(this).scrollTop();

    if(navTop>=$('.content').offset().top){
      $('nav').css('background', 'rgba(0,0,0,.8)');
    }else{
      $('nav').css('background', 'rgba(255,255,255,.5)');
    }
  });

  var chooseFlag = 0;

  $('.choose').click(function(){
    if(chooseFlag == 0){
      chooseFlag = 1;
      $('.fa-caret-down').hide();
      $('.fa-caret-up').show();
      $('form').show();
    }else{
      chooseFlag = 0;
      $('.fa-caret-down').show();
      $('.fa-caret-up').hide();
      $('form').hide();
    }

  });

});
