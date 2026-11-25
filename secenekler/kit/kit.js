/* Dada Haber Mobil · UI KIT · kurucu işlevler (TEK YAZAR: kit yazarı). icerik.js, cerceve.js, icerik-ek.js'ten SONRA yüklenir.
   Ekranlar biçim yazmaz; bu işlevlerin döndürdüğü HTML'i ve kit.css sınıflarını kullanır. İçerik yalnız window.D'den.
   Vitrin: secenekler/ui-kit.html (her bileşen, her hal, açık/koyu).

   ADRES VE HAL
     K.KOK                       secenekler/ klasörünün mutlak adresi (bu betiğin yerinden çözülür; her klasör derinliğinde doğru)
     K.u(yol, ek)                secenekler/'e göre yol → adres; tema ve uye=0 korunur; hibrit/ yollarına hb=4&kok=1 eklenir
     K.git(ad, ek)               K.YOL[ad] adresi (ana, bolumler, liste, detay, akis, dinle, hesap, arama, giris, kaydedilenler …)
     K.uye  K.durum  K.q         üye mi (?uye=0 misafir) · ?durum= değeri · URLSearchParams
   İSKELE (gövdeye eklenir, öğeyi döndürür)
     K.ustCubuk({tur:'duz'|'foto'|'ara', geri, baslik, buyuk, logo, eylemler:[…|'ara'|'paylas'|'kaydet'|'menu'|'hesap'|'daha'|'ayarlar'|'sirala'], gorsel, esik, ilerleme, ara:{…}, ekran, yer})
     (Beyar: üst çubuklarda zil YOK; bildirimlere çekmecenin hesap kartından ve Hesabım'dan gidilir)
     K.altCubuk(etkin, {koyu, rozet:{hesap:3}, yer})     etkin ∈ ana · bolum · akis · dinle · hesap
     K.oynatici({yer}) (varsayılan kapalı; ?calan=1|dinle)  K.spikerBaslat()  K.dinleBaslat()  K.spikerDurdur()  K.spikerCanli()  K.goruntuleyici({g, altyazi, sira, toplam})                  Spiker mini oynatıcısı; sessionStorage "dada-spiker" (hibrit.js ile aynı)
     K.okuma({yer, dinle, yorum})                                       detayın yüzen okuma çubuğu
     K.cekmece({yer, acik})                               sağdan menü çekmecesi (üye/misafir); [data-menu] açar
     K.yapis(el, ekran)                                   hikâye şeridi yapışınca küçülür
   İŞARETLER   K.bb({baslik, ikon, sayi, canli, baglanti, not, yalin})  K.meta([..])  K.vid(sure)  K.katEt(metin, ikon, {foto, ek})
               K.canli(metin, {kucuk})  K.etiket(metin, {tur, ikon})  K.ustSatir(h, {ikon, saatsiz})  K.md(metin, ikon)  K.rozet(n)
               K.noktalar(n, i, foto)  K.ikon(kategori)  K.avatar(ad, boy, cls)
   DENETİMLER  K.btn({metin, ikon, tur, boy, tam, href, durum, basili, secili, attr})  K.ikonBtn({ikon, etiket, tur, rozet, secili, attr})
               K.cip(metin, {secili, ikon, sayi, buyuk})  K.cipler(liste, secili, {tek})  K.segment(ogeler, i, {ince})  K.sekmeler(ogeler, i)
               K.gorunum(kip)  K.alan({etiket, tur, deger, yer, ikon, yardim, hata, basari, pasif, odak})  K.ara({deger, yer, ses, odak, iptal})
               K.anahtar(on, {pasif})  K.onay(metin, {secili, hata})  K.secim(ad, metin, {secili, alt, satir})  K.kaydirac({min,max,deger,sari})  K.gunler({secili})
   KARTLAR     K.kartA(h,o) K.kartK(h,o) K.kartGenis(h,o) K.satir(h,{tur:'tam'|'kisa', durum, secim, kaydedildi, indir, kaydet})
               K.kartVideo(v,{yatay}) K.podcast(p) K.podcastSatir(p,{ilerleme, oynuyor, indir}) K.kartGaleri(f) K.olay(o) K.kartAkis(v)
               K.akisTam(v,{i, durum}) K.kose(k) K.senin({n}) K.hikayeSerit({kucuk, koyu, spiker:false}) K.sd(s, ilk) K.sdSatir(s, ilk) K.bolumSatir(b)
               K.yazarSatir(k,{takip}) K.bildirim(o) K.oneri(o) K.takim(o) K.ray(html, cls)
   AYRAÇLAR    K.piyasa() K.hava() K.namaz() K.mac({hal}) K.spiker() K.cagri({ikon, baslik, aciklama, eylem})
   DETAY       K.zamanSatir(d) K.madde(liste) K.etkisi(metin) K.bolumKart({ikon, baslik, sira, toplam, icerik, sonraki}) K.hmb(alt) K.kaynaklar(liste)
               K.cizelge(haberler, {ikon, toplam}) K.adimlar(liste) K.canliGiris({saat, baslik, metin, g, kilit, yeni}) K.yeniHap(metin) K.yorumlar({Y, sinir}) K.yorum(y, yanit)
               K.tablo({sutunlar, satirlar, vurgu}) K.puanTablosu(takimlar, vurguKod) K.skor({dk, ev, dep, skor, canli, kazanan})
   KATMANLAR (denetleyici döndürür: {el, ac(), kapat()})
               K.sayfa({baslik, alt, icerik, eylemler, yer, acik}) · K.sayfa('paylas'|'kaydet'|'yazi'|'hiz'|'suzgec'|'tetik'|'bildir'|'sehir'|'ses'|'guncelle', {…})
               K.pencere({ikon, baslik, metin, eylemler, tehlike, yan, yer, acik}) · K.pencere('cikis'|'hesap-sil'|'indirilen-sil'|'gecmis'|'klasor-sil'|'takip-birak'|'yorum-sil'|'oturum')
               K.menu({hedef, ogeler, yer, acik, konum}) · K.menu('siralama'|'klasor'|'yorum', {…})   K.baglam({kaynak|h, tur:'haber'|'akis', yer, acik})
               K.toast(metin, {tur:'bilgi'|'basari'|'hata', ikon, eylem, geriAl, alt, sure, bant, yer, yerinde})   K.afis({tur, baslik, g, yer, acik})
               K.serit({tur, ikon, metin, alt, eylem})
   HALLER      K.bos({ikon, baslik, aciklama, eylem, ikinci, tam}) · K.bos('kaydedilen'|'bildirim'|'takip'|'gecmis'|'sonuc'|'yorum'|'liste'|'indirilen'|'senin')
               K.hata({tur:'sunucu'|'cevrimdisi'|'bulunamadi'|'zaman-asimi'|'kaldirildi'|'web'|'cok-istek'|'erisim'|'bakim'|'guncelleme', tam, deneniyor})
               K.blokHata(baslik)  K.iskelet(tur, n)  tur ∈ satir · kart · ray · hero · metin · hikaye · detay · akis · bolum · yorum · liste
               K.yenile(hal) hal ∈ cekiliyor · birak · yenileniyor · bitti  ·  K.cekYenile(ekran, bitince)  ·  K.dahaFazla(hal, ne) hal ∈ yukleniyor · son · hata
               K.izin({tur:'bildirim'|'konum'|'mikrofon', red})
   OYNATICI    K.oynaticiTam({tur:'spiker'|'podcast'|'dinle', durum, yer, yerinde, acik})  K.video({g, durum, sure, gecen, yatay, baslik, yuvarlak})  K.ses(hal)
   HESAP       K.ayar({ikon, baslik, alt, sag:'ok'|'anahtar'|'deger'|'tik', deger, on, pasif, tehlike, href, secili})  K.grup(baslik, satirlar, not)
               K.profil()  K.istat(liste)  K.akordeon(baslik, metin, acik)  K.indir(hal, yuzde)  K.ilerleme(yuzde)
   DAVRANIŞ (kendiliğinden bağlanır): kaydet düğmesi + kısa bildirim · tek seçimli çip grupları [data-tek] · segment, sekme, görünüm anahtarı · kaydırıcı dolgusu ·
     şifre göster [data-sifre] · [data-spiker] · [data-menu] · [data-sayfa="paylas"…] · [data-geri] · perde ve Esc kapatır · tutamaktan aşağı çek kapat ·
     kartta uzun basma (520 ms) ya da sağ tık → bağlam menüsü. */
