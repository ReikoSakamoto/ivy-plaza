$(document).ready(function() {
// drawerjs
  $('.drawer').drawer();

// スムーススクロール
    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function() {
      // .headerクラスがついた要素の高さを取得（ヘッダーに重ならないように）
      let header = jQuery(".header").innerHeight();
      // 移動速度を指定（ミリ秒）
      let speed = 300;
      // hrefで指定されたidを取得 
      let id = jQuery(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = jQuery("#" == id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      let position = jQuery(target).offset().top;
      // ターゲットの位置までspeedの速度で移動
      jQuery("html, body").animate(
      {
          scrollTop: position - $( '#js-header' ).outerHeight()
      },
      speed
      );
      return false;
  });

  jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 600) {
      jQuery('.totop').show();
    } else {
      jQuery('.totop').hide();
    }
  });
  
  jQuery('.totop').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // //googleform
  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 
  //wow
 new WOW().init();

})