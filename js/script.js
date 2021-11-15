$( function($) {
      //ドロワーメニュー（ボタンを押すと全画面メニュー表示）
    $(".js-hamburger-btn").click(function () {//ボタンがクリックされたら
      $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $(".js-hamburger").toggleClass('active');//ナビゲーションにactiveクラスを付与
    });
    $(".js-hamburger a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".js-hamburger-btn").removeClass('active');//ボタンの activeクラスを除去し
        $(".js-hamburger").removeClass('active');//ナビゲーションのactiveクラスも除去
    });

    //wow
    new WOW().init();

    //スムーススクロール
    $('#js-nav a[href*="#"]').click(function() {
      var elmHash = $(this).attr('href');
      var pos = $(elmHash).offset().top-50;
      $('body,html').animate({scrollTop: pos}, 500);
      return false;
    });

    //トップへ戻るボタン
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

});