# Dada Haber Mobil · Tasarım kararları

> Beyar'ın seçtiği her parça buraya yazılır. Burada olmayan bir şey verilmiş sayılmaz (CLAUDE.md).

## Verilmiş kararlar

| # | Karar | Kaynak | Tarih |
|---|---|---|---|
| K1 | Keşif, araştırma ve ilk ekran envanteri onaylandı (`docs/arastirma.md`, `docs/ekran-envanteri.md`) | Beyar: "onaylıyorum" | 2026-11-24 |
| K2 | Alternatif planının tamamı onaylandı (`docs/alternatif-plani.md`); şimdi yalnızca ana sayfanın 6 alternatifi (AS-A–AS-F) çiziliyor | Beyar: "Alternatif planı onaylı … Şimdi yalnızca ana sayfanın 6 alternatifi" | 2026-11-24 |
| K3 | Bekleyen sorular (bildirim, görsel oranı, izin ekranı, yüzey, yazı boyutu) şimdi sorulmaz; ilgili ekrana sıra gelince önizlemeyle birlikte sorulur | Beyar | 2026-11-24 |
| K4 | `tasks/durum.md` oluşturulur ve güncel tutulur | Beyar | 2026-11-24 |
| K5 | **Seçenek sayfalarında notlar sade:** artı, eksi, panel/platform notu yazılmaz; referanslar açıklamasız, yalnızca uygulama adları, telefonun altında yana kayan şerit halinde. Sayfa sonundaki tek tavsiye kalır, tek cümle. **Ek (Beyar, aynı gün):** seçenek sayfasında giriş metni, alternatif tanım paragrafı, tema etiketi, dip not ve ekran içi açıklama notu da yok; yalnızca kod + ad, telefon, referans şeridi. (CLAUDE.md'deki "artı, eksi, alınan fikir" kuralının yerine geçer; açıklamalar `secenekler/<ekran>/notlar.js` ve `docs/arastirma.md`'de durur) | Beyar | 2026-11-24 |
| K7 | **Görsel dil public siteden, yapı referans uygulamalardan** (CLAUDE.md'ye de yazıldı). Ortak katman `secenekler/_ortak/web-dili.css`: Gilroy, 12/16/24 köşe, kategori ikonlu üst etiket, cam kapsül, kart kökü, Her Kelimesi Büyük bölüm başlığı + Tamamını Gör, hava/namaz şerit modülü, zebra. AS-D (kart destesi) dokunulmadan kalır. Yatay raylarda ilk kart 16px'ten başlar | Beyar | 2026-11-24 |
| K8 | **Alt gezinme bir referanstan gelir:** iOS 26 yüzen sekme çubuğu (Apple HIG Tab bars; Apple News/Music): içeriğin üstünde yüzen kapsül, seçili sekme marka sarısı kapsül, arama sağda ayrı yuvarlak düğme; Android'de Material 3 gezinme çubuğu. Bileşen `web-dili.css` `.w-tab`. Hangi sekmelerin olacağı ana sayfa seçimiyle sorulur | Beyar ("nav barlar berbat, örnek aldığın tasarım yok mu") · CC seçti | 2026-11-24 |
| K9 | **Public site kalite çıtasıdır, kalıp değildir** (CLAUDE.md, Beyar). K7'nin yerine geçer: siteden yalnız marka sabitleri (renk #FECC17, logo, Gilroy, FA ikon seti, kategori etiketi, saat biçimi). Kart, liste, başlık çubuğu, gezinme, geçiş ve yerleşim uygulama için sıfırdan. `web-dili.css` silindi; ortak katman yalnız `_ortak/marka.css`. Altı alternatif görsel olarak da birbirinden farklı kalır | Beyar | 2026-11-24 |
| K10 | K8 geri alındı (bütün alternatiflere aynı alt çubuk giydirilmişti; Beyar: "bütün navlar niye aynı"). Alt gezinme önce ayrı deneme sayfasında 5 seçenekle gösterilir: `secenekler/alt-gezinme.html` (G1 yüzen cam kapsül · G2 yerleşik çubuk + mini oynatıcı · G3 gösterge hapı · G4 ortada Spiker · G5 koyu ada). Seçim bekleniyor | Beyar | 2026-11-24 |
| K11 | **Krem / sıcak kâğıt tonu yok.** Zeminler, yüzeyler ve çubuklar nötr beyaz ve gri (açık: #FFFFFF, #F3F3F5, #F7F7F8, çizgi #E5E5E7; koyu: #0E0E10, #1A1A1D, #1C1C20). Sıcak koyu ve bej tonlar da nötrlendi. Marka sarısının açık tonu yalnız avatar ve küçük ikon kutusunda | Beyar ("böyle krem olmasın") | 2026-11-24 |
| K12 | **Tasarım değerleri siteyle birebir** (CLAUDE.md, Beyar). `_ortak/marka.css`: köşe `--k-ic` 8 · `--k-kontrol` 12 · `--k-kart` 16 · `--k-buyuk` 24 (+ `--k-daire` %50, `--k-cubuk` 999px yalnız çubuk/ilerleme/tutamaç), `--golge-sm`, `--golge-md`, `--ikon-bosluk` 8px, ağırlık `--y-ince` 300 · `--y-orta` 500 · `--y-kalin` 800. 23 ekranda elle yazılmış köşe ve ağırlık 0; kalan köşe değerleri 8/12/16/24 + %50 + 999px, ağırlık 300/500/800. Dönüşüm: 600→500, 650/700→800; 2–5px→çubuk, 6–9→8, 10–13→12, 14–19→16, ≥20→24; kapsül içi sekmeler 16 (iç içe köşe). AS-D da marka.css aldı (yerleşim aynı). İstisna: telefon çerçevesi ve durum çubuğu | Beyar | 2026-11-24 |
| K13 | **Kategori hikâyeleri yeni tasarımda da var** (eski Dada Haber uygulamasından; fikir alındı, görünüm yeni dilde). Ana sayfanın üstünde yatay kayan fotoğraflı daireler, her biri bir kategori; görülmemiş sarı halka, görülen soluk; ilk daire 16px'ten. Dokununca tam ekran görüntüleyici (ilerleme çizgileri, dokun ileri/geri, basılı tut dur, aşağı çek kapat, kategori bitince sıradaki; kartta görsel, kategori, başlık, "Haberi oku"). Altı ana sayfanın hepsinde: AS-A başlık altı · AS-B Senin İçin sayfası başı · AS-C baskı başlığı üstü · AS-D kart üstünde koyu zemin (liste kipinde listenin başı) · AS-E Son Dakika şeridi altı · AS-F pano üstü. **AS-A ayrımı:** hikâye = fotoğraflı daire + halka; hızlı erişim (Son Dakika, Günün 5'i…) = ikonlu yatay düğme, 12px köşe, halkasız. Ekran envanterine "Hikâye görüntüleyici" (yükleniyor, bugün hikâye yok) eklendi. Panel tarafı açık konu: `docs/ekran-envanteri.md` §11 madde 6 | Beyar | 2026-11-24 |
| K14 | **Seçenek sayfası telefondan da görüntülenir:** dar ekranda telefon çerçeveleri ekrana sığacak kadar küçülür, bölüm sekmeleri yatay kayar, tek sütun. Sekmeler: Ana Sayfa · Hikâye · Alt Gezinme · Liste · Detay | Beyar | 2026-11-24 |
| K15 | **GitHub Pages'e yayın** (Beyar: "pages a atalım"). Kardeş prototiplerin emsali: herkese açık depo, `main` kökünden Pages (`dadahaber-prototip`, `dadagastro-mobil` …). Depo `gaviaworks-dev/dadahaber-mobil-prototip`; alternatif galerisi `/secenekler/` (Gastro mobil emsali). Depoya girmeyenler (kardeş depo kuralı): `tasks/`, `docs/kaynak/`, `docs/referans/`, `docs/screenshots/`, kullanılmayan `assets/gorsel/mock/`. `_ortak` klasörü için `.nojekyll` | Beyar | 2026-11-24 |
| K6 | **Seçeneklerde konuya uygun gerçek fotoğraf:** haberle ilgisiz önizleme fotoğrafları kullanılmaz; her habere konusuna uyan serbest lisanslı fotoğraf (Wikimedia Commons; `assets/gorsel/haber/`, atıf `KAYNAK.txt`). Logo, filigran, başka kurumun basın fotoğrafı ve yapay zekâ üretimi görsel elenir | Beyar ("görseller kullansana", "Konuya uygun gerçek foto") | 2026-11-24 |

## Bekleyen (K3: her biri ilgili ekrana sıra gelince, önizlemeyle sorulur)

| # | Konu | Bağlam |
|---|---|---|
| 3 | Bildirim tercihleri ↔ panelin "bütün abonelere" kuralı | `docs/ekran-envanteri.md` §11 |
| 4 | Dikey kapak/kart kullanan alternatifler için panele yeni görsel oranı | aynı, §11 |
| 5 | Bildirim izni ön ekranında "Şimdi değil" (HIG tek düğme diyor) | `docs/arastirma.md` §4 |
| 6 | iOS'ta cam yüzey, Android'de opak mı; ikisinde de opak mı | `docs/arastirma.md` §5 |
| 7 | Büyük yazı boyutunda başlık kısaltma kuralının gevşemesi | `docs/arastirma.md` §4 |
| 8 | Yazı tipi (Gilroy lisansı teyitsiz) ve alt gezinme sekmeleri | CLAUDE.md açık konular; kök ekranlarda sorulacak |
| 9 | Ana sayfa yönü ve alt gezinme sekmeleri | `secenekler/index.html` |
| 10 | Hikâyeler panelde kendiliğinden mi, editör seçimiyle mi oluşacak | `docs/ekran-envanteri.md` §11 madde 6 |

Not: `tasks/durum.md` CLAUDE.md'nin "Compact'e dayanıklı çalışma" kuralı gereği ekran işine geçilince oluşturuldu (keşif oturumundaki "yalnız docs" kısıtı o oturuma aitti).
