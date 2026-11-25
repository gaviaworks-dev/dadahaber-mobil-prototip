# Dada Haber Mobil · Ekran listesi (tam)

Tarih: 2026-11-25 · Durum: **yayılım listesi** (Beyar bu tur için ara onay duraklarını kaldırdı: UI kit, tam ekran listesi ve yayılım arka arkaya; K34). Bu liste yayılımın iş listesidir: her satır üretildikçe ✓ sütunu işaretlenir; işaretsiz satır kalmayınca yayılım biter.

Kaynaklar: `CLAUDE.md` (çalışma sırası 4), `docs/ekran-envanteri.md` (ilk taslak), `docs/tasarim-kararlari.md` (K13, K16–K33), `docs/kaynak/DADAHABER-10-kategori-ve-medya-yapisi.md` (bölüm adları, medya süzgeçleri), public `docs/sayfa-envanteri.md` (salt okunur), kök ekranlar `secenekler/hibrit/`.

## Okuma kuralları

- **Bir satır = bir ekran ya da bir hal.** Ekranın her hali (yükleniyor, boş, hata, çevrimdışı, misafir …) ayrı satırdır; aynı dosyanın sorgusuyla açılır.
- **Dosya** sütunu `secenekler/`e göredir. Kökler `hibrit/` altındadır; yayılımda kök dosyalarına yeni hal ekleme işi tek bir takım üyesine verilir (düzen değişmez; lider ekran yazmaz, K34). Diğer her ekran `ekranlar/<grup>/<ad>.html`; grup ∈ icerik, durum, giris, hesap, sistem. Bir dosya bir ekrandır, halleri sorguyla açılır.
- **Sorgu sözleşmesi:** `?durum=yukleniyor|yenileniyor|daha-fazla|bos|hata|cevrimdisi|bulunamadi|…` hal · `?uye=0` misafir (yazılmazsa üye) · `?tema=koyu` koyu tema (her satır iki temada da denetlenir; tema ayrı satır sayılmaz) · ekran içi seçimler `?sekme=`, `?tur=`, `?kategori=`, `?adim=`.
- **Tür:** içerik · durum · giriş · hesap · sistem. **Grup:** ekranın işlevsel kümesi. **Kök:** türediği kök ekran (Ana sayfa / Liste / Detay / Akış / Hikâye modu / — kendi düzeni, UI kit bileşenleriyle).
- **Public karşılığı:** `dadahaber-prototip` sayfa adı; "—" sitede yok. Hal satırlarında sitenin karşılık gelen durum sayfası yazılır (`durumlar.html` iskelet ve boş, `500.html`, `404.html`, `cevrimdisi.html`).
- **✓:** yalnız kökte hazır olan satırlar işaretli. Açılış ve tanıtım yapılıyor, işaretsiz.
- "Varsayım" ve "bekleyen #n" yazan yerler karar değildir (`docs/tasarim-kararlari.md` › Bekleyen). "C30 varsayımı" = misafirin kaydettiği ve takip ettiği cihazda tutulur (public kararı, onaylanmadı).

## Özet

| Bölüm | Satır | Ekran satırı | Hal satırı (tür: durum) | Dosya (yeni) | Kök dosyasında satır | ✓ |
|---|---|---|---|---|---|---|
| İçerik | 406 | 105 | 301 | 52 | 57 | 18 |
| Durumlar | 20 | 0 | 20 | 6 | 0 | 0 |
| Giriş | 34 | 13 | 21 | 9 | 0 | 0 |
| Hesap | 79 | 42 | 37 | 21 | 0 | 0 |
| Sistem | 64 | 48 | 16 | 17 | 0 | 0 |
| **Toplam** | **603** | **208** | **395** | **105** | **57** | **18** |

Kök dosyaları (4): `hibrit/akis.html`, `hibrit/detay.html`, `hibrit/kok.html`, `hibrit/liste.html`. Kök dosyasındaki işaretsiz satırlar (yeni haller) yayılımda tek bir takım üyesine verilir; o süre boyunca kök dosyalarının tek yazarı odur (K34).
Sistem bölümündeki 2 "aday" satırı (Canlı Etkinlik, widget) kapsam kararı bekler; onaylanmadan yayılıma girmez.

## 1 · İçerik

Her içerik ekranı, alt ekranı ve o ekrana ait haller. Liste ve detayların yükleniyor, yenileme, sayfa sonu, boş, hata, çevrimdışı halleri ekranın hemen altında ayrı satırdır.

### Ana sayfa (kök)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-001 | Ana sayfa · üye | içerik | Ana sayfa | `index.html` | Ana sayfa | Hero manşet slaytları, hikâye şeridi, Son Dakika, Bugün Senin İçin, bölümler (A/B), ayraçlar; K22, K30; hikâye şeridinin ilk dairesi Spiker (yayında: kırmızı CANLI halkası); mini oynatıcı kapalı (K39) | `hibrit/kok.html` | ✓ |
| E-002 | Ana sayfa · misafir | içerik | Ana sayfa | `index.html` | Ana sayfa | Üst çubukta "Giriş"; Bugün Senin İçin yok; "Takımını seç · Giriş yap" | `hibrit/kok.html?uye=0` | ✓ |
| E-003 | Ana sayfa · menü çekmecesi · üye | sistem | Ana sayfa | açılır menü (`parcalar/ust.html`) | Ana sayfa | Sağdan çekmece; hesap kartı, Bölümler (açılır), Dinle ve izle, Dada, Görünüm, Yazı boyutu, kurumsal; K31 | `hibrit/kok.html?menu=1` | ✓ |
| E-004 | Ana sayfa · menü çekmecesi · misafir | sistem | Ana sayfa | açılır menü | Ana sayfa | Hesap kartı yerine "Merhaba" + Giriş Yap · Üye Ol | `hibrit/kok.html?menu=1&uye=0` | ✓ |
| E-005 | Ana sayfa · Spiker çalıyor | durum | Ana sayfa | sitede alt mini çubuk | Ana sayfa | Mini oynatıcı alt çubuğun üstünde; sayfa sonu boşluğu oynatıcı kadar artar (K33); oynatıcıda radyo ikonu, "Dada Spiker · 16.00 Bülteni"; oynatıcı yalnız çalarken görünür (K39) | `hibrit/kok.html?calan=1` | ✓ |
| E-006 | Ana sayfa · başka baskı saati | durum | Ana sayfa | — | Ana sayfa | Baskı rozeti saate göre: Sabah / Öğleden Sonra / Akşam Baskısı | `hibrit/kok.html?saat=08.30` | ✓ |
| E-007 | Ana sayfa · canlı anlatım sürerken | durum | Ana sayfa | `index.html` (canlı kartı) | Ana sayfa | Son Dakika şeridinin yanında canlı anlatım girişi (Dakika Dakika) | `hibrit/kok.html?durum=canli` | ✓ |
| E-008 | Ana sayfa · yükleniyor | durum | Ana sayfa | `durumlar.html` (iskelet) | Ana sayfa | Hero, hikâye daireleri ve bölüm blokları iskelet; açılıştan sonra ilk görünüm | `hibrit/kok.html?durum=yukleniyor` | ✓ |
| E-009 | Ana sayfa · aşağı çekip yenileme | durum | Ana sayfa | — | Ana sayfa | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `hibrit/kok.html?durum=yenileniyor` | ✓ |
| E-010 | Ana sayfa · hata | durum | Ana sayfa | `500.html` | Ana sayfa | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `hibrit/kok.html?durum=hata` | ✓ |
| E-011 | Ana sayfa · çevrimdışı | durum | Ana sayfa | `cevrimdisi.html` | Ana sayfa | Önbellekteki son ana sayfa + "Çevrimdışısın · Kaydedilenler" bandı; hikâye ve Akış soluk | `hibrit/kok.html?durum=cevrimdisi` | ✓ |
| E-012 | Ana sayfa · blok yüklenemedi | durum | Ana sayfa | — | Ana sayfa | Tek blok (ör. Piyasalar) satır içi hata kutusu + Yeniden dene; sayfanın geri kalanı çalışır | `hibrit/kok.html?durum=blok-hata` | ✓ |
| E-604 | Ana sayfa · Spiker yayında değil | durum | Ana sayfa | — | Ana sayfa | Hikâye şeridinin ilk dairesi sönük halka, altında sıradaki bülten saati (19.00); Dinle sekmesinde canlı noktası yok (K39) | `hibrit/kok.html?spiker=0` | ✓ |

### Hikâye (ana sayfa şeridi)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-013 | Kategori hikâye görüntüleyici | içerik | Hikâye | — | Hikâye modu | Tam ekran; ilerleme çizgileri, dokun ileri/geri, basılı tut dur, aşağı çek kapat, kategori bitince sıradaki; kartta düğme yok (K13). Önceki deneme `hikaye/hikaye.html` | `ekranlar/icerik/hikaye.html` | ✓ |
| E-014 | Kategori hikâye · duraklatıldı | durum | Hikâye | — | Hikâye modu | Basılı tutunca; ilerleme durur, üst bilgi soluklaşır | `ekranlar/icerik/hikaye.html?durum=dur` | ✓ |
| E-015 | Kategori hikâye · bugün hikâye yok | durum | Hikâye | — | Hikâye modu | Kategoride bugün haber yok → sıradaki kategoriye geç | `ekranlar/icerik/hikaye.html?durum=bos` | ✓ |
| E-016 | Kategori hikâye · yükleniyor | durum | Hikâye | `durumlar.html` (iskelet) | Hikâye modu | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/hikaye.html?durum=yukleniyor` | ✓ |
| E-017 | Kategori hikâye · hata | durum | Hikâye | `500.html` | Hikâye modu | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/hikaye.html?durum=hata` | ✓ |
| E-018 | Kategori hikâye · çevrimdışı | durum | Hikâye | `cevrimdisi.html` | Hikâye modu | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/hikaye.html?durum=cevrimdisi` | ✓ |

### Bölümler ve liste (kök)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-019 | Bölümler sekmesi (bölüm dizini) | içerik | Bölümler | `tum-kategoriler.html` | Liste | 8 bölüm ve alt başlıkları (DADAHABER-10 sütunları), Dinle ve izle girişleri; alt çubukta "Bölümler" | `ekranlar/icerik/bolumler.html` | ✓ |
| E-020 | Bölümler sekmesi · yükleniyor | durum | Bölümler | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/bolumler.html?durum=yukleniyor` | ✓ |
| E-021 | Bölümler sekmesi · hata | durum | Bölümler | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/bolumler.html?durum=hata` | ✓ |
| E-022 | Bölümler sekmesi · çevrimdışı | durum | Bölümler | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/bolumler.html?durum=cevrimdisi` | ✓ |
| E-023 | Bölüm listesi · Gündem | içerik | Liste | `gundem.html` | Liste | Görselli başlık (200px), alt konu sekmeleri, Liste ↔ Çizelge; K21, K27 | `hibrit/liste.html` | ✓ |
| E-024 | Bölüm listesi · çizelge görünümü | içerik | Liste | — | Liste | Saat sırası, gün ayracı (LS-C) | `hibrit/liste.html?kip=cizelge` | ✓ |
| E-025 | Bölüm listesi · daralan başlık | durum | Liste | — | Liste | Kaydırınca görselli üst çubuk (K30) | `hibrit/liste.html?dar=1` | ✓ |
| E-026 | Bölüm listesi · Spor | içerik | Liste | `spor.html` | Liste | Spor: canlı maç ve puan durumu şeridi | `hibrit/liste.html?bolum=spor` | ✓ |
| E-027 | Bölüm listesi · Finans | içerik | Liste | `finans.html` | Liste | Finans: piyasalar şeridi | `hibrit/liste.html?bolum=finans` | ✓ |
| E-028 | Bölüm listesi · Kadın | içerik | Liste | `kadin.html` | Liste | aynı kalıp, bölümün alt konuları | `hibrit/liste.html?bolum=kadin` | ✓ |
| E-029 | Bölüm listesi · Savunma | içerik | Liste | `savunma.html` | Liste | aynı kalıp, bölümün alt konuları | `hibrit/liste.html?bolum=savunma` | ✓ |
| E-030 | Bölüm listesi · Dünya | içerik | Liste | `dunya.html` | Liste | aynı kalıp, bölümün alt konuları | `hibrit/liste.html?bolum=dunya` | ✓ |
| E-031 | Bölüm listesi · Kampüs | içerik | Liste | `kampus.html` | Liste | aynı kalıp, bölümün alt konuları | `hibrit/liste.html?bolum=kampus` | ✓ |
| E-032 | Bölüm listesi · alt konu seçili | içerik | Liste | alt sayfalar (`siyaset.html` …) | Liste | Alt konu sekmesi seçili (tek katman, DADAHABER-10); branş, lig, takım, Transfer, Millî Takım da burada | `hibrit/liste.html?konu=siyaset` | ✓ |
| E-033 | Bölüm listesi · Şehirler | içerik | Liste | `sehirler.html`, `istanbul.html` … | Liste | Yerel haberler; şehir seç alt sayfasıyla (E-551) | `hibrit/liste.html?konu=sehirler` | ✓ |
| E-034 | Bölüm listesi · tür süzgeci (Analiz, Görüş) | içerik | Liste | `?tur=analiz` yönlendirmeleri | Liste | Tür kategori değil; kart etiketi ve süzgeç (DADAHABER-10 §3) | `hibrit/liste.html?tur=analiz` | ✓ |
| E-035 | Keşfet konu listesi (Teknoloji, Sağlık, Kültür …) | içerik | Liste | `teknoloji.html`, `saglik.html` … | Liste | Keşfet sütunlarındaki konular aynı liste kalıbında | `hibrit/liste.html?bolum=kesfet&konu=teknoloji` | ✓ |
| E-036 | Bölüm listesi · yükleniyor | durum | Liste | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `hibrit/liste.html?durum=yukleniyor` | ✓ |
| E-037 | Bölüm listesi · aşağı çekip yenileme | durum | Liste | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `hibrit/liste.html?durum=yenileniyor` | ✓ |
| E-038 | Bölüm listesi · sayfa sonu yükleme | durum | Liste | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `hibrit/liste.html?durum=daha-fazla` | ✓ |
| E-039 | Bölüm listesi · boş | durum | Liste | `durumlar.html` (boş) | Liste | Bu alt konuda bugün haber yok; Tümü'ne dön | `hibrit/liste.html?durum=bos` | ✓ |
| E-040 | Bölüm listesi · hata | durum | Liste | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `hibrit/liste.html?durum=hata` | ✓ |
| E-041 | Bölüm listesi · çevrimdışı | durum | Liste | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `hibrit/liste.html?durum=cevrimdisi` | ✓ |

### Haber detayı (kök) ve türleri

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-042 | Haber detayı · üye | içerik | Detay | `haber-detay.html` + 7 bölüm detayı | Detay | Kapak, bilgi satırı, spot, 15 sn · 1 dk · Tam metin, bölüm sekmeleri, kaynaklar, yorumlar, sıradaki; K19–K20, K28–K31 | `hibrit/detay.html` | ✓ |
| E-043 | Haber detayı · misafir | içerik | Detay | `haber-detay.html` | Detay | "Yorum yapmak için giriş yap"; Kaydet → üyelik tetik paneli | `hibrit/detay.html?uye=0` | ✓ |
| E-044 | Haber detayı · derinlik sekmesi | durum | Detay | — | Detay | 15 sn (3 madde) · 1 dk (özet) · Tam metin (K17) | `hibrit/detay.html?derinlik=1dk` | ✓ |
| E-045 | Haber detayı · bölüm sekmesi | durum | Detay | — | Detay | Bana etkisi · Neden önemli · Bundan sonra yerinde değişir (K18) | `hibrit/detay.html?bolum=neden` | ✓ |
| E-046 | Yazı ayarı alt sayfası (Aa) | sistem | Detay | Görünüm penceresi | Detay | Tek ölçek bütün okuma metnini büyütür (K29) | `hibrit/detay.html?aa=1` | ✓ |
| E-047 | Hikâye modu | içerik | Detay | — | Hikâye modu | 6 kart; X ya da "Metne dön" kalınan yere; paylaş yok (K16, K24) | `hibrit/detay.html?mod=hikaye` | ✓ |
| E-048 | Hikâye modu · son kart | durum | Detay | — | Hikâye modu | "Metne dön" ve Dinle | `hibrit/detay.html?mod=hikaye&kart=6` | ✓ |
| E-049 | Hikâye modu · duraklatıldı | durum | Detay | — | Hikâye modu | Basılı tut: ilerleme durur | `hibrit/detay.html?mod=hikaye&dur=1` | ✓ |
| E-050 | Haber detayı · kapaksız | durum | Detay | `haber-detay.html` (görselsiz) | Detay | Görsel yoksa düz üst çubuk, panel binmesi yok | `hibrit/detay.html?kapak=0` | ✓ |
| E-051 | Haber detayı · güncellendi / düzeltme notu | durum | Detay | `duzeltme-politikasi.html` (kayıt) | Detay | Bilgi satırında "Güncellendi" + saat; metin sonunda düzeltme notu | `hibrit/detay.html?durum=duzeltme` | ✓ |
| E-052 | Haber detayı · kapak tam ekran | durum | Detay | görüntüleyici (dh-gal) | Detay | Kapağa dokununca ortak görüntüleyici; altyazı, kaydırarak kapat | `hibrit/detay.html?durum=gorsel` | ✓ |
| E-053 | Haber detayı · çevrimdışı (indirilmiş) | durum | Detay | — | Detay | Kaydedilip indirilmiş haber okunur; "Çevrimdışı okuyorsun" bandı; yorumlar kapalı | `hibrit/detay.html?durum=cevrimdisi-kayitli` | ✓ |
| E-054 | Haber detayı · yükleniyor | durum | Detay | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `hibrit/detay.html?durum=yukleniyor` | ✓ |
| E-055 | Haber detayı · hata | durum | Detay | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `hibrit/detay.html?durum=hata` | ✓ |
| E-056 | Haber detayı · bulunamadı | durum | Detay | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `hibrit/detay.html?durum=bulunamadi` | ✓ |
| E-057 | Haber detayı · çevrimdışı | durum | Detay | `cevrimdisi.html` | Detay | İndirilmemiş haber: kabuk + "Bağlantı yok" + Yeniden dene | `hibrit/detay.html?durum=cevrimdisi` | ✓ |
| E-605 | Haber detayı · Dinle çalıyor | durum | Haber detayı | — | Detay | Okuma çubuğundaki Dinle haberi sesli okur; mini oynatıcı okuma çubuğunun üstünde, kulaklık ikonu ve haber başlığıyla; Spiker'dan ayrı (K39) | `hibrit/detay.html?calan=dinle` | ✓ |
| E-058 | Yorumlar (tümü) · üye | içerik | Detay | `haber-detay.html` (yorumlar) | Detay | Özet kartı, süzgeç çipleri (Tümü · En çok beğenilen · Editör yanıtları), Beğen · Yanıtla · Bildir (K31) | `ekranlar/icerik/yorumlar.html` | ✓ |
| E-059 | Yorumlar (tümü) · misafir | içerik | Detay | `haber-detay.html` | Detay | "Yorum yapmak için giriş yap"; Beğen ve Yanıtla tetik paneli açar | `ekranlar/icerik/yorumlar.html?uye=0` | ✓ |
| E-060 | Yorumlar · yorum yaz | sistem | Detay | `haber-detay.html` (yorum alanı) | Detay | Alt sayfa, klavye açık; kurallar notu; gönderiliyor | `ekranlar/icerik/yorumlar.html?durum=yaz` | ✓ |
| E-061 | Yorumlar · yanıtla | sistem | Detay | — | Detay | Yanıtlanan yorum alıntısıyla alt sayfa | `ekranlar/icerik/yorumlar.html?durum=yanitla` | ✓ |
| E-062 | Yorumlar · gönderildi | durum | Detay | — | Detay | "Yorumlar denetim sonrası yayınlanır" kısa bildirimi; yorum soluk "onay bekliyor" | `ekranlar/icerik/yorumlar.html?durum=gonderildi` | ✓ |
| E-063 | Yorumlar · yükleniyor | durum | Detay | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/yorumlar.html?durum=yukleniyor` | ✓ |
| E-064 | Yorumlar · sayfa sonu yükleme | durum | Detay | — (sitede sayfalama) | Detay | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/yorumlar.html?durum=daha-fazla` | ✓ |
| E-065 | Yorumlar · boş | durum | Detay | `durumlar.html` (boş) | Detay | Henüz yorum yok; "İlk yorumu sen yaz" | `ekranlar/icerik/yorumlar.html?durum=bos` | ✓ |
| E-066 | Yorumlar · hata | durum | Detay | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/yorumlar.html?durum=hata` | ✓ |
| E-067 | Yorumlar · çevrimdışı | durum | Detay | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/yorumlar.html?durum=cevrimdisi` | ✓ |
| E-068 | Köşe yazısı | içerik | Detay | `kose-yazisi.html` | Detay | Yazar başlıklı detay (baş harf dairesi, unvan, Takip et); yazarın diğer yazıları | `ekranlar/icerik/kose-yazisi.html` | ✓ |
| E-069 | Köşe yazısı · misafir | içerik | Detay | `kose-yazisi.html` | Detay | Yazarı takip et → tetik paneli (C30 varsayımı: cihazda tutulur) | `ekranlar/icerik/kose-yazisi.html?uye=0` | ✓ |
| E-070 | Köşe yazısı · yükleniyor | durum | Detay | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/kose-yazisi.html?durum=yukleniyor` | ✓ |
| E-071 | Köşe yazısı · hata | durum | Detay | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/kose-yazisi.html?durum=hata` | ✓ |
| E-072 | Köşe yazısı · bulunamadı | durum | Detay | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/kose-yazisi.html?durum=bulunamadi` | ✓ |
| E-073 | Köşe yazısı · çevrimdışı | durum | Detay | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/kose-yazisi.html?durum=cevrimdisi` | ✓ |

