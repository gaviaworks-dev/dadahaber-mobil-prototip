/* Hikâye şeridi · ortak bileşen (TEK YAZAR: lider). [data-hikaye-serit] taşıyan her öğeye şeridi basar.
   data-zemin="koyu": koyu zemin üstü. Dokununca ../hikaye/hikaye.html açılır (geri dönüş adresiyle).
   Görüldü bilgisi: D.hikayeler[].goruldu + bu oturumda izlenenler (sessionStorage; erişilemezse yok sayılır). */
(function(){
  function izlenen(){ try { return JSON.parse(sessionStorage.getItem('dada-hikaye-izlenen') || '[]'); } catch(e){ return []; } }
  /* K39: ana sayfa şeridinin İLK dairesi Spiker. Yayında: yüz + kırmızı CANLI halkası, altında "Spiker". Yayın yok (?spiker=0): sönük halka, altında sıradaki bülten saati.
     Dokununca Spiker ekranı açılır (hikâye değil). Yalnız data-spiker taşıyan şeritte. */
  function spikerDaire(tema){
    var Q = new URLSearchParams(location.search), canli = Q.get('spiker') !== '0', D = window.D;
    var u = new URL((window.VARLIK ? new URL('../secenekler/', window.VARLIK).href : '../') + 'ekranlar/icerik/spiker.html' + (canli ? '' : '?spiker=0'));
    if (tema) u.searchParams.set('tema', tema); if (Q.get('uye') === '0') u.searchParams.set('uye', '0');
    var sonraki = (window.H && H.baski) ? H.baski().sonraki : '19.00';
    return '<a class="hk-o spk' + (canli ? ' canli' : ' sonuk') + '" href="' + u.href + '" aria-label="' + (canli ? 'Dada Spiker yayında' : 'Dada Spiker, sıradaki bülten ' + sonraki) + '">' +
      '<span class="hk-f" style="background-image:' + G(D.spiker.gorsel) + '">' + (canli ? '<b class="hk-cn">CANLI</b>' : '<i class="fa-solid fa-radio"></i>') + '</span>' +
      '<span class="hk-a">' + (canli ? 'Spiker' : sonraki) + '</span></a>';
  }
  function bas(){
    var D = window.D; if (!D || !D.hikayeler) return;
    var iz = izlenen();
    var geri = encodeURIComponent(location.pathname.split('/').slice(-2).join('/') + location.search);
    var sirali = D.hikayeler.filter(function(h){ return !(h.goruldu || iz.indexOf(h.kod) >= 0); })
      .concat(D.hikayeler.filter(function(h){ return h.goruldu || iz.indexOf(h.kod) >= 0; }));
    document.querySelectorAll('[data-hikaye-serit]').forEach(function(el){
      var tema = new URLSearchParams(location.search).get('tema');
      el.innerHTML = '<nav class="hk' + (el.getAttribute('data-zemin') === 'koyu' ? ' koyu' : '') + '" aria-label="Kategori hikâyeleri">' + (el.hasAttribute('data-spiker') ? spikerDaire(tema) : '') +
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
