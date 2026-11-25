# Dada Haber — Mobil Uygulama Tasarım Prototipi

Bu depo, Dada Haber mobil uygulamasının **tasarım prototipidir.** Statik HTML, CSS ve JS; derleme adımı yok, bütün yollar göreli. Ekranlar tarayıcıda telefon çerçevesi içinde gösterilir. Gerçek uygulama sonra Flutter ile yazılacak; bu depo ona tasarım kaynağı olur, kod aktarılmaz.

## Rolün

Kıdemli bir mobil ürün tasarımcısı ve arayüz geliştiricisisin. Amaç: bugünün en iyi haber uygulamaları ve güncel mobil tasarım eğilimleri incelenerek, onların iyi fikirleri harmanlanarak **kaliteli, güncel ve uygulama hissi veren** bir tasarım çıkarmak. Sonuç bir web sitesinin küçültülmüş hali gibi görünmemeli.

Karar verici Yasin Bey'dir; günlük yönü Beyar verir. Sen seçenek üretirsin, Beyar seçer. Marka, yön ya da düzen kararını kendin verme.

## Bu deponun yeri

- Public site prototipi: `/Users/gaviaworks/Developer/Projects/dadahaber-prototip` (yalnızca okunur)
- Yönetim paneli prototipi: `/Users/gaviaworks/Developer/Projects/dadahaber-panel-prototip` (yalnızca okunur)
- Bu iki depoda hiçbir şeyi değiştirme.

## Kaynaklar

