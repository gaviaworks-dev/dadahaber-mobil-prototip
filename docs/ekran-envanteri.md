# Dada Haber Mobil · Ekran envanteri (ilk taslak)

Tarih: 2026-11-24 · Durum: **ilk taslak, onaylanmadı.** Eksiksiz liste (`docs/ekran-listesi.md`) UI kit onayından sonra çıkarılır (CLAUDE.md, çalışma sırası 4). Bu dosya kök ekranların neyi taşıması gerektiğini görmek için çıkarıldı.

Kaynaklar: public site `docs/sayfa-envanteri.md` (274 sayfa) ve `docs/tasarim-kararlari.md`, panel `docs/tasarim-kararlari.md` ve `moduller.json`, `docs/kaynak/` devir paketi.

**Kısaltmalar.** Kök: **AS** ana sayfa · **LS** liste · **HD** haber detayı · **AÇ** açılış · **TN** tanıtım · **—** kendi düzeni (UI kit bileşenleriyle). Public karşılığı sütunu sitedeki dosya adıdır; **yok** = sitede yok, uygulamaya özgü.

**İçerik iskeleti (public siteyle aynı).** 8 bölüm, sitedeki son sırayla: Gündem · Spor · Finans · Kadın · Savunma · Dünya · Kampüs · Keşfet (site haritasındaki Ekonomi/Teknoloji/Yaşam adları değil; public `tasarim-kararlari.md` §1, "Ana menü · başlıklar"). Tek "şimdi": 23 Kasım 2026 Pazartesi 16.05. Günün ana haberi Marmara'da yoğun kar.

---

## 1 · Açılış ve giriş akışı

