/* KÖK (TEK YAZAR: lider). Yasin Bey'e gösterilecek tek kök: ana sayfa (K22, HB-4 tabanı), liste (K21), detay (K19–K20), Akış (K23), hikâye modu.
   Ana sayfa üye ve misafir halinde; açık/koyu karşılaştırma sayfasının tema seçicisinden. K5: yalnız kod + ad, telefon, referans şeridi. */
(function(){
  var ALT = [
    { kod: "KÖK-1", ad: "Ana sayfa · üye", dosya: "kok.html?hb=4&calan=1", ref: ["<b>HB-4:</b>", "<b>Dada Gastro mobil hero:</b>", "<b>AS-C baskı:</b>", "<b>AS-F kutuları:</b>"] },
    { kod: "KÖK-2", ad: "Ana sayfa · misafir", dosya: "kok.html?hb=4&uye=0", ref: ["<b>HB-4:</b>", "<b>Dada Gastro mobil hero:</b>"] },
    { kod: "KÖK-3", ad: "Liste · Gündem", dosya: "liste.html?hb=4&kok=1", ref: ["<b>HB-3:</b>", "<b>LS-A:</b>", "<b>LS-C çizelge:</b>", "<b>LS-D olaylar:</b>"] },
    { kod: "KÖK-4", ad: "Haber detayı", dosya: "detay.html?hb=4&kok=1", ref: ["<b>HB-4:</b>", "<b>HD-A:</b>", "<b>HD-B derinlik:</b>", "<b>HD-C bölümler:</b>"] },
    { kod: "KÖK-5", ad: "Akış · dikey video", dosya: "akis.html?hb=4&kok=1", ref: ["<b>AS-D kart destesi:</b>", "<b>YouTube Shorts:</b>"] },
    { kod: "KÖK-6", ad: "Hikâye modu", dosya: "detay.html?hb=4&kok=1&mod=hikaye&kart=1&dur=1", ref: ["<b>HD-E hikâye kartları:</b>"] }
  ];
  window.SEC = window.SEC || {};
  SEC['kok'] = { ad: 'Kök', klasor: 'hibrit', alt: ALT,
    tavsiye: '<div class="eyb">KÖK</div><h2>Tek kök, Yasin Bey\'in onayına</h2><p style="margin-top:10px">Ana sayfa HB-4 tabanında, liste HB-3, detay HB-4; Akış ve hikâye modu ortak.</p>' };
})();