### Canlı

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-074 | Canlı anlatım (Dakika Dakika) · sürüyor | içerik | Canlı | `dakika-dakika.html`, `dakika-dakika-butce.html` | Detay | Canlı rozeti, özet, saatli girişler yeni üstte, kilit anlar; sıçrama yok | `ekranlar/icerik/canli-anlatim.html` | ✓ |
| E-075 | Canlı anlatım · yeni giriş şeridi | durum | Canlı | — | Detay | "N yeni gelişme" hapı; dokununca başa | `ekranlar/icerik/canli-anlatim.html?durum=yeni` | ✓ |
| E-076 | Canlı anlatım · kilit anlar | durum | Canlı | `dakika-dakika.html` | Detay | Yalnız öne çıkan girişler süzgeci | `ekranlar/icerik/canli-anlatim.html?durum=kilit` | ✓ |
| E-077 | Canlı anlatım · sona erdi | durum | Canlı | `dakika-dakika-zirve.html` | Detay | Sona erdi rozeti, özet başta, girişler eskiden yeniye | `ekranlar/icerik/canli-anlatim.html?durum=bitti` | ✓ |
| E-078 | Canlı anlatım · yükleniyor | durum | Canlı | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/canli-anlatim.html?durum=yukleniyor` | ✓ |
| E-079 | Canlı anlatım · aşağı çekip yenileme | durum | Canlı | — | Detay | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/canli-anlatim.html?durum=yenileniyor` | ✓ |
| E-080 | Canlı anlatım · hata | durum | Canlı | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/canli-anlatim.html?durum=hata` | ✓ |
| E-081 | Canlı anlatım · bulunamadı | durum | Canlı | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/canli-anlatim.html?durum=bulunamadi` | ✓ |
| E-082 | Canlı anlatım · çevrimdışı | durum | Canlı | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/canli-anlatim.html?durum=cevrimdisi` | ✓ |
| E-083 | Canlı Gündem (canlı olaylar listesi) | içerik | Canlı | `canli-gundem.html`, `canli.html` | Liste | Canlı ve sona eren anlatımlar; canlı önce | `ekranlar/icerik/canli-gundem.html` | ✓ |
| E-084 | Canlı Gündem · yükleniyor | durum | Canlı | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/canli-gundem.html?durum=yukleniyor` | ✓ |
| E-085 | Canlı Gündem · aşağı çekip yenileme | durum | Canlı | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/canli-gundem.html?durum=yenileniyor` | ✓ |
| E-086 | Canlı Gündem · sayfa sonu yükleme | durum | Canlı | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/canli-gundem.html?durum=daha-fazla` | ✓ |
| E-087 | Canlı Gündem · boş | durum | Canlı | `durumlar.html` (boş) | Liste | Şu an canlı anlatım yok; sona erenler altta | `ekranlar/icerik/canli-gundem.html?durum=bos` | ✓ |
| E-088 | Canlı Gündem · hata | durum | Canlı | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/canli-gundem.html?durum=hata` | ✓ |
| E-089 | Canlı Gündem · çevrimdışı | durum | Canlı | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/canli-gundem.html?durum=cevrimdisi` | ✓ |
| E-090 | Canlı Yayın · yayında | içerik | Canlı | `canli-yayin.html` | Detay | Oynatıcı (oran korunur), yayın akışı, sona erenler | `ekranlar/icerik/canli-yayin.html` | ✓ |
| E-091 | Canlı Yayın · yayın yok | durum | Canlı | `canli-yayin.html` | Detay | Sıradaki yayın saati; sona eren yayınlar | `ekranlar/icerik/canli-yayin.html?durum=yayin-yok` | ✓ |
| E-092 | Canlı Yayın · mobil veri uyarısı | durum | Canlı | — | Detay | Mobil veride otomatik oynatma kapalı; dokun oynat | `ekranlar/icerik/canli-yayin.html?durum=mobil-veri` | ✓ |
| E-093 | Canlı Yayın · yükleniyor | durum | Canlı | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/canli-yayin.html?durum=yukleniyor` | ✓ |
| E-094 | Canlı Yayın · hata | durum | Canlı | `500.html` | Detay | Yayın açılamadı; Yeniden dene | `ekranlar/icerik/canli-yayin.html?durum=hata` | ✓ |
| E-095 | Canlı Yayın · çevrimdışı | durum | Canlı | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/canli-yayin.html?durum=cevrimdisi` | ✓ |
| E-096 | Son Dakika | içerik | Canlı | `son-dakika.html` | Liste | Saatli satır, gün ayracı, saat 14.30 biçimi | `ekranlar/icerik/son-dakika.html` | ✓ |
| E-097 | Son Dakika · yeni haber geldi | durum | Canlı | — | Liste | "N yeni haber" hapı üstte; dokununca başa ve yenile | `ekranlar/icerik/son-dakika.html?durum=yeni` | ✓ |
| E-098 | Son Dakika · yükleniyor | durum | Canlı | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/son-dakika.html?durum=yukleniyor` | ✓ |
| E-099 | Son Dakika · aşağı çekip yenileme | durum | Canlı | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/son-dakika.html?durum=yenileniyor` | ✓ |
| E-100 | Son Dakika · sayfa sonu yükleme | durum | Canlı | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/son-dakika.html?durum=daha-fazla` | ✓ |
| E-101 | Son Dakika · boş | durum | Canlı | `durumlar.html` (boş) | Liste | Bugün son dakika yok (gece yarısından sonra); dünküler altta | `ekranlar/icerik/son-dakika.html?durum=bos` | ✓ |
| E-102 | Son Dakika · hata | durum | Canlı | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/son-dakika.html?durum=hata` | ✓ |
| E-103 | Son Dakika · çevrimdışı | durum | Canlı | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/son-dakika.html?durum=cevrimdisi` | ✓ |

### Arama

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-104 | Arama girişi | içerik | Arama | arama penceresi (uc-search-modal) | — | Klavye açık; son aramalar, gündemdekiler, mikrofon düğmesi | `ekranlar/icerik/arama.html` | ✓ |
| E-105 | Arama · yazarken öneriler | durum | Arama | arama penceresi | — | Haber, yazar, etiket önerileri; eşleşen kısım kalın | `ekranlar/icerik/arama.html?durum=yaziyor` | ✓ |
| E-106 | Arama · son arama yok | durum | Arama | — | — | Geçmiş boş: yalnız gündemdekiler | `ekranlar/icerik/arama.html?durum=bos` | ✓ |
| E-107 | Arama sonuçları | içerik | Arama | `arama.html` | Liste | Tür sekmeleri (sitedeki tür şeridi), sonuç kartları; liste kartıyla aynı | `ekranlar/icerik/arama-sonuc.html` | ✓ |
| E-108 | Arama sonuçları · süzgeç alt sayfası | sistem | Arama | `arama.html` (süzgeç) | Liste | Tarih, bölüm, sıralama; Uygula · Temizle | `ekranlar/icerik/arama-sonuc.html?durum=suzgec` | ✓ |
| E-109 | Arama sonuçları · yazım önerisi | durum | Arama | `arama.html` | Liste | "Bunu mu demek istedin?" + düzeltilmiş sonuçlar | `ekranlar/icerik/arama-sonuc.html?durum=oneri` | ✓ |
| E-110 | Arama sonuçları · bu türde sonuç yok | durum | Arama | `durumlar.html` | Liste | Seçili sekmede yok; Tümü'nde sayı | `ekranlar/icerik/arama-sonuc.html?durum=tur-bos` | ✓ |
| E-111 | Arama sonuçları · yükleniyor | durum | Arama | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/arama-sonuc.html?durum=yukleniyor` | ✓ |
| E-112 | Arama sonuçları · sayfa sonu yükleme | durum | Arama | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/arama-sonuc.html?durum=daha-fazla` | ✓ |
| E-113 | Arama sonuçları · boş | durum | Arama | `durumlar.html` (boş) | Liste | Sonuç yok: aramayı değiştir, Dada'ya Sor'a sor, gündemdekiler | `ekranlar/icerik/arama-sonuc.html?durum=bos` | ✓ |
| E-114 | Arama sonuçları · hata | durum | Arama | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/arama-sonuc.html?durum=hata` | ✓ |
| E-115 | Arama sonuçları · çevrimdışı | durum | Arama | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/arama-sonuc.html?durum=cevrimdisi` | ✓ |
| E-116 | Dada'ya Sor · başlangıç | içerik | Arama | `dadaya-sor.html` | — | Örnek sorular; soru alanı; B-16 (arama ile birleşik kutu) açık | `ekranlar/icerik/dadaya-sor.html` | ✓ |
| E-117 | Dada'ya Sor · yanıt yazılıyor | durum | Arama | `dadaya-sor.html` | — | Yanıt akarak gelir; durdur | `ekranlar/icerik/dadaya-sor.html?durum=yaziyor` | ✓ |
| E-118 | Dada'ya Sor · yanıt | içerik | Arama | `dadaya-sor.html` | — | Her yanıtta kaynak haber bağlantıları; "AI ile hazırlandı" etiketi (panel AI kuralları) | `ekranlar/icerik/dadaya-sor.html?durum=yanit` | ✓ |
| E-119 | Dada'ya Sor · yanıt bulunamadı | durum | Arama | — | — | Haberlerde karşılığı yok; aramaya geç | `ekranlar/icerik/dadaya-sor.html?durum=bos` | ✓ |
| E-120 | Dada'ya Sor · hata | durum | Arama | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/dadaya-sor.html?durum=hata` | ✓ |
| E-121 | Dada'ya Sor · çevrimdışı | durum | Arama | `cevrimdisi.html` | — | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/dadaya-sor.html?durum=cevrimdisi` | ✓ |

### Video Haber

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-122 | Video Haber listesi | içerik | Video | `video.html` | Liste | Süzgeç: Tümü, Gündem, Finans, Spor, Dünya, Kadın, Savunma, Kampüs, Teknoloji; kartta tür etiketi (Anlık Gelişme, Sahadan, Açıklayıcı Video, Röportaj) ve süre | `ekranlar/icerik/video.html` | ✓ |
| E-123 | Video Haber · süzgeç seçili | durum | Video | `video.html?kategori=spor` | Liste | Kategori çipi seçili (eski kategori sayfası yerine) | `ekranlar/icerik/video.html?kategori=spor` | ✓ |
| E-124 | Video Haber listesi · yükleniyor | durum | Video | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/video.html?durum=yukleniyor` | ✓ |
| E-125 | Video Haber listesi · aşağı çekip yenileme | durum | Video | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/video.html?durum=yenileniyor` | ✓ |
| E-126 | Video Haber listesi · sayfa sonu yükleme | durum | Video | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/video.html?durum=daha-fazla` | ✓ |
| E-127 | Video Haber listesi · boş | durum | Video | `durumlar.html` (boş) | Liste | Bu kategoride video yok; Tümü'ne dön | `ekranlar/icerik/video.html?durum=bos` | ✓ |
| E-128 | Video Haber listesi · hata | durum | Video | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/video.html?durum=hata` | ✓ |
| E-129 | Video Haber listesi · çevrimdışı | durum | Video | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/video.html?durum=cevrimdisi` | ✓ |
| E-130 | Video detayı · oynatılıyor | içerik | Video | `video-detay.html` | Detay | Oynatıcı tam genişlik, başlık, ilişkili haber, sıradaki videolar | `ekranlar/icerik/video-detay.html` | ✓ |
| E-131 | Video detayı · denetimler | durum | Video | — | Detay | Dokununca: duraklat, ileri/geri 10 sn, altyazı, ses, tam ekran | `ekranlar/icerik/video-detay.html?durum=denetim` | ✓ |
| E-132 | Video detayı · yatay tam ekran | durum | Video | — | Detay | Telefon yatay; güvenli alanlar yanlarda | `ekranlar/icerik/video-detay.html?durum=tam-ekran` | ✓ |
| E-133 | Video detayı · resim içinde resim | durum | Video | — | Detay | Uygulamadan çıkınca küçük pencere (iOS/Android sistem davranışı) | `ekranlar/icerik/video-detay.html?durum=pip` | ✓ |
| E-134 | Video detayı · mobil veri uyarısı | durum | Video | — | Detay | Otomatik oynatma kapalı; dokun oynat | `ekranlar/icerik/video-detay.html?durum=mobil-veri` | ✓ |
| E-135 | Video detayı · yükleniyor | durum | Video | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/video-detay.html?durum=yukleniyor` | ✓ |
| E-136 | Video detayı · hata | durum | Video | `500.html` | Detay | Video oynatılamadı; Yeniden dene | `ekranlar/icerik/video-detay.html?durum=hata` | ✓ |
| E-137 | Video detayı · bulunamadı | durum | Video | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/video-detay.html?durum=bulunamadi` | ✓ |
| E-138 | Video detayı · çevrimdışı | durum | Video | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/video-detay.html?durum=cevrimdisi` | ✓ |

### Akış (kök)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-139 | Akış · sessiz açılış | içerik | Akış | `akis.html` | Akış | Tam ekran dikey 9:16; yukarı kaydır sıradaki; başlık habere götürür (K23) | `hibrit/akis.html` | ✓ |
| E-140 | Akış · sesli | durum | Akış | — | Akış | Ses açık; Spiker duraklar (tek oynatıcı kuralı) | `hibrit/akis.html?ses=1` | ✓ |
| E-141 | Akış · duraklatıldı | durum | Akış | — | Akış | Dokununca durur; oynat simgesi | `hibrit/akis.html?dur=1` | ✓ |
| E-142 | Akış · altyazı açık | durum | Akış | — | Akış | Sessizken altyazı | `hibrit/akis.html?altyazi=1` | ✓ |
| E-143 | Akış · mobil veri | durum | Akış | — | Akış | Mobil veride otomatik oynatma kapalı; kapak + dokun oynat | `hibrit/akis.html?durum=mobil-veri` | ✓ |
| E-144 | Akış · günün akışı bitti | durum | Akış | `akis.html` (C14: sonu olan akış) | Akış | Son kart: "Günün akışı bitti"; Video Haber'e geç | `hibrit/akis.html?durum=bitti` | ✓ |
| E-145 | Akış · yükleniyor | durum | Akış | `durumlar.html` (iskelet) | Akış | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `hibrit/akis.html?durum=yukleniyor` | ✓ |
| E-146 | Akış · sayfa sonu yükleme | durum | Akış | — (sitede sayfalama) | Akış | "Sıradaki videolar yükleniyor" (akış sonunda) | `hibrit/akis.html?durum=daha-fazla` | ✓ |
| E-147 | Akış · hata | durum | Akış | `500.html` | Akış | Video oynatılamadı; sıradakine geç | `hibrit/akis.html?durum=hata` | ✓ |
| E-148 | Akış · çevrimdışı | durum | Akış | `cevrimdisi.html` | Akış | Akış çevrimdışı çalışmaz; Kaydedilenler'e git | `hibrit/akis.html?durum=cevrimdisi` | ✓ |

