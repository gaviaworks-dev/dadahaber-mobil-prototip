/* Dada Haber Mobil · HİKÂYE MODU (TEK YAZAR: lider). HD-E'nin kartları ayrı ekran değil, her haberde bir mod:
   detaydaki düğmeye basınca haber kartlara bölünmüş halde üstte açılır; kapatınca (X ya da son karttaki "Metne dön") metne, kalınan yere döner.
   Bütün hibritler aynı modu kullanır. HikayeModu.ac() / .kapat(). Dokun: ileri/geri · basılı tut: dur · Esc: kapat. */
(function(){
  var D = window.D, el, sira = 0, kartlar, cz, onceki;
  function ilk(t){ var m = t.match(/^.*?[.?!](\s|$)/); return m ? m[0].trim() : t; }
  function kur(){
    var d = D.detay, par = d.govde.filter(function(b){ return b.p; });
    kartlar = [
      { c: 'koyu-k k1', u: 'acik', h: '<div class="zm" style="background-image:' + G(d.g) + '"></div><div class="or"></div>' +
        '<span class="et"><i class="fa-solid ' + d.ikon + '"></i>' + d.yol.join(' · ') + '</span><h1>' + d.baslik + '</h1><div class="bil">' + d.yazar + ' · ' + d.tarih.replace(/ \d{4}$/, '') + ' · ' + d.saat + '</div>' },
      { c: 'sari-k k2', u: 'koyu', h: '<div class="dev" aria-hidden="true">15<small>sn</small></div><span class="et"><i class="fa-solid fa-stopwatch"></i>15 saniyede</span><ol class="ol">' +
        d.ozet.map(function(o){ return '<li>' + o + '</li>'; }).join('') + '</ol>' },
      { c: 'koyu-k k3', u: 'acik', h: '<div class="tr">“</div><span class="et"><i class="fa-solid fa-circle-exclamation"></i>Neden önemli</span><p class="bk">' + d.nedenOnemli + '</p>' },
      { c: 'acik-k k4', u: 'tema', h: '<div class="ik"><i class="fa-solid fa-wallet"></i></div><span class="et"><i class="fa-solid fa-user"></i>Bana etkisi</span><p class="bk">' + d.banaEtkisi + '</p>' },
      { c: 'koyu-k k5', u: 'acik', h: '<div class="zm" style="background-image:' + G('tbmm') + '"></div><div class="or"></div><span class="et"><i class="fa-solid fa-scale-balanced"></i>Taraflar ne istiyor?</span>' +
        '<div class="tf"><b><i class="fa-solid fa-helmet-safety"></i>İşçi tarafı</b><p>' + ilk(par[2].p) + '</p></div><div class="tf"><b><i class="fa-solid fa-briefcase"></i>İşveren tarafı</b><p>' + ilk(par[3].p) + '</p></div>' },
      { c: 'acik-k k6', u: 'tema', h: '<span class="et"><i class="fa-solid fa-forward"></i>Bundan sonra</span>' +
        '<div class="tk"><div><i class="fa-solid fa-people-group"></i><span>4 Aralık · İlk toplantı, Ankara</span></div><div><i class="fa-solid fa-gavel"></i><span>Aralık son haftası · Karar bekleniyor</span></div><div><i class="fa-solid fa-calendar-check"></i><span>1 Ocak 2027 · Yeni ücret geçerli</span></div></div>' +
        '<p class="nt">' + d.bundanSonra + '</p><div class="dg"><button type="button" class="ana" data-hm-kapat><i class="fa-solid fa-file-lines"></i>Metne dön</button><button type="button" class="iki" data-spiker-yok><i class="fa-solid fa-play"></i>Dinle · ' + d.dinle + '</button></div>' }
    ];
    el = document.createElement('div'); el.className = 'hm'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Hikâye modu');
    el.innerHTML = kartlar.map(function(k){ return '<section class="hm-k ' + k.c + '">' + k.h + '</section>'; }).join('') +
      '<div class="hm-u"><div class="hm-cz">' + kartlar.map(function(){ return '<span><i></i></span>'; }).join('') + '</div>' +
      '<div class="hm-s"><span class="rz" aria-hidden="true"><i class="fa-solid fa-layer-group"></i></span><span class="t"><b>Hikâye modu</b><small></small></span>' +
      '<button type="button" data-hm-kapat aria-label="Kapat, metne dön"><i class="fa-solid fa-xmark"></i></button></div></div>' +
      '<button class="hm-b geri" type="button">Önceki kart</button><button class="hm-b ileri" type="button">Sonraki kart</button>';
    document.body.appendChild(el);
    cz = [].slice.call(el.querySelectorAll('.hm-cz span'));
    el.querySelector('.ileri').onclick = function(){ goster(sira + 1); };
    el.querySelector('.geri').onclick = function(){ goster(sira - 1); };
    /* dokunma bölgeleri: kartın üstünde düğme varsa düğme çalışır, yoksa sol %30 geri, gerisi ileri */
    el.addEventListener('click', function(e){
      if (e.target.closest('[data-hm-kapat]')) { HikayeModu.kapat(); return; }
      if (e.target.closest('button,a') ) return;
      var r = el.getBoundingClientRect(); if (e.clientY - r.top < 120) return;
      goster(sira + ((e.clientX - r.left) < r.width * .3 ? -1 : 1));
    });
    cz.forEach(function(c){ c.firstChild.addEventListener('animationend', function(){ if (sira < kartlar.length - 1) goster(sira + 1); }); });
    el.addEventListener('pointerdown', function(e){ if (!e.target.closest('button,a')) el.classList.add('durdu'); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function(t){ el.addEventListener(t, function(){ if (!el.classList.contains('dur-sabit')) el.classList.remove('durdu'); }); });
    addEventListener('keydown', function(e){ if (!el.classList.contains('acik')) return; if (e.key === 'Escape') HikayeModu.kapat(); if (e.key === 'ArrowRight') goster(sira + 1); if (e.key === 'ArrowLeft') goster(sira - 1); });
  }
  function goster(i){
    var k = el.querySelectorAll('.hm-k'), koyu = document.documentElement.getAttribute('data-tema') === 'koyu';
    sira = Math.max(0, Math.min(kartlar.length - 1, i));
    [].forEach.call(k, function(x, j){ x.classList.toggle('etkin', j === sira); });
    cz.forEach(function(c, j){ c.className = j < sira ? 'bitti' : (j === sira ? 'simdi' : ''); var ii = c.firstChild; ii.style.animation = 'none'; void ii.offsetWidth; ii.style.animation = ''; });
    var u = kartlar[sira].u; if (u === 'tema') u = koyu ? 'acik' : 'koyu';
    el.classList.toggle('ust-koyu', u === 'koyu');
    document.body.setAttribute('data-durum', u === 'koyu' ? 'koyu' : 'acik');
    document.body.setAttribute('data-ec', u === 'koyu' ? '' : 'acik');
    el.querySelector('.hm-s small').textContent = D.detay.kat + ' · ' + (sira + 1) + ' / ' + kartlar.length;
  }
  window.HikayeModu = {
    ac: function(kart){
      if (!el) kur();
      onceki = { durum: document.body.getAttribute('data-durum'), ec: document.body.getAttribute('data-ec') };
      el.classList.add('acik'); document.body.classList.add('hm-acik');
      if (new URLSearchParams(location.search).get('dur') === '1') el.classList.add('durdu', 'dur-sabit');
      goster((kart || 1) - 1);
    },
    kapat: function(){
      if (!el) return;
      el.classList.remove('acik'); document.body.classList.remove('hm-acik');
      cz.forEach(function(c){ c.className = ''; });
      if (onceki) { if (onceki.durum == null) document.body.removeAttribute('data-durum'); else document.body.setAttribute('data-durum', onceki.durum);
                    if (onceki.ec == null) document.body.removeAttribute('data-ec'); else document.body.setAttribute('data-ec', onceki.ec); }
      if (window.HikayeModuKapandi) window.HikayeModuKapandi();
    }
  };
})();
