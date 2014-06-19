var val = $('COUNTRY_BIRTH');   

if(val.any('Don\'t know','Prefer not to answer','NA').value()){
  val = null;
  
}else {
  val = val.upperCase();
  
  if (val.matches(/(\w*\s*REPUBLIC OF)\s+(\w+)/gi).value()){
  
  val = RegExp.$2+', '+RegExp.$1;
  
  }
}

val = newValue(val,'text');


//---------------------------------------------------------
if(val.eq('OTHER COUNTRY').value()){
  
  var other = $('COUNTRY_MOTHER_OTHER');

  other.map({         // map and correct the typo. .... the dict is progressively updated with new typo or country
    'NA':null,
    "ADEN":"OTHER",
    "ALEPPO":"SYRIAN ARAB REPUBLIC",
    "AMSTERDAM":"NETHERLANDS",
    "ANGRIULLA":"ANGUILLA",
    "ANGUILLA":"ANGUILLA",
    "ARMENIA/TURKEY":"OTHER",
    "ARMENIAN":"ARMENIA",
    "ARGENTIAN":"ARGENTINA",
    "ARGENTINE":"ARGENTINA",
    "ASHTON UNION ILAND":"SAINT VINCENT AND THE GRENADINES",
    "AUSRIA":"AUSTRIA",
    "AUSTRIA -HUNGARY":"OTHER",
    "AUSTRIA-HUNGARY":"OTHER",
    'AUSTRIA AND GERMANY': 'OTHER',
    'AUSTERI':'OTHER',
    "AZERBAJDJAN":"AZERBAIJAN",
    "TURKEY, ARMENIAN":"OTHER",
    "AZORES":"OTHER",
    "NASSAU, BAHAMAS":"BAHAMAS",
    "BABADOS":"BARBADOS",
    "BARBADOES":"BARBADOS",
    "BARBADOS WEST INDIES":"BARBADOS",
    'BARBADOS, ENGLAND': 'OTHER',
    "BEGIUM":"BELGIUM",
    "BELGEM":"BELGIUM",
    'BELGIQUE': 'BELGIUM',
    'BELGUIM BRUSSELLS': 'BELGIUM',
    "BELGIUM ":"BELGIUM",
    "BELGIAN":"BELGIUM",
    "BELGUM":"BELGIUM",
    "BE;GIUM":"BELGIUM",
    "BOSNIA":"BOSNIA HERZEGOVINA",
    "BOSNIA AND HERCEGOVINA":"BOSNIA HERZEGOVINA",
    "BOSNIA AND HERZEGOVINA":"BOSNIA HERZEGOVINA",
    "BOSNIA AND HERZEGOVINA (FORMERLY YUGOSLAVIA)":"BOSNIA HERZEGOVINA",
    "BOSNIA NAD NHERCEGOWINA":"BOSNIA HERZEGOVINA",
    "BOSNIA&HERCEGOVINA":"BOSNIA HERZEGOVINA",
    "BOSNIA-HERCEOGOVINA":"BOSNIA HERZEGOVINA",
    'BOSNIA & HERCEGOWINA': 'BOSNIA HERZEGOVINA',
    'BOSNIA HERTZEGOVINA': 'BOSNIA HERZEGOVINA',
    "BRAZZAVILLE":"CONGO",
    "BRITAIN":"UNITED KINGDOM",
    "BRITIAN":"UNITED KINGDOM",
    "UNITEDKINGDOM":"UNITED KINGDOM",
    "BRITISH GIANNA":"OTHER",
    "BRITISH GUIANA":"OTHER",
    "BRITISH GUIANA (NOW GUYANA)":"OTHER",
    "BRITISH GUYANA":"OTHER",
    "BRITISH HONG KONG":"OTHER",
    "BRITISH INDIA":"OTHER",
    "BRITISH WEST INDIES":"OTHER",
    "BURMA":"BURMAR",
    "BURMA (MYANMAR)":"BURMAR",
    "BURMA (MYNMAR)":"BURMAR",
    "BURMMA":"BURMAR",
    "MYANMAR (BURMA)":"BURMAR",
    'MYANMMAR (BURMA)': 'BURMA',
    "CENTRAL AMERICA":"OTHER",
    "CHANNEL ISLAND ZARK":"OTHER",
    "CHANNEL ISLANDS":"OTHER",
    "COLOMBIA, SOUTH AMERICA":"COLOMBIA",
    "CROATIA,CROATIA":"CROATIA",
    "CROATIA/HRVATSKA":"CROATIA",
    "CROTIA":"CROATIA",
    "ITALY (NOW CROATIA)":"OTHER",
    "CHIE":"CHILE",
    "CYPRESS":"CYPRUS",
    "CHEC":"CZECH REPUBLIC",
    "CHEZ":"CZECH",
    "CZEC":"CZECH",
    "CHECH":"CZECH REPUBLIC",
    "CHECH REPUBLIC":"CZECH REPUBLIC",
    "CHECH REPUPLIC":"CZECH REPUBLIC",
    "CZECH":"CZECH REPUBLIC",
    "CZECH  REP":"CZECH REPUBLIC",
    "CZECH REPUBLIC":"CZECH REPUBLIC",
    "CHECHOSLOVAKIA":"CZECHOSLOVAKIA",
    "CHECISLOVAKIA":"CZECHOSLOVAKIA",
    "CHECKOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECH REPUBLIC (CZECHOSLOVAKIA IN 1925)":"CZECHOSLOVAKIA",
    "CZECHASLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHESLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHKOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHOLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHOSLOVAKIA (NOW CZECH REPUBLIC)":"CZECHOSLOVAKIA",
    "CZECHOSLOVAKIA---AUSTRO-HUNGARY":"OTHER",
    "CZECHOSLOVAKIA/CZECH REPUBLIC":"CZECHOSLOVAKIA",
    "CZECHSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECKLOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECKSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZEKOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZHECKSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHOSLAVIA":"CZECHOSLOVAKIA",
    "CHECKOSLAVIA":"CZECHOSLOVAKIA",
    "CZECHOSLOVKIA":"CZECHOSLOVAKIA",
    "CZECHOSOVAKIA":"CZECHOSLOVAKIA",
    "CZECHOLSLOVAKIA":"CZECHOSLOVAKIA",
    "CZECHLOSLOVAKIA":"CZECHOSLOVAKIA",
    "CZCHECSLOVACHIA":"CZECHOSLOVAKIA",
    "SLOVAK REPUBLIC (CZECHOSLOVAKIA)":"CZECHOSLOVAKIA",
    "SLOVAKIA (FORMER CZECHOSLOVAKIA)":"CZECHOSLOVAKIA",
    "DUTCH EAST INDIES":"OTHER",
    "DUTCH EAST INDIES (INDONESIA)":"OTHER",
    "DUTCH INDONESIA":"OTHER",
    "COMMONWEALTH OF DOMINICA":"DOMINICA",
    "DOMINIC":"DOMINICA",
    "DOMINICA WEST INDIES":"OTHER",
    "DOMINICA, WEST INDIES":"OTHER",
    'DOMNINIC': 'DOMINICA',
    "DOMINICAN REP":"DOMINICAN REPUBLIC",
    "ENGLAND":"UNITED KINGDOM",
    "ENGLAND,ENGLAND":"UNITED KINGDOM",
    "INDOMESIA":"INDONESIA",
    "INDONESIA (DUTCH)":"OTHER",
    "INDONESIA WHEN DUTCH":"OTHER",
    "ALEXANDRIA, EGYPT":"EGYPT",
    "EGEPT":"EGYPT",
    "EGYPT":"EGYPT",
    "EGYPTE":"EGYPT",
    "EYGPT":"EGYPT",
    "ÃGYPTE":"EGYPT",     //no worry 
    "FINLAD":"FINLAND",
    "FINLAND/":"FINLAND",
    "FINLOAND":"FINLAND",
    "GRENADA":"GRENADA",
    "GRENADA, W.I.":"OTHER",
    'HOLLAND': 'NETHERLANDS',
    "HOLLAND, EUROPE":"NETHERLANDS",
    "HOLLAND, NETHERLANDS":"NETHERLANDS",
    "HOLLAND,HOLLAND":"NETHERLANDS",
    "HOLLAND/NETHERLANDS":"NETHERLANDS",
    "HOLLANDE":"NETHERLANDS",
    "HOLLLAND":"NETHERLANDS",
    "NEHTERLAND":"NETHERLANDS",
    "NETHERLANDS (HOLLAND)":"NETHERLANDS",
    "NETHERLANDS/HOLLAND":"NETHERLANDS",
    'THE NETHERLANDS': 'NETHERLANDS',
    "NETHERLANDS":"NETHERLANDS",
    "NEATHERLANDS":"NETHERLANDS",
    "NEHERLANDS":"NETHERLANDS",
    "NEITHERLANDS":"NETHERLANDS",
    "NETHERLAND":"NETHERLANDS",
    'NEDERLAND': 'NETHERLANDS',
    "NETHERLANDA":"NETHERLANDS",
    "NETHERLANDS ":"NETHERLANDS",
    "NETHERLANDS,NETHERLANDS":"NETHERLANDS",
    "THE NETHERLAND":"NETHERLANDS",
    "THE NETHERLANDS ":"NETHERLANDS",
    "NETHERLAANDS":"NETHERLANDS",
    "NETHERLANDS HOLLAND":"NETHERLANDS",
    "N ETHERLANDS":"NETHERLANDS",
    "NEHTHERLANDS":"NETHERLANDS",
    "NETERLANDS":"NETHERLANDS",
    "NETHERELANDS":"NETHERLANDS",
    "NETHERLAMDS":"NETHERLANDS",
    "NETHERLANDSW":"NETHERLANDS",
    "TH NETHERLANDS":"NETHERLANDS",
    "THE NETHERLANDA":"NETHERLANDS",
    "THE NETHERLANDS,THE NETHERLANDS":"NETHERLANDS",
    "THENETHERLANDS":"NETHERLANDS",
    "HOLAND":"NETHERLANDS",
    "HOLLAN":"NETHERLANDS",
    "HOLLAND ":"NETHERLANDS",
    "HOLLAND AMSTERDAM":"NETHERLANDS",
    "OLLAND":"OTHER",
    "JOHORE":"OTHER",
    "JERSEY":"OTHER",
    'YUGOSLAV':'YUGOSLAVIA',
    "JGOSLAVIA":"YUGOSLAVIA",
    'YUGOSLAVIA': 'YUGOSLAVIA',
    "FORMER YUGOSLAVIA":'YUGOSLAVIA',
    "JUGOSLAVIA":'YUGOSLAVIA',
    "YUGOSLAVIA ":'YUGOSLAVIA',
    "YUGOSLOVIA":'YUGOSLAVIA',
    "YUGOSLAVIA/BOSNIA":"YUGOSLAVIA",
    "CROATIA [YUGOSLAVIA THEN]":'YUGOSLAVIA',
    "CROATIA (FORMER YUGOSLAVIA)":'YUGOSLAVIA',
    "CROATIA (FORMERLY YUGOSLAVIA)":'YUGOSLAVIA',
    "CROATIA FORMER YUGOSLAVIA":'YUGOSLAVIA',
    "EX YUGOSLAVIA":'YUGOSLAVIA',
    "FORMER YUGOSLAVIA  ":'YUGOSLAVIA',
    "FORMER YUGOSLAVIA (MACEDONIA)":'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    "FORMER YUGOSLAVIA (NOW CROATIA)":'YUGOSLAVIA',
    "FORMER YUGOSLAVIA; NOW SLOVENIA":'YUGOSLAVIA',
    "MACEDONIA FORMER YUGOSLAVIA":'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    "LATIVA":"LATVIA",
    "LATVIJA":"LATVIA",
    "MADEIRA":"OTHER",
    "MADERIA":"OTHER",
    "MALTA, RABAT":"MALTA",
    "MALTRA":"MALTA",
    "GOA":"OTHER",
    "GOA, INDIA":"OTHER",
    "MONTENEGRO - FORMER YUGOSLAVIA. ":"YUGOSLAVIA",
    "PREVIOUS YUGOSLAVIA (BOSNIA HERZOGOVINA)":"YUGOSLAVIA",
    "ROMAINA":"ROMANIA",
    "ROMAINIA":"ROMANIA",
    "ROMANI":"ROMANIA",
    "ROUMANIA":"ROMANIA",
    "ROUMANIE":"ROMANIA",
    "RUMANIA":"ROMANIA",
    "REPUBLIC OF IRELAND":"IRELAND",
    "AT SEA":"OTHER",
    "INDONESIAN SHIP ON THE RED SEA":"OTHER",
    "AFRICA (NORTHERN RHODESIA)":"OTHER",
    "RHODESIA/ZIMBABWE":'SOUTHERN RHODESIA',
    'RHODESIA': 'SOUTHERN RHODESIA',
    'RHODESIA/ ZIMBABWE': 'SOUTHERN RHODESIA',
    ",SCOTLAND":"UNITED KINGDOM",
    "SCOTLAND":"UNITED KINGDOM",
    "SCOTLND":"UNITED KINGDOM",
    "SCOTTLAND":"UNITED KINGDOM",
    "SCTOLAND":"UNITED KINGDOM",
    "SERBIA ( YOUGOSLAVIA )":'YUGOSLAVIA',
    "SERBIA (FORMER YUGOSLAVIA)":'YUGOSLAVIA',
    "SERBIA":"SERBIA",
    "SERBIAN":"SERBIA",
    "SRBIA":"SERBIA",
    "SLOVENIA -- FORMERLY YUGOSLAVIA":'YUGOSLAVIA',
    "SLOVANIA":"SLOVENIA",
    "SLOVENIA":"SLOVENIA",
    "SLOVENIA --- FORMERLY YUGOSLAVIA":'YUGOSLAVIA',
    "SLOVENIAN":"SLOVENIA",
    "SLOVENIJA":"SLOVENIA",
    "SYRIA":"SYRIAN ARAB REPUBLIC",
    "SOCIALIST FEDERAL REPUBLIC OF YUGOSLAVIA":'YUGOSLAVIA',
    "SOMALI":"SOMALIA",
    "SOMALI REPUBLIC":"SOMALIA",
    "REP OF SOUTH AFRICA":"SOUTH AFRICA",
    "REPUBLIC OF SOUTH AFRICA":"SOUTH AFRICA",
    "SOUTH AFRICAN":"SOUTH AFRICA",
    "SOUTH-AFRICA":"SOUTH AFRICA",
    "SOUTHAFRICA":"SOUTH AFRICA",
    "TADJIKISTAN":"TAJIKISTAN",
    "TADZIKISTAN":"TAJIKISTAN",
    "TANGANYIKA":"OTHER",
    "PORT OF SPAIN, TRINIDAD":"TRINIDAD AND TOBAGO",
    "REPUBLIC OF TRINIDAD":"TRINIDAD AND TOBAGO",
    "REPUBLIC OF TRINIDAD AND TOBAGO":"TRINIDAD AND TOBAGO",
    'TRINIDAD': 'TRINIDAD AND TOBAGO',
    "TRINAD":"TRINIDAD AND TOBAGO",
    "TINIDAD":"TRINIDAD AND TOBAGO",
    "TRINADAD":"TRINIDAD AND TOBAGO",
    "TRINDAD":"TRINIDAD AND TOBAGO",
    "TRINDAD AND TOBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD  TOBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD & TOBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD & TOBAGO WEST INDIES":"OTHER",
    "TRINIDAD & TOPBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD (WEST INDIES)":"OTHER",
    "TRINIDAD AND TABAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD AND TOBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD TOBAGO":"TRINIDAD AND TOBAGO",
    "TRINIDAD WEST INDIES":"OTHER",
    "TRINIDAD WI":"OTHER",
    "TRINIDAD, WEST INDIES":"OTHER",
    "TRINIDAD,WEST INDIES":"OTHER",
    "TRINIDAD.  WEST INDIES":"OTHER",
    "TRINIDADAND TOBAGO":"TRINIDAD AND TOBAGO",
    'TRINIDAD&TOBAGO': 'TRINIDAD AND TOBAGO',
    'TOBAGO': 'TRINIDAD AND TOBAGO',
    'TRINIDAD & TOBAGO (T&T)': 'TRINIDAD AND TOBAGO',
    'TRINIDAD BWI': 'OTHER',
    'TRINIDAD. WEST INDIES': 'OTHER',
    "REPUBLIC OF TURKEY":"TURKEY",
    "TURKISH":"TURKEY",
    "SOUTH YEMAN":"YEMEN, DEMOCRATIC",
    "YEMEN":"YEMEN",
    "UKOSLAVIA":'YUGOSLAVIA',
    "YUGOSALVIA":"YUGOSLAVIA",
    "YOUGOSLAVIA":'YUGOSLAVIA',
    "YOGASOLVIA":"YUGOSLAVIA",
    "YUGASLAVIA":'YUGOSLAVIA',
    "YUGASLAVIA (CROATIA)":'YUGOSLAVIA',
    "YUGOSLALVIA":'YUGOSLAVIA',
    "YUGOSLAVIA (CROATIA)":'YUGOSLAVIA',
    "YUGOSLAVIA (SERBIA)":'YUGOSLAVIA',
    "YUGOSLAVIA (SLOVENIA)":'YUGOSLAVIA',
    "YUGOSLAVIA, SERBIA":'YUGOSLAVIA',
    "YUGOSLAVIA,YUGOSLAVIA":'YUGOSLAVIA',
    "YUGOSLAVIA/SERBIA":'YUGOSLAVIA',
    "YUGOSLAVIAN-GERMAN":'YUGOSLAVIA',
    "YOGOSLAVIA":'YUGOSLAVIA',
    "YOGOSLOVIA":'YUGOSLAVIA',
    'YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA,YUGOSLAVIA':'YUGOSLAVIA',
    "YUGOSLAVIA NOW MONTENEGRO":"YUGOSLAVIA",
    "YUGOSLAVIJA":"YUGOSLAVIA",
    "YUGOSLAVIS":"YUGOSLAVIA",
    "YUGOSLVIA":"YUGOSLAVIA",
    "YUGOSOLVIA":"YUGOSLAVIA",
    "YUOGOSLAVIA":"YUGOSLAVIA",
    'IRAN': 'IRAN, ISLAMIC REPUBLIC OF',
    'PALESTINE': 'PALESTINE, STATE OF',
    "ISRAELPALESTINE":"OTHER",
    "PALASTINE":"PALESTINE, STATE OF",
    "PALESTIN":"PALESTINE, STATE OF",
    "PALESTINA":"PALESTINE, STATE OF",
    "PALESTINE ISRAEL":"OTHER",
    "PALISTINE":"PALESTINE, STATE OF",
    'MACEDONIA': 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    'AFRICA': 'OTHER',
    'ANTIGUA': 'ANTIGUA AND BARBUDA',
    'LAOS': 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
    'HONGKONG': 'HONG KONG',
    'KOREA': 'KOREA, REPUBLIC OF',
    'TRINIDAD ': 'TRINIDAD AND TOBAGO',
    'BRASIL': 'BRAZIL',
    'MOLDOVA': 'MOLDOVA, REPUBLIC OF',
    'ST VINCENT': 'SAINT VINCENT AND THE GRENADINES',
    'EAST AFRICA': 'OTHER',
    'ISREAL': 'ISRAEL',
    "ISRAEAL":"ISRAEL",
    "ISRAEL":"ISRAEL",
    "LISRAEL":"ISRAEL",
    'ST.VINCENT': 'SAINT VINCENT AND THE GRENADINES',
    'BELGUIM': 'BELGIUM',
    'BOLIVIA': 'BOLIVIA, PLURINATIONAL STATE OF',
    'CAMEROUN': 'CAMEROON',
    'ERITREA': 'ERITREA',
    'MACAU': 'MACAO',
    'ST.LUCIA': 'SAINT LUCIA',
    'SUISSE': 'SWITZERLAND',
    'MORROCO': 'MOROCCO',
    "MAROC":"MOROCCO",
    "MAROCCO":"MOROCCO",
    "MAROCO":"MOROCCO",
    "MOROCCO":"MOROCCO",
    "MOROCCOA":"MOROCCO",
    "MORROCCO":"MOROCCO",
    'SOUTH AMERICA': 'OTHER',
    'UGANADA': 'UGANDA',
    'USA': 'UNITED STATES',
    'WALES': 'UNITED KINGDOM',
    'ALGÃ©RIE': 'ALGERIA',
    'BOSNIA ': 'BOSNIA HERZEGOVINA',
    'BRUNEI': 'BRUNEI DARUSSALAM',
    'CURACAO': 'CURAÇAO',
    'CZECH REP.': 'CZECH REPUBLIC',
    'EUROPE': 'OTHER',
    'GEORGIA': 'OTHER',
    'HAÃ¯TI': 'HAITI',
    "HAITI":"HAITI",
    "HTI":"HAITI",
    'HONG KONG, CHINA': 'HONG KONG',
    'RUSSIA': 'RUSSIAN FEDERATION',
    "SOVIET UNION":"OTHER",
    "EAST PRUSSIA":"RUSSIAN FEDERATION",
    "RUSSIA, SOUTH AFRICA":"OTHER",
    "RUSSIAN EMPIRE":"OTHER",
    "WHITE RUSSIA":"OTHER",
    'SAINT VINCENT': 'SAINT VINCENT AND THE GRENADINES',
    'ST LUCIA': 'SAINT LUCIA',
    'ST. LUCIA': 'SAINT LUCIA',
    "SINT MAARTEN":"SINT MAARTEN (DUTCH PART)",
    'TANZANIA, EAST AFRICA': 'TANZANIA',
    'TIBET': 'OTHER',
    'TUNISIE': 'TUNISIA',
    'UAE': 'UNITED ARAB EMIRATES',
    '123456789A123456789B123456789C123456789D123456789E123456789E123456789F123456789G123456789H123456789I': null,
    'ALGERIE': 'ALGERIA',
    'ALL BORN IN DIFFERENT COUNTRIES': 'OTHER',
    'ALL DIFFERENT COUNTRIES': 'OTHER',
    'AMERICA': 'OTHER',
    'ANGOLA - AFRICA': 'ANGOLA',
    'ANGOLA, AFRICA': 'ANGOLA',
    'ARGENTINA, SOUTH AMERICA': 'ARGENTINA',
    'ARUBA, NA': 'OTHER',
    'AUSTRALIAN': 'AUSTRALIA',
    'AUSTRIALA': 'AUSTRALIA',
    'BELARUS ': 'BELARUS',
    'BERMUDA,BERMUDA,BERMUDA,BERMUDA': 'BERMUDA',
    'BIH': 'OTHER',
    'BORN AT SEA': 'OTHER',
    'BORN AT SEA - BAY OF BISCAY': 'OTHER',
    'BRAZIL, ITALY AND PORTUGAL': 'OTHER',
    'BRESIL': 'BRAZIL',
    'BUDAPEST': 'HUNGARY',
    'CAMBODGE': 'CAMBODIA',
    'COLOMBIAN': 'COLOMBIA',
    'R.D.CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'REP DEMOCRATIC OF CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'RÃ©PUBLIQUE DÃ©MOCROTIQUE DU CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'CONGO DEMOCRATIQUE': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'CONGO KINSHASA': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    "BELGIAN CONGO":"OTHER",
    "CONGO DÃ©MOCRATIQUE":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "DR CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "DEMOCRATIC REPUBLIC OF CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "R.D. CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "RD CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "RDCONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "REP. DEMOCRATIC OF CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "RÃ©PUBLIQUE DEMOCRATIQUE DU CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "RÃ©PUBLIQUE DÃ©MOCRATIQUE DU CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    "CONGO, REPUBLIC DEMOCRATIC OF":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    'DEMOCRATIC REP CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    "REPUBLIQUE DU CONGO":"CONGO, DEMOCRATIC REPUBLIC OF THE",
    'R D CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'R. D. CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'REP. DEM DU CONGO': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'DRC': 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    'ZAIRE': 'OTHER',
    'CURACCAO': 'CURAÇAO',
    'CYPRUS (BRITISH TERRITORY)': 'OTHER',
    'CZE': 'CZECH REPUBLIC',
    'CZECH REP': 'CZECH REPUBLIC',
    'DANMARK': 'DENMARK',
    "/DENMARK":"DENMARK",
    "DEMARK":"DENMARK",
    "DENMAEK":"DENMARK",
    "DENMARK":"DENMARK",
    'DAR ES SALAAM': 'TANZANIA',
    'DENMARK, CROATIA': 'OTHER',
    'DUTCH WEST INDIES': 'OTHER',
    'E AFRICA': 'OTHER',
    'EAST PAKISTAN': 'OTHER',
    "PAKISATAN":"PAKISTAN",
    "PAKISTAN (NOTE - THERE WAS NO PAKISTAN BEFORE 1947 SO DEFAULT IS INDIA)":"OTHER",
    "PAKISTAN, SINDH, KARACHI":"PAKISTAN",
    "PAKISTAN,PAKISTAN":"PAKISTAN",
    "PAKISTSN":"PAKISTAN",
    "PARKISTAN":"PAKISTAN",
    'PAKISTAN,SINDH,  KARACHI': 'PAKISTAN',
    'KARACHI': 'PAKISTAN',
    'PQKISTAN': 'PAKISTAN',
    'EGYPT,FRANCE,GREECE &SUDAN': 'OTHER',
    'EL  SALVADOR': 'EL SALVADOR',
    'EL SALVADOR ': 'EL SALVADOR',
    'EL SALVADOR C.A.': 'OTHER',
    "EL SALVADOR C. A.":"EL SALVADOR",
    'EL SALVADOR, CHINA': 'OTHER',
    'ESTONIA AND RUSSIA': 'OTHER',
    'ETHIPIA': 'ETHIOPIA',
    'ETHIYOPIA': 'ETHIOPIA',
    "ETHOPIA":"ETHIOPIA",
    'FIJI ISLANDS': 'FIJI',
    'FRANCE (ANTILLES FRANCAISES, GUADELOUPE)': 'OTHER',
    'GAUTEMALA': 'GUATEMALA',
    'GAYANA': 'GUYANA',
    'GHANA,GHANA': 'GHANA',
    'GHANA/WEST AFRICA': 'GHANA',
    'GUAYANA': 'GUYANA',
    'GUINEA REPUBLIC': 'GUINEA',
    'GUYANA / SOUTH AMERICA': 'GUYANA',
    'GUYANA, S.A': 'GUYANA',
    'GUYANA, S.A.': 'GUYANA',
    "GUANA":"GUYANA",
    "GUYANA":"GUYANA",
    "GUYANA - SOUTH AMERICA":"GUYANA",
    "GUYANA SOUTH AMERICA":"GUYANA",
    "GUYANA, SA":"GUYANA",
    "GUYANA, SOUTH AMERICA":"GUYANA",
    "GYANA":"GUYANA",
    'HAIFA, ISRAEL': 'ISRAEL',
    'HAITI/ RÃ©PUBLIQUE DOMINICAINE/ FRANCE': 'OTHER',
    'HISPAGNOLA': 'OTHER',
    'HONDURAS C.A.': 'HONDURAS',
    'HONG KOMG': 'HONG KONG',
    'HONG KONG (BCC)': 'OTHER',
    'HONG KONG (BRITISH COLONY)': 'OTHER',
    'HONG KONG SAR': 'OTHER',
    'HONGRIE': 'HUNGARY',
    "HUNGRAY":"HUNGARY",
    'HRVATSKA': 'CROATIA',
    'HUNGARY AND AUSTRIA': 'OTHER',
    "AUSTRO-HUNGARY":"OTHER",
    "FORMERLY HUNGARY":"OTHER",
    "HU GARY":"HUNGARY",
    "HUNGARIAN":"HUNGARY",
    "HUNGARY-ROMANIA":"OTHER",
    "HUNGERY":"HUNGARY",
    "HUNGRY":"HUNGARY",
    'I WAS  BORN IN CANADA, OTHERS IN YUGOSLAVIA': 'CANADA',
    'INDO-PAK': 'OTHER',
    'INODESIA': 'INDONESIA',
    'IRAQ,IRAQ': 'IRAQ',
    'KAMPUCHIA': 'OTHER',
    'KASHMER': 'OTHER',
    'KAZAHSTAN': 'KAZAKHSTAN',
    'KENYA AFRICA': 'KENYA',
    'KENYA AND INDIA': 'OTHER',
    'KOREAN': 'KOREA, REPUBLIC OF',
    'KOSOVO': 'OTHER',
    'KWAIT': 'KUWAIT',
    'LAO': 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
    'LEBANOON': 'LEBANON',
    "LIBANON":"LEBANON",
    "LEBON":"OTHER",
    'LIBAN': 'LEBANON',
    "LITHIANUA":"LITHUANIA",
    "LITHIUANIA":"LITHUANIA",
    "LITHUANIAN":"LITHUANIA",
    "LITHUNIA":"LITHUANIA",
    "LLITHUANIA":"LITHUANIA",
    "LTHUANIA":"LITHUANIA",
    'LUXEMBURG': 'LUXEMBOURG',
    'MACAO (PORTUEGUESE COLONY)': 'MACAO',
    'MAIRITIUS': 'MAURITIUS',
    'MALAYA': 'MALAYSIA',
    "MALAYASIA":"MALAYSIA",
    "SINGAPORE MALAYSIA":"MALAYSIA",
    'MALTA, EUROPE': 'MALTA',
    'MANAGUA': 'NICARAGUA',
    'MAURIITIUS': 'MAURITIUS',
    'MAURITUIS': 'MAURITIUS',
    'MEXCIO': 'MEXICO',
    'MEXICO CITY': 'MEXICO',
    'MIXED': 'OTHER',
    "MONTREAL":"CANADA",
    'MOZAMBIQUE, AFRICA': 'MOZAMBIQUE',
    'NASSAU,BAHAMAS': 'BAHAMAS',
    'NEDERLANDS': 'NETHERLANDS',
    'NETHERLANDS ANTILLES (CURACAO)': 'NETHERLANDS ANTILLES',
    'NETHERLANS': 'NETHERLANDS',
    'NEW GUINEA': 'PAPUA NEW GUINEA',
    'NEWFOUNDLAND': 'CANADA',
    'NEWFOUNDLAND (BEFORE IT JOINED CANADA)': 'OTHER',
    'NEWFOUNDLAND 1947 WAS NOT PART OF CANADA ': 'OTHER',
    'NEWFOUNDLAND PRIOR TO CONFEDERATION': 'OTHER',
    "DOMINION OF NEWFOUNDLAND":"OTHER",
    "NEWFOUNDLAND (NOT A MEMBER OF CANADA AT THE TIME)":"OTHER",
    "NEWFOUNDLAND (BEFORE CONFEDERATION)":"OTHER",
    "NEWFOUNDLAND (PRE 1949)":"OTHER",
    "NEWFOUNDLAND (PRE-1949)":"OTHER",
    "NEWFOUNDLAND (PRIOR TO 1949)":"OTHER",
    "NEWFOUNDLAND (PRIOR TO JOINING CANADA)":"OTHER",
    "NEWFOUNDLAND - UK":"OTHER",
    "NEWFOUNDLAND 1916":"OTHER",
    "NEWFOUNDLAND PRE CONFEDERATION":"OTHER",
    "NEWFOUNDLAND UK COLONY":"OTHER",
    "NEWFOUNDLAND PRE CONFEDERATION (UK)":"OTHER",
    "NEWFOUNDLAND, BEFORE IT WAS CANADA":"OTHER",
    "NEWFOUNDLAND, PRE CONFEDERATION":"OTHER",
    'NEW FOUNDLAND': 'CANADA',
    'NEWFOUNDLAND (PRIOR TO NFLD. JOINING CANADA)': 'OTHER',
    'NEWFOUNDLAND 1920': 'OTHER',
    "NEW ZEAKAND":"NEW ZEALAND",
    "NEW ZELAND":"NEW ZEALAND",
    "NZ":"NEW ZEALAND",
    "NEW DEHLI":"INDIA",
    "INDIAN SUBCONTINENT":"OTHER",
    "NORTHERN IRELAND":"UNITED KINGDOM",
    "NORTH KOREA":"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
    'PARAGUAY, S.A.': 'PARAGUAY',
    'PARAQUAY': 'PARAGUAY',
    'PARENTS AND I WERE FROM ONTARIO, MY ONE SET OF GRANDPARENTS WERE FROM SCOTLAND': 'CANADA',
    'PERÃº': 'PERU',
    'POLAND/ CANADA': 'OTHER',
    "POLAND (CURRENTLY UKRAINE)":"OTHER",
    'QUEBEC':'CANADA',
    'NORTHERN RHODESIA': 'OTHER',
    'RUSSIA, SOUTH AFRICA, USA': 'OTHER',
    'SARAWAK': 'OTHER',
    'SAUDI ARABIC': 'SAUDI ARABIA',
    'SAUDI AREBIA': 'SAUDI ARABIA',
    'SEALAND': 'OTHER',
    'SL': 'OTHER',
    'SLOVAK REPUBLIC': 'SLOVAKIA',
    "SLOVAKA":"SLOVAKIA",
    'SOUTH KOREA': 'KOREA, REPUBLIC OF',
    'SOUTHAMERICA': 'OTHER',
    'SPAIN,SPAIN': 'SPAIN',
    'SRIANKA': 'SRI LANKA',
    'SRILANKA': 'SRI LANKA',
    'SRLANKA': 'SRI LANKA',
    'CEYLON': 'OTHER',
    "CEYLON (SRILANKA)":"OTHER",
    "SRI LANKA":"SRI LANKA",
    'SRI-LANKA': 'SRI LANKA',
    "SRI LANKS":"SRI LANKA",
    "ST EUSTAIS":"BONAIRE, SAINT EUSTATIUS AND SABA",
    'ST LUCIA (CARIBBEAN)': 'SAINT LUCIA',
    "ST. PIERRE, A FRENCH POSSESSION":"SAINT PIERRE AND MIQUELON",
    'ST VINCENT & THE GRENADINES': 'SAINT VINCENT AND THE GRENADINES',
    'ST VINICENET': 'SAINT VINCENT AND THE GRENADINES',
    'ST,VINCENT': 'SAINT VINCENT AND THE GRENADINES',
    'ST. CHRISTOPHER': 'OTHER',
    "ST KITTS":"SAINT KITTS AND NEVIS",
    'NEVIS': 'SAINT KITTS AND NEVIS',
    "ST KITTS AND NEVIS":"SAINT KITTS AND NEVIS",
    "ST KITTS, WEST INDIES":"OTHER",
    "ST. KITTS":"SAINT KITTS AND NEVIS",
    "ST. KITTS & NEVIS":"SAINT KITTS AND NEVIS",
    "ST. KITTS/NEVIS":"SAINT KITTS AND NEVIS",
    "ST.KITTS":"SAINT KITTS AND NEVIS",
    "ST.KITTS AND NEVIS":"SAINT KITTS AND NEVIS",
    "ST.KITTS,WEST INDIES":"OTHER",
    'ST. KITTS,ST. KITTS': 'SAINT KITTS AND NEVIS',
    'ST. VINCENT ': 'SAINT VINCENT AND THE GRENADINES',
    'ST. VINCENT AND THE GRENADINES': 'SAINT VINCENT AND THE GRENADINES',
    'ST. VINCENT W.I.': 'OTHER',
    'ST. VINCENT, WEST INDIES': 'OTHER',
    'ST.LUCIA, WEST INDIES': 'OTHER',
    "ST. LUCIA , WEST INDIES":"OTHER",
    "STLUCIA":"OTHER",
    'ST. VINCENT': 'SAINT VINCENT AND THE GRENADINES',
    "ST.VINCENT & GRENADINES":"SAINT VINCENT AND THE GRENADINES",
    "ST.VINCENT AND THE GRENADINES":"SAINT VINCENT AND THE GRENADINES",
    'ST.VINCENT & THE GRENADINES': 'SAINT VINCENT AND THE GRENADINES',
    'STVINCENT': 'SAINT VINCENT AND THE GRENADINES',
    "ST. VINCENT, W I":"OTHER",
    "STVINCENT W.I.":"OTHER",
    'SWITZERLAND ': 'SWITZERLAND',
    'SWTZERLAND': 'SWITZERLAND',
    'T&T': 'TRINIDAD AND TOBAGO',
    'TAIWAN ROC': 'TAIWAN, PROVINCE OF CHINA',
    "TAIWAN,TAIWAN":"TAIWAN, PROVINCE OF CHINA",
    'TIAWAN': 'TAIWAN, PROVINCE OF CHINA',
    'TAIWAN': 'TAIWAN, PROVINCE OF CHINA',
    'TANZANIA EAST AFRICA ': 'TANZANIA, UNITED REPUBLIC OF',
    'TANZANIA,TANZANIA': 'TANZANIA, UNITED REPUBLIC OF',
    'TANZANIA. EAST AFRICA': 'TANZANIA, UNITED REPUBLIC OF',
    'TAZANIA': 'TANZANIA, UNITED REPUBLIC OF',
    "TANZANIA":"TANZANIA, UNITED REPUBLIC OF",
    "TANZANIA EAST AFRICA":"TANZANIA, UNITED REPUBLIC OF",
    "ZANZIBAR TANZANIA":"TANZANIA, UNITED REPUBLIC OF",
    'THE GAMBIA WEST AFRICA': 'GAMBIA',
    'THE NEDERLANDS': 'NETHERLANDS',
    'THE NETERLANDS': 'NETHERLANDS',
    'THE NETHELANDS': 'NETHERLANDS',
    'UK': 'UNITED KINGDOM',
    'UNITED ARAB EMIRATES': 'UNITED ARAB EMIRTATES',
    'URUAGUAY, SOUTH AMERICA': 'URUGUAY',
    'VANEZUALA': 'VENEZUELA, BOLIVARIAN REPUBLIC OF',
    'VENEZUELA ': 'VENEZUELA, BOLIVARIAN REPUBLIC OF',
    'VENEZULA ': 'VENEZUELA, BOLIVARIAN REPUBLIC OF',
    "VENESUALA":"VENEZUELA, BOLIVARIAN REPUBLIC OF",
    "VENEZUELA":"VENEZUELA, BOLIVARIAN REPUBLIC OF",
    'WEST GERMANY': 'OTHER',
    'WEST INDIES': 'OTHER',
    'ZIMBAWBE, AFRICA.': 'ZIMBABWE',
  },other.trim());
  
}else{
  val;
}