### Foto Fokus ve İnfografik

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-149 | Foto Fokus listesi | içerik | Galeri | `foto-fokus.html` | Liste | Süzgeç: Tümü, Şehir, Toplum, Doğa ve İklim, Kültür ve Sanat, Spor, Savunma, Dünya; kartta kare sayısı | `ekranlar/icerik/foto-fokus.html` | ✓ |
| E-150 | Foto Fokus listesi · yükleniyor | durum | Galeri | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/foto-fokus.html?durum=yukleniyor` | ✓ |
| E-151 | Foto Fokus listesi · aşağı çekip yenileme | durum | Galeri | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/foto-fokus.html?durum=yenileniyor` | ✓ |
| E-152 | Foto Fokus listesi · sayfa sonu yükleme | durum | Galeri | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/foto-fokus.html?durum=daha-fazla` | ✓ |
| E-153 | Foto Fokus listesi · boş | durum | Galeri | `durumlar.html` (boş) | Liste | Bu temada galeri yok | `ekranlar/icerik/foto-fokus.html?durum=bos` | ✓ |
| E-154 | Foto Fokus listesi · hata | durum | Galeri | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/foto-fokus.html?durum=hata` | ✓ |
| E-155 | Foto Fokus listesi · çevrimdışı | durum | Galeri | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/foto-fokus.html?durum=cevrimdisi` | ✓ |
| E-156 | Galeri (Foto Fokus detayı) | içerik | Galeri | `foto-fokus-detay.html` | Detay | Albüm kapağı, kareler, altyazılar | `ekranlar/icerik/galeri.html` | ✓ |
| E-157 | Galeri · tam ekran görüntüleyici | içerik | Galeri | görüntüleyici (dh-gal) | — | Yana kaydır, kare sayacı, altyazı aç/kapa, aşağı çek kapat; detay kapağı da bunu kullanır | `ekranlar/icerik/galeri.html?durum=goruntule` | ✓ |
| E-158 | Galeri · yakınlaştırılmış | durum | Galeri | — | — | İki parmak / çift dokunuş; arayüz gizli | `ekranlar/icerik/galeri.html?durum=yakinlastir` | ✓ |
| E-159 | Galeri · yükleniyor | durum | Galeri | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/galeri.html?durum=yukleniyor` | ✓ |
| E-160 | Galeri · hata | durum | Galeri | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/galeri.html?durum=hata` | ✓ |
| E-161 | Galeri · bulunamadı | durum | Galeri | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/galeri.html?durum=bulunamadi` | ✓ |
| E-162 | Galeri · çevrimdışı | durum | Galeri | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/galeri.html?durum=cevrimdisi` | ✓ |
| E-163 | İnfografik listesi | içerik | Galeri | `infografik.html` | Liste | Süzgeç: Tümü, Finans ve Ekonomi, Toplum ve Demografi, Enerji ve İklim, Savunma ve Teknoloji, Spor, Eğitim ve Kampüs, Dünya | `ekranlar/icerik/infografik.html` | ✓ |
| E-164 | İnfografik listesi · yükleniyor | durum | Galeri | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/infografik.html?durum=yukleniyor` | ✓ |
| E-165 | İnfografik listesi · aşağı çekip yenileme | durum | Galeri | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/infografik.html?durum=yenileniyor` | ✓ |
| E-166 | İnfografik listesi · sayfa sonu yükleme | durum | Galeri | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/infografik.html?durum=daha-fazla` | ✓ |
| E-167 | İnfografik listesi · boş | durum | Galeri | `durumlar.html` (boş) | Liste | Bu konuda infografik yok | `ekranlar/icerik/infografik.html?durum=bos` | ✓ |
| E-168 | İnfografik listesi · hata | durum | Galeri | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/infografik.html?durum=hata` | ✓ |
| E-169 | İnfografik listesi · çevrimdışı | durum | Galeri | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/infografik.html?durum=cevrimdisi` | ✓ |
| E-170 | İnfografik detayı | içerik | Galeri | `infografik-detay.html` | Detay | Görüntüleyici (galeriyle ortak), yakınlaştır; veri kaynağı ve dönem etiketi zorunlu (DADAHABER-10 §5) | `ekranlar/icerik/infografik-detay.html` | ✓ |
| E-171 | İnfografik detayı · yakınlaştırılmış | durum | Galeri | — | — | Tam ekran, kaydırarak gez | `ekranlar/icerik/infografik-detay.html?durum=yakinlastir` | ✓ |
| E-172 | İnfografik detayı · yükleniyor | durum | Galeri | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/infografik-detay.html?durum=yukleniyor` | ✓ |
| E-173 | İnfografik detayı · hata | durum | Galeri | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/infografik-detay.html?durum=hata` | ✓ |
| E-174 | İnfografik detayı · bulunamadı | durum | Galeri | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/infografik-detay.html?durum=bulunamadi` | ✓ |
| E-175 | İnfografik detayı · çevrimdışı | durum | Galeri | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/infografik-detay.html?durum=cevrimdisi` | ✓ |

### Dinle: Haber Dinle, Spiker, Podcast

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-176 | Haber Dinle (Dinle sekmesi) | içerik | Ses | `haber-dinle.html` | Liste | Süzgeç: Tümü, Gündem, Finans, Spor, Dünya, Kadın, Savunma, Kampüs, Teknoloji; her içerikte ana kategori etiketi; Spiker yayında kartı. Sekmenin içeriği varsayım; en üstte Spiker kartı (yayında: canlı kart; değilse son bülten + sıradaki saat), altında sesli haberler; Dinle = haberin sesli okunması, Spiker ayrı ad ve ikon; yayındayken alt gezinmede Dinle'de canlı noktası (K39) | `ekranlar/icerik/haber-dinle.html` | ✓ |
| E-606 | Haber Dinle · Spiker yayında değil | durum | Ses | — | Liste | En üstte son bülten ve "Sıradaki bülten 19.00"; Dinle sekmesinde canlı noktası yok (K39) | `ekranlar/icerik/haber-dinle.html?spiker=0` | ✓ |
| E-177 | Haber Dinle · kategori seçili | durum | Ses | `haber-dinle.html?kategori=…` | Liste | Eski kategori sayfaları yerine süzgeç | `ekranlar/icerik/haber-dinle.html?kategori=finans` | ✓ |
| E-178 | Haber Dinle · yayın kuşağı: Sabah Özeti | içerik | Ses | `haber-dinle.html` (yayın kuşağı) | Liste | Kuşağın bültenleri; ikinci eksen süzgeci (DADAHABER-10 §4) | `ekranlar/icerik/haber-dinle.html?kusak=sabah-ozeti` | ✓ |
| E-179 | Haber Dinle · yayın kuşağı: Gün Ortası | içerik | Ses | `haber-dinle.html` (yayın kuşağı) | Liste | Kuşağın bültenleri; ikinci eksen süzgeci (DADAHABER-10 §4) | `ekranlar/icerik/haber-dinle.html?kusak=gun-ortasi` | ✓ |
| E-180 | Haber Dinle · yayın kuşağı: Akşam Bülteni | içerik | Ses | `haber-dinle.html` (yayın kuşağı) | Liste | Kuşağın bültenleri; ikinci eksen süzgeci (DADAHABER-10 §4) | `ekranlar/icerik/haber-dinle.html?kusak=aksam-bulteni` | ✓ |
| E-181 | Haber Dinle · yayın kuşağı: Hafta Özeti | içerik | Ses | `haber-dinle.html` (yayın kuşağı) | Liste | Kuşağın bültenleri; ikinci eksen süzgeci (DADAHABER-10 §4) | `ekranlar/icerik/haber-dinle.html?kusak=hafta-ozeti` | ✓ |
| E-182 | Haber Dinle · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/haber-dinle.html?durum=yukleniyor` | ✓ |
| E-183 | Haber Dinle · aşağı çekip yenileme | durum | Ses | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/haber-dinle.html?durum=yenileniyor` | ✓ |
| E-184 | Haber Dinle · sayfa sonu yükleme | durum | Ses | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/haber-dinle.html?durum=daha-fazla` | ✓ |
| E-185 | Haber Dinle · boş | durum | Ses | `durumlar.html` (boş) | Liste | Bu kuşağın bülteni henüz yayımlanmadı; yayın saati | `ekranlar/icerik/haber-dinle.html?durum=bos` | ✓ |
| E-186 | Haber Dinle · hata | durum | Ses | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/haber-dinle.html?durum=hata` | ✓ |
| E-187 | Haber Dinle · çevrimdışı | durum | Ses | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/haber-dinle.html?durum=cevrimdisi` | ✓ |
| E-188 | Haber Dinle bülten detayı | içerik | Ses | `haber-dinle-detay.html` | Detay | Oynatıcı, deşifre metni, bültendeki sesli haberler, hız, sıradaki | `ekranlar/icerik/haber-dinle-bulten.html` | ✓ |
| E-189 | Bülten detayı · çalıyor, deşifre izliyor | durum | Ses | — | Detay | Okunan cümle vurgulu; metne dokununca o ana atla | `ekranlar/icerik/haber-dinle-bulten.html?durum=caliyor` | ✓ |
| E-190 | Bülten detayı · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/haber-dinle-bulten.html?durum=yukleniyor` | ✓ |
| E-191 | Bülten detayı · hata | durum | Ses | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/haber-dinle-bulten.html?durum=hata` | ✓ |
| E-192 | Bülten detayı · bulunamadı | durum | Ses | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/haber-dinle-bulten.html?durum=bulunamadi` | ✓ |
| E-193 | Bülten detayı · çevrimdışı | durum | Ses | `cevrimdisi.html` | Detay | İndirilmişse çalar; değilse bağlantı yok | `ekranlar/icerik/haber-dinle-bulten.html?durum=cevrimdisi` | ✓ |
| E-194 | Dada Spiker · yayında | içerik | Ses | sitede yüzen panel (A · Yüz Açık Alt Bant) | — | Tam ekran ses + video oynatıcı; sıradaki bültenler; küçült → mini oynatıcı; girişleri: hikâye şeridinin ilk dairesi ve Dinle sekmesi; uygulamada yüzen Spiker balonu yok (K39) | `ekranlar/icerik/spiker.html` | ✓ |
| E-195 | Dada Spiker · yalnız ses | durum | Ses | — | — | Görüntü kapalı, ses sürer (arka planda ve kilit ekranında) | `ekranlar/icerik/spiker.html?durum=ses` | ✓ |
| E-196 | Dada Spiker · yayın yok | durum | Ses | — | — | Sıradaki bülten saati; son bültenler | `ekranlar/icerik/spiker.html?durum=yayin-yok` | ✓ |
| E-197 | Dada Spiker · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | — | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/spiker.html?durum=yukleniyor` | ✓ |
| E-198 | Dada Spiker · hata | durum | Ses | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/spiker.html?durum=hata` | ✓ |
| E-199 | Dada Spiker · çevrimdışı | durum | Ses | `cevrimdisi.html` | — | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/spiker.html?durum=cevrimdisi` | ✓ |
| E-200 | Podcast (programlar) | içerik | Ses | `podcast.html` | Liste | 7 program; periyot süzgeci: Tümü, Haftalık Yayınlar, Aylık Dosya, Özel Seri; kartta periyot rozeti | `ekranlar/icerik/podcast.html` | ✓ |
| E-201 | Podcast · periyot seçili | durum | Ses | `podcast.html` (süzgeç) | Liste | Ör. Aylık Dosya: Strateji ve Savunma Masası, Kültür Ajandası | `ekranlar/icerik/podcast.html?periyot=aylik` | ✓ |
| E-202 | Podcast · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/podcast.html?durum=yukleniyor` | ✓ |
| E-203 | Podcast · aşağı çekip yenileme | durum | Ses | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/podcast.html?durum=yenileniyor` | ✓ |
| E-204 | Podcast · boş | durum | Ses | `durumlar.html` (boş) | Liste | Bu periyotta program yok; Tümü'ne dön | `ekranlar/icerik/podcast.html?durum=bos` | ✓ |
| E-205 | Podcast · hata | durum | Ses | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/podcast.html?durum=hata` | ✓ |
| E-206 | Podcast · çevrimdışı | durum | Ses | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/podcast.html?durum=cevrimdisi` | ✓ |
| E-207 | Podcast programı (seri) · üye | içerik | Ses | `podcast-kategori.html` → `podcast.html?program=…` | Liste | Program başlığı, periyot rozeti, açıklama, Takip et, bölümler (yeni önce) | `ekranlar/icerik/podcast-program.html` | ✓ |
| E-208 | Podcast programı · misafir | içerik | Ses | — | Liste | Takip et → tetik paneli | `ekranlar/icerik/podcast-program.html?uye=0` | ✓ |
| E-209 | Podcast programı · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/podcast-program.html?durum=yukleniyor` | ✓ |
| E-210 | Podcast programı · aşağı çekip yenileme | durum | Ses | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/podcast-program.html?durum=yenileniyor` | ✓ |
| E-211 | Podcast programı · sayfa sonu yükleme | durum | Ses | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/podcast-program.html?durum=daha-fazla` | ✓ |
| E-212 | Podcast programı · boş | durum | Ses | `durumlar.html` (boş) | Liste | Özel seri: ilk bölüm yakında | `ekranlar/icerik/podcast-program.html?durum=bos` | ✓ |
| E-213 | Podcast programı · hata | durum | Ses | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/podcast-program.html?durum=hata` | ✓ |
| E-214 | Podcast programı · çevrimdışı | durum | Ses | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/podcast-program.html?durum=cevrimdisi` | ✓ |
| E-215 | Podcast bölümü | içerik | Ses | `podcast-detay.html` | Detay | Oynat, kaldığın yer, bölüm notları, ilişkili haber, İndir | `ekranlar/icerik/podcast-bolum.html` | ✓ |
| E-216 | Podcast bölümü · indiriliyor / indirildi | durum | Ses | — | Detay | İndirme halkası; indirildi işareti (çevrimdışı) | `ekranlar/icerik/podcast-bolum.html?durum=indirildi` | ✓ |
| E-217 | Podcast bölümü · kaldığın yerden | durum | Ses | `podcast-detay.html` | Detay | "Kaldığın yerden devam et"; ilerleme çubuğu | `ekranlar/icerik/podcast-bolum.html?durum=devam` | ✓ |
| E-218 | Podcast bölümü · yükleniyor | durum | Ses | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/podcast-bolum.html?durum=yukleniyor` | ✓ |
| E-219 | Podcast bölümü · hata | durum | Ses | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/podcast-bolum.html?durum=hata` | ✓ |
| E-220 | Podcast bölümü · bulunamadı | durum | Ses | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/podcast-bolum.html?durum=bulunamadi` | ✓ |
| E-221 | Podcast bölümü · çevrimdışı | durum | Ses | `cevrimdisi.html` | Detay | İndirilmişse çalar; değilse bağlantı yok | `ekranlar/icerik/podcast-bolum.html?durum=cevrimdisi` | ✓ |

### Keşfet ürünleri

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-222 | Keşfet merkezi | içerik | Keşfet | `kesfet.html` | Liste | Anlık, Teknoloji ve Bilim, Sağlık ve Yaşam, Kültür ve Sanat, Keşfet Formatları, Medya ve Arşiv (DADAHABER-10) | `ekranlar/icerik/kesfet.html` | ✓ |
| E-223 | Keşfet merkezi · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/kesfet.html?durum=yukleniyor` | ✓ |
| E-224 | Keşfet merkezi · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/kesfet.html?durum=hata` | ✓ |
| E-225 | Keşfet merkezi · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/kesfet.html?durum=cevrimdisi` | ✓ |
| E-226 | Günün 5'i · bugünün baskısı | içerik | Keşfet | `gunun-5-i.html` | — | 5 haber, okundu ilerlemesi, Dinle; "bugünlük bu kadar" | `ekranlar/icerik/gunun-5i.html` | ✓ |
| E-227 | Günün 5'i · misafir | içerik | Keşfet | `gunun-5-i.html` | — | İlerleme cihazda (C30 varsayımı) | `ekranlar/icerik/gunun-5i.html?uye=0` | ✓ |
| E-228 | Günün 5'i · tamamlandı | durum | Keşfet | — | — | 5/5 okundu; okuma serisi işareti; sonraki baskı saati | `ekranlar/icerik/gunun-5i.html?durum=bitti` | ✓ |
| E-229 | Günün 5'i · arşiv | içerik | Keşfet | `gunun-5-i.html` (arşiv) | Liste | Önceki günlerin baskıları | `ekranlar/icerik/gunun-5i.html?durum=arsiv` | ✓ |
| E-230 | Günün 5'i · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | — | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/gunun-5i.html?durum=yukleniyor` | ✓ |
| E-231 | Günün 5'i · hata | durum | Keşfet | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/gunun-5i.html?durum=hata` | ✓ |
| E-232 | Günün 5'i · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | — | Otomatik indirilmişse okunur; değilse bağlantı yok | `ekranlar/icerik/gunun-5i.html?durum=cevrimdisi` | ✓ |
| E-233 | Dada Özet | içerik | Keşfet | `dada-ozet.html` | Liste | Özet akışı; 15 sn / 1 dk / tam metin derinliği; "AI ile özetlendi" + kaynak haber | `ekranlar/icerik/dada-ozet.html` | ✓ |
| E-234 | Dada Özet · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/dada-ozet.html?durum=yukleniyor` | ✓ |
| E-235 | Dada Özet · aşağı çekip yenileme | durum | Keşfet | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/dada-ozet.html?durum=yenileniyor` | ✓ |
| E-236 | Dada Özet · sayfa sonu yükleme | durum | Keşfet | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/dada-ozet.html?durum=daha-fazla` | ✓ |
| E-237 | Dada Özet · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Boş durum: ikon, tek cümle, tek eylem | `ekranlar/icerik/dada-ozet.html?durum=bos` | ✓ |
| E-238 | Dada Özet · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/dada-ozet.html?durum=hata` | ✓ |
| E-239 | Dada Özet · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/dada-ozet.html?durum=cevrimdisi` | ✓ |
| E-240 | Bugün Ne Oldu? | içerik | Keşfet | `bugun-ne-oldu.html` | Liste | Tarih çipleri + saatli özet (çizelge kalıbı) | `ekranlar/icerik/bugun-ne-oldu.html` | ✓ |
| E-241 | Bugün Ne Oldu? · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/bugun-ne-oldu.html?durum=yukleniyor` | ✓ |
| E-242 | Bugün Ne Oldu? · aşağı çekip yenileme | durum | Keşfet | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/bugun-ne-oldu.html?durum=yenileniyor` | ✓ |
| E-243 | Bugün Ne Oldu? · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Seçilen günde özet yok | `ekranlar/icerik/bugun-ne-oldu.html?durum=bos` | ✓ |
| E-244 | Bugün Ne Oldu? · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/bugun-ne-oldu.html?durum=hata` | ✓ |
| E-245 | Bugün Ne Oldu? · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/bugun-ne-oldu.html?durum=cevrimdisi` | ✓ |
| E-246 | Güncellenen Haberler | içerik | Keşfet | `guncellenen-haberler.html` | Liste | Her satırda "ne değişti" notu ve güncelleme saati | `ekranlar/icerik/guncellenen-haberler.html` | ✓ |
| E-247 | Güncellenen Haberler · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/guncellenen-haberler.html?durum=yukleniyor` | ✓ |
| E-248 | Güncellenen Haberler · aşağı çekip yenileme | durum | Keşfet | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/guncellenen-haberler.html?durum=yenileniyor` | ✓ |
| E-249 | Güncellenen Haberler · sayfa sonu yükleme | durum | Keşfet | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/guncellenen-haberler.html?durum=daha-fazla` | ✓ |
| E-250 | Güncellenen Haberler · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Boş durum: ikon, tek cümle, tek eylem | `ekranlar/icerik/guncellenen-haberler.html?durum=bos` | ✓ |
| E-251 | Güncellenen Haberler · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/guncellenen-haberler.html?durum=hata` | ✓ |
| E-252 | Güncellenen Haberler · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/guncellenen-haberler.html?durum=cevrimdisi` | ✓ |
| E-253 | Dada Bağlam · dosyalar | içerik | Keşfet | `dada-baglam.html` | Liste | Dosya listesi | `ekranlar/icerik/dada-baglam.html` | ✓ |
| E-254 | Dada Bağlam · dosya detayı | içerik | Keşfet | `dada-baglam-dosya.html` | Detay | Özet + kronoloji (zaman çizelgesi), ilgili haberler | `ekranlar/icerik/dada-baglam.html?dosya=1` | ✓ |
| E-255 | Dada Bağlam · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/dada-baglam.html?durum=yukleniyor` | ✓ |
| E-256 | Dada Bağlam · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/dada-baglam.html?durum=hata` | ✓ |
| E-257 | Dada Bağlam · bulunamadı | durum | Keşfet | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/dada-baglam.html?durum=bulunamadi` | ✓ |
| E-258 | Dada Bağlam · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/dada-baglam.html?durum=cevrimdisi` | ✓ |
| E-259 | Dada Doğrula · merkez | içerik | Keşfet | `dada-dogrula.html` | Liste | İncelemeler; tek teyit gösterimi "İncelendi · N kaynak" | `ekranlar/icerik/dada-dogrula.html` | ✓ |
| E-260 | Dada Doğrula · inceleme detayı | içerik | Keşfet | `dada-dogrula-inceleme.html` | Detay | İddia, inceleme, kaynaklar | `ekranlar/icerik/dada-dogrula.html?inceleme=1` | ✓ |
| E-261 | Dada Doğrula · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/dada-dogrula.html?durum=yukleniyor` | ✓ |
| E-262 | Dada Doğrula · sayfa sonu yükleme | durum | Keşfet | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/dada-dogrula.html?durum=daha-fazla` | ✓ |
| E-263 | Dada Doğrula · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/dada-dogrula.html?durum=hata` | ✓ |
| E-264 | Dada Doğrula · bulunamadı | durum | Keşfet | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/dada-dogrula.html?durum=bulunamadi` | ✓ |
| E-265 | Dada Doğrula · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/dada-dogrula.html?durum=cevrimdisi` | ✓ |
| E-266 | Farklı Bakışlar | içerik | Keşfet | `farkli-bakislar.html` | Detay | Karşılaştırma; sütunlar yatay kayar ya da sekme | `ekranlar/icerik/farkli-bakislar.html` | ✓ |
| E-267 | Farklı Bakışlar · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/farkli-bakislar.html?durum=yukleniyor` | ✓ |
| E-268 | Farklı Bakışlar · hata | durum | Keşfet | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/farkli-bakislar.html?durum=hata` | ✓ |
| E-269 | Farklı Bakışlar · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/farkli-bakislar.html?durum=cevrimdisi` | ✓ |
| E-270 | Veri ve Harita | içerik | Keşfet | `veri-ve-harita.html` | Detay | Harita ve tablolar kap içinde kayar | `ekranlar/icerik/veri-ve-harita.html` | ✓ |
| E-271 | Veri ve Harita · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/veri-ve-harita.html?durum=yukleniyor` | ✓ |
| E-272 | Veri ve Harita · hata | durum | Keşfet | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/veri-ve-harita.html?durum=hata` | ✓ |
| E-273 | Veri ve Harita · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/veri-ve-harita.html?durum=cevrimdisi` | ✓ |
| E-274 | Sakin Akış | içerik | Keşfet | `sakin-akis.html` | Liste | Ayarlı akış; uygulamada bildirim davranışını da değiştirir | `ekranlar/icerik/sakin-akis.html` | ✓ |
| E-275 | Sakin Akış · ayar alt sayfası | sistem | Keşfet | `sakin-akis.html` (ayar) | Liste | Konu dışarıda bırak, bildirimleri sustur | `ekranlar/icerik/sakin-akis.html?durum=ayar` | ✓ |
| E-276 | Sakin Akış · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/sakin-akis.html?durum=yukleniyor` | ✓ |
| E-277 | Sakin Akış · sayfa sonu yükleme | durum | Keşfet | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/sakin-akis.html?durum=daha-fazla` | ✓ |
| E-278 | Sakin Akış · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/sakin-akis.html?durum=hata` | ✓ |
| E-279 | Sakin Akış · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/sakin-akis.html?durum=cevrimdisi` | ✓ |
| E-280 | Bana Etkisi · üye | içerik | Keşfet | `bana-etkisi.html` | Liste | Profile göre haberler (Öğrenci, Çalışan, Emekli, Ev sahibi, Kiracı, Esnaf; panelle aynı) | `ekranlar/icerik/bana-etkisi.html` | ✓ |
| E-281 | Bana Etkisi · profil seçilmedi | durum | Keşfet | `bana-etkisi.html` | Liste | Misafir ya da profilsiz üye: profil seç çağrısı | `ekranlar/icerik/bana-etkisi.html?uye=0` | ✓ |
| E-282 | Bana Etkisi · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/bana-etkisi.html?durum=yukleniyor` | ✓ |
| E-283 | Bana Etkisi · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Boş durum: ikon, tek cümle, tek eylem | `ekranlar/icerik/bana-etkisi.html?durum=bos` | ✓ |
| E-284 | Bana Etkisi · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/bana-etkisi.html?durum=hata` | ✓ |
| E-285 | Bana Etkisi · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/bana-etkisi.html?durum=cevrimdisi` | ✓ |
| E-286 | Takvim · Gündem Takvimi | içerik | Keşfet | `gundem-takvimi.html` | Liste | Gün şeridi, süzgeç, takvime ekle (B-25) | `ekranlar/icerik/takvim.html?tur=gundem` | ✓ |
| E-287 | Takvim · Ekonomik Takvim | içerik | Servis | `ekonomik-takvim.html` | Liste | Aynı takvim kalıbı; önem derecesi | `ekranlar/icerik/takvim.html?tur=ekonomik` | ✓ |
| E-288 | Takvim · Sınav Takvimi | içerik | Servis | `sinav-takvimi.html` | Liste | Aynı takvim kalıbı; YKS, KPSS, ALES ve YDS | `ekranlar/icerik/takvim.html?tur=sinav` | ✓ |
| E-289 | Takvim · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/takvim.html?durum=yukleniyor` | ✓ |
| E-290 | Takvim · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Seçilen günde etkinlik yok | `ekranlar/icerik/takvim.html?durum=bos` | ✓ |
| E-291 | Takvim · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/takvim.html?durum=hata` | ✓ |
| E-292 | Takvim · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/takvim.html?durum=cevrimdisi` | ✓ |
| E-293 | Arşiv | içerik | Keşfet | `arsiv.html` | Liste | Tarih seçici (alt sayfa) + o günün haberleri | `ekranlar/icerik/arsiv.html` | ✓ |
| E-294 | Arşiv · yükleniyor | durum | Keşfet | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/arsiv.html?durum=yukleniyor` | ✓ |
| E-295 | Arşiv · sayfa sonu yükleme | durum | Keşfet | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/arsiv.html?durum=daha-fazla` | ✓ |
| E-296 | Arşiv · boş | durum | Keşfet | `durumlar.html` (boş) | Liste | Seçilen tarihte haber yok | `ekranlar/icerik/arsiv.html?durum=bos` | ✓ |
| E-297 | Arşiv · hata | durum | Keşfet | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/arsiv.html?durum=hata` | ✓ |
| E-298 | Arşiv · çevrimdışı | durum | Keşfet | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/arsiv.html?durum=cevrimdisi` | ✓ |

### Kişisel liste

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-299 | Bugün Senin İçin · üye | içerik | Kişisel | Hesabım › Genel Bakış · Gündemim | Liste | Takip edilen konu, takım, şehir, yazar haberleri; takip çipleri süzgeç | `ekranlar/icerik/senin-icin.html` | ✓ |
| E-300 | Bugün Senin İçin · misafir | içerik | Kişisel | `hesabim-misafir.html` | Liste | Konu seç çağrısı + Giriş yap; cihaz tercihleri (C30 varsayımı) | `ekranlar/icerik/senin-icin.html?uye=0` | ✓ |
| E-301 | Bugün Senin İçin · yükleniyor | durum | Kişisel | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/senin-icin.html?durum=yukleniyor` | ✓ |
| E-302 | Bugün Senin İçin · aşağı çekip yenileme | durum | Kişisel | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/senin-icin.html?durum=yenileniyor` | ✓ |
| E-303 | Bugün Senin İçin · sayfa sonu yükleme | durum | Kişisel | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/senin-icin.html?durum=daha-fazla` | ✓ |
| E-304 | Bugün Senin İçin · boş | durum | Kişisel | `durumlar.html` (boş) | Liste | Takip ettiğin konularda bugün haber yok; konu ekle | `ekranlar/icerik/senin-icin.html?durum=bos` | ✓ |
| E-305 | Bugün Senin İçin · hata | durum | Kişisel | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/senin-icin.html?durum=hata` | ✓ |
| E-306 | Bugün Senin İçin · çevrimdışı | durum | Kişisel | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/senin-icin.html?durum=cevrimdisi` | ✓ |

