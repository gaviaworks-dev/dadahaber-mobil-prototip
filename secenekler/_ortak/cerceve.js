/* Dada Haber Mobil · ortak çerçeve betiği (TEK YAZAR: lider).
   - ?tema=koyu → koyu tema
   - durum çubuğu (saat 16.05, sözlükteki "şimdi") ve ana ekran çizgisi eklenir
   - G(ad) → mock görsel adresi; arka plan görseli olarak verilir */
(function(){
  var q = new URLSearchParams(location.search);
  if (q.get('tema') === 'koyu') document.documentElement.setAttribute('data-tema','koyu');
  /* ?tam=1 → yalnızca denetim için: ekran kaydırma kabı açılır, sayfanın tamamı ekran görüntüsüne girer */
  if (q.get('tam') === '1') document.documentElement.classList.add('tam');
  /* varlık yolu bu betiğin yerinden çözülür: sayfa hangi klasör derinliğinde olursa olsun görsel ve logo doğru yüklenir (secenekler/ekranlar/<grup>/ dahil) */
  var VARLIK = (document.currentScript && document.currentScript.src) ? new URL('../../assets/', document.currentScript.src).href : '../../assets/';
  window.VARLIK = VARLIK;
  window.G = function(ad){ return "url('" + VARLIK + "gorsel/haber/" + ad + ".jpg')"; };
  document.documentElement.style.setProperty('--logo', "url('" + VARLIK + "gorsel/logo/dada.svg')");
  document.addEventListener('DOMContentLoaded', function(){
    var dc = document.createElement('div');
    dc.className = 'dc';
    dc.setAttribute('aria-hidden','true');
    /* iPhone 15 Pro durum çubuğu: saat sol kulakta, simgeler sağ kulakta ortalı; iOS biçiminde SVG (sinyal, Wi-Fi, pil %80) */
    dc.innerHTML = '<span class="dc-sol"><span class="dc-saat">16.05</span></span><span class="ada"></span>' +
      '<span class="dc-sag">' +
        '<svg class="dc-sinyal" width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>' +
        '<svg class="dc-wifi" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M8 2.5c2.3 0 4.4.9 6 2.4l1.1-1.2A9.9 9.9 0 0 0 8 .8 9.9 9.9 0 0 0 .9 3.7L2 4.9a8.3 8.3 0 0 1 6-2.4z"/><path d="M8 5.8c1.4 0 2.6.5 3.6 1.4l1.1-1.2A6.8 6.8 0 0 0 8 4.1 6.8 6.8 0 0 0 3.3 6l1.1 1.2A5.1 5.1 0 0 1 8 5.8z"/><path d="M8 9c.6 0 1.1.2 1.5.6L8 11.2 6.5 9.6C6.9 9.2 7.4 9 8 9z"/></svg>' +
        '<svg class="dc-pil" width="27" height="13" viewBox="0 0 27 13" aria-hidden="true"><rect class="dc-pil-c" x=".5" y=".5" width="23" height="12" rx="3.8" fill="none" stroke="currentColor"/><rect x="2" y="2" width="16.4" height="9" rx="2.4"/><path class="dc-pil-c" d="M25 4.4v4.2c.8-.3 1.4-1.1 1.4-2.1s-.6-1.8-1.4-2.1z"/></svg>' +
      '</span>';
    document.body.appendChild(dc);
    var ec = document.createElement('div'); ec.className = 'ec'; ec.setAttribute('aria-hidden','true');
    document.body.appendChild(ec);
    /* data-g="p188" taşıyan her öğeye arka plan görseli */
    document.querySelectorAll('[data-g]').forEach(function(el){ el.style.backgroundImage = G(el.getAttribute('data-g')); });
  });
})();
