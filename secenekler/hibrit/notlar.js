/* Hibritler (TEK YAZAR: lider). Beyar'ın seçtiği parçaların birleşimi (docs/tasarim-kararlari.md K16). K5: sayfada yalnız kod + ad, telefon, referans şeridi.
   Fikirler (sayfada gösterilmez, raporda ve kararlar dosyasında):
   HB-1 Baskı önce: ekran saati söyler; baskı başlığı, baskının manşeti ve Spiker bülteni önce, bölümler sonra, kişisel kutular en sonda.
   HB-2 Pano önce: ilk ekran bir bakışta "şu an" (maç, Spiker, senin için, hava, namaz, piyasalar), haberler panonun altında ve bölüm başına iki haber.
   HB-3 Bölümler önce: sayfa doğrudan haberle başlar; her kutu konusunun yanına iner (maç Spor'un, piyasalar Finans'ın altında).
   HB-4 Kişisel önce: "İyi günler, Ece" ile açılır; Bugün Senin İçin, takımın maçı ve takip edilen bölümler önce, gerisi sonra. */
(function(){
  var R = ["<b>AS-C baskı başlığı:</b>", "<b>AS-A bölüm blokları:</b>", "<b>AS-F kutuları:</b>", "<b>AS-D Akış:</b>", "<b>LS-A:</b>", "<b>LS-C çizelge:</b>", "<b>LS-D olaylar:</b>", "<b>HD-A:</b>", "<b>HD-E hikâye modu:</b>"];
  function e(n){ return { ana: 'ana.html?hb=' + n, liste: 'liste.html?hb=' + n + '&calan=1', detay: 'detay.html?hb=' + n + '&calan=1' }; }
  var ALT = [
    { kod: "HB-1", ad: "Baskı önce", ekran: e(1), ref: R },
    { kod: "HB-2", ad: "Pano önce", ekran: e(2), ref: R },
    { kod: "HB-3", ad: "Bölümler önce", ekran: e(3), ref: R },
    { kod: "HB-4", ad: "Kişisel önce", ekran: e(4), ref: R }
  ];
  var ORTAK = [
    { kod: "AKIŞ", ad: "Akış sekmesi · kart destesi", dosya: "akis.html?hb=1", ref: ["<b>AS-D kart destesi:</b>", "<b>BBC Ten to Watch:</b>", "<b>YouTube Shorts:</b>"] },
    { kod: "HM-1", ad: "Hikâye modu · ilk kart", dosya: "detay.html?hb=1&mod=hikaye&kart=1&dur=1", ref: ["<b>HD-E hikâye kartları:</b>", "<b>BBC Ten to Watch:</b>", "<b>Espresso:</b>"] },
    { kod: "HM-6", ad: "Hikâye modu · son kart", dosya: "detay.html?hb=1&mod=hikaye&kart=6&dur=1", ref: ["<b>HD-E hikâye kartları:</b>"] },
    { kod: "SPİKER", ad: "Mini oynatıcı çalarken", dosya: "ana.html?hb=1&calan=1", ref: ["<b>G2 mini oynatıcı:</b>", "<b>Spotify:</b>"] }
  ];
  /* Detay seçildi (K19: HB-4 tabanı + K17 derinlik sekmeleri + K18 bölüm sekmeleri, sıra K20); dördü aynı olduğundan durumları yan yana */
  var DETAY = [
    { kod: "D-1", ad: "Açılış · 15 sn", dosya: "detay.html?hb=4&calan=1", ref: ["<b>HD-A kapak:</b>", "<b>HB-4:</b>"] },
    { kod: "D-2", ad: "15 sn · bölümler", dosya: "detay.html?hb=4&kay=560", ref: ["<b>HD-B derinlik:</b>", "<b>HD-C bölümler:</b>"] },
    { kod: "D-3", ad: "1 dk · Bundan sonra", dosya: "detay.html?hb=4&derinlik=1dk&bolum=sonra&kay=980", ref: ["<b>HD-B derinlik:</b>", "<b>HD-C bölümler:</b>"] },
    { kod: "D-4", ad: "Tam metin · kaynak, yorum", dosya: "detay.html?hb=4&derinlik=tam&kay=2400", ref: ["<b>HD-A:</b>", "<b>HD-E hikâye modu:</b>"] }
  ];
  /* Liste seçildi (K21: HB-3 yapısı + görselli başlık, hikâye/Takip et/Bildirim yok); dördü aynı olduğundan durumları yan yana */
  var LISTE = [
    { kod: "L-1", ad: "Açılış · Spiker çalıyor", dosya: "liste.html?hb=3&calan=1", ref: ["<b>LS-A:</b>", "<b>HB-3:</b>"] },
    { kod: "L-2", ad: "Kaydırınca daralan başlık", dosya: "liste.html?hb=3&dar=1", ref: ["<b>LS-A daralan başlık:</b>"] },
    { kod: "L-3", ad: "Çizelge görünümü", dosya: "liste.html?hb=3&kip=cizelge", ref: ["<b>LS-C çizelge:</b>"] },
    { kod: "L-4", ad: "Çizelge · daralmış", dosya: "liste.html?hb=3&kip=cizelge&dar=1", ref: ["<b>LS-C çizelge:</b>", "<b>LS-D olaylar:</b>"] }
  ];
  var TAVSIYE = '<div class="eyb">TAVSİYE</div><h2>HB-1 · Baskı önce</h2><p style="margin-top:10px">Ürünü rakiplerden ayıran baskı fikri ilk ekranda tam ağırlığıyla duruyor; bölümler ve kutular onun altında sitenin okuruna tanıdık sırada.</p>';
  window.SEC = window.SEC || {};
  SEC['hibrit'] = { ad: 'Hibrit', klasor: 'hibrit', alt: ALT, ortak: ORTAK, detay: DETAY, liste: LISTE, tavsiye: TAVSIYE,
    ekranlar: [['ana', 'Ana Sayfa'], ['liste', 'Liste · seçildi'], ['detay', 'Detay · seçildi'], ['ortak', 'Akış · Hikâye Modu']] };
})();
