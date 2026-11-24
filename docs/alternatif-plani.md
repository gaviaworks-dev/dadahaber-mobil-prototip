# Dada Haber Mobil · Kök ekran alternatif planı

Tarih: 2026-11-24 · Durum: **plan, henüz çizilmedi; Beyar onayı bekliyor.**

Kurallar (CLAUDE.md): ana sayfa, liste, haber detayı için 6'şar; açılış ve tanıtım için 3'er alternatif. Hepsi aynı içerikle dolar: 23 Kasım 2026 16.05, günün ana haberi Marmara'da yoğun kar (Son Dakika: "İstanbul Valiliği: okullar 24 Kasım'da da tatil" 16.05, "Merkez Bankası politika faizini yüzde 42,5'te sabit tuttu" 14.00; sözlük `ornek_veri.json`). Her alternatif 390×844 çerçevede, açık ve koyu temada çizilir; altına referanslar, alınan fikir, artı ve eksi yazılır. Kaynaklar `docs/arastirma.md`.

Ortak sınırlar: teyit rozeti ve kaynak sayısı yok (site kuralı); cam yalnız kontrol katmanında; dokunma alanı ≥44px; yatay taşma yok, sığmayan kısalır ya da kayar; saat `14.30`; Font Awesome 6.5.2.

---

## Ana sayfa (6)

Alt gezinme sekmeleri açık konu olduğu için her alternatif kendi sekme önerisiyle çizilir.

