/* Dada Haber Mobil · seçeneklerin ortak içeriği (TEK YAZAR: lider).
   Kaynak: public depo araclar/ornek_veri.json (sözlük) ve public index.html, gunun-5-i.html, akis.html, dada-ozet.html, podcast.html, mac-detay.html.
   Yeni veri uydurulmaz; bütün ana sayfa alternatifleri bu nesneden beslenir. "Şimdi": 23 Kasım 2026 Pazartesi 16.05.
   g = haber görseli (assets/gorsel/haber/<g>.jpg; Wikimedia Commons, konuya uygun; atıf KAYNAK.txt). */
window.D = {
  simdi: { tarih: "23 Kasım 2026", gun: "Pazartesi", saat: "16.05", kisa: "23 Kas" },

  /* Manşet (public ana sayfa, sırasıyla 01/05 …) */
  manset: [
    { kat: "Gündem", ikon: "fa-newspaper", baslik: "Asgari ücret görüşmelerinde ilk toplantı 4 Aralık'ta yapılacak", yazar: "Hakan Uysal", sure: "3 dk", tarih: "23 Kas", izlenme: "24,6 B", g: "asgari", medya: ["Video · 2:14", "Dinle · 3 dk"] },
    { kat: "Spor", ikon: "fa-futbol", baslik: "Millî takımın aday kadrosu açıklandı", yazar: "Burak Tan", sure: "2 dk", tarih: "23 Kas", izlenme: "18,2 B", g: "milli" },
    { kat: "Finans", ikon: "fa-chart-line", baslik: "Rüzgâr enerjisinde yeni yatırım ihalesi", yazar: "Can Demir", sure: "2 dk", tarih: "23 Kas", izlenme: "19,6 B", g: "ruzgar" },
    { kat: "Dünya", ikon: "fa-earth-europe", baslik: "AB dışişleri bakanları göç paketini görüştü", yazar: "Zeynep Ak", sure: "3 dk", tarih: "23 Kas", izlenme: "23,1 B", g: "ab-goc" },
    { kat: "Gündem", ikon: "fa-newspaper", baslik: "İstanbul Valiliği: okullar 24 Kasım'da da tatil", yazar: "Sibel Arslan", sure: "1 dk", tarih: "23 Kas", izlenme: "52,1 B", g: "kar-istanbul" }
  ],

  /* Son Dakika (sözlük son_dakika.liste) */
  sonDakika: [
    { saat: "16.05", kat: "Gündem", baslik: "İstanbul Valiliği: okullar 24 Kasım'da da tatil", sure: "1 dk" },
    { saat: "15.42", kat: "Siyaset", baslik: "Bütçe görüşmelerinde muhalefet grupları adına ilk konuşmalar tamamlandı", sure: "2 dk" },
    { saat: "15.20", kat: "Türkiye", baslik: "Havalimanlarında kar nedeniyle 46 iç hat seferi iptal edildi", sure: "1 dk" },
    { saat: "14.40", kat: "Türkiye", baslik: "Kuzey Marmara Otoyolu'nda ağır tonajlı araç geçişine kısıtlama", sure: "1 dk" },
    { saat: "14.05", kat: "Gündem", baslik: "Asgari ücret görüşmelerinde ilk toplantı 4 Aralık'ta yapılacak", sure: "2 dk" },
    { saat: "14.00", kat: "Finans", baslik: "Merkez Bankası politika faizini yüzde 42,5'te sabit tuttu", sure: "2 dk" }
  ],

  /* Günün 5'i (gunun-5-i.html, 07.00 baskısı) */
  gunun5: {
    baski: "07.00", okuma: "12 dk", dinleme: "9 dk",
    alt: "Bugünü anlamak için beş haber: komisyon, faiz, kar, göç, sınav",
    liste: [
      { no: "01", baslik: "Asgari ücret komisyonu 4 Aralık'ta toplanıyor", kat: "Gündem", sure: "3 dk", ses: "1 dk 50 sn", g: "asgari" },
      { no: "02", baslik: "Politika faizi yüzde 42,5'te sabit kaldı", kat: "Finans", sure: "2 dk", ses: "1 dk 35 sn", g: "faiz" },
      { no: "03", baslik: "Doğuda kar yağışı: 214 köy yolu kapalı", kat: "Gündem", sure: "2 dk", ses: "1 dk 40 sn", g: "koy-yolu" },
      { no: "04", baslik: "AB göç paketinde oylama ocağa kaldı", kat: "Dünya", sure: "3 dk", ses: "2 dk 05 sn", g: "ab-meclis" },
      { no: "05", baslik: "YKS 2027 başvuru tarihleri belli oldu", kat: "Kampüs", sure: "2 dk", ses: "1 dk 30 sn", g: "yks" }
    ]
  },

  /* Dada Özet (dada-ozet.html, 15 sn katmanı) */
  ozet: [
    { konu: "Asgari ücret komisyonu", maddeler: ["Komisyon ilk kez 4 Aralık'ta toplanıyor.", "Karar yıl sonuna kadar bekleniyor."] },
    { konu: "Faiz kararı", maddeler: ["Merkez Bankası politika faizini yüzde 42,5'te sabit tuttu.", "Sonraki karar 18 Aralık'ta açıklanacak."] },
    { konu: "AB göç paketi", maddeler: ["AB dışişleri bakanları paketin taslağını görüştü.", "Oylama ocak ayına bırakıldı."] }
  ],

  /* Bölüm haberleri (public ana sayfa bölümleri + sözlük); site menüsünün sırası */
  bolumler: [
    { ad: "Gündem", ikon: "fa-newspaper", baslik: "Türkiye'de Bugün", haberler: [
      { baslik: "Yargı paketi Meclis komisyonunda kabul edildi", yazar: "Mehmet Koçak", sure: "3 dk", izlenme: "8,4 B", g: "tbmm" },
      { baslik: "İstanbul'da Kirazlı–Halkalı metrosu açılıyor", yazar: "Mehmet Koçak", sure: "3 dk", izlenme: "23,1 B", g: "metro" },
      { baslik: "Deprem bölgesinde kalıcı konutların yüzde 70'i tamamlandı", yazar: "Sibel Arslan", sure: "3 dk", izlenme: "5,2 B", g: "konteyner" } ] },
    { ad: "Spor", ikon: "fa-futbol", baslik: "Sahada Bu Hafta", haberler: [
      { baslik: "Süper Lig'de 14. hafta: derbi öncesi son durum", yazar: "Burak Tan", sure: "3 dk", izlenme: "3,8 B", g: "superlig" },
      { baslik: "Basketbolda Avrupa kupalarında üç galibiyet", yazar: "Gizem Aktaş", sure: "3 dk", izlenme: "19,6 B", g: "basket" },
      { baslik: "Voleybol Kadın Millî Takımı finalde", yazar: "Murat Tekin", sure: "3 dk", izlenme: "7,1 B", g: "voleybol" } ] },
    { ad: "Finans", ikon: "fa-chart-line", baslik: "Piyasa ve Cüzdan", haberler: [
      { baslik: "Merkez Bankası politika faizini yüzde 42,5'te sabit tuttu", yazar: "Elif Aras", sure: "3 dk", izlenme: "27,5 B", g: "faiz" },
      { baslik: "Altının gramı haftaya yükselişle başladı", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "3,8 B", g: "altin" },
      { baslik: "Borsa şirketlerinin dokuz aylık kârı yüzde 18 geriledi", yazar: "Nazlı Öztürk", sure: "5 dk", izlenme: "8,8 B", g: "borsa" } ] },
    { ad: "Kadın", ikon: "fa-venus", baslik: "Kadınların Gündemi", haberler: [
      { baslik: "Kadın girişimcilere sıfır faizli kredi desteği", yazar: "Gülşen Ateş", sure: "3 dk", izlenme: "11,7 B", g: "kadin-girisim" },
      { baslik: "Meme kanseri taramasında yaş sınırı 40'a indi", yazar: "Deniz Kara", sure: "3 dk", izlenme: "8,4 B", g: "tarama" } ] },
    { ad: "Savunma", ikon: "fa-shield-halved", baslik: "Savunma Sanayiinde Son Durum", haberler: [
      { baslik: "KAAN'ın ikinci prototipi test uçuşunda", yazar: "Mert Yalın", sure: "2 dk", izlenme: "14,9 B", g: "kaan" },
      { baslik: "Yeni insansız deniz aracı envantere girdi", yazar: "Mert Yalın", sure: "3 dk", izlenme: "3,8 B", g: "ida" } ] },
    { ad: "Dünya", ikon: "fa-earth-europe", baslik: "Dünyada Bugün", haberler: [
      { baslik: "AB dışişleri bakanları Brüksel'de genişleme gündemini ele aldı", yazar: "Zeynep Ak", sure: "3 dk", izlenme: "6,9 B", g: "bruksel" },
      { baslik: "G7 ülkeleri kritik mineraller için ortak tedarik planı hazırladı", yazar: "Zeynep Ak", sure: "5 dk", izlenme: "3,7 B", g: "maden" } ] },
    { ad: "Kampüs", ikon: "fa-graduation-cap", baslik: "Kampüste Bu Hafta", haberler: [
      { baslik: "ÖSYM, 2027 sınav takviminin tamamını yayımladı", yazar: "Ece Demirel", sure: "6 dk", izlenme: "11,1 B", g: "osym" },
      { baslik: "Kış dönemi kulüp tanıtım haftası 1 Aralık'ta başlıyor", yazar: "Aslı Gür", sure: "4 dk", izlenme: "13,1 B", g: "kulup" } ] },
    { ad: "Keşfet", ikon: "fa-compass", baslik: "Keşfet", haberler: [
      { baslik: "Restore edilen tarihî tiyatro binası yeniden perde açtı", yazar: "İrem Su", sure: "6 dk", izlenme: "7,7 B", g: "akm" },
      { baslik: "Geleneksel ekşi maya ekmek atölyeleri kentlerde yaygınlaşıyor", yazar: "Ozan Er", sure: "5 dk", izlenme: "9,5 B", g: "eksimaya" } ] }
  ],

  /* Akış (akis.html: günün 12 videosu, sonu var) */
  akis: { toplam: 12, liste: [
    { kat: "Gündem", baslik: "Marmara'da kar yağışı: İstanbul sabah saatlerinde", sure: "0:48", izlenme: "31,2 B", g: "kar-sokak" },
    { kat: "Finans", baslik: "Kredi kartı asgari ödeme oranı: 40 saniyede ne değişmedi?", sure: "0:40", g: "kredi-karti" },
    { kat: "Kampüs", baslik: "YKS 2027 tarihleri tek ekranda", sure: "0:35", g: "yks" },
    { kat: "Teknoloji", baslik: "5G hangi illerde açıldı?", sure: "0:52", g: "anten" },
    { kat: "Dünya", baslik: "İklim konferansının sonuç metni üç maddede", sure: "0:58", g: "iklim" },
    { kat: "Spor", baslik: "Ara transfer dönemi ne zaman açılıyor?", sure: "0:33", g: "antrenman" } ] },

  /* Spiker (public: 16.00 Bülteni) */
  spiker: { bulten: "16.00 Bülteni", sure: "3:00", gorsel: "spiker-kare",
    sirada: ["Asgari ücret komisyonu 4 Aralık'ta toplanıyor", "Merkez Bankası faizi yüzde 42,5'te sabit tuttu", "Marmara'da kar uyarısı sürüyor"],
    bultenler: ["16.00 Bülteni", "Takip Ettiklerin", "Ekonomi", "Spor"] },

  /* Servisler */
  hava: { sehir: "İstanbul", durum: "Yoğun kar", ikon: "fa-snowflake", derece: 1, hissedilen: -4, yuksek: 2, dusuk: -2,
    gunler: [ { gun: "Sal", ikon: "fa-snowflake", y: 1, d: -3 }, { gun: "Çar", ikon: "fa-cloud-showers-heavy", y: 4, d: 0 }, { gun: "Per", ikon: "fa-cloud", y: 6, d: 1 }, { gun: "Cum", ikon: "fa-cloud-sun", y: 8, d: 3 } ] },
  namaz: { sehir: "İstanbul", siradaki: "Akşam", saat: "17.37", kalan: "1:32",
    vakitler: [ ["İmsak","06.37"], ["Güneş","08.07"], ["Öğle","12.55"], ["İkindi","15.24"], ["Akşam","17.37"], ["Yatsı","19.02"] ] },
  piyasa: { guncelleme: "14.30", not: "15 dk gecikmeli · satış",
    liste: [ { ad: "Dolar", kod: "USD/TL", deger: "34,5448", degisim: "0,12", yon: "y" }, { ad: "Euro", kod: "EUR/TL", deger: "36,2180", degisim: "0,21", yon: "y" },
             { ad: "Gram altın", kod: "XAU/gr", deger: "2.968,40", degisim: "0,64", yon: "y" }, { ad: "BIST 100", kod: "XU100", deger: "10.248,62", degisim: "0,43", yon: "d" } ] },
  mac: { lig: "Süper Lig · 14. hafta", ev: "Galatasaray", evKod: "GS", dep: "Fenerbahçe", depKod: "FB", skor: "2 – 1", dakika: "67'" },

  podcast: [
    { seri: "Ekonomi Masası", no: "42. bölüm", baslik: "Enflasyon sepetinde bu ay ne değişti?", sure: "48:12", konuk: "Prof. Dr. Elif Aydın", g: "carsi" },
    { seri: "Teknoloji Sohbetleri", no: "41. bölüm", baslik: "Yapay zekâ haber odasına girerse", sure: "36:05", konuk: "Kerem Aksoy", g: "veri-merkezi" },
    { seri: "Saha", no: "40. bölüm", baslik: "Deprem bölgesinde üçüncü kış", sure: "51:47", konuk: "Sibel Arslan", g: "konteyner" } ],
  fotoFokus: [
    { baslik: "Ankara'da ilk kar: şehirden yirmi dört kare", adet: 24, g: "ankara-kar" },
    { baslik: "Boğaz'da sabah: balıkçıların mesaisi", adet: 18, g: "balikci" },
    { baslik: "Kapadokya'da balon sezonu yeniden başladı", adet: 27, g: "balon" } ],

  /* Kişisel (üye hali; public C29'daki örnek üye "Ece") */
  uye: { ad: "Ece", takip: ["Galatasaray", "Faiz", "İstanbul", "Savunma Sanayii"], seri: 12 }
};