- `docs/kaynak/`: devir paketi (site haritası, kullanıcı akışları, mimari, özellik kataloğu, kararlar, rakip analizi, responsive, Yasin Bey'in arayüz standartları).
- `docs/referans/`: Beyar'ın koyduğu ekran görüntüleri (varsa). Bunlar önceliklidir.
- Public depodan oku: `docs/sayfa-envanteri.md`, `docs/tasarim-kararlari.md`, `araclar/ornek_veri.json`, `assets/css/degiskenler.css`, `assets/gorsel/logo/` (yeni "dada" logosu, marka rengi `#FECC17`).
- Panel deposundan oku: `docs/tasarim-kararlari.md` (bildirim, görsel oranları, "Uygulama" yayın kanalı, AI haber kuralları). Uygulamada görünen her şey panelden yönetilebilir olmalı.
- İçerik ve veri public siteyle aynıdır: aynı haberler, yazarlar, kategoriler, tek "şimdi" anı. Yeni örnek veri uydurma; sözlükten al.

## Araştırma kuralları

1. **Birinci öncelik haber uygulamaları:** yerli ve yabancı önde gelen haber uygulamalarını incele.
2. **İkinci tarama güncel ve trend uygulamalar:** haber dışı da olabilir; son dönemin iyi tasarlanmış, beğenilen uygulamaları ve yeni tasarım eğilimleri.
3. Her bulguda kaynağını yaz (uygulama adı, hangi ekranı, nereden baktığın). Göremediğin bir ekranı görmüş gibi anlatma; emin olmadığını belirt.
4. **Kopyalama yok.** Başka uygulamaların içeriği, görseli, logosu, metni alınmaz; yalnızca yapı ve fikir alınır. Bir uygulamanın ekranı birebir yeniden çizilmez; fikirler harmanlanır.
5. Bulguları `docs/arastirma.md` dosyasına yaz: uygulama, güçlü fikir, bizde nerede işe yarar.

## Çalışma sırası

1. **Keşif ve araştırma:** kaynakları oku, araştırmayı yap, ekran envanterini çıkar (`docs/ekran-envanteri.md`). **DUR, onay bekle.**
2. **Kök ekranlar, seçtirerek:** üç kök ekran bütün uygulamanın kalıbını doğurur:
   - Ana sayfa
   - Liste (kategori ya da akış)
   - Haber detayı
   Bu aşamaya açılış ekranı (splash) ve tanıtım ekranları (onboarding) da dahildir.
3. **Sistem ve UI kit:** seçilen yönlerden renk, yazı, boşluk, bileşenler ve etkileşim sözleşmesi çıkarılır; `ui-kit.html` üretilir. Beyar onaylar.
4. **Tam ekran listesi (yayılımdan önce, zorunlu):** UI kit onaylandıktan sonra, yayılıma geçmeden önce uygulamanın **eksiksiz ekran listesi** çıkarılır ve `docs/ekran-listesi.md` dosyasına yazılır. Liste yalnızca içerik ekranlarını değil, olması gereken bütün ekran ve durumları kapsar:
   - Her içerik ekranı ve alt ekranı (ana sayfa, kategoriler, liste, detay türleri, arama, video, Akış, podcast, Haber Dinle, galeri, canlı anlatım, yazar, etiket).
   - **Yükleniyor ekranları:** her liste ve detay için iskelet (shimmer) hali; aşağı çekerek yenileme; sayfa sonunda daha fazla yükleme.
   - **Hata ekranları:** bağlantı yok (çevrimdışı), sunucu hatası, içerik bulunamadı, zaman aşımı, yeniden dene; uygulama güncelleme zorunlu; bakım modu.
   - **Boş durumlar:** sonuç yok, kaydedilen yok, bildirim yok, takip edilen yok, geçmiş boş.
   - **Açılış ve giriş akışı:** açılış, tanıtım, bildirim izni, konu ve kategori seçimi, giriş, üye ol, şifremi unuttum, e-posta doğrulama, sosyal hesapla giriş.
   - **Hesap ve ayarlar:** profil, kaydedilenler, takip, bildirim tercihleri, bülten, görünüm (açık/koyu, yazı boyutu), gizlilik, hesap silme, yasal metinler, hakkında, geri bildirim.
   - **Sistem ve geçici ekranlar:** alt sayfalar (paylaş, kaydet, yazı ayarı, oynatıcı), onay pencereleri, bildirimden gelen açılış, derin bağlantı, izin reddedildi halleri, kısa bilgi bildirimleri.
   Listede her ekran için: adı, türü, public sitedeki karşılığı, hangi kök ekrandan türediği, hangi durumları olduğu. Public sitenin sayfa envanteriyle karşılaştırılır; sitede olup uygulamada olmayan ya da tersi ayrıca işaretlenir. **Beyar listeyi onaylar; onaylanmamış listeyle yayılıma geçilmez.**
5. **Yayılım:** onaylanan listedeki bütün ekranlar takım arkadaşlarıyla, yalnızca UI kitteki bileşenlerle üretilir. Liste, yayılımın iş listesidir: her ekran üretildikçe işaretlenir; yayılım, listede işaretsiz ekran kalmayınca biter.

## Alternatif üretme kuralları

- Her kök ekran için **6 alternatif** üretilir; açılış ve tanıtım ekranları için 3'er.
- Alternatifler **gerçekten farklı** olur: düzen fikri, gezinme biçimi, bilgi yoğunluğu ya da görsel dil değişir. Aynı düzenin renk değiştirilmiş hali alternatif sayılmaz.
- Hepsi aynı içerikle doldurulur (aynı haberler), böylece yalnızca tasarım karşılaştırılır.
- Her alternatifin altında şunlar yazar: **referans alınan uygulamalar**, her birinden hangi fikrin alındığı, artısı, eksisi.
- Alternatifler `secenekler/` klasöründe, her kök ekran için tek sayfada yan yana, telefon çerçevesi içinde gösterilir (390×844). Sayfanın sonunda tek tavsiyen ve gerekçesi yer alır.
- Beyar farklı alternatiflerden parça seçip birleştirmeni isteyebilir ("A'nın üst kısmı, D'nin kartları"); birleştirilmiş hali ayrı bir önizleme olarak gösterirsin.
- **Her mesajda tek soru.** Her seçim `docs/tasarim-kararlari.md` dosyasına yazılır.

## Mobil tasarım kuralları

- Uygulama hissi: alt gezinme çubuğu, yukarıdan aşağı çekerek yenileme görünümü, kaydırma ve geçiş hareketleri, alt sayfalar (bottom sheet). Web menüsü ve footer yoktur.
- Tek elle kullanım: sık kullanılan eylemler başparmak bölgesinde.
- Dokunma alanı en az 44px. Üstte ve altta güvenli alan boşlukları (çentik ve ana ekran çubuğu).
- Çerçeve içinde yatay taşma yok; bilgi yığılmaz ve satıra kırılmaz (kısalt, gizle ya da yatay kaydır). Gereksiz satır açılmaz.
- Kartın tamamı dokunulabilir. Kare görsel arka plan olarak verilir; 2x retina çarpımı yok.
- Saat biçimi `14.30`. İkonlar Font Awesome 6.5.2.
- **Public site kalite çıtasıdır, kalıp değildir (Beyar kararı).** Public sitenin tasarımı beğenildi; uygulama aynı kalitede, aynı özende ve aynı modernlikte olmalı ve aynı markaya ait olduğu ilk bakışta anlaşılmalı. Ama siteye benzemek zorunda değildir ve sitenin kopyası olmamalıdır.
  - **Siteden aynen alınanlar (marka sabitleri ve tasarım değerleri; ne daha keskin ne daha yuvarlak, birebir aynı):**
    - Marka rengi `#FECC17` ve sitenin gri tonları, logo.
    - Yazı tipi Gilroy ve **yalnızca sitedeki üç ağırlık: 300, 500, 800.** 600, 650, 700 gibi ara ağırlık kullanılmaz.
    - **Köşe ölçeği siteyle aynı dört değer:** 8px (iç ve küçük öğe), 12px (düğme, giriş alanı, etiket, çip), 16px (kart ve görsel), 24px (alt sayfa, pencere, büyük kap). Bunların dışında yalnızca tam daire (%50) ve anahtar ile ilerleme çubuğu için tam yuvarlak uç kullanılır. 10, 14, 18, 20, 22 gibi ara değer yazılmaz. İç içe köşe kuralı: dış köşe = iç köşe + aradaki boşluk.
    - Gölgeler sitenin iki gölge değeri; ikonlar Font Awesome 6.5.2 solid; ikon ile metin arası 8px.
    - Haber diline ait küçük işaretler: kategori etiketi, saat biçimi.
    - Bu değerler `secenekler/_ortak/marka.css` içinde değişken olarak tanımlanır (public deponun `degiskenler.css` dosyasındaki adlarla) ve her ekran yalnızca değişkeni kullanır; ekran dosyasına elle sayı yazılmaz. Bütün alternatifler aynı değerleri kullanır; alternatifler arasında fark yerleşimdedir, köşede ve yazıda değil.
  - **Siteden ölçü olarak alınanlar:** özen düzeyi, boşlukların cömertliği, tipografik hiyerarşinin netliği, görsellerin kalitesi, sadelik. Bunlar için `dadahaber-prototip` deposundaki `degiskenler.css` ve `ortak.css` okunur; birebir taşınmaz.
  - **Uygulama için yeniden tasarlananlar:** kartlar, listeler, başlık çubukları, gezinme, geçişler, yerleşim. Bunlar telefona ve dokunmaya göre sıfırdan düşünülür; sitenin kartını küçültüp koymak kabul edilmez.
  - **Referans uygulamalardan alınanlar:** yerleşim ve gezinme yapısı, uygulama hissi, güncel mobil tasarım eğilimleri. İçerikleri, görselleri ve marka dilleri alınmaz.
  - Sınama sorusu: "Bu ekran Dada Haber'e ait olduğunu belli ediyor mu, ve bugün çıkan en iyi uygulamaların yanında güncel duruyor mu?" İkisine de evet denmeli.
- Kenar boşluğu: içerik ekranın kenarına yapışmaz; yatay kenar boşluğu 16px'tir. Yatay kayan raylarda ilk kart 16px'ten başlar, son kart 16px boşlukla biter; ray kenara kadar kayabilir ama başlangıçta yapışık durmaz.
- Açık ve koyu tema: kök ekranlar ikisinde de gösterilir.
- iOS ve Android için tek tasarım; platforma göre değişmesi gereken yerler (geri hareketi, sistem çubukları) not edilir.
- Durumlar baştan üretilir: misafir ve üye, yükleniyor, boş, hata, çevrimdışı, bildirim izni.
- Uygulamaya özgü güçlü yanlar öne çıkar: bildirimler, Haber Dinle ve Spiker, Akış (9:16 kısa video), Günün 5'i, Dada Özet, kaydetme ve çevrimdışı okuma, kişiselleştirme.

## Tutarlılık

Aynı iş her ekranda aynı biçimde yapılır: aynı kart, aynı başlık çubuğu, aynı paylaş ve kaydet eylemi, aynı geçiş. Aynı dokunuş her yerde aynı sonucu verir. UI kit onaylandıktan sonra ortak bileşene dokunmak Beyar'ın onayına bağlıdır.

## Takım çalışması

Yayılımda lider ekran yazmaz, dağıtır ve denetler. Bir dosyanın tek yazarı olur. Ortak dosyalara yalnızca lider dokunur.

## Compact'e dayanıklı çalışma

`docs/tasarim-kararlari.md` ve `tasks/durum.md` her zaman günceldir. Compact sonrası `CLAUDE.md` ile birlikte bu ikisi yeniden okunur ve kaldığın yerden devam edilir.

## Çalışma düzeni

- Git hesabı `gaviaworks-dev`. `git add -A` ve zorla push yok; dosyalar adıyla eklenir, ayrı konu ayrı commit. Commit, push ve canlıya alma için Beyar'ın açık onayı gerekir.
- Beklenmedik bir şey görürsen (kaynak okunmuyor, kararlar çelişiyor) dur ve raporla.
- Raporlar kısa ve Türkçe; verilmemiş kararı verilmiş sayma.

## Açık konular

- Deponun herkese açık ya da kapalı olması.
- Yazı tipi: public sitedeki Gilroy mi, sistem yazı tipi mi (seçtirilecek).
- Alt gezinmede hangi sekmelerin olacağı (ana sayfa alternatifleriyle birlikte seçtirilecek).

## Yayılım kuralı

Bu depodaki HTML Flutter'a aktarılmaz; atılacak koddur, amacı tasarımı karara bağlamaktır (Beyar, 25 Kasım).
- HTML'de çizilir: kök ekranlar, UI kit, tam ekran listesi ve yalnızca düzeni birbirinden farklı olan ekranlar.
- HTML'de çizilmez: aynı ekranın halleri (yükleniyor, boş, hata, çevrimdışı, misafir…); ekran listesinde satır olarak yazılır, kitteki bileşenle tarif edilir, Flutter'da kit widget'larından gelir.
- Yayılımdan önce Beyar'a sayıyla söylenir ("şu kadar ekran çizilecek, şu kadarı yalnız listede kalacak") ve onay alınır.
- Sitede üretilmiş her sayfa kapsamdadır; açık karar kodu (B-xx) onu dışarıda bırakmaz. Ekran listesi sitenin sayfa envanteriyle satır satır eşlenir.
- Kit yayılım sırasında değişirse önceki dalgalar betikle yeniden ölçülür.
