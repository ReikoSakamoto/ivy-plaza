$( function($) {
      //ドロワーメニュー（ボタンを押すと全画面メニュー表示）
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