### Yazar, etiket, kişi, gelişen olay

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-307 | Köşe yazarları (yazarlar dizini) | içerik | Yazar | `yazarlar.html` | Liste | Süzgeç şeridi; baş harf dairesi, ad, unvan, son yazı | `ekranlar/icerik/yazarlar.html` | ✓ |
| E-308 | Köşe yazarları · yükleniyor | durum | Yazar | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/yazarlar.html?durum=yukleniyor` | ✓ |
| E-309 | Köşe yazarları · aşağı çekip yenileme | durum | Yazar | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/yazarlar.html?durum=yenileniyor` | ✓ |
| E-310 | Köşe yazarları · boş | durum | Yazar | `durumlar.html` (boş) | Liste | Süzgeçte yazar yok | `ekranlar/icerik/yazarlar.html?durum=bos` | ✓ |
| E-311 | Köşe yazarları · hata | durum | Yazar | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/yazarlar.html?durum=hata` | ✓ |
| E-312 | Köşe yazarları · çevrimdışı | durum | Yazar | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/yazarlar.html?durum=cevrimdisi` | ✓ |
| E-313 | Yazar profili · üye | içerik | Yazar | `yazar.html` | Liste | Profil başlığı, Takip et, yazılar (yeni önce) | `ekranlar/icerik/yazar.html` | ✓ |
| E-314 | Yazar profili · misafir | içerik | Yazar | `yazar.html` | Liste | Takip et → tetik paneli | `ekranlar/icerik/yazar.html?uye=0` | ✓ |
| E-315 | Yazar profili · yükleniyor | durum | Yazar | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/yazar.html?durum=yukleniyor` | ✓ |
| E-316 | Yazar profili · sayfa sonu yükleme | durum | Yazar | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/yazar.html?durum=daha-fazla` | ✓ |
| E-317 | Yazar profili · boş | durum | Yazar | `durumlar.html` (boş) | Liste | Yazarın henüz yazısı yok | `ekranlar/icerik/yazar.html?durum=bos` | ✓ |
| E-318 | Yazar profili · hata | durum | Yazar | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/yazar.html?durum=hata` | ✓ |
| E-319 | Yazar profili · bulunamadı | durum | Yazar | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/yazar.html?durum=bulunamadi` | ✓ |
| E-320 | Yazar profili · çevrimdışı | durum | Yazar | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/yazar.html?durum=cevrimdisi` | ✓ |
| E-321 | Etiket · üye | içerik | Etiket | `etiket.html` | Liste | Etiket başlığı, Takip et, haberler | `ekranlar/icerik/etiket.html` | ✓ |
| E-322 | Etiket · misafir | içerik | Etiket | `etiket.html` | Liste | Takip et → tetik paneli (C30 varsayımı) | `ekranlar/icerik/etiket.html?uye=0` | ✓ |
| E-323 | Etiket · yükleniyor | durum | Etiket | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/etiket.html?durum=yukleniyor` | ✓ |
| E-324 | Etiket · aşağı çekip yenileme | durum | Etiket | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/etiket.html?durum=yenileniyor` | ✓ |
| E-325 | Etiket · sayfa sonu yükleme | durum | Etiket | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/etiket.html?durum=daha-fazla` | ✓ |
| E-326 | Etiket · boş | durum | Etiket | `durumlar.html` (boş) | Liste | Boş durum: ikon, tek cümle, tek eylem | `ekranlar/icerik/etiket.html?durum=bos` | ✓ |
| E-327 | Etiket · hata | durum | Etiket | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/etiket.html?durum=hata` | ✓ |
| E-328 | Etiket · çevrimdışı | durum | Etiket | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/etiket.html?durum=cevrimdisi` | ✓ |
| E-329 | Etiket · bulunamadı | durum | Etiket | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/etiket.html?durum=bulunamadi` | ✓ |
| E-330 | Kişi / kurum | içerik | Etiket | `kisi.html` | Liste | Kişi/kurum başlığı, Takip et, haberler | `ekranlar/icerik/kisi.html` | ✓ |
| E-331 | Kişi / kurum · yükleniyor | durum | Etiket | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/kisi.html?durum=yukleniyor` | ✓ |
| E-332 | Kişi / kurum · aşağı çekip yenileme | durum | Etiket | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/kisi.html?durum=yenileniyor` | ✓ |
| E-333 | Kişi / kurum · sayfa sonu yükleme | durum | Etiket | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/kisi.html?durum=daha-fazla` | ✓ |
| E-334 | Kişi / kurum · boş | durum | Etiket | `durumlar.html` (boş) | Liste | Boş durum: ikon, tek cümle, tek eylem | `ekranlar/icerik/kisi.html?durum=bos` | ✓ |
| E-335 | Kişi / kurum · hata | durum | Etiket | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/kisi.html?durum=hata` | ✓ |
| E-336 | Kişi / kurum · çevrimdışı | durum | Etiket | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/kisi.html?durum=cevrimdisi` | ✓ |
| E-337 | Kişi / kurum · bulunamadı | durum | Etiket | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/kisi.html?durum=bulunamadi` | ✓ |
| E-338 | Gelişen olay (konu) | içerik | Etiket | `konu.html` | Liste | Özet + kronoloji, Takip et; listedeki "Gelişen Olaylar" bloğundan (LS-D) | `ekranlar/icerik/gelisen-olay.html` | ✓ |
| E-339 | Gelişen olay · misafir | içerik | Etiket | `konu.html` | Liste | Takip et → tetik paneli | `ekranlar/icerik/gelisen-olay.html?uye=0` | ✓ |
| E-340 | Gelişen olay · yükleniyor | durum | Etiket | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/gelisen-olay.html?durum=yukleniyor` | ✓ |
| E-341 | Gelişen olay · aşağı çekip yenileme | durum | Etiket | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/gelisen-olay.html?durum=yenileniyor` | ✓ |
| E-342 | Gelişen olay · hata | durum | Etiket | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/gelisen-olay.html?durum=hata` | ✓ |
| E-343 | Gelişen olay · bulunamadı | durum | Etiket | `404.html`, `410.html` | Liste | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/gelisen-olay.html?durum=bulunamadi` | ✓ |
| E-344 | Gelişen olay · çevrimdışı | durum | Etiket | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/gelisen-olay.html?durum=cevrimdisi` | ✓ |

