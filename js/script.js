$( function($) {
      //ドロワーメニュー

    $(".openbtn1").click(function () {//ボタンがクリックされたら
      $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });
      
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });


    //wow
    new WOW().init();

    $('#js-nav a[href*="#"]').click(function() {
      var elmHash = $(this).attr('href');
      var pos = $(elmHash).offset().top-50;
      $('body,html').animate({scrollTop: pos}, 500);
      return false;
    });



    // スムーススクロール
    // #から始まるURLがクリックされた時
    // $('a[href^="#"]').click(function() {
    //   // .headerクラスがついた要素の高さを取得（ヘッダーに重ならないように）
    //   let header = jQuery(".header").innerHeight();
    //   // 移動速度を指定（ミリ秒）
    //   let speed = 300;
    //   // hrefで指定されたidを取得 
    //   let id = jQuery(this).attr("href");
    //   // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    //   let target = jQuery("#" == id ? "html" : id);
    //   // ページのトップを基準にターゲットの位置を取得
    //   let position = jQuery(target).offset().top;
    //   // ターゲットの位置までspeedの速度で移動
    //   $("html, body").animate(
    //   {
    //       scrollTop: position - $( '#js-header' ).outerHeight()
    //   },
    //   speed
    //   );
    //   return false;
    // });

    $(window).scroll( function() {
    if ($(this).scrollTop() > 600) {
      $('.totop').show();
    } else {
      $('.totop').hide();
    }
    });
  
    $('.totop').click(function () {
      $('body,html').animate({
      scrollTop: 0
      }, 500);
    return false;
    });

     //googleform
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
          $form.slideUp();
          $( "#js-success" ).slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $( "#js-error" ).slideDown();
        }
      } 
    });
    return false; 
  }); 

});