| Ekran | Tür | Public karşılığı | Kök | Durumlar ve not |
|---|---|---|---|---|
| Açılış (splash) | sistem | yok | AÇ | Soğuk açılış, sıcak açılış; iOS'ta durağan görüntü, Android 12+ sistem açılış API'si (simge + arka plan); bağlantı yoksa doğrudan çevrimdışı okumaya |
| Tanıtım (onboarding) | akış, 3–4 adım | `karsilama.html` (tercih seçimi) | TN | Atla; değer önce, izin sonra |
| Bildirim izni ön ekranı | izin | sitede bildirim izni kartı (C8: yalnız zil ya da Takip et'te) | TN | Kabul, şimdi değil, sistemde reddedilmiş (ayarlara git) |
| Konu ve kategori seçimi | seçim | `karsilama.html`, `hesabim-tercihler.html` | TN | En az seçim yok ya da var (karar), takım, şehir |
| Giriş | form | `giris.html` + pencere | — | Hatalı şifre, kilitli, sosyal hesap ara durumu |
| Üye ol | form | `uye-ol.html` + pencere | — | Alan hataları, onay metinleri |
| Şifremi unuttum (3 adım) | form | `sifremi-unuttum.html`, `sifre-gonderildi.html`, `sifre-yeni.html`, `sifre-baglanti-gecersiz.html` | — | Bağlantı geçersiz |
| E-posta doğrulama | durum | `eposta-dogrula.html`, `eposta-dogrulandi.html` | — | Bekliyor, doğrulandı, geçersiz |
| Sosyal hesapla giriş | ara durum | sitede Google, Facebook, Apple (C31) | — | App Store kuralı 4.8: üçüncü taraf sosyal giriş varsa gizlilik odaklı eşdeğer bir seçenek gerekir (Apple ile Giriş bunu karşılar; güncel metni yayından önce doğrulanmalı); iptal, hata |

## 2 · Kök ekranlar ve türevleri

| Ekran | Tür | Public karşılığı | Kök | Durumlar ve not |
|---|---|---|---|---|
| Ana sayfa | kök | `index.html` | AS | Misafir, üye (kişisel bölüm), iskelet, aşağı çekip yenileme, çevrimdışı (kayıtlılar), canlı olay varken |
| Bölüm sayfası (8) | liste | `gundem.html`, `spor.html`, `finans.html` … | LS | Alt konu çipleri yatay kayar; Spor ve Finans konuya özel bileşenli (sitedeki "Tümü sayfasında genel, alt sayfada özel bileşen" kuralı) |
| Alt konu listesi (~100) | liste | `siyaset.html`, `orta-dogu.html` … | LS | Boş, sayfa sonu yükleme |
| Tüm kategoriler | dizin | `tum-kategoriler.html` | LS | Uygulamada "Bölümler" sekmesi ya da ana sayfadan |
| Son Dakika | zaman akışı | `son-dakika.html` | LS | Saatli satır, gün ayracı; yeni haber geldi şeridi |
| Haber detayı | kök | `haber-detay.html` + 7 bölüm detayı | HD | Kapaklı, kapaksız; misafir, üye; çevrimdışı kayıtlı; güncellendi, düzeltme notu |
| Köşe yazısı | detay | `kose-yazisi.html` | HD | Yazar başlıklı |
| Etiket · kişi/kurum · gelişen olay | liste | `etiket.html`, `kisi.html`, `konu.html` | LS | Takip et (misafirde cihazda tutulur, C30 varsayımı) |
| Yazar profili ve yazarlar | profil + liste | `yazar.html`, `yazarlar.html` | LS | Takip et |

## 3 · Formatlar (uygulamanın güçlü yanları)

| Ekran | Tür | Public karşılığı | Kök | Durumlar ve not |
|---|---|---|---|---|
| **Akış** (9:16 kısa video) | tam ekran dikey | `akis.html` (C14: sonu olan akış) | — | Sesli/sessiz, altyazı, "Habere git", "Dada'ya sor", "Günün akışı bitti" kartı, mobil veride otomatik oynatma kapalı |
| **Haber Dinle** listesi ve bülten detayı | ses | `haber-dinle.html`, `haber-dinle-detay.html`, 9 kategori | LS / HD | Deşifre metni, hız, sıradaki |
| **Kategori hikâye şeridi** | yatay şerit (ana sayfa bileşeni) | yok; eski Dada Haber uygulamasında var (`docs/referans/eski-uygulama-hikayeler.png`) | AS | Görülmemiş: sarı halka · görülen: soluk gri halka; ilk daire 16px'ten; altı ana sayfa alternatifinin hepsinde, yerleşime göre yeri değişir. Bileşen `secenekler/_ortak/hikaye.css/js` |
| **Hikâye görüntüleyici** | tam ekran | yok | — | Kategorinin günün haberleri kart kart; üstte ilerleme çizgileri; dokun ileri/geri, basılı tut dur, aşağı çek kapat, kategori bitince sıradaki; her kartta görsel, kategori, başlık, yazar · süre (düğme yok). Durumlar: **yükleniyor** (iskelet), **bugün hikâye yok** (sıradaki kategoriye geç). `secenekler/hikaye/hikaye.html` (`?durum=yukleniyor`, `?durum=bos`) |
| **Hikâye modu** (haber detayının modu) | tam ekran katman | yok | HD | K16: HD-E kartları ayrı ekran değil; detaydaki düğmeyle açılır, haber 6 karta bölünür (görsel kapak, 15 saniyede, neden önemli, bana etkisi, taraflar, bundan sonra); X ya da son karttaki "Metne dön" ile metne, kalınan yere döner. Paylaş yok. `secenekler/hibrit/hikaye-modu.js` |
| **Spiker** | ses + video oynatıcı | sitede yüzen panel (A · Yüz Açık Alt Bant, F2 düğme) | — | Uygulamada yüzen panel yerine mini oynatıcı + tam ekran oynatıcı önerilir; kilit ekranı ve bildirim merkezinde medya denetimi |
| Mini oynatıcı ve tam oynatıcı | sistem | sitede alt mini çubuk | — | Haberi dinle, Spiker, podcast tek oynatıcı (aynı anda çalmaz, sitedeki kural) |
| Podcast listesi, seri, bölüm | ses | `podcast.html`, `podcast-kategori.html`, `podcast-detay.html` | LS / HD | İndir (çevrimdışı), kaldığın yer |
| Video listesi, kategori, detay | video | `video.html`, `video-kategori.html`, `video-detay.html` | LS / HD | Yatay tam ekran, resim içinde resim |
| Foto Fokus listesi ve galeri | görüntüleyici | `foto-fokus*.html` | LS / — | Yakınlaştırma, kaydırarak kapatma |
| İnfografik listesi ve detay | görüntüleyici | `infografik*.html` | LS / — | Galeriyle ortak görüntüleyici |
| Canlı: Dakika Dakika, Canlı Yayın, Canlı Gündem | canlı | `dakika-dakika*.html`, `canli-yayin.html`, `canli-gundem.html` | HD | Canlı, sona erdi; yeni giriş şeridi; kilit anlar; iOS Canlı Etkinlik adayı |
| Maç detayı ve canlı skor | canlı | `mac-detay.html`, `canli-skor.html` | — | Canlı Etkinlik adayı |

## 4 · Keşfet ürünleri

| Ekran | Tür | Public karşılığı | Kök | Durumlar ve not |
|---|---|---|---|---|
| Keşfet merkezi | dizin | `kesfet.html` | LS | |
| **Günün 5'i** | özel | `gunun-5-i.html` | — | Sabah/akşam baskısı, okundu ilerlemesi, dinle; arşiv |
| **Dada Özet** | özel | `dada-ozet.html` (sitede telefon alt menüsünün 4. öğesi) | — | 15 sn / 1 dk / tam metin derinliği |
| Bugün Ne Oldu, Güncellenen Haberler | zaman akışı | `bugun-ne-oldu.html`, `guncellenen-haberler.html` | LS | |
| Dada Bağlam (dosya + kronoloji) | özel | `dada-baglam*.html` | — | |
| Dada Doğrula (merkez + inceleme) | özel | `dada-dogrula*.html` | — | Sitedeki tek teyit gösterimi: "İncelendi · N kaynak" |
| Farklı Bakışlar · Veri ve Harita · Sakin Akış · Bana Etkisi | özel | aynı adlı dosyalar | — | Sakin Akış uygulamada bildirim davranışını da değiştirir |
| Dada'ya Sor | soru-yanıt | `dadaya-sor.html` (C17 birleşik arama) | — | B-16 açık; her yanıt kaynak bağlantılı |

## 5 · Servisler

| Ekran | Public karşılığı | Kök | Not |
|---|---|---|---|
| Piyasa ekranı, Döviz, Altın, Borsa, Kripto, Faiz, Akaryakıt, Ekonomik Takvim, enstrüman detayı, ekonomi araçları | `piyasa-ekrani.html`, `doviz.html` … | LS / — | Uzun listeler aramalı, tablo kap içinde kayar (site kuralı); widget adayı |
| Hava durumu, Namaz vakitleri, 81 il | `hava-durumu.html`, `namaz-vakitleri.html`, `81-il.html` | — | Konum izni ve reddi; widget adayı |
| Puan durumu, Fikstür, Takımlar, takım sayfası, Transfer, Millî Takım | `puan-durumu.html` … | LS / — | Takımlarım kişiselleştirmesi |
| Gündem Takvimi, Afet ve Acil Durum (son depremler), Trafik, Sınav Takvimi, Resmî İlanlar | aynı adlı dosyalar | LS / — | B-25, B-26 onayı bekliyor (sitede de) |
| Hamilelik, Astroloji | `hamilelik.html`, `astroloji.html` | — | Sitede "özellik onayı bekliyor" (B-24); uygulamaya alınması ayrıca sorulmalı |

## 6 · Arama

| Ekran | Public karşılığı | Kök | Durumlar |
|---|---|---|---|
| Arama girişi (son aramalar, gündemdekiler) | arama penceresi | — | Sesli arama, mikrofon izni |
| Arama sonuçları (tür sekmeleri) | `arama.html` | LS | Sonuç yok, yazım önerisi |

## 7 · Hesap ve ayarlar

| Ekran | Public karşılığı | Kök | Not |
|---|---|---|---|
| Hesabım (misafir / üye) | `hesabim.html`, `hesabim-misafir.html` | — | Sitedeki 8 bölüm (C3) |
| Kaydedilenler (klasörlü) + **çevrimdışı indirilenler** | `hesabim-kaydedilenler.html` | LS | Uygulamaya özgü: indirme durumu, depolama alanı |
| Takip ettiklerim | `hesabim-takip.html` | LS | |
| Okuma, izleme, dinleme geçmişi | `hesabim-gecmis.html` | LS | |
| Bildirim merkezi | sitede bildirim paneli (C32) | LS | Okunmuş/okunmamış |
| Bildirim tercihleri | `hesabim-bildirimler.html` | — | Panel kararıyla çelişki var, aşağıda §11 |
| Bültenlerim | `hesabim-bultenler.html` | — | |
| Serim ve rozetlerim | `hesabim-seri.html` | — | Günün Serisi 2. çeyrek |
| Tercihler (ilgi, şehir, takım, Bana Etkisi profili) | `hesabim-tercihler.html` | — | Profiller panelle aynı: Öğrenci, Çalışan, Emekli, Ev sahibi, Kiracı, Esnaf |
| Görünüm (açık/koyu/sistem, yazı boyutu, Sakin mod) | Görünüm penceresi (C7) | — | Uygulamada sistem temasını izle seçeneği eklenir |
| Dil | sitede dil seçici | — | EN pilot sonra (B-07); Arapça sağdan sola |
| Güvenlik ve profil, bağlı hesaplar | `hesabim-guvenlik.html`, `hesap-bagla.html` | — | |
| Gizlilik ve veriler, hesap silme | `hesabim-gizlilik.html`, `hesap-silindi.html` | — | Uygulama içinden hesap silme iki mağazada da zorunlu |
| Yasal metinler, hakkında, künye, yayın ilkeleri, düzeltme politikası | metin şablonu sayfaları | — | Tek metin şablonu |
| Geri bildirim (Görüş bildir), yardım | `iletisim.html`, `yardim-merkezi.html` | — | Ekran görüntüsü ekleme |
| Uygulama bilgisi (sürüm, önbellek temizle) | `hesabim-uygulama.html` | — | Uygulamaya özgü kısmı genişler |

## 8 · Sistem ve geçici ekranlar

| Ekran | Public karşılığı | Not |
|---|---|---|
| Alt sayfalar: Paylaş, Kaydet (klasör seç), Yazı ayarı, Oynatıcı hızı, Şehir seç, Görünüm | sitede açılır pencereler (M8: telefonda alttan panel) | Tek alt sayfa bileşeni |
| Onay pencereleri: çıkış yap, hesabı sil, indirilenleri sil | sitede onay pencereleri | |
| Üyelik tetik paneli (Takip et/Kaydet → giriş) | sitede tetik paneli | Misafirde cihazda tutma varsayımı (C30) |
| Kısa bildirimler: kaydedildi, kopyalandı, geri al, çevrimdışı oldun, bağlantı geldi | sitede toast | |
| Bildirimden gelen açılış ve derin bağlantı | yok | Detaya doğrudan iniş; geri hareketi ana sayfaya |
| İzin reddedildi halleri: bildirim, konum, mikrofon | sitede konum reddi (C35) | |
| Uygulama içi güncelleme zorunlu / önerilen | yok | |
| Bakım modu | `bakim.html` (panelde Site Ayarları) | |

## 9 · Durumlar (her liste ve detayda)

İskelet (shimmer) · aşağı çekip yenileme · sayfa sonunda daha fazla · boş (sonuç yok, kaydedilen yok, bildirim yok, takip yok, geçmiş boş) · hata (çevrimdışı, sunucu, bulunamadı, zaman aşımı, yeniden dene) · misafir/üye. Sitede karşılıkları: `durumlar.html`, `cevrimdisi.html`, `404.html`, `500.html`, `429.html`, `410.html`, `403.html`, `yakinda.html`.

## 10 · Uygulamaya özgü (sitede karşılığı yok ya da zayıf)

| Kalem | Neden uygulamada | Bağlı olduğu |
|---|---|---|
| Push bildirimi ve bildirim izni akışı | Uygulamanın en güçlü geri dönüş kanalı | Panel Push modülü |
| Çevrimdışı okuma (kaydedileni indir, otomatik indir: Günün 5'i) | Metroda, uçakta okuma | Kaydedilenler |
| Arka planda ses ve kilit ekranı denetimi (Haber Dinle, Spiker, podcast) | Ekran kapalıyken dinleme | Oynatıcı |
| Canlı Etkinlik / Dynamic Island (maç skoru, canlı olay) | Kilit ekranında takip | Dakika Dakika, maç detayı |
| Ana ekran widget'ları (Son Dakika, Günün 5'i, piyasa, namaz) | Uygulamayı açmadan bakış | Servisler |
| Paylaşım kartı (Instagram hikâye biçimi) | Sosyal giriş kapısı (akış A1) | Paylaş alt sayfası |
| Haptik, kaydırarak geri, uzun basınca önizleme | Uygulama hissi | Etkileşim sözleşmesi |

## 11 · Sitede olup uygulamada olmayan ya da tersi (ilk karşılaştırma)

**Sitede var, uygulamaya alınmaması önerilir:** footer ve perdesi, siyah bant, mega menü, kenar "Görüş bildir" sekmesi, yukarı çık düğmesi (yerine sekmeye ikinci dokunuş başa çıkar), çerez bandı (uygulamada izin ve gizlilik ayarları; ATT ayrı), sayfa dizini, RSS, reklam ve insan kaynakları sayfaları (web bağlantısı olarak kalabilir), sayfalama (yerine sonsuz değil, "daha fazla" yükleme).

**Uygulamada var, sitede yok:** §10'daki her şey; ayrıca indirilenler, depolama, sistem temasını izle, güncelleme zorunlu.

**Dikkat edilecek çelişkiler (karar Beyar'ın):**
1. **Bildirim tercihleri ↔ panel.** Panel kararı: "Kime alanı yok; bildirim bütün abonelere gider, hedefleme yapılmaz." Uygulamada konu bazlı bildirim tercihi (Takip ettiğin konu, takımın) bu kuralla çalışmaz; ya tercihler yalnızca aç/kapa ve saat olur ya da panele hedefleme eklenir.
2. **"Uygulama" yayın kanalı.** Panelde her kaynak grubunun kanalları seçilir (Web, Uygulama, Sosyal); bir haber sitede olup uygulamada olmayabilir. "İçerik siteyle aynı" kuralı bu istisnayla yazılmalı.
3. **Görsel oranları.** Panelde kayıtlı oranlar: web detay 2.4:1, kart 16:10, mobil kart 16:10 (358×224), bildirim 2:1, sosyal 16:9 · 1:1 · 4:5 · 1.91:1, Akış 9:16. Tam ekran dikey kapaklı detay ya da dikey kart kullanan bir alternatif seçilirse panele yeni bir "uygulama kapağı" oranı eklenmesi gerekir.
4. **Vitrin.** Panelde vitrin yönetimi yalnızca manşeti kapsar (K16); ana sayfanın geri kalanı kendiliğinden dolar. Elle dizilmiş bölüm isteyen bir ana sayfa alternatifi panele iş çıkarır.
6. **Hikâyeler panelde nasıl oluşacak? (açık konu, panel deposuna dokunulmadı)** Seçenekler: (A) kategoriye göre kendiliğinden: o günün o kategorideki manşet ve en çok okunan N haberi, görselsiz ("Görsel eksik") haberler hariç; (B) editör seçer: haber düzenle ekranında "Hikâyeye ekle" ve kategori başına sıra; (C) karma: kendiliğinden dolar, editör çıkarır/sabitler. Ayrıca netleşecek: hikâye görselinin oranı (tam ekran dikey 9:19,5; panelde Akış'ın 9:16 oranı var, haber için yok), hikâyenin geçerlilik süresi (gün sonu mu, 24 saat mi), "Uygulama" yayın kanalı kapalı haberin hikâyeye girmemesi. Prototipte A varsayıldı (D.hikayeler: manşet + bölüm haberleri).
7. **Teyit gösterimi.** Sitede "Teyitli" etiketi ve kaynak sayısı arayüzde yok (yalnızca detayda Kaynaklar listesi ve Dada Doğrula'da "İncelendi"). Uygulama da buna uyar; alternatiflerde teyit rozeti kullanılmaz.
