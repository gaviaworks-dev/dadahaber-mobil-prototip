/* Liste seçenekleri (TEK YAZAR: lider). K5: yalnız kod, ad, referans adları; tek cümle tavsiye. Örnek ekran: Gündem bölümü. */
ALT = [
  { kod: "LS-A", ad: "Daralan büyük başlık", dosya: "ls-a.html", ref: ["<b>iOS büyük başlık:</b>", "<b>Google News:</b>", "<b>Apple News:</b>"] },
  { kod: "LS-B", ad: "Yatay sayfalı alt konular", dosya: "ls-b.html", ref: ["<b>Threads:</b>", "<b>SmartNews:</b>", "<b>Instagram:</b>"] },
  { kod: "LS-C", ad: "Zaman çizelgesi", dosya: "ls-c.html", ref: ["<b>Tiimo:</b>", "<b>Reuters:</b>"] },
  { kod: "LS-D", ad: "Olay kümeleri", dosya: "ls-d.html", ref: ["<b>Ground News:</b>", "<b>Haberler.com:</b>", "<b>Reuters:</b>"] },
  { kod: "LS-E", ad: "Görsel ızgara", dosya: "ls-e.html", ref: ["<b>Le Monde:</b>", "<b>The Guardian:</b>", "<b>The Economist:</b>"] },
  { kod: "LS-F", ad: "Kompakt ve eylemli", dosya: "ls-f.html", ref: ["<b>Ground News:</b>", "<b>Yahoo News:</b>"] }
];
TAVSIYE = '<div class="eyb">TAVSİYE</div><h2>LS-D · Olay kümeleri</h2><p style="margin-top:10px">Aynı olayın haberleri tek kartta toplanır; tekilleştirme ilkesini okura da gösterir ve takip etmeyi kolaylaştırır.</p>';
window.SEC = window.SEC || {}; SEC['liste'] = { ad: 'Liste', klasor: 'liste', alt: ALT, tavsiye: TAVSIYE };
