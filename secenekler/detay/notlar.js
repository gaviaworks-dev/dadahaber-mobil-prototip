/* Haber detayı seçenekleri (TEK YAZAR: lider). Örnek haber: asgari ücret (public haber-detay.html ile aynı). */
ALT = [
  { kod: "HD-A", ad: "Kapak ve sakin okuma", dosya: "hd-a.html", ref: ["<b>The Guardian:</b>", "<b>Material 3 Expressive:</b>"] },
  { kod: "HD-B", ad: "Özet önce, derinlik seçici", dosya: "hd-b.html", ref: ["<b>Particle:</b>", "<b>Yahoo News:</b>", "<b>Telegram:</b>"] },
  { kod: "HD-C", ad: "Bölümlü haber", dosya: "hd-c.html", ref: ["<b>Semafor:</b>", "<b>Axios:</b>"] },
  { kod: "HD-D", ad: "Dinle öncelikli", dosya: "hd-d.html", ref: ["<b>Speechify:</b>", "<b>The New York Times:</b>", "<b>Spotify:</b>"] },
  { kod: "HD-E", ad: "Hikâye kartları", dosya: "hd-e.html", ref: ["<b>BBC News:</b>", "<b>Espresso:</b>", "<b>Instagram:</b>"] },
  { kod: "HD-F", ad: "Gelişen olay", dosya: "hd-f.html", ref: ["<b>Apple Sports:</b>", "<b>The Guardian:</b>", "<b>BBC News:</b>"] }
];
TAVSIYE = '<div class="eyb">TAVSİYE</div><h2>HD-B · Özet önce, derinlik seçici</h2><p style="margin-top:10px">Dada Özet ilk ekranda; okur 15 saniye, 1 dakika ya da tam metin arasında tek dokunuşla geçer.</p>';
window.SEC = window.SEC || {}; SEC['detay'] = { ad: 'Detay', klasor: 'detay', alt: ALT, tavsiye: TAVSIYE };
