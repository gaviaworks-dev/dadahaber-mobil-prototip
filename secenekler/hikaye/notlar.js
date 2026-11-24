/* Hikâye görüntüleyici (TEK YAZAR: lider). Eski Dada Haber uygulamasındaki kategori hikâyeleri, yeni dilde. Ekran ve durumları. */
ALT = [
  { kod: "HK-1", ad: "Görüntüleyici", dosya: "hikaye.html?kat=gundem", ref: ["<b>Eski Dada Haber uygulaması:</b>", "<b>Instagram:</b>", "<b>BBC News:</b>"] },
  { kod: "HK-2", ad: "Yükleniyor", dosya: "hikaye.html?durum=yukleniyor", ref: ["<b>NN/g iskelet ekran:</b>"] },
  { kod: "HK-3", ad: "Bugün hikâye yok", dosya: "hikaye.html?durum=bos&kat=kadin", ref: ["<b>Eski Dada Haber uygulaması:</b>"] }
];
TAVSIYE = '<div class="eyb">NOT</div><h2>Ana sayfadaki dairelere dokununca açılır</h2><p style="margin-top:10px">Dokun: ileri / geri · basılı tut: dur · aşağı çek: kapat · kategori bitince sıradaki.</p>';
window.SEC = window.SEC || {}; SEC['hikaye'] = { ad: 'Hikâye', klasor: 'hikaye', alt: ALT, tavsiye: TAVSIYE };
