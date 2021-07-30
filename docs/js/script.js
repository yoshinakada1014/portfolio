$.getJSON('js/descript.json', function(data) {
  let idName;
  for (let i = 0; i < data.length; i++) {
    if(i <= 1) {
      idName = '#appTinderTapple';
    }else if(i <= 3) {
      idName = '#appPairsWith';
    }else if(i <= 5) {
      idName = '#appOmiaiCrossMe';
    }else {
      idName = '#appBatchelarPrice';
    }
    $('<div class="col-lg-6 col-sm-12"></div>')
    .append('<h2>' + data[i].title + '</h2>')
    .append('<img src="' + data[i].image + '" alt="#">')
    .append('<p>' + data[i].text + '</p>')
    .appendTo(idName);
  }
  
  $('<div class="col-lg-6 col-sm-12"></div>')
  .append('<h2>価格比較</h2>')
  .append(
    '<div><table class="table table-striped">' +
    '<thead><tr><th>プラン</th><th>1ヶ月</th><th>3ヶ月</th><th>6ヶ月</th><th>12ヶ月</th></tr></thead>' +
    '<tbody><tr><td>TinderPlus</td><td>2,200円</td><td>-</td><td>1,383円</td><td>916円</td></tr>' +
    '<tr><td>TinderGold</td><td>3,300円</td><td>-</td><td>2,066円</td><td>1,375円</td></tr>' +
    '<tr><td>tapple</td><td>4,000円</td><td>3,400円</td><td>2,967円</td><td>2,400円</td></tr>' +
    '<tr><td>Pairs</td><td>3,590円</td><td>2,350円</td><td>1,830円</td><td>1,833円</td></tr>' +
    '<tr><td>with</td><td>3,600円</td><td>2,667円</td><td>2,350円</td><td>1,833円</td></tr>' +
    '<tr><td>Omiai</td><td>3,980円</td><td>3,320円</td><td>1,990円</td><td>1,950円</td></tr>' +
    '</tbody></table></div>')
  .appendTo('#appBatchelarPrice');
});

jQuery(function() {
  const pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
      pagetop.fadeIn();
    }else {
      pagetop.fadeOut();
    }
  });
  $('a[href^="#"]').click(function(){
    const width = $(window).width();
    let adjust;
    if(width < 751) {
      adjust = 270;
    }else {
      adjust = 80;
    }
    const time = 500;
    const href= $(this).attr("href");
    const target = $(href == "#" ? 'html' : href);
    const distance = target.offset().top - adjust;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});

 // 無効なフィールドがある場合にフォーム送信を無効にするスターターJavaScriptの例
 (function() {
  'use strict';

  window.addEventListener('load', function() {
      // カスタムブートストラップ検証スタイルを適用するすべてのフォームを取得
      var forms = document.getElementsByClassName('needs-validation');
      // ループして帰順を防ぐ
      var validation = Array.prototype.filter.call(forms, function(form) {
          // submitボタンを押したら以下を実行
          form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();
