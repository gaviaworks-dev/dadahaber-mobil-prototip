/* Dada Haber Mobil · HİBRİT ortak betiği (TEK YAZAR: lider). icerik.js, cerceve.js, icerik-ek.js'ten SONRA yüklenir.
   - ?hb=1..4 hangi hibrit; HB[n] o hibritin blok sırası ve ağırlıkları (ana sayfa); liste (K21) ve detay (K19) seçildi, dördünde aynı
   - ?saat=08.30 baskı başlığını başka saatte görmek için (varsayılan sözlükteki "şimdi" 16.05)
   - ?calan=1 Spiker, ?calan=dinle Dinle mini oynatıcısı çalarken açılır; varsayılan kapalı (K39) · ?spiker=0 Spiker yayında değil
   Bloklar ve görünüşleri bütün hibritlerde aynı; hibritler yalnız sıra, ağırlık ve yer bakımından ayrışır. */
(function(){
  var D = window.D, Q = new URLSearchParams(location.search);
  var H = window.H = {};
  H.n = Math.min(4, Math.max(1, +Q.get('hb') || 1));
  H.tema = Q.get('tema');

  /* ---------- Hibritler ---------- */
  window.HB = {
    1: { kod: 'HB-1', ad: 'Baskı önce',
      ana: ['ust', 'bs:buyuk', 'hikaye', 'sd:ray', 'ms:ray', 'spiker:genis',
            'b:Gündem', 'hava', 'b:Spor', 'mac', 'b:Finans', 'piyasa', 'b:Kadın', 'podcast', 'b:Savunma', 'akis', 'b:Dünya', 'kose', 'b:Kampüs', 'namaz', 'b:Keşfet', 'senin', 'takim'] },
    2: { kod: 'HB-2', ad: 'Pano önce',
      ana: ['ust', 'bs:ince', 'hikaye', 'pano', 'sd:sat', 'ms:kucuk',
            'b:Gündem:2', 'podcast', 'b:Spor:2', 'akis', 'b:Finans:2', 'kose', 'b:Kadın:2', 'b:Savunma:2', 'b:Dünya:2', 'b:Kampüs:2', 'b:Keşfet:2'] },
    3: { kod: 'HB-3', ad: 'Bölümler önce',
      ana: ['ust', 'bs:ince', 'hikaye', 'sd:tek', 'ms:kucuk',
            'b:Gündem', 'duo', 'b:Spor', 'mac', 'takim', 'b:Finans', 'piyasa', 'b:Kadın', 'spiker:serit', 'b:Savunma', 'akis', 'b:Dünya', 'kose', 'b:Kampüs', 'podcast', 'b:Keşfet', 'senin'] },
    4: { kod: 'HB-4', ad: 'Kişisel önce',
      ana: ['ust:uye', 'bs:selam', 'hikaye', 'senin:buyuk', 'mac', 'spiker:serit', 'sd:ray', 'ms:ray',
            'b:Spor', 'takim', 'b:Finans', 'piyasa', 'b:Gündem', 'duo', 'b:Savunma', 'podcast', 'b:Kadın', 'akis', 'b:Dünya', 'kose', 'b:Kampüs', 'b:Keşfet'] }
  };
  H.cfg = HB[H.n];

  /* ---------- Bağlantılar: hibrit ve tema korunur ---------- */
  /* kök (K22): ?kok=1 bağlantılarda taşınır, alt çubuğun Ana Sayfa'sı kok.html'e gider; ?uye=0 misafir hali */
  H.kok = Q.get('kok') === '1' || /kok\.html$/.test(location.pathname);
  H.uye = Q.get('uye') !== '0';
  H.u = function(dosya, ek){
    var p = 'hb=' + H.n + (H.tema ? '&tema=' + H.tema : '') + (H.kok ? '&kok=1' : '') + (H.uye ? '' : '&uye=0') + (ek ? '&' + ek : '');
    return dosya + '?' + p;
  };
  H.ana = function(){ return H.u(H.kok ? 'kok.html' : 'ana.html'); };
  H.detay = function(){ return H.u('detay.html'); };
  H.liste = function(ek){ return H.u('liste.html', ek); };

  /* ---------- Baskı (AS-C): günün saatine göre ---------- */
  H.baski = function(){
    var s = (Q.get('saat') || D.simdi.saat).split(/[.:]/), dk = (+s[0]) * 60 + (+s[1] || 0);
    if (dk >= 7 * 60 && dk < 16 * 60) return { ad: 'Sabah Baskısı', kisa: 'Sabah', sonraki: '16.00', ikon: 'fa-mug-hot' };
    if (dk >= 16 * 60 && dk < 19 * 60) return { ad: 'Öğleden Sonra Baskısı', kisa: 'Öğleden Sonra', sonraki: '19.00', ikon: 'fa-sun' };
    return { ad: 'Akşam Baskısı', kisa: 'Akşam', sonraki: '07.00', ikon: 'fa-moon' };
  };
  H.saat = function(){ return Q.get('saat') || D.simdi.saat; };

  var AY = '<span class="ay"></span>';
  H.AY = AY;
  function bul(ad){ return D.bolumler.filter(function(b){ return b.ad === ad; })[0]; }
  function bas(ad){ return ad.split(' ').map(function(p){ return p.charAt(0); }).join('').slice(0, 2); }
  H.bas = bas;
  /* tek bilgi satırı (K35): öğeler ' · ' ile; ikon yok. Video süresi için H.vid(s) (başında fa-play) */
  /* bilgi satırı (K43): okuma süresi fa-clock, görüntülenme fa-eye; ikonlu öğeler noktasız */
  H.meta = function(o, cls){ return '<div class="meta' + (cls ? ' ' + cls : '') + '">' + o.filter(Boolean).map(function(x){ x = String(x); if (x.indexOf('<i') > -1) return '<span>' + x + '</span>';
      if (/^\d+\s?dk$/.test(x)) return '<span class="ik"><i class="fa-solid fa-clock"></i>' + x + '</span>';
      if (/^\d+([.,]\d+)?\s?(B|Bn|M|Mn|bin)$/.test(x)) return '<span class="ik"><i class="fa-solid fa-eye"></i>' + x + '</span>';
      return '<span>' + x + '</span>'; }).join('') + '</div>'; };
  H.vid = function(s){ return '<i class="fa-solid fa-play"></i>' + s; };
  /* kategori ikonu (bölüm adından) ve tek kategori etiketi (K35) */
  H.ikon = function(kat){ var b = bul(kat); return b ? b.ikon : 'fa-newspaper'; };
  H.katEt = function(metin, ikon, cls){ return '<span class="kat-et' + (cls ? ' ' + cls : '') + '"><i class="fa-solid ' + ikon + '"></i>' + metin + '</span>'; };
  H.canli = function(m){ return '<span class="canli-et"><span class="canli-nokta"></span>' + (m || 'Canlı') + '</span>'; };

  /* ---------- Ana sayfa blokları ---------- */
  var B = H.B = {};
  B.ust = function(v){
    return '<header class="ust"><span class="logo" role="img" aria-label="Dada Haber"></span>' +
      '<a class="dd" aria-label="Ara"><i class="fa-solid fa-magnifying-glass"></i></a>' +
      '<a class="dd" aria-label="Bildirimler"><i class="fa-solid fa-bell"></i><span class="n"></span></a>' +
      (v === 'uye' ? '<a class="dd av" aria-label="Hesabım">' + D.uye.ad.charAt(0) + '</a>' : '') + '</header>';
  };
  B.bs = function(v){
    var b = H.baski(), gun = D.simdi.gun + ', ' + D.simdi.tarih.replace(' 2026', '');
    if (v === 'buyuk') {
      var ad = b.ad.replace(' Baskısı', '<br>Baskısı');
      return '<section class="bs"><div class="gun">' + gun + '</div><h1>' + ad + '</h1>' +
        '<div class="snr"><i class="fa-solid fa-rotate"></i><b>' + H.saat() + '</b> güncellendi' + AY + 'sonraki baskı <b>' + b.sonraki + '</b></div></section>';
    }
    if (v === 'selam') {
      return '<section class="bs selam"><div class="gun">' + gun + ' · ' + H.saat() + '</div><h1>İyi günler, ' + D.uye.ad + '</h1>' +
        '<span class="ebr"><i class="fa-solid ' + b.ikon + '"></i>' + b.ad + '<em>· sonraki ' + b.sonraki + '</em></span></section>';
    }
    return '<section class="bs ince"><div class="serit"><span class="ik"><i class="fa-solid ' + b.ikon + '"></i></span>' + b.ad + '<em>' + gun.split(',')[0] + ' · sonraki ' + b.sonraki + '</em></div></section>';
  };
  B.hikaye = function(){ return '<div class="hk-yer" data-hikaye-serit style="padding-top:12px"></div>'; };
  B.sd = function(v){
    var S = D.sonDakika, lt = H.liste('kip=cizelge');
    var bb = '<div class="bb"><h2><span class="sdn canli-nokta"></span>Son Dakika</h2><a href="' + lt + '">Tümü<i class="fa-solid fa-chevron-right"></i></a></div>';
    if (v === 'tek') {
      return '<div class="sd-tek" data-sd-tek><span class="et"><span class="canli-nokta"></span>SON DAKİKA</span><span class="ak">' +
        S.slice(0, 4).map(function(s, i){ return '<a href="' + H.detay() + '"' + (i === 0 ? ' class="on"' : '') + '><time>' + s.saat + '</time><span>' + s.baslik + '</span></a>'; }).join('') +
        '</span><a class="tm" href="' + lt + '" aria-label="Son Dakika, tümü"><i class="fa-solid fa-chevron-right"></i></a></div>';
    }
    if (v === 'sat') {
      return '<section class="bl">' + bb + '<ol class="sd-sat">' + S.slice(0, 3).map(function(s){
        return '<li><a href="' + H.detay() + '"><time>' + s.saat + '</time><div><p>' + s.baslik + '</p><small>' + s.kat + ' · ' + s.sure + '</small></div></a></li>'; }).join('') + '</ol></section>';
    }
    return '<section class="bl sik">' + bb + '<div class="sd-ray ks">' + S.slice(0, 5).map(function(s){
      return '<a href="' + H.detay() + '"><time>' + s.saat + '<span>' + s.kat + '</span></time><p class="uc">' + s.baslik + '</p></a>'; }).join('') + '</div></section>';
  };
  B.ms = function(v){
    var k = v === 'kucuk';
    return '<section class="bl' + (k ? '' : ' sik') + '"><div class="bb"><h2>' + (k ? 'Öne Çıkanlar' : 'Bu Baskıda') + '</h2><a href="' + H.liste() + '">' + D.manset.length + ' haber<i class="fa-solid fa-chevron-right"></i></a></div>' +
      '<div class="ms-ray ks' + (k ? ' kucuk' : '') + '" data-ms>' + D.manset.map(function(m){
        return '<a href="' + H.detay() + '"><div class="gr" style="background-image:' + G(m.g) + '">' + (m.medya && !k ? '<span class="md"><i class="fa-solid fa-play"></i>' + m.medya[0] + '</span>' : '') + '</div>' +
          '<div class="etk">' + m.kat + '<span>· ' + m.sure + '</span></div><h3' + (k ? ' class="uc"' : '') + '>' + m.baslik + '</h3>' +
          (k ? '' : H.meta([m.yazar, m.izlenme])) + '</a>';
      }).join('') + '</div>' + (k ? '' : '<div class="sayac" data-sayac>' + D.manset.map(function(_, i){ return '<span' + (i === 0 ? ' class="on"' : '') + '></span>'; }).join('') + '</div>') + '</section>';
  };
  /* bölüm: her bölümün kendi kart düzeni (AS-A) */
  var DUZEN = { 'Gündem': 'lead', 'Spor': 'ray', 'Finans': 'kare', 'Kadın': 'iki', 'Savunma': 'ust', 'Dünya': 'no', 'Kampüs': 'kare', 'Keşfet': 'ray' };
  B.b = function(ad, sinir){
    var b = bul(ad), hs = b.haberler.slice(0, sinir ? +sinir : 9), du = DUZEN[ad], d = H.detay(), o = '';
    function m(h){ return H.meta([h.yazar, h.sure]); }
    if (du === 'lead' || du === 'ust') {
      var l = hs[0];
      o += du === 'lead'
        ? '<a class="b-lead" href="' + d + '"><div class="gr" style="background-image:' + G(l.g) + '"></div><h3>' + l.baslik + '</h3>' + m(l) + '</a>'
        : '<a class="b-ust" href="' + d + '"><div class="gr" style="background-image:' + G(l.g) + '"></div><div class="ic"><h3>' + l.baslik + '</h3>' + m(l) + '</div></a>';
      if (hs.length > 1) o += '<ul class="b-sat"' + (du === 'ust' ? ' style="padding-top:8px"' : '') + '>' + hs.slice(1).map(function(h){ return '<li><a href="' + d + '"><h4>' + h.baslik + '</h4>' + m(h) + '</a></li>'; }).join('') + '</ul>';
    } else if (du === 'ray') {
      o += '<div class="b-ray ks">' + hs.map(function(h){ return '<a href="' + d + '"><div class="gr" style="background-image:' + G(h.g) + '"></div><h4 class="uc">' + h.baslik + '</h4>' + m(h) + '</a>'; }).join('') + '</div>';
    } else if (du === 'kare') {
      o += '<ul class="b-kare">' + hs.map(function(h){ return '<li><a href="' + d + '"><div><h4 class="uc">' + h.baslik + '</h4>' + m(h) + '</div><div class="gr" style="background-image:' + G(h.g) + '"></div></a></li>'; }).join('') + '</ul>';
    } else if (du === 'iki') {
      o += '<div class="b-iki">' + hs.slice(0, 2).map(function(h){ return '<a href="' + d + '"><div class="gr" style="background-image:' + G(h.g) + '"></div><h4 class="uc">' + h.baslik + '</h4>' + H.meta([h.sure]) + '</a>'; }).join('') + '</div>';
    } else {
      o += '<ol class="b-no">' + hs.map(function(h){ return '<li><a href="' + d + '"><div><h4>' + h.baslik + '</h4>' + m(h) + '</div></a></li>'; }).join('') + '</ol>';
    }
    return '<section class="bl"><div class="bb"><h2><span class="bi"><i class="fa-solid ' + b.ikon + '"></i></span>' + b.ad + '</h2><a href="' + H.liste() + '">Tümü<i class="fa-solid fa-chevron-right"></i></a></div>' + o + '</section>';
  };

  /* ayraç kutuları */
  function havaIc(kare){
    var h = D.hava;
    return '<div class="ayr-b"><i class="fa-solid fa-location-arrow"></i>' + h.sehir + (kare ? '' : '<em>Y:' + h.yuksek + '° D:' + h.dusuk + '°</em>') + '</div>' +
      '<div class="hv-ic"><span class="d">' + h.derece + '°</span><span class="t"><b>' + h.durum + '</b><small>his ' + h.hissedilen + '°' + (kare ? ' · Y:' + h.yuksek + '° D:' + h.dusuk + '°' : '') + '</small></span></div>' +
      (kare ? '' : '<div class="hv-g">' + h.gunler.map(function(g){ return '<div>' + g.gun + '<i class="fa-solid ' + g.ikon + '"></i><b>' + g.y + '°</b></div>'; }).join('') + '</div>');
  }
  function namazIc(kare){
    var n = D.namaz;
    return '<div class="ayr-b"><i class="fa-solid fa-mosque"></i>Namaz vakti' + (kare ? '' : '<em>' + n.sehir + '</em>') + '</div>' +
      '<div class="nz-ic"><span>Sıradaki · ' + n.siradaki + '</span><b>' + n.saat + '</b>' + (kare ? '' : '<span>' + n.kalan.replace(':', ' sa ') + ' dk kaldı</span>') + '</div>' +
      (kare ? '<span class="bar"><i></i></span><span style="margin-top:6px;font-size:12px;font-weight:var(--y-kalin);color:var(--metin-3)">' + n.kalan.replace(':', ' sa ') + ' dk kaldı</span>'
            : '<div class="nz-g">' + n.vakitler.map(function(v){ return '<div' + (v[0] === n.siradaki ? ' class="on"' : '') + '>' + v[0] + '<b>' + v[1] + '</b></div>'; }).join('') + '</div>');
  }
  B.hava = function(){ return '<a class="ayr">' + havaIc() + '</a>'; };
  B.namaz = function(){ return '<a class="ayr">' + namazIc() + '</a>'; };
  B.duo = function(){ return '<div class="duo"><a class="ayr">' + havaIc(1) + '</a><a class="ayr">' + namazIc(1) + '</a></div>'; };
  B.piyasa = function(cls){
    var p = D.piyasa;
    return '<a class="ayr' + (cls ? ' ' + cls : '') + '"><div class="ayr-b"><i class="fa-solid fa-chart-column"></i>Piyasalar<em>' + p.guncelleme + ' · satış · 15 dk gecikmeli</em></div><div class="py-g">' +
      p.liste.map(function(x){ return '<div><small>' + x.ad + '</small><b>' + x.deger + '</b><em class="' + x.yon + '">' + (x.yon === 'y' ? '▲' : '▼') + ' %' + x.degisim + '</em></div>'; }).join('') + '</div></a>';
  };
  B.podcast = function(){
    return '<section class="ayr"><div class="ayr-b"><i class="fa-solid fa-podcast"></i>Podcast<em>Yeni bölümler</em></div><div class="pd-ray ks">' +
      D.podcast.map(function(p){ return '<a><span class="gr" style="background-image:' + G(p.g) + '"><i class="fa-solid fa-play"></i></span><span><small>' + p.seri + '</small><b class="iki">' + p.baslik + '</b><em>' + p.no + ' · ' + p.sure + '</em></span></a>'; }).join('') + '</div></section>';
  };
  B.kose = function(){
    return '<section class="ayr"><div class="ayr-b"><i class="fa-solid fa-feather-pointed"></i>Köşe Yazıları<em>Yazarlar</em></div><div class="ky-ray ks">' +
      D.koseYazilari.map(function(k){ return '<a><span class="yz"><span class="av">' + k.ad.charAt(0) + '</span><span><b>' + k.ad + '</b><small>' + k.unvan + '</small></span></span><h4 class="uc">' + k.baslik + '</h4></a>'; }).join('') + '</div></section>';
  };
  B.akis = function(){
    return '<section class="bl"><div class="bb"><h2><span class="bi"><i class="fa-solid fa-mobile-screen-button"></i></span>Akış</h2><a href="' + H.u('akis.html') + '">' + D.akis.toplam + ' video<i class="fa-solid fa-chevron-right"></i></a></div><div class="ak-ray ks">' +
      D.akis.liste.map(function(v){ return '<a href="' + H.u('akis.html') + '" style="background-image:' + G(v.g) + '"><span class="s"><i class="fa-solid fa-play"></i>' + v.sure + '</span><small><i class="fa-solid ' + H.ikon(v.kat) + '"></i>' + v.kat + '</small><b>' + v.baslik + '</b></a>'; }).join('') + '</div></section>';
  };
  /* AS-F kutuları */
  B.mac = function(ic){
    var m = D.mac;
    var h = '<a class="kt mac' + (ic ? ' gen' : '') + '"><div class="u">' + H.canli() + '<span>' + m.lig + '</span></div>' +
      '<div class="s"><span class="tk"><span class="ar">' + m.evKod + '</span><b>' + m.ev + '</b></span><span class="sk"><b>' + m.skor + '</b><small>' + m.dakika + '</small></span>' +
      '<span class="tk sag"><span class="ar">' + m.depKod + '</span><b>' + m.dep + '</b></span></div></a>';
    return ic ? h : '<div class="kt-tek">' + h + '</div>';
  };
  B.senin = function(v){
    var S = D.seninIcin;
    if (v === 'kare') return '<a class="kt sen kare" href="' + H.detay() + '"><div class="ayr-b"><i class="fa-solid fa-heart"></i>Bugün Senin İçin</div><h3 style="margin-top:auto;font-size:28px">' + S.length + ' haber</h3><p class="ilk iki">' + S[0].h.baslik + '</p></a>';
    var n = v === 'buyuk' ? 4 : 3;
    return '<div class="kt-tek' + (v === 'buyuk' ? ' sik' : '') + '"><section class="kt sen"><div class="ayr-b"><i class="fa-solid fa-heart"></i>Bugün Senin İçin<em>' + D.uye.ad + ' · takip ettiklerin</em></div>' +
      (v === 'buyuk' ? '<div class="cp">' + D.uye.takip.map(function(t){ return '<span><i class="fa-solid fa-check"></i>' + t + '</span>'; }).join('') + '</div>' : '') +
      '<ol>' + S.slice(0, n).map(function(x){ return '<li><a href="' + H.detay() + '"><span class="gr" style="background-image:' + G(x.h.g) + '"></span><span><small>' + x.neden + ' · ' + x.h.kat + '</small><h4 class="iki">' + x.h.baslik + '</h4></span></a></li>'; }).join('') + '</ol></section></div>';
  };
  B.spiker = function(v){
    var s = D.spiker, yy = '<span class="yy"><span class="canli-nokta"></span>YAYINDA</span>';
    if (v === 'kare') return '<div class="kt spk" style="background-image:' + G(s.gorsel) + '">' + yy + '<b>Dada Spiker</b><small>' + s.bulten + ' · ' + s.sure + '</small><button class="oyn" type="button" data-spiker aria-label="Spiker\'ı dinle"><i class="fa-solid fa-play"></i></button></div>';
    if (v === 'serit') return '<div class="kt-tek sik"><div class="kt spk serit"><span class="yuz" style="background-image:' + G(s.gorsel) + '"></span><span class="t">' + yy + '<b>Dada Spiker · ' + s.bulten + '</b><small>' + s.sirada[0] + '</small></span><button class="oyn" type="button" data-spiker aria-label="Spiker\'ı dinle"><i class="fa-solid fa-play"></i></button></div></div>';
    return '<div class="kt-tek"><div class="kt spk genis"><span class="yuz" style="background-image:' + G(s.gorsel) + '"></span><div class="ic">' + yy + '<b>Dada Spiker</b><small>' + s.bulten + ' · ' + s.sure + '</small><ol>' +
      s.sirada.map(function(x){ return '<li><span>' + x + '</span></li>'; }).join('') + '</ol><button class="oyn" type="button" data-spiker><i class="fa-solid fa-play"></i>Bülteni dinle</button></div></div></div>';
  };
  B.takim = function(ic){
    var h = '<div class="kt tkm' + (ic ? ' gen' : '') + '"><span class="ik"><i class="fa-solid fa-futbol"></i></span><span class="t"><b>Takımını Ekle</b><small>Skoru ve haberleri ana sayfana gelsin</small></span><a class="sec">Seç</a></div>';
    return ic ? h : '<div class="kt-tek sik">' + h + '</div>';
  };
  B.pano = function(){
    return '<section class="pano" aria-label="Pano">' + B.mac(1) + B.spiker('kare') + B.senin('kare') +
      '<a class="ayr kare">' + havaIc(1) + '</a><a class="ayr kare">' + namazIc(1) + '</a>' + B.piyasa('gen') + B.takim(1) + '</section>' +
      '<div class="duzen"><a><i class="fa-solid fa-sliders"></i>Panoyu düzenle</a></div>';
  };
  H.anaCiz = function(el){
    el.innerHTML = H.cfg.ana.map(function(t){ var p = t.split(':'); return B[p[0]] ? B[p[0]](p[1], p[2]) : ''; }).join('') + '<div class="son"></div>';
  };

  /* ---------- Alt gezinme (AS-A çubuğu; ortada vurgulu Akış) ---------- */
  H.altCubuk = function(etkin, koyu){
    var E = function(yol){ var u = new URL('../ekranlar/' + yol, location.href); if (H.tema) u.searchParams.set('tema', H.tema); if (!H.uye) u.searchParams.set('uye', '0'); return u.href; };
    var S = [['ana', 'Ana Sayfa', 'fa-house', H.ana()], ['bolum', 'Bölümler', 'fa-shapes', H.kok ? E('icerik/bolumler.html') : H.liste()], ['akis', 'Akış', 'fa-mobile-screen-button', H.u('akis.html')],
             ['dinle', 'Dinle', 'fa-headphones', H.kok ? E('icerik/haber-dinle.html') : ''], ['hesap', 'Hesabım', 'fa-circle-user', H.kok ? E('hesap/hesabim.html') : '']];
    var n = document.createElement('nav'); n.className = 'ac' + (koyu ? ' koyu' : ''); n.setAttribute('aria-label', 'Alt gezinme');
    n.innerHTML = S.map(function(s){
      var ic = s[0] === 'akis' ? '<span class="yuv"><i class="fa-solid ' + s[2] + '"></i></span>' : '<i class="fa-solid ' + s[2] + '"></i>';
      var cn = s[0] === 'dinle' && H.spikerCanli() ? '<span class="cn-n" aria-label="Spiker yayında"></span>' : '';
      return '<a class="' + (s[0] === 'akis' ? 'akis' : '') + (s[0] === etkin ? ' etkin' : '') + '"' + (s[3] ? ' href="' + s[3] + '"' : '') + (s[0] === etkin ? ' aria-current="page"' : '') + '>' + ic + s[1] + cn + '</a>';
    }).join('');
    document.body.appendChild(n);
  };

  /* ---------- Mini oynatıcı (K39): Spiker (canlı sunucu, bülten) ya da Dinle (haberin sesli okunması); ikisi ayrı ad ve ikonla.
     Varsayılan KAPALI: yalnız sayfa ?calan=1 (Spiker) / ?calan=dinle ile açıldıysa ya da bu sayfada oynat'a basıldıysa görünür.
     Çalarken uygulama içi bağlantılar calan'ı taşır; böylece sayfalar arasında çalmaya devam eder. Kayıt: sessionStorage "dada-spiker". ---------- */
  var ANAHTAR = 'dada-spiker', TOPLAM = 180000, mo, zam, gorunur = false;
  function oku(){ try { return JSON.parse(sessionStorage.getItem(ANAHTAR) || 'null'); } catch (e) { return H._mo || null; } }
  function yaz(v){ H._mo = v; try { if (v) sessionStorage.setItem(ANAHTAR, JSON.stringify(v)); else sessionStorage.removeItem(ANAHTAR); } catch (e) {} }
  function gecen(s){ return s.dur != null ? s.dur : (Date.now() - s.bas); }
  function guncelle(){
    var s = oku(); if (!mo) return;
    var ac = !!s && gorunur; mo.classList.toggle('acik', ac);
    if (!ac) return;
    var g = gecen(s) % TOPLAM, i = Math.min(2, Math.floor(g / (TOPLAM / 3))), dn = s.tur === 'dinle';
    mo.classList.toggle('dur', s.dur != null); mo.classList.toggle('dinle', dn);
    mo.querySelector('.yuz').style.backgroundImage = G(dn ? D.detay.g : D.spiker.gorsel);
    mo.querySelector('.t b').textContent = dn ? D.detay.baslik : D.spiker.sirada[i];
    mo.querySelector('.t small span.y').innerHTML = dn ? '<i class="fa-solid fa-headphones"></i>Dinle · ' + D.detay.dinle : '<i class="fa-solid fa-radio"></i>Dada Spiker · ' + D.spiker.bulten + ' · ' + (i + 1) + ' / 3';
    mo.setAttribute('aria-label', dn ? 'Dinle oynatıcı' : 'Spiker oynatıcı');
    mo.querySelector('.il i').style.width = (g / TOPLAM * 100).toFixed(1) + '%';
    mo.querySelector('[data-mo-oynat] i').className = 'fa-solid ' + (s.dur != null ? 'fa-play' : 'fa-pause');
  }
  function baslat(tur){ var s = oku(); if (!s || (s.tur || 'spiker') !== tur) yaz({ bas: Date.now(), dur: null, tur: tur }); else if (s.dur != null) yaz({ bas: Date.now() - s.dur, dur: null, tur: tur }); gorunur = true; guncelle(); }
  H.spikerBaslat = function(){ baslat('spiker'); };
  H.dinleBaslat = function(){ baslat('dinle'); };
  H.spikerCanli = function(){ return Q.get('spiker') !== '0'; }; /* prototipin "şimdi"si 16.05: 16.00 bülteni yayında; ?spiker=0 yayın yok */
  H.oynatici = function(){
    mo = document.createElement('div'); mo.className = 'mo'; mo.setAttribute('role', 'region'); mo.setAttribute('aria-label', 'Spiker oynatıcı');
    mo.innerHTML = '<span class="yuz"></span><span class="t"><b></b><small><span class="dalga"><i></i><i></i><i></i></span><span class="y"></span></small></span>' +
      '<button type="button" data-mo-oynat aria-label="Oynat / duraklat"><i class="fa-solid fa-pause"></i></button><button type="button" class="kapat" data-mo-kapat aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button><span class="il"><i></i></span>';
    document.body.appendChild(mo);
    var c = Q.get('calan');
    if (c === '1' || c === 'dinle'){ var t = c === 'dinle' ? 'dinle' : 'spiker', s0 = oku(); if (!s0 || (s0.tur || 'spiker') !== t) yaz({ bas: Date.now() - 52000, dur: null, tur: t }); gorunur = true; }
    mo.querySelector('[data-mo-oynat]').addEventListener('click', function(){ var s = oku(); if (!s) return; yaz(s.dur != null ? { bas: Date.now() - s.dur, dur: null, tur: s.tur } : { bas: s.bas, dur: Date.now() - s.bas, tur: s.tur }); guncelle(); });
    mo.querySelector('[data-mo-kapat]').addEventListener('click', function(){ yaz(null); gorunur = false; guncelle(); });
    document.addEventListener('click', function(e){
      if (e.target.closest('[data-spiker]')) { e.preventDefault(); H.spikerBaslat(); return; }
      if (e.target.closest('[data-dinle]')) { e.preventDefault(); H.dinleBaslat(); return; }
      /* çalarken uygulama içi bağlantı calan'ı taşır */
      var a = e.target.closest('a[href]'), s = oku(); if (!a || !s || !gorunur) return;
      var h = a.getAttribute('href'); if (!h || h.charAt(0) === '#' || /^(https?:|mailto:|tel:)/.test(h)) return;
      var u = new URL(h, location.href); u.searchParams.set('calan', s.tur === 'dinle' ? 'dinle' : '1'); a.setAttribute('href', u.href);
    }, true);
    addEventListener('storage', function(e){ if (e.key === ANAHTAR) guncelle(); });
    guncelle(); clearInterval(zam); zam = setInterval(guncelle, 1000);
  };

  /* ---------- Ortak davranışlar ---------- */
  H.raylar = function(){
    document.querySelectorAll('[data-ms]').forEach(function(r){
      var s = r.parentNode.querySelector('[data-sayac]'); if (!s) return;
      r.addEventListener('scroll', function(){ var w = r.children[1] ? r.children[1].offsetLeft - r.children[0].offsetLeft : 1, i = Math.round(r.scrollLeft / w); [].forEach.call(s.children, function(x, j){ x.className = j === i ? 'on' : ''; }); }, { passive: true });
    });
    document.querySelectorAll('[data-sd-tek]').forEach(function(t){
      var a = t.querySelectorAll('.ak a'), i = 0;
      if (document.documentElement.classList.contains('tam')) return;
      setInterval(function(){ a[i].classList.remove('on'); i = (i + 1) % a.length; a[i].classList.add('on'); }, 3200);
    });
  };
})();
