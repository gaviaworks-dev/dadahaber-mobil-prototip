/* Dada Haber Mobil · SPOR VERİSİ VE YARDIMCILARI (TEK YAZAR: spor ekranlarının yazarı; lider dosyası değil).
   kit.js'ten SONRA yüklenir. Kullanan ekranlar: canli-skor, lig, brans, transfer, milli-takim, avrupa-ligleri, takim, takimlar, mac-detay.
   VERİ: yalnız public sitenin spor sayfaları (dadahaber-prototip: canli-skor, futbol, basketbol, voleybol, super-lig, avrupa-ligleri, milli-takim, transfer,
   puan-durumu, fikstur, takimlar, galatasaray, fenerbahce, besiktas, trabzonspor, mac-detay) ve sözlük (araclar/ornek_veri.json: puan_tablosu, haber saatleri).
   Uydurma yok. Tarih kuralı: maç günü public fikstür, takım sayfası ya da haber tarihinden; tarihi sitede yazmayan maç (Avrupa kupalarının 4. haftası,
   Süper Lig 11-12. hafta, La Liga 14. hafta) yalnız lig ve takım sayfasında hafta adıyla görünür, gün şeridine girmez (gizli sıralama anahtarı).
   Haber satırı görselleri (K44 kural 8): haberin kendi görseli sözlükte yok; konusuna en yakın anahtar (futbol: superlig, antrenman, milli; basketbol: basket;
   voleybol: voleybol). Tenis ve e-spor haberine uygun görsel yok → yazı satırı.
   TAKIM ARMASI (Yasin Bey, 25 Kasım): harfli daire kalktı; skor satırı, puan tablosu, transfer satırı kitteki tek bileşenle (K.arma; tablo s, skor satırı xs,
   transfer m). Kişiler (tenis oyuncuları) takım değildir → arma yok. Skor satırında armanın yerleşimi kitte yok → aşağıdaki KİT ADAYI biçimi (spor-css). */
