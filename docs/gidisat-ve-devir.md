# Dada Haber Mobil · Gidişat ve Flutter'a devir

Tarih: 2026-11-25 · Depo: `dadahaber-mobil-prototip` · Canlı: `secenekler/ekranlar/` (ekran dizini), `secenekler/ui-kit.html` (kit)

## 1. İzlenen sıra ve neden

1. **Araştırma ve envanter** (`docs/arastirma.md`, `docs/ekran-envanteri.md`): önce haber uygulamaları ve güncel uygulamalar incelendi; kararları sezgiye değil örneğe bağlamak için.
2. **Alternatifler** (`secenekler/`): ana sayfa, liste, detay için 6'şar alternatif; yön Beyar'ın gözüyle seçilsin diye yan yana gösterildi.
3. **Parça seçimiyle hibrit** (K16–K21): Beyar tek alternatif değil parça seçti; dört hibritle birleşimler denendi, ana sayfa HB-4, liste HB-3, detay HB-4 tabanında karara bağlandı.
4. **Kökler** (K22–K39, `secenekler/hibrit/`): beş kök ekran (ana sayfa, liste, detay, Akış, hikâye modu) toplantı içinde art arda düzeltildi; sonra tutarlılık incelemesiyle tek bileşen kuralları çıkarıldı (K34).
5. **UI kit** (K37–K38, `secenekler/kit/`): kökten çıkarılan bileşenler, değişkenler ve etkileşim sözleşmesi; yayılımın tek kaynağı olsun diye.
6. **Tam ekran listesi** (`docs/ekran-listesi.md`): her ekran ve hal bir satır; yayılımın iş listesi.
7. **Dalga dalga yayılım**: kök halleri → içerik → durum ve giriş → hesap → sistem → sitede bekleyen bölümler (K41). Her dalga ölçülüp yayınlandı ki sorun büyük kısım yayılmadan görülsün. Sonuç: 679 satır, 116 yeni dosya + 4 kök dosyası, hepsi işaretli.

## 2. Dersler