| Kod | Fikir (tek cümle) | Alt gezinme önerisi | Esinlenilen |
|---|---|---|---|
| **AS-A · Editoryal Bugün** | Üstte panelden gelen büyük manşet ve hızlı bölüm bağlantıları, altında Günün 5'i, Son Dakika ve bölüm blokları sırayla dizilen, sitenin ana sayfasının uygulama diline çevrilmiş hali. | Ana Sayfa · Son Dakika · Akış · Dinle · Hesabım | Apple News (Today, hızlı bağlantılar), Guardian (manşet rayı), public site ana sayfası (C · Gastro keşif) |
| **AS-B · Kaydırılan akış sekmeleri** | Ana sayfanın üstünde Senin İçin · Son Dakika · Takip · 8 bölüm sekmeleri; sekmeler arasında parmakla yatay geçilir, her sekme tek tip kart akışıdır ve okur sırayı düzenler. | Ana Sayfa · Keşfet · Akış · Kaydedilenler · Hesabım | Threads (kaydırılan akışlar), Google News (çip şeridi), SmartNews, Bluesky (sabitle-sırala) |
| **AS-C · Saatin baskısı** | Ana sayfa günün saatine göre baskı olarak açılır ("Öğleden Sonra Baskısı · sonraki 19.00"): önce sonlu 5 kartlık deste ve "bugünlük bu kadar", sonra isteyene serbest akış. | Bugün · Son Dakika · Dinle · Keşfet · Sen | Espresso (sonlu brifing), Spotify daylist (saate göre başlık), Economist (hafta içi/sonu farklı), Tiimo (gün bölmeleri) |
| **AS-D · Kart destesi** | Her haber tam ekran bir kart; dikey kaydırarak haberden habere, kartta 15 saniyelik Dada Özet ve "tam haber" düğmesi; liste görünümüne tek dokunuşla geçilir. | Özet · Akış · Ara · Hesabım (4 sekme) | BBC "Ten to Watch", ChatGPT Pulse (kart destesi), Particle (özet önce), Hürriyet (kaydırarak haberden habere) |
| **AS-E · Yoğun haber listesi** | Metin ağırlıklı, saatli satırlar ve küçük kare görsellerle bir ekranda en çok başlığı gösteren, Son Dakika şeridi üstte sabit, gazete okuruna göre düzen. | Haberler · Son Dakika · Piyasa · Kaydedilenler · Hesabım | Reuters (tür etiketi, olay ikonu), Ground News (kompakt kart), Habertürk (en çok okunan), sitedeki Son Dakika satır listesi (C15) |
| **AS-F · Kişisel pano** | Üstte okurun seçtiği canlı kutular (hava, namaz, kur, takım skoru, Günün 5'i ilerlemesi, Spiker) bento ızgarada, altında haberler; her kutu widget'ın uygulama içi hali. | Ana Sayfa · Haberler · Akış · Dinle · Hesabım | Headspace (Today kontrol listesi), Airbnb (yaşayan pano), Apple Sports (sade skor), Material 3 Expressive (gruplama) |

## Liste · kategori ya da akış (6)

Örnek ekran: Gündem bölümü (alt konular Siyaset, Türkiye, Toplum …).

| Kod | Fikir (tek cümle) | Esinlenilen |
|---|---|---|
| **LS-A · Daralan büyük başlık** | Büyük başlıklı üst kısım kaydırınca daralan çubuğa dönüşür, altında yapışkan alt konu çipleri ve bir büyük kart + satır kartlar karışımı. | iOS büyük başlık kalıbı, Google News (çip), public site Liste A |
| **LS-B · Yatay sayfalı alt konular** | Her alt konu kendi sayfası; sayfalar arasında parmakla yatay geçilir, üstteki sekme çizgisi parmağı izler. | Threads (kaydırılan akışlar), SmartNews (kanal sekmeleri), Instagram (sekmeler arası kaydırma) |
| **LS-C · Zaman çizelgesi** | Haberler saat sırasıyla dikey bir zaman çizgisine dizilir, gün ayraçlıdır; sağ üstte liste ↔ zaman çizelgesi anahtarı. | Tiimo (liste ↔ zaman çizelgesi), Reuters, sitedeki Son Dakika (C15) |
| **LS-D · Olay kümeleri** | Liste haberleri değil olayları gösterir: her kart bir olay dosyası, içinde son 2–3 gelişme ve "N güncelleme", dokununca dosyaya iner. | Ground News (haber kümesi), Haberler.com (haber dosyaları), Reuters (olay ikonu), kırmızı çizgi 4 (tekilleştirme) |
| **LS-E · Görsel ızgara** | İki sütunlu dikey kartlar; haber, video, galeri ve infografik karışık, keşif odaklı ve görsel ağırlıklı. | Le Monde (İzle), Guardian (esnek görsel oranı), Economist (dikey video rayı) · **Not:** 4:5 ya da 9:16 kart oranı panelde yok, eklenmesi gerekir |
| **LS-F · Kompakt ve eylemli** | Yoğunluk anahtarlı (geniş/kompakt) liste; satırı sola kaydırınca Kaydet, sağa kaydırınca "daha az göster", uzun basınca önizleme. | Ground News (kompakt kart, daha az göster), Yahoo (engelleme) · kaydırma eylemleri platform kalıbıdır, bu turda bir uygulamada doğrulanmadı |

## Haber detayı (6)

Örnek haber: Marmara'da yoğun kar (Gündem).

| Kod | Fikir (tek cümle) | Esinlenilen |
|---|---|---|
| **HD-A · Kapak ve sakin okuma** | Tam ekran görsel kapakla açılır, kaydırınca sakin editoryal metne geçer; altta yüzen okuma çubuğu (Dinle · Kaydet · Paylaş · Aa). | Public site telefon detayı (Yasin Bey seçimi), Material 3 Expressive (yüzen araç çubuğu), Guardian · **Not:** dikey kapak oranı panelde yok |
| **HD-B · Özet önce, derinlik seçici** | Başlığın hemen altında 15 sn · 1 dk · Tam metin segmenti; varsayılan 15 saniyelik maddeler, okur derinliği tek dokunuşla değiştirir. | Particle (değiştirilebilir özet), Yahoo (Key Takeaways), Telegram (Instant View özeti), site Dada Özet |
| **HD-C · Bölümlü haber** | Haber ayrık bloklara bölünür: Ne oldu · Neden önemli · Bana etkisi · Bundan sonra · Kaynaklar; üstte yapışkan bölüm atlama şeridi. | Semafor (Semaform), Axios (neden önemli), panelin Dada Özet alanları |
| **HD-D · Dinle öncelikli** | Üstte Spiker yüzü ve dalgalı oynatıcı kartı, metin okunan cümleyi vurgular; aşağı kaydırınca oynatıcı sekme çubuğunun üstüne mini oynatıcı olarak yapışır. | Speechify (vurgulu okuma), NYT (Listen, Play), Spotify (kuyruk, uyku zamanlayıcısı), HIG sekme çubuğu aksesuarı |
| **HD-E · Hikâye kartları** | Haber 5–7 tam ekran karta bölünür, sağa dokununca ilerler, üstte ilerleme çizgileri, son kartta "Tam metni oku" ve sıradaki haber. | BBC "Ten to Watch", Espresso (ilerleme çizelgesi, kaydırarak geçiş), Instagram hikâye kalıbı · **Not:** 9:16 haber görseli panelde yalnız Akış için var |
| **HD-F · Gelişen olay** | Üstte "Son gelişme · 16.05" kutusu, altında zaman damgalı güncelleme çizelgesi ve kilit anlar; Takip et ve (iOS) Canlı Etkinliği başlat. | Sitedeki Dakika Dakika ve kilit anlar (BBC/Guardian yapısından), Apple Sports (Canlı Etkinlik), HIG Canlı Etkinlik kuralları |

## Açılış · splash (3)

| Kod | Fikir (tek cümle) | Esinlenilen |
|---|---|---|
| **AÇ-A · Sarı imza** | Marka sarısı #FECC17 zeminde koyu "dada" logosu, durağan; Android 12+ sistem açılış kuralına (simge + arka plan) birebir uyar. | Android 12 açılış API'si; marka rengi kararı |
| **AÇ-B · İlk ekranın kendisi** | Tema zemininde sarı logo ve ana sayfanın iskeleti; içerik geldikçe iskelet yerinde dolar, açılış ile ilk ekran arasında atlama olmaz. | iOS açılış ekranı ilkesi (ilk ekrana benzemeli), NN/g iskelet kuralları · kılavuz bu turda okunmadı, doğrulanacak |
| **AÇ-C · Şimdi** | Logo altında o anın satırı ("Pazartesi 16.05 · İstanbul 1° yoğun kar"), sonra logo üst çubuktaki yerine süzülür; kısa (≤1 sn) giriş geçişidir, sistem açılışı durağan kalır. | Spotify daylist (zamana göre başlık), paylaşılan öğe geçişi (Android öngörülü geri kılavuzu) |

## Tanıtım · onboarding (3)

| Kod | Fikir (tek cümle) | Esinlenilen |
|---|---|---|
| **TN-A · Üç değer, sonra uygulama** | Kaydırılan üç ekran (Günün 5'i, Haber Dinle ve Spiker, Akış), her yerde "Atla"; kayıt ve izin istenmez, izin ilk Takip et ya da zil anında gelir. | Duolingo (önce değer), HIG gizlilik (izin kullanım anında), Bloomberg HT yorumlarındaki ders |
| **TN-B · Ana sayfanı kur** | Tek ekranda konu, takım ve şehir çipleri; seçtikçe altta ana sayfanın canlı önizlemesi değişir; en sonda tek düğmeli bildirim ön ekranı. | Particle (kişiselleştirme oturumu), Yahoo ve Flipboard (konu seçimi), NTV (Benim Sayfam), Guardian (My Guardian) |
| **TN-C · İlk haber öğretir** | Tanıtım bir haberle başlar: okur 15 sn özeti okur, derinliği değiştirir, Dinle'ye ve Kaydet'e basar; her eylem bir özelliği öğretir, sonunda tercih sorulur. | Duolingo (önce ders), Espresso (kısa yazı), Particle (özet biçimi) |

---

## Çizim sırası önerisi

1. Ana sayfa 6 alternatifi (alt gezinme kararı da buradan çıkar).
2. Haber detayı 6 alternatifi (akış A1: en sık açılan ekran).
3. Liste 6 alternatifi.
4. Açılış 3 + tanıtım 3 (seçilen ana sayfaya bağlı oldukları için en son).

Her biri `secenekler/` altında tek sayfada yan yana; sayfa sonunda tek tavsiye ve gerekçe.