(function(){
  var AY = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  var GUN = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'], GK = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
  var BUGUN = 20261123; /* sözlük "şimdi": 23 Kasım 2026 Pazartesi 16.05 */
  function parca(t){ return [Math.floor(t / 10000), Math.floor(t / 100) % 100, t % 100]; }
  function gunNo(t){ var p = parca(t); return new Date(p[0], p[1] - 1, p[2]).getDay(); }
  function tarih(t){ var p = parca(t); return GUN[gunNo(t)] + ' ' + p[2] + ' ' + AY[p[1] - 1] + (p[0] !== 2026 ? ' ' + p[0] : ''); }
  function gunKisa(t){ var p = parca(t); if (t === BUGUN) return 'Bugün'; if (t === BUGUN - 1) return 'Dün'; if (t === BUGUN + 1) return 'Yarın'; return GK[gunNo(t)] + ' ' + p[2]; }

  /* ---------- ligler ---------- tur: b (beraberlikli, G B M A Y) · n (beraberliksiz, O G M A Y P) */
  var LIG = {
    'super-lig': { ad: 'Süper Lig', b: 'futbol', ulke: 'Türkiye', hafta: '14. hafta', not: '13 hafta sonunda · Süper Lig 2026-27', toplam: 164 },
    '1-lig': { ad: '1. Lig', b: 'futbol', ulke: 'Türkiye', hafta: '13. hafta', not: '13 hafta sonunda · sitede ilk 6 takım' },
    'turkiye-kupasi': { ad: 'Türkiye Kupası', b: 'futbol', ulke: 'Türkiye', kupa: 1 },
    'premier-lig': { ad: 'Premier Lig', b: 'futbol', ulke: 'İngiltere', hafta: '13. hafta', not: '13 hafta sonunda · sitede ilk 12 takım' },
    'la-liga': { ad: 'La Liga', b: 'futbol', ulke: 'İspanya', hafta: '14. hafta', not: '14 hafta sonunda · sitede ilk 6 takım' },
    'serie-a': { ad: 'Serie A', b: 'futbol', ulke: 'İtalya', hafta: '13. hafta', not: '13 hafta sonunda · sitede ilk 6 takım' },
    'bundesliga': { ad: 'Bundesliga', b: 'futbol', ulke: 'Almanya', hafta: '12. hafta', not: '12 hafta sonunda · sitede ilk 6 takım' },
    'sampiyonlar-ligi': { ad: 'Şampiyonlar Ligi', b: 'futbol', ulke: 'UEFA', hafta: '5. hafta', kupa: 1 },
    'avrupa-ligi': { ad: 'Avrupa Ligi', b: 'futbol', ulke: 'UEFA', kupa: 1 },
    'konferans-ligi': { ad: 'Konferans Ligi', b: 'futbol', ulke: 'UEFA', kupa: 1 },
    'milli-futbol': { ad: 'A Millî Takım', b: 'futbol', ulke: 'Hazırlık maçı', milli: 1 },
    'milli-kadin': { ad: 'Kadın A Millî Takımı', b: 'futbol', ulke: 'Hazırlık maçı', milli: 1 },
    'bsl': { ad: 'Basketbol Süper Ligi', b: 'basketbol', ulke: 'Türkiye', hafta: '9. hafta', tur: 'n', s: ['A', 'Y'], not: '9 hafta sonunda · galibiyet 2, mağlubiyet 1 puan' },
    'euroleague': { ad: 'EuroLeague', b: 'basketbol', ulke: 'Avrupa', hafta: '13. hafta', tur: 'n', s: ['A', 'Y'], not: '13 hafta sonunda · sitede ilk 6 takım' },
    'eurocup': { ad: 'EuroCup', b: 'basketbol', ulke: 'Avrupa', kupa: 1 },
    'kbsl': { ad: 'Kadınlar Basketbol Süper Ligi', b: 'basketbol', ulke: 'Türkiye', tur: 'n', s: ['A', 'Y'], not: '8 hafta sonunda · sitede ilk 6 takım' },
    'milli-basket': { ad: 'Dünya Kupası elemeleri', b: 'basketbol', ulke: '12 Dev Adam', milli: 1 },
    'sultanlar': { ad: 'Sultanlar Ligi', b: 'voleybol', ulke: 'Türkiye', hafta: '8. hafta', tur: 'n', s: ['AS', 'VS'], not: '7 hafta sonunda · AS alınan, VS verilen set' },
    'efeler': { ad: 'Efeler Ligi', b: 'voleybol', ulke: 'Türkiye', hafta: '8. hafta', tur: 'n', s: ['AS', 'VS'], not: '7 hafta sonunda · sitede ilk 6 takım' },
    'cev-sl': { ad: 'CEV Şampiyonlar Ligi', b: 'voleybol', ulke: 'Avrupa', tur: 'n', s: ['AS', 'VS'], not: '2 maç sonunda · kadınlar' },
    'davis': { ad: 'Davis Kupası', b: 'diger', ulke: 'Tenis', ikon: 'fa-medal' },
    'valorant': { ad: 'Valorant finali', b: 'diger', ulke: 'E-Spor', ikon: 'fa-gamepad' }
  };
  var SIRA = Object.keys(LIG);
  var BRANS = { futbol: { ad: 'Futbol', ikon: 'fa-futbol' }, basketbol: { ad: 'Basketbol', ikon: 'fa-basketball' }, voleybol: { ad: 'Voleybol', ikon: 'fa-volleyball' }, diger: { ad: 'Diğer', ikon: 'fa-medal' } };
  function ligIkon(k){ var l = LIG[k]; return l.ikon || (l.milli ? 'fa-flag' : l.kupa ? 'fa-trophy' : BRANS[l.b].ikon); }

  /* kaynak: sözlük puan_tablosu (Süper Lig, iç ve dış saha dahil) · [ad, kod, G, B, M, A, Y, iç [G,B,M,A,Y], dış [G,B,M,A,Y]] */
  LIG['super-lig'].tablo = [
    ['Galatasaray', 'GS', 10, 2, 1, 33, 10, [6, 1, 0, 18, 4], [4, 1, 1, 15, 6]], ['Fenerbahçe', 'FB', 9, 3, 1, 30, 11, [5, 1, 0, 17, 5], [4, 2, 1, 13, 6]],
    ['Beşiktaş', 'BJK', 7, 4, 2, 25, 13, [5, 2, 0, 14, 6], [2, 2, 2, 11, 7]], ['Trabzonspor', 'TS', 7, 3, 3, 21, 13, [4, 1, 1, 12, 6], [3, 2, 2, 9, 7]],
    ['Başakşehir', 'BAŞ', 6, 4, 3, 19, 14, [4, 2, 1, 11, 6], [2, 2, 2, 8, 8]], ['Samsunspor', 'SAM', 6, 3, 4, 17, 14, [3, 1, 2, 10, 6], [3, 2, 2, 7, 8]],
    ['Göztepe', 'GÖZ', 5, 5, 3, 16, 15, [3, 3, 1, 9, 7], [2, 2, 2, 7, 8]], ['Kasımpaşa', 'KAS', 5, 3, 5, 19, 19, [4, 1, 1, 11, 8], [1, 2, 4, 8, 11]],
    ['Eyüpspor', 'EYP', 4, 5, 4, 15, 16, [3, 3, 1, 8, 6], [1, 2, 3, 7, 10]], ['Antalyaspor', 'ANT', 4, 4, 5, 14, 18, [1, 3, 2, 8, 8], [3, 1, 3, 6, 10]],
    ['Konyaspor', 'KON', 3, 6, 4, 13, 16, [2, 3, 2, 7, 7], [1, 3, 2, 6, 9]], ['Alanyaspor', 'ALN', 3, 5, 5, 13, 18, [2, 2, 2, 7, 8], [1, 3, 3, 6, 10]],
    ['Rizespor', 'RİZ', 3, 4, 6, 15, 20, [2, 2, 3, 8, 9], [1, 2, 3, 7, 11]], ['Gaziantep FK', 'GFK', 3, 3, 7, 12, 20, [2, 1, 3, 7, 9], [1, 2, 4, 5, 11]],
    ['Kocaelispor', 'KOC', 2, 5, 6, 11, 18, [1, 3, 3, 6, 8], [1, 2, 3, 5, 10]], ['Amedspor', 'AMD', 2, 4, 7, 11, 21, [1, 2, 3, 6, 9], [1, 2, 4, 5, 12]],
    ['Kayserispor', 'KAY', 2, 3, 8, 10, 23, [1, 2, 4, 6, 10], [1, 1, 4, 4, 13]], ['Gençlerbirliği', 'GB', 1, 4, 8, 9, 24, [1, 2, 3, 5, 11], [0, 2, 5, 4, 13]]
  ];
  /* kaynak: public futbol.html ve puan-durumu.html (1. Lig), avrupa-ligleri.html (Premier Lig, La Liga, Serie A, Bundesliga) · [ad, kod, G, B, M, A, Y] */
  LIG['1-lig'].tablo = [['Bodrum FK', 'BOD', 8, 3, 2, 22, 11], ['Erzurumspor', 'ERZ', 8, 2, 3, 24, 13], ['Sakaryaspor', 'SAK', 7, 4, 2, 20, 12], ['Bandırmaspor', 'BAN', 7, 3, 3, 19, 14], ['Pendikspor', 'PEN', 6, 4, 3, 18, 14], ['Iğdır FK', 'IĞD', 6, 3, 4, 17, 15]];
  LIG['premier-lig'].tablo = [['Arsenal', 'ARS', 9, 3, 1, 27, 9], ['Manchester City', 'MCI', 9, 0, 4, 28, 15], ['Liverpool', 'LIV', 8, 2, 3, 25, 15], ['Chelsea', 'CHE', 7, 4, 2, 24, 13], ['Aston Villa', 'AVL', 7, 2, 4, 19, 16], ['Newcastle', 'NEW', 6, 4, 3, 21, 14],
    ['Tottenham', 'TOT', 6, 3, 4, 22, 18], ['Manchester United', 'MUN', 6, 2, 5, 20, 19], ['Brighton', 'BHA', 5, 4, 4, 19, 18], ['Nottingham Forest', 'NFO', 5, 3, 5, 16, 17], ['Fulham', 'FUL', 4, 5, 4, 17, 18], ['Brentford', 'BRE', 4, 4, 5, 18, 20]];
  LIG['la-liga'].tablo = [['Real Madrid', 'RMA', 11, 2, 1, 32, 10], ['Barcelona', 'BAR', 11, 1, 2, 38, 15], ['Atlético Madrid', 'ATM', 9, 3, 2, 26, 11], ['Athletic', 'ATH', 7, 4, 3, 20, 14], ['Real Sociedad', 'RSO', 6, 5, 3, 19, 15], ['Real Betis', 'BET', 6, 4, 4, 21, 18]];
  LIG['serie-a'].tablo = [['Inter', 'INT', 10, 1, 2, 30, 12], ['Napoli', 'NAP', 9, 3, 1, 24, 9], ['Juventus', 'JUV', 8, 4, 1, 22, 10], ['Milan', 'MIL', 8, 3, 2, 23, 13], ['Atalanta', 'ATA', 7, 3, 3, 24, 15], ['Roma', 'ROM', 7, 2, 4, 18, 14]];
  LIG['bundesliga'].tablo = [['Bayern München', 'BAY', 10, 2, 0, 36, 9], ['Bayer Leverkusen', 'LEV', 8, 3, 1, 27, 13], ['Dortmund', 'BVB', 7, 3, 2, 24, 15], ['Leipzig', 'RBL', 7, 2, 3, 23, 16], ['Stuttgart', 'VFB', 6, 3, 3, 22, 17], ['Frankfurt', 'SGE', 6, 2, 4, 24, 21]];
  /* kaynak: public basketbol.html (BSL, EuroLeague, Kadınlar), voleybol.html (Sultanlar, Efeler, CEV Şampiyonlar Ligi) · [ad, kod, O, G, M, A, Y, P] */
  LIG['bsl'].tablo = [['Fenerbahçe Beko', 'FBB', 9, 8, 1, 812, 701, 17], ['Anadolu Efes', 'AEF', 9, 7, 2, 798, 712, 16], ['Beşiktaş', 'BJK', 9, 6, 3, 765, 718, 15], ['Türk Telekom', 'TTK', 9, 6, 3, 741, 709, 15], ['Bahçeşehir Koleji', 'BAH', 9, 5, 4, 735, 724, 14], ['Galatasaray', 'GS', 9, 5, 4, 720, 717, 14],
    ['Tofaş', 'TOF', 9, 5, 4, 728, 730, 14], ['Karşıyaka', 'KSK', 9, 4, 5, 702, 711, 13], ['Manisa Basket', 'MAN', 9, 4, 5, 698, 715, 13], ['Trabzonspor', 'TS', 9, 3, 6, 690, 728, 12], ['Mersinspor', 'MRS', 9, 3, 6, 684, 731, 12], ['Büyükçekmece', 'BÜY', 9, 2, 7, 671, 744, 11]];
  LIG['euroleague'].tablo = [['Fenerbahçe Beko', 'FBB', 13, 10, 3, 1087, 1045, 23], ['Real Madrid', 'RMD', 13, 10, 3, 1087, 1045, 23], ['Olympiakos', 'OLY', 13, 9, 4, 1081, 1051, 22], ['Anadolu Efes', 'AEF', 13, 8, 5, 1075, 1057, 21], ['Panathinaikos', 'PAO', 13, 8, 5, 1075, 1057, 21], ['Monaco', 'ASM', 13, 7, 6, 1069, 1063, 20]];
  LIG['kbsl'].tablo = [['Fenerbahçe Opet', 'FBO', 8, 8, 0, 680, 632, 16], ['ÇBK Mersin', 'MER', 8, 7, 1, 674, 638, 15], ['Galatasaray', 'GS', 8, 6, 2, 668, 644, 14], ['Beşiktaş', 'BJK', 8, 5, 3, 662, 650, 13], ['Emlak Konut', 'EML', 8, 4, 4, 656, 656, 12], ['Nesibe Aydın', 'NES', 8, 3, 5, 650, 662, 11]];
  LIG['sultanlar'].tablo = [['VakıfBank', 'VKF', 7, 7, 0, 21, 4, 20], ['Eczacıbaşı', 'ECZ', 7, 6, 1, 19, 6, 18], ['Fenerbahçe Medicana', 'FEN', 7, 6, 1, 18, 7, 17], ['Türk Hava Yolları', 'THY', 7, 5, 2, 16, 9, 15], ['Galatasaray Daikin', 'GS', 7, 4, 3, 14, 12, 12], ['Aras Kargo', 'ARS', 7, 4, 3, 13, 12, 11],
    ['Nilüfer Belediyespor', 'NİL', 7, 3, 4, 12, 14, 9], ['Beşiktaş', 'BJK', 7, 3, 4, 11, 14, 9], ['Kuzeyboru', 'KZB', 7, 2, 5, 10, 16, 7], ['Göztepe', 'GÖZ', 7, 2, 5, 9, 17, 6], ['Bahçelievler', 'BHÇ', 7, 1, 6, 7, 19, 4], ['İlbank', 'İLB', 7, 1, 6, 6, 19, 3]];
  LIG['efeler'].tablo = [['Halkbank', 'HAL', 7, 6, 1, 19, 6, 18], ['Ziraat Bankkart', 'ZRT', 7, 6, 1, 18, 7, 17], ['Arkas Spor', 'ARK', 7, 5, 2, 16, 9, 15], ['Fenerbahçe', 'FB', 7, 4, 3, 14, 11, 12], ['Galatasaray', 'GS', 7, 4, 3, 13, 12, 11], ['Spor Toto', 'TOT', 7, 3, 4, 12, 13, 9]];
  LIG['cev-sl'].tablo = [['VakıfBank', 'VKF', 2, 2, 0, 6, 1, 6], ['Conegliano', 'CON', 2, 2, 0, 6, 2, 6], ['Fenerbahçe Medicana', 'FEN', 2, 2, 0, 6, 2, 5], ['Eczacıbaşı', 'ECZ', 2, 1, 1, 4, 3, 3], ['Milano', 'MIL', 2, 1, 1, 3, 4, 3], ['Łódź', 'LOD', 2, 0, 2, 1, 6, 0]];

  /* ---------- maçlar ----------
     kaynak: public fikstur.html (Süper Lig 13–16. hafta, günleriyle), canli-skor.html (bugünün canlı ve biten maçları), futbol.html (1. Lig), avrupa-ligleri.html,
     basketbol.html, voleybol.html, milli-takim.html, takım sayfaları (son maçlar ve fikstür). Haberden gün: Bayern–Leverkusen (21 Kas), Arkas–Galatasaray (22 Kas), Ziraat–Halkbank (23 Kas).
     [gün (yyyymmdd), lig, hafta, saat ya da dakika, ev, skor ("–" oynanmadı), deplasman, hal c canlı · m maç sonu · b başlayacak, ek {g: gün gizli, k: hafta sitede eksik}] */
  var M = [
    [20261101, 'super-lig', '11. hafta', 'MS', 'Amedspor', '1 – 1', 'Trabzonspor', 'm', { g: 1, k: 1 }],
    [20261108, 'super-lig', '12. hafta', 'MS', 'Galatasaray', '2 – 0', 'Antalyaspor', 'm', { g: 1, k: 1 }], [20261108, 'super-lig', '12. hafta', 'MS', 'Alanyaspor', '1 – 2', 'Fenerbahçe', 'm', { g: 1, k: 1 }],
    [20261108, 'super-lig', '12. hafta', 'MS', 'Gaziantep FK', '0 – 1', 'Beşiktaş', 'm', { g: 1, k: 1 }], [20261108, 'super-lig', '12. hafta', 'MS', 'Trabzonspor', '2 – 0', 'Kocaelispor', 'm', { g: 1, k: 1 }],
    [20261113, 'super-lig', '13. hafta', '20.00', 'Samsunspor', '1 – 0', 'Antalyaspor', 'm'],
    [20261114, 'super-lig', '13. hafta', '14.30', 'Konyaspor', '2 – 1', 'Rizespor', 'm'], [20261114, 'super-lig', '13. hafta', '17.00', 'Beşiktaş', '2 – 2', 'Trabzonspor', 'm'], [20261114, 'super-lig', '13. hafta', '20.00', 'Fenerbahçe', '3 – 1', 'Göztepe', 'm'],
    [20261115, 'super-lig', '13. hafta', '14.30', 'Alanyaspor', '0 – 0', 'Kasımpaşa', 'm'], [20261115, 'super-lig', '13. hafta', '17.00', 'Başakşehir', '2 – 1', 'Amedspor', 'm'], [20261115, 'super-lig', '13. hafta', '19.00', 'Kayserispor', '0 – 3', 'Galatasaray', 'm'],
    [20261116, 'super-lig', '13. hafta', '19.00', 'Kocaelispor', '1 – 1', 'Eyüpspor', 'm'], [20261116, 'super-lig', '13. hafta', '20.00', 'Gaziantep FK', '2 – 0', 'Gençlerbirliği', 'm'],
    [20261118, 'sampiyonlar-ligi', '4. hafta', 'MS', 'Galatasaray', '2 – 0', 'Club Brugge', 'm', { g: 1 }], [20261118, 'avrupa-ligi', '4. hafta', 'MS', 'Fenerbahçe', '2 – 1', 'Lyon', 'm', { g: 1 }],
    [20261118, 'konferans-ligi', '4. hafta', 'MS', 'Beşiktaş', '1 – 1', 'Fiorentina', 'm', { g: 1 }],
    [20261120, 'super-lig', '14. hafta', '20.00', 'Rizespor', '1 – 0', 'Kocaelispor', 'm'],
    [20261121, 'super-lig', '14. hafta', '14.30', 'Gaziantep FK', '2 – 2', 'Alanyaspor', 'm'], [20261121, 'super-lig', '14. hafta', '17.00', 'Trabzonspor', '1 – 1', 'Başakşehir', 'm'], [20261121, 'super-lig', '14. hafta', '20.00', 'Samsunspor', '2 – 0', 'Göztepe', 'm'],
    [20261121, 'bundesliga', '12. hafta', 'MS', 'Bayern München', '3 – 1', 'Bayer Leverkusen', 'm'],
    [20261122, 'la-liga', '14. hafta', 'MS', 'Real Madrid', '2 – 0', 'Valencia', 'm', { g: 1 }],
    [20261122, 'super-lig', '14. hafta', '14.30', 'Amedspor', '1 – 0', 'Kayserispor', 'm'], [20261122, 'super-lig', '14. hafta', '17.00', 'Eyüpspor', '0 – 2', 'Beşiktaş', 'm'], [20261122, 'super-lig', '14. hafta', '20.00', 'Gençlerbirliği', '1 – 3', 'Antalyaspor', 'm'],
    [20261122, 'efeler', '8. hafta', 'MS', 'Arkas Spor', '3 – 2', 'Galatasaray', 'm'],
    [20261123, 'super-lig', '14. hafta', '67\'', 'Galatasaray', '2 – 1', 'Fenerbahçe', 'c'], [20261123, 'super-lig', '14. hafta', '20.00', 'Kasımpaşa', '–', 'Konyaspor', 'b'],
    [20261123, '1-lig', '13. hafta', '54\'', 'Bodrum FK', '0 – 0', 'Sakaryaspor', 'c'],
    [20261123, 'serie-a', '13. hafta', '58\'', 'Juventus', '1 – 1', 'Napoli', 'c'], [20261123, 'premier-lig', '13. hafta', '23.00', 'Liverpool', '–', 'Chelsea', 'b'],
    [20261123, 'bsl', '9. hafta', '4. Ç', 'Anadolu Efes', '78 – 71', 'Fenerbahçe Beko', 'c'], [20261123, 'bsl', '9. hafta', 'MS', 'Beşiktaş', '84 – 80', 'Türk Telekom', 'm'],
    [20261123, 'kbsl', '', 'MS', 'Fenerbahçe Opet', '76 – 69', 'ÇBK Mersin', 'm'],
    [20261123, 'sultanlar', '8. hafta', '3. S', 'Fenerbahçe Medicana', '2 – 0', 'Türk Hava Yolları', 'c'], [20261123, 'sultanlar', '8. hafta', '20.00', 'VakıfBank', '–', 'Eczacıbaşı', 'b'],
    [20261123, 'efeler', '8. hafta', 'MS', 'Ziraat Bankkart', '1 – 3', 'Halkbank', 'm'],
    [20261123, 'davis', '', '3. S', 'Jannik Sinner', '1 – 1', 'Francisco Cerúndolo', 'c'], [20261123, 'davis', '', 'MS', 'Alexander Zverev', '2 – 1', 'Alex de Minaur', 'm'],
    [20261123, 'valorant', '', '3. H', 'FUT Esports', '1 – 1', 'BBL Esports', 'c'],
    [20261124, 'eurocup', '', '20.00', 'Türk Telekom', '–', 'Ulm', 'b'], [20261124, 'eurocup', '', '20.30', 'Bahçeşehir Koleji', '–', 'Bourg', 'b'],
    [20261124, 'sampiyonlar-ligi', '5. hafta', '20.45', 'Galatasaray', '–', 'Atlético Madrid', 'b'], [20261124, 'sampiyonlar-ligi', '5. hafta', '23.00', 'Arsenal', '–', 'Bayern München', 'b'],
    [20261125, 'sampiyonlar-ligi', '5. hafta', '23.00', 'Real Madrid', '–', 'Liverpool', 'b'], [20261125, 'sampiyonlar-ligi', '5. hafta', '23.00', 'Inter', '–', 'Manchester City', 'b'],
    [20261126, 'milli-basket', '', '20.00', 'Türkiye', '–', 'Macaristan', 'b'], [20261126, 'euroleague', '13. hafta', '20.45', 'Fenerbahçe Beko', '–', 'Olympiakos', 'b'],
    [20261126, 'avrupa-ligi', '', '20.45', 'Fenerbahçe', '–', 'Porto', 'b'], [20261126, 'euroleague', '13. hafta', '21.45', 'Real Madrid', '–', 'Anadolu Efes', 'b'],
    [20261126, 'konferans-ligi', '', '23.00', 'Fiorentina', '–', 'Beşiktaş', 'b'],
    [20261127, 'super-lig', '15. hafta', '20.00', 'Kayserispor', '–', 'Rizespor', 'b'],
    [20261128, 'sultanlar', '9. hafta', '14.00', 'Eczacıbaşı', '–', 'Galatasaray Daikin', 'b'], [20261128, 'super-lig', '15. hafta', '14.30', 'Gençlerbirliği', '–', 'Kocaelispor', 'b'],
    [20261128, 'super-lig', '15. hafta', '17.00', 'Beşiktaş', '–', 'Samsunspor', 'b'], [20261128, 'sultanlar', '9. hafta', '17.00', 'Türk Hava Yolları', '–', 'VakıfBank', 'b'],
    [20261128, 'super-lig', '15. hafta', '20.00', 'Fenerbahçe', '–', 'Trabzonspor', 'b'],
    [20261129, 'sultanlar', '9. hafta', '13.00', 'Beşiktaş', '–', 'Fenerbahçe Medicana', 'b'], [20261129, 'super-lig', '15. hafta', '14.30', 'Göztepe', '–', 'Eyüpspor', 'b'],
    [20261129, 'sultanlar', '9. hafta', '16.00', 'Aras Kargo', '–', 'Nilüfer Belediyespor', 'b'], [20261129, 'super-lig', '15. hafta', '17.00', 'Antalyaspor', '–', 'Amedspor', 'b'],
    [20261129, 'super-lig', '15. hafta', '19.00', 'Başakşehir', '–', 'Galatasaray', 'b'], [20261129, 'milli-basket', '', '21.00', 'Bosna Hersek', '–', 'Türkiye', 'b'],
    [20261130, 'super-lig', '15. hafta', '19.00', 'Alanyaspor', '–', 'Gaziantep FK', 'b'], [20261130, 'super-lig', '15. hafta', '20.00', 'Konyaspor', '–', 'Kasımpaşa', 'b'],
    [20261201, 'milli-kadin', '', '17.00', 'Türkiye', '–', 'Romanya', 'b'],
    [20261202, 'turkiye-kupasi', '', '15.00', 'Trabzonspor', '–', 'Sakaryaspor', 'b'],
    [20261204, 'super-lig', '16. hafta', '20.00', 'Trabzonspor', '–', 'Göztepe', 'b'],
    [20261205, 'super-lig', '16. hafta', '14.30', 'Kocaelispor', '–', 'Kayserispor', 'b'], [20261205, 'super-lig', '16. hafta', '17.00', 'Eyüpspor', '–', 'Alanyaspor', 'b'], [20261205, 'super-lig', '16. hafta', '20.00', 'Galatasaray', '–', 'Konyaspor', 'b'],
    [20261206, 'super-lig', '16. hafta', '14.30', 'Rizespor', '–', 'Gençlerbirliği', 'b'], [20261206, 'super-lig', '16. hafta', '17.00', 'Amedspor', '–', 'Gaziantep FK', 'b'], [20261206, 'super-lig', '16. hafta', '19.00', 'Samsunspor', '–', 'Fenerbahçe', 'b'],
    [20261207, 'super-lig', '16. hafta', '19.00', 'Kasımpaşa', '–', 'Başakşehir', 'b'], [20261207, 'super-lig', '16. hafta', '20.00', 'Antalyaspor', '–', 'Beşiktaş', 'b'],
    [20270326, 'milli-futbol', '', '20.45', 'Türkiye', '–', 'Japonya', 'b'], [20270330, 'milli-futbol', '', '21.45', 'Portekiz', '–', 'Türkiye', 'b']
  ].map(function(r){ var o = r[8] || {}; return { t: r[0], lig: r[1], hafta: r[2], dk: r[3], ev: r[4], skor: r[5], dep: r[6], hal: r[7], gizli: !!o.g, kismi: !!o.k, b: LIG[r[1]].b }; });

  /* ---------- takımlar (sayfası olan dört kulüp) ----------
     kaynak: public galatasaray.html, fenerbahce.html, besiktas.html, trabzonspor.html (künye, kadro, haberler); sıra · puan · galibiyet · gol sözlük puan tablosundan (13 hafta)
     [oyuncu, no, mevki, yaş, maç, gol] */
  var TAKIM = {
    galatasaray: { ad: 'Galatasaray', kod: 'GS', ust: 'Süper Lig · 1905 · İstanbul', g: 'superlig', toplam: 148, kadro: [['Emre Aksoy', 1, 'Kaleci', 29, 14, 0], ['Kaan Yıldırım', 2, 'Defans', 26, 13, 0], ['Davide Moretti', 4, 'Defans', 28, 12, 1], ['Burak Sezer', 5, 'Defans', 24, 11, 0], ['Lucas Ferreira', 3, 'Defans', 27, 14, 1], ['Arda Karaca', 6, 'Orta saha', 23, 13, 0], ['Mateo Rivas', 8, 'Orta saha', 27, 12, 2], ['Yunus Aydın', 10, 'Orta saha', 25, 11, 3], ['Oğuz Tan', 20, 'Orta saha', 21, 14, 1], ['Victor Mendes', 9, 'Forvet', 30, 13, 9], ['Barış Er', 11, 'Forvet', 22, 12, 4], ['Ilias Benali', 7, 'Forvet', 26, 11, 6]] },
    fenerbahce: { ad: 'Fenerbahçe', kod: 'FB', ust: 'Süper Lig · 1907 · İstanbul', g: '', toplam: 139, kadro: [['Mert Doğan', 1, 'Kaleci', 31, 14, 0], ['Sami Okur', 2, 'Defans', 27, 13, 0], ['Nikola Petrović', 4, 'Defans', 29, 12, 1], ['Efe Çınar', 5, 'Defans', 22, 11, 0], ['Jonas Lindqvist', 3, 'Defans', 28, 14, 1], ['İsmail Kurt', 6, 'Orta saha', 25, 13, 0], ['Rafael Costa', 8, 'Orta saha', 28, 12, 2], ['Taylan Er', 10, 'Orta saha', 24, 11, 3], ['Deniz Ateş', 17, 'Orta saha', 20, 14, 1], ['Edin Hadžić', 9, 'Forvet', 29, 13, 9], ['Kerem Uslu', 11, 'Forvet', 23, 12, 4], ['Youssef Amrani', 7, 'Forvet', 27, 11, 6]] },
    besiktas: { ad: 'Beşiktaş', kod: 'BJK', ust: 'Süper Lig · 1903 · İstanbul', g: '', toplam: 130, kadro: [['Ozan Bilgin', 1, 'Kaleci', 30, 14, 0], ['Halil Ekinci', 2, 'Defans', 25, 13, 0], ['Marko Ilić', 4, 'Defans', 27, 12, 1], ['Can Uysal', 5, 'Defans', 23, 11, 0], ['Tiago Neves', 3, 'Defans', 26, 14, 1], ['Furkan Ay', 6, 'Orta saha', 24, 13, 0], ['Ben Okafor', 8, 'Orta saha', 27, 12, 2], ['Serkan Toprak', 10, 'Orta saha', 26, 11, 3], ['Ege Kalkan', 18, 'Orta saha', 20, 14, 1], ['Andrés Ruiz', 9, 'Forvet', 29, 13, 9], ['Emir Tunç', 11, 'Forvet', 22, 12, 4], ['Malik Diallo', 7, 'Forvet', 25, 11, 6]] },
    trabzonspor: { ad: 'Trabzonspor', kod: 'TS', ust: 'Süper Lig · 1967 · Trabzon', g: '', toplam: 121, kadro: [['Ufuk Kara', 1, 'Kaleci', 28, 14, 0], ['Onur Yazıcı', 2, 'Defans', 26, 13, 0], ['Stefan Novak', 4, 'Defans', 30, 12, 1], ['Yiğit Şahin', 5, 'Defans', 22, 11, 0], ['Paulo Araújo', 3, 'Defans', 27, 14, 1], ['Batuhan Koç', 6, 'Orta saha', 24, 13, 0], ['Erik Larsen', 8, 'Orta saha', 26, 12, 2], ['Umut Demirel', 10, 'Orta saha', 25, 11, 3], ['Alper Su', 16, 'Orta saha', 19, 14, 1], ['Karim Mansour', 9, 'Forvet', 28, 13, 9], ['Berk Ural', 11, 'Forvet', 23, 12, 4], ['Diego Salas', 7, 'Forvet', 26, 11, 6]] }
  };
  var SAYFA = { 'Galatasaray': 'galatasaray', 'Fenerbahçe': 'fenerbahce', 'Beşiktaş': 'besiktas', 'Trabzonspor': 'trabzonspor' };

  /* ---------- transfer ---------- kaynak: public transfer.html (futbol 8), basketbol.html, voleybol.html, avrupa-ligleri.html (4'er) · [kod, kulüp, hareket, durum] */
  var TRANSFER = {
    futbol: [['GS', 'Galatasaray', 'Sol beke dört yıllık imza', 'Resmî'], ['FB', 'Fenerbahçe', 'Orta saha için teklif yapıldı', 'Görüşme'], ['TS', 'Trabzonspor', 'Genç forvet kiralık gitti', 'Resmî'], ['BJK', 'Beşiktaş', 'Kaleci için iki aday var', 'Söylenti'],
      ['SAM', 'Samsunspor', 'Kanat transferi resmîleşti', 'Resmî'], ['GÖZ', 'Göztepe', 'Stoper için görüşme sürüyor', 'Görüşme'], ['BAŞ', 'Başakşehir', 'Orta sahayla sözleşme uzadı', 'Resmî'], ['KON', 'Konyaspor', 'Forvet için Almanya iddiası', 'Söylenti']],
    basketbol: [['FBB', 'Fenerbahçe Beko', 'Fenerbahçe Beko\'ya yeni uzun oyuncu', 'Görüşme'], ['AEF', 'Anadolu Efes', 'Anadolu Efes guard rotasyonu için imza attı', 'Resmî'], ['BJK', 'Beşiktaş', 'Beşiktaş kısa süreli sözleşmeyle pivot aldı', 'Resmî'], ['TTK', 'Türk Telekom', 'Türk Telekom\'da başantrenör için iki aday', 'Söylenti']],
    voleybol: [['VKF', 'VakıfBank', 'VakıfBank\'a ara transferde pasör takviyesi', 'Görüşme'], ['FEN', 'Fenerbahçe Medicana', 'Fenerbahçe Medicana orta oyuncuyla sözleşme uzattı', 'Resmî'], ['HAL', 'Halkbank', 'Halkbank\'ta yabancı smaçörle yollar ayrıldı', 'Resmî'], ['ECZ', 'Eczacıbaşı', 'Eczacıbaşı libero için Avrupa\'dan iki ismi izliyor', 'Söylenti']],
    /* kaynak: public super-lig.html "Transfer" kutusu (4 hareket) */
    'super-lig': [['FB', 'Fenerbahçe', 'Orta saha için Portekiz\'den teklif', 'Görüşme'], ['GS', 'Galatasaray', 'Sol bek transferinde imzalar atıldı', 'Resmî'], ['TS', 'Trabzonspor', 'Genç forvet kiralık gönderildi', 'Resmî'], ['BJK', 'Beşiktaş', 'Kaleci için iki aday listede', 'Söylenti']],
    avrupa: [['RMA', 'Real Madrid', 'Real Madrid sağ bek için ocak ayını bekliyor', 'Söylenti'], ['MUN', 'Manchester United', 'Manchester United orta saha transferini açıkladı', 'Resmî'], ['JUV', 'Juventus', 'Juventus forvet için Premier Lig\'den teklif aldı', 'Görüşme'], ['BAY', 'Bayern München', 'Bayern genç stoperin sözleşmesini uzattı', 'Resmî']]
  };
  var TDURUM = { 'Resmî': ['fa-file-signature', 'yesil'], 'Görüşme': ['fa-handshake', 'sari'], 'Söylenti': ['fa-comment-dots', ''] };

  /* ---------- haberler ----------
     kaynak: ilgili public sayfanın haber listesi (alt etiket, başlık, süre, görüntülenme, yazar); saat sözlükten (bugün saat, öncesi tarih). [alt, başlık, yazar, süre, izlenme, saat] */
  function H(l){ return l.map(function(r){ return foto({ alt: r[0], baslik: r[1], yazar: r[2], sure: r[3], izlenme: r[4], saat: r[5], ikon: 'fa-futbol' }); }); }
  function foto(h){ var t = (h.alt + ' ' + h.baslik).toLocaleLowerCase('tr');
    if (/basket|bsl|euroleague|eurocup|12 dev|nba|tofaş|efes|beko|opet|çbk|gençler ligi/.test(t)) { h.g = 'basket'; h.ikon = 'fa-basketball'; }
    else if (/voleybol|sultanlar|efeler|filenin|cev|vakıfbank|eczacıbaşı|halkbank|medicana|türk hava yolları|genç kızlar/.test(t)) { h.g = 'voleybol'; h.ikon = 'fa-volleyball'; }
    else if (/tenis|zverev|e-spor|eternal fire/.test(t)) { h.ikon = 'fa-medal'; }
    else if (/antrenman|sağlık|sakat|kadro|ilk 11|kamp|altyapı|u19|u17|tesis|kadın|kafile|eksik/.test(t)) h.g = 'antrenman';
    else if (/millî|euro 2028|futsal|ümit/.test(t)) h.g = 'milli';
    else h.g = 'superlig';
    return h; }
  var HABER = {
    futbol: H([['Süper Lig', 'Galatasaray–Fenerbahçe derbisinde iki takım da ilk 11\'ini açıkladı', 'Burak Tan', '3 dk', '14,2 B', '11.00'], ['Süper Lig', 'Trabzonspor Başakşehir deplasmanından bir puanla döndü', 'Gizem Aktaş', '4 dk', '9,6 B', '14.20'],
      ['1. Lig', '1. Lig\'de zirve yarışında üç takım aynı puanda', 'Gizem Aktaş', '2 dk', '8,1 B', '12.10'], ['Avrupa', 'Şampiyonlar Ligi\'nde 5. hafta maçlarının hakemleri belli oldu', 'Burak Tan', '3 dk', '6,7 B', '22 Kas'],
      ['Millî Takım', 'A Millî Takım\'ın mart ayındaki hazırlık maçlarının rakipleri açıklandı', 'Burak Tan', '5 dk', '14,2 B', '12.25'], ['Süper Lig', 'VAR kayıtları 14. hafta için kamuoyuyla paylaşıldı', 'Murat Tekin', '2 dk', '4,8 B', '22 Kas'],
      ['Kadın Futbolu', 'Kadın Futbol Süper Ligi\'nde ilk yarının programı tamamlandı', 'Gizem Aktaş', '3 dk', '3,6 B', '21 Kas'], ['Altyapı', 'U19 Ligi\'nde gol krallığı yarışı sıkıştı', 'Gizem Aktaş', '4 dk', '2,9 B', '21 Kas']]),
    'super-lig': H([['Derbi', 'Galatasaray ile Fenerbahçe derbide ilk 11\'lerini açıkladı', 'Murat Tekin', '4 dk', '14,2 B', '09.30'], ['Samsunspor', 'Samsunspor Göztepe\'yi 2-0 yenerek altıncılığa yükseldi', 'Gizem Aktaş', '2 dk', '8,1 B', '10.25'],
      ['Hakem', '15. haftanın hakem atamaları açıklandı', 'Gizem Aktaş', '3 dk', '6,7 B', '06.50'], ['Transfer', 'Ara transfer döneminin tarihleri belli oldu', 'Murat Tekin', '5 dk', '5,9 B', '22 Kas'],
      ['Trabzonspor', 'Trabzonspor\'da sakat oyuncuların dönüş tarihi netleşti', 'Gizem Aktaş', '2 dk', '4,8 B', '22 Kas'], ['TFF', 'Kulüp lisans kriterlerinde yeni mali denetim takvimi', 'Murat Tekin', '3 dk', '3,6 B', '22 Kas'],
      ['Seyirci', 'Süper Lig\'de seyirci ortalaması geçen sezonu geride bıraktı', 'Burak Tan', '4 dk', '2,9 B', '21 Kas'], ['Gençlerbirliği', 'Gençlerbirliği\'nde teknik direktörle yollar ayrıldı', 'Burak Tan', '3 dk', '14,2 B', '21 Kas']]),
    '1-lig': H([['1. Lig', '1. Lig\'de zirve yarışında üç takım aynı puanda', 'Gizem Aktaş', '2 dk', '8,1 B', '12.10'], ['1. Lig', '1. Lig\'de ilk iki sıra için dört takım yarışıyor', 'Burak Tan', '3 dk', '14,2 B', '22 Kas']]),
    'turkiye-kupasi': H([['Trabzonspor', 'Kupa maçında rakip Sakaryaspor', 'Gizem Aktaş', '5 dk', '5,9 B', '12.15'], ['Türkiye Kupası', 'Türkiye Kupası grup aşaması kurası yapıldı', 'Burak Tan', '3 dk', '14,2 B', '22 Kas']]),
    'premier-lig': H([['Premier Lig', 'Premier Lig\'de zirvede fark üç puana indi', 'Murat Tekin', '3 dk', '6,7 B', '11.15'], ['Premier Lig', 'Premier Lig\'de Arsenal üç puan önde', 'Burak Tan', '4 dk', '9,6 B', '22 Kas']]),
    'la-liga': H([['La Liga', 'La Liga\'da 14. haftanın ardından liderlik el değiştirdi', 'Murat Tekin', '5 dk', '5,9 B', '13.35']]),
    'serie-a': H([['Serie A', 'Serie A\'da Türk oyuncular hafta sonu dört gol attı', 'Gizem Aktaş', '2 dk', '4,8 B', '22 Kas']]),
    'bundesliga': H([['Bundesliga', 'Bundesliga\'da Bayern farkı beş puana çıkardı', 'Burak Tan', '3 dk', '3,6 B', '22 Kas'], ['Bundesliga', 'Bundesliga\'da Bayern Leverkusen\'i 3-1 mağlup etti', 'Emre Sönmez', '4 dk', '9,6 B', '21 Kas']]),
    'sampiyonlar-ligi': H([['Şampiyonlar Ligi', 'Şampiyonlar Ligi\'nde 5. hafta salı akşamı başlıyor', 'Murat Tekin', '2 dk', '14,2 B', '07.10'], ['Galatasaray', 'Atlético Madrid maçının biletleri satışa çıktı', 'Burak Tan', '4 dk', '9,6 B', '06.55'],
      ['Şampiyonlar Ligi', 'Şampiyonlar Ligi\'nde 5. hafta maçlarının hakemleri belli oldu', 'Burak Tan', '3 dk', '6,7 B', '22 Kas']]),
    'avrupa-ligi': H([['Fenerbahçe', 'Porto maçı öncesi kadroda iki eksik', 'Burak Tan', '2 dk', '8,1 B', '11.30'], ['Avrupa Ligi', 'Avrupa Ligi\'nde Türk takımlarının maç saatleri netleşti', 'Gizem Aktaş', '4 dk', '2,9 B', '22 Kas']]),
    'konferans-ligi': H([['Beşiktaş', 'Fiorentina deplasmanı için kafile belli oldu', 'Murat Tekin', '3 dk', '6,7 B', '10.15'], ['Konferans Ligi', 'Konferans Ligi\'nde son iki haftanın programı açıklandı', 'Burak Tan', '3 dk', '14,2 B', '21 Kas']]),
    basketbol: H([['BSL', 'Basketbol Süper Ligi\'nde 9. hafta Efes–Fenerbahçe maçıyla kapanıyor', 'Gizem Aktaş', '4 dk', '14,2 B', '11.35'], ['EuroLeague', 'Fenerbahçe Beko çift maç haftasında iki galibiyet aldı', 'Murat Tekin', '2 dk', '8,1 B', '15.15'],
      ['Millî Takım', '12 Dev Adam\'ın Macaristan maçı kadrosu açıklandı', 'Emre Sönmez', '3 dk', '14,2 B', '11.30'], ['Kadınlar', 'ÇBK Mersin EuroLeague Women\'da gruptan çıkmayı garantiledi', 'Murat Tekin', '5 dk', '5,9 B', '22 Kas'],
      ['NBA', 'NBA\'de Houston Rockets deplasmanda üst üste üçüncü galibiyetini aldı', 'Murat Tekin', '2 dk', '4,8 B', '22 Kas'], ['BSL', 'Tofaş\'ta başantrenörün sözleşmesi iki yıl uzatıldı', 'Emre Sönmez', '3 dk', '3,6 B', '22 Kas'],
      ['EuroCup', 'Türk Telekom EuroCup\'ta grup liderliğini korudu', 'Emre Sönmez', '4 dk', '2,9 B', '21 Kas'], ['Altyapı', 'Gençler Ligi\'nde final etabı Ankara\'da oynanacak', 'Burak Tan', '3 dk', '14,2 B', '21 Kas']]),
    bsl: H([['BSL', 'Basketbol Süper Ligi\'nde 9. hafta Efes–Fenerbahçe maçıyla kapanıyor', 'Gizem Aktaş', '4 dk', '14,2 B', '11.35'], ['Basketbol', 'Beşiktaş Türk Telekom\'u 84-80 geçti', 'Murat Tekin', '2 dk', '4,8 B', '15.45'],
      ['Basketbol', 'Fenerbahçe Beko tek mağlubiyetle liderliğini sürdürüyor', 'Gizem Aktaş', '3 dk', '3,6 B', '15.45'], ['BSL', 'Tofaş\'ta başantrenörün sözleşmesi iki yıl uzatıldı', 'Emre Sönmez', '3 dk', '3,6 B', '22 Kas']]),
    euroleague: H([['EuroLeague', 'Fenerbahçe Beko çift maç haftasında iki galibiyet aldı', 'Murat Tekin', '2 dk', '8,1 B', '15.15'], ['Basketbol', 'Fenerbahçe Beko EuroLeague\'de Olympiakos\'u ağırlıyor', 'Burak Tan', '3 dk', '14,2 B', '21 Kas']]),
    eurocup: H([['EuroCup', 'Türk Telekom EuroCup\'ta grup liderliğini korudu', 'Emre Sönmez', '4 dk', '2,9 B', '21 Kas']]),
    kbsl: H([['Basketbol', 'Fenerbahçe Opet ÇBK Mersin\'i 76-69 yendi', 'Burak Tan', '3 dk', '3,6 B', '22 Kas']]),
    voleybol: H([['Sultanlar Ligi', 'VakıfBank ile Eczacıbaşı sezonun ilk zirve maçında karşılaşıyor', 'Burak Tan', '2 dk', '14,2 B', '08.25'], ['Efeler Ligi', 'Halkbank deplasmanda Ziraat Bankkart\'ı 3-1 yendi', 'Burak Tan', '3 dk', '14,2 B', '11.10'],
      ['CEV', 'Fenerbahçe Medicana Şampiyonlar Ligi\'nde ikinci maçını kazandı', 'Murat Tekin', '5 dk', '5,9 B', '12.30'], ['Millî Takım', 'Filenin Sultanları\'nın 2027 hazırlık programı açıklandı', 'Gizem Aktaş', '2 dk', '8,1 B', '22 Kas'],
      ['Sultanlar Ligi', 'Türk Hava Yolları üst üste dördüncü galibiyetini aldı', 'Gizem Aktaş', '3 dk', '3,6 B', '22 Kas'], ['Efeler Ligi', 'Arkas Spor beş setlik maçta Galatasaray\'ı geçti', 'Emre Sönmez', '4 dk', '2,9 B', '22 Kas'],
      ['Plaj Voleybolu', 'Plaj voleybolunda 2027 sezon takvimi yayımlandı', 'Burak Tan', '3 dk', '14,2 B', '21 Kas'], ['Altyapı', 'Genç kızlar millî takımı Balkan Şampiyonası\'nda ikinci oldu', 'Burak Tan', '4 dk', '9,6 B', '21 Kas']]),
    sultanlar: H([['Sultanlar Ligi', 'VakıfBank ile Eczacıbaşı sezonun ilk zirve maçında karşılaşıyor', 'Burak Tan', '2 dk', '14,2 B', '08.25'], ['Sultanlar Ligi', 'Türk Hava Yolları üst üste dördüncü galibiyetini aldı', 'Gizem Aktaş', '3 dk', '3,6 B', '22 Kas'],
      ['Voleybol', 'Sultanlar Ligi\'nde VakıfBank namağlup ilerliyor', 'Murat Tekin', '4 dk', '2,9 B', '22 Kas']]),
    efeler: H([['Efeler Ligi', 'Halkbank deplasmanda Ziraat Bankkart\'ı 3-1 yendi', 'Burak Tan', '3 dk', '14,2 B', '11.10'], ['Efeler Ligi', 'Arkas Spor beş setlik maçta Galatasaray\'ı geçti', 'Emre Sönmez', '4 dk', '2,9 B', '22 Kas'],
      ['Efeler Ligi', 'Efeler Ligi\'nde ilk dört sıra iki puanlık aralıkta', 'Gizem Aktaş', '3 dk', '6,7 B', '21 Kas']]),
    'cev-sl': H([['CEV', 'Fenerbahçe Medicana Şampiyonlar Ligi\'nde ikinci maçını kazandı', 'Murat Tekin', '5 dk', '5,9 B', '12.30']]),
    avrupa: H([['Şampiyonlar Ligi', 'Şampiyonlar Ligi\'nde 5. hafta salı akşamı başlıyor', 'Murat Tekin', '2 dk', '14,2 B', '07.10'], ['Premier Lig', 'Premier Lig\'de zirvede fark üç puana indi', 'Murat Tekin', '3 dk', '6,7 B', '11.15'],
      ['La Liga', 'La Liga\'da 14. haftanın ardından liderlik el değiştirdi', 'Murat Tekin', '5 dk', '5,9 B', '13.35'], ['Serie A', 'Serie A\'da Türk oyuncular hafta sonu dört gol attı', 'Gizem Aktaş', '2 dk', '4,8 B', '22 Kas'],
      ['Bundesliga', 'Bundesliga\'da Bayern farkı beş puana çıkardı', 'Burak Tan', '3 dk', '3,6 B', '22 Kas'], ['Avrupa Ligi', 'Avrupa Ligi\'nde Türk takımlarının maç saatleri netleşti', 'Gizem Aktaş', '4 dk', '2,9 B', '22 Kas'],
      ['Konferans Ligi', 'Konferans Ligi\'nde son iki haftanın programı açıklandı', 'Burak Tan', '3 dk', '14,2 B', '21 Kas'], ['UEFA', 'UEFA ülke puanı sıralamasında Türkiye\'nin puanı güncellendi', 'Murat Tekin', '4 dk', '9,6 B', '21 Kas']]),
    milli: H([['Basketbol', '12 Dev Adam\'ın Macaristan maçı kadrosu açıklandı', 'Emre Sönmez', '3 dk', '14,2 B', '11.30'], ['Futbol', 'A Millî Takım\'ın mart ayındaki hazırlık maçlarının rakipleri açıklandı', 'Burak Tan', '5 dk', '14,2 B', '12.25'],
      ['Kadın Futbol', 'Kadın A Millî Takımı Romanya maçı için Antalya\'da kampa girdi', 'Emre Sönmez', '4 dk', '9,6 B', '08.55'], ['Voleybol', 'Filenin Sultanları\'nın 2027 hazırlık programı açıklandı', 'Gizem Aktaş', '2 dk', '8,1 B', '22 Kas'],
      ['U21', 'Ümit Millî Takım eleme grubunu ikinci sırada tamamladı', 'Emre Sönmez', '3 dk', '6,7 B', '22 Kas'], ['Futbol', 'EURO 2028 elemeleri kurası aralık ayında yapılacak', 'Gizem Aktaş', '5 dk', '5,9 B', '22 Kas'],
      ['Kadın Basketbol', 'Kadın basketbol millî takımı EuroBasket elemelerinde iki maçını da kazandı', 'Emre Sönmez', '2 dk', '4,8 B', '21 Kas'], ['Futsal', 'Futsal millî takımı Dünya Kupası elemeleri için kampa başladı', 'Murat Tekin', '3 dk', '3,6 B', '21 Kas']]),
    transfer: H([['Transfer', 'Ara transfer dönemi 5 Ocak\'ta açılıyor', 'Murat Tekin', '3 dk', '14,2 B', '14.05'], ['Galatasaray', 'Galatasaray sol bek transferini KAP\'a bildirdi', 'Murat Tekin', '2 dk', '8,1 B', '15.05'],
      ['Fenerbahçe', 'Fenerbahçe orta saha için Portekiz kulübüyle görüşüyor', 'Burak Tan', '3 dk', '14,2 B', '12.50'], ['Trabzonspor', 'Trabzonspor genç forvetini sezon sonuna kadar kiraladı', 'Gizem Aktaş', '2 dk', '9,6 B', '07.20'],
      ['Beşiktaş', 'Beşiktaş\'ın kaleci listesinde iki isim öne çıkıyor', 'Gizem Aktaş', '5 dk', '8,1 B', '15.40'], ['Kural', 'Yabancı oyuncu kuralında 2027 için değişiklik önerisi', 'Murat Tekin', '3 dk', '6,7 B', '22 Kas'],
      ['Samsunspor', 'Samsunspor kanat transferini resmîleştirdi', 'Murat Tekin', '5 dk', '5,9 B', '21 Kas'], ['Avrupa', 'Avrupa kulüpleri ocak dönemi öncesi bütçe sınırlarını açıkladı', 'Emre Sönmez', '2 dk', '4,8 B', '21 Kas']]),
    canli: H([['Futbol', 'Trabzonspor ile Başakşehir 1-1 berabere kaldı', 'Murat Tekin', '3 dk', '14,2 B', '14.15'], ['Futbol', 'Samsunspor Göztepe\'yi 2-0 yendi', 'Gizem Aktaş', '5 dk', '5,9 B', '10.20'],
      ['Basketbol', 'Beşiktaş Türk Telekom\'u 84-80 geçti', 'Murat Tekin', '2 dk', '4,8 B', '15.45'], ['Basketbol', 'Fenerbahçe Opet ÇBK Mersin\'i 76-69 yendi', 'Burak Tan', '3 dk', '3,6 B', '22 Kas'],
      ['Tenis', 'Zverev Davis Kupası\'nda Almanya\'yı öne geçirdi', 'Gizem Aktaş', '4 dk', '2,9 B', '22 Kas'], ['Voleybol', 'Halkbank deplasmanda Ziraat Bankkart\'ı 3-1 yendi', 'Burak Tan', '3 dk', '14,2 B', '11.10'],
      ['Futbol', 'Bundesliga\'da Bayern Leverkusen\'i 3-1 mağlup etti', 'Emre Sönmez', '4 dk', '9,6 B', '21 Kas'], ['E-Spor', 'Eternal Fire Avrupa elemelerinde Monte\'yi 2-1 geçti', 'Emre Sönmez', '2 dk', '8,1 B', '21 Kas']]),
    galatasaray: H([['Derbi', 'Galatasaray derbi öncesi son antrenmanını yaptı', 'Burak Tan', '3 dk', '14,2 B', '15.10'], ['Şampiyonlar Ligi', 'Atlético Madrid maçının biletleri satışa çıktı', 'Burak Tan', '4 dk', '9,6 B', '06.55'],
      ['Transfer', 'Galatasaray sol bek transferini KAP\'a bildirdi', 'Murat Tekin', '2 dk', '8,1 B', '15.05'], ['Sağlık', 'İki oyuncunun sakatlık durumu açıklandı', 'Burak Tan', '3 dk', '6,7 B', '22 Kas'],
      ['Altyapı', 'U19 takımı UEFA Gençlik Ligi\'nde son 16 turunda', 'Murat Tekin', '5 dk', '5,9 B', '22 Kas'], ['Kadın futbolu', 'Kadın takımı ligde ilk yarıyı lider bitirdi', 'Murat Tekin', '2 dk', '4,8 B', '22 Kas'],
      ['Kulüp', 'Galatasaray olağan genel kurul tarihini açıkladı', 'Burak Tan', '3 dk', '3,6 B', '21 Kas'], ['Basketbol', 'Galatasaray basketbolda Tofaş maçına hazırlanıyor', 'Emre Sönmez', '4 dk', '2,9 B', '21 Kas']]),
    fenerbahce: H([['Derbi', 'Fenerbahçe derbiye üç değişiklikle çıktı', 'Burak Tan', '4 dk', '9,6 B', '13.55'], ['Avrupa Ligi', 'Porto maçı öncesi kadroda iki eksik', 'Burak Tan', '2 dk', '8,1 B', '11.30'],
      ['Transfer', 'Fenerbahçe orta saha için Portekiz kulübüyle görüşüyor', 'Burak Tan', '3 dk', '14,2 B', '12.50'], ['Sağlık', 'Sol bek antrenmanlara bireysel olarak başladı', 'Emre Sönmez', '5 dk', '5,9 B', '22 Kas'],
      ['Altyapı', 'Fenerbahçe altyapısından iki oyuncu U19 millî takımında', 'Murat Tekin', '2 dk', '4,8 B', '22 Kas'], ['Kadın futbolu', 'Kadın takımı deplasmanda 3-0 kazandı', 'Emre Sönmez', '3 dk', '3,6 B', '22 Kas'],
      ['Kulüp', 'Fenerbahçe yeni antrenman sahasını hizmete açtı', 'Emre Sönmez', '4 dk', '2,9 B', '21 Kas'], ['Basketbol', 'Fenerbahçe Beko EuroLeague\'de Olympiakos\'u ağırlıyor', 'Burak Tan', '3 dk', '14,2 B', '21 Kas']]),
    besiktas: H([['Süper Lig', 'Beşiktaş Eyüpspor\'u 2-0 yendi', 'Emre Sönmez', '2 dk', '8,1 B', '12.40'], ['Konferans Ligi', 'Fiorentina deplasmanı için kafile belli oldu', 'Murat Tekin', '3 dk', '6,7 B', '10.15'],
      ['Transfer', 'Beşiktaş\'ın kaleci listesinde iki isim öne çıkıyor', 'Gizem Aktaş', '5 dk', '8,1 B', '15.40'], ['Sağlık', 'Orta sahada sakatlık sonrası dönüş tarihi netleşti', 'Emre Sönmez', '2 dk', '4,8 B', '22 Kas'],
      ['Stadyum', 'Beşiktaş\'ta yeni stadyum yönetimi göreve başladı', 'Burak Tan', '3 dk', '8,1 B', '14.00'], ['Altyapı', 'Beşiktaş U17 takımı turnuvada şampiyon oldu', 'Gizem Aktaş', '4 dk', '2,9 B', '22 Kas'],
      ['Kulüp', 'Beşiktaş kulüp dergisinin yeni sayısı yayımlandı', 'Burak Tan', '3 dk', '14,2 B', '21 Kas'], ['Basketbol', 'Beşiktaş basketbolda Türk Telekom\'u 84-80 yendi', 'Gizem Aktaş', '4 dk', '9,6 B', '21 Kas']]),
    trabzonspor: H([['Süper Lig', 'Trabzonspor Başakşehir deplasmanından bir puanla döndü', 'Gizem Aktaş', '4 dk', '9,6 B', '14.20'], ['Türkiye Kupası', 'Kupa maçında rakip Sakaryaspor', 'Gizem Aktaş', '5 dk', '5,9 B', '12.15'],
      ['Transfer', 'Trabzonspor genç forvetini sezon sonuna kadar kiraladı', 'Gizem Aktaş', '2 dk', '9,6 B', '07.20'], ['Altyapı', 'Trabzonspor altyapısından üç oyuncu A takıma yükseldi', 'Burak Tan', '3 dk', '6,7 B', '22 Kas'],
      ['Sağlık', 'Trabzonspor\'da sakat oyuncuların dönüş tarihi netleşti', 'Gizem Aktaş', '2 dk', '4,8 B', '22 Kas'], ['Tesis', 'Kulüp tesislerinde zemin yenileme tamamlandı', 'Burak Tan', '3 dk', '14,2 B', '22 Kas'],
      ['Kadın futbolu', 'Kadın takımı Süper Lig\'de ikinci sıraya yükseldi', 'Emre Sönmez', '4 dk', '9,6 B', '21 Kas'], ['Kulüp', 'Trabzonspor kombine satışlarını ikinci yarı için açtı', 'Burak Tan', '2 dk', '8,1 B', '21 Kas']]),
    /* kaynak: public takimlar.html "Tüm Takım Haberleri" (8) */
    takimlar: H([['Galatasaray', 'Galatasaray derbi öncesi son antrenmanını yaptı', 'Burak Tan', '3 dk', '14,2 B', '15.10'], ['Fenerbahçe', 'Fenerbahçe\'de iki oyuncu sağlık kontrolünden geçti', 'Burak Tan', '4 dk', '9,6 B', '10.45'],
      ['Beşiktaş', 'Beşiktaş\'ta yeni stadyum yönetimi göreve başladı', 'Burak Tan', '3 dk', '8,1 B', '14.00'], ['Trabzonspor', 'Trabzonspor altyapısından üç oyuncu A takıma yükseldi', 'Burak Tan', '3 dk', '6,7 B', '22 Kas'],
      ['Samsunspor', 'Samsunspor\'da ikinci yarı kombine satışları başladı', 'Gizem Aktaş', '5 dk', '5,9 B', '22 Kas'], ['Göztepe', 'Göztepe yeni antrenman tesisinin temelini attı', 'Gizem Aktaş', '2 dk', '4,8 B', '22 Kas'],
      ['Kocaelispor', 'Kocaelispor\'un teknik ekibine yardımcı antrenör katıldı', 'Gizem Aktaş', '3 dk', '3,6 B', '21 Kas'], ['Eyüpspor', 'Eyüpspor kadın futbol takımı kuracağını açıkladı', 'Emre Sönmez', '4 dk', '2,9 B', '21 Kas']]),
    /* kaynak: public puan-durumu.html "Tüm Lig Haberleri" (8) */
    'puan-durumu': H([['Süper Lig', 'Süper Lig\'de 13 hafta sonunda zirvede fark iki puan', 'Murat Tekin', '5 dk', '14,2 B', '10.30'], ['Süper Lig', 'Küme düşme hattında üç takımı iki puan ayırıyor', 'Emre Sönmez', '2 dk', '4,8 B', '10.50'],
      ['Basketbol', 'Fenerbahçe Beko tek mağlubiyetle liderliğini sürdürüyor', 'Gizem Aktaş', '3 dk', '3,6 B', '15.45'], ['Voleybol', 'Sultanlar Ligi\'nde VakıfBank namağlup ilerliyor', 'Murat Tekin', '4 dk', '2,9 B', '22 Kas'],
      ['1. Lig', '1. Lig\'de ilk iki sıra için dört takım yarışıyor', 'Burak Tan', '3 dk', '14,2 B', '22 Kas'], ['Premier Lig', 'Premier Lig\'de Arsenal üç puan önde', 'Burak Tan', '4 dk', '9,6 B', '22 Kas'],
      ['Kural', 'Süper Lig\'de puan eşitliğinde ikili averaj uygulanıyor', 'Gizem Aktaş', '2 dk', '8,1 B', '21 Kas'], ['Efeler Ligi', 'Efeler Ligi\'nde ilk dört sıra iki puanlık aralıkta', 'Gizem Aktaş', '3 dk', '6,7 B', '21 Kas']]),
    /* kaynak: public fikstur.html "Maç Önü Haberleri" (8) */
    fikstur: H([['15. hafta', 'Süper Lig\'de 15. hafta cuma akşamı Kayseri\'de başlıyor', 'Emre Sönmez', '2 dk', '14,2 B', '09.55'], ['Fenerbahçe', 'Fenerbahçe–Trabzonspor maçının bilet satışı başladı', 'Murat Tekin', '3 dk', '3,6 B', '07.50'],
      ['Galatasaray', 'Başakşehir–Galatasaray maçı için güvenlik toplantısı yapıldı', 'Burak Tan', '4 dk', '2,9 B', '08.10'], ['Türkiye Kupası', 'Türkiye Kupası grup aşaması kurası yapıldı', 'Burak Tan', '3 dk', '14,2 B', '22 Kas'],
      ['Beşiktaş', 'Beşiktaş Samsunspor maçına iki eksikle hazırlanıyor', 'Gizem Aktaş', '4 dk', '9,6 B', '22 Kas'], ['TFF', 'Ocak ayı fikstüründe Avrupa kupası haftaları için düzenleme yapıldı', 'Gizem Aktaş', '2 dk', '8,1 B', '22 Kas'],
      ['Konyaspor', 'Konyaspor–Kasımpaşa maçı pazartesi akşamı oynanacak', 'Murat Tekin', '3 dk', '6,7 B', '21 Kas'], ['Antalyaspor', 'Antalya\'da yağış uyarısı sonrası zemin kontrolü yapıldı', 'Emre Sönmez', '5 dk', '5,9 B', '21 Kas']])
  };
  /* bölüm başına haber toplamı (public sayfaların "n haber bu bölümde" sayısı) */
  var TOPLAM = { futbol: 186, basketbol: 142, voleybol: 118, avrupa: 210, milli: 74, transfer: 136, canli: 312, 'super-lig': 164, takimlar: 164, 'puan-durumu': 128, fikstur: 96 };

  /* ---------- yardımcılar ---------- */
  function kazanan(m){ if (m.hal !== 'm') return null; var p = m.skor.split(' – '); return +p[0] > +p[1] ? 'ev' : +p[0] < +p[1] ? 'dep' : null; }
  /* takım adı iç span'da: uzun ad kitin skor satırında üç noktayla kısalır */
  function skor(m, o){ return skorHam({ dk: m.dk, ev: m.ev, dep: m.dep, skor: m.skor, canli: m.hal === 'c', kazanan: kazanan(m), kisi: m.lig === 'davis' }); }
  /* kitin skor satırı + arma: ev armadan önce ad, deplasman armadan sonra ad (arma skora bakar); kişi (tenis) armasız */
  function skorHam(o){ var a = function(ad){ return o.kisi ? '' : K.arma(ad, 'xs'); };
    return K.skor({ dk: o.dk, ev: '<span>' + o.ev + '</span>' + a(o.ev), dep: a(o.dep) + '<span>' + o.dep + '</span>', skor: o.skor, canli: o.canli, kazanan: o.kazanan }); }
  function ligHref(k){ var l = LIG[k]; if (!l || l.b === 'diger') return ''; if (l.milli) return K.u('ekranlar/icerik/milli-takim.html'); return K.u('ekranlar/icerik/lig.html', 'lig=' + k); }
  function takimHref(ad){ return SAYFA[ad] ? K.u('ekranlar/icerik/takim.html', 'takim=' + SAYFA[ad]) : ''; }
  function sirala(l, ters){ return l.slice().sort(function(a, b){ return ters ? b.t - a.t : a.t - b.t; }); }
  /* lig grubu: katlanır başlık + maç satırları (KİT ADAYI sp-lig; biçim ekranın <style> bloğunda) */
  function ligGrup(k, l, o){ o = o || {}; var L = LIG[k], h = ligHref(k), cn = l.filter(function(m){ return m.hal === 'c'; }).length;
    var alt = [L.ulke, l[0] && l[0].hafta ? l[0].hafta : L.hafta].filter(Boolean).join(' · ');
    var ic = '<span class="sp-lig-i">' + K.I(ligIkon(k)) + '</span><span class="sp-lig-t"><b>' + L.ad + '</b><small>' + alt + '</small></span>';
    return '<section class="sp-lig' + (o.kapali ? ' kapali' : '') + '" data-lig="' + k + '"><div class="sp-lig-b">' + (h ? '<a class="sp-lig-a" href="' + h + '">' + ic + '</a>' : '<span class="sp-lig-a">' + ic + '</span>') +
      '<button type="button" class="sp-lig-ac" aria-expanded="' + !o.kapali + '" aria-label="' + L.ad + ' maçlarını ' + (o.kapali ? 'aç' : 'kapat') + '">' + (cn ? '<span class="canli-nokta"></span>' : '') + l.length + K.I('fa-chevron-down') + '</button></div>' +
      '<div class="sp-lig-l">' + l.map(function(m){ return skor(m); }).join('') + '</div></section>'; }
  /* maçları lige göre gruplar (lig sırası LIG sırası) */
  function ligGruplari(l, o){ return SIRA.map(function(k){ var x = l.filter(function(m){ return m.lig === k; }); return x.length ? ligGrup(k, x, o) : ''; }).join(''); }
  /* gün ayraçlı liste (fikstür/sonuçlar): sol gün (gizli günde hafta), sağ o.sag(m) */
  function gunListe(l, o){ o = o || {}; var s = '', son = null;
    l.forEach(function(m){ var a = m.gizli ? (LIG[m.lig].ad + ' · ' + m.hafta) : tarih(m.t);
      if (a !== son) { var n = l.filter(function(x){ return (x.gizli ? (LIG[x.lig].ad + ' · ' + x.hafta) : tarih(x.t)) === a; }).length;
        s += '<div class="k-ayrac"><span>' + a + (m.t === BUGUN && !m.gizli ? ' · Bugün' : '') + '</span><span>' + (o.sag ? o.sag(m, n) : n + ' maç') + '</span></div>'; son = a; }
      s += skor(m); });
    return s; }
  /* puan tablosu: b → kitin puan tablosu; n → kitin tablo bileşeni, takım hücresi aynı biçimde */
  function tablo(k, vurgu, o){ o = o || {}; var L = LIG[k], T = L.tablo; if (!T) return '';
    if (L.tur !== 'n') { var t = T.map(function(r){ var x = o.gor === 'ic' ? r[7] : o.gor === 'dis' ? r[8] : r.slice(2, 7); return { ad: r[0], kod: r[1], G: x[0], B: x[1], M: x[2], A: x[3], Y: x[4] }; });
      if (o.gor && o.gor !== 'genel') t.sort(function(a, b){ return (3 * b.G + b.B) - (3 * a.G + a.B) || (b.A - b.Y) - (a.A - a.Y) || b.A - a.A; });
      if (o.ilk) t = t.slice(0, o.ilk); return K.puanTablosu(t, vurgu); }
    var v = -1, R = (o.ilk ? T.slice(0, o.ilk) : T).map(function(x, i){ if (x[1] === vurgu) v = i; var av = x[5] - x[6];
      return ['<span class="tk"><em>' + (i + 1) + '</em>' + K.arma(x[0], 's', x[1]) + x[0] + '</span>', x[2], x[3], x[4], (av > 0 ? '+' : '') + av, x[7]]; });
    return K.tablo({ sutunlar: ['Takım', 'O', 'G', 'M', 'AV', 'P'], satirlar: R, vurgu: v, sonKalin: true }); }
  /* puan tablosunda satır → takım sayfası (yalnız sayfası olan dört kulüp; futbol tablolarında) */
  function tabloBagla(kap, k){ if (!kap || LIG[k].b !== 'futbol') return; kap.querySelectorAll('tbody tr').forEach(function(tr){ var ad = tr.querySelector('.tk'); ad = ad ? ad.lastChild.textContent : '';
      var h = takimHref(ad); if (h) { tr.setAttribute('data-href', h); tr.style.cursor = 'pointer'; } }); }
  /* aynı sayfanın sekmesine giden bağlantı (?sekme=x): sekmeli ekranda yerinde açılır; href gerçek adres kalır (ölü bağlantı yok) */
  function sekmeHref(yol, ek, sekme){ return K.u(yol, (ek ? ek + '&' : '') + 'sekme=' + sekme); }
  function sekmeYakala(e, ac){ e.addEventListener('click', function(ev){ var a = ev.target.closest('a[href*="sekme="]'); if (!a) return;
    var u = new URL(a.href, location.href); if (u.pathname !== location.pathname) return; ev.preventDefault(); ac(u.searchParams.get('sekme')); }); }
  /* transfer satırı (KİT ADAYI sp-tr) */
  function transfer(r){ var d = TDURUM[r[3]];
    return '<a class="sp-tr" href="' + K.git('detay') + '">' + K.arma(r[1], 'm', r[0]) + '<span class="t"><b>' + r[2] + '</b><small>' + r[1] + '</small></span>' + K.etiket(r[3], { tur: d[1], ikon: d[0] }) + '</a>'; }
  function haberler(l){ return '<div class="k-satirlar">' + l.map(function(h){ return K.satir(h); }).join('') + '</div>'; }
  /* takımın maçları (futbol) */
  function takimMaclari(ad){ return M.filter(function(m){ return m.b === 'futbol' && (m.ev === ad || m.dep === ad); }); }
  /* lig katlama: başlıktaki düğme */
  document.addEventListener('click', function(ev){ var b = ev.target.closest('.sp-lig-ac'); if (!b) return; var s = b.closest('.sp-lig'), k = !s.classList.contains('kapali');
    s.classList.toggle('kapali', k); b.setAttribute('aria-expanded', !k); b.setAttribute('aria-label', b.getAttribute('aria-label').replace(k ? /kapat$/ : /aç$/, k ? 'aç' : 'kapat')); });

  window.SPOR = { BUGUN: BUGUN, LIG: LIG, SIRA: SIRA, BRANS: BRANS, M: M, TAKIM: TAKIM, SAYFA: SAYFA, TRANSFER: TRANSFER, TDURUM: TDURUM, HABER: HABER, TOPLAM: TOPLAM,
    tarih: tarih, gunKisa: gunKisa, ligIkon: ligIkon, skor: skor, kazanan: kazanan, ligHref: ligHref, takimHref: takimHref, sirala: sirala, ligGrup: ligGrup, ligGruplari: ligGruplari,
    gunListe: gunListe, tablo: tablo, tabloBagla: tabloBagla, transfer: transfer, haberler: haberler, takimMaclari: takimMaclari, skorHam: skorHam, sekmeHref: sekmeHref, sekmeYakala: sekmeYakala };
  /* KİT ADAYI: skor satırında arma (kitin K.skor'unda takım hücresi yalnız metin). Ad kısalırsa arma kırpılmaz; ev hücresi sağa, deplasman sola yaslı. */
  var css = '.k-skor .ev,.k-skor .dp{display:flex;align-items:center;gap:var(--ikon-bosluk);min-width:0}.k-skor .ev{justify-content:flex-end}' +
    '.k-skor .ev>span:not(.k-arma),.k-skor .dp>span:not(.k-arma){min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}';
  var st = document.createElement('style'); st.id = 'spor-css'; st.textContent = css; document.head.appendChild(st);
})();
