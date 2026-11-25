/* Dada Haber Mobil · liste ve detay ortak içeriği (TEK YAZAR: lider). icerik.js'ten SONRA yüklenir; window.D'ye ekler.
   Kaynak: public sözlük (araclar/ornek_veri.json, Gündem 23 Kasım) ve public haber-detay.html (asgari ücret haberi). Yeni veri uydurulmaz.
   g yoksa haberin görseli yoktur (panelde "Görsel eksik" haber gibi görselsiz gösterilir). */
(function(){
  var D = window.D;

  /* Liste ekranı: Gündem bölümü */
  D.liste = {
    bolum: "Gündem", ikon: "fa-newspaper", aciklama: "Türkiye, siyaset, toplum, hukuk ve yerel haberler",
    altKonular: ["Tümü", "Siyaset", "Türkiye", "Toplum", "Hukuk", "Güvenlik", "Eğitim", "Çevre", "Afet", "Yerel", "Özel Haber", "Araştırma", "Analiz"],
    toplam: 95,
    haberler: [
      { saat: "16.05", alt: "İstanbul", baslik: "İstanbul Valiliği: okullar 24 Kasım'da da tatil", yazar: "Sibel Arslan", sure: "1 dk", izlenme: "52,1 B", g: "kar-istanbul", tur: "Son Dakika" },
      { saat: "15.50", alt: "Finans", baslik: "Asgari ücret desteği 2027 bütçesinde yer aldı", yazar: "Sibel Arslan", sure: "3 dk", izlenme: "12,5 B", g: "asgari" },
      { saat: "15.45", alt: "Eğitim", baslik: "LGS için örnek soru kitapçığı yayımlandı", yazar: "Ayşe Yıldız", sure: "4 dk", izlenme: "7,9 B", g: "yks" },
      { saat: "15.42", alt: "Siyaset", baslik: "Bütçe görüşmelerinde muhalefet grupları adına ilk konuşmalar tamamlandı", yazar: "Ayşe Yıldız", sure: "2 dk", izlenme: "7,5 B", g: "tbmm", tur: "Canlı" },
      { saat: "15.40", alt: "Kişisel Finans", baslik: "Asgari ücretlinin kira payı son iki yılda nasıl değişti", yazar: "Ayşe Yıldız", sure: "5 dk", izlenme: "19,6 B", g: "carsi" },
      { saat: "15.25", alt: "Gündem Analizi", baslik: "Yeni yargı paketi neleri değiştirecek, madde madde açıklama", yazar: "Sibel Arslan", sure: "3 dk", izlenme: "11,1 B", tur: "Analiz" },
      { saat: "15.20", alt: "Araştırma", baslik: "81 ilde toplu taşıma ücretlerinin karşılaştırması", yazar: "Mehmet Koçak", sure: "4 dk", izlenme: "7,9 B", g: "metro", tur: "Araştırma" },
      { saat: "15.20", alt: "Türkiye", baslik: "Havalimanlarında kar nedeniyle 46 iç hat seferi iptal edildi", yazar: "Ayşe Yıldız", sure: "1 dk", izlenme: "1,9 B", g: "kar-sokak" },
      { saat: "15.10", alt: "Çevre", baslik: "İstanbul barajlarında doluluk oranı yüzde 38'e geriledi", yazar: "Ayşe Yıldız", sure: "3 dk", izlenme: "11,7 B" },
      { saat: "15.10", alt: "Türkiye", baslik: "Ticari araçlarda kış lastiği zorunluluğu 1 Aralık'ta başlıyor", yazar: "Sibel Arslan", sure: "3 dk", izlenme: "3,6 B", g: "koy-yolu" },
      { saat: "15.00", alt: "Afet", baslik: "Deprem sonrası hasar tespit çalışmaları tamamlandı", yazar: "Sibel Arslan", sure: "2 dk", izlenme: "4,8 B", g: "konteyner" },
      { saat: "15.00", alt: "İzmir", baslik: "İzmir Körfezi'nde dip çamuru temizliği yeni etaba geçti", yazar: "Ayşe Yıldız", sure: "3 dk", izlenme: "11,7 B", g: "balikci" },
      { saat: "14.55", alt: "Yerel", baslik: "Palandöken'de kayak sezonu 12 Aralık'ta açılıyor", yazar: "Hakan Uysal", sure: "3 dk", izlenme: "6,7 B", g: "ankara-kar" },
      { saat: "14.55", alt: "Eğitim", baslik: "Üniversitelerde yabancı öğrenci sayısı 330 bini geçti", yazar: "Ayşe Yıldız", sure: "5 dk", izlenme: "3,9 B", g: "osym" }
    ]
  };

  /* Detay ekranı: public haber-detay.html (asgari ücret) */
  D.detay = {
    yol: ["Gündem", "Türkiye"], kat: "Gündem", ikon: "fa-newspaper",
    baslik: "Asgari ücret görüşmelerinde ilk toplantı 4 Aralık'ta yapılacak",
    spot: "Asgari Ücret Tespit Komisyonu, 2027 yılı için ilk toplantısını 4 Aralık'ta yapacak. İşçi ve işveren tarafı taleplerini bu toplantıda masaya koyacak; komisyonun yıl sonuna kadar karar vermesi bekleniyor.",
    yazar: "Hakan Uysal", unvan: "Çalışma Hayatı Muhabiri", tarih: "23 Kasım 2026", saat: "14.05", guncelleme: "14.40",
    sure: "4 dk", izlenme: "24,6 B", g: "asgari", video: "2:14", dinle: "4 dk",
    altyazi: "Asgari Ücret Tespit Komisyonu Ankara'da toplanacak · Dada Haber arşivi",
    ozet: ["Komisyon ilk kez 4 Aralık'ta toplanıyor; karar yıl sonuna kadar bekleniyor.",
           "İşçi tarafı enflasyon ve refah payını, işveren tarafı maliyet artışını öne çıkarıyor.",
           "Belirlenecek ücret 1 Ocak 2027'den itibaren geçerli olacak."],
    nedenOnemli: "Asgari ücret, yaklaşık 7 milyon çalışanın gelirini doğrudan, birçok sosyal ödemeyi ise dolaylı olarak belirliyor.",
    banaEtkisi: "Asgari ücretle ya da ona bağlı bir ödemeyle geçiniyorsan yeni tutar ocak bordrondan itibaren geçerli olacak.",
    bundanSonra: "Komisyonun aralık sonuna kadar en az dört kez toplanması, kararın ise yılın son haftasında açıklanması bekleniyor.",
    govde: [
      { p: "Çalışma ve Sosyal Güvenlik Bakanlığından yapılan açıklamaya göre Asgari Ücret Tespit Komisyonu, 2027 yılında uygulanacak asgari ücreti belirlemek için ilk toplantısını 4 Aralık Perşembe günü Ankara'da yapacak. Komisyonda işçi, işveren ve hükümet tarafını temsil eden beşer üye yer alıyor." },
      { p: "Toplantıda Türkiye İstatistik Kurumunun hane halkı verileri ve yıl sonu enflasyon beklentileri ele alınacak. Bakanlık kaynakları, ilk toplantının ağırlıklı olarak veri paylaşımına ayrılacağını, rakamların ise sonraki toplantılarda konuşulacağını belirtiyor." },
      { h: "Taraflar ne istiyor?" },
      { p: "İşçi tarafı, asgari ücretin yalnızca geçmiş enflasyona göre değil, refah payı eklenerek belirlenmesini istiyor. Konfederasyon temsilcileri, kira ve gıda harcamalarındaki artışın dar gelirli haneleri en çok etkileyen kalemler olduğunu vurguluyor." },
      { p: "İşveren tarafı ise özellikle küçük ve orta ölçekli işletmelerin maliyet yükünü gündeme getiriyor. İşveren temsilcileri, asgari ücret desteğinin sürdürülmesi ve vergi düzenlemesiyle artışın işletmeler üzerindeki etkisinin hafifletilmesini öneriyor." },
      { gorsel: "tbmm", altyazi: "Komisyonun geçen yılki toplantısından bir kare · Dada Haber arşivi" },
      { h: "Takvim nasıl işleyecek?" },
      { p: "Geçen yıl komisyon dört toplantının ardından kararını aralık ayının son haftasında açıklamıştı. Bu yıl da benzer bir takvim öngörülüyor; ancak taraflar arasında uzlaşma sağlanamazsa karar oy çokluğuyla alınabiliyor." },
      { p: "Belirlenecek asgari ücret 1 Ocak 2027'den itibaren geçerli olacak ve yaklaşık 7 milyon çalışanı doğrudan ilgilendiriyor. Asgari ücret aynı zamanda bazı sosyal yardım ve ödemelerin hesaplanmasında da temel alınıyor." }
    ],
    kaynaklar: [
      { kurum: "Çalışma ve Sosyal Güvenlik Bakanlığı", aciklama: "Asgari Ücret Tespit Komisyonu toplantı duyurusu · 22 Kasım 2026" },
      { kurum: "Türkiye İstatistik Kurumu", aciklama: "Hane Halkı İşgücü İstatistikleri, Ekim 2026" },
      { kurum: "Resmî Gazete", aciklama: "Asgari Ücret Yönetmeliği, komisyonun çalışma usulü" }
    ],
    etiketler: ["Asgari Ücret", "Çalışma Hayatı", "Enflasyon", "Bütçe 2027"],
    yorumSayisi: 4,
    yorumlar: [
      { ad: "Filiz Acar", rozet: "Düzenli okur", zaman: "2 saat önce", metin: "Geçen yıl da ilk toplantıdan rakam çıkmamıştı; asıl tartışma üçüncü toplantıda başlıyor. Takvimi baştan net yazmanız iyi olmuş.", begeni: 12 },
      { ad: "Dada Haber Editör", rozet: "Editör", zaman: "1 saat önce", metin: "Teşekkürler. Komisyonun her toplantısından sonra bu haberi güncelleyeceğiz; güncellemeler başlığın altındaki saatte görünür.", begeni: 4 }
    ],
    ilgili: [
      { kat: "Gündem", baslik: "Asgari ücret desteği 2027 bütçesinde yer aldı", sure: "3 dk", g: "asgari" },
      { kat: "Gündem", baslik: "Asgari ücretlinin kira payı son iki yılda nasıl değişti", sure: "5 dk", g: "carsi" },
      { kat: "Gündem", baslik: "Bütçe görüşmelerinde muhalefet grupları adına ilk konuşmalar tamamlandı", sure: "2 dk", g: "tbmm" }
    ]
  };

  /* Kategori hikâyeleri (eski Dada Haber uygulamasındaki kategori daireleri; Beyar 2026-11-24).
     Her kategori o günün haberlerinden oluşur: manşet + bölüm haberleri (D.manset, D.bolumler). Yeni haber yok.
     goruldu: örnek durum (Kampüs ve Keşfet görülmüş). Hangi haberlerin hikâyeye gireceği panelde açık konu (docs/ekran-envanteri.md §11). */
  var KOD = { "Gündem":"gundem","Spor":"spor","Finans":"finans","Kadın":"kadin","Savunma":"savunma","Dünya":"dunya","Kampüs":"kampus","Keşfet":"kesfet" };
  D.hikayeler = D.bolumler.map(function(b){
    var h = [];
    D.manset.forEach(function(m){ if (m.kat === b.ad) h.push({ baslik: m.baslik, g: m.g, yazar: m.yazar, sure: m.sure }); });
    b.haberler.forEach(function(x){ if (!h.some(function(y){ return y.baslik === x.baslik; })) h.push({ baslik: x.baslik, g: x.g, yazar: x.yazar, sure: x.sure }); });
    return { kod: KOD[b.ad], kat: b.ad, ikon: b.ikon, g: h[0].g, haberler: h, goruldu: (b.ad === "Kampüs" || b.ad === "Keşfet") };
  });
  /* Köşe yazıları (public yazarlar.html "Yazarlar" vitrini ve kose-yazisi.html; ad, unvan ve başlık aynen). */
  /* g: yazının konusuna uygun haber görseli (yazar portresi yok; public sitede de baş harf) */
  D.koseYazilari = [
    { ad: "Aylin Sezer", unvan: "Köşe Yazarı", baslik: "Kütüphanelerin gece de açık kalması bir lütuf değil, ihtiyaç", sure: "5 dk", g: "yks" },
    { ad: "Elif Aras", unvan: "Finans Editörü", baslik: "Faiz sabit kaldı ama kredi faizleri neden düşmüyor", g: "faiz" },
    { ad: "Mert Yalın", unvan: "Savunma Editörü", baslik: "Hava savunmasında ikinci teslimatın anlamı", g: "kaan" },
    { ad: "Zeynep Ak", unvan: "Dünya Editörü", baslik: "Brüksel'de göç pazarlığı yine ertelendi", g: "ab-goc" },
    { ad: "Deniz Kara", unvan: "Kadın Editörü", baslik: "Yeni eylem planında eksik kalan başlıklar", g: "kadin-girisim" }
  ];

  /* Bugün Senin İçin: örnek üyenin (D.uye) takipleriyle eşleşen günün haberleri. Yeni haber yok; D.bolumler'den seçilir. */
  function bul(bolum, i){ var b = D.bolumler.filter(function(x){ return x.ad === bolum; })[0]; var h = b.haberler[i]; return { kat: bolum, ikon: b.ikon, baslik: h.baslik, yazar: h.yazar, sure: h.sure, g: h.g }; }
  D.seninIcin = [
    { neden: "Galatasaray", h: bul("Spor", 0) },
    { neden: "Faiz", h: bul("Finans", 0) },
    { neden: "İstanbul", h: bul("Gündem", 1) },
    { neden: "Savunma Sanayii", h: bul("Savunma", 0) }
  ];
})();
