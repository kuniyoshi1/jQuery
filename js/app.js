$(function(){
  
  //ボタンのサイズ変更
  $('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
  });

  
  //ボタンの透明度変更
  $('#js-hover-btn').mouseover(function(){
    
    $(this).addClass('opacity');
  
  }).mouseleave(function(){
  
    $(this).removeClass('opacity');
  
  });
  
  
  //要素の表示、非表示切り替え
  
//  要素の表示
//  
//  fadeIn(数字);
//  
//  
//  要素の非表示
//  
//  fadeOut(数字);

  
  $('#js-show-btn').on('click',function(){
    
    $('#js-target-element').fadeIn(1000);
    
  });
    

  $('#js-hide-btn').on('click',function(){
    
    $('#js-target-element').fadeOut(1000);
    
  });
  
  
  //２つの要素を同時に動かす
//   $('#js-show-btn').on('click',function(){
//    
//    $('#js-target-element').fadeIn(1000, function(){
//      $('.description').fadeOut(1000)
//    });
//    
//  });
//
//  $('#js-hide-btn').on('click',function(){
//    
//    $('#js-target-element').fadeOut(1000, function(){
//      $('.description').fadeIn(1000)
//    });
//    
//  });
  
  
  //要素の追加
  //要素の前後に追加(外に)
  $('#js-add-btn').on('click', function(){
    
    $(this).before('<li class="btn">ボタンの前に追加</li>');
    
    $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  
  });
  
  
  //要素の前後に追加(中に)
  $('#js-add-btn2').on('click',function(){
    
    $(this).prepend('<li>前</li>');
    $(this).append('<li>後ろ</li>');    
    
  });
  
  
  //toggleメニュー作るよ
  $('.js-toggle').on('click',function(){
    
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
    
  });
  
  
    //ハンバーガーメニュー
//  $('.js-hamburger').on('click',function(){
//    
//    $(this).toggleClass('on');
//    
//  });
  
  //ハンバーガーマウスオーバー
//  $('.js-hamburger').mouseover(function(){
//    $(this).addClass('on');
//  }).mouseleave(function(){
//    $(this).removeClass('on');
//  });
  
  //ハンバーガーマウスオーバー
  $('.js-hamburger').on('mouseover mouseout', function(){
    $(this).toggleClass('on');
  });
  
  
  //スムーズスクロール
  $('.js-scroll').on('click',function(){
    
    $('body,html').animate({ scrollTop:0 }, 500);
    
  });

  
  
  //モーダルウィンドウ表示したるでこら！
  $('.js-modal').on('click',function(){
    
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
    
  });
  
  $('.js-modal-close').on('click',function(){
    
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);
    
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});