- **Kök, kit ve ekran listesi değerliydi. 604 (sonra 679) satırın hepsini HTML'de çizmek fazlaydı.** Hallerin çoğu (yükleniyor, boş, hata, çevrimdışı, misafir) Flutter'da kit widget'larından gelir. Bir sonraki projede HTML'de yalnız düzeni farklı ekranlar çizilir, haller listede satır olarak yazılır (kural CLAUDE.md "Yayılım kuralı", K42).
- **Ekran listesi sitenin sayfa envanteriyle birebir eşlenmedi.** Sitede üretilmiş sayfalar (Afet, Trafik, Ekonomi Araçları, Hamilelik, Astroloji, Resmî İlanlar, dil, Dada Ailesi) "karar bekliyor" kodlarına (B-xx) bakılarak dışarıda bırakıldı; Beyar'ın uyarısıyla 6. dalgada eklendi. Kural: sitede üretilmiş her sayfa kapsamdadır.
- **Kit yayılım sırasında değişti, önceki dalgalar yeniden ölçülmedi.** Değişiklikler çoğunlukla dokunma alanı büyütme ve küçük hatalardı (podcast oynatın Spiker'ı başlatması, uzun basma menüsünde Dinle, mini oynatıcı başlığı, iskelet rengi). Bozulma beklenmez ama kanıtlanmadı.
- **Kitte olmayan bileşenler ekran içinde yazıldı, bazıları iki kez ya da daha fazla** (aşağıdaki listede "tekrar"). Kitte eksik bileşen, ekip yazmadan önce kite eklenmeliydi; paralel ekiplerde bu kural yürümedi.
- Toplantı içi düzeltmeler (marka logosu, Dinle/Spiker ayrımı, mini oynatıcının her ekranda açık görünmesi) kökte ve kitte yapıldı; kökten kite akan tek kaynak düzeni bu yüzden işe yaradı.

## 3. Flutter'a devir

**Tema değerleri**
- `secenekler/_ortak/marka.css`: köşe (`--k-ic` 8, `--k-kontrol` 12, `--k-kart` 16, `--k-buyuk` 24, `--k-daire`, `--k-cubuk`), ağırlık (300/500/800), iki gölge, `--ikon-bosluk` 8, boşluk ölçeği `--b-4 … --b-40`, `--foto-etiket` (fotoğraf üstü yazı zemini, AA ölçülü).
- `secenekler/_ortak/cerceve.css`: renk değişkenleri açık/koyu (`--marka`, `--zemin`, `--yuzey`, `--metin-*`, `--cizgi`, `--anlik`, `--artis`, `--azalis`, `--cam`), `--kenar` 16, `--dokun` 44, güvenli alanlar. Köşe rolleri ve ikon eşlemesi: K30, K32, K34, K39.
- Detay yazı ölçeği: tek değişken `--mb` (16), +2 / +4 / −1 / −2 (K29, K31).

**Bileşenler**: `secenekler/kit/kit.css` (`k-` önekli), `kit.js` (`window.K` kurucuları, API başta), vitrin `secenekler/ui-kit.html` (145 bileşen, bütün halleri, açık/koyu, etkileşim sözleşmesi).

**KİT ADAYI (ekran içinde yazılmış, kite girmemiş; dosyalar `secenekler/ekranlar/` altına göre)**
| Bileşen | Dosyalar | Not |
|---|---|---|
| Büyük değer bloğu (`.x-deger`) | icerik/namaz-vakitleri, hava-durumu, enstruman, hamilelik, afet | **tekrar (5)** |
| İşletim sistemi yüzeyi (bildirim, kilit ekranı, medya, mesaj) | sistem/kilit-ekrani, bildirimden-acilis, derin-baglanti, kaydet | **tekrar (4)** |
| Telefon klavyesi yeri (`.kb`, `.os-klavye`) | icerik/yorumlar, arama; sistem/kaydet | **tekrar (3)** |
| Görselsiz detay başlığı (`k-dbas`, `.dbas`) | icerik/video-detay, infografik-detay, resmi-ilan | **tekrar (3)** |
| Veri kartı ve çubuk grafik (`k-veri-kart`, `k-grafik`, çubuk satırı) | icerik/infografik, infografik-detay, veri-ve-harita | **tekrar** |
| Ses başlığı ve oynatma paneli (`k-ses-bas`, `k-ses-panel`) | icerik/haber-dinle-bulten, podcast-bolum | **tekrar** |
| Hesaplayıcı ve sonuç kartı (`.x-sonuc`, `.x-arac`) | icerik/ekonomi-araci, hamilelik | benzer, birleşmeli |
| Alt eylem çubuğu (`.ks-alt`) / seçim eylem çubuğu | giris/konu-secimi; hesap/kaydedilenler | benzer, birleşmeli |
| Metin tablosu / künye listesi | hesap/yasal; icerik/resmi-ilan | benzer |
| Tekil: hikâye görüntüleyici (`.hy`), açılır bölüm satırı, format döşemesi, alta sabit soru kutusu, sade çizgi grafiği, hava gün kartı, soluk satır, rozet ızgarası, görünüm önizlemesi, oynatıcı sıra satırı, Spiker "yalnız ses" kapağı, büyüklük satırı, yol durum satırı, burç kutusu, dış site satırı, yorumsuz okuma çubuğu | hikaye, bolumler, kesfet, dadaya-sor, enstruman, hava-durumu, kaydedilenler, seri, gorunum, oynatici, spiker, afet, trafik, astroloji/burc, dada-ailesi, hamilelik-hafta/burc | her biri `/* KİT ADAYI */` notlu |

**"Onaylanmadı" varsayımlar** (kararlar dosyasında ve her ekranın başlık yorumunda): ana sayfa bölüm sırası ve A/B dönüşümünün B'den başlaması, misafirde Bugün Senin İçin yok (K22); Akış'ta habere geçiş başlıkla (K23); köşe yazısı görseli konu fotoğrafı (K26); detay bölüm sırası ve 1 dk içeriği (K20); kit üst çubuğu 48, sosyal girişte `fa-brands` (K37); misafirin kaydı ve takibi cihazda (C30); giriş/üye ol tam sayfa (B-15); bildirim izninde "Şimdi değil", konu seçiminde alt sınır yok (bekleyen #5); 16.00 baskısı; derin bağlantı adresleri (B-06); Bana Etkisi profili "Kiracı"; bakım bitiş saati, hesap kilidi 15 dk, kod tekrar 60 sn; maaş ve enflasyon katsayıları siteden türetildi.

**Veri boşlukları ve çelişkiler**: galerilerde yalnız kapak (öteki kareler yok); Dolar, Euro, altın geçmiş verisi yok (grafik yerine "Geçmiş veri yok"); yazar portreleri yok; konuya uygun fotoğrafı olmayan içerik yazı satırı olarak (1 video, 7 albüm ve benzeri); Hamilelik yalnız 20. hafta, Astroloji yalnız Koç rehberi; Resmî İlanlarda tek örnek detay. Kaynak çelişkileri olduğu gibi aktarıldı ve dosyada notlu: enflasyon %2,1 / %1,87, bir köşe yazısının yazarı (Aylin Sezer / Elif Aras), piyasa saati 14.30 / 14.20, uygulama sürümü 1.6 / 3.4.1, podcast programı ("Saha" / "Gündem Odası"), YKS tarihleri, TCMB karar günü, trafik veri saatinin "şimdi"den sonra olması.

**Her ekranın veri kaynağı**: ekran dosyasının başındaki yorum ve içerideki `/* kaynak: … */` notları; ekran listesinde "Public karşılığı" sütunu; ortak veri `secenekler/_ortak/icerik.js` ve `icerik-ek.js` (`window.D`, public sözlükten). Ekranın halleri ve parametreleri `docs/ekran-listesi.md`'de, ölçüm betiği `secenekler/ekranlar/denetim.html`.
