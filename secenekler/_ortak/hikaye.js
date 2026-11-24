/* Hikâye şeridi · ortak bileşen (TEK YAZAR: lider). [data-hikaye-serit] taşıyan her öğeye şeridi basar.
   data-zemin="koyu": koyu zemin üstü. Dokununca ../hikaye/hikaye.html açılır (geri dönüş adresiyle).
   Görüldü bilgisi: D.hikayeler[].goruldu + bu oturumda izlenenler (sessionStorage; erişilemezse yok sayılır). */
(function(){
  function izlenen(){ try { return JSON.parse(sessionStorage.getItem('dada-hikaye-izlenen') || '[]'); } catch(e){ return []; } }
  function bas(){
    var D = window.D; if (!D || !D.hikayeler) return;
    var iz = izlenen();
    var geri = encodeURIComponent(location.pathname.split('/').slice(-2).join('/') + location.search);
    var sirali = D.hikayeler.filter(function(h){ return !(h.goruldu || iz.indexOf(h.kod) >= 0); })
      .concat(D.hikayeler.filter(function(h){ return h.goruldu || iz.indexOf(h.kod) >= 0; }));
    document.querySelectorAll('[data-hikaye-serit]').forEach(function(el){
      var tema = new URLSearchParams(location.search).get('tema');
      el.innerHTML = '<nav class="hk' + (el.getAttribute('data-zemin') === 'koyu' ? ' koyu' : '') + '" aria-label="Kategori hikâyeleri">' +
        sirali.map(function(h){
          var gor = h.goruldu || iz.indexOf(h.kod) >= 0;
          var href = '../hikaye/hikaye.html?kat=' + h.kod + (tema ? '&tema=' + tema : '') + '&geri=' + geri;
          return '<a class="hk-o' + (gor ? ' gor' : '') + '" href="' + href + '" aria-label="' + h.kat + ' hikâyesi' + (gor ? ', görüldü' : '') + '">' +
            '<span class="hk-f" style="background-image:' + G(h.g) + '"><i class="fa-solid ' + h.ikon + '"></i></span>' +
            '<span class="hk-a">' + h.kat + '</span></a>';
        }).join('') + '</nav>';
    });
  }
  window.hikayeSerit = bas;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bas); else bas();
})();
