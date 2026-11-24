/* Alt gezinme seçenekleri (TEK YAZAR: lider). K5: yalnız kod, ad, referans adları; tek cümle tavsiye. */
ALT = [
  { kod: "G1", ad: "Yüzen cam kapsül", dosya: "g1.html", ref: ["<b>Apple HIG Tab bars (iOS 26):</b>", "<b>Apple News:</b>", "<b>Apple Music:</b>"] },
  { kod: "G2", ad: "Yerleşik çubuk ve mini oynatıcı", dosya: "g2.html", ref: ["<b>Spotify:</b>", "<b>The New York Times:</b>"] },
  { kod: "G3", ad: "Gösterge hapı", dosya: "g3.html", ref: ["<b>Material 3 navigation bar:</b>", "<b>Google News:</b>"] },
  { kod: "G4", ad: "Ortada Spiker", dosya: "g4.html", ref: ["<b>TikTok:</b>", "<b>Instagram:</b>", "<b>Le Monde:</b>"] },
  { kod: "G5", ad: "Koyu ada", dosya: "g5.html", ref: ["<b>Material 3 Expressive:</b>"] }
];
TAVSIYE =
  '<div class="eyb">TAVSİYE</div>' +
  '<h2>G1 · Yüzen cam kapsül</h2>' +
  '<p style="margin-top:10px">Bugünün iOS çizgisinde; Spiker mini oynatıcısı çubuğun parçası olur, kaydırınca küçülüp okumaya yer açar.</p>';

window.SEC = window.SEC || {}; SEC['alt-gezinme'] = { ad: 'Alt Gezinme', klasor: 'alt-gezinme', alt: ALT, tavsiye: TAVSIYE };