### Servisler

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-345 | Piyasalar · Piyasa Ekranı | içerik | Servis | `piyasa-ekrani.html` | Liste | Sekmeler: Piyasa Ekranı, Döviz, Altın, Borsa, Kripto Para, Faiz Oranları, Akaryakıt; tablolar kap içinde kayar | `ekranlar/icerik/piyasalar.html` | ✓ |
| E-346 | Piyasalar · Döviz | içerik | Servis | `doviz.html` | Liste | Kur tablosu + çevirici (D1 kalıbı) | `ekranlar/icerik/piyasalar.html?sekme=doviz` | ✓ |
| E-347 | Piyasalar · Altın | içerik | Servis | `altin.html` | Liste | Tablo | `ekranlar/icerik/piyasalar.html?sekme=altin` | ✓ |
| E-348 | Piyasalar · Borsa | içerik | Servis | `borsa.html` | Liste | Hisse tablosu, aramalı | `ekranlar/icerik/piyasalar.html?sekme=borsa` | ✓ |
| E-349 | Piyasalar · Kripto Para | içerik | Servis | `kripto-para.html` | Liste | Tablo + çevirici | `ekranlar/icerik/piyasalar.html?sekme=kripto` | ✓ |
| E-350 | Piyasalar · Faiz Oranları | içerik | Servis | `faiz-oranlari.html` | Liste | Tablo | `ekranlar/icerik/piyasalar.html?sekme=faiz` | ✓ |
| E-351 | Piyasalar · Akaryakıt Fiyatları | içerik | Servis | `akaryakit-fiyatlari.html` | Liste | İl seçici (şehir seç alt sayfası) + tablo | `ekranlar/icerik/piyasalar.html?sekme=akaryakit` | ✓ |
| E-352 | Piyasalar · çevirici alt sayfası | sistem | Servis | `doviz.html` (çevirici) | Liste | Tutar + iki birim; sayısal klavye | `ekranlar/icerik/piyasalar.html?sekme=doviz&durum=cevirici` | ✓ |
| E-353 | Piyasalar · yükleniyor | durum | Servis | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/piyasalar.html?durum=yukleniyor` | ✓ |
| E-354 | Piyasalar · aşağı çekip yenileme | durum | Servis | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/piyasalar.html?durum=yenileniyor` | ✓ |
| E-355 | Piyasalar · boş | durum | Servis | `durumlar.html` (boş) | Liste | Aramada enstrüman bulunamadı | `ekranlar/icerik/piyasalar.html?durum=bos` | ✓ |
| E-356 | Piyasalar · hata | durum | Servis | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/piyasalar.html?durum=hata` | ✓ |
| E-357 | Piyasalar · çevrimdışı | durum | Servis | `cevrimdisi.html` | Liste | Son veri + son güncelleme saati notu | `ekranlar/icerik/piyasalar.html?durum=cevrimdisi` | ✓ |
| E-358 | Enstrüman detayı (kur, altın, hisse) | içerik | Servis | `enstruman-detay.html` | Detay | Değer, değişim, sade grafik (grafikle boğma), geçmiş tablo, ilgili haberler | `ekranlar/icerik/enstruman.html` | ✓ |
| E-359 | Enstrüman detayı · yükleniyor | durum | Servis | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/enstruman.html?durum=yukleniyor` | ✓ |
| E-360 | Enstrüman detayı · hata | durum | Servis | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/enstruman.html?durum=hata` | ✓ |
| E-361 | Enstrüman detayı · bulunamadı | durum | Servis | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/enstruman.html?durum=bulunamadi` | ✓ |
| E-362 | Enstrüman detayı · çevrimdışı | durum | Servis | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/enstruman.html?durum=cevrimdisi` | ✓ |
| E-363 | Hava Durumu | içerik | Servis | `hava-durumu.html` | — | Şehir seçici, bugün, saatlik, 7 gün (yatay kayar) | `ekranlar/icerik/hava-durumu.html` | ✓ |
| E-364 | Hava Durumu · konum izni yok | durum | Servis | sitede konum reddi (C35) | — | Şehri elle seç; ayarlara git | `ekranlar/icerik/hava-durumu.html?durum=konum-yok` | ✓ |
| E-365 | Hava Durumu · yükleniyor | durum | Servis | `durumlar.html` (iskelet) | — | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/hava-durumu.html?durum=yukleniyor` | ✓ |
| E-366 | Hava Durumu · hata | durum | Servis | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/hava-durumu.html?durum=hata` | ✓ |
| E-367 | Hava Durumu · çevrimdışı | durum | Servis | `cevrimdisi.html` | — | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/hava-durumu.html?durum=cevrimdisi` | ✓ |
| E-368 | Namaz Vakitleri | içerik | Servis | `namaz-vakitleri.html` | — | Sıradaki vakit + kalan süre, günün vakitleri, aylık tablo (kayar) | `ekranlar/icerik/namaz-vakitleri.html` | ✓ |
| E-369 | Namaz Vakitleri · konum izni yok | durum | Servis | sitede konum reddi (C35) | — | Şehri elle seç | `ekranlar/icerik/namaz-vakitleri.html?durum=konum-yok` | ✓ |
| E-370 | Namaz Vakitleri · yükleniyor | durum | Servis | `durumlar.html` (iskelet) | — | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/namaz-vakitleri.html?durum=yukleniyor` | ✓ |
| E-371 | Namaz Vakitleri · hata | durum | Servis | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/namaz-vakitleri.html?durum=hata` | ✓ |
| E-372 | Namaz Vakitleri · çevrimdışı | durum | Servis | `cevrimdisi.html` | — | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/namaz-vakitleri.html?durum=cevrimdisi` | ✓ |
| E-373 | Canlı Skor | içerik | Spor | `canli-skor.html` | Liste | Branş sekmeleri, canlı önce, takımlarım üstte | `ekranlar/icerik/canli-skor.html` | ✓ |
| E-374 | Canlı Skor · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/canli-skor.html?durum=yukleniyor` | ✓ |
| E-375 | Canlı Skor · aşağı çekip yenileme | durum | Spor | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/canli-skor.html?durum=yenileniyor` | ✓ |
| E-376 | Canlı Skor · boş | durum | Spor | `durumlar.html` (boş) | Liste | Şu an canlı maç yok; günün fikstürü | `ekranlar/icerik/canli-skor.html?durum=bos` | ✓ |
| E-377 | Canlı Skor · hata | durum | Spor | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/canli-skor.html?durum=hata` | ✓ |
| E-378 | Canlı Skor · çevrimdışı | durum | Spor | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/canli-skor.html?durum=cevrimdisi` | ✓ |
| E-379 | Puan Durumu | içerik | Spor | `puan-durumu.html` | Liste | Lig seçici, sütun önceliği, takımın satırı vurgulu | `ekranlar/icerik/puan-durumu.html` | ✓ |
| E-380 | Puan Durumu · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/puan-durumu.html?durum=yukleniyor` | ✓ |
| E-381 | Puan Durumu · hata | durum | Spor | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/puan-durumu.html?durum=hata` | ✓ |
| E-382 | Puan Durumu · çevrimdışı | durum | Spor | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/puan-durumu.html?durum=cevrimdisi` | ✓ |
| E-383 | Fikstür | içerik | Spor | `fikstur.html` | Liste | Hafta seçici, maç satırları | `ekranlar/icerik/fikstur.html` | ✓ |
| E-384 | Fikstür · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/fikstur.html?durum=yukleniyor` | ✓ |
| E-385 | Fikstür · boş | durum | Spor | `durumlar.html` (boş) | Liste | Bu hafta maç yok | `ekranlar/icerik/fikstur.html?durum=bos` | ✓ |
| E-386 | Fikstür · hata | durum | Spor | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/fikstur.html?durum=hata` | ✓ |
| E-387 | Fikstür · çevrimdışı | durum | Spor | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/fikstur.html?durum=cevrimdisi` | ✓ |
| E-388 | Takımlar | içerik | Spor | `takimlar.html` | Liste | Takım ızgarası; takımlarım işaretli | `ekranlar/icerik/takimlar.html` | ✓ |
| E-389 | Takımlar · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/takimlar.html?durum=yukleniyor` | ✓ |
| E-390 | Takımlar · hata | durum | Spor | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/takimlar.html?durum=hata` | ✓ |
| E-391 | Takımlar · çevrimdışı | durum | Spor | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/takimlar.html?durum=cevrimdisi` | ✓ |
| E-392 | Takım sayfası · üye | içerik | Spor | `galatasaray.html`, `fenerbahce.html` … | Liste | Profil başlığı, Takip et, haberler, fikstür, puan | `ekranlar/icerik/takim.html` | ✓ |
| E-393 | Takım sayfası · misafir | içerik | Spor | `galatasaray.html` … | Liste | Takip et → tetik paneli | `ekranlar/icerik/takim.html?uye=0` | ✓ |
| E-394 | Takım sayfası · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/takim.html?durum=yukleniyor` | ✓ |
| E-395 | Takım sayfası · aşağı çekip yenileme | durum | Spor | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/takim.html?durum=yenileniyor` | ✓ |
| E-396 | Takım sayfası · sayfa sonu yükleme | durum | Spor | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/icerik/takim.html?durum=daha-fazla` | ✓ |
| E-397 | Takım sayfası · hata | durum | Spor | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/takim.html?durum=hata` | ✓ |
| E-398 | Takım sayfası · çevrimdışı | durum | Spor | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/takim.html?durum=cevrimdisi` | ✓ |
| E-399 | Maç detayı · başlamadı | içerik | Spor | `mac-detay.html` | Detay | Saat, kadrolar, son maçlar | `ekranlar/icerik/mac-detay.html?durum=once` | ✓ |
| E-400 | Maç detayı · canlı | içerik | Spor | `mac-detay.html` | Detay | Skor, dakika, maç anlatımı (yeni üstte), istatistik | `ekranlar/icerik/mac-detay.html` | ✓ |
| E-401 | Maç detayı · bitti | durum | Spor | `mac-detay.html` | Detay | Sonuç, özet, maç haberi bağlantısı | `ekranlar/icerik/mac-detay.html?durum=bitti` | ✓ |
| E-402 | Maç detayı · yükleniyor | durum | Spor | `durumlar.html` (iskelet) | Detay | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/icerik/mac-detay.html?durum=yukleniyor` | ✓ |
| E-403 | Maç detayı · aşağı çekip yenileme | durum | Spor | — | Detay | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/icerik/mac-detay.html?durum=yenileniyor` | ✓ |
| E-404 | Maç detayı · hata | durum | Spor | `500.html` | Detay | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/icerik/mac-detay.html?durum=hata` | ✓ |
| E-405 | Maç detayı · bulunamadı | durum | Spor | `404.html`, `410.html` | Detay | İçerik kaldırıldı ya da bulunamadı; bölüme dön, arama | `ekranlar/icerik/mac-detay.html?durum=bulunamadi` | ✓ |
| E-406 | Maç detayı · çevrimdışı | durum | Spor | `cevrimdisi.html` | Detay | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/icerik/mac-detay.html?durum=cevrimdisi` | ✓ |

## 2 · Durumlar

Ekrandan bağımsız tam ekran hata ve uygulama durumları (tek hata şablonu) ile bütün listelerde aynı çalışan yenileme ve sayfa sonu halleri. Ekrana özgü haller İçerik ve Hesap bölümlerinde, ekranının altındadır.

### Genel hata ekranları (tek hata şablonu)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-407 | Bağlantı yok (çevrimdışı) | durum | Hata | `cevrimdisi.html` | — | Tam ekran; Yeniden dene + "Kaydedilenleri oku" | `ekranlar/durum/hata.html?durum=cevrimdisi` | ✓ |
| E-408 | Sunucu hatası | durum | Hata | `500.html` | — | Bir şeyler ters gitti; Yeniden dene; ana sayfaya dön | `ekranlar/durum/hata.html?durum=sunucu` | ✓ |
| E-409 | Zaman aşımı | durum | Hata | — (sitede yok) | — | Yanıt gecikti; Yeniden dene | `ekranlar/durum/hata.html?durum=zaman-asimi` | ✓ |
| E-410 | Yeniden deneniyor | durum | Hata | — | — | Düğmede yükleniyor; ikinci başarısızlıkta "Daha sonra dene" | `ekranlar/durum/hata.html?durum=yeniden-deneniyor` | ✓ |
| E-411 | İçerik bulunamadı | durum | Hata | `404.html` | — | Bulunamadı; arama + bölüm çipleri (yatay kayar) | `ekranlar/durum/hata.html?durum=bulunamadi` | ✓ |
| E-412 | İçerik kaldırıldı | durum | Hata | `410.html` | — | Yayından kaldırıldı; bölüme dön | `ekranlar/durum/hata.html?durum=kaldirildi` | ✓ |
| E-413 | Uygulamada yayımlanmıyor | durum | Hata | — (panel "Uygulama" kanalı) | — | Haber yalnız web kanalında: "Web'de aç" | `ekranlar/durum/hata.html?durum=uygulamada-yok` | ✓ |
| E-414 | Çok fazla istek | durum | Hata | `429.html` | — | Kısa bekleme süresi; sayaçlı Yeniden dene | `ekranlar/durum/hata.html?durum=cok-istek` | ✓ |
| E-415 | Erişim yok | durum | Hata | `403.html` | — | Bu içeriğe erişilemiyor; ana sayfaya dön | `ekranlar/durum/hata.html?durum=erisim-yok` | ✓ |

### Uygulama düzeyi

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-416 | Güncelleme zorunlu | durum | Uygulama | — (sitede yok) | — | Tam ekran, kapatılamaz; "Güncelle" → mağaza | `ekranlar/durum/guncelleme.html?durum=zorunlu` | ✓ |
| E-417 | Güncelleme önerilen | durum | Uygulama | — | — | Alt sayfa; Güncelle · Sonra | `ekranlar/durum/guncelleme.html?durum=onerilen` | ✓ |
| E-418 | Bakım modu | durum | Uygulama | `bakim.html` (panel Site Ayarları) | — | Logo, tahmini bitiş saati, Yeniden dene; kaydedilenler okunabilir | `ekranlar/durum/bakim.html` | ✓ |
| E-419 | Bakım bitti | durum | Uygulama | — | — | Yeniden dene sonrası ana sayfaya geçiş | `ekranlar/durum/bakim.html?durum=bitti` | ✓ |
| E-420 | Yakında (özellik henüz açık değil) | durum | Uygulama | `yakinda.html` | — | Özellik adı, kısa açıklama, "Hazır olunca haber ver" anahtarı | `ekranlar/durum/yakinda.html` | ✓ |

### Ortak etkileşim halleri (bütün listeler)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-421 | Aşağı çekip yenileme · aşamalar | durum | Yenileme | — | — | Çekiliyor → bırak → yenileniyor → "Güncel · 16.05"; haptik | `ekranlar/durum/yenileme.html` | ✓ |
| E-422 | Yenileme · yeni içerik hapı | durum | Yenileme | — | — | "N yeni haber" hapı; dokununca başa ve yenile | `ekranlar/durum/yenileme.html?durum=yeni-icerik` | ✓ |
| E-423 | Yenileme · başarısız | durum | Yenileme | — | — | Eski içerik kalır; "Yenilenemedi" kısa bildirimi | `ekranlar/durum/yenileme.html?durum=hata` | ✓ |
| E-424 | Sayfa sonu · daha fazla yükleniyor | durum | Sayfa sonu | — (sitede sayfalama) | — | Son kartın altında yükleniyor | `ekranlar/durum/sayfa-sonu.html` | ✓ |
| E-425 | Sayfa sonu · hepsi bu kadar | durum | Sayfa sonu | — | — | Liste bitti işareti; başa dön | `ekranlar/durum/sayfa-sonu.html?durum=son` | ✓ |
| E-426 | Sayfa sonu · yüklenemedi | durum | Sayfa sonu | — | — | Satır içi Yeniden dene | `ekranlar/durum/sayfa-sonu.html?durum=hata` | ✓ |

### Zorunlu boş durumlar (dizin; yeni satır değildir)

| Boş durum | Satır | Dosya |
|---|---|---|
| Sonuç yok (arama) | E-113 | `ekranlar/icerik/arama-sonuc.html?durum=bos` |
| Son arama yok | E-106 | `ekranlar/icerik/arama.html?durum=bos` |
| Kaydedilen yok | E-476 | `ekranlar/hesap/kaydedilenler.html?durum=bos` |
| İndirilen yok | E-479 | `ekranlar/hesap/kaydedilenler.html?sekme=indirilenler&durum=bos` |
| Bildirim yok | E-497 | `ekranlar/hesap/bildirim-merkezi.html?durum=bos` |
| Takip edilen yok | E-484 | `ekranlar/hesap/takip.html?durum=bos` |
| Geçmiş boş | E-490 | `ekranlar/hesap/gecmis.html?durum=bos` |
| Henüz yorum yok | E-065 | `ekranlar/icerik/yorumlar.html?durum=bos` |
| Bugün hikâye yok | E-015 | `ekranlar/icerik/hikaye.html?durum=bos` |
| Senin İçin boş | E-304 | `ekranlar/icerik/senin-icin.html?durum=bos` |

## 3 · Giriş

Açılış, tanıtım, izin, kişiselleştirme, giriş ve üyelik akışı.

### Açılış ve tanıtım

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-427 | Açılış (splash) · soğuk açılış | giriş | Açılış | — | — | iOS durağan görüntü; Android 12+ sistem açılışı (simge + zemin); yapılıyor | `ekranlar/giris/acilis.html` | ✓ |
| E-428 | Açılış · bağlantı yok | durum | Açılış | — | — | Doğrudan çevrimdışı okumaya (Kaydedilenler) | `ekranlar/giris/acilis.html?durum=cevrimdisi` | ✓ |
| E-429 | Açılış · güncelleme zorunlu | durum | Açılış | — | — | Açılıştan güncelleme ekranına geçiş (E-416) | `ekranlar/giris/acilis.html?durum=guncelleme` | ✓ |
| E-430 | Tanıtım · adım n | giriş | Tanıtım | `karsilama.html` (tercih seçimi) | — | Değer ekranları, her adımda Atla; yapılıyor | `ekranlar/giris/tanitim.html?adim=1` (adım 1–4) | ✓ |

### İzin ve kişiselleştirme

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-431 | Bildirim izni · ön ekran | giriş | İzin | bildirim izni kartı (C8) | — | Ne gelecek (Son Dakika, takımın maçı), Bildirimleri aç; "Şimdi değil" bekleyen #5 | `ekranlar/giris/bildirim-izni.html` | ✓ |
| E-432 | Bildirim izni · sistem iletişim kutusu | sistem | İzin | — | — | iOS ve Android 13+ sistem penceresi (yalnız görünüm notu) | `ekranlar/giris/bildirim-izni.html?durum=sistem` | ✓ |
| E-433 | Bildirim izni · reddedildi | durum | İzin | — | — | Sonra açmak için Ayarlar yolu; uygulama devam eder | `ekranlar/giris/bildirim-izni.html?durum=reddedildi` | ✓ |
| E-434 | Konu ve kategori seçimi | giriş | Kişiselleştirme | `karsilama.html`, `hesabim-tercihler.html` | — | 8 bölüm ve konular çip; en az seçim sayısı karar bekliyor | `ekranlar/giris/konu-secimi.html` | ✓ |
| E-435 | Takım seçimi | giriş | Kişiselleştirme | `karsilama.html` (takım) | — | Galatasaray, Fenerbahçe, Beşiktaş, Trabzonspor, Süper Lig, Avrupa Ligleri; Atla | `ekranlar/giris/konu-secimi.html?adim=takim` | ✓ |
| E-436 | Şehir seçimi | giriş | Kişiselleştirme | `karsilama.html` (şehir) | — | Konumumu kullan ya da listeden (Şehirler) | `ekranlar/giris/konu-secimi.html?adim=sehir` | ✓ |
| E-437 | Konu seçimi · hazırlanıyor | durum | Kişiselleştirme | — | — | "Ana sayfan hazırlanıyor" kısa geçiş → ana sayfa | `ekranlar/giris/konu-secimi.html?durum=hazirlaniyor` | ✓ |

### Giriş ve üyelik

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-438 | Giriş | giriş | Üyelik | `giris.html` + pencere | — | E-posta + şifre, Apple · Google · Facebook, Şifremi unuttum, Üye ol; sayfa mı alt sayfa mı B-15 | `ekranlar/giris/giris.html` | ✓ |
| E-439 | Giriş · hatalı şifre | durum | Üyelik | `giris.html` | — | Alan altında tek satır hata | `ekranlar/giris/giris.html?durum=hata` | ✓ |
| E-440 | Giriş · hesap kilitlendi | durum | Üyelik | — | — | Çok deneme; bekleme süresi + şifre sıfırla | `ekranlar/giris/giris.html?durum=kilitli` | ✓ |
| E-441 | Giriş · gönderiliyor | durum | Üyelik | — | — | Düğmede yükleniyor; alanlar kilitli | `ekranlar/giris/giris.html?durum=gonderiliyor` | ✓ |
| E-442 | Giriş · çevrimdışı | durum | Üyelik | `cevrimdisi.html` | — | Giriş için bağlantı gerekli bandı | `ekranlar/giris/giris.html?durum=cevrimdisi` | ✓ |
| E-443 | Üye ol | giriş | Üyelik | `uye-ol.html` + pencere | — | Ad, e-posta, şifre; onay metinleri (Aydınlatma, Açık Rıza, bülten izni); sosyal hesap | `ekranlar/giris/uye-ol.html` | ✓ |
| E-444 | Üye ol · alan hataları | durum | Üyelik | `uye-ol.html` | — | Geçersiz e-posta, zayıf şifre, onay eksik | `ekranlar/giris/uye-ol.html?durum=hata` | ✓ |
| E-445 | Üye ol · e-posta zaten kayıtlı | durum | Üyelik | — | — | Giriş yap ya da şifremi unuttum | `ekranlar/giris/uye-ol.html?durum=kayitli` | ✓ |
| E-446 | Üye ol · gönderiliyor | durum | Üyelik | — | — | Düğmede yükleniyor | `ekranlar/giris/uye-ol.html?durum=gonderiliyor` | ✓ |
| E-447 | Şifremi unuttum · e-posta | giriş | Üyelik | `sifremi-unuttum.html` | — | E-posta alanı, Bağlantı gönder | `ekranlar/giris/sifremi-unuttum.html` | ✓ |
| E-448 | Şifremi unuttum · bağlantı gönderildi | durum | Üyelik | `sifre-gonderildi.html` | — | E-postanı kontrol et; sayaçlı yeniden gönder; E-posta uygulamasını aç | `ekranlar/giris/sifremi-unuttum.html?adim=gonderildi` | ✓ |
| E-449 | Şifremi unuttum · yeni şifre | giriş | Üyelik | `sifre-yeni.html` | — | Bağlantıdan uygulamaya (derin bağlantı); yeni şifre iki kez | `ekranlar/giris/sifremi-unuttum.html?adim=yeni` | ✓ |
| E-450 | Şifremi unuttum · şifre değişti | durum | Üyelik | — | — | Onay + Giriş yap | `ekranlar/giris/sifremi-unuttum.html?adim=tamam` | ✓ |
| E-451 | Şifremi unuttum · bağlantı geçersiz | durum | Üyelik | `sifre-baglanti-gecersiz.html` | — | Süresi doldu ya da kullanıldı; yeni bağlantı iste | `ekranlar/giris/sifremi-unuttum.html?adim=gecersiz` | ✓ |
| E-452 | E-posta doğrulama · bekliyor | giriş | Üyelik | `eposta-dogrula.html` | — | Adres gösterilir; yeniden gönder (sayaçlı), adresi değiştir | `ekranlar/giris/eposta-dogrulama.html` | ✓ |
| E-453 | E-posta doğrulama · yeniden gönderildi | durum | Üyelik | — | — | Kısa bildirim + sayaç yeniden başlar | `ekranlar/giris/eposta-dogrulama.html?durum=gonderildi` | ✓ |
| E-454 | E-posta doğrulama · doğrulandı | durum | Üyelik | `eposta-dogrulandi.html` | — | Onay → konu seçimi ya da kaldığı yer | `ekranlar/giris/eposta-dogrulama.html?durum=dogrulandi` | ✓ |
| E-455 | E-posta doğrulama · bağlantı geçersiz | durum | Üyelik | `eposta-dogrula.html` (geçersiz) | — | Yeni bağlantı iste | `ekranlar/giris/eposta-dogrulama.html?durum=gecersiz` | ✓ |
| E-456 | Sosyal hesapla giriş · yönlendiriliyor | giriş | Üyelik | sitede Google, Facebook, Apple (C31) | — | Sağlayıcı sayfası/sistem penceresi üstünde bekleme; App Store 4.8 notu (Apple ile Giriş) | `ekranlar/giris/sosyal-giris.html` | ✓ |
| E-457 | Sosyal hesapla giriş · iptal edildi | durum | Üyelik | — | — | Giriş ekranına dönüş, sessiz | `ekranlar/giris/sosyal-giris.html?durum=iptal` | ✓ |
| E-458 | Sosyal hesapla giriş · hata | durum | Üyelik | — | — | Sağlayıcıya ulaşılamadı; başka yolla dene | `ekranlar/giris/sosyal-giris.html?durum=hata` | ✓ |
| E-459 | Sosyal hesapla giriş · hesapları bağla | durum | Üyelik | `hesap-bagla.html` | — | Bu e-posta kayıtlı: şifreyle doğrula ve bağla | `ekranlar/giris/sosyal-giris.html?durum=bagla` | ✓ |
| E-460 | Sosyal hesapla giriş · onayları tamamla | durum | Üyelik | `uye-ol.html` (onaylar) | — | İlk sosyal girişte Kullanım Koşulları ve Aydınlatma onayı | `ekranlar/giris/sosyal-giris.html?durum=onay` | ✓ |

## 4 · Hesap

Hesabım sekmesi, kaydedilenler, takip, geçmiş, bildirimler, tercihler, ayarlar, gizlilik, hesap silme, destek ve yasal metinler.

### Hesabım

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-461 | Hesabım · üye | hesap | Hesabım | `hesabim.html` | — | Profil kartı (ad, okuma serisi), Kaydedilenler, Takip, Geçmiş, Bildirimler, Bültenler, Tercihler, Ayarlar; alt çubukta "Hesabım" | `ekranlar/hesap/hesabim.html` |   |
| E-462 | Hesabım · misafir | hesap | Hesabım | `hesabim-misafir.html` | — | Giriş Yap · Üye Ol çağrısı + cihaz tercihleri (Görünüm, Bildirimler, Kaydedilenler cihazda) | `ekranlar/hesap/hesabim.html?uye=0` |   |
| E-463 | Profil düzenle | hesap | Hesabım | `hesabim.html` (profil) | — | Ad, profil fotoğrafı (baş harf), e-posta değiştir, şifre değiştir | `ekranlar/hesap/profil.html` |   |
| E-464 | Profil düzenle · kaydediliyor / alan hatası | durum | Hesabım | — | — | Düğmede yükleniyor; alan altında hata | `ekranlar/hesap/profil.html?durum=hata` |   |
| E-465 | Profil düzenle · e-posta değişikliği doğrulama | durum | Hesabım | — | — | Yeni adrese doğrulama gönderildi | `ekranlar/hesap/profil.html?durum=dogrula` |   |
| E-466 | Serim ve rozetlerim | hesap | Hesabım | `hesabim-seri.html` | — | Okuma serisi, rozet ızgarası (Günün Serisi 2. çeyrek) | `ekranlar/hesap/seri.html` |   |
| E-467 | Serim · seri yok | durum | Hesabım | — | — | Bugün ilk haberini oku, seri başlasın | `ekranlar/hesap/seri.html?durum=bos` |   |

### Kaydedilenler ve çevrimdışı

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-468 | Kaydedilenler · üye | hesap | Kaydedilenler | `hesabim-kaydedilenler.html` | Liste | Klasör çipleri (yatay kayar), indirilenler işareti, depolama özeti | `ekranlar/hesap/kaydedilenler.html` |   |
| E-469 | Kaydedilenler · misafir | hesap | Kaydedilenler | `hesabim-misafir.html` | Liste | Cihazda tutulanlar + "Giriş yap, her cihazda gör" (C30 varsayımı) | `ekranlar/hesap/kaydedilenler.html?uye=0` |   |
| E-470 | Kaydedilenler · klasör | hesap | Kaydedilenler | `hesabim-kaydedilenler.html` | Liste | Klasör içi; ⋯ menüsü (yeniden adlandır, sil) | `ekranlar/hesap/kaydedilenler.html?klasor=1` |   |
| E-471 | Kaydedilenler · çevrimdışı indirilenler | hesap | Kaydedilenler | — (uygulamaya özgü) | Liste | İndirilen haber, bülten, podcast bölümü; kapladığı alan | `ekranlar/hesap/kaydedilenler.html?sekme=indirilenler` |   |
| E-472 | Kaydedilenler · düzenle (çoklu seçim) | durum | Kaydedilenler | — | Liste | Seç, klasöre taşı, sil, indir | `ekranlar/hesap/kaydedilenler.html?durum=duzenle` |   |
| E-473 | Kaydedilenler · indiriliyor | durum | Kaydedilenler | — | Liste | Kartta indirme halkası; kuyruk | `ekranlar/hesap/kaydedilenler.html?durum=indiriliyor` |   |
| E-474 | Kaydedilenler · yükleniyor | durum | Kaydedilenler | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/hesap/kaydedilenler.html?durum=yukleniyor` |   |
| E-475 | Kaydedilenler · aşağı çekip yenileme | durum | Kaydedilenler | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/hesap/kaydedilenler.html?durum=yenileniyor` |   |
| E-476 | Kaydedilenler · boş | durum | Kaydedilenler | `durumlar.html` (boş) | Liste | Kaydedilen yok: kaydet simgesini göster; ana sayfaya dön | `ekranlar/hesap/kaydedilenler.html?durum=bos` |   |
| E-477 | Kaydedilenler · hata | durum | Kaydedilenler | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/hesap/kaydedilenler.html?durum=hata` |   |
| E-478 | Kaydedilenler · çevrimdışı | durum | Kaydedilenler | `cevrimdisi.html` | Liste | Yalnız indirilenler açılır; ötekiler soluk | `ekranlar/hesap/kaydedilenler.html?durum=cevrimdisi` |   |
| E-479 | İndirilenler · boş | durum | Kaydedilenler | — | Liste | İndirilen yok: kaydederken "Çevrimdışı indir"i aç | `ekranlar/hesap/kaydedilenler.html?sekme=indirilenler&durum=bos` |   |

