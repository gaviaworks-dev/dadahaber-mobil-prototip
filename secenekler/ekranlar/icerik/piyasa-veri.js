/* Dada Haber Mobil · PİYASA VERİSİ (tek yazar: piyasalar.html, enstruman.html, hisse.html yazarı). Üç ekranın ortak tablosu; uydurma değer yok.
   Bütün değerler public siteden (dadahaber-prototip, yalnız okunur): piyasa-ekrani.html, borsa.html, doviz.html, altin.html, kripto-para.html,
   faiz-oranlari.html, akaryakit-fiyatlari.html, enstruman-detay.html ve araclar/ornek_veri.json (piyasa.araclar). Güncelleme saati D.piyasa.guncelleme.
   window.PV: tablolar + PV.bul(kod) (enstrüman kaydı) + PV.hisse(kod) + PV.href(ad) (satırın açacağı ayrıntı ekranı). */
(function(){
  var PV = window.PV = {};
/* kaynak: public borsa.html "En Aktif" tablosu (50 / 592): [kod, şirket, son, değişim, yön, hacim (TL), gün içi en düşük, en yüksek] */
  PV.HIS = [["THYAO", "Türk Hava Yolları", "312,75", "%0,79", "d", "8,42 mr", "309,00", "315,56"],
    ["GARAN", "Garanti BBVA", "128,40", "%1,38", "d", "6,92 mr", "126,77", "129,62"],
    ["AKBNK", "Akbank", "62,15", "%1,04", "d", "5,28 mr", "61,32", "62,77"],
    ["ASELS", "Aselsan", "87,90", "%1,27", "y", "4,96 mr", "86,66", "88,82"],
    ["YKBNK", "Yapı Kredi", "31,84", "%0,94", "d", "4,12 mr", "31,37", "32,19"],
    ["KCHOL", "Koç Holding", "178,20", "%0,22", "d", "3,87 mr", "175,44", "180,25"],
    ["TUPRS", "Tüpraş", "154,60", "%0,52", "y", "3,54 mr", "152,10", "156,46"],
    ["SISE", "Şişecam", "42,36", "%0,38", "y", "2,98 mr", "41,64", "42,89"],
    ["EREGL", "Ereğli Demir Çelik", "27,12", "%0,66", "d", "2,76 mr", "26,64", "27,47"],
    ["BIMAS", "BİM Mağazalar", "521,50", "%0,29", "y", "2,41 mr", "511,96", "528,54"],
    ["ISCTR", "İş Bankası", "14,86", "%1,07", "y", "7,72 mr", "14,51", "14,95"],
    ["SAHOL", "Sabancı Holding", "92,40", "%3,44", "y", "1,30 mr", "91,45", "93,20"],
    ["FROTO", "Ford Otosan", "1.012,00", "%0,54", "y", "4,28 mr", "1.002,15", "1.033,22"],
    ["TOASO", "Tofaş", "228,60", "%2,54", "y", "3,92 mr", "225,49", "232,73"],
    ["PGSUS", "Pegasus", "246,10", "%1,98", "y", "7,21 mr", "241,91", "252,20"],
    ["TCELL", "Turkcell", "94,35", "%3,83", "y", "1,41 mr", "92,89", "95,18"],
    ["TTKOM", "Türk Telekom", "46,12", "%3,18", "d", "7,42 mr", "44,77", "46,61"],
    ["PETKM", "Petkim", "19,84", "%2,18", "d", "2,69 mr", "19,41", "20,04"],
    ["TRALT", "Türk Altın İşletmeleri", "24,18", "%2,98", "y", "2,11 mr", "23,66", "24,76"],
    ["HEKTS", "Hektaş", "4,62", "%1,80", "d", "8,34 mr", "4,58", "4,66"],
    ["SASA", "SASA Polyester", "4,11", "%1,14", "y", "6,49 mr", "4,03", "4,16"],
    ["ENKAI", "Enka İnşaat", "44,70", "%2,39", "y", "1,57 mr", "44,19", "44,96"],
    ["ARCLK", "Arçelik", "142,30", "%3,67", "y", "2,08 mr", "138,87", "143,66"],
    ["VESTL", "Vestel", "61,85", "%1,43", "d", "2,12 mr", "60,43", "63,08"],
    ["MGROS", "Migros", "498,25", "%1,21", "d", "4,74 mr", "491,66", "510,16"],
    ["TAVHL", "TAV Havalimanları", "241,90", "%4,90", "y", "4,89 mr", "238,68", "246,17"],
    ["DOHOL", "Doğan Holding", "14,33", "%4,82", "y", "6,97 mr", "14,10", "14,47"],
    ["EKGYO", "Emlak Konut GYO", "13,72", "%5,03", "y", "0,83 mr", "13,46", "13,88"],
    ["ALARK", "Alarko Holding", "96,15", "%0,06", "d", "3,88 mr", "93,42", "97,32"],
    ["GUBRF", "Gübre Fabrikaları", "204,80", "%1,14", "y", "4,47 mr", "202,09", "206,27"],
    ["KRDMD", "Kardemir (D)", "24,06", "%5,17", "y", "6,69 mr", "23,41", "24,33"],
    ["OYAKC", "Oyak Çimento", "61,40", "%3,82", "y", "1,76 mr", "60,12", "62,15"],
    ["CIMSA", "Çimsa", "38,92", "%2,54", "y", "1,30 mr", "38,02", "39,28"],
    ["AEFES", "Anadolu Efes", "168,70", "%3,36", "d", "4,45 mr", "164,28", "172,53"],
    ["ULKER", "Ülker", "112,40", "%1,61", "y", "4,47 mr", "109,75", "113,31"],
    ["TKFEN", "Tekfen Holding", "57,95", "%0,02", "d", "7,22 mr", "56,38", "58,43"],
    ["AKSEN", "Aksa Enerji", "36,48", "%3,08", "d", "0,76 mr", "35,70", "37,31"],
    ["ENJSA", "Enerjisa", "58,30", "%0,34", "y", "4,19 mr", "57,83", "59,19"],
    ["SOKM", "Şok Marketler", "44,86", "%5,10", "y", "6,23 mr", "44,02", "45,90"],
    ["MAVI", "Mavi Giyim", "88,10", "%3,92", "y", "5,46 mr", "86,72", "88,71"],
    ["LOGO", "Logo Yazılım", "98,55", "%3,38", "d", "5,18 mr", "96,40", "99,40"],
    ["ASTOR", "Astor Enerji", "102,40", "%3,16", "y", "1,58 mr", "99,41", "103,32"],
    ["KONTR", "Kontrolmatik", "31,26", "%0,29", "d", "4,10 mr", "30,34", "31,58"],
    ["CCOLA", "Coca-Cola İçecek", "52,10", "%0,69", "d", "2,69 mr", "51,61", "52,92"],
    ["BRSAN", "Borusan Boru", "432,75", "%0,20", "y", "2,17 mr", "422,25", "440,69"],
    ["TURSG", "Türkiye Sigorta", "27,44", "%1,98", "y", "0,15 mr", "26,90", "28,00"],
    ["AGHOL", "Anadolu Grubu Holding", "298,60", "%1,69", "d", "4,35 mr", "291,79", "303,42"],
    ["VAKBN", "Vakıfbank", "21,92", "%0,79", "y", "7,12 mr", "21,45", "22,35"],
    ["HALKB", "Halkbank", "17,38", "%3,28", "y", "1,56 mr", "16,89", "17,67"],
    ["TSKB", "TSKB", "11,04", "%0,80", "d", "5,31 mr", "10,74", "11,27"]];
/* kaynak: public kripto-para.html (piyasa değerine göre ilk 50 / 12.480): [kod, ad, fiyat $, fiyat TL, 24 saat, yön, gün içi en düşük $, en yüksek $] */
  PV.KRP = [["BTC", "Bitcoin", "98.412", "3.399.623", "%2,04", "y", "96.120", "98.890"],
    ["ETH", "Ethereum", "3.412,50", "117.884", "%1,36", "y", "3.348,20", "3.436,80"],
    ["USDT", "Tether", "1,0002", "34,55", "%0,01", "y", "0,9996", "1,0005"],
    ["BNB", "BNB", "642,30", "22.188", "%0,84", "y", "634,10", "646,90"],
    ["SOL", "Solana", "238,15", "8.227", "%3,12", "y", "229,40", "240,70"],
    ["XRP", "XRP", "1,4120", "48,78", "%1,86", "d", "1,3980", "1,4510"],
    ["USDC", "USD Coin", "1,0000", "34,54", "%0,00", "", "0,9998", "1,0003"],
    ["ADA", "Cardano", "0,9815", "33,91", "%0,72", "d", "0,9702", "0,9980"],
    ["DOGE", "Dogecoin", "0,3884", "13,42", "%2,41", "d", "0,3851", "0,4012"],
    ["AVAX", "Avalanche", "42,76", "1.477", "%1,58", "y", "41,80", "43,15"],
    ["TRX", "TRON", "0,2081", "7,19", "%2,62", "y", "0,2008", "0,2101"],
    ["LINK", "Chainlink", "18,42", "636", "%5,48", "y", "18,13", "18,82"],
    ["DOT", "Polkadot", "6,84", "236", "%3,58", "d", "6,62", "6,90"],
    ["TON", "Toncoin", "5,37", "186", "%2,57", "y", "5,20", "5,50"],
    ["SHIB", "Shiba Inu", "0,00002430", "0,000839", "%0,09", "d", "0,00002343", "0,00002502"],
    ["LTC", "Litecoin", "88,15", "3.045", "%3,34", "d", "85,90", "90,70"],
    ["BCH", "Bitcoin Cash", "462,30", "15.970", "%2,89", "y", "451,52", "468,13"],
    ["NEAR", "NEAR Protocol", "5,91", "204", "%5,03", "y", "5,84", "6,05"],
    ["UNI", "Uniswap", "9,74", "336", "%3,93", "y", "9,60", "9,87"],
    ["POL", "Polygon", "0,4812", "16,62", "%1,45", "d", "0,4686", "0,4880"],
    ["ICP", "Internet Computer", "10,12", "350", "%4,44", "y", "9,74", "10,25"],
    ["APT", "Aptos", "11,48", "397", "%4,45", "y", "11,34", "11,57"],
    ["ETC", "Ethereum Classic", "25,66", "886", "%2,15", "y", "24,79", "26,31"],
    ["XLM", "Stellar", "0,1392", "4,81", "%5,42", "y", "0,1342", "0,1408"],
    ["ATOM", "Cosmos", "7,93", "274", "%2,93", "y", "7,63", "7,99"],
    ["FIL", "Filecoin", "5,48", "189", "%0,44", "y", "5,40", "5,53"],
    ["ARB", "Arbitrum", "0,8124", "28,06", "%0,30", "y", "0,7879", "0,8362"],
    ["OP", "Optimism", "1,91", "66,05", "%3,19", "d", "1,86", "1,97"],
    ["HBAR", "Hedera", "0,0841", "2,91", "%3,15", "y", "0,0819", "0,0850"],
    ["VET", "VeChain", "0,0312", "1,08", "%1,81", "y", "0,0306", "0,0319"],
    ["INJ", "Injective", "27,30", "943", "%1,99", "y", "26,71", "27,98"],
    ["RENDER", "Render", "7,41", "256", "%0,46", "d", "7,23", "7,60"],
    ["GRT", "The Graph", "0,2178", "7,52", "%1,99", "d", "0,2144", "0,2220"],
    ["ALGO", "Algorand", "0,1885", "6,51", "%0,15", "d", "0,1817", "0,1906"],
    ["AAVE", "Aave", "171,40", "5.921", "%0,79", "d", "169,39", "174,19"],
    ["SAND", "The Sandbox", "0,3617", "12,49", "%1,37", "d", "0,3532", "0,3704"],
    ["MANA", "Decentraland", "0,4022", "13,89", "%4,13", "d", "0,3862", "0,4114"],
    ["AXS", "Axie Infinity", "6,12", "211", "%3,61", "y", "5,96", "6,24"],
    ["EGLD", "MultiversX", "31,84", "1.100", "%0,40", "d", "31,14", "32,17"],
    ["XTZ", "Tezos", "0,8213", "28,37", "%1,47", "d", "0,8058", "0,8323"],
    ["THETA", "Theta Network", "1,58", "54,72", "%4,57", "y", "1,53", "1,62"],
    ["FLOW", "Flow", "0,6511", "22,49", "%4,33", "d", "0,6395", "0,6632"],
    ["CHZ", "Chiliz", "0,0784", "2,71", "%2,42", "y", "0,0766", "0,0800"],
    ["KAVA", "Kava", "0,4127", "14,26", "%4,55", "y", "0,4053", "0,4187"],
    ["MKR", "Maker", "1.612", "55.687", "%3,10", "y", "1.580", "1.649"],
    ["LDO", "Lido DAO", "1,40", "48,43", "%0,53", "d", "1,39", "1,43"],
    ["SUI", "Sui", "2,02", "69,71", "%3,82", "d", "1,95", "2,07"],
    ["SEI", "Sei", "0,4433", "15,31", "%0,80", "y", "0,4269", "0,4479"],
    ["PEPE", "Pepe", "0,00001420", "0,000491", "%0,04", "d", "0,00001398", "0,00001429"],
    ["FET", "Fetch.ai", "1,34", "46,22", "%3,74", "y", "1,32", "1,38"]];
  /* kaynak: public doviz.html: [kod, ad, alış, satış, değişim, yön, gün içi en düşük, en yüksek, ayrıntı kodu, kısa ad] */
  PV.DVZ = [['USD', 'ABD Doları', '34,4980', '34,5448', '%0,12', 'y', '34,4012', '34,5620', 'dolar', 'Dolar'], ['EUR', 'Euro', '36,1504', '36,2180', '%0,21', 'y', '36,0410', '36,2390', 'euro', 'Euro'],
    ['GBP', 'İngiliz Sterlini', '43,0210', '43,1150', '%0,08', 'y', '42,9104', '43,1530', 'sterlin', 'Sterlin'], ['CHF', 'İsviçre Frangı', '38,9120', '39,0040', '%0,05', 'd', '38,8650', '39,0610', 'frank', 'İsviçre frangı'],
    ['JPY', 'Japon Yeni (100)', '22,4810', '22,5320', '%0,31', 'd', '22,4400', '22,6105', 'yen', 'Japon yeni'], ['SAR', 'Suudi Arabistan Riyali', '9,1902', '9,2105', '%0,11', 'y', '9,1690', '9,2140', 'riyal', 'Riyal'],
    ['CNY', 'Çin Yuanı', '4,7581', '4,7702', '%0,06', 'y', '4,7490', '4,7744', 'yuan', 'Yuan'], ['RUB', 'Rus Rublesi', '0,3384', '0,3412', '%0,44', 'd', '0,3371', '0,3430', 'ruble', 'Ruble']];
  /* kaynak: public altin.html: [ad, alt, alış, satış, değişim, yön, gün içi en düşük, en yüksek, ayrıntı kodu, kısa ad] */
  PV.ALT = [['Gram Altın', '24 ayar · gram', '2.962,10', '2.968,40', '%0,64', 'y', '2.941,20', '2.972,80', 'gram-altin', 'Gram altın'], ['Çeyrek Altın', '1,75 gram · 22 ayar', '4.812,00', '4.905,00', '%0,58', 'y', '4.772,00', '4.918,00', 'ceyrek-altin', 'Çeyrek altın'],
    ['Yarım Altın', '3,50 gram · 22 ayar', '9.624,00', '9.810,00', '%0,58', 'y', '9.544,00', '9.836,00', 'yarim-altin', 'Yarım altın'], ['Tam Altın', '7,00 gram · 22 ayar', '19.190,00', '19.560,00', '%0,57', 'y', '19.020,00', '19.610,00', 'tam-altin', 'Tam altın'],
    ['Cumhuriyet Altını', '7,22 gram · 22 ayar', '19.780,00', '20.150,00', '%0,55', 'y', '19.610,00', '20.210,00', 'cumhuriyet-altini', 'Cumhuriyet altını'], ['22 Ayar Bilezik', 'gram', '2.690,40', '2.745,10', '%0,61', 'y', '2.668,00', '2.751,30', 'bilezik', '22 ayar bilezik'],
    ['Ons Altın', 'dolar · 31,1 gram', '2.673,40', '2.674,15', '%0,38', 'y', '2.655,10', '2.681,90', 'ons-altin', 'Ons altın'], ['Gümüş', 'gram', '33,98', '34,12', '%0,27', 'y', '33,71', '34,26', 'gumus', 'Gümüş']];
  /* kaynak: ornek_veri.json piyasa.araclar (değer, değişim, gün içi) + enstruman-detay.html "Bağlı Enstrümanlar" (kod, önceki) + borsa.html "Endeksler" paneli (açılış, işlem hacmi):
     [ad, son, değişim, yön, kod, ayrıntı kodu, önceki kapanış, gün içi en düşük, en yüksek, açılış, işlem hacmi] */
  PV.END = [['BIST 100', '10.248,62', '%0,43', 'd', 'XU100', 'xu100', '10.292,87', '10.214,35', '10.318,90', '10.301,14', '98,4 mr TL'],
    ['BIST 30', '11.204,35', '%0,51', 'd', 'XU030', 'xu030', '11.261,78', '11.163,20', '11.291,04', '11.255,80', '84,7 mr TL'],
    ['BIST Banka', '14.876,90', '%1,12', 'd', 'XBANK', 'xbank', '15.045,41', '14.812,30', '15.061,74', '15.022,40', '28,3 mr TL'],
    ['BIST Sınai', '12.038,47', '%0,18', 'y', 'XUSIN', 'xusin', '12.016,84', '11.968,25', '12.071,90', '12.010,30', '41,9 mr TL']];
  /* kaynak: public piyasa-ekrani.html "Emtia" süzgeci + ornek_veri.json (Brent önceki): [ad, alt, son, değişim, yön, gün içi en düşük, en yüksek, ayrıntı kodu, önceki] */
  PV.EMT = [['Brent', 'Petrol · dolar/varil', '74,82', '%1,12', 'd', '74,40', '75,96', 'brent', '75,67'], ['WTI', 'Petrol · dolar/varil', '71,24', '%1,06', 'd', '70,85', '72,30', 'wti'],
    ['Doğal Gaz', 'TTF · euro/MWh', '42,18', '%0,64', 'd', '41,90', '43,05', 'dogal-gaz'], ['Gümüş (ons)', 'Dolar', '30,72', '%0,31', 'y', '30,51', '30,84', 'gumus-ons'],
    ['Bakır', 'Dolar/libre', '4,1820', '%0,42', 'y', '4,1510', '4,1960', 'bakir'], ['Buğday', 'Dolar/buşel', '5,62', '%0,35', 'd', '5,58', '5,69', 'bugday']];
  /* kaynak: public piyasa-ekrani.html (Bütün Piyasalar ve süzgeç tabloları); [ad, alt, son, değişim, yön, gün içi, piyasa, Tümü'de] */
  PV.EKR = [
    ['BIST 100', 'Endeks', '10.248,62', '%0,43', 'd', '10.214,35 – 10.318,90', 'Borsa', 1], ['BIST 30', 'Endeks', '11.204,35', '%0,51', 'd', '11.163,20 – 11.291,04', 'Borsa', 1],
    ['BIST Banka', 'Endeks', '14.876,90', '%1,12', 'd', '14.812,30 – 15.061,74', 'Borsa'], ['BIST Sınai', 'Endeks', '12.038,47', '%0,18', 'y', '11.968,25 – 12.071,90', 'Borsa'],
    ['THYAO', 'Türk Hava Yolları', '312,75', '%0,79', 'd', '308,99 – 315,56', 'Borsa'], ['ASELS', 'Aselsan', '87,90', '%1,27', 'y', '86,66 – 88,82', 'Borsa'],
    ['USD', 'ABD Doları', '34,5448', '%0,12', 'y', '34,4012 – 34,5620', 'Döviz', 1], ['EUR', 'Euro', '36,2180', '%0,21', 'y', '36,0410 – 36,2390', 'Döviz', 1],
    ['GBP', 'İngiliz Sterlini', '43,1150', '%0,08', 'y', '42,9104 – 43,1530', 'Döviz', 1], ['CHF', 'İsviçre Frangı', '39,0040', '%0,05', 'd', '38,8650 – 39,0610', 'Döviz'],
    ['JPY', 'Japon Yeni (100)', '22,5320', '%0,31', 'd', '22,4400 – 22,6105', 'Döviz'], ['SAR', 'Suudi Arabistan Riyali', '9,2105', '%0,11', 'y', '9,1690 – 9,2140', 'Döviz'],
    ['Gram Altın', 'TL', '2.968,40', '%0,64', 'y', '2.941,20 – 2.972,80', 'Altın', 1], ['Çeyrek Altın', 'TL', '4.905,00', '%0,58', 'y', '4.772,00 – 4.918,00', 'Altın'],
    ['Cumhuriyet Altını', 'TL', '20.150,00', '%0,55', 'y', '19.610,00 – 20.210,00', 'Altın'], ['22 Ayar Bilezik', 'TL · gram', '2.745,10', '%0,61', 'y', '2.668,00 – 2.751,30', 'Altın'],
    ['Ons Altın', 'Dolar', '2.674,15', '%0,38', 'y', '2.655,10 – 2.681,90', 'Altın', 1], ['Gümüş', 'TL · gram', '34,12', '%0,27', 'y', '33,71 – 34,26', 'Altın', 1],
    ['BTC', 'Bitcoin · dolar', '98.412', '%2,04', 'y', '96.120 – 98.890', 'Kripto', 1], ['ETH', 'Ethereum · dolar', '3.412,50', '%1,36', 'y', '3.348,20 – 3.436,80', 'Kripto', 1],
    ['BNB', 'BNB · dolar', '642,30', '%0,84', 'y', '634,10 – 646,90', 'Kripto'], ['SOL', 'Solana · dolar', '238,15', '%3,12', 'y', '229,40 – 240,70', 'Kripto'],
    ['XRP', 'XRP · dolar', '1,4120', '%1,86', 'd', '1,3980 – 1,4510', 'Kripto'], ['AVAX', 'Avalanche · dolar', '42,76', '%1,58', 'y', '41,80 – 43,15', 'Kripto'],
    ['Brent', 'Petrol · dolar/varil', '74,82', '%1,12', 'd', '74,40 – 75,96', 'Emtia', 1], ['WTI', 'Petrol · dolar/varil', '71,24', '%1,06', 'd', '70,85 – 72,30', 'Emtia'],
    ['Doğal Gaz', 'TTF · euro/MWh', '42,18', '%0,64', 'd', '41,90 – 43,05', 'Emtia', 1], ['Gümüş (ons)', 'Dolar', '30,72', '%0,31', 'y', '30,51 – 30,84', 'Emtia'],
    ['Bakır', 'Dolar/libre', '4,1820', '%0,42', 'y', '4,1510 – 4,1960', 'Emtia'], ['Buğday', 'Dolar/buşel', '5,62', '%0,35', 'd', '5,58 – 5,69', 'Emtia']
  ];
  /* kaynak: public piyasa-ekrani.html "Piyasa Saatleri" */
  PV.SAAT = [['Borsa İstanbul', '10.00–18.00', 1], ['Serbest döviz', '7/24', 1], ['Kapalıçarşı', '09.00–19.00', 1], ['Avrupa', '11.00–19.30', 1], ['New York', '17.30–00.00', 0], ['Kripto', '7/24', 1]];
  /* kaynak: public faiz-oranlari.html */
  PV.FZ1 = [['TCMB politika faizi', '1 hafta repo', '%42,50', '%42,50', '23 Kas 2026'], ['TCMB gecelik borç verme', '', '%46,00', '%46,00', '23 Kas 2026'], ['TCMB gecelik borçlanma', '', '%41,00', '%41,00', '23 Kas 2026'],
    ['Fed politika faizi', 'üst sınır', '%4,50', '%4,75', '7 Kas 2026'], ['ECB mevduat faizi', '', '%2,00', '%2,25', '30 Eki 2026']];
  PV.FZ2 = [['32 güne kadar', '%44,20', '%44,55', '−0,35 puan', 'd'], ['92 güne kadar', '%43,10', '%43,30', '−0,20 puan', 'd'], ['181 güne kadar', '%40,40', '%40,45', '−0,05 puan', 'd'], ['1 yıla kadar', '%35,80', '%35,80', '0,00 puan', '']];
  PV.FZ3 = [['İhtiyaç kredisi', '%3,59', '%3,64', '−0,05 puan', 'd'], ['Taşıt kredisi', '%3,19', '%3,22', '−0,03 puan', 'd'], ['Konut kredisi', '%2,89', '%2,95', '−0,06 puan', 'd'], ['Ticari kredi', '%3,05', '%3,08', '−0,03 puan', 'd']];
  /* kaynak: public akaryakit-fiyatlari.html */
  PV.YKT = [['İstanbul (Avrupa)', '43,18', '44,72', '27,42'], ['İstanbul (Anadolu)', '43,05', '44,60', '27,31'], ['Ankara', '44,01', '45,63', '27,88'], ['İzmir', '44,26', '45,90', '28,04'], ['Antalya', '44,52', '46,14', '27,59'],
    ['Bursa', '44,08', '45,71', '27,95'], ['Adana', '44,37', '46,02', '27,66'], ['Konya', '44,19', '45,83', '27,72'], ['Gaziantep', '44,61', '46,25', '27,81'], ['Trabzon', '44,73', '46,38', '28,12']];
  /* kaynak: public doviz.html "Bu Hafta Takvimde" (kuru etkileyebilir): [gün, saat, ülke, olay, değerler, önem] */
  PV.TAKVIM = [['Bugün', '10.00', 'Türkiye', 'Tüketici Güven Endeksi · Kasım', 'Önceki 84,1 · Beklenti 85,0', 'Yüksek'], ['Bugün', '15.30', 'ABD', 'Haftalık işsizlik başvuruları', 'Önceki 231 bin · Beklenti 228 bin', 'Orta'],
    ['Bugün', '14.00', 'Türkiye', 'TCMB Para Politikası Kurulu · Faiz kararı', 'Açıklandı %42,50 · Beklenti %42,50', 'Yüksek'], ['27 Kas', '12.00', 'Euro Bölgesi', 'Öncü İmalat PMI', 'Önceki 49,8 · Beklenti 50,1', 'Orta']];
  /* kaynak: hesaplayıcı örnekleri public doviz.html, kripto-para.html, altin.html, faiz-oranlari.html, akaryakit-fiyatlari.html */
  PV.HESAP = {
    doviz: { baslik: 'Döviz çevirici', alt: 'Satış kuru · 15 dk gecikmeli', alanlar: [['Tutar', '1.000', 'USD', 1], ['Karşılığı', '34.544,80', 'TRY']], not: '1 USD = 34,5448 TRY · satış kuru', degis: 1 },
    kripto: { baslik: 'Kripto çevirici', alt: 'Borsalar ortalaması', alanlar: [['Miktar', '0,05', 'BTC', 1], ['Karşılığı', '169.981,14', 'TRY']], not: '1 BTC = 3.399.623 TRY · 98.412 $ üzerinden', degis: 1 },
    altin: { baslik: 'Altın hesaplayıcı', alt: 'Satış fiyatı · 15 dk gecikmeli', alanlar: [['Miktar', '10', 'Gram altın', 1], ['Karşılığı', '29.684,00', 'TRY']], not: '1 gram = 2.968,40 TRY · satış fiyatı' },
    faiz: { baslik: 'Kredi hesaplayıcı', alt: 'Banka ortalamaları, 15 Kasım 2026 haftası', alanlar: [['Kredi tutarı', '100.000', 'TRY', 1], ['Vade', '24', 'ay'], ['Aylık faiz', '%3,59', 'İhtiyaç'], ['Aylık taksit', '6.286,29', 'TRY']], not: 'Toplam geri ödeme 150.870,91 TRY · vergi ve masraflar hariç' },
    akaryakit: { baslik: 'Yakıt maliyeti', alt: 'İstanbul (Avrupa) pompa fiyatıyla', alanlar: [['Mesafe', '450', 'km', 1], ['Ortalama tüketim', '6,5', 'L/100 km'], ['Yakıt', '43,18', 'Benzin'], ['Yol maliyeti', '1.263,02', 'TRY']], not: '29,25 litre · İstanbul (Avrupa) benzin fiyatıyla' }
  };
  /* kaynak: haber listeleri public borsa.html, kripto-para.html, doviz.html, altin.html, faiz-oranlari.html, akaryakit-fiyatlari.html (ilk sayfa);
     saat ornek_veri.json (23 Kasım'dakiler saatle, öncekiler tarihle); görsel yalnız konusu tutan haberlerde (borsa, altin, faiz) */
  PV.HABER = {
    borsa: [{alt: "Borsa", baslik: "Borsa İstanbul öğleden önce bankacılık hisseleriyle geriledi", yazar: "Can Demir", sure: "3 dk", izlenme: "13,7 B", saat: "08.00"},
    {alt: "Haftalık", baslik: "Borsa İstanbul geçen haftayı yüzde 1,2 yükselişle tamamladı", yazar: "Nazlı Öztürk", sure: "4 dk", izlenme: "6,9 B", saat: "12.05"},
    {alt: "Halka Arz", baslik: "Yılın son halka arzı için talep toplama tarihleri açıklandı", yazar: "Elif Aras", sure: "2 dk", izlenme: "6,1 B", saat: "09.55"},
    {alt: "Bilanço", baslik: "Borsa şirketlerinin dokuz aylık kârı yüzde 18 geriledi", yazar: "Nazlı Öztürk", sure: "5 dk", izlenme: "8,8 B", saat: "15.35"},
    {alt: "Yabancı", baslik: "Yabancı yatırımcılar geçen hafta 142 milyon dolarlık hisse aldı", yazar: "Elif Aras", sure: "3 dk", izlenme: "7,7 B", saat: "07.05"},
    {alt: "Bankacılık", baslik: "Bankacılık endeksi faiz kararı sonrası yön arıyor", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "5,8 B", saat: "22 Kas"},
    {alt: "SPK", baslik: "Sermaye Piyasası Kurulu açığa satış kurallarını güncelledi", yazar: "Tolga Bayram", sure: "4 dk", izlenme: "4,9 B", saat: "22 Kas"},
    {alt: "Temettü", baslik: "Temettü dağıtacak şirketlerin listesi netleşiyor", yazar: "Can Demir", sure: "2 dk", izlenme: "3,8 B", saat: "22 Kas"} ],
    kripto: [{alt: "Bitcoin", baslik: "Bitcoin 98 bin dolar sınırında hacim arttı", yazar: "Can Demir", sure: "2 dk", izlenme: "11,9 B", saat: "22 Kas"},
    {alt: "Ethereum", baslik: "Ethereum'da ağ güncellemesi öncesi işlem ücretleri düştü", yazar: "Elif Aras", sure: "4 dk", izlenme: "5,2 B", saat: "15.35"},
    {alt: "Düzenleme", baslik: "Kripto varlık hizmet sağlayıcılarına lisans süreci uzatıldı", yazar: "Elif Aras", sure: "2 dk", izlenme: "4,9 B", saat: "13.35"},
    {alt: "Vergi", baslik: "Kripto kazançlarına yönelik vergi düzenlemesi taslağı Meclis'te", yazar: "Can Demir", sure: "5 dk", izlenme: "4,3 B", saat: "11.40"},
    {alt: "Fonlar", baslik: "ABD'de spot Bitcoin fonlarına girişler sürüyor", yazar: "Can Demir", sure: "3 dk", izlenme: "3,8 B", saat: "22 Kas"},
    {alt: "Stablecoin", baslik: "Stablecoin piyasa değeri 200 milyar doları aştı", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "14,6 B", saat: "22 Kas"},
    {alt: "Güvenlik", baslik: "Kripto platformlarında iki aşamalı doğrulama zorunlu hale geliyor", yazar: "Tolga Bayram", sure: "4 dk", izlenme: "11,3 B", saat: "22 Kas"},
    {alt: "Uyarı", baslik: "Sahte kripto platformlarına karşı uyarılar artıyor", yazar: "Nazlı Öztürk", sure: "2 dk", izlenme: "9,2 B", saat: "22 Kas"} ],
    doviz: [{alt: "Döviz", baslik: "Dolar/TL güne yatay başladı, gözler enflasyon verisinde", yazar: "Elif Aras", sure: "2 dk", izlenme: "18,4 B", saat: "15.00"},
    {alt: "Döviz", baslik: "Euro, ECB açıklamaları sonrası değer kazandı", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "5,1 B", saat: "07.25"},
    {alt: "Döviz", baslik: "Merkez Bankası rezervleri haftalık bazda arttı", yazar: "Tolga Bayram", sure: "3 dk", izlenme: "7,3 B", saat: "22 Kas"},
    {alt: "Döviz", baslik: "Sterlin İngiltere büyüme verisiyle geriledi", yazar: "Can Demir", sure: "2 dk", izlenme: "3,8 B", saat: "22 Kas"},
    {alt: "Döviz", baslik: "Kur korumalı mevduatta çıkış sürüyor", yazar: "Elif Aras", sure: "3 dk", izlenme: "6,2 B", saat: "22 Kas"},
    {alt: "Döviz", baslik: "Japon yeninde müdahale beklentisi", yazar: "Can Demir", sure: "2 dk", izlenme: "2,9 B", saat: "21 Kas"},
    {alt: "Döviz", baslik: "Dış ticaret açığı ekimde daraldı", yazar: "Elif Aras", sure: "3 dk", izlenme: "4,4 B", saat: "21 Kas"},
    {alt: "Döviz", baslik: "Avrupa'da faiz indirimi beklentisi güçlendi", yazar: "Can Demir", sure: "3 dk", izlenme: "6,9 B", saat: "22 Kas"} ],
    altin: [{alt: "Gram Altın", baslik: "Gram altın 2.968 lira ile haftaya yükselişle başladı", yazar: "Elif Aras", sure: "3 dk", izlenme: "16,2 B", saat: "12.00"},
    {alt: "Ons", baslik: "Ons altında Fed tutanakları sonrası sınırlı alım", yazar: "Can Demir", sure: "4 dk", izlenme: "9,2 B", saat: "09.35"},
    {alt: "Kuyumcu", baslik: "Çeyrek altın kuyumcularda 4.900 lirayı aştı", yazar: "Can Demir", sure: "2 dk", izlenme: "8,4 B", saat: "06.55"},
    {alt: "Merkez Bankaları", baslik: "Merkez bankalarının altın alımları üçüncü çeyrekte arttı", yazar: "Tolga Bayram", sure: "5 dk", izlenme: "7,7 B", saat: "10.25"},
    {alt: "Birikim", baslik: "Altın biriktirme hesaplarında saklama ücretleri karşılaştırıldı", yazar: "Can Demir", sure: "3 dk", izlenme: "14,6 B", saat: "22 Kas"},
    {alt: "Gümüş", baslik: "Gümüş fiyatlarında sanayi talebi etkisi", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "6,1 B", saat: "22 Kas"},
    {alt: "Kuyumcu", baslik: "Kuyumcularda düğün sezonu sonrası talep sakinleşti", yazar: "Nazlı Öztürk", sure: "4 dk", izlenme: "5,8 B", saat: "22 Kas"},
    {alt: "Dış Ticaret", baslik: "Altın ithalatı ekimde yüzde 14 geriledi", yazar: "Elif Aras", sure: "2 dk", izlenme: "5,2 B", saat: "22 Kas"} ],
    faiz: [{alt: "Faiz Oranları", baslik: "Merkez Bankası politika faizini yüzde 42,5'te sabit tuttu", yazar: "Elif Aras", sure: "3 dk", izlenme: "27,5 B", saat: "14.00"},
    {alt: "Mevduat", baslik: "Mevduat faizleri kasımda sınırlı geriledi", yazar: "Can Demir", sure: "4 dk", izlenme: "8,4 B", saat: "08.45"},
    {alt: "Konut Kredisi", baslik: "Konut kredisi faizlerinde bankalar arası fark açıldı", yazar: "Tolga Bayram", sure: "5 dk", izlenme: "14,6 B", saat: "11.45"},
    {alt: "Mevduat", baslik: "Sabit faiz kararının mevduat oranlarına olası etkisi", yazar: "Can Demir", sure: "5 dk", izlenme: "11,3 B", saat: "14.10"},
    {alt: "Rehber", baslik: "İhtiyaç kredisinde toplam maliyet oranı nasıl okunur", yazar: "Elif Aras", sure: "5 dk", izlenme: "9,2 B", saat: "10.45"},
    {alt: "Kredi Kartı", baslik: "Kredi kartı azami faiz oranları aralıkta güncellenecek", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "8,4 B", saat: "22 Kas"},
    {alt: "Fed", baslik: "Fed tutanakları faiz indiriminde temkinli bir çizgiye işaret etti", yazar: "Elif Aras", sure: "3 dk", izlenme: "11,3 B", saat: "15.25"},
    {alt: "Avrupa", baslik: "Avrupa'da faiz indirimi beklentisi güçlendi", yazar: "Can Demir", sure: "3 dk", izlenme: "6,9 B", saat: "22 Kas"} ],
    akaryakit: [{alt: "Motorin", baslik: "Motorindeki indirim pompaya yansıdı", yazar: "Elif Aras", sure: "3 dk", izlenme: "21,4 B", saat: "11.50"},
    {alt: "Petrol", baslik: "Brent petrolde talep endişesi fiyatları geriletti", yazar: "Tolga Bayram", sure: "2 dk", izlenme: "9,2 B", saat: "10.50"},
    {alt: "Vergi", baslik: "Akaryakıtta ÖTV güncellemesinin ocak takvimi belli oldu", yazar: "Nazlı Öztürk", sure: "2 dk", izlenme: "8,4 B", saat: "11.15"},
    {alt: "LPG", baslik: "LPG fiyatlarında kış dönemi artışı bekleniyor", yazar: "Elif Aras", sure: "5 dk", izlenme: "7,7 B", saat: "14.15"},
    {alt: "Sektör", baslik: "Akaryakıt dağıtım şirketlerinin satış hacmi ekimde arttı", yazar: "Nazlı Öztürk", sure: "3 dk", izlenme: "6,9 B", saat: "22 Kas"},
    {alt: "Rehber", baslik: "Uzun yolda yakıt tasarrufu için dikkat edilmesi gerekenler", yazar: "Elif Aras", sure: "3 dk", izlenme: "6,1 B", saat: "22 Kas"},
    {alt: "Fiyatlar", baslik: "İllere göre akaryakıt fiyat farkları neden oluşuyor", yazar: "Can Demir", sure: "4 dk", izlenme: "5,8 B", saat: "22 Kas"},
    {alt: "Elektrikli", baslik: "Elektrikli araç şarj ücretlerinde yeni tarife", yazar: "Can Demir", sure: "2 dk", izlenme: "5,2 B", saat: "22 Kas"} ],
  };
  /* kaynak: public piyasa-ekrani.html haberleri + sözlük saatleri */
  PV.HABER.ekran = [
    { alt: 'Döviz', baslik: 'Dolar/TL güne yatay başladı, gözler enflasyon verisinde', yazar: 'Elif Aras', sure: '2 dk', izlenme: '18,4 B', saat: '15.00' },
    { alt: 'Faiz', baslik: 'Merkez Bankası politika faizini yüzde 42,5\'te sabit tuttu', yazar: 'Elif Aras', sure: '3 dk', izlenme: '27,5 B', saat: '14.00', g: 'faiz' },
    { alt: 'Emtia', baslik: 'Brent petrolde talep endişesi fiyatları geriletti', yazar: 'Tolga Bayram', sure: '2 dk', izlenme: '9,2 B', saat: '10.50' },
    { alt: 'Piyasalar', baslik: 'Enflasyon verisi öncesi piyasalarda temkinli seyir', yazar: 'Elif Aras', sure: '4 dk', izlenme: '19,6 B', saat: '10.00' },
    { alt: 'Altın', baslik: 'Ons altında Fed tutanakları sonrası sınırlı alım', yazar: 'Can Demir', sure: '4 dk', izlenme: '9,2 B', saat: '09.35', g: 'altin' },
    { alt: 'Borsa', baslik: 'Borsa İstanbul öğleden önce bankacılık hisseleriyle geriledi', yazar: 'Can Demir', sure: '3 dk', izlenme: '13,7 B', saat: '08.00', g: 'borsa' },
    { alt: 'Kripto', baslik: 'Bitcoin 98 bin dolar sınırında hacim arttı', yazar: 'Can Demir', sure: '2 dk', izlenme: '11,9 B', saat: '22 Kas' },
    { alt: 'Gümüş', baslik: 'Gümüş fiyatlarında sanayi talebi etkisi', yazar: 'Nazlı Öztürk', sure: '3 dk', izlenme: '6,1 B', saat: '22 Kas' }
  ];
  /* public bölüm sayıları ("… haber bu bölümde") */
  PV.HABER_SAYI = { ekran: 342, borsa: 132, kripto: 96, doviz: 86, altin: 74, faiz: 88, akaryakit: 64 };
  /* K44 kural 8: her haber satırına konusu tutan gerçek fotoğraf (assets/gorsel/haber/KAYNAK.txt): bölüm varsayılanı + başlığa göre düzeltme.
     borsa = İstanbul borsası, altin = külçe, maden = altın madeni, faiz = TCMB binası, kredi-karti = kart terminali, veri-merkezi = sunucu dolabı (kripto için gevşek), koy-yolu = yol.
     Akaryakıtta uygun fotoğraf yok: yalnız "uzun yol" haberi görselli, ötekiler yazı satırı (rapor edildi). */
  var VARS = { borsa: 'borsa', kripto: 'veri-merkezi', doviz: 'faiz', altin: 'altin', faiz: 'faiz', akaryakit: null, ekran: null };
  var GOR = { 'Merkez bankalarının altın alımları üçüncü çeyrekte arttı': 'maden', 'Altın ithalatı ekimde yüzde 14 geriledi': 'maden', 'Gümüş fiyatlarında sanayi talebi etkisi': 'maden',
    'Kredi kartı azami faiz oranları aralıkta güncellenecek': 'kredi-karti', 'İhtiyaç kredisinde toplam maliyet oranı nasıl okunur': 'kredi-karti', 'Konut kredisi faizlerinde bankalar arası fark açıldı': 'kredi-karti',
    'Uzun yolda yakıt tasarrufu için dikkat edilmesi gerekenler': 'koy-yolu', 'Dolar/TL güne yatay başladı, gözler enflasyon verisinde': 'faiz', 'Enflasyon verisi öncesi piyasalarda temkinli seyir': 'borsa',
    'Bitcoin 98 bin dolar sınırında hacim arttı': 'veri-merkezi', 'Ons altında Fed tutanakları sonrası sınırlı alım': 'altin', 'Borsa İstanbul öğleden önce bankacılık hisseleriyle geriledi': 'borsa',
    'Merkez Bankası politika faizini yüzde 42,5\'te sabit tuttu': 'faiz' };
  Object.keys(PV.HABER).forEach(function(k){ PV.HABER[k].forEach(function(h){ h.ikon = 'fa-chart-column'; var g = GOR[h.baslik] || VARS[k]; if (g) h.g = g; else delete h.g; }); });

  /* ---------- ayrıntı kayıtları ---------- */
  var KAYIT = {};
  PV.END.forEach(function(r){ KAYIT[r[5]] = { grup: 'endeks', kod: r[5], ad: r[0], alt: r[4] + ' · Borsa İstanbul · endeks', son: r[1], deg: r[2], yon: r[3], gun: [r[7], r[8]], onceki: r[6],
    tablo: [['Açılış', r[9]], ['En düşük', r[7]], ['En yüksek', r[8]], ['İşlem hacmi', r[10]], ['Önceki kapanış', r[6]]], py: [r[0], r[1], r[2], r[3]] }; });
  PV.DVZ.forEach(function(r){ KAYIT[r[8]] = { grup: 'doviz', kod: r[8], ad: r[9], alt: r[0] + '/TL · ' + r[1] + ' · serbest piyasa · satış', son: r[3], deg: r[4], yon: r[5], gun: [r[6], r[7]], alis: r[2],
    tablo: [['Alış', r[2]], ['Satış', r[3]], ['En düşük', r[6]], ['En yüksek', r[7]]], py: [r[9], r[3], r[4], r[5]] }; });
  PV.ALT.forEach(function(r){ KAYIT[r[8]] = { grup: 'altin', kod: r[8], ad: r[9], alt: r[1] + ' · Kapalıçarşı · satış' + (r[8] === 'ons-altin' ? '' : ', TL'), son: r[3], deg: r[4], yon: r[5], gun: [r[6], r[7]], alis: r[2],
    tablo: [['Alış', r[2]], ['Satış', r[3]], ['En düşük', r[6]], ['En yüksek', r[7]]], py: [r[9], r[3], r[4], r[5]] }; });
  PV.KRP.forEach(function(r, i){ var k = r[0].toLowerCase(); KAYIT[k] = { grup: 'kripto', kod: k, ad: r[1], alt: r[0] + ' · dolar · borsalar ortalaması', son: r[2], deg: r[4], yon: r[5], gun: [r[6], r[7]], tl: r[3], sira: i + 1,
    tablo: [['Fiyat ($)', r[2]], ['Fiyat (TL)', r[3]], ['En düşük ($)', r[6]], ['En yüksek ($)', r[7]], ['Piyasa değeri sırası', (i + 1) + ' / 12.480']], py: [r[0], r[2], r[4], r[5]] }; });
  PV.EMT.forEach(function(r){ KAYIT[r[7]] = { grup: 'emtia', kod: r[7], ad: r[0], alt: r[1], son: r[2], deg: r[3], yon: r[4], gun: [r[5], r[6]], onceki: r[8],
    tablo: [['Son', r[2]], ['En düşük', r[5]], ['En yüksek', r[6]]].concat(r[8] ? [['Önceki kapanış', r[8]]] : []), py: [r[0], r[2], r[3], r[4]] }; });
  var ESK = { usd: 'dolar', eur: 'euro', gbp: 'sterlin', chf: 'frank', jpy: 'yen', sar: 'riyal', cny: 'yuan', rub: 'ruble' };
  PV.bul = function(kod){ kod = String(kod || '').toLowerCase(); return KAYIT[ESK[kod] || kod] || null; };
  PV.grup = function(g){ return Object.keys(KAYIT).map(function(k){ return KAYIT[k]; }).filter(function(x){ return x.grup === g; }); };
  PV.hisse = function(kod){ kod = String(kod || '').toUpperCase(); var r = PV.HIS.filter(function(x){ return x[0] === kod; })[0]; return r || null; };
  /* piyasa ekranı ve vitrin adlarından ayrıntı ekranına (hisse → hisse.html, öteki → enstruman.html) */
  var AD = { 'BIST 100': 'xu100', 'BIST 30': 'xu030', 'BIST Banka': 'xbank', 'BIST Sınai': 'xusin', 'USD': 'dolar', 'EUR': 'euro', 'GBP': 'sterlin', 'CHF': 'frank', 'JPY': 'yen', 'SAR': 'riyal',
    'Gram Altın': 'gram-altin', 'Çeyrek Altın': 'ceyrek-altin', 'Cumhuriyet Altını': 'cumhuriyet-altini', '22 Ayar Bilezik': 'bilezik', 'Ons Altın': 'ons-altin', 'Gümüş': 'gumus',
    'Brent': 'brent', 'WTI': 'wti', 'Doğal Gaz': 'dogal-gaz', 'Gümüş (ons)': 'gumus-ons', 'Bakır': 'bakir', 'Buğday': 'bugday' };
  PV.DVZ.forEach(function(r){ AD[r[0]] = r[8]; }); PV.ALT.forEach(function(r){ AD[r[0]] = r[8]; }); PV.EMT.forEach(function(r){ AD[r[0]] = r[7]; });
  PV.href = function(ad){
    if (PV.hisse(ad)) return K.u('ekranlar/icerik/hisse.html', 'kod=' + String(ad).toUpperCase());
    var k = AD[ad] || (KAYIT[String(ad).toLowerCase()] ? String(ad).toLowerCase() : null);
    return k ? K.u('ekranlar/icerik/enstruman.html', 'kod=' + k) : '';
  };
  /* "1.012,00" → 1012 */
  PV.sayi = function(s){ return parseFloat(String(s).replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0; };
  PV.isaretli = function(deg, yon){ return PV.sayi(deg) * (yon === 'd' ? -1 : 1); };
})();
