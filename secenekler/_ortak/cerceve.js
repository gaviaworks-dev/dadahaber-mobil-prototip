/* Dada Haber Mobil · ortak çerçeve betiği (TEK YAZAR: lider).
   - ?tema=koyu → koyu tema
   - durum çubuğu (saat 16.05, sözlükteki "şimdi") ve ana ekran çizgisi eklenir
   - G(ad) → mock görsel adresi; arka plan görseli olarak verilir */
(function(){
  var q = new URLSearchParams(location.search);
  if (q.get('tema') === 'koyu') document.documentElement.setAttribute('data-tema','koyu');
  /* ?tam=1 → yalnızca denetim için: ekran kaydırma kabı açılır, sayfanın tamamı ekran görüntüsüne girer */
  if (q.get('tam') === '1') document.documentElement.classList.add('tam');
  window.G = function(ad){ return "url('../../assets/gorsel/haber/" + ad + ".jpg')"; };
  document.addEventListener('DOMContentLoaded', function(){
    var dc = document.createElement('div');
    dc.className = 'dc';
    dc.setAttribute('aria-hidden','true');
    dc.innerHTML = '<span class="tnum">16.05</span><span class="ada"></span>' +
      '<span class="dc-sag"><i class="fa-solid fa-signal"></i><i class="fa-solid fa-wifi"></i><i class="fa-solid fa-battery-three-quarters"></i></span>';
    document.body.appendChild(dc);
    var ec = document.createElement('div'); ec.className = 'ec'; ec.setAttribute('aria-hidden','true');
    document.body.appendChild(ec);
    /* data-g="p188" taşıyan her öğeye arka plan görseli */
    document.querySelectorAll('[data-g]').forEach(function(el){ el.style.backgroundImage = G(el.getAttribute('data-g')); });
  });
})();