### Takip, geçmiş

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-480 | Takip ettiklerim · üye | hesap | Takip | `hesabim-takip.html` | Liste | Sekmeler: Konular, Şehirler, Takımlar, Yazarlar, Kişi ve kurumlar; Takibi bırak | `ekranlar/hesap/takip.html` |   |
| E-481 | Takip ettiklerim · misafir | hesap | Takip | `hesabim-misafir.html` | Liste | Cihazdaki takipler + giriş çağrısı (C30 varsayımı) | `ekranlar/hesap/takip.html?uye=0` |   |
| E-482 | Takip ettiklerim · öneriler | hesap | Takip | `hesabim-takip.html` (katalog) | Liste | Takip edilebilecek konular kataloğu | `ekranlar/hesap/takip.html?durum=oneri` |   |
| E-483 | Takip ettiklerim · yükleniyor | durum | Takip | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/hesap/takip.html?durum=yukleniyor` |   |
| E-484 | Takip ettiklerim · boş | durum | Takip | `durumlar.html` (boş) | Liste | Takip edilen yok: konu ve takım öner | `ekranlar/hesap/takip.html?durum=bos` |   |
| E-485 | Takip ettiklerim · hata | durum | Takip | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/hesap/takip.html?durum=hata` |   |
| E-486 | Takip ettiklerim · çevrimdışı | durum | Takip | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/hesap/takip.html?durum=cevrimdisi` |   |
| E-487 | Geçmiş (okuma, izleme, dinleme) | hesap | Geçmiş | `hesabim-gecmis.html` | Liste | Sekmeler: Okuduklarım, İzlediklerim, Dinlediklerim; gün ayracı; Temizle | `ekranlar/hesap/gecmis.html` |   |
| E-488 | Geçmiş · yükleniyor | durum | Geçmiş | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/hesap/gecmis.html?durum=yukleniyor` |   |
| E-489 | Geçmiş · sayfa sonu yükleme | durum | Geçmiş | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/hesap/gecmis.html?durum=daha-fazla` |   |
| E-490 | Geçmiş · boş | durum | Geçmiş | `durumlar.html` (boş) | Liste | Geçmiş boş | `ekranlar/hesap/gecmis.html?durum=bos` |   |
| E-491 | Geçmiş · hata | durum | Geçmiş | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/hesap/gecmis.html?durum=hata` |   |
| E-492 | Geçmiş · çevrimdışı | durum | Geçmiş | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/hesap/gecmis.html?durum=cevrimdisi` |   |

### Bildirimler ve bültenler

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-493 | Bildirim merkezi | hesap | Bildirim | bildirim merkezi paneli (C32) | Liste | Okunmamış önce, okunmuş soluk; gün ayracı; Tümünü okundu say | `ekranlar/hesap/bildirim-merkezi.html` |   |
| E-494 | Bildirim merkezi · yükleniyor | durum | Bildirim | `durumlar.html` (iskelet) | Liste | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/hesap/bildirim-merkezi.html?durum=yukleniyor` |   |
| E-495 | Bildirim merkezi · aşağı çekip yenileme | durum | Bildirim | — | Liste | Çekiliyor → bırak → yenileniyor → güncel; içerik yerinde kalır | `ekranlar/hesap/bildirim-merkezi.html?durum=yenileniyor` |   |
| E-496 | Bildirim merkezi · sayfa sonu yükleme | durum | Bildirim | — (sitede sayfalama) | Liste | Sayfa sonunda yükleniyor; hepsi bu kadar; yüklenemedi → yeniden dene | `ekranlar/hesap/bildirim-merkezi.html?durum=daha-fazla` |   |
| E-497 | Bildirim merkezi · boş | durum | Bildirim | `durumlar.html` (boş) | Liste | Bildirim yok; bildirim tercihlerine git | `ekranlar/hesap/bildirim-merkezi.html?durum=bos` |   |
| E-498 | Bildirim merkezi · hata | durum | Bildirim | `500.html` | Liste | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/hesap/bildirim-merkezi.html?durum=hata` |   |
| E-499 | Bildirim merkezi · çevrimdışı | durum | Bildirim | `cevrimdisi.html` | Liste | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/hesap/bildirim-merkezi.html?durum=cevrimdisi` |   |
| E-500 | Bildirim merkezi · izin kapalı bandı | durum | Bildirim | — | Liste | Sistem izni kapalı: üstte "Bildirimler kapalı · Aç" | `ekranlar/hesap/bildirim-merkezi.html?durum=izin-yok` |   |
| E-501 | Bildirim tercihleri | hesap | Bildirim | `hesabim-bildirimler.html` | — | Aç/kapa, türler, sessiz saatler; panelin "bütün abonelere" kuralı bekleyen #3 | `ekranlar/hesap/bildirim-tercihleri.html` |   |
| E-502 | Bildirim tercihleri · sistemde kapalı | durum | Bildirim | — | — | Anahtarlar pasif; "Ayarlar'dan aç" | `ekranlar/hesap/bildirim-tercihleri.html?durum=izin-yok` |   |
| E-503 | Bültenlerim · üye | hesap | Bülten | `hesabim-bultenler.html`, `bulten.html` | — | Bülten listesi, abone ol / ayrıl anahtarı, sıklık | `ekranlar/hesap/bultenler.html` |   |
| E-504 | Bültenler · misafir | hesap | Bülten | `bulten.html` | — | E-posta ile abone ol (üyeliksiz mi: B-14) | `ekranlar/hesap/bultenler.html?uye=0` |   |
| E-505 | Bültenler · abone olundu | durum | Bülten | `bulten.html` (alındı) | — | Doğrulama e-postası gönderildi notu | `ekranlar/hesap/bultenler.html?durum=tamam` |   |

