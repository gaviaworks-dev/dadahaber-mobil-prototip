/* Alt gezinme denemesi · arkadaki içerik (TEK YAZAR: lider). Yalnızca çubuğu sınamak için sade bir uygulama listesi; ana sayfa önerisi değildir. */
(function(){
  var D = window.D;
  var h = [];
  D.manset.forEach(function(x){ h.push({kat:x.kat, baslik:x.baslik, sure:x.sure, g:x.g}); });
  D.bolumler.forEach(function(b){ b.haberler.forEach(function(x){ h.push({kat:b.ad, baslik:x.baslik, sure:x.sure, g:x.g}); }); });
  var saatler = ["16.05","15.58","15.50","15.42","15.35","15.20","15.10","14.55","14.40","14.30","14.20","14.05","13.50","13.40","13.25","13.10","12.55","12.40","12.30","12.15","12.00","11.45","11.30"];
  var out = '<header class="lb"><span class="logo" role="img" aria-label="Dada Haber"></span><div class="lb-t"><h1>Bugün</h1><p>Pazartesi, 23 Kasım · İstanbul 1° yoğun kar</p></div></header><ol class="ls">';
  h.forEach(function(x,i){
    out += '<li><a class="sat"><div class="sat-m"><span class="sat-k">' + x.kat + ' · ' + saatler[i % saatler.length] + '</span><h2>' + x.baslik + '</h2><span class="sat-s"><i class="fa-solid fa-clock"></i>' + x.sure + '</span></div><div class="sat-g gr" style="background-image:' + G(x.g) + '"></div></a></li>';
  });
  out += '</ol><div class="pay"></div>';
  document.getElementById('icerik').innerHTML = out;
})();