(function(){
  var D = window.D, Q = new URLSearchParams(location.search);
  var K = window.K = {};
  var src = document.currentScript && document.currentScript.src;
  K.KOK = src ? new URL('../', src).href : '../';
  K.q = Q; K.tema = Q.get('tema'); K.uye = Q.get('uye') !== '0'; K.durum = Q.get('durum') || '';

  /* ---------- adres ---------- */
  K.YOL = {
    ana: 'hibrit/kok.html', liste: 'hibrit/liste.html', detay: 'hibrit/detay.html', akis: 'hibrit/akis.html',
    bolumler: 'ekranlar/icerik/bolumler.html', dinle: 'ekranlar/icerik/haber-dinle.html', hesap: 'ekranlar/hesap/hesabim.html',
    arama: 'ekranlar/icerik/arama.html', aramaSonuc: 'ekranlar/icerik/arama-sonuc.html', dadayaSor: 'ekranlar/icerik/dadaya-sor.html',
    hikaye: 'ekranlar/icerik/hikaye.html', sonDakika: 'ekranlar/icerik/son-dakika.html', yorumlar: 'ekranlar/icerik/yorumlar.html',
    kose: 'ekranlar/icerik/kose-yazisi.html', canliAnlatim: 'ekranlar/icerik/canli-anlatim.html', canliGundem: 'ekranlar/icerik/canli-gundem.html',
    video: 'ekranlar/icerik/video.html', videoDetay: 'ekranlar/icerik/video-detay.html', fotoFokus: 'ekranlar/icerik/foto-fokus.html', galeri: 'ekranlar/icerik/galeri.html',
    infografik: 'ekranlar/icerik/infografik.html', spiker: 'ekranlar/icerik/spiker.html', podcast: 'ekranlar/icerik/podcast.html',
    podcastBolum: 'ekranlar/icerik/podcast-bolum.html', kesfet: 'ekranlar/icerik/kesfet.html', gununBesi: 'ekranlar/icerik/gunun-5i.html',
    seninIcin: 'ekranlar/icerik/senin-icin.html', yazarlar: 'ekranlar/icerik/yazarlar.html', yazar: 'ekranlar/icerik/yazar.html',
    etiket: 'ekranlar/icerik/etiket.html', gelisenOlay: 'ekranlar/icerik/gelisen-olay.html', takvim: 'ekranlar/icerik/takvim.html',
    piyasalar: 'ekranlar/icerik/piyasalar.html', havaDurumu: 'ekranlar/icerik/hava-durumu.html', namaz: 'ekranlar/icerik/namaz-vakitleri.html',
    mac: 'ekranlar/icerik/mac-detay.html', canliSkor: 'ekranlar/icerik/canli-skor.html', puanDurumu: 'ekranlar/icerik/puan-durumu.html',
    giris: 'ekranlar/giris/giris.html', uyeOl: 'ekranlar/giris/uye-ol.html', konuSecimi: 'ekranlar/giris/konu-secimi.html',
    profil: 'ekranlar/hesap/profil.html', kaydedilenler: 'ekranlar/hesap/kaydedilenler.html', takip: 'ekranlar/hesap/takip.html',
    gecmis: 'ekranlar/hesap/gecmis.html', bildirimler: 'ekranlar/hesap/bildirim-merkezi.html', bildirimTercih: 'ekranlar/hesap/bildirim-tercihleri.html',
    tercihler: 'ekranlar/hesap/tercihler.html', ayarlar: 'ekranlar/hesap/ayarlar.html', gorunum: 'ekranlar/hesap/gorunum.html',
    geriBildirim: 'ekranlar/hesap/geri-bildirim.html', hakkinda: 'ekranlar/hesap/hakkinda.html', yasal: 'ekranlar/hesap/yasal.html',
    iletisim: 'ekranlar/hesap/iletisim.html', yardim: 'ekranlar/hesap/yardim.html',
    afet: 'ekranlar/icerik/afet.html', trafik: 'ekranlar/icerik/trafik.html', ekonomiAraclari: 'ekranlar/icerik/ekonomi-araclari.html', ekonomiAraci: 'ekranlar/icerik/ekonomi-araci.html',
    resmiIlanlar: 'ekranlar/icerik/resmi-ilanlar.html', resmiIlan: 'ekranlar/icerik/resmi-ilan.html', hamilelik: 'ekranlar/icerik/hamilelik.html', hamilelikHafta: 'ekranlar/icerik/hamilelik-hafta.html',
    astroloji: 'ekranlar/icerik/astroloji.html', burc: 'ekranlar/icerik/burc.html', dilSec: 'ekranlar/sistem/dil-sec.html', dadaAilesi: 'ekranlar/icerik/dada-ailesi.html'
  };
  K.u = function(yol, ek){
    var p = String(yol).split('?'), q = new URLSearchParams(p[1] || '');
    if (/^hibrit\//.test(p[0])) { if (!q.has('hb')) q.set('hb', '4'); if (!q.has('kok')) q.set('kok', '1'); }
    if (K.tema && !q.has('tema')) q.set('tema', K.tema);
    if (!K.uye && !q.has('uye')) q.set('uye', '0');
    if (ek) new URLSearchParams(ek).forEach(function(v, k){ q.set(k, v); });
    var s = q.toString();
    return K.KOK + p[0] + (s ? '?' + s : '');
  };
  K.git = function(ad, ek){ return K.u(K.YOL[ad] || ad, ek); };

  /* ---------- küçük yardımcılar ---------- */
  function I(n, cls){ return '<i class="' + (/^fa-(brands|solid) /.test(n) ? n : 'fa-solid ' + n) + (cls ? ' ' + cls : '') + '"></i>'; }
  K.I = I;
  function bg(g){ return g ? ' style="background-image:' + G(g) + '"' : ''; }
  function href(h){ return h ? ' href="' + h + '"' : ''; }
  function at(o){ return o ? ' ' + o : ''; }
  function el(html){ var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function ekle(yer, html){ var e = el(html); (yer || document.body).appendChild(e); return e; }
  K.el = el;
  K.bolum = function(ad){ return D.bolumler.filter(function(b){ return b.ad === ad; })[0]; };
  K.ikon = function(kat){ var b = K.bolum(kat); if (b) return b.ikon; var m = D.manset.filter(function(x){ return x.kat === kat; })[0]; return m ? m.ikon : 'fa-newspaper'; };
  K.bas = function(ad){ return String(ad).split(' ').map(function(p){ return p.charAt(0); }).join('').slice(0, 2); };

  /* ---------- işaretler ---------- */
  /* bilgi satırı (K43): okuma süresi fa-clock, görüntülenme fa-eye; ikonlu öğeler noktasız */
  K.meta = function(o, cls){ return '<div class="k-meta' + (cls ? ' ' + cls : '') + '">' + o.filter(Boolean).map(function(x){ x = String(x); if (x.indexOf('<i') > -1) return '<span>' + x + '</span>';
      if (/^\d+\s?dk$/.test(x)) return '<span class="ik"><i class="fa-solid fa-clock"></i>' + x + '</span>';
      if (/^\d+([.,]\d+)?\s?(B|Bn|M|Mn|bin)$/.test(x)) return '<span class="ik"><i class="fa-solid fa-eye"></i>' + x + '</span>';
      return '<span>' + x + '</span>'; }).join('') + '</div>'; };
  K.vid = function(s){ return I('fa-play') + s; };
  K.katEt = function(metin, ikon, o){ o = o || {}; return '<span class="k-kat' + (o.foto ? ' foto' : '') + '">' + I(ikon || K.ikon(metin)) + metin + (o.ek ? '<em>· ' + o.ek + '</em>' : '') + '</span>'; };
  K.canli = function(m, o){ return '<span class="k-canli' + (o && o.kucuk ? ' kucuk' : '') + '"><span class="canli-nokta"></span>' + (m || 'Canlı') + '</span>'; };
  K.etiket = function(m, o){ o = o || {}; return '<span class="k-etiket' + (o.tur ? ' ' + o.tur : '') + '">' + (o.ikon ? I(o.ikon) : '') + m + '</span>'; };
  K.md = function(m, ikon, cls){ return '<span class="k-md' + (cls ? ' ' + cls : '') + '">' + I(ikon || 'fa-play') + m + '</span>'; };
  K.rozet = function(n, cls){ return '<span class="k-rozet' + (cls ? ' ' + cls : '') + '">' + (n == null ? '' : n) + '</span>'; };
  K.noktalar = function(n, i, foto){ var s = ''; for (var j = 0; j < n; j++) s += '<i' + (j === i ? ' class="on"' : '') + '></i>'; return '<span class="k-noktalar' + (foto ? ' foto' : '') + '" aria-hidden="true">' + s + '</span>'; };
  K.avatar = function(ad, boy, cls, tam){ return '<span class="k-avatar' + (boy ? ' ' + boy : '') + (cls ? ' ' + cls : '') + '" aria-hidden="true">' + (tam || /koyu/.test(cls || '') ? K.bas(ad) : String(ad).charAt(0)) + '</span>'; };
  K.ustSatir = function(h, o){
    o = o || {}; var t = h.tur && h.tur !== h.alt ? h.tur : '', p = [];
    if (t === 'Canlı') p.push(K.canli()); else if (t === 'Son Dakika') p.push('<span class="k-tur"><span class="canli-nokta"></span>' + t + '</span>'); else if (t) p.push('<span class="tr">' + t + '</span>');
    var kat = h.alt || h.kat; if (kat) p.push(K.katEt(kat, o.ikon || h.ikon || K.ikon(h.kat || kat)));
    if (!o.saatsiz && h.saat) p.push('<span class="s">' + h.saat + '</span>');
    /* K44: sığmazsa ikinci satıra kırılmaz, yana kayar; o.sag (ör. süre ya da görüntülenme) sağa yaslanır, ikonlu */
    var sag = o.sag ? K.meta([o.sag]).replace('<div class="k-meta">', '<span class="sag">').replace(/<\/div>$/, '</span>') : '';
    return '<span class="k-ustsatir"><span class="sol">' + p.join('<span class="nk">·</span>') + '</span>' + sag + '</span>';
  };
  K.bb = function(o){
    var on = o.canli ? '<span class="canli-nokta"></span>' : (o.ikon ? '<span class="bi">' + I(o.ikon) + '</span>' : '');
    var b = o.baglanti, sag = o.not ? '<span class="not">' + o.not + '</span>' : (b ? '<a' + href(b.href) + '>' + (typeof b === 'string' ? b : (b.metin || 'Tümü')) + I('fa-chevron-right') + '</a>' : '');
    return '<div class="k-bb' + (o.yalin ? ' yalin' : '') + '"><h2>' + on + o.baslik + (o.sayi != null ? '<small>· ' + o.sayi + '</small>' : '') + '</h2>' + sag + '</div>';
  };

  /* ---------- denetimler ---------- */
  K.btn = function(o){
    var cls = 'k-btn' + (o.tur ? ' ' + o.tur : '') + (o.boy ? ' ' + o.boy : '') + (o.tam ? ' tam' : '') + (o.durum === 'yukleniyor' ? ' is-yukleniyor' : '') + (o.basili ? ' is-basili' : '');
    var ic = (o.durum === 'yukleniyor' ? I('fa-circle-notch', 'fa-spin') : (o.ikon ? I(o.ikon) : '')) + (o.metin ? '<span>' + o.metin + '</span>' : '') + (o.sagIkon ? I(o.sagIkon) : '');
    var a = (o.secili != null ? ' aria-pressed="' + !!o.secili + '"' : '') + (o.pasif ? ' disabled' : '') + at(o.attr);
    return o.href ? '<a class="' + cls + '" href="' + o.href + '"' + a + '>' + ic + '</a>' : '<button type="button" class="' + cls + '"' + a + '>' + ic + '</button>';
  };
  K.ikonBtn = function(o){
    var a = ' aria-label="' + (o.etiket || '') + '"' + (o.secili != null ? ' aria-pressed="' + !!o.secili + '"' : '') + (o.pasif ? ' disabled' : '') + at(o.attr) + (o.id ? ' id="' + o.id + '"' : '');
    var ic = (o.av ? K.bas(o.av) : I(o.ikon)) + (o.rozet === true ? '<span class="k-rozet nokta"></span>' : (o.rozet ? K.rozet(o.rozet) : ''));
    var cls = 'k-ikon' + (o.tur ? ' ' + o.tur : '') + (o.av ? ' av' : '') + (o.basili ? ' is-basili' : '');
    return o.href ? '<a class="' + cls + '" href="' + o.href + '"' + a + '>' + ic + '</a>' : '<button type="button" class="' + cls + '"' + a + '>' + ic + '</button>';
  };
  K.cip = function(m, o){ o = o || {};
    return '<button type="button" class="k-cip' + (o.buyuk ? ' buyuk' : '') + (o.cam ? ' cam' : '') + (o.basili ? ' is-basili' : '') + '" aria-pressed="' + !!o.secili + '"' + (o.pasif ? ' disabled' : '') + at(o.attr) + '>' + (o.ikon ? I(o.ikon) : '') + m + (o.sayi != null ? ' <span class="n">' + o.sayi + '</span>' : '') + '</button>'; };
  K.cipler = function(liste, secili, o){ o = o || {};
    return '<div class="k-ray s8' + (o.cls ? ' ' + o.cls : '') + '"' + (o.tek !== false ? ' data-tek' : '') + ' role="group">' + liste.map(function(x, i){ var m = typeof x === 'string' ? { metin: x } : x; return K.cip(m.metin, { secili: i === secili, ikon: m.ikon, sayi: m.sayi, buyuk: o.buyuk }); }).join('') + '</div>'; };
  K.segment = function(ogeler, i, o){ o = o || {};
    return '<div class="k-segment' + (o.ince ? ' ince' : '') + '" role="tablist" style="--n:' + ogeler.length + ';--i:' + (i || 0) + '">' + ogeler.map(function(x, j){ var m = typeof x === 'string' ? { metin: x } : x;
      return '<button type="button" role="tab" aria-selected="' + (j === (i || 0)) + '">' + (m.ikon ? I(m.ikon) : '') + m.metin + (m.alt ? '<small>' + m.alt + '</small>' : '') + '</button>'; }).join('') + '</div>'; };
  K.sekmeler = function(ogeler, i){
    return '<div class="k-sekmeler" role="tablist">' + ogeler.map(function(x, j){ var m = typeof x === 'string' ? { metin: x } : x;
      return '<button type="button" role="tab" aria-selected="' + (j === (i || 0)) + '"' + (m.pasif ? ' disabled' : '') + '>' + m.metin + (m.sayi != null ? '<span class="n">' + m.sayi + '</span>' : '') + '</button>'; }).join('') + '</div>'; };
  K.gorunum = function(kip){ return '<div class="k-gorunum" role="group" aria-label="Görünüm"><button type="button" data-kip="liste" aria-pressed="' + (kip !== 'cizelge') + '" aria-label="Liste">' + I('fa-newspaper') + '</button><button type="button" data-kip="cizelge" aria-pressed="' + (kip === 'cizelge') + '" aria-label="Çizelge">' + I('fa-clock') + '</button></div>'; };
  K.alan = function(o){
    var tur = o.tur || 'text', sifre = tur === 'password', id = 'k-a' + Math.random().toString(36).slice(2, 7);
    var cls = 'k-alan' + (o.hata ? ' is-hata' : '') + (o.basari ? ' is-basari' : '') + (o.pasif ? ' is-pasif' : '');
    var y = o.hata || o.basari || o.yardim;
    return '<div class="' + cls + '">' + (o.etiket ? '<label class="k-alan-e" for="' + id + '">' + o.etiket + '</label>' : '') +
      '<div class="k-girdi' + (o.odak ? ' is-odak' : '') + '">' + (o.ikon ? I(o.ikon) : '') + '<input id="' + id + '" type="' + tur + '"' + (o.deger ? ' value="' + o.deger + '"' : '') + (o.yer ? ' placeholder="' + o.yer + '"' : '') + (o.pasif ? ' disabled' : '') + (o.oto ? ' autocomplete="' + o.oto + '"' : '') + '>' +
      (sifre ? '<button type="button" data-sifre aria-label="Şifreyi göster">' + I('fa-eye') + '</button>' : '') + (o.sag || '') + '</div>' +
      (y ? '<p class="k-alan-y">' + I(o.hata ? 'fa-circle-exclamation' : o.basari ? 'fa-circle-check' : 'fa-circle-info') + '<span>' + y + '</span></p>' : '') +
      (o.guc != null ? '<div class="k-guc' + (o.guc < 2 ? ' zayif' : '') + '">' + [0, 1, 2, 3].map(function(j){ return '<i' + (j < o.guc ? ' class="on"' : '') + '></i>'; }).join('') + '</div>' : '') + '</div>';
  };
  K.metinAlan = function(o){ o = o || {}; return '<div class="k-alan' + (o.hata ? ' is-hata' : '') + '">' + (o.etiket ? '<span class="k-alan-e">' + o.etiket + '</span>' : '') + '<div class="k-metinalan"><textarea placeholder="' + (o.yer || '') + '" maxlength="' + (o.sinir || 1000) + '">' + (o.deger || '') + '</textarea><span class="say">' + (o.deger || '').length + ' / ' + (o.sinir || 1000) + '</span></div>' + (o.hata ? '<p class="k-alan-y">' + I('fa-circle-exclamation') + '<span>' + o.hata + '</span></p>' : '') + '</div>'; };
  K.ara = function(o){ o = o || {};
    var f = '<label class="k-ara' + (o.odak ? ' is-odak' : '') + (o.cam ? ' cam' : '') + '">' + I('fa-magnifying-glass') + '<input type="search" placeholder="' + (o.yer || 'Haber, yazar ya da konu ara') + '"' + (o.deger ? ' value="' + o.deger + '"' : '') + ' enterkeyhint="search">' +
      (o.deger ? '<button type="button" class="temizle" aria-label="Temizle">' + I('fa-circle-xmark') + '</button>' : '') +
      (o.ses !== false ? '<button type="button" class="ses' + (o.ses === 'on' ? ' on' : '') + '" data-sayfa="ses" aria-label="Sesli ara">' + I('fa-microphone') + '</button>' : '') + '</label>';
    return o.iptal ? '<div class="k-ara-k">' + f + '<button type="button" class="k-btn metin notr" data-geri>Vazgeç</button></div>' : f;
  };
  K.anahtar = function(on, o){ o = o || {}; return '<span class="k-anahtar"><input type="checkbox" role="switch"' + (on ? ' checked' : '') + (o.pasif ? ' disabled' : '') + ' aria-label="' + (o.etiket || '') + '"><span></span></span>'; };
  K.onay = function(m, o){ o = o || {}; return '<label class="k-onay' + (o.hata ? ' is-hata' : '') + (o.pasif ? ' is-pasif' : '') + '"><input type="checkbox"' + (o.secili ? ' checked' : '') + '><span class="k-kutu">' + I('fa-check') + '</span>' + (m ? '<span>' + m + (o.alt ? '<small>' + o.alt + '</small>' : '') + '</span>' : '') + '</label>'; };
  K.secim = function(ad, m, o){ o = o || {}; return '<label class="k-secim' + (o.satir ? ' satir' : '') + (o.pasif ? ' is-pasif' : '') + '"><input type="radio" name="' + ad + '"' + (o.secili ? ' checked' : '') + '><span class="k-yuvar"></span><span>' + m + (o.alt ? '<small>' + o.alt + '</small>' : '') + '</span></label>'; };
  K.kaydirac = function(o){ o = o || {}; var mn = o.min || 0, mx = o.max || 100, v = o.deger != null ? o.deger : (mn + mx) / 2;
    return '<input type="range" class="k-kaydirac' + (o.sari ? ' sari' : '') + (o.ince ? ' ince' : '') + '" min="' + mn + '" max="' + mx + '" step="' + (o.adim || 1) + '" value="' + v + '" style="--d:' + ((v - mn) / (mx - mn) * 100) + '%" aria-label="' + (o.etiket || '') + '"' + (o.pasif ? ' disabled' : '') + '>'; };
  K.gunler = function(o){ o = o || {}; var A = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'], s = '', sec = o.secili != null ? o.secili : 2;
    for (var j = 0; j < 7; j++){ var dt = new Date(2026, 10, 21 + j); s += '<button type="button" class="k-gun' + (dt.getDate() === 23 ? ' bugun' : '') + '" aria-selected="' + (j === sec) + '">' + A[dt.getDay()] + '<b>' + dt.getDate() + '</b></button>'; }
    return '<div class="k-ray k-gunler serbest" data-tek-gun>' + s + '</div>'; };
  K.kaydet = function(on){ return '<button class="k-kay" type="button" aria-label="Kaydet" aria-pressed="' + !!on + '">' + I('fa-bookmark') + '</button>'; };
  K.indir = function(hal, p){ var h = hal || 'yok';
    return '<span class="k-indir' + (h === 'indiriliyor' ? ' is-yukleniyor' : h === 'indirildi' ? ' is-secili' : '') + '" style="--p:' + (p || 62) + '" aria-label="' + (h === 'indirildi' ? 'İndirildi' : h === 'indiriliyor' ? 'İndiriliyor' : 'Çevrimdışı indir') + '">' + I(h === 'indirildi' ? 'fa-circle-check' : h === 'indiriliyor' ? 'fa-pause' : 'fa-circle-down') + '</span>'; };
  K.ilerleme = function(p, cls){ return '<div class="k-ilerleme' + (cls ? ' ' + cls : '') + '" style="--p:' + p + '%"><i></i></div>'; };

  /* ---------- kartlar ---------- */
  function medya(h){ var m = h.medya; if (!m) return ''; m = Array.isArray(m) ? m[0] : m; return K.md(m.replace(/^Video · /, ''), /Dinle/.test(m) ? 'fa-headphones' : 'fa-play'); }
  K.ray = function(html, cls){ return '<div class="k-ray' + (cls ? ' ' + cls : '') + '">' + html + '</div>'; };
  K.kartA = function(h, o){ o = o || {};
    return '<a class="k-kart-a' + (o.basili ? ' is-basili' : '') + '" href="' + (o.href || K.git('detay')) + '"><div class="gr"' + bg(h.g) + '>' + medya(h) + '</div>' + (o.ustSatir !== false ? K.ustSatir(h, Object.assign({ sag: h.sure }, o)) : '') + '<h3>' + h.baslik + '</h3>' + K.meta([h.yazar, h.izlenme]) + '</a>'; };
  K.kartK = function(h, o){ o = o || {}; return '<a class="k-kart-k" href="' + (o.href || K.git('detay')) + '"><div class="gr"' + bg(h.g) + '>' + medya(h) + '</div><h4>' + h.baslik + '</h4>' + K.meta([h.yazar, h.sure]) + '</a>'; };
  K.kartGenis = function(h, o){ o = o || {};
    return '<a class="k-kart-genis" href="' + (o.href || K.git('detay')) + '"><div class="gr"' + bg(h.g) + '>' + medya(h) + '</div>' + K.ustSatir(h, Object.assign({ sag: h.sure }, o)) + '<h2>' + h.baslik + '</h2><div class="k-ab">' + K.meta([h.yazar, h.izlenme]) + K.kaydet(o.kaydedildi) + '</div></a>'; };
  K.satir = function(h, o){ o = o || {};
    var kisa = o.tur === 'kisa', g = h.g && o.gorsel !== false;
    var cls = 'k-satir' + (kisa ? ' kisa' : '') + (g ? '' : ' yazi') + (o.durum ? ' is-' + o.durum : '') + (o.secim ? ' is-secim' : '') + (o.basili ? ' is-basili' : '');
    var gov = kisa ? '<div><h3>' + h.baslik + '</h3>' + K.meta([h.yazar, h.sure]) + '</div>'
      : '<div>' + K.ustSatir(h, o) + '<h3>' + h.baslik + '</h3><div class="k-ab">' + K.meta([h.yazar, h.sure, h.izlenme]) + (o.indir ? K.indir(o.indir) : '') + (o.kaydet === false ? '' : K.kaydet(o.kaydedildi)) + '</div>' +
        (o.durum === 'bekliyor' ? K.etiket('Onay bekliyor', { ikon: 'fa-hourglass-half' }) : '') + '</div>';
    /* K44 (Yasin Bey): görsel solda; yanında kategori/il · saat, altında başlık, altında yazar ve ikonlu bilgiler + kaydet. Çizelge istisna (görsel sağda). */
    return '<a class="' + cls + '" href="' + (o.href || K.git('detay')) + '">' + (o.secim ? K.onay('', { secili: o.secili }) : '') + (g ? '<div class="gr"' + bg(h.g) + '>' + (o.md ? K.md(o.md) : '') + '</div>' : '') + gov + '</a>';
  };
  K.kartVideo = function(v, o){ o = o || {};
    return '<a class="k-kart-v' + (o.yatay ? ' yatay' : '') + '" href="' + (o.href || K.git('videoDetay')) + '"><div class="gr"' + bg(v.g) + '>' + K.md(v.sure) + '</div><div>' +
      (o.yatay ? '' : K.ustSatir({ kat: v.kat, tur: o.tur })) + '<h3>' + v.baslik + '</h3>' + K.meta(o.yatay ? [v.kat, v.izlenme] : [v.izlenme ? v.izlenme + ' izlenme' : '']) + '</div></a>'; };
  K.podcast = function(p){ return '<a class="k-pd" href="' + K.git('podcastBolum') + '"><span class="gr"' + bg(p.g) + '>' + I('fa-play') + '</span><span><small>' + p.seri + '</small><b>' + p.baslik + '</b><em>' + p.no + ' · ' + p.sure + '</em></span></a>'; };
  K.podcastSatir = function(p, o){ o = o || {};
    return '<div class="k-pd-satir"><span class="gr"' + bg(p.g) + '></span><a href="' + K.git('podcastBolum') + '"><small>' + p.seri + ' · ' + p.no + '</small><b>' + p.baslik + '</b>' +
      K.meta([p.sure, p.konuk]) + (o.ilerleme ? K.ilerleme(o.ilerleme) : '') + '</a>' +
      K.ikonBtn({ ikon: o.oynuyor ? 'fa-pause' : 'fa-play', etiket: o.oynuyor ? 'Duraklat' : 'Oynat', attr: 'data-podcast' }) + '</div>'; };
  K.kartGaleri = function(f){ return '<a class="k-kart-g" href="' + K.git('galeri') + '"><div class="yig"><div class="gr"' + bg(f.g) + '>' + K.md(f.adet + ' kare', 'fa-images') + '</div></div><h3>' + f.baslik + '</h3></a>'; };
  /* Gelişen Olaylar: D.liste haberleri konuya göre (liste kökündeki gruplar; yeni haber yok) */
  K.OLAYLAR = [
    { ad: 'Asgari ücret ve bütçe', g: 'asgari', canli: true, i: [1, 3, 4] },
    { ad: 'Kar ve ulaşım', g: 'kar-istanbul', i: [0, 7, 9, 6] },
    { ad: 'Afet ve çevre', g: 'konteyner', i: [10, 8, 11] }
  ];
  K.olay = function(o, s){ s = s || {}; var X = D.liste.haberler;
    return '<article class="k-olay' + (s.tam ? ' tam' : '') + '"><a class="k-olay-b" href="' + K.git('gelisenOlay') + '"' + bg(o.g) + '><span class="us">' + (o.canli ? K.canli() : '') + (s.takip ? K.etiket('Takipte', { tur: 'dolu', ikon: 'fa-check' }) : '') + '</span>' +
      '<span><h3>' + o.ad + '</h3><small>' + o.i.length + ' gelişme · son ' + X[o.i[0]].saat + '</small></span></a>' +
      '<ol>' + o.i.slice(0, 2).map(function(k){ return '<li><time>' + X[k].saat + '</time><h4>' + X[k].baslik + '</h4></li>'; }).join('') + '</ol>' +
      '<div class="k-olay-a"><span>' + I('fa-folder-open') + 'Olay dosyası</span>' + K.btn({ metin: s.takip ? 'Takipte' : 'Takip et', ikon: s.takip ? 'fa-check' : 'fa-plus', secili: !!s.takip, attr: 'data-takip' }) + '</div></article>'; };
  K.kartAkis = function(v){ return '<a class="k-kart-akis" href="' + K.git('akis') + '"' + bg(v.g) + '><span class="s">' + I('fa-play') + v.sure + '</span><small>' + I(K.ikon(v.kat)) + v.kat + '</small><b>' + v.baslik + '</b></a>'; };
  K.akisTam = function(v, o){ o = o || {}; var A = D.akis, i = o.i || 0, d = o.durum || '';
    var sira = ''; for (var j = 0; j < A.liste.length; j++) sira += '<i' + (j === i ? ' class="on"' : '') + '></i>';
    var ort = d === 'dur' ? '<div class="k-akis-ort"><span class="k-ikon cam">' + I('fa-play') + '</span></div>'
      : d === 'mobil' ? '<div class="k-akis-ort"><button type="button" class="k-ikon sari">' + I('fa-play') + '</button>Dokun, oynat<small>Mobil veride videolar kendiliğinden oynamaz.</small></div>'
      : d === 'hata' ? '<div class="k-akis-ort"><span class="k-ikon cam">' + I('fa-triangle-exclamation') + '</span>Video oynatılamadı<small>Yukarı kaydır, sıradakine geç.</small></div>' : '';
    return '<article class="k-akis-tam" data-baglam="akis"><div class="gr"' + bg(v.g) + '></div><div class="k-akis-sira" aria-hidden="true">' + sira + '<b class="tnum">' + (i + 1) + ' / ' + A.toplam + '</b></div>' + ort +
      '<div class="k-akis-ic">' + K.etiket(v.kat, { tur: 'cam', ikon: K.ikon(v.kat) }) + '<h2><a href="' + K.git('detay') + '">' + v.baslik + I('fa-chevron-right') + '</a></h2>' + K.meta([K.vid(v.sure), v.izlenme], 'foto') +
      (d === 'altyazi' ? '<p class="k-akis-alt">' + v.baslik + '</p>' : '') + '</div><div class="k-akis-oy"><i style="width:' + (d === 'mobil' ? 0 : 38) + '%"></i></div></article>'; };
  K.akisBitti = function(){ return '<section class="k-akis-bitti"><span class="ik">' + I('fa-check') + '</span><h2>Günün akışı bitti</h2><p>Bugünün ' + D.akis.toplam + ' videosunu izledin. Daha fazlası Video Haber\'de.</p>' + K.btn({ metin: 'Video Haber\'e geç', ikon: 'fa-circle-play', tur: 'birincil', href: K.git('video') }) + '</section>'; };
  K.kose = function(k){ return '<a class="k-kose" href="' + K.git('kose') + '"><span class="gr"' + bg(k.g) + '></span>' + K.avatar(k.ad, '', 'koyu') + '<span class="ic">' + I('fa-quote-left', 'tr') + '<h4>' + k.baslik + '</h4><span class="yz"><b>' + k.ad + '</b><small>' + k.unvan + '</small></span></span></a>'; };
  K.senin = function(o){ o = o || {}; var S = D.seninIcin, n = o.n || 4;
    return '<section class="k-sen"><div class="k-kutu-b">' + I('fa-heart') + 'Bugün Senin İçin<em>' + D.uye.ad + ' · takip ettiklerin</em></div>' +
      (o.cipler !== false ? '<div class="cp">' + D.uye.takip.map(function(t){ return '<span>' + I('fa-check') + t + '</span>'; }).join('') + '</div>' : '') +
      '<ol>' + S.slice(0, n).map(function(x){ return '<li><a href="' + K.git('detay') + '"><span class="gr"' + bg(x.h.g) + '></span><span><small>' + x.neden + ' · ' + x.h.kat + '</small><h4>' + x.h.baslik + '</h4></span></a></li>'; }).join('') + '</ol></section>'; };
  K.hikayeSerit = function(o){ o = o || {}; var iz = [];
    try { iz = JSON.parse(sessionStorage.getItem('dada-hikaye-izlenen') || '[]'); } catch (e) {}
    var gor = function(h){ return h.goruldu || iz.indexOf(h.kod) >= 0; };
    var s = D.hikayeler.filter(function(h){ return !gor(h); }).concat(D.hikayeler.filter(gor));
    var geri = encodeURIComponent(location.href.replace(K.KOK, ''));
    var canli = K.spikerCanli(), sonraki = '19.00';
    var spk = o.spiker === false ? '' : '<a class="k-hk-o spk' + (canli ? ' canli' : ' sonuk') + '" href="' + K.git('spiker', canli ? '' : 'spiker=0') + '" aria-label="' + (canli ? 'Dada Spiker yayında' : 'Dada Spiker, sıradaki bülten ' + sonraki) + '"><span class="k-hk-f"' + bg(D.spiker.gorsel) + '>' + (canli ? '<b class="k-hk-cn">CANLI</b>' : I('fa-radio')) + '</span><span class="k-hk-a">' + (canli ? 'Spiker' : sonraki) + '</span></a>';
    return '<nav class="k-hk' + (o.kucuk ? ' kucuk' : '') + (o.koyu ? ' koyu' : '') + '" aria-label="Kategori hikâyeleri">' + spk + s.map(function(h){ var g = gor(h);
      return '<a class="k-hk-o' + (g ? ' gor' : '') + '" href="' + K.git('hikaye', 'kat=' + h.kod + '&geri=' + geri) + '" aria-label="' + h.kat + ' hikâyesi' + (g ? ', görüldü' : '') + '"><span class="k-hk-f"' + bg(h.g) + '>' + I(h.ikon) + '</span><span class="k-hk-a">' + h.kat + '</span></a>'; }).join('') + '</nav>'; };
  K.sd = function(s, ilk){ return '<a class="k-sd' + (ilk ? ' ilk' : '') + '" href="' + K.git('detay') + '"><time>' + s.saat + '<span>' + s.kat + '</span></time><p>' + s.baslik + '</p></a>'; };
  K.sdSatir = function(s, ilk){ return '<a class="k-sd-satir' + (ilk ? ' ilk' : '') + '" href="' + K.git('detay') + '"><time>' + s.saat + '</time><div><p>' + s.baslik + '</p><small>' + s.kat + ' · ' + s.sure + '</small></div></a>'; };
  K.bolumSatir = function(b){ return '<a class="k-bolum-satir" href="' + K.git('liste') + '"><span class="bi">' + I(b.ikon) + '</span><span class="t"><b>' + b.ad + '</b><small>' + b.haberler[0].baslik + '</small></span>' + I('fa-chevron-right') + '</a>'; };
  /* K44: köşe yazısı satırı aynı mantık: solda yazarın görseli, yanında ad · unvan ve ikonlu bilgiler, altında yazının başlığı */
  K.koseSatir = function(k, o){ o = o || {}; return '<a class="k-kose-satir" href="' + (o.href || K.git('kose')) + '"><span class="k-avatar l koyu">' + K.bas(k.ad) + '</span><span class="t"><span class="u"><b>' + k.ad + '</b><small>' + k.unvan + '</small></span>' +
      '<h3>' + k.baslik + '</h3>' + K.meta([o.tarih, k.sure, o.izlenme]) + '</span>' + (o.kaydet === false ? '' : K.kaydet(o.kaydedildi)) + '</a>'; };
  K.yazarSatir = function(k, o){ o = o || {}; return '<div class="k-yazar-satir"><span class="k-avatar m koyu">' + K.bas(k.ad) + '</span><a href="' + K.git('yazar') + '"><b>' + k.ad + '</b><small>' + k.unvan + '</small>' + (k.baslik ? '<p>' + k.baslik + '</p>' : '') + '</a>' +
    K.btn({ metin: o.takip ? 'Takipte' : 'Takip et', ikon: o.takip ? 'fa-check' : 'fa-plus', boy: 'kucuk', tur: o.takip ? '' : 'sade', secili: !!o.takip, attr: 'data-takip' }) + '</div>'; };
  K.bildirim = function(o){ var g = o.g;
    return '<a class="k-bildirim' + (g ? '' : ' yazi') + (o.okundu ? ' is-okundu' : ' is-okunmadi') + '" href="' + (o.href || K.git('detay')) + '"><span class="ik' + (o.tur === 'sd' ? ' sd' : '') + '">' + I(o.ikon || 'fa-bolt') + '</span><span><span class="u">' + o.ust + '<span class="nk">·</span>' + o.saat + '</span><h4>' + o.baslik + '</h4></span>' + (g ? '<span class="gr"' + bg(g) + '></span>' : '') + '</a>'; };
  K.oneri = function(o){ var ik = { son: 'fa-clock-rotate-left', gundem: 'fa-arrow-trend-up', oneri: 'fa-magnifying-glass', yazar: 'fa-feather-pointed', etiket: 'fa-hashtag' }[o.tur || 'oneri'];
    var m = o.esle ? o.metin.replace(new RegExp('(' + o.esle + ')', 'i'), '<b>$1</b>') : o.metin;
    return '<a class="k-oneri" href="' + K.git('aramaSonuc') + '">' + I(ik) + '<span>' + m + (o.alt ? '<small>' + o.alt + '</small>' : '') + '</span>' + (o.tur === 'son' ? '<button type="button" class="sil" aria-label="Kaldır">' + I('fa-xmark') + '</button>' : I('fa-chevron-right', 'sil')) + '</a>'; };
  K.takim = function(o){ return '<button type="button" class="k-takim" aria-pressed="' + !!o.secili + '"><span class="ar">' + o.kod + '</span><span>' + o.ad + '</span><span class="tik">' + I('fa-check') + '</span></button>'; };

  /* ---------- ayraç kutuları ---------- */
  K.piyasa = function(){ var p = D.piyasa; return K.bb({ baslik: 'Piyasalar', ikon: 'fa-chart-column', not: p.guncelleme + ' · 15 dk gecikmeli' }) + '<div class="k-ray s10">' +
    p.liste.map(function(x){ return '<a class="k-py" href="' + K.git('piyasalar') + '"><small>' + x.ad + '</small><b>' + x.deger + '</b><em class="' + x.yon + '">' + (x.yon === 'y' ? '▲' : '▼') + ' %' + x.degisim + '</em></a>'; }).join('') + '</div>'; };
  K.hava = function(){ var h = D.hava, y = h.gunler[0];
    return '<a class="k-ky" href="' + K.git('havaDurumu') + '"><span class="ik">' + I(h.ikon) + '</span><span class="hv"><span class="t"><small>' + h.sehir + ' · Bugün</small><b>' + h.derece + '° ' + h.durum + '</b></span><span class="ay"></span><span class="t"><small>Yarın</small><b>' + y.y + '° / ' + y.d + '°</b></span>' + I(y.ikon, 'd') + '</span></a>'; };
  K.namaz = function(){ var n = D.namaz;
    return '<a class="k-ky" href="' + K.git('namaz') + '"><span class="ik">' + I('fa-mosque') + '</span><span class="t"><small>' + n.sehir + ' · Namaz vakti</small><b>' + n.siradaki + ' ezanı ' + n.saat + '</b></span><span class="sg"><b>' + n.kalan.replace(':', ' sa ') + ' dk</b><small>kaldı</small></span></a>'; };
  K.mac = function(o){ o = o || {}; var m = D.mac, hal = o.hal || 'canli';
    var sk = hal === 'baslamadi' ? '<b>' + (o.saat || '') + '</b><small>Başlamadı</small>' : '<b>' + m.skor + '</b><small>' + (hal === 'bitti' ? 'MS' : m.dakika) + '</small>';
    return '<a class="k-mac ' + hal + '" href="' + K.git('mac') + '"><div class="u">' + (hal === 'canli' ? K.canli() : '<span>' + (hal === 'bitti' ? 'Maç sonu' : 'Bugün') + '</span>') + '<span>' + m.lig + '</span></div>' +
      '<div class="s"><span class="tk"><span class="ar">' + m.evKod + '</span><b>' + m.ev + '</b></span><span class="sk">' + sk + '</span><span class="tk sag"><span class="ar">' + m.depKod + '</span><b>' + m.dep + '</b></span></div></a>'; };
  K.spiker = function(){ var s = D.spiker;
    return '<div class="k-spk"><span class="yuz"' + bg(s.gorsel) + '></span><a class="t" href="' + K.git('spiker') + '">' + K.canli('Yayında', { kucuk: true }) + '<b>Dada Spiker · ' + s.bulten + '</b><small>' + s.sirada[0] + '</small></a>' + K.ikonBtn({ ikon: 'fa-play', etiket: 'Spiker\'ı dinle', attr: 'data-spiker' }) + '</div>'; };
  K.cagri = function(o){ return '<div class="k-cagri"><span class="ik">' + I(o.ikon) + '</span><span class="t"><b>' + o.baslik + '</b>' + (o.aciklama ? '<small>' + o.aciklama + '</small>' : '') + '</span>' + (o.eylem ? K.btn(Object.assign({ boy: 'kucuk', tur: 'ikincil' }, o.eylem)) : '') + '</div>'; };

  /* ---------- detay parçaları ---------- */
  K.zamanSatir = function(d){ d = d || D.detay; return '<div class="k-zamansatir"><span>' + I('fa-calendar-day') + d.tarih.replace(/ \d{4}$/, '') + ' · ' + d.saat + '</span>' + (d.guncelleme ? '<span>' + I('fa-rotate') + d.guncelleme + ' Güncellendi</span>' : '') + '<span>' + I('fa-clock') + d.sure + '</span></div>'; };
  K.madde = function(l){ return '<ul class="k-madde">' + l.map(function(m){ return '<li>' + I('fa-check') + '<span>' + m + '</span></li>'; }).join('') + '</ul>'; };
  K.etkisi = function(m){ return '<div class="k-etkisi">' + I('fa-user') + '<div><b>Bana etkisi</b><p>' + m + '</p></div></div>'; };
  K.bolumKart = function(o){ return '<section class="k-bolum-kart"><div class="kb"><span class="ik">' + I(o.ikon) + '</span><h2>' + o.baslik + '</h2>' + (o.toplam ? '<span class="k-sayac">' + o.sira + ' / ' + o.toplam + '</span>' : '') + '</div>' + o.icerik +
    (o.sonraki ? '<button class="k-sir" type="button">Sıradaki: <b>' + o.sonraki + '</b>' + I('fa-arrow-right') + '</button>' : '') + '</section>'; };
  K.hmb = function(alt){ return '<button class="k-hmb" type="button" data-hm-ac><span class="ik">' + I('fa-layer-group') + '</span><span><b>Hikâye modunda oku</b><small>' + (alt || 'Bu haber 6 kartta · yaklaşık 1 dk') + '</small></span>' + I('fa-chevron-right') + '</button>'; };
  K.kaynaklar = function(l){ l = l || D.detay.kaynaklar; return K.bb({ baslik: 'Kaynaklar', ikon: 'fa-building-columns', sayi: l.length }) + '<div class="k-ray s10">' + l.map(function(k){ return '<a class="k-kaynak">' + I('fa-file-lines') + '<span><b>' + k.kurum + '</b><span>' + k.aciklama + '</span></span></a>'; }).join('') + '</div>'; };
  /* çizelge (liste kökü LS-C): saat sırası; saat ayracı; Canlı/Son Dakika kırmızı nokta, ilk haber sarı */
  K.cizelge = function(X, o){ o = o || {}; var s = '<div class="k-ic"><div class="k-cz-gun"><span>' + (o.gun || 'Bugün') + '</span><small>' + D.simdi.tarih.replace(' 2026', '') + ' ' + D.simdi.gun + (o.toplam ? ' · ' + o.toplam + ' haber' : '') + '</small></div>', dl = '';
    X.forEach(function(h, i){ var sa = h.saat.split('.')[0] + '.00', v = h.tur === 'Canlı' || h.tur === 'Son Dakika';
      if (sa !== dl) { dl = sa; s += '<div class="k-cz-dl"><b>' + sa + '</b></div>'; }
      s += '<div class="k-cz' + (i === 0 ? ' ilk' : '') + (v ? ' vur' : '') + '"><span class="sa">' + h.saat + '</span><span class="ci"></span><span class="no"></span><a class="' + (h.g ? '' : 'yazi') + '" href="' + K.git('detay') + '"><div>' + K.ustSatir(h, { saatsiz: true, ikon: o.ikon }) + '<h3>' + h.baslik + '</h3>' + K.meta([h.yazar, h.sure, h.izlenme]) + '</div>' + (h.g ? '<div class="gr"' + bg(h.g) + '></div>' : '') + '</a></div>'; });
    return s + '</div>'; };
  K.adimlar = function(l){ return '<ol class="k-adimlar">' + l.map(function(x){ return '<li><b>' + x[0] + '</b><span>' + x[1] + '</span></li>'; }).join('') + '</ol>'; };
  K.canliGiris = function(o){ return '<div class="k-cg' + (o.kilit ? ' kilit' : '') + (o.yeni ? ' yeni' : '') + '"><span class="sa">' + o.saat + '</span><span class="ci"></span><span class="no"></span><div>' +
    (o.kilit ? K.etiket('Kilit an', { tur: 'sari', ikon: 'fa-star' }) : '') + '<h3>' + o.baslik + '</h3>' + (o.metin ? '<p>' + o.metin + '</p>' : '') + (o.g ? '<div class="gr"' + bg(o.g) + '></div>' : '') + '</div></div>'; };
  K.yeniHap = function(m, cls){ return '<button type="button" class="k-yeni-hap' + (cls ? ' ' + cls : '') + '" data-basa>' + I('fa-arrow-up') + m + '</button>'; };
  K.yorum = function(y, r){ return '<article class="k-yorum' + (y.bekliyor ? ' is-bekliyor' : '') + '"><div class="k-yorum-h"><span class="k-avatar m notr">' + y.ad.charAt(0) + '</span><div class="w"><b>' + y.ad + '</b><span class="k-yorum-m">' + I('fa-award') + y.rozet + '<span class="nk">·</span>' + y.zaman + '</span></div>' +
    (y.bekliyor ? K.etiket('Onay bekliyor', { ikon: 'fa-hourglass-half' }) : K.ikonBtn({ ikon: 'fa-ellipsis', etiket: 'Yorum seçenekleri', tur: 'kucuk', attr: 'data-menu-ac="yorum"' })) + '</div><p>' + y.metin + '</p>' +
    (y.bekliyor ? '' : '<div class="k-yorum-a"><button type="button" data-begen aria-pressed="false">' + I('fa-thumbs-up') + '<span>Beğen</span><b class="tnum">' + y.begeni + '</b></button><button type="button" data-sayfa="bildir">' + I('fa-flag') + '<span>Bildir</span></button><button type="button">' + I('fa-comment') + '<span>Yanıtla</span></button></div>') +
    (r ? '<div class="k-yorum-y"><b>Dada Haber <span class="own">' + I('fa-pen-nib') + 'Editör</span></b><p>' + r.metin + '</p><small>' + r.zaman + '</small></div>' : '') + '</article>'; };
  K.yorumlar = function(o){ o = o || {}; var Y = o.Y || D.detay.yorumlar, begeni = 0, rozet = {}, liste = '', n = 0;
    Y.forEach(function(y, i){ begeni += y.begeni; rozet[y.rozet] = (rozet[y.rozet] || 0) + 1; if (y.rozet === 'Editör') return; if (o.sinir && n >= o.sinir) return; n++;
      liste += K.yorum(y, Y[i + 1] && Y[i + 1].rozet === 'Editör' ? Y[i + 1] : null); });
    var oz = '<div class="k-yorum-oz"><div class="s"><b class="tnum">' + Y.length + '</b><small>yorum</small><small class="ok">' + I('fa-thumbs-up') + begeni + ' beğeni</small><small>1 editör yanıtı</small></div><ul>' +
      Object.keys(rozet).map(function(k){ return '<li><span>' + k + '</span>' + K.ilerleme(rozet[k] / Y.length * 100, 'kalin') + '<span class="n tnum">' + rozet[k] + '</span></li>'; }).join('') + '</ul></div>';
    var yaz = K.uye ? K.btn({ metin: 'Yorum yaz', ikon: 'fa-pen', tur: 'birincil', boy: 'buyuk', tam: true, attr: 'data-sayfa="yorum"' }) + '<p class="k-not">' + I('fa-circle-info') + 'Yorumlar denetim sonrası yayınlanır.</p>'
      : K.btn({ metin: 'Yorum yapmak için giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil', boy: 'buyuk', tam: true, href: K.git('giris') }) + '<p class="k-not">' + I('fa-circle-info') + 'Habere yorum yazmak ve yorumlara katılmak için Dada Haber hesabına giriş yapman gerekiyor. Yorumları okumak serbest.</p>';
    var suz = '<div class="k-ray s8" data-tek style="margin:var(--b-16) calc(-1 * var(--kenar)) var(--b-4)">' + K.cip('Tümü', { secili: true, sayi: Y.length }) + K.cip('En çok beğenilen') + K.cip('Editör yanıtı', { sayi: 1 }) + K.cip('Düzenli okur', { sayi: rozet['Düzenli okur'] || 0 }) + '</div>';
    return K.bb({ baslik: 'Yorumlar', ikon: 'fa-comment', sayi: Y.length, yalin: true }) + oz + '<div style="margin-top:var(--b-16)">' + yaz + '</div>' + suz + liste + '<a class="k-bag" href="' + K.git('yorumlar') + '" style="width:100%;justify-content:space-between;color:var(--metin)">Bütün yorumları oku' + I('fa-chevron-right') + '</a>'; };
  K.tablo = function(o){ return '<div class="k-tablo-k"><table class="k-tablo' + (o.cls ? ' ' + o.cls : '') + '"><thead><tr>' + o.sutunlar.map(function(s){ return '<th>' + s + '</th>'; }).join('') + '</tr></thead><tbody>' +
    o.satirlar.map(function(r, i){ return '<tr' + (i === o.vurgu ? ' class="is-vurgu"' : '') + '>' + r.map(function(c, j){ return '<td' + (j === r.length - 1 && o.sonKalin ? ' class="p"' : '') + '>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>'; };
  /* takimlar: [{ad, kod, G, B, M, A, Y}] (public sözlük puan_tablosu biçimi); O, AV, P hesaplanır */
  K.puanTablosu = function(t, vurguKod){ var v = -1;
    var r = t.map(function(x, i){ if (x.kod === vurguKod) v = i; return ['<span class="tk"><em>' + (i + 1) + '</em><span class="ar">' + x.kod + '</span>' + x.ad + '</span>', x.G + x.B + x.M, x.G, x.B, x.M, (x.A - x.Y > 0 ? '+' : '') + (x.A - x.Y), 3 * x.G + x.B]; });
    return K.tablo({ sutunlar: ['Takım', 'O', 'G', 'B', 'M', 'AV', 'P'], satirlar: r, vurgu: v, sonKalin: true }); };
  K.skor = function(o){ return '<a class="k-skor' + (o.canli ? ' canli' : '') + '" href="' + K.git('mac') + '"><span class="dk">' + o.dk + '</span><span class="ev' + (o.kazanan === 'ev' ? ' kz' : '') + '">' + o.ev + '</span><span class="sk">' + o.skor + '</span><span class="dp' + (o.kazanan === 'dep' ? ' kz' : '') + '">' + o.dep + '</span></a>'; };

  /* ---------- hesap ---------- */
  K.ayar = function(o){ var sag = o.sag || 'ok', s = '';
    if (sag === 'anahtar') s = K.anahtar(o.on, { pasif: o.pasif, etiket: o.baslik });
    else if (sag === 'deger') s = '<span class="dg">' + (o.deger || '') + '</span>' + I('fa-chevron-right', 'ok');
    else if (sag === 'tik') s = I('fa-check', 'tik');
    else if (sag === 'rozet') s = K.rozet(o.deger) + I('fa-chevron-right', 'ok');
    else if (sag === 'ok') s = I('fa-chevron-right', 'ok');
    var t = '<span class="t"><b>' + o.baslik + '</b>' + (o.alt ? '<small>' + o.alt + '</small>' : '') + '</span>';
    var ik = o.ikon ? '<span class="ik' + (o.notr ? ' notr' : '') + '">' + I(o.ikon) + '</span>' : '';
    var cls = 'k-ayar' + (o.tehlike ? ' tehlike' : '') + (o.pasif ? ' is-pasif' : '') + (o.basili ? ' is-basili' : '');
    if (sag === 'anahtar') return '<label class="' + cls + '">' + ik + t + s + '</label>';
    if (sag === 'tik') return '<button type="button" class="' + cls + '" role="menuitemradio" aria-checked="' + !!o.secili + '">' + ik + t + s + '</button>';
    return '<a class="' + cls + '"' + href(o.href) + (o.attr ? ' ' + o.attr : '') + '>' + ik + t + s + '</a>'; };
  K.grup = function(b, satirlar, not){ return '<section class="k-grup">' + (b ? '<span class="k-grup-b">' + b + '</span>' : '') + '<div class="k-grup-k">' + satirlar.map(function(s){ return typeof s === 'string' ? s : K.ayar(s); }).join('') + '</div>' + (not ? '<p class="k-grup-n">' + not + '</p>' : '') + '</section>'; };
  K.profil = function(){ return K.uye
    ? '<div class="k-profil">' + K.avatar(D.uye.ad, 'l') + '<div class="t"><h1>' + D.uye.ad + '</h1><small>' + I('fa-fire') + D.uye.seri + ' günlük okuma serisi</small></div>' + K.ikonBtn({ ikon: 'fa-pen', etiket: 'Profili düzenle', tur: 'dolu', href: K.git('profil') }) + '</div>'
    : '<div class="k-ic"><div class="k-mh"><b class="mr">Merhaba</b><p>Haberleri kaydetmek, konuları takip etmek ve yorum yazmak için giriş yap.</p><div class="k-btn-grup">' + K.btn({ metin: 'Giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil', href: K.git('giris') }) + K.btn({ metin: 'Üye ol', tur: 'sade', href: K.git('uyeOl') }) + '</div></div></div>'; };
  K.istat = function(l){ return '<div class="k-istat">' + l.map(function(x){ return '<a' + href(x[2]) + '><b>' + x[0] + '</b><small>' + x[1] + '</small></a>'; }).join('') + '</div>'; };
  K.akordeon = function(b, m, acik){ return '<details class="k-akordeon"' + (acik ? ' open' : '') + '><summary><span>' + b + '</span>' + I('fa-chevron-down') + '</summary><p>' + m + '</p></details>'; };

  /* ---------- haller ---------- */
  K.BOS = {
    kaydedilen: { ikon: 'fa-bookmark', baslik: 'Henüz kaydettiğin haber yok', aciklama: 'Haberlerdeki kaydet simgesine dokun; burada toplanır, istersen çevrimdışı okursun.', eylem: { metin: 'Ana sayfaya dön', href: 'ana' } },
    indirilen: { ikon: 'fa-circle-down', baslik: 'İndirilen haber yok', aciklama: 'Kaydederken "Çevrimdışı indir"i aç; bağlantın olmadığında da okursun.' },
    bildirim: { ikon: 'fa-bell', baslik: 'Bildirim yok', aciklama: 'Son Dakika ve takip ettiğin konulardaki gelişmeler burada görünür.', eylem: { metin: 'Bildirim tercihleri', href: 'bildirimTercih', tur: 'sade' } },
    takip: { ikon: 'fa-heart', baslik: 'Henüz bir şey takip etmiyorsun', aciklama: 'Konu, takım ya da yazar seç; haberleri ana sayfanda öne çıksın.', eylem: { metin: 'Konu seç', href: 'konuSecimi' } },
    gecmis: { ikon: 'fa-clock-rotate-left', baslik: 'Geçmişin boş', aciklama: 'Okuduğun, izlediğin ve dinlediğin haberler burada görünür.' },
    sonuc: { ikon: 'fa-magnifying-glass', baslik: 'Sonuç bulunamadı', aciklama: 'Başka bir kelimeyle ara ya da yazımı kontrol et.', eylem: { metin: 'Dada\'ya Sor', ikon: 'fa-wand-magic-sparkles', href: 'dadayaSor', tur: 'sade' } },
    yorum: { ikon: 'fa-comment', baslik: 'Henüz yorum yok', aciklama: 'İlk yorumu sen yaz.', eylem: { metin: 'Yorum yaz', ikon: 'fa-pen' } },
    liste: { ikon: 'fa-newspaper', baslik: 'Bu alt konuda bugün haber yok', aciklama: 'Yeni haber gelince burada görünür.', eylem: { metin: 'Tümü\'ne dön', tur: 'sade' } },
    senin: { ikon: 'fa-heart', baslik: 'Takip ettiklerinde bugün haber yok', aciklama: 'Yeni konu ekle; ana sayfan daha çok sana göre olsun.', eylem: { metin: 'Konu ekle', ikon: 'fa-plus', href: 'tercihler' } }
  };
  function eylem(e, varsayilan){ if (!e) return ''; if (typeof e === 'string') e = { metin: e };
    return K.btn({ metin: e.metin, ikon: e.ikon, tur: e.tur || varsayilan, boy: 'buyuk', tam: e.tur !== 'metin', href: e.href ? (K.YOL[e.href] ? K.git(e.href) : e.href) : null, durum: e.durum, pasif: e.pasif, attr: e.attr }); }
  K.bos = function(o, ek){ if (typeof o === 'string') o = Object.assign({}, K.BOS[o], ek); o = o || {};
    return '<section class="k-bos' + (o.hata ? ' hata' : '') + (o.tam ? ' tam' : '') + '"><span class="ik">' + I(o.ikon || 'fa-newspaper') + '</span><h2>' + o.baslik + '</h2>' + (o.aciklama ? '<p>' + o.aciklama + '</p>' : '') +
      (o.eylem || o.ikinci ? '<div class="k-bos-a">' + eylem(o.eylem, 'birincil') + eylem(o.ikinci, 'metin') + '</div>' : '') + (o.ek || '') + (o.kod ? '<span class="kod">' + o.kod + '</span>' : '') + '</section>'; };
  K.HATA = {
    cevrimdisi: { ikon: 'fa-plug-circle-xmark', baslik: 'Bağlantı yok', aciklama: 'İnternete bağlanınca haberler yenilenir. Bu arada indirdiğin haberleri okuyabilirsin.', eylem: { metin: 'Yeniden dene', ikon: 'fa-rotate-right', attr: 'data-yeniden' }, ikinci: { metin: 'Kaydedilenleri oku', href: 'kaydedilenler' } },
    sunucu: { ikon: 'fa-triangle-exclamation', baslik: 'Bir şeyler ters gitti', aciklama: 'Sorun bizde, senin bağlantında değil. Birazdan yeniden dene.', eylem: { metin: 'Yeniden dene', ikon: 'fa-rotate-right', attr: 'data-yeniden' }, ikinci: { metin: 'Ana sayfaya dön', href: 'ana' }, kod: 'Hata kodu 500' },
    'zaman-asimi': { ikon: 'fa-hourglass-half', baslik: 'Yanıt gecikti', aciklama: 'Bağlantın yavaş olabilir. Biraz bekleyip yeniden dene.', eylem: { metin: 'Yeniden dene', ikon: 'fa-rotate-right', attr: 'data-yeniden' } },
    bulunamadi: { ikon: 'fa-file-circle-xmark', baslik: 'Bu içerik bulunamadı', aciklama: 'Bağlantı değişmiş ya da içerik kaldırılmış olabilir. Aradığını bulmak için ara ya da bir bölüme geç.', eylem: { metin: 'Ara', ikon: 'fa-magnifying-glass', href: 'arama' }, cipler: true },
    kaldirildi: { ikon: 'fa-ban', baslik: 'Bu haber yayından kaldırıldı', aciklama: 'Haber, yayın ilkelerimiz gereği kaldırıldı.', eylem: { metin: 'Bölüme dön', href: 'liste', tur: 'sade' } },
    web: { ikon: 'fa-globe', baslik: 'Bu haber uygulamada yayımlanmıyor', aciklama: 'Haber yalnız web sitemizde. Tarayıcıda açabilirsin.', eylem: { metin: 'Web\'de aç', ikon: 'fa-arrow-up-right-from-square' }, ikinci: { metin: 'Ana sayfaya dön', href: 'ana' } },
    'cok-istek': { ikon: 'fa-stopwatch', baslik: 'Biraz yavaşlayalım', aciklama: 'Kısa sürede çok fazla istek geldi. Az sonra yeniden deneyebilirsin.', eylem: { metin: 'Yeniden dene · 0:30', pasif: true } },
    erisim: { ikon: 'fa-lock', baslik: 'Bu içeriğe erişilemiyor', aciklama: 'İçerik bulunduğun yerde ya da bu hesapla açılamıyor.', eylem: { metin: 'Ana sayfaya dön', href: 'ana', tur: 'sade' } },
    bakim: { ikon: 'fa-screwdriver-wrench', baslik: 'Kısa bir bakımdayız', aciklama: 'Uygulamayı iyileştiriyoruz. Bu sırada kaydettiğin haberleri okuyabilirsin.', eylem: { metin: 'Yeniden dene', ikon: 'fa-rotate-right', attr: 'data-yeniden' }, ikinci: { metin: 'Kaydedilenleri oku', href: 'kaydedilenler' } },
    guncelleme: { ikon: 'fa-circle-up', baslik: 'Yeni sürüm hazır', aciklama: 'Dada Haber\'i kullanmaya devam etmek için uygulamayı güncelle.', eylem: { metin: 'Güncelle', ikon: 'fa-download' } }
  };
  K.hata = function(o){ o = o || {}; var h = Object.assign({}, K.HATA[o.tur || 'sunucu']); h.hata = o.tur !== 'guncelleme'; h.tam = o.tam;
    if (o.deneniyor && h.eylem) h.eylem = Object.assign({}, h.eylem, { metin: 'Deneniyor', durum: 'yukleniyor' });
    if (h.cipler) h.ek = '<div class="k-ray s8">' + D.bolumler.map(function(b){ return K.cip(b.ad, { ikon: b.ikon, attr: 'data-href="' + K.git('liste') + '"' }); }).join('') + '</div>';
    return K.bos(h); };
  K.blokHata = function(b){ return '<div class="k-blok-hata">' + I('fa-triangle-exclamation') + '<span><b>' + (b || 'Bu bölüm yüklenemedi') + '</b><small>Sayfanın geri kalanı çalışıyor.</small></span>' + K.btn({ metin: 'Yeniden dene', boy: 'kucuk', tur: 'sade', attr: 'data-yeniden' }) + '</div>'; };
  function cz(w, h, cls, st){ return '<i class="k-isk' + (cls ? ' ' + cls : '') + '" style="width:' + w + ';height:' + h + 'px' + (st ? ';' + st : '') + '"></i>'; }
  K.iskelet = function(tur, n){ n = n || 1; var o = '', i;
    var satir = '<div class="k-isk-satir"><div class="k-isk-grup">' + cz('40%', 12) + cz('100%', 16) + cz('70%', 16) + cz('50%', 11) + '</div>' + cz('88px', 88) + '</div>';
    var kart = '<div style="width:300px;flex:none">' + cz('100%', 188, 'kontrol') + '<div class="k-isk-grup" style="margin-top:var(--b-12)">' + cz('100%', 18) + cz('80%', 18) + cz('45%', 11) + '</div></div>';
    if (tur === 'satir') { for (i = 0; i < n; i++) o += satir; return '<div aria-label="Yükleniyor" role="status">' + o + '</div>'; }
    if (tur === 'kart') return kart;
    if (tur === 'ray') { for (i = 0; i < Math.max(2, n); i++) o += kart; return '<div class="k-ray serbest" role="status" aria-label="Yükleniyor">' + o + '</div>'; }
    if (tur === 'hero') return '<div class="k-kubbe" role="status" aria-label="Yükleniyor"><span class="k-hilal" style="background:var(--cizgi)"></span><div class="k-hero isk" style="background:var(--zemin-2)"><div class="k-isk-grup">' + cz('34%', 14) + cz('100%', 26) + cz('86%', 26) + cz('40%', 13) + '</div></div></div>';
    if (tur === 'metin') { for (i = 0; i < n; i++) o += cz(i % 4 === 3 ? '62%' : '100%', 15); return '<div class="k-isk-grup" role="status" aria-label="Yükleniyor">' + o + '</div>'; }
    if (tur === 'hikaye') { for (i = 0; i < 6; i++) o += '<span style="width:66px;flex:none;display:grid;justify-items:center;gap:var(--b-12)">' + cz('62px', 62, 'daire', 'margin-top:var(--b-4)') + cz('44px', 10) + '</span>'; return '<div class="k-hk" role="status" aria-label="Yükleniyor">' + o + '</div>'; }
    if (tur === 'detay') return '<div role="status" aria-label="Yükleniyor">' + cz('100%', 400) + '<div class="k-yaprak" style="padding:var(--b-24) var(--kenar)"><div class="k-isk-grup">' + cz('60%', 12) + cz('100%', 18) + cz('100%', 18) + cz('70%', 18) + '</div><div style="margin-top:var(--b-16)">' + cz('100%', 54, 'kontrol') + '</div><div class="k-isk-grup" style="margin-top:var(--b-16)">' + cz('100%', 15) + cz('100%', 15) + cz('100%', 15) + cz('62%', 15) + '</div></div></div>';
    if (tur === 'akis') return '<section class="k-akis-tam" style="background:#141414" role="status" aria-label="Yükleniyor"><div class="k-akis-ic"><div class="k-isk-grup">' + cz('110px', 30, 'koyu') + cz('100%', 26, 'koyu') + cz('70%', 26, 'koyu') + '</div></div></section>';
    if (tur === 'bolum') return '<div role="status" aria-label="Yükleniyor"><div class="k-bb"><span style="display:flex;gap:var(--b-12);align-items:center">' + cz('30px', 30) + cz('120px', 20) + '</span>' + cz('48px', 14) + '</div><div class="k-satirlar">' + satir + satir + '</div></div>';
    if (tur === 'yorum') { for (i = 0; i < n; i++) o += '<div class="k-yorum"><div class="k-yorum-h">' + cz('44px', 44, 'daire') + '<div class="k-isk-grup" style="flex:1">' + cz('40%', 14) + cz('28%', 11) + '</div></div><div class="k-isk-grup" style="margin-top:var(--b-12)">' + cz('100%', 14) + cz('84%', 14) + '</div></div>'; return '<div role="status" aria-label="Yükleniyor">' + o + '</div>'; }
    if (tur === 'liste') return '<div role="status" aria-label="Yükleniyor">' + cz('100%', 224, '', '') + '<div class="k-yaprak"><div style="display:flex;gap:var(--b-8);padding:var(--b-12) var(--kenar)">' + cz('64px', 36) + cz('76px', 36) + cz('70px', 36) + cz('70px', 36) + '</div><div class="k-satirlar">' + satir + satir + satir + '</div></div></div>';
    return satir; };
  K.yenile = function(hal){ var h = hal || 'cekiliyor', m = { cekiliyor: ['fa-arrow-down', 'Yenilemek için çek'], birak: ['fa-arrow-down', 'Bırak, yenilensin'], yenileniyor: ['fa-circle-notch fa-spin', 'Yenileniyor'], bitti: ['fa-check', 'Güncel · ' + D.simdi.saat] }[h];
    return '<div class="k-yenile ' + h + '" role="status"><span class="ic">' + I(m[0]) + '</span>' + m[1] + '</div>'; };
  K.dahaFazla = function(hal, ne){ var h = hal || 'yukleniyor', n = ne || 'haber'; /* ne: 'haber' | 'video' | 'yorum' | 'bölüm' … */
    if (h === 'son') return '<div class="k-dahafazla son"><b>Hepsi bu kadar</b>' + K.btn({ metin: 'Başa dön', ikon: 'fa-arrow-up', boy: 'kucuk', tur: 'sade', attr: 'data-basa' }) + '</div>';
    if (h === 'hata') return '<div class="k-dahafazla hata"><b>Daha fazla ' + n + ' yüklenemedi</b>' + K.btn({ metin: 'Yeniden dene', ikon: 'fa-rotate-right', boy: 'kucuk', tur: 'sade', attr: 'data-yeniden' }) + '</div>';
    return '<div class="k-dahafazla" role="status"><span class="k-don">' + I('fa-circle-notch', 'fa-spin') + 'Daha fazla ' + n + ' yükleniyor</span></div>'; };
  K.izin = function(o){ o = o || {}; var t = o.tur || 'bildirim', m;
    if (t === 'bildirim') m = { ikon: 'fa-bell', b: 'Önemli gelişmeleri kaçırma', p: 'Bildirimleri açarsan yalnız seçtiğin konularda haber veririz; istediğin zaman kapatırsın.',
      l: [['fa-bolt', 'Son Dakika', 'Gündemi değiştiren gelişmeler, anında'], ['fa-futbol', 'Takımının maçı', D.mac.ev + ' maçında gol ve sonuç'], ['fa-newspaper', 'Günün baskıları', 'Sabah, Öğleden Sonra ve Akşam Baskısı']], e: 'Bildirimleri aç' };
    else if (t === 'konum') m = { ikon: 'fa-location-dot', b: 'Bulunduğun şehre göre', p: 'Konumunu yalnız hava durumu ve namaz vakti için kullanırız; kaydetmeyiz.',
      l: [[D.hava.ikon, 'Hava durumu', D.hava.sehir + ' · ' + D.hava.derece + '° ' + D.hava.durum], ['fa-mosque', 'Namaz vakti', D.namaz.siradaki + ' ezanı ' + D.namaz.saat]], e: 'Konumu kullan', e2: 'Şehri kendim seçeyim' };
    else m = { ikon: 'fa-microphone', b: 'Sesle ara', p: 'Mikrofonu yalnız sen düğmeye bastığında, aramanı yazıya çevirmek için kullanırız.', l: [['fa-magnifying-glass', 'Konuşarak ara', 'Haber, yazar ya da konu söyle']], e: 'Mikrofona izin ver' };
    if (o.red) return '<section class="k-izin red"><span class="ik">' + I(m.ikon) + '</span><h1>' + ({ bildirim: 'Bildirimler kapalı', konum: 'Konum izni kapalı', mikrofon: 'Mikrofon izni kapalı' }[t]) + '</h1><p>' +
      ({ bildirim: 'İzni sonradan telefonun ayarlarından açabilirsin. Uygulama bildirimsiz de çalışır.', konum: 'Şehrini elle seçebilir ya da izni telefonun ayarlarından açabilirsin.', mikrofon: 'Yazarak arayabilir ya da izni telefonun ayarlarından açabilirsin.' }[t]) + '</p>' +
      '<div class="k-yol"><span>' + I('fa-gear') + 'Ayarlar</span>' + I('fa-chevron-right', 'ok') + '<span>Dada Haber</span>' + I('fa-chevron-right', 'ok') + '<span>' + ({ bildirim: 'Bildirimler', konum: 'Konum', mikrofon: 'Mikrofon' }[t]) + '</span></div>' +
      '<div class="a">' + K.btn({ metin: 'Ayarlar\'a git', ikon: 'fa-gear', tur: 'birincil', boy: 'buyuk', tam: true }) + K.btn({ metin: { bildirim: 'Şimdi değil', konum: 'Şehri elle seç', mikrofon: 'Yazarak ara' }[t], tur: 'metin', tam: true }) + '</div></section>';
    return '<section class="k-izin"><span class="ik">' + I(m.ikon) + (t === 'bildirim' ? K.rozet(3) : '') + '</span><h1>' + m.b + '</h1><p>' + m.p + '</p><ul>' + m.l.map(function(x){ return '<li>' + I(x[0]) + '<span><b>' + x[1] + '</b><small>' + x[2] + '</small></span></li>'; }).join('') + '</ul>' +
      '<div class="a">' + K.btn({ metin: m.e, tur: 'birincil', boy: 'buyuk', tam: true }) + K.btn({ metin: m.e2 || 'Şimdi değil', tur: 'metin', tam: true }) + '</div></section>'; };
  K.serit = function(o){ return '<div class="k-serit' + (o.tur ? ' ' + o.tur : '') + '" role="status">' + I(o.ikon || 'fa-circle-info') + '<span>' + (o.alt ? '<b>' + o.metin + '</b><small>' + o.alt + '</small>' : o.metin) + '</span>' + (o.eylem ? '<button type="button">' + o.eylem + '</button>' : '') + '</div>'; };

  /* ---------- oynatıcılar ---------- */
  K.oynaticiTam = function(o){ o = o || {}; var t = o.tur || 'spiker', s = D.spiker, p = D.podcast[0], dur = o.durum === 'dur';
    var v = t === 'podcast' ? { g: p.g, ust: 'Podcast', alt: p.seri, kat: p.seri, b: p.baslik, a: p.konuk + ' · ' + p.no, gec: '12:40', top: p.sure, d: 26 }
      : { g: s.gorsel, ust: 'Dada Spiker', alt: s.bulten, kat: 'Dada Spiker', b: s.sirada[0], a: s.bulten + ' · 1 / 3', gec: '0:52', top: s.sure, d: 29, canli: true };
    return '<section class="k-oy' + (dur ? ' dur' : '') + (o.yerinde ? ' yerinde' : '') + (o.acik ? ' acik' : '') + '" role="dialog" aria-label="Oynatıcı"><div class="u">' + K.ikonBtn({ ikon: 'fa-chevron-down', etiket: 'Küçült', attr: 'data-kapat' }) + '<span class="t">' + v.ust + '<b>' + v.alt + '</b></span>' + K.ikonBtn({ ikon: 'fa-ellipsis', etiket: 'Seçenekler' }) + '</div>' +
      '<div class="kapak"' + bg(v.g) + '>' + (v.canli ? K.canli('Yayında', { kucuk: true }) : '') + '</div>' +
      '<div class="bas"><div><small><span class="k-dalga"><i></i><i></i><i></i></span>' + v.kat + '</small><h2>' + v.b + '</h2><p>' + v.a + '</p></div>' + K.ikonBtn({ ikon: 'fa-bookmark', etiket: 'Kaydet', tur: 'dolu', secili: false }) + '</div>' +
      '<div class="ilr">' + K.kaydirac({ deger: v.d, sari: true, etiket: 'Konum' }) + '</div><div class="sure"><span>' + v.gec + '</span><span>' + v.top + '</span></div>' +
      '<div class="dn"><button type="button" class="hiz" data-sayfa="hiz" aria-label="Oynatma hızı">1×</button><button type="button" class="k-atla" aria-label="15 sn geri">' + I('fa-rotate-left') + '<b>15</b></button>' +
      '<button type="button" class="ana" aria-label="' + (dur ? 'Oynat' : 'Duraklat') + '">' + I(dur ? 'fa-play' : 'fa-pause') + '</button><button type="button" class="k-atla" aria-label="15 sn ileri">' + I('fa-rotate-right') + '<b>15</b></button>' +
      K.ikonBtn({ ikon: t === 'podcast' ? 'fa-circle-down' : 'fa-forward-step', etiket: t === 'podcast' ? 'İndir' : 'Sıradaki' }) + '</div>' +
      '<div class="alt">' + K.btn({ metin: 'Deşifre', ikon: 'fa-file-lines' }) + K.btn({ metin: t === 'podcast' ? 'Bölüm notları' : 'Sıradakiler · 2', ikon: 'fa-list-ul' }) + '</div></section>'; };
  K.video = function(o){ o = o || {}; var d = o.durum || 'dur', g = o.g || D.detay.g, sure = o.sure || D.detay.video, gec = o.gecen || '0:48';
    var vd = { yukleniyor: I('fa-circle-notch', 'fa-spin'), bitti: '<button type="button" class="k-ikon cam" aria-label="Yeniden oynat" style="width:56px;height:56px">' + I('fa-rotate-right') + '</button>Video bitti<small>Sıradaki: ' + D.akis.liste[0].baslik + '</small>',
      hata: I('fa-triangle-exclamation') + 'Video oynatılamadı<small>Bağlantını kontrol et.</small>' + K.btn({ metin: 'Yeniden dene', ikon: 'fa-rotate-right', boy: 'kucuk', tur: 'beyaz' }),
      mobil: '<button type="button" class="k-ikon sari" aria-label="Oynat" style="width:60px;height:60px;font-size:22px">' + I('fa-play') + '</button>Dokun, oynat<small>Mobil veride videolar kendiliğinden oynamaz · ' + sure + '</small>' }[d] || '';
    var oyn = d === 'oynuyor';
    return '<div class="k-video' + (o.yatay ? ' yatay' : '') + (o.yuvarlak ? ' yuvarlak' : '') + ' is-' + d + '"' + bg(g) + '>' +
      (o.yatay ? '<div class="vb">' + K.ikonBtn({ ikon: 'fa-chevron-down', etiket: 'Küçült' }) + '<span class="tek">' + (o.baslik || D.detay.baslik) + '</span></div>' : '') +
      '<div class="vu">' + K.ikonBtn({ ikon: 'fa-closed-captioning', etiket: 'Altyazı', secili: false }) + K.ikonBtn({ ikon: 'fa-volume-high', etiket: 'Ses' }) + '</div>' +
      '<div class="vo"><button type="button" class="k-atla" aria-label="10 sn geri">' + I('fa-rotate-left') + '<b>10</b></button>' + K.ikonBtn({ ikon: oyn ? 'fa-pause' : 'fa-play', etiket: oyn ? 'Duraklat' : 'Oynat', tur: 'cam ana' }) + '<button type="button" class="k-atla" aria-label="10 sn ileri">' + I('fa-rotate-right') + '<b>10</b></button></div>' +
      '<div class="va"><span>' + gec + '</span>' + K.kaydirac({ deger: 36, etiket: 'Konum' }) + '<span>' + sure + '</span>' + K.ikonBtn({ ikon: o.yatay ? 'fa-compress' : 'fa-expand', etiket: o.yatay ? 'Tam ekrandan çık' : 'Tam ekran' }) + '</div>' +
      '<div class="vd">' + vd + '</div><div class="ince"><i style="width:36%"></i></div></div>'; };
  var DALGA = [14, 26, 38, 22, 44, 30, 18, 36, 46, 28, 16, 34, 42, 24, 12, 30, 40, 20, 32, 14];
  K.ses = function(hal){ var h = hal || 'hazir', d = '<div class="k-ses-dalga" aria-hidden="true">' + DALGA.map(function(x, i){ return '<i style="--h:' + x + 'px;--g:' + (i % 5 * .09) + 's"></i>'; }).join('') + '</div>';
    var m = { hazir: ['Dinliyorum', 'Haber, yazar ya da konu söyle', 1, '', 'fa-microphone'],
      izin: ['Mikrofon izni', 'Sesli arama için mikrofona erişmemiz gerekiyor', 1, '', 'fa-microphone'],
      kayit: ['Dinliyorum', 'asgari ücret toplantısı ne zaman', 0, '0:04', 'fa-stop'],
      dur: ['Duraklatıldı', 'asgari ücret toplantısı ne zaman', 0, '0:04', 'fa-microphone'],
      gonder: ['Aranıyor', 'asgari ücret toplantısı ne zaman', 0, '', 'fa-circle-notch fa-spin'],
      hata: ['Anlaşılamadı', 'Söylediğini anlayamadım. Biraz daha yakından konuş.', 1, '', 'fa-microphone'],
      red: ['Mikrofon izni kapalı', 'Ayarlar\'dan açabilir ya da yazarak arayabilirsin.', 1, '', 'fa-microphone-slash'] }[h];
    var a = { hazir: '', izin: K.btn({ metin: 'Devam', tur: 'birincil' }),
      kayit: '', dur: K.btn({ metin: 'İptal', tur: 'sade', attr: 'data-kapat' }) + K.btn({ metin: 'Devam', ikon: 'fa-microphone', tur: 'sade' }) + K.btn({ metin: 'Gönder', ikon: 'fa-paper-plane', tur: 'birincil' }),
      gonder: '', hata: K.btn({ metin: 'Yazarak ara', tur: 'sade', attr: 'data-kapat' }) + K.btn({ metin: 'Tekrar dene', ikon: 'fa-rotate-right', tur: 'birincil' }),
      red: K.btn({ metin: 'Yazarak ara', tur: 'sade', attr: 'data-kapat' }) + K.btn({ metin: 'Ayarlar\'a git', ikon: 'fa-gear', tur: 'birincil' }) }[h];
    return '<div class="k-ses ' + h + '" role="status"><span class="ip">' + m[0] + '</span><p class="ct' + (m[2] ? ' soluk' : '') + '">' + m[1] + '</p>' + d + '<span class="sure">' + m[3] + '</span>' +
      '<button type="button" class="mik" aria-label="' + (h === 'kayit' ? 'Durdur' : 'Konuş') + '">' + I(m[4]) + '</button>' + (a ? '<div class="a">' + a + '</div>' : '') + '</div>'; };

  /* ---------- iskele ---------- */
  var KISA = {
    ara: function(){ return { ikon: 'fa-magnifying-glass', etiket: 'Ara', href: K.git('arama') }; },
    paylas: function(){ return { ikon: 'fa-share-nodes', etiket: 'Paylaş', attr: 'data-sayfa="paylas"' }; },
    kaydet: function(){ return { ikon: 'fa-bookmark', etiket: 'Kaydet', secili: false, attr: 'data-kaydet' }; },
    menu: function(){ return { ikon: 'fa-bars', etiket: 'Menü', attr: 'data-menu' }; },
    daha: function(){ return { ikon: 'fa-ellipsis', etiket: 'Seçenekler', attr: 'data-menu-ac="klasor"' }; },
    sirala: function(){ return { ikon: 'fa-arrow-down-wide-short', etiket: 'Sırala', attr: 'data-menu-ac="siralama"' }; },
    suzgec: function(){ return { ikon: 'fa-sliders', etiket: 'Süzgeç', attr: 'data-sayfa="suzgec"' }; },
    ayarlar: function(){ return { ikon: 'fa-gear', etiket: 'Ayarlar', href: K.git('ayarlar') }; },
    hesap: function(){ return K.uye ? { av: D.uye.ad, etiket: 'Hesabım', href: K.git('hesap') } : { ikon: 'fa-right-to-bracket', etiket: 'Giriş yap', href: K.git('giris') }; }
  };
  function ekranBul(o){ return o.ekran || (o.yer || document).querySelector('.ekran') || document.getElementById('ekran'); }
  K.ustCubuk = function(o){ o = o || {}; var tur = o.tur || 'duz';
    var geri = o.geri ? '<a class="k-ikon" ' + (typeof o.geri === 'string' ? 'href="' + o.geri + '"' : 'data-geri') + ' aria-label="Geri">' + I('fa-chevron-left') + '</a>' : '';
    var ey = (o.eylemler || []).map(function(e){ return K.ikonBtn(typeof e === 'string' ? KISA[e]() : e); }).join('');
    var ic = tur === 'ara' ? geri + K.ara(Object.assign({ odak: true }, o.ara)) + (o.iptal ? '<button type="button" class="k-btn metin notr" data-geri>Vazgeç</button>' : '')
      : geri + (o.logo ? '<span class="logo" role="img" aria-label="Dada Haber"></span>' : '') + (o.baslik ? '<span class="k-ub-b"><span>' + o.baslik + '</span></span>' : '') + '<span class="k-ub-s">' + ey + '</span>' + (o.ilerleme ? '<span class="k-ub-il"></span>' : '');
    var u = ekle(o.yer, '<header class="k-ub ' + tur + (o.buyuk ? ' buyuk' : '') + (o.dar ? ' dar' : '') + (o.golgeli ? ' golgeli' : '') + '">' + ic + '</header>');
    if (o.gorsel) u.style.setProperty('--k-ub-g', G(o.gorsel));
    if (tur === 'foto' && !o.yer) document.body.setAttribute('data-durum', 'acik');
    var e = ekranBul(o), esik = o.esik != null ? o.esik : (tur === 'foto' ? 130 : o.buyuk ? 44 : 4), il = u.querySelector('.k-ub-il');
    if (e) { var kay = function(){ var t = e.scrollTop; u.classList.toggle(tur === 'foto' ? 'dar' : 'golgeli', t > esik || !!o.dar);
        if (il) il.style.width = Math.min(100, t / Math.max(1, e.scrollHeight - e.clientHeight) * 100) + '%'; };
      e.addEventListener('scroll', kay, { passive: true }); kay(); }
    return u; };
  K.altCubuk = function(etkin, o){ o = o || {}; var r = o.rozet || {};
    var S = [['ana', 'Ana Sayfa', 'fa-house', K.git('ana')], ['bolum', 'Bölümler', 'fa-shapes', K.git('bolumler')], ['akis', 'Akış', 'fa-mobile-screen-button', K.git('akis')], ['dinle', 'Dinle', 'fa-headphones', K.git('dinle')], ['hesap', 'Hesabım', 'fa-circle-user', K.git('hesap')]];
    return ekle(o.yer, '<nav class="k-ac' + (o.koyu ? ' koyu' : '') + '" aria-label="Alt gezinme">' + S.map(function(s){
      var ic = s[0] === 'akis' ? '<span class="yuv">' + I(s[2]) + '</span>' : I(s[2]);
      var cn = s[0] === 'dinle' && K.spikerCanli() ? '<span class="cn-n" aria-label="Spiker yayında"></span>' : '';
      return '<a class="' + (s[0] === 'akis' ? 'akis' : '') + '" href="' + s[3] + '"' + (s[0] === etkin ? ' aria-current="page"' : '') + '>' + ic + s[1] + cn + (r[s[0]] ? K.rozet(r[s[0]]) : '') + '</a>'; }).join('') + '</nav>'); };
  K.okuma = function(o){ o = o || {}; var d = D.detay, dn = o.dinle === undefined ? d.dinle : o.dinle, yc = o.yorum === undefined ? d.yorumSayisi : o.yorum; /* o.dinle: süre metni ya da '' (süresiz); o.yorum: sayı */
    return ekle(o.yer, '<nav class="k-okuma" aria-label="Okuma çubuğu"><button class="dinle" type="button" data-dinle>' + I('fa-headphones') + 'Dinle' + (dn ? ' · ' + dn : '') + '</button><button class="hmd" type="button" data-hm-ac aria-label="Hikâye modunda oku">' + I('fa-layer-group') + '</button>' +
      '<button type="button" aria-label="Yorumlar, ' + yc + '" data-yorumlara>' + I('fa-comment') + K.rozet(yc, 'sari') + '</button><button type="button" aria-label="Paylaş" data-sayfa="paylas">' + I('fa-share-nodes') + '</button><button class="aa" type="button" aria-label="Yazı boyutu" data-sayfa="yazi">Aa</button></nav>'); };

  /* Spiker mini oynatıcı: hibrit.js ile aynı anahtar ve davranış; kökler ve yeni ekranlar arasında çalmayı sürdürür */
  /* K39: varsayılan KAPALI; yalnız ?calan=1 (Spiker) / ?calan=dinle ya da bu sayfada oynat'a basılınca görünür; çalarken uygulama içi bağlantılar calan'ı taşır */
  var ANAHTAR = 'dada-spiker', TOPLAM = 180000, mo, zam, _mo = null, gorunur = false;
  function oku(){ try { return JSON.parse(sessionStorage.getItem(ANAHTAR) || 'null'); } catch (e) { return _mo; } }
  function yaz(v){ _mo = v; try { if (v) sessionStorage.setItem(ANAHTAR, JSON.stringify(v)); else sessionStorage.removeItem(ANAHTAR); } catch (e) {} }
  function gecen(s){ return s.dur != null ? s.dur : (Date.now() - s.bas); }
  function guncelle(){ var s = oku(); if (!mo) return;
    var ust = mo.parentNode || document.body;
    mo.classList.toggle('alt-yok', !ust.querySelector('.k-ac') && !ust.querySelector('.k-okuma'));
    mo.classList.toggle('okuma-ustu', !!ust.querySelector('.k-okuma'));
    var ac = !!s && gorunur; mo.classList.toggle('acik', ac); if (!ac) return;
    var g = gecen(s) % TOPLAM, i = Math.min(2, Math.floor(g / (TOPLAM / 3))), dn = s.tur === 'dinle';
    mo.classList.toggle('dur', s.dur != null); mo.classList.toggle('dinle', dn);
    mo.querySelector('.yuz').style.backgroundImage = G(dn ? D.detay.g : D.spiker.gorsel);
    mo.querySelector('.t').setAttribute('href', K.git(dn ? 'detay' : 'spiker'));
    mo.querySelector('.t b').textContent = dn ? D.detay.baslik : D.spiker.sirada[i];
    mo.querySelector('.t small .y').innerHTML = dn ? I('fa-headphones') + 'Dinle · ' + D.detay.dinle : I('fa-radio') + 'Dada Spiker · ' + D.spiker.bulten + ' · ' + (i + 1) + ' / 3';
    mo.setAttribute('aria-label', dn ? 'Dinle oynatıcı' : 'Spiker oynatıcı');
    mo.querySelector('.il i').style.width = (g / TOPLAM * 100).toFixed(1) + '%';
    mo.querySelector('[data-mo-oynat] i').className = 'fa-solid ' + (s.dur != null ? 'fa-play' : 'fa-pause'); }
  /* tek oynatıcı kuralı: başka ses başlayınca Spiker duraklar (Akış sesi, video, podcast) */
  K.spikerDurdur = function(){ var s = oku(); if (s && s.dur == null){ yaz({ bas: s.bas, dur: Date.now() - s.bas, tur: s.tur }); guncelle(); return true; } return false; };
  K.spikerCanli = function(){ return Q.get('spiker') !== '0'; }; /* prototipin "şimdi"si 16.05: 16.00 bülteni yayında; ?spiker=0 yayın yok */
  /* tam ekran görsel görüntüleyici (kapak, galeri karesi): K.goruntuleyici({ g, altyazi, sira, toplam, yer }) → öğe; × ya da aşağı kaydır kapatır, dokununca bilgiler gizlenir */
  K.goruntuleyici = function(o){ o = o || {};
    var v = K.el('<div class="k-goruntuleyici" role="dialog" aria-label="Görsel"><div class="u">' + K.ikonBtn({ ikon: 'fa-xmark', etiket: 'Kapat', tur: 'cam', attr: 'data-gor-kapat' }) +
      '<span class="k-sayac">' + (o.sira || 1) + ' / ' + (o.toplam || 1) + '</span>' + K.ikonBtn({ ikon: 'fa-share-nodes', etiket: 'Paylaş', tur: 'cam', attr: 'data-sayfa="paylas"' }) + '</div>' +
      '<div class="gr" style="background-image:' + G(o.g) + '"></div><div class="alt">' + (o.altyazi || '') + '<small>Kapatmak için aşağı kaydır</small></div></div>');
    (o.yer || document.body).appendChild(v); document.body.setAttribute('data-durum', 'acik');
    var y0 = null;
    v.addEventListener('pointerdown', function(ev){ y0 = ev.clientY; });
    v.addEventListener('pointerup', function(ev){ if (y0 != null && ev.clientY - y0 > 80) v.remove(); y0 = null; });
    v.addEventListener('click', function(ev){ if (ev.target.closest('[data-gor-kapat]')) v.remove(); else if (!ev.target.closest('.u,.alt')) v.classList.toggle('is-yakin'); });
    return v;
  };
  function baslat(tur){ var s = oku(); if (!s || (s.tur || 'spiker') !== tur) yaz({ bas: Date.now(), dur: null, tur: tur }); else if (s.dur != null) yaz({ bas: Date.now() - s.dur, dur: null, tur: tur }); gorunur = true; guncelle(); }
  K.spikerBaslat = function(){ baslat('spiker'); };
  K.dinleBaslat = function(){ baslat('dinle'); };
  K.oynatici = function(o){ o = o || {};
    if (o.yerinde) return '<div class="k-mo yerinde' + (o.dur ? ' dur' : '') + (o.hata ? ' hata' : '') + '"><span class="yuz"' + bg(D.spiker.gorsel) + '></span><span class="t"><b>' + D.spiker.sirada[0] + '</b><small>' + (o.hata ? I('fa-triangle-exclamation') + 'Ses yüklenemedi' : '<span class="k-dalga"><i></i><i></i><i></i></span>Dada Spiker · ' + D.spiker.bulten + ' · 1 / 3') + '</small></span>' +
      '<button type="button" aria-label="' + (o.hata ? 'Yeniden dene' : 'Oynat / duraklat') + '">' + I(o.hata ? 'fa-rotate-right' : o.dur ? 'fa-play' : 'fa-pause') + '</button><button type="button" class="kapat" aria-label="Kapat">' + I('fa-xmark') + '</button><span class="il"><i style="width:29%"></i></span></div>';
    mo = ekle(o.yer, '<div class="k-mo" role="region" aria-label="Spiker oynatıcı"><span class="yuz"' + bg(D.spiker.gorsel) + '></span><a class="t" href="' + K.git('spiker') + '"><b></b><small><span class="k-dalga"><i></i><i></i><i></i></span><span class="y"></span></small></a>' +
      '<button type="button" data-mo-oynat aria-label="Oynat / duraklat">' + I('fa-pause') + '</button><button type="button" class="kapat" data-mo-kapat aria-label="Kapat">' + I('fa-xmark') + '</button><span class="il"><i></i></span></div>');
    var c = Q.get('calan');
    if (c === '1' || c === 'dinle'){ var t0 = c === 'dinle' ? 'dinle' : 'spiker', s0 = oku(); if (!s0 || (s0.tur || 'spiker') !== t0) yaz({ bas: Date.now() - 52000, dur: null, tur: t0 }); gorunur = true; }
    mo.querySelector('[data-mo-oynat]').addEventListener('click', function(){ var s = oku(); if (!s) return; yaz(s.dur != null ? { bas: Date.now() - s.dur, dur: null, tur: s.tur } : { bas: s.bas, dur: Date.now() - s.bas, tur: s.tur }); guncelle(); });
    mo.querySelector('[data-mo-kapat]').addEventListener('click', function(){ yaz(null); gorunur = false; guncelle(); });
    /* çalarken uygulama içi bağlantı calan'ı taşır */
    document.addEventListener('click', function(e){ var a = e.target.closest('a[href]'), s = oku(); if (!a || !s || !gorunur) return;
      var h = a.getAttribute('href'); if (!h || h.charAt(0) === '#' || /^(mailto:|tel:)/.test(h)) return;
      var u = new URL(h, location.href); if (u.origin !== location.origin && location.protocol !== 'file:') return; u.searchParams.set('calan', s.tur === 'dinle' ? 'dinle' : '1'); a.setAttribute('href', u.href); }, true);
    addEventListener('storage', function(e){ if (e.key === ANAHTAR) guncelle(); });
    guncelle(); clearInterval(zam); zam = setInterval(guncelle, 1000);
    return mo; };
  K.yapis = function(kap, ekran){ var e = ekran || document.querySelector('.ekran'); if (!kap || !e) return;
    var f = function(){ var v = kap.getBoundingClientRect().top - e.getBoundingClientRect().top <= parseFloat(getComputedStyle(kap).top) + 1 && e.scrollTop > 0;
      kap.classList.toggle('yapisik', v); var h = kap.querySelector('.k-hk'); if (h) h.classList.toggle('kucuk', v); };
    e.addEventListener('scroll', f, { passive: true }); f(); };

  /* ---------- görselli banner (K43): içerik merkez sayfalarında düz büyük başlık (.k-bbas) yerine bölüm listesi gibi görselli banner;
     yukarı kaydırınca üst çubuk görselli daralır. Sayfa adı → konuya uygun fotoğraf (yoksa koyu marka zemini). Sayfa betiklerinden sonra uygulanır. ---------- */
  var BANNER = { 'bolumler': 'kar-istanbul', 'afet': 'konteyner', 'trafik': 'metro', 'ekonomi-araclari': 'borsa', 'resmi-ilanlar': 'ankara-kar', 'piyasalar': 'borsa',
    'son-dakika': 'kar-istanbul', 'canli-gundem': 'tbmm', 'haber-dinle': 'spiker-kare', 'canli-skor': 'antrenman', 'puan-durumu': 'superlig',
    'fikstur': 'superlig', 'takimlar': 'antrenman', 'namaz-vakitleri': 'balikci', 'arsiv': 'yks', 'bana-etkisi': 'carsi', 'bugun-ne-oldu': 'kar-istanbul', 'dada-baglam': 'ab-meclis',
    'dada-dogrula': 'tarama', 'dada-ozet': 'veri-merkezi', 'farkli-bakislar': 'ab-meclis', 'guncellenen-haberler': 'asgari', 'sakin-akis': 'balikci', 'takvim': 'tbmm',
    'veri-ve-harita': 'veri-merkezi', 'kesfet': 'veri-merkezi', 'yazarlar': '', 'hamilelik': '', 'astroloji': '', 'dada-ailesi': '', 'senin-icin': '', 'transfer': 'antrenman',
    'lig': 'superlig', 'milli-takim': 'milli', 'avrupa-ligleri': 'superlig', 'podcast': '', 'video': '', 'foto-fokus': 'balon', 'infografik': 'veri-merkezi' };
  K.banner = function(){
    var m = location.pathname.match(/ekranlar\/icerik\/([a-z0-9-]+)\.html$/); if (!m || !(m[1] in BANNER)) return;
    var bb = document.querySelector('.ekran .k-bbas'), e = document.querySelector('.ekran'); if (!bb || !e || bb.closest('.k-kapak')) return;
    var h = bb.querySelector('h1'), p = bb.querySelector('p'), g = BANNER[m[1]];
    var kap = K.el('<header class="k-kapak"' + (g ? ' style="background-image:' + G(g) + '"' : '') + '><h1>' + (h ? h.innerHTML : '') + '</h1>' + (p ? '<p>' + p.innerHTML + '</p>' : '') + '</header>');
    var bos = bb.previousElementSibling; if (bos && bos.classList.contains('k-ust-bosluk')) bos.remove();
    /* taşınan öğelerde yatay kaydırma (seçili çip) korunur */
    var kay0 = [].slice.call(e.querySelectorAll('*')).filter(function(x){ return x.scrollLeft > 0; }).map(function(x){ return [x, x.scrollLeft]; });
    var yap = K.el('<div class="k-yaprak"></div>'), n = bb.nextSibling; bb.replaceWith(kap);
    while (n){ var s2 = n.nextSibling; if (!(n.nodeType === 1 && (n.classList.contains('k-ac') || n.classList.contains('k-ub')))) yap.appendChild(n); n = s2; }
    kap.after(yap);
    kay0.forEach(function(z){ z[0].scrollLeft = z[1]; });
    /* yapışkan öğeler artık banner altında: üst çubuk yüksekliğine göre yapışır */
    var u = document.querySelector('.k-ub'); if (u){ u.classList.add('k-anlik'); u.classList.remove('buyuk', 'golgeli', 'duz'); u.classList.add('foto'); void u.offsetWidth; setTimeout(function(){ u.classList.remove('k-anlik'); }, 60); if (g) u.style.setProperty('--k-ub-g', G(g)); else u.style.setProperty('--k-ub-g', 'linear-gradient(var(--siyah),var(--siyah))');
      document.body.setAttribute('data-durum', 'acik');
      /* çekip yenilemede banner aşağı itilir, üstü açık kalır: durum çubuğu o zaman koyu yazılır */
      var kay = function(){ var v = e.scrollTop > 130; u.classList.toggle('dar', v); u.classList.remove('golgeli'); document.body.setAttribute('data-durum', kap.getBoundingClientRect().top > 20 ? '' : 'acik'); };
      e.addEventListener('scroll', kay, { passive: true }); kay(); setTimeout(kay, 300); setTimeout(kay, 900); }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ K.banner(); }); else setTimeout(function(){ K.banner(); }, 0);
  /* K45 (Beyar): gövde metni iki yana yaslı. 3 satırı geçen, ortalanmamış paragraflar ve metin blokları; son satır sola, Türkçe heceleme. İçerik değiştikçe (sekme, durum) yeniden bakılır. */
  K.yasla = function(kok){ (kok || document).querySelectorAll('.ekran p, .k-yaprak p, .hm p').forEach(function(p){
      if (p.classList.contains('k-yasla') || p.closest('.k-ac,.k-ub,.k-okuma,.k-toast,.k-mo,button,a.k-btn')) return;
      var cs = getComputedStyle(p); if (cs.textAlign === 'center' || cs.textAlign === 'right' || cs.textAlign === 'end' || cs.whiteSpace === 'nowrap') return;
      var lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4; if (p.getBoundingClientRect().height > lh * 2.6) p.classList.add('k-yasla'); }); };
  (function(){ var zm; function bak(){ clearTimeout(zm); zm = setTimeout(function(){ K.yasla(); }, 60); }
    function kur(){ bak(); try { new MutationObserver(bak).observe(document.body, { childList: true, subtree: true }); } catch (x) {} }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kur); else kur(); })();

  /* ---------- katmanlar ---------- */
  var acikKatman = [];
  function katman(elm, perde, yer, acik){
    var c = { el: elm, perde: perde,
      ac: function(){ if (perde) perde.classList.add('acik'); void elm.offsetWidth; elm.classList.add('acik'); if (acikKatman.indexOf(c) < 0) acikKatman.push(c); return c; },
      kapat: function(){ elm.classList.remove('acik'); if (perde) perde.classList.remove('acik'); acikKatman = acikKatman.filter(function(x){ return x !== c; }); if (c.kalici !== true && !c.statik) setTimeout(function(){ if (!elm.classList.contains('acik')) { elm.remove(); if (perde) perde.remove(); } }, 400); return c; } };
    elm._k = c; if (perde) { perde._k = c; perde.addEventListener('click', function(){ c.kapat(); }); }
    if (acik === 'kapali') c.kalici = true; else if (acik) { if (perde) perde.classList.add('acik'); elm.classList.add('acik'); c.statik = true; } else c.ac();
    return c; }
  K.sayfa = function(o, ek){ if (typeof o === 'string') o = Object.assign(HAZIR[o](ek || {}), ek); o = o || {};
    var yer = o.yer || document.body, perde = ekle(yer, '<div class="k-perde"></div>');
    var ey = (o.eylemler || []).map(function(e){ return typeof e === 'string' ? e : K.btn(Object.assign({ boy: 'buyuk', tam: true }, e)); }).join('');
    var s = ekle(yer, '<section class="k-sayfa" role="dialog" aria-modal="true" aria-label="' + (o.baslik || '') + '"><div class="k-tutamak"></div>' +
      (o.baslik ? '<div class="k-sayfa-u"><div style="flex:1;min-width:0"><h2>' + o.baslik + '</h2>' + (o.alt ? '<p>' + o.alt + '</p>' : '') + '</div>' + (o.kapat !== false ? K.ikonBtn({ ikon: 'fa-xmark', etiket: 'Kapat', tur: 'dolu kucuk', attr: 'data-kapat' }) : '') + '</div>' : '') +
      '<div class="k-sayfa-i">' + (o.icerik || '') + '</div>' + (ey ? '<div class="k-sayfa-a' + ((o.eylemler || []).length < 2 ? ' tek' : '') + '">' + ey + '</div>' : '') + '</section>');
    return katman(s, perde, yer, o.acik); };
  var HAZIR = {
    paylas: function(o){ var h = o.h || D.detay; return { baslik: 'Paylaş', icerik: '<div class="k-paylas-o"><span class="gr"' + bg(h.g) + '></span><span><b>' + h.baslik + '</b>' + K.meta([h.yazar, h.sure]) + '</span></div><div class="k-paylas">' +
      [['fa-link', 'Bağlantıyı kopyala', 'sari'], ['fa-image', 'Paylaşım kartı'], ['fa-message', 'Mesaj'], ['fa-envelope', 'E-posta'], ['fa-ellipsis', 'Diğer']].map(function(x){ return '<button type="button" class="' + (x[2] || '') + '"' + (x[0] === 'fa-link' ? ' data-kopyala' : '') + '><span>' + I(x[0]) + '</span>' + x[1] + '</button>'; }).join('') + '</div>' +
      '<p class="k-grup-n" style="margin:var(--b-12) 0 0">"Diğer" telefonun paylaşım sayfasını açar (iOS ve Android kendi görünümünde).</p>' }; },
    kart: function(o){ var h = o.h || D.detay; return { baslik: 'Paylaşım kartı', alt: 'Hikâye biçiminde (9:16)', icerik: '<div class="k-paylas-kart"' + bg(h.g) + '><span class="logo" role="img" aria-label="Dada Haber"></span>' + K.katEt(h.kat || 'Gündem', h.ikon, { foto: true }) + '<h3>' + h.baslik + '</h3></div>', eylemler: [{ metin: 'Kartı paylaş', ikon: 'fa-share-nodes', tur: 'birincil' }] }; },
    kaydet: function(o){ var cihaz = !K.uye; return { baslik: cihaz ? 'Cihazına kaydedildi' : 'Kaydet', alt: cihaz ? 'Giriş yaparsan her cihazında görürsün' : 'Bir klasör seç',
      icerik: cihaz ? K.serit({ ikon: 'fa-mobile-screen', metin: 'Bu haber yalnız bu telefonda', alt: 'Uygulamayı silersen kaydın da gider.' }) + '<div style="margin-top:var(--b-12)">' + K.grup('', [{ ikon: 'fa-circle-down', baslik: 'Çevrimdışı indir', alt: 'Bağlantı yokken de oku', sag: 'anahtar', on: true }]).replace('k-grup"', 'k-grup" style="margin:0"') + '</div>'
        : K.grup('', [{ ikon: 'fa-bookmark', baslik: 'Kaydedilenler', alt: 'Varsayılan', sag: 'tik', secili: true }, { ikon: 'fa-folder-open', baslik: 'Okunacaklar', sag: 'tik' }, { ikon: 'fa-folder-plus', baslik: 'Yeni klasör', sag: 'ok', attr: 'data-yeni-klasor' }]).replace('k-grup"', 'k-grup" style="margin:0"') +
          K.grup('', [{ ikon: 'fa-circle-down', baslik: 'Çevrimdışı indir', alt: 'Bağlantı yokken de oku', sag: 'anahtar', on: true }]).replace('k-grup"', 'k-grup" style="margin:var(--b-12) 0 0"'),
      eylemler: cihaz ? [{ metin: 'Şimdi değil', tur: 'sade', attr: 'data-kapat' }, { metin: 'Giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil', href: K.git('giris') }] : [{ metin: 'Kaydet', tur: 'birincil', attr: 'data-kapat' }] }; },
    'yeni-klasor': function(){ return { baslik: 'Yeni klasör', icerik: K.alan({ etiket: 'Klasör adı', yer: 'Ör. Okunacaklar', odak: true }), eylemler: [{ metin: 'Vazgeç', tur: 'sade', attr: 'data-kapat' }, { metin: 'Oluştur', tur: 'birincil' }] }; },
    yazi: function(){ return { baslik: 'Yazı boyutu', alt: 'Bütün okuma metni birlikte büyür', icerik: '<div class="k-kaydirac-k"><span class="a1">A</span>' + K.kaydirac({ min: 15, max: 22, adim: .5, deger: 16, etiket: 'Yazı boyutu', attr: '' }).replace('<input', '<input data-mb') + '<span class="a2">A</span></div>' +
      '<p class="k-spot" style="margin-top:var(--b-8);font-size:var(--mb)">' + D.detay.spot + '</p>' }; },
    hiz: function(){ return { baslik: 'Oynatma hızı', icerik: '<div class="k-cip-izgara" data-tek>' + ['0,75×', '1×', '1,25×', '1,5×', '1,75×', '2×'].map(function(x){ return K.cip(x, { secili: x === '1×', buyuk: true }); }).join('') + '</div>' }; },
    suzgec: function(){ return { baslik: 'Süzgeç', icerik: '<p class="k-sayfa-b">Tarih</p>' + K.cipler(['Bugün', 'Son 7 gün', 'Son 30 gün', 'Tümü'], 0).replace('k-ray s8"', 'k-ray s8" style="margin:0 calc(-1 * var(--b-24));padding:0 var(--b-24)"') +
      '<p class="k-sayfa-b">Bölüm</p><div class="k-cip-izgara">' + D.bolumler.map(function(b, i){ return K.cip(b.ad, { ikon: b.ikon, secili: i === 0 }); }).join('') + '</div><p class="k-sayfa-b">Sıralama</p>' +
      K.secim('sr', 'En yeni', { secili: true, satir: true }) + K.secim('sr', 'En çok okunan', { satir: true }) + K.secim('sr', 'En ilgili', { satir: true }), eylemler: [{ metin: 'Temizle', tur: 'sade' }, { metin: 'Uygula', tur: 'birincil', attr: 'data-kapat' }] }; },
    tetik: function(o){ var e = { kaydet: ['fa-bookmark', 'Kaydetmek için giriş yap', 'Kaydettiğin haberler her cihazında seninle olsun.'], takip: ['fa-heart', 'Takip etmek için giriş yap', 'Takip ettiğin konular ana sayfanda öne çıksın.'],
      yorum: ['fa-comment', 'Yorum yazmak için giriş yap', 'Habere yorum yazmak ve yorumlara katılmak için giriş yap.'], begen: ['fa-thumbs-up', 'Beğenmek için giriş yap', 'Yorumlara katılmak için Dada Haber hesabına giriş yap.'] }[o.eylem || 'kaydet'];
      return { icerik: '<div class="k-bos" style="padding:var(--b-8) 0 var(--b-4)"><span class="ik">' + I(e[0]) + '</span><h2>' + e[1] + '</h2><p>' + e[2] + '</p></div>', kapat: false,
        eylemler: ['<div style="display:grid;gap:var(--b-8)">' + K.btn({ metin: 'Giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil', boy: 'buyuk', tam: true, href: K.git('giris') }) + K.btn({ metin: 'Üye ol', tur: 'sade', boy: 'buyuk', tam: true, href: K.git('uyeOl') }) + K.btn({ metin: 'Şimdi değil', tur: 'metin', tam: true, attr: 'data-kapat' }) + '</div>'] }; },
    bildir: function(o){ return { baslik: o.haber ? 'Haberde hata bildir' : 'Yorumu bildir', alt: o.haber ? 'Editörlerimiz inceler ve gerekirse düzeltir' : 'Neden uygun değil?',
      icerik: o.haber ? K.metinAlan({ yer: 'Hatayı ve doğrusunu yaz', sinir: 500 }) : ['Hakaret ya da nefret söylemi', 'Spam ya da reklam', 'Yanlış bilgi', 'Kişisel bilgi paylaşımı', 'Diğer'].map(function(x, i){ return K.secim('bl', x, { satir: true, secili: i === 0 }); }).join(''),
      eylemler: [{ metin: 'Gönder', ikon: 'fa-paper-plane', tur: 'birincil', attr: 'data-kapat data-toast="Bildirimin alındı · Teşekkürler"' }] }; },
    yorum: function(){ return { baslik: 'Yorum yaz', alt: D.detay.baslik, icerik: K.metinAlan({ yer: 'Düşünceni yaz…', sinir: 1000 }) + '<p class="k-not">' + I('fa-circle-info') + 'Yorumlar denetim sonrası yayınlanır.</p>', eylemler: [{ metin: 'Gönder', ikon: 'fa-paper-plane', tur: 'birincil', attr: 'data-kapat data-toast="Yorumun gönderildi · Denetimden sonra yayınlanır"' }] }; },
    sehir: function(o){ var red = o.red; return { baslik: 'Şehir seç', icerik: K.ara({ yer: 'Şehir ara', ses: false }) + '<div style="margin-top:var(--b-12)">' +
      K.grup('', [{ ikon: 'fa-location-arrow', baslik: 'Konumumu kullan', alt: red ? 'Konum izni kapalı · Ayarlar\'dan aç' : 'Hava ve namaz için', sag: red ? 'ok' : 'yok', pasif: red }]).replace('k-grup"', 'k-grup" style="margin:0"') + '</div><p class="k-sayfa-b">Şehirler</p>' +
      [D.hava.sehir].map(function(s){ return K.secim('sh', s, { satir: true, secili: true }); }).join('') }; },
    ses: function(o){ return { baslik: 'Sesli arama', icerik: K.ses(o.hal || 'hazir') }; },
    guncelle: function(){ return { icerik: '<div class="k-bos" style="padding:var(--b-8) 0 var(--b-4)"><span class="ik">' + I('fa-circle-up') + '</span><h2>Yeni sürüm hazır</h2><p>Daha hızlı açılış ve düzeltmeler. Şimdi güncelleyebilir ya da sonra hatırlatabiliriz.</p></div>', kapat: false,
      eylemler: [{ metin: 'Sonra', tur: 'sade', attr: 'data-kapat' }, { metin: 'Güncelle', ikon: 'fa-download', tur: 'birincil' }] }; }
  };
  K.SAYFA = HAZIR;
  K.pencere = function(o, ek){ if (typeof o === 'string') o = Object.assign({}, PENCERE[o], ek); o = o || {};
    var yer = o.yer || document.body, perde = ekle(yer, '<div class="k-perde"></div>');
    var ey = (o.eylemler || []).map(function(e){ return K.btn(Object.assign({ boy: o.yan ? '' : 'buyuk', tam: true }, e)); }).join('');
    var p = ekle(yer, '<div class="k-pencere' + (o.tehlike ? ' tehlike' : '') + '" role="alertdialog" aria-modal="true" aria-label="' + o.baslik + '">' + (o.ikon ? '<span class="ik">' + I(o.ikon) + '</span>' : '') + '<h2>' + o.baslik + '</h2>' + (o.metin ? '<p>' + o.metin + '</p>' : '') + (o.icerik || '') + '<div class="k-pencere-a' + (o.yan ? ' yan' : '') + '">' + ey + '</div></div>');
    return katman(p, perde, yer, o.acik); };
  var VZ = { metin: 'Vazgeç', tur: 'sade', attr: 'data-kapat' };
  var PENCERE = {
    cikis: { ikon: 'fa-right-from-bracket', baslik: 'Çıkış yapılsın mı?', metin: 'Bu cihaza indirdiğin haberler kalır; kaydettiklerin hesabında durur.', yan: true, eylemler: [VZ, { metin: 'Çıkış yap', tur: 'ikincil', attr: 'data-kapat' }] },
    'hesap-sil': { ikon: 'fa-trash-can', tehlike: true, baslik: 'Hesabın silinsin mi?', metin: 'Bu işlem geri alınamaz. Kaydettiklerin, takiplerin ve yorumların kalıcı olarak silinir.', eylemler: [{ metin: 'Hesabımı sil', tur: 'tehlike' }, { metin: 'Vazgeç', tur: 'metin', attr: 'data-kapat' }] },
    'indirilen-sil': { ikon: 'fa-circle-down', tehlike: true, baslik: 'İndirilenler silinsin mi?', metin: 'Haberler Kaydedilenler\'de kalır; yalnız çevrimdışı kopyaları silinir.', yan: true, eylemler: [VZ, { metin: 'Sil', tur: 'tehlike', attr: 'data-kapat' }] },
    gecmis: { ikon: 'fa-clock-rotate-left', tehlike: true, baslik: 'Geçmiş temizlensin mi?', metin: 'Okuduğun, izlediğin ve dinlediğin bütün haberler listeden kalkar.', yan: true, eylemler: [VZ, { metin: 'Temizle', tur: 'tehlike', attr: 'data-kapat' }] },
    'klasor-sil': { ikon: 'fa-folder-open', tehlike: true, baslik: '"Okunacaklar" silinsin mi?', metin: 'İçindeki haberler Kaydedilenler\'de kalır.', yan: true, eylemler: [VZ, { metin: 'Sil', tur: 'tehlike', attr: 'data-kapat' }] },
    'takip-birak': { ikon: 'fa-heart', baslik: '"' + D.uye.takip[1] + '" takibi bırakılsın mı?', metin: 'Bu konudaki haberler ana sayfanda öne çıkmaz.', yan: true, eylemler: [VZ, { metin: 'Bırak', tur: 'ikincil', attr: 'data-kapat' }] },
    'yorum-sil': { baslik: 'Yazdığın yorum silinsin mi?', metin: 'Yorumun gönderilmedi. Çıkarsan yazdıkların kaybolur.', yan: true, eylemler: [{ metin: 'Yazmaya dön', tur: 'sade', attr: 'data-kapat' }, { metin: 'Sil', tur: 'tehlike', attr: 'data-kapat' }] },
    oturum: { ikon: 'fa-lock', baslik: 'Oturumun sona erdi', metin: 'Güvenliğin için yeniden giriş yapman gerekiyor.', eylemler: [{ metin: 'Yeniden giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil' }, { metin: 'Misafir olarak devam et', tur: 'metin', attr: 'data-kapat' }] }
  };
  K.PENCERE = PENCERE;
  var MENU = {
    siralama: [{ baslik: 'Sırala' }, { metin: 'En yeni', ikon: 'fa-clock', secili: true }, { metin: 'En eski', ikon: 'fa-clock-rotate-left' }, { metin: 'En çok beğenilen', ikon: 'fa-thumbs-up' }],
    klasor: [{ metin: 'Yeniden adlandır', ikon: 'fa-pen' }, { metin: 'Çevrimdışı indir', ikon: 'fa-circle-down' }, { ayrac: true }, { metin: 'Klasörü sil', ikon: 'fa-trash-can', tehlike: true }],
    yorum: [{ metin: 'Bildir', ikon: 'fa-flag' }, { metin: 'Kopyala', ikon: 'fa-copy' }, { ayrac: true }, { metin: 'Sil', ikon: 'fa-trash-can', tehlike: true, pasif: true }]
  };
  K.MENU = MENU;
  K.menu = function(o, ek){ if (typeof o === 'string') o = Object.assign({ ogeler: MENU[o] }, ek); o = o || {};
    var yer = o.yer || document.body;
    var m = ekle(yer, '<div class="k-menu' + (o.yerinde ? ' yerinde' : '') + '" role="menu">' + o.ogeler.map(function(x){
      if (x.ayrac) return '<hr>'; if (x.baslik) return '<div class="k-menu-b">' + x.baslik + '</div>';
      return '<button type="button" class="k-menu-o' + (x.tehlike ? ' tehlike' : '') + '" role="menuitem' + (x.secili != null ? 'radio" aria-checked="' + !!x.secili : '') + '"' + (x.pasif ? ' disabled' : '') + ' data-kapat>' + (x.ikon ? I(x.ikon) : '') + x.metin + (x.secili != null ? I('fa-check', 'tik') : '') + '</button>'; }).join('') + '</div>');
    if (o.hedef && !o.yerinde) { var r = o.hedef.getBoundingClientRect(), y = yer.getBoundingClientRect(); m.style.top = (r.bottom - y.top + 4) + 'px'; m.style.right = Math.max(8, y.right - r.right) + 'px'; }
    else if (o.konum) { for (var k in o.konum) m.style[k] = o.konum[k]; }
    var c = katman(m, null, yer, o.acik || o.yerinde);
    if (!o.yerinde) setTimeout(function(){ var dis = function(e){ if (!m.contains(e.target)) { c.kapat(); document.removeEventListener('pointerdown', dis, true); } }; document.addEventListener('pointerdown', dis, true); }, 0);
    return c; };
  K.baglam = function(o){ o = o || {}; var yer = o.yer || document.body, h = o.h, tur = o.tur;
    if (o.kaynak) { var k = o.kaynak; tur = tur || (k.getAttribute('data-baglam') === 'akis' ? 'akis' : 'haber');
      var g = k.querySelector('.gr'), b = k.querySelector('h1,h2,h3,h4'), us = k.querySelector('.k-ustsatir,.k-kat'), me = k.querySelector('.k-meta');
      h = { gHtml: g ? g.style.backgroundImage : '', baslik: b ? b.textContent : '', us: us ? us.outerHTML : '', meta: me ? me.outerHTML : '' }; }
    h = h || { baslik: D.detay.baslik, g: D.detay.g };
    var gs = h.gHtml ? ' style="background-image:' + h.gHtml.replace(/"/g, '\'') + '"' : bg(h.g);
    var ogeler = tur === 'akis' ? [['Sesi aç', 'fa-volume-high'], ['Altyazı', 'fa-closed-captioning']] : [['Kaydet', 'fa-bookmark', 'data-kaydet-baglam'], ['Paylaş', 'fa-share-nodes', 'data-sayfa="paylas"'], ['Dinle · ' + D.detay.dinle, 'fa-headphones', 'data-dinle']];
    var m = ekle(yer, '<div class="k-baglam" role="dialog" aria-label="Seçenekler"><div class="k-baglam-k"><div class="gr"' + gs + '></div><div class="ic">' + (h.us || '') + '<h3>' + h.baslik + '</h3>' + (h.meta || '') + '</div></div>' +
      '<div class="k-baglam-l">' + ogeler.map(function(x){ return '<button type="button" data-kapat ' + (x[2] || '') + '>' + x[0] + I(x[1]) + '</button>'; }).join('') + '</div></div>');
    var c = katman(m, null, yer, o.acik);
    m.addEventListener('click', function(e){ if (e.target === m) c.kapat(); });
    return c; };
  K.toast = function(metin, o){ o = o || {}; var yer = o.yer || document.body, tur = o.tur || (o.geriAl ? 'bilgi' : 'bilgi');
    var ik = o.ikon || (o.bant ? (tur === 'basari' ? 'fa-wifi' : 'fa-plug-circle-xmark') : { bilgi: 'fa-circle-info', basari: 'fa-circle-check', hata: 'fa-circle-exclamation' }[tur]);
    var sure = o.sure != null ? o.sure : (o.geriAl ? 4000 : o.bant ? 0 : 3000), ey = o.eylem || (o.geriAl ? 'Geri al' : '');
    var t = ekle(yer, '<div class="k-toast ' + tur + (o.bant ? ' bant' : '') + (o.bant && tur === 'basari' ? ' geldi' : '') + (o.yerinde ? ' yerinde' : '') + '" role="status">' + I(ik) + '<span>' + metin + (o.alt ? '<small>' + o.alt + '</small>' : '') + '</span>' + (ey ? '<button type="button">' + ey + '</button>' : '') + (o.geriAl ? '<i class="il" style="animation-duration:' + sure + 'ms"></i>' : '') + '</div>');
    if (o.yerinde) return t;
    var ust = yer, mo2 = ust.querySelector('.k-mo.acik'), ac = ust.querySelector('.k-ac'), ok2 = ust.querySelector('.k-okuma');
    t.style.bottom = mo2 ? 'calc(' + (ac ? 'var(--k-ac-h) + 74px' : 'var(--alt-guvenli) + 74px') + ')' : ok2 ? 'calc(var(--alt-guvenli) + 66px)' : ac ? '' : 'calc(var(--alt-guvenli) + 8px)';
    [].forEach.call(ust.querySelectorAll('.k-toast.acik:not(.bant)'), function(x){ if (x !== t) x.remove(); });
    void t.offsetWidth; t.classList.add('acik');
    var b = t.querySelector('button'); if (b) b.addEventListener('click', function(){ if (o.eylemFn) o.eylemFn(); kapat(); });
    function kapat(){ t.classList.remove('acik'); setTimeout(function(){ t.remove(); }, 300); }
    if (sure) setTimeout(kapat, sure);
    t.kapat = kapat; return t; };
  K.afis = function(o){ o = o || {}; var yer = o.yer || document.body, t = o.tur === 'canli';
    var a = ekle(yer, '<a class="k-afis' + (o.g === false ? ' yazi' : '') + (o.yerinde ? ' yerinde' : '') + '" href="' + K.git(t ? 'canliAnlatim' : 'detay') + '" role="alert"><span><span class="u"><span class="ap">' + I(t ? 'fa-tower-broadcast' : 'fa-bolt') + '</span>' + (t ? 'Canlı anlatım' : 'Son Dakika') + '<em>· şimdi</em></span><b>' + (o.baslik || D.sonDakika[0].baslik) + '</b></span>' +
      (o.g === false ? '' : '<span class="gr"' + bg(o.g || 'kar-istanbul') + '></span>') + '</a>');
    if (o.yerinde) return a;
    void a.offsetWidth; a.classList.add('acik');
    var y0 = null; a.addEventListener('pointerdown', function(e){ y0 = e.clientY; }); a.addEventListener('pointerup', function(e){ if (y0 != null && y0 - e.clientY > 20) { e.preventDefault(); a.classList.remove('acik'); } y0 = null; });
    setTimeout(function(){ a.classList.remove('acik'); setTimeout(function(){ a.remove(); }, 400); }, o.sure || 5000);
    return a; };

  /* çekmece (menü; ana sayfa menüsünün yapısı, K31). Alt başlıklar DADAHABER-10 (kok.html ile aynı) */
  K.ALT = { 'Gündem': ['Siyaset', 'Toplum', 'Hukuk', 'Güvenlik', 'Çevre ve Afet', 'Yerel Haberler'], 'Spor': ['Futbol', 'Basketbol', 'Voleybol', 'Canlı Skor', 'Puan Durumu', 'Transfer'],
    'Finans': ['Piyasa Ekranı', 'Döviz', 'Altın', 'Borsa', 'Kişisel Finans', 'Enflasyon'], 'Kadın': ['Kadın Gündemi', 'Kadın Hakları', 'Kadın Sağlığı', 'Ev ve Yaşam'],
    'Savunma': ['Millî Projeler', 'İHA ve SİHA', 'Hava Platformları', 'Millî Güvenlik', 'NATO'], 'Dünya': ['Avrupa', 'Orta Doğu', 'Amerika', 'Asya Pasifik', 'Diplomasi'],
    'Kampüs': ['YKS', 'KPSS', 'Burslar', 'Staj', 'Kariyer'], 'Keşfet': ['Teknoloji', 'Bilim', 'Sağlık', 'Kültür ve Sanat', 'Dada Özet', 'Günün 5\'i'] };
  K.cekmece = function(o){ o = o || {}; var yer = o.yer || document.body, ok = I('fa-chevron-right'), uye = o.uye != null ? o.uye : K.uye;
    var sat = function(ik, ad, ek, h, sec){ return '<a class="k-ms"' + href(h) + (sec ? ' aria-current="page"' : '') + '>' + I(ik) + '<span>' + ad + '</span>' + (ek || '') + '</a>'; };
    var hesap = uye ? '<div class="k-mh"><div class="k-mh-u">' + K.avatar(D.uye.ad, 'm') + '<span class="t"><b>' + D.uye.ad + '</b><small>' + I('fa-fire') + D.uye.seri + ' günlük okuma serisi</small></span><a class="pr" href="' + K.git('hesap') + '">Profilim' + ok + '</a></div>' +
        '<div class="k-mh-k"><a href="' + K.git('kaydedilenler') + '">' + I('fa-bookmark') + 'Kaydedilenler</a><a href="' + K.git('takip') + '">' + I('fa-heart') + 'Takiplerim</a><a href="' + K.git('bildirimler') + '">' + I('fa-bell') + 'Bildirimler' + K.rozet(3) + '</a></div></div>'
      : '<div class="k-mh"><b class="mr">Merhaba</b><p>Haberleri kaydetmek, konuları takip etmek ve yorum yazmak için giriş yap.</p><div class="k-btn-grup">' + K.btn({ metin: 'Giriş yap', ikon: 'fa-right-to-bracket', tur: 'birincil', href: K.git('giris') }) + K.btn({ metin: 'Üye ol', tur: 'sade', href: K.git('uyeOl') }) + '</div></div>';
    var perde = ekle(yer, '<div class="k-perde"></div>');
    var m = ekle(yer, '<nav class="k-cekmece" aria-label="Menü"><div class="k-mu"><span class="logo" role="img" aria-label="Dada Haber"></span>' + K.ikonBtn({ ikon: 'fa-xmark', etiket: 'Menüyü kapat', attr: 'data-kapat' }) + '</div><div class="k-mi">' + hesap +
      '<nav class="k-mn">' + sat('fa-house', 'Ana Sayfa', '', K.git('ana'), (o.etkin || 'ana') === 'ana') +
      '<span class="k-grup-b">Bölümler</span>' + D.bolumler.map(function(b){ return '<details class="k-ma"><summary>' + I(b.ikon) + '<span>' + b.ad + '</span>' + I('fa-chevron-down', 'cv') + '</summary><div class="k-mc"><a class="tm" href="' + K.git('liste') + '">Bütün ' + b.ad + ' haberleri' + ok + '</a>' + (K.ALT[b.ad] || []).map(function(x){ return '<a href="' + K.git('liste') + '">' + x + '</a>'; }).join('') + '</div></details>'; }).join('') +
      '<span class="k-grup-b">Dinle ve izle</span>' + sat('fa-headphones', 'Haber Dinle', '<span class="cn"><span class="canli-nokta"></span>Yayında</span>', K.git('dinle')) + sat('fa-mobile-screen-button', 'Akış', '<em>' + D.akis.toplam + ' video</em>', K.git('akis')) + sat('fa-podcast', 'Podcast', '', K.git('podcast')) + sat('fa-circle-play', 'Video Haber', '', K.git('video')) + sat('fa-camera', 'Foto Fokus', '', K.git('fotoFokus')) + sat('fa-chart-pie', 'İnfografik', '', K.git('infografik')) +
      '<span class="k-grup-b">Servisler ve araçlar</span>' + sat('fa-triangle-exclamation', 'Afet ve Acil Durum', '', K.git('afet')) + sat('fa-car', 'Trafik ve Ulaşım', '', K.git('trafik')) + sat('fa-calculator', 'Ekonomi Araçları', '', K.git('ekonomiAraclari')) + sat('fa-scroll', 'Resmî İlanlar', '', K.git('resmiIlanlar')) + sat('fa-baby', 'Hamilelik', '', K.git('hamilelik')) + sat('fa-star', 'Astroloji', '', K.git('astroloji')) +
      '<span class="k-grup-b">Dada</span>' + sat('fa-feather-pointed', 'Yazarlar', '', K.git('yazarlar')) + sat('fa-bolt', 'Son Dakika', '', K.git('sonDakika')) + sat('fa-calendar-day', 'Gündem Takvimi', '', K.git('takvim')) + sat('fa-message', 'Görüş Bildir', '', K.git('geriBildirim')) + '</nav>' +
      '<div class="k-mf">' + sat('fa-language', 'Dil: <b>Türkçe</b>', I('fa-chevron-right', 'cv'), K.git('dilSec')) + sat('fa-people-group', 'Dada Ailesi', I('fa-chevron-right', 'cv'), K.git('dadaAilesi')) + sat('fa-circle-half-stroke', 'Görünüm: <b>Sistem</b>', I('fa-chevron-down', 'cv'), K.git('gorunum')) + sat('fa-font', 'Yazı boyutu: <b>Orta</b>', I('fa-chevron-down', 'cv'), '', false).replace('class="k-ms"', 'class="k-ms" data-sayfa="yazi"') +
        '<div class="k-mf-bag"><a href="' + K.git('hakkinda') + '">Hakkımızda</a><a href="' + K.git('yasal') + '">Künye</a><a href="' + K.git('iletisim') + '">İletişim</a><a href="' + K.git('yasal') + '">Gizlilik Politikası</a></div></div></div></nav>');
    var c = katman(m, perde, yer, o.acik ? true : 'kapali'); c.kalici = true;
    if (!o.yer) K._cekmece = c;
    return c; };

  /* ---------- aşağı çekerek yenileme davranışı ---------- */
  K.cekYenile = function(ekran, bitince){ var e = ekran || document.querySelector('.ekran'); if (!e) return;
    var k = ekle(e.parentNode, '<div class="k-yenile-k">' + K.yenile('cekiliyor') + '</div>'), y0 = null, dy = 0;
    function hal(h){ k.innerHTML = K.yenile(h); }
    e.addEventListener('pointerdown', function(ev){ if (e.scrollTop <= 0) { y0 = ev.clientY; dy = 0; k.classList.add('surukle'); } });
    addEventListener('pointermove', function(ev){ if (y0 == null) return; dy = Math.max(0, ev.clientY - y0); if (dy > 4) ev.preventDefault(); k.style.transform = 'translateY(' + (Math.min(dy, 140) * .6 - 76) + 'px)'; k.style.opacity = dy > 4 ? '1' : ''; hal(dy > 110 ? 'birak' : 'cekiliyor'); var ic = k.querySelector('.ic'); if (ic && dy <= 110) ic.style.transform = 'rotate(' + Math.min(180, dy * 1.6) + 'deg)'; });
    addEventListener('pointerup', function(){ if (y0 == null) return; y0 = null; k.classList.remove('surukle');
      if (dy > 110) { k.style.transform = 'translateY(0)'; hal('yenileniyor'); setTimeout(function(){ hal('bitti'); setTimeout(function(){ k.style.transform = ''; k.style.opacity = ''; if (bitince) bitince(); }, 700); }, 1200); } else { k.style.transform = ''; k.style.opacity = ''; } });
    return k; };

  /* ---------- kendiliğinden bağlanan davranışlar ---------- */
  function ustKatman(){ return acikKatman[acikKatman.length - 1]; }
  document.addEventListener('click', function(ev){ var t = ev.target, x;
    if ((x = t.closest('.k-kay'))) { ev.preventDefault(); ev.stopPropagation(); var on = x.getAttribute('aria-pressed') !== 'true'; x.setAttribute('aria-pressed', on);
      K.toast(on ? 'Kaydedildi' : 'Kaydedilenlerden çıkarıldı', { ikon: 'fa-bookmark', geriAl: true, alt: on ? (K.uye ? 'Kaydedilenler' : 'Bu cihazda') : '', eylemFn: function(){ x.setAttribute('aria-pressed', !on); }, yer: x.closest('.k-sahne') || undefined }); return; }
    if ((x = t.closest('[data-kaydet]'))) { var on2 = x.getAttribute('aria-pressed') !== 'true'; x.setAttribute('aria-pressed', on2); K.toast(on2 ? 'Kaydedildi' : 'Kaydedilenlerden çıkarıldı', { ikon: 'fa-bookmark', geriAl: true, alt: on2 ? 'Kaydedilenler' : '' }); }
    if ((x = t.closest('[data-tek] .k-cip, [data-tek-gun] .k-gun'))) { [].forEach.call(x.parentNode.children, function(c){ c.setAttribute(c.classList.contains('k-gun') ? 'aria-selected' : 'aria-pressed', c === x); }); }
    else if ((x = t.closest('.k-cip')) && !x.closest('[data-tek]')) x.setAttribute('aria-pressed', x.getAttribute('aria-pressed') !== 'true');
    if ((x = t.closest('.k-segment button'))) { var s = x.parentNode, i = [].indexOf.call(s.querySelectorAll('button'), x); s.style.setProperty('--i', i); s.querySelectorAll('button').forEach(function(b, j){ b.setAttribute('aria-selected', j === i); }); }
    if ((x = t.closest('.k-sekmeler button'))) x.parentNode.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-selected', b === x); });
    if ((x = t.closest('.k-gorunum button'))) x.parentNode.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-pressed', b === x); });
    if ((x = t.closest('.k-takim'))) x.setAttribute('aria-pressed', x.getAttribute('aria-pressed') !== 'true');
    if ((x = t.closest('[data-takip]'))) { ev.preventDefault(); var tk = x.getAttribute('aria-pressed') !== 'true'; x.setAttribute('aria-pressed', tk); x.innerHTML = I(tk ? 'fa-check' : 'fa-plus') + '<span>' + (tk ? 'Takipte' : 'Takip et') + '</span>'; if (tk) K.toast('Takip ediliyor', { ikon: 'fa-heart', eylem: 'Bildirim aç' }); }
    if ((x = t.closest('[data-begen]'))) { var b2 = x.getAttribute('aria-pressed') !== 'true', n = x.querySelector('b'); x.setAttribute('aria-pressed', b2); if (n) n.textContent = +n.textContent + (b2 ? 1 : -1); }
    if ((x = t.closest('[data-sifre]'))) { var inp = x.parentNode.querySelector('input'), gos = inp.type === 'password'; inp.type = gos ? 'text' : 'password'; x.innerHTML = I(gos ? 'fa-eye-slash' : 'fa-eye'); x.setAttribute('aria-label', gos ? 'Şifreyi gizle' : 'Şifreyi göster'); }
    if (t.closest('[data-spiker]')) { ev.preventDefault(); K.spikerBaslat(); }
    if (t.closest('[data-dinle]')) { ev.preventDefault(); K.dinleBaslat(); }
    /* podcast oynat: Spiker'ı başlatmaz; tek oynatıcı kuralıyla Spiker durur (K39) */
    if ((x = t.closest('[data-podcast]'))) { ev.preventDefault(); var po = x.getAttribute('aria-pressed') !== 'true'; x.setAttribute('aria-pressed', po); x.setAttribute('aria-label', po ? 'Duraklat' : 'Oynat'); var pi = x.querySelector('i'); if (pi) pi.className = 'fa-solid ' + (po ? 'fa-pause' : 'fa-play'); if (po && K.spikerDurdur()) K.toast('Dada Spiker duraklatıldı', { ikon: 'fa-radio' }); }
    if (t.closest('[data-menu]') && K._cekmece) K._cekmece.ac();
    if ((x = t.closest('[data-sayfa]')) && !x.closest('.k-sahne-statik')) { ev.preventDefault(); var ad = x.getAttribute('data-sayfa'); if (HAZIR[ad]) K.sayfa(ad, { eylem: x.getAttribute('data-eylem') || undefined, yer: x.closest('.k-sahne') || undefined }); }
    if ((x = t.closest('[data-yeni-klasor]'))) { ev.preventDefault(); K.sayfa('yeni-klasor', { yer: x.closest('.k-sahne') || undefined }); }
    if ((x = t.closest('[data-menu-ac]'))) { ev.preventDefault(); ev.stopPropagation(); K.menu(x.getAttribute('data-menu-ac'), { hedef: x, yer: x.closest('.k-sahne') || undefined }); }
    if ((x = t.closest('[data-kopyala]'))) { var k0 = ustKatman(); if (k0) k0.kapat(); K.toast('Bağlantı kopyalandı', { ikon: 'fa-link', yer: x.closest('.k-sahne') || undefined }); return; }
    if ((x = t.closest('[data-toast]'))) K.toast(x.getAttribute('data-toast'), { tur: 'basari' });
    if ((x = t.closest('[data-href]'))) location.href = x.getAttribute('data-href');
    if (t.closest('[data-basa]')) { var e2 = document.querySelector('.ekran'); if (e2) e2.scrollTo({ top: 0, behavior: 'smooth' }); }
    if (t.closest('[data-geri]')) { ev.preventDefault(); if (history.length > 1) history.back(); else location.href = K.git('ana'); }
    if ((x = t.closest('[data-kapat]'))) { var kk = x.closest('.k-sayfa,.k-pencere,.k-menu,.k-cekmece,.k-baglam,.k-oy'); if (kk && kk._k) kk._k.kapat(); }
  });
  /* kaydırıcı dolgusu ve yazı ölçeği */
  document.addEventListener('input', function(ev){ var t = ev.target; if (!t.classList || !t.classList.contains('k-kaydirac')) return;
    t.style.setProperty('--d', ((t.value - t.min) / (t.max - t.min) * 100) + '%'); if (t.hasAttribute('data-mb')) document.documentElement.style.setProperty('--mb', t.value + 'px'); });
  addEventListener('keydown', function(e){ if (e.key === 'Escape') { var k = ustKatman(); if (k) k.kapat(); } });
  /* alt sayfa: tutamaktan aşağı çekince kapanır */
  var sy0 = null, ss = null;
  document.addEventListener('pointerdown', function(e){ var t = e.target.closest('.k-tutamak'); if (!t) return; ss = t.closest('.k-sayfa'); sy0 = e.clientY; ss.classList.add('surukle'); });
  addEventListener('pointermove', function(e){ if (!ss) return; var d = Math.max(0, e.clientY - sy0); ss.style.transform = 'translateY(' + d + 'px)'; });
  addEventListener('pointerup', function(e){ if (!ss) return; var d = e.clientY - sy0; ss.classList.remove('surukle'); ss.style.transform = ''; if (d > 80 && ss._k) ss._k.kapat(); ss = null; });
  /* kartta uzun basma (ya da sağ tık) → bağlam menüsü; dokunsal geri bildirim yok (sözleşme) */
  var KART = '[data-baglam],.k-kart-a,.k-kart-k,.k-kart-genis,.k-satir,.k-kart-v';
  var lp, lpAtes = false, lx = 0, ly = 0;
  document.addEventListener('pointerdown', function(e){ var c = e.target.closest(KART); if (!c || e.target.closest('button') || c.closest('.k-sahne-statik')) return; lx = e.clientX; ly = e.clientY; lpAtes = false; clearTimeout(lp);
    lp = setTimeout(function(){ lpAtes = true; K.baglam({ kaynak: c, yer: c.closest('.k-sahne') || undefined }); }, 520); });
  addEventListener('pointermove', function(e){ if (lp && (Math.abs(e.clientX - lx) > 8 || Math.abs(e.clientY - ly) > 8)) clearTimeout(lp); });
  addEventListener('pointerup', function(){ clearTimeout(lp); });
  document.addEventListener('click', function(e){ if (lpAtes) { lpAtes = false; e.preventDefault(); e.stopPropagation(); } }, true);
  document.addEventListener('contextmenu', function(e){ var c = e.target.closest(KART); if (!c || c.closest('.k-sahne-statik')) return; e.preventDefault(); K.baglam({ kaynak: c, yer: c.closest('.k-sahne') || undefined }); });
})();