### Tercihler ve ayarlar

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-506 | Tercihler (ilgi, şehir, takım, Bana Etkisi profili) | hesap | Tercihler | `hesabim-tercihler.html` | — | Konu seçimiyle aynı çipler; profil: Öğrenci, Çalışan, Emekli, Ev sahibi, Kiracı, Esnaf | `ekranlar/hesap/tercihler.html` |   |
| E-507 | Tercihler · takım | hesap | Tercihler | `hesabim-tercihler.html` | — | Ana sayfadaki "Takımını Ekle" buraya | `ekranlar/hesap/tercihler.html?sekme=takim` |   |
| E-508 | Ayarlar | hesap | Ayarlar | `hesabim.html` (ayar sekmeleri) | — | Görünüm, Bildirimler, Veri ve depolama, Gizlilik, Güvenlik, Yardım, Hakkında, Yasal, Çıkış yap | `ekranlar/hesap/ayarlar.html` |   |
| E-509 | Ayarlar · misafir | hesap | Ayarlar | `hesabim-misafir.html` | — | Güvenlik ve Çıkış yok; Giriş yap satırı | `ekranlar/hesap/ayarlar.html?uye=0` |   |
| E-510 | Görünüm (tema, yazı boyutu, Sakin mod) | hesap | Ayarlar | Görünüm penceresi (C7) | — | Açık · Koyu · Sistem; yazı boyutu önizlemeli (detaydaki Aa ile aynı ölçek) | `ekranlar/hesap/gorunum.html` |   |
| E-511 | Görünüm · en büyük yazı | durum | Ayarlar | — | — | Önizleme en büyük boyutta; kısaltma kuralı bekleyen #7 | `ekranlar/hesap/gorunum.html?boy=en-buyuk` |   |
| E-512 | Veri ve depolama | hesap | Ayarlar | `hesabim-uygulama.html` | — | Otomatik indir (Günün 5'i), mobil veride video, indirilenler alanı, önbelleği temizle, sürüm | `ekranlar/hesap/depolama.html` |   |
| E-513 | Güvenlik ve bağlı hesaplar | hesap | Ayarlar | `hesabim-guvenlik.html`, `hesap-bagla.html` | — | Şifre değiştir, iki adımlı doğrulama, oturumlar, Apple · Google · Facebook bağla/kaldır | `ekranlar/hesap/guvenlik.html` |   |
| E-514 | Güvenlik · oturumlar | hesap | Ayarlar | `hesabim-guvenlik.html` | — | Cihaz satırları; bu cihaz dışındakileri kapat | `ekranlar/hesap/guvenlik.html?sekme=oturumlar` |   |
| E-515 | Gizlilik ve veriler | hesap | Ayarlar | `hesabim-gizlilik.html` | — | İzinler özeti (bildirim, konum, mikrofon), kişiselleştirme, verilerimi indir, KVKK başvurusu, Hesabı sil | `ekranlar/hesap/gizlilik.html` |   |
| E-516 | Verilerimi indir · talep alındı | durum | Ayarlar | `hesabim-gizlilik.html` | — | E-postaya gönderilecek notu | `ekranlar/hesap/gizlilik.html?durum=talep` |   |
| E-517 | Hesabı sil · bilgilendirme | hesap | Hesap silme | `hesabim-gizlilik.html` (silme akışı) | — | Neler silinir; uygulama içinden silme iki mağazada zorunlu | `ekranlar/hesap/hesap-sil.html` |   |
| E-518 | Hesabı sil · doğrulama | hesap | Hesap silme | — | — | Şifre ya da sosyal hesapla yeniden doğrula; son onay penceresi | `ekranlar/hesap/hesap-sil.html?adim=dogrula` |   |
| E-519 | Hesabı sil · silindi | durum | Hesap silme | `hesap-silindi.html` | — | Hesap silindi; misafir olarak devam | `ekranlar/hesap/hesap-sil.html?adim=silindi` |   |

### Yardım, hakkında, yasal

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-520 | Geri bildirim (Görüş bildir) | hesap | Destek | Görüş Bildir pencereleri (3), `iletisim.html` | — | Konu seç, metin, ekran görüntüsü ekle | `ekranlar/hesap/geri-bildirim.html` |   |
| E-521 | Geri bildirim · gönderildi | durum | Destek | — | — | Teşekkür + kapat | `ekranlar/hesap/geri-bildirim.html?durum=tamam` |   |
| E-522 | Geri bildirim · hata | durum | Destek | — | — | Gönderilemedi; taslak korunur, Yeniden dene | `ekranlar/hesap/geri-bildirim.html?durum=hata` |   |
| E-523 | Yardım merkezi | hesap | Destek | `yardim-merkezi.html` | — | Sık sorulanlar akordeon, arama | `ekranlar/hesap/yardim.html` |   |
| E-524 | İletişim | hesap | Destek | `iletisim.html` | — | Başvuru kanalları (7) + form | `ekranlar/hesap/iletisim.html` |   |
| E-525 | Hakkında | hesap | Kurumsal | `hakkimizda.html` | — | Hakkımızda, sürüm; Künye, Yayın İlkeleri, Düzeltme Politikası bağlantıları | `ekranlar/hesap/hakkinda.html` |   |
| E-526 | Yasal metinler (dizin) | hesap | Yasal | footer yasal bağlantıları | — | Metin listesi | `ekranlar/hesap/yasal.html` |   |
| E-527 | Metin · Kullanım Koşulları | hesap | Yasal | `kullanim-kosullari.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=kullanim-kosullari` |   |
| E-528 | Metin · Gizlilik ve KVKK | hesap | Yasal | `gizlilik-ve-kvkk.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=gizlilik-ve-kvkk` |   |
| E-529 | Metin · Aydınlatma Metni | hesap | Yasal | `aydinlatma-metni.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=aydinlatma-metni` |   |
| E-530 | Metin · Açık Rıza Metni | hesap | Yasal | `acik-riza-metni.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=acik-riza-metni` |   |
| E-531 | Metin · Telif Hakları | hesap | Yasal | `telif-haklari.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=telif-haklari` |   |
| E-532 | Metin · Topluluk Kuralları (yorumlar) | hesap | Yasal | `topluluk-kurallari.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=topluluk-kurallari` |   |
| E-533 | Metin · Erişilebilirlik Beyanı | hesap | Yasal | `erisilebilirlik.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=erisilebilirlik` |   |
| E-534 | Metin · Yayın İlkeleri | hesap | Yasal | `yayin-ilkeleri.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=yayin-ilkeleri` |   |
| E-535 | Metin · Düzeltme Politikası | hesap | Yasal | `duzeltme-politikasi.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=duzeltme-politikasi` |   |
| E-536 | Metin · Künye | hesap | Yasal | `kunye.html` | — | Tek metin şablonu; içindekiler başta açılır | `ekranlar/hesap/yasal.html?metin=kunye` |   |
| E-537 | Metin sayfası · yükleniyor | durum | Yasal | `durumlar.html` (iskelet) | — | İskelet (shimmer); başlık çubuğu ve alt çubuk yerinde, kartlar gri blok | `ekranlar/hesap/yasal.html?metin=kullanim-kosullari&durum=yukleniyor` |   |
| E-538 | Metin sayfası · hata | durum | Yasal | `500.html` | — | Sunucu hatası ya da zaman aşımı; Yeniden dene, kabuk yerinde | `ekranlar/hesap/yasal.html?metin=kullanim-kosullari&durum=hata` |   |
| E-539 | Metin sayfası · çevrimdışı | durum | Yasal | `cevrimdisi.html` | — | Bağlantı yok; önbellekte varsa son içerik + "Çevrimdışısın" bandı, yoksa Kaydedilenler'e git | `ekranlar/hesap/yasal.html?metin=kullanim-kosullari&durum=cevrimdisi` |   |

## 5 · Sistem

Alt sayfalar, onay pencereleri, kısa bildirimler, menüler, sesli arama, açılış yolları (bildirim, derin bağlantı), izin halleri, işletim sistemi yüzeyleri.

### Alt sayfalar

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-540 | Paylaş alt sayfası | sistem | Alt sayfa | paylaşım (dh-share) | — | Bağlantıyı kopyala, uygulamalar, sistem paylaşım sayfası (iOS/Android farkı not) | `ekranlar/sistem/paylas.html` |   |
| E-541 | Paylaş · paylaşım kartı | sistem | Alt sayfa | — | — | Hikâye biçiminde (9:16) haber kartı önizlemesi | `ekranlar/sistem/paylas.html?durum=kart` |   |
| E-542 | Kaydet alt sayfası · üye | sistem | Alt sayfa | `hesabim-kaydedilenler.html` (klasör) | — | Klasör seç, yeni klasör, "Çevrimdışı indir" anahtarı | `ekranlar/sistem/kaydet.html` |   |
| E-543 | Kaydet · yeni klasör | sistem | Alt sayfa | — | — | Klasör adı alanı, klavye açık | `ekranlar/sistem/kaydet.html?durum=yeni-klasor` |   |
| E-544 | Kaydet · misafir | sistem | Alt sayfa | üyelik tetik paneli | — | Cihaza kaydedildi + "Giriş yap, her cihazda" (C30 varsayımı) | `ekranlar/sistem/kaydet.html?uye=0` |   |
| E-545 | Oynatıcı · mini | sistem | Oynatıcı | sitede alt mini çubuk | — | Alt çubuğun üstünde; Haber Dinle, Spiker, podcast tek oynatıcı (kökte var); varsayılan kapalı, yalnız çalarken görünür; Spiker (radyo) ve Dinle (kulaklık) ayrı ad ve ikon (K39) | `ekranlar/sistem/oynatici.html` |   |
| E-546 | Oynatıcı · tam ekran | sistem | Oynatıcı | `podcast-detay.html` (oynatıcı) | — | Kapak, başlık, ilerleme, ileri/geri, hız, sıradakiler, deşifre | `ekranlar/sistem/oynatici.html?durum=tam` |   |
| E-547 | Oynatıcı · hız alt sayfası | sistem | Oynatıcı | — | — | 0,75× – 2× | `ekranlar/sistem/oynatici.html?durum=hiz` |   |
| E-548 | Oynatıcı · sıradakiler | sistem | Oynatıcı | — | — | Sıra listesi; sürükle sırala, kaldır | `ekranlar/sistem/oynatici.html?durum=sira` |   |
| E-549 | Oynatıcı · başka ses başladı | durum | Oynatıcı | sitedeki kural (aynı anda çalmaz) | — | Önceki duraklar; kısa bildirim | `ekranlar/sistem/oynatici.html?durum=degisti` |   |
| E-550 | Oynatıcı · ses yüklenemedi | durum | Oynatıcı | — | — | Mini oynatıcıda hata + Yeniden dene | `ekranlar/sistem/oynatici.html?durum=hata` |   |
| E-551 | Şehir seç alt sayfası | sistem | Alt sayfa | şehir seçici (citySelectModal) | — | Arama alanı, Konumumu kullan, şehir listesi | `ekranlar/sistem/sehir-sec.html` |   |
| E-552 | Şehir seç · konum izni reddedildi | durum | Alt sayfa | konum reddi (C35) | — | Konum satırı pasif + Ayarlar | `ekranlar/sistem/sehir-sec.html?durum=konum-yok` |   |
| E-553 | Bildir alt sayfası (yorum) | sistem | Alt sayfa | yorum bildir onay penceresi | — | Sebep seç (hakaret, spam, …), Gönder | `ekranlar/sistem/bildir.html` |   |
| E-554 | Bildir · haberde hata bildir | sistem | Alt sayfa | `duzeltme-politikasi.html` | — | Haberdeki hatayı yaz; düzeltme talebi | `ekranlar/sistem/bildir.html?tur=haber` |   |
| E-555 | Bildir · gönderildi | durum | Alt sayfa | — | — | Teşekkür kısa bildirimi | `ekranlar/sistem/bildir.html?durum=tamam` |   |
| E-556 | Üyelik tetik paneli | sistem | Alt sayfa | üyelik tetik paneli (akış A3, A9) | — | Takip et / Kaydet / Yorum / Beğen → Giriş Yap · Üye Ol · Şimdi değil | `ekranlar/sistem/uyelik-tetik.html` |   |
| E-557 | Üyelik tetik paneli · eyleme göre metin | durum | Alt sayfa | — | — | Ör. "Yorum yazmak için giriş yap" | `ekranlar/sistem/uyelik-tetik.html?eylem=yorum` |   |

### Sesli arama

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-558 | Sesli arama · hazır | sistem | Sesli arama | — | — | Alt sayfa, mikrofon düğmesi, "Dinliyorum" ipucu | `ekranlar/sistem/sesli-arama.html` |   |
| E-559 | Sesli arama · mikrofon izni isteniyor | sistem | Sesli arama | — | — | Ön açıklama + sistem iletişim kutusu | `ekranlar/sistem/sesli-arama.html?durum=izin` |   |
| E-560 | Sesli arama · kaydediyor | durum | Sesli arama | — | — | Ses dalgası, canlı metin, süre | `ekranlar/sistem/sesli-arama.html?durum=kaydediyor` |   |
| E-561 | Sesli arama · duraklatıldı | durum | Sesli arama | — | — | Dalga durur; Devam · Gönder · İptal | `ekranlar/sistem/sesli-arama.html?durum=duraklatildi` |   |
| E-562 | Sesli arama · gönderiliyor | durum | Sesli arama | — | — | Metin sabit, yükleniyor → arama sonuçları | `ekranlar/sistem/sesli-arama.html?durum=gonderiliyor` |   |
| E-563 | Sesli arama · anlaşılamadı | durum | Sesli arama | — | — | Tekrar dene ya da yazarak ara | `ekranlar/sistem/sesli-arama.html?durum=hata` |   |
| E-564 | Sesli arama · mikrofon izni reddedildi | durum | Sesli arama | — | — | Ayarlar'a git; yazarak ara | `ekranlar/sistem/sesli-arama.html?durum=izin-yok` |   |

### Onay pencereleri

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-565 | Onay · Çıkış yap | sistem | Onay | onay penceresi (oturumu kapat) | — | Cihazdaki kaydedilenler kalır mı notu | `ekranlar/sistem/onay.html?tur=cikis` |   |
| E-566 | Onay · Hesabı sil (son onay) | sistem | Onay | onay penceresi (hesap sil) | — | Geri alınamaz; kırmızı düğme | `ekranlar/sistem/onay.html?tur=hesap-sil` |   |
| E-567 | Onay · İndirilenleri sil | sistem | Onay | — | — | Kazanılacak alan | `ekranlar/sistem/onay.html?tur=indirilenleri-sil` |   |
| E-568 | Onay · Geçmişi temizle | sistem | Onay | — | — | Tümü ya da seçili sekme | `ekranlar/sistem/onay.html?tur=gecmisi-temizle` |   |
| E-569 | Onay · Klasörü sil | sistem | Onay | — | — | İçindekiler Kaydedilenler'de kalır | `ekranlar/sistem/onay.html?tur=klasor-sil` |   |
| E-570 | Onay · Takibi bırak | sistem | Onay | — | — | Konu/yazar adı | `ekranlar/sistem/onay.html?tur=takibi-birak` |   |
| E-571 | Onay · Yazdığın yorum silinsin mi | sistem | Onay | — | — | Yorum alt sayfası kapatılırken | `ekranlar/sistem/onay.html?tur=taslak` |   |
| E-572 | Onay · Oturumun sona erdi | sistem | Onay | oturum süresi doldu ara durumu | — | Yeniden giriş yap · Misafir devam | `ekranlar/sistem/onay.html?tur=oturum` |   |

### Kısa bildirimler ve afişler

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-573 | Kısa bildirim · Kaydedildi · Geri al | sistem | Toast | kısa bildirim (toast) | — | Klasör adıyla; geri al 4 sn | `ekranlar/sistem/toast.html?tur=kaydedildi` |   |
| E-574 | Kısa bildirim · Kaydedilenlerden çıkarıldı · Geri al | sistem | Toast | kısa bildirim (toast) | — | Alt çubuğun üstünde, tek satır | `ekranlar/sistem/toast.html?tur=kaldirildi` |   |
| E-575 | Kısa bildirim · Bağlantı kopyalandı | sistem | Toast | kısa bildirim (toast) | — | Alt çubuğun üstünde, tek satır | `ekranlar/sistem/toast.html?tur=kopyalandi` |   |
| E-576 | Kısa bildirim · Takip ediliyor | sistem | Toast | — | — | Bildirim aç önerisiyle | `ekranlar/sistem/toast.html?tur=takip` |   |
| E-577 | Kısa bildirim · Çevrimdışı okumaya indirildi | sistem | Toast | — | — | Alt çubuğun üstünde, tek satır | `ekranlar/sistem/toast.html?tur=indirildi` |   |
| E-578 | Kısa bildirim · Çevrimdışısın | sistem | Toast | çevrimdışı bandı | — | Kalıcı ince bant, alt çubuğun üstünde | `ekranlar/sistem/toast.html?tur=cevrimdisi` |   |
| E-579 | Kısa bildirim · Bağlantı geri geldi | sistem | Toast | çevrimdışı bandı | — | Bant yeşile döner, kaybolur | `ekranlar/sistem/toast.html?tur=baglandi` |   |
| E-580 | Kısa bildirim · Yorumun gönderildi | sistem | Toast | — | — | Denetim sonrası yayınlanır | `ekranlar/sistem/toast.html?tur=yorum` |   |
| E-581 | Kısa bildirim · İşlem yapılamadı | sistem | Toast | — | — | Yeniden dene bağlantısıyla | `ekranlar/sistem/toast.html?tur=hata` |   |
| E-582 | Uygulama içi bildirim afişi · Son Dakika | sistem | Afiş | — | — | Uygulama açıkken gelen bildirim üstten iner; dokun → detay, yukarı it → kapat | `ekranlar/sistem/bildirim-afisi.html` |   |
| E-583 | Uygulama içi bildirim afişi · canlı anlatım | sistem | Afiş | — | — | Takip edilen canlı anlatımda yeni gelişme | `ekranlar/sistem/bildirim-afisi.html?tur=canli` |   |

### Menüler

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-584 | Açılır menü · sıralama | sistem | Menü | — | — | Arama, Kaydedilenler, Yorumlar: En yeni · En eski · En çok beğenilen | `ekranlar/sistem/acilir-menu.html` |   |
| E-585 | Açılır menü · klasör (⋯) | sistem | Menü | — | — | Yeniden adlandır, Sil | `ekranlar/sistem/acilir-menu.html?tur=klasor` |   |
| E-586 | Açılır menü · yorum (⋯) | sistem | Menü | yorum bildir | — | Bildir, Kopyala; kendi yorumunda Sil | `ekranlar/sistem/acilir-menu.html?tur=yorum` |   |
| E-587 | Bağlam menüsü (kartta uzun basma) | sistem | Menü | — (uygulamaya özgü) | — | Haber önizlemesi + Kaydet, Paylaş, Dinle; haptik | `ekranlar/sistem/baglam-menu.html` |   |
| E-588 | Bağlam menüsü · Akış videosu | sistem | Menü | — | — | Sesi aç, Altyazı, Habere git yok (K23) | `ekranlar/sistem/baglam-menu.html?tur=akis` |   |

### Açılış yolları ve izinler

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-589 | Bildirimden açılış · uygulama kapalı | sistem | Açılış yolu | — | — | Açılış kısa → doğrudan detay; geri → ana sayfa | `ekranlar/sistem/bildirimden-acilis.html` |   |
| E-590 | Bildirimden açılış · uygulama açık | sistem | Açılış yolu | — | — | Bulunulan ekranın üstüne detay; geri → önceki ekran | `ekranlar/sistem/bildirimden-acilis.html?durum=sicak` |   |
| E-591 | Bildirimden açılış · içerik kaldırıldı | durum | Açılış yolu | `410.html` | — | Hata şablonu + ana sayfaya | `ekranlar/sistem/bildirimden-acilis.html?durum=kaldirildi` |   |
| E-592 | Derin bağlantı · haber | sistem | Açılış yolu | paylaşılan site adresi | — | Site adresi uygulamada açılır → detay | `ekranlar/sistem/derin-baglanti.html` |   |
| E-593 | Derin bağlantı · bölüm / yazar / etiket | sistem | Açılış yolu | site adresleri | — | Hedef liste ekranı; eski yönlendirmeler hedefe (DADAHABER-10 §6) | `ekranlar/sistem/derin-baglanti.html?tur=liste` |   |
| E-594 | Derin bağlantı · giriş gerekli | durum | Açılış yolu | giriş gerekli ara durumu | — | Hesap ekranı adresi misafirde: giriş → hedefe dön | `ekranlar/sistem/derin-baglanti.html?durum=giris` |   |
| E-595 | Derin bağlantı · uygulamada yok / bulunamadı | durum | Açılış yolu | `404.html` | — | Web'de aç ya da ana sayfa | `ekranlar/sistem/derin-baglanti.html?durum=bulunamadi` |   |
| E-596 | İzin reddedildi · bildirim | durum | İzin | — | — | Neden gerekli + Ayarlar'a git | `ekranlar/sistem/izin.html?tur=bildirim` |   |
| E-597 | İzin reddedildi · konum | durum | İzin | konum reddi (C35) | — | Şehri elle seç + Ayarlar | `ekranlar/sistem/izin.html?tur=konum` |   |
| E-598 | İzin reddedildi · mikrofon | durum | İzin | — | — | Yazarak ara + Ayarlar | `ekranlar/sistem/izin.html?tur=mikrofon` |   |
| E-599 | Konum izni · ön açıklama | sistem | İzin | — | — | Hava ve namaz için; Konumu kullan · Şehir seç | `ekranlar/sistem/izin.html?tur=konum&durum=istek` |   |

### İşletim sistemi yüzeyleri

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-600 | Kilit ekranı · bildirim görünümü | sistem | OS | — (panel bildirim görseli 2:1) | — | Başlık, kısa metin, görsel; gruplanmış bildirimler | `ekranlar/sistem/kilit-ekrani.html` |   |
| E-601 | Kilit ekranı · medya denetimi | sistem | OS | — | — | Haber Dinle / Spiker / podcast: kapak, oynat, ±15 sn | `ekranlar/sistem/kilit-ekrani.html?durum=medya` |   |

### Aday (kapsam kararı bekliyor)

| ID | Ekran / hal | Tür | Grup | Public karşılığı | Kök | Durumlar | Dosya | ✓ |
|---|---|---|---|---|---|---|---|---|
| E-602 | Canlı Etkinlik / Dynamic Island · maç skoru | sistem | OS · aday | `mac-detay.html` | — | Kilit ekranında skor; karar bekliyor | `ekranlar/sistem/kilit-ekrani.html?durum=canli-etkinlik` |   |
| E-603 | Ana ekran widget'ları | sistem | OS · aday | — | — | Son Dakika, Günün 5'i, piyasa, namaz; karar bekliyor | `ekranlar/sistem/widget.html` |   |

## 6 · Public siteyle karşılaştırma

Public `docs/sayfa-envanteri.md` (274 sayfa, 282 kalem) ile satır satır karşılaştırıldı. Sitedeki 7 bölüm haber detayı tek detay kalıbına (kök Detay), ~100 alt konu sayfası liste kökünün alt konu sekmesine, kategori sayfaları (video, foto, infografik, podcast, Haber Dinle) medya sayfasının süzgecine iner; site de bunları yönlendirmeye çevirdi (DADAHABER-10).

### a) Sitede var, uygulamada ayrı ekran yok

| Sitede | Uygulamada | Neden |
|---|---|---|
| Siyah bant, header, mega menü (`parcalar/ust.html`) | Alt gezinme + menü çekmecesi + Bölümler sekmesi | Web menüsü yok (CLAUDE.md) |
| Footer ve perdesi, sayfa dizini `sayfa-dizini.html` | Yok; kurumsal bağlantılar menünün altında ve Hakkında'da | Uygulamada footer yok |
| Yukarı çık düğmesi | Yok; sekmeye ikinci dokunuş başa çıkar | Uygulama alışkanlığı |
| İçeriğe geç bağlantısı | Yok; ekran okuyucu sırası | Web erişilebilirlik aracı |
| Kenar "Görüş bildir" sekmesi | Menü › Görüş Bildir ve Hesap › Geri bildirim | Kalıcı kenar sekmesi dokunma alanına girer |
| Çerez bandı, Gizlilik Tercih Merkezi, `cerez-politikasi.html` | Yok; izinler Gizlilik ve veriler'de; çerez metni web bağlantısı | Uygulamada çerez bandı yok |
| Sayfalama | Sayfa sonu yükleme (`?durum=daha-fazla`) | Dokunmatik liste |
| `81-il.html`, 78 ilin yerel sayfası | Liste › Şehirler + Şehir seç alt sayfası | Site de Şehirler'e yönlendirdi |
| Kategori alt sayfaları (`video-kategori`, `foto-fokus-kategori`, `infografik-kategori`, `podcast-kategori`, `haber-dinle-*`) | Medya sayfasında süzgeç çipi | Site de yönlendirdi (kapanış kararı 1) |
| Tür sayfaları (`gundem-analizi`, `uzman-gorusleri`, `savunma-videolari` …) | Liste `?tur=` süzgeci ve kart etiketi | DADAHABER-10 §3 |
| 7 bölüm haber detayı (`spor`, `finans` … detay örnekleri) | Tek detay kalıbı (kök Detay) | Aynı kalıp, farklı veri |
| `kesfet-detay.html` | Kök Detay | Aynı kalıp |
| Afet ve Acil Durum, Trafik ve Ulaşım, ekonomi araçları | Listede yok | Sitede B-25 onayı bekliyor; DADAHABER-10 menüsünde yok |
| Hamilelik hesaplayıcı ve hafta detayı, Astroloji ve burç detayı | Yalnız haber alt konusu olarak liste (Kadın › Hamilelik, Astroloji) | Araçlar B-24 onayı bekliyor |
| Resmî İlanlar (liste + ilan detayı) | Listede yok | B-26 onayı bekliyor; menüde yok |
| Reklam alanları, tam ekran reklam | Yok | C25 yer kararı bekliyor; tam ekran reklam kırmızı çizgi |
| Bülten arşivi `bulten-arsivi.html` | Listede yok; abonelik Hesap › Bültenler'de | E-posta arşivi web işi; istenirse eklenir |
| Dil seçici, dil sürümü yok notu | Listede yok | EN pilot sonra (B-07) |
| `reklam.html`, `insan-kaynaklari.html` | Hakkında'dan web bağlantısı | Kurumsal web içeriği |
| `uygulama.html` (Uygulamayı indir), Hesabım › Mobil uygulama | Yok; yerine Veri ve depolama | Uygulamanın içinde anlamsız |
| KVKK başvuru formu `kvkk-basvuru.html` | Gizlilik ve veriler'den bağlantı (E-515) | Form web'de kalır; ayrı ekran önerilmedi |
| Kardeş site bantları | Yok | Adlar B-12; uygulamada yer kararı yok |
| Giriş yapılmış üst bar + hesap menüsü | Hesabım sekmesi + menüdeki hesap kartı | Alt gezinme |
| Podcast listem (Hesabım) | Kaydedilenler › indirilenler + program Takip et | Tek kaydetme yeri |

### b) Uygulamada var, sitede yok (ya da sitede çok zayıf)

| Uygulamada | Satırlar | Not |
|---|---|---|
| Açılış (splash) ve tanıtım adımları | E-427–E-430 | Site karşılaması yalnız tercih seçimi |
| İzin ön ekranları, sistem pencereleri, reddedildi halleri | E-431–E-433, E-596–E-599 | Sitede yalnız konum reddi (C35) |
| Kategori hikâye görüntüleyici | E-013–E-018 | K13; eski Dada Haber uygulamasından fikir |
| Hikâye modu | E-047–E-049 | K16, K24 |
| Dinle sekmesi, Spiker tam ekran, mini/tam oynatıcı | E-194–E-199, E-545–E-550 | Sitede yüzen panel ve alt çubuk |
| Sesli arama (mikrofon) | E-558–E-564 | Sitede yok |
| Çevrimdışı indirme ve Veri ve depolama | E-053, E-216, E-471, E-473, E-479, E-512, E-567, E-577 | Metro, uçak; otomatik indir Günün 5'i |
| Güncelleme zorunlu / önerilen | E-416–E-417 | Mağaza sürümü |
| Uygulamada yayımlanmıyor hali | E-413 | Panelin "Uygulama" yayın kanalı |
| Bildirimden açılış, derin bağlantı | E-589–E-595 | Geri hareketi platform notu |
| Uygulama içi bildirim afişi, kilit ekranı bildirimi ve medya denetimi | E-582–E-583, E-600–E-601 | Panel bildirim görseli 2:1 |
| Paylaşım kartı (hikâye biçimi) | E-541 | Sosyal giriş kapısı (akış A1) |
| Uzun basınca bağlam menüsü | E-587–E-588 | Haptik, önizleme |
| Aşağı çekip yenileme (ortak haller) | E-421–E-423 | Ayrıca her listenin `?durum=yenileniyor` satırı (25 satır); sitede yok |
| Sistem temasını izle (Görünüm) | E-510 | Site yalnız açık/koyu |
| Canlı Etkinlik, widget (aday) | E-602–E-603 | Kapsam kararı bekliyor |

## 7 · Dosya listesi (yayılım iş bölümü)

Her dosyanın tek yazarı olur; kit ve kök dosyaları liderindir. Sayı: o dosyadaki satır (ekran + hal).

### hibrit (kök; yeni haller tek takım üyesinde) · 4 dosya · 57 satır

| Dosya | Satır | ID |
|---|---|---|
| `hibrit/kok.html` | 12 | E-001–E-012 |
| `hibrit/liste.html` | 19 | E-023–E-041 |
| `hibrit/detay.html` | 16 | E-042–E-057 |
| `hibrit/akis.html` | 10 | E-139–E-148 |

### ekranlar/icerik · 52 dosya · 349 satır

| Dosya | Satır | ID |
|---|---|---|
| `ekranlar/icerik/hikaye.html` | 6 | E-013–E-018 |
| `ekranlar/icerik/bolumler.html` | 4 | E-019–E-022 |
| `ekranlar/icerik/yorumlar.html` | 10 | E-058–E-067 |
| `ekranlar/icerik/kose-yazisi.html` | 6 | E-068–E-073 |
| `ekranlar/icerik/canli-anlatim.html` | 9 | E-074–E-082 |
| `ekranlar/icerik/canli-gundem.html` | 7 | E-083–E-089 |
| `ekranlar/icerik/canli-yayin.html` | 6 | E-090–E-095 |
| `ekranlar/icerik/son-dakika.html` | 8 | E-096–E-103 |
| `ekranlar/icerik/arama.html` | 3 | E-104–E-106 |
| `ekranlar/icerik/arama-sonuc.html` | 9 | E-107–E-115 |
| `ekranlar/icerik/dadaya-sor.html` | 6 | E-116–E-121 |
| `ekranlar/icerik/video.html` | 8 | E-122–E-129 |
| `ekranlar/icerik/video-detay.html` | 9 | E-130–E-138 |
| `ekranlar/icerik/foto-fokus.html` | 7 | E-149–E-155 |
| `ekranlar/icerik/galeri.html` | 7 | E-156–E-162 |
| `ekranlar/icerik/infografik.html` | 7 | E-163–E-169 |
| `ekranlar/icerik/infografik-detay.html` | 6 | E-170–E-175 |
| `ekranlar/icerik/haber-dinle.html` | 12 | E-176–E-187 |
| `ekranlar/icerik/haber-dinle-bulten.html` | 6 | E-188–E-193 |
| `ekranlar/icerik/spiker.html` | 6 | E-194–E-199 |
| `ekranlar/icerik/podcast.html` | 7 | E-200–E-206 |
| `ekranlar/icerik/podcast-program.html` | 8 | E-207–E-214 |
| `ekranlar/icerik/podcast-bolum.html` | 7 | E-215–E-221 |
| `ekranlar/icerik/kesfet.html` | 4 | E-222–E-225 |
| `ekranlar/icerik/gunun-5i.html` | 7 | E-226–E-232 |
| `ekranlar/icerik/dada-ozet.html` | 7 | E-233–E-239 |
| `ekranlar/icerik/bugun-ne-oldu.html` | 6 | E-240–E-245 |
| `ekranlar/icerik/guncellenen-haberler.html` | 7 | E-246–E-252 |
| `ekranlar/icerik/dada-baglam.html` | 6 | E-253–E-258 |
| `ekranlar/icerik/dada-dogrula.html` | 7 | E-259–E-265 |
| `ekranlar/icerik/farkli-bakislar.html` | 4 | E-266–E-269 |
| `ekranlar/icerik/veri-ve-harita.html` | 4 | E-270–E-273 |
| `ekranlar/icerik/sakin-akis.html` | 6 | E-274–E-279 |
| `ekranlar/icerik/bana-etkisi.html` | 6 | E-280–E-285 |
| `ekranlar/icerik/takvim.html` | 7 | E-286–E-292 |
| `ekranlar/icerik/arsiv.html` | 6 | E-293–E-298 |
| `ekranlar/icerik/senin-icin.html` | 8 | E-299–E-306 |
| `ekranlar/icerik/yazarlar.html` | 6 | E-307–E-312 |
| `ekranlar/icerik/yazar.html` | 8 | E-313–E-320 |
| `ekranlar/icerik/etiket.html` | 9 | E-321–E-329 |
| `ekranlar/icerik/kisi.html` | 8 | E-330–E-337 |
| `ekranlar/icerik/gelisen-olay.html` | 7 | E-338–E-344 |
| `ekranlar/icerik/piyasalar.html` | 13 | E-345–E-357 |
| `ekranlar/icerik/enstruman.html` | 5 | E-358–E-362 |
| `ekranlar/icerik/hava-durumu.html` | 5 | E-363–E-367 |
| `ekranlar/icerik/namaz-vakitleri.html` | 5 | E-368–E-372 |
| `ekranlar/icerik/canli-skor.html` | 6 | E-373–E-378 |
| `ekranlar/icerik/puan-durumu.html` | 4 | E-379–E-382 |
| `ekranlar/icerik/fikstur.html` | 5 | E-383–E-387 |
| `ekranlar/icerik/takimlar.html` | 4 | E-388–E-391 |
| `ekranlar/icerik/takim.html` | 7 | E-392–E-398 |
| `ekranlar/icerik/mac-detay.html` | 8 | E-399–E-406 |

### ekranlar/durum · 6 dosya · 20 satır

| Dosya | Satır | ID |
|---|---|---|
| `ekranlar/durum/hata.html` | 9 | E-407–E-415 |
| `ekranlar/durum/guncelleme.html` | 2 | E-416–E-417 |
| `ekranlar/durum/bakim.html` | 2 | E-418–E-419 |
| `ekranlar/durum/yakinda.html` | 1 | E-420 |
| `ekranlar/durum/yenileme.html` | 3 | E-421–E-423 |
| `ekranlar/durum/sayfa-sonu.html` | 3 | E-424–E-426 |

### ekranlar/giris · 9 dosya · 34 satır

| Dosya | Satır | ID |
|---|---|---|
| `ekranlar/giris/acilis.html` | 3 | E-427–E-429 |
| `ekranlar/giris/tanitim.html` | 1 | E-430 |
| `ekranlar/giris/bildirim-izni.html` | 3 | E-431–E-433 |
| `ekranlar/giris/konu-secimi.html` | 4 | E-434–E-437 |
| `ekranlar/giris/giris.html` | 5 | E-438–E-442 |
| `ekranlar/giris/uye-ol.html` | 4 | E-443–E-446 |
| `ekranlar/giris/sifremi-unuttum.html` | 5 | E-447–E-451 |
| `ekranlar/giris/eposta-dogrulama.html` | 4 | E-452–E-455 |
| `ekranlar/giris/sosyal-giris.html` | 5 | E-456–E-460 |

### ekranlar/hesap · 21 dosya · 79 satır

| Dosya | Satır | ID |
|---|---|---|
| `ekranlar/hesap/hesabim.html` | 2 | E-461–E-462 |
| `ekranlar/hesap/profil.html` | 3 | E-463–E-465 |
| `ekranlar/hesap/seri.html` | 2 | E-466–E-467 |
| `ekranlar/hesap/kaydedilenler.html` | 12 | E-468–E-479 |
| `ekranlar/hesap/takip.html` | 7 | E-480–E-486 |
| `ekranlar/hesap/gecmis.html` | 6 | E-487–E-492 |
| `ekranlar/hesap/bildirim-merkezi.html` | 8 | E-493–E-500 |
| `ekranlar/hesap/bildirim-tercihleri.html` | 2 | E-501–E-502 |
| `ekranlar/hesap/bultenler.html` | 3 | E-503–E-505 |
| `ekranlar/hesap/tercihler.html` | 2 | E-506–E-507 |
| `ekranlar/hesap/ayarlar.html` | 2 | E-508–E-509 |
| `ekranlar/hesap/gorunum.html` | 2 | E-510–E-511 |
| `ekranlar/hesap/depolama.html` | 1 | E-512 |
| `ekranlar/hesap/guvenlik.html` | 2 | E-513–E-514 |
| `ekranlar/hesap/gizlilik.html` | 2 | E-515–E-516 |
| `ekranlar/hesap/hesap-sil.html` | 3 | E-517–E-519 |
| `ekranlar/hesap/geri-bildirim.html` | 3 | E-520–E-522 |
| `ekranlar/hesap/yardim.html` | 1 | E-523 |
| `ekranlar/hesap/iletisim.html` | 1 | E-524 |
| `ekranlar/hesap/hakkinda.html` | 1 | E-525 |
| `ekranlar/hesap/yasal.html` | 14 | E-526–E-539 |

### ekranlar/sistem · 17 dosya · 64 satır

| Dosya | Satır | ID |
|---|---|---|
| `ekranlar/sistem/paylas.html` | 2 | E-540–E-541 |
| `ekranlar/sistem/kaydet.html` | 3 | E-542–E-544 |
| `ekranlar/sistem/oynatici.html` | 6 | E-545–E-550 |
| `ekranlar/sistem/sehir-sec.html` | 2 | E-551–E-552 |
| `ekranlar/sistem/bildir.html` | 3 | E-553–E-555 |
| `ekranlar/sistem/uyelik-tetik.html` | 2 | E-556–E-557 |
| `ekranlar/sistem/sesli-arama.html` | 7 | E-558–E-564 |
| `ekranlar/sistem/onay.html` | 8 | E-565–E-572 |
| `ekranlar/sistem/toast.html` | 9 | E-573–E-581 |
| `ekranlar/sistem/bildirim-afisi.html` | 2 | E-582–E-583 |
| `ekranlar/sistem/acilir-menu.html` | 3 | E-584–E-586 |
| `ekranlar/sistem/baglam-menu.html` | 2 | E-587–E-588 |
| `ekranlar/sistem/bildirimden-acilis.html` | 3 | E-589–E-591 |
| `ekranlar/sistem/derin-baglanti.html` | 4 | E-592–E-595 |
| `ekranlar/sistem/izin.html` | 4 | E-596–E-599 |
| `ekranlar/sistem/kilit-ekrani.html` | 3 | E-600–E-602 |
| `ekranlar/sistem/widget.html` | 1 | E-603 |

## 8 · Bu listede verilmiş sayılmayanlar

- Dinle sekmesinin Haber Dinle ile açılması, Haber Dinle'nin Spiker kartını taşıması: varsayım; Dinle sekmesinin içeriği seçtirilecek.
- Diğer 6 bölümün liste kökünden `?bolum=` ile türemesi (Keşfet, Keşfet merkezine açılır); Spor ve Finans'taki şerit (canlı maç, piyasalar): öneri.
- Giriş ve üye ol sayfa mı alt sayfa mı (B-15), bülten üyeliksiz mi (B-14), misafirin kaydı cihazda mı (C30): açık.
- Bildirim tercihlerinin içeriği (bekleyen #3), izin ön ekranında "Şimdi değil" (bekleyen #5), büyük yazıda kısaltma (bekleyen #7): açık.
- Dada'ya Sor'un arama ile tek kutu olması (B-16), Gündem Takvimi (B-25): sitede de açık; satırlar kalıbı gösterir, kapsamı bağlamaz.
- Aday satırlar (Canlı Etkinlik, widget): kapsam kararı.
