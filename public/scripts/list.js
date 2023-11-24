const list = [
  {
    name: "Yale",
    denounced: false,
    image: "ale_logo%20copy.png",
  },
  {
    name: "Cambridge",
    denounced: false,
    image: "ambridge%20-%20logo.png",
  },
  {
    name: "Care international",
    denounced: false,
    image: "are%20international.png",
  },
  {
    name: "Harvard",
    denounced: false,
    image: "arvard_university_logo.svg%20copy.png",
  },
  {
    name: "Catholic relief services",
    denounced: false,
    image: "atholic%20relief%20services%202.png",
  },
  {
    name: "Save The Children",
    denounced: false,
    image: "AVE%20THE%20CHILDREN%203.png",
  },
  {
    name: "Fawcett Society UK",
    denounced: false,
    image: "awcett%20society%20uk1.png",
  },
  {
    name: "AWID",
    denounced: true,
    image: "AWID2.png",
  },
  {
    name: "UCL",
    denounced: false,
    image: "cl%20-%20logo.png",
  },
  {
    name: "Actionaid",
    denounced: false,
    image: "CTION%20AID%202.png",
  },
  {
    name: "Standford University",
    denounced: false,
    image: "e7675f42f713055b49595da18fcfca42.png",
  },
  {
    name: "EE Network for Gender Issues",
    denounced: false,
    image: "EE%20Network%20for%20Gender%20Issues.png",
  },
  {
    name: "Feministeerium",
    denounced: false,
    image: "eministeerium.png",
  },
  {
    name: "Center for Reproductive Rights",
    denounced: false,
    image: "enter%20for%20Reproductive%20Rights.png",
  },
  {
    name: "King's College London",
    denounced: false,
    image: "ings%20college%20london%20-%20logo_.png",
  },
  {
    name: "Rise Up",
    denounced: false,
    image: "ise%20Up%20-%20Logo.png",
  },
  {
    name: "Sisters Uncut",
    denounced: false,
    image: "isters%20uncut.png",
  },
  {
    name: "MIT",
    denounced: false,
    image: "it_logo8%20copy.png",
  },
  {
    name: "University of Southern California",
    denounced: false,
    image: "iversity-of-southern-california-logo.png",
  },
  {
    name: "Universiteit Leiden",
    denounced: false,
    image: "l-algemeen-internationaal-rgb-color.png",
  },
  {
    name: "Plan International",
    denounced: false,
    image: "lan-international.png",
  },
  {
    name: "Global Fund For Women",
    denounced: false,
    image: "LOBAL%20FUND%20FOR%20WOMEN.png",
  },
  {
    name: "Amnesty",
    denounced: false,
    image: "mnesty-candle%20-3.png",
  },
  {
    name: "Imperial College London",
    denounced: false,
    image: "mperial%20college%20london%20-%20logo_.png",
  },
  {
    name: "UN Women",
    denounced: false,
    image: "n_women.png",
  },
  {
    name: "UNFPA",
    denounced: false,
    image: "NFPA.png",
  },
  {
    name: "Unicef",
    denounced: false,
    image: "nicef%203.png",
  },
  {
    name: "University of Maryland",
    denounced: false,
    image: "niversity-of-maryland-Seal-01%20copy.png",
  },
  {
    name: "Penn",
    denounced: false,
    image: "niversity-of-pennsylvania-seeklogo.com.png",
  },
  {
    name: "Berkeley",
    denounced: false,
    image: "niversity_of_california_Berkeley.png",
  },
  {
    name: "University of south carolina",
    denounced: false,
    image: "niversity_of_south_carolina_logo_copy.png",
  },
  {
    name: "International alliance of women",
    denounced: false,
    image: "nternational%20alliance%20of%20women.png",
  },
  {
    name: "International Center for Research on Women",
    denounced: false,
    image: "nternational%20Center%20for%20Research%20on%20Women%202.png",
  },
  {
    name: "International Women's Health Coalition IWHC 1",
    denounced: false,
    image: "nternational%20Women_s%20Health%20Coalition%20IWHC%201.png",
  },
  {
    name: "Nobel Women",
    denounced: false,
    image: "obel_women_s.png",
  },
  {
    name: "LMU",
    denounced: false,
    image: "ogo_lmu_og.png",
  },
  {
    name: "Womankind Worldwide",
    denounced: false,
    image: "omankind%20Worldwide%20-%20logo.png",
  },
  {
    name: "Women deliver 1",
    denounced: false,
    image: "omen%20deliver%201.png",
  },
  {
    name: "Women for Women International-5",
    denounced: false,
    image: "omen%20for%20Women%20International-5.png",
  },
  {
    name: "Women's International League for Peace and Freedom 3",
    denounced: false,
    image:
      "omen_s%20International%20League%20for%20Peace%20and%20Freedom%203.png",
  },
  {
    name: "Women's lobby",
    denounced: false,
    image: "omen_s%20lobby.png",
  },
  {
    name: "WORLD YWCA",
    denounced: false,
    image: "ORLD%20YWCA%201.png",
  },
  {
    name: "World Vision",
    denounced: false,
    image: "ORLED%20VISION%20CHILDREN.png",
  },
  {
    name: "Southall black sister 2",
    denounced: false,
    image: "outhall%20black%20sister%202.png",
  },
  {
    name: "Southall black sister",
    denounced: false,
    image: "outhall%20black%20sister%203.png",
  },
  {
    name: "NOW",
    denounced: false,
    image: "OW.png",
  },
  {
    name: "EPFL",
    denounced: false,
    image: "pfl%20-%20logo_.png",
  },
  {
    name: "Equality Now",
    denounced: false,
    image: "quality%20Now.png",
  },
  {
    name: "Equality Fund",
    denounced: false,
    image: "quality-fund1.png",
  },
  {
    name: "Rainn",
    denounced: false,
    image: "rainn.png",
  },
  {
    name: "Princeton university",
    denounced: false,
    image: "rinceton_university-Logo.wine%20copy.png",
  },
  {
    name: "Duke University",
    denounced: false,
    image: "ronduked%20copy.png",
  },
  {
    name: "ISHR",
    denounced: false,
    image: "shr-logo.png",
  },
  {
    name: "Association for the prevention and handling of violence in the Family",
    denounced: false,
    image:
      "ssociation%20for%20the%20prevention%20and%20handling%20of%20violence%20in%20the%20Family.png",
  },
  {
    name: "Associazione italiana donne per lo sviluppo",
    denounced: false,
    image: "ssociazione%20italiana%20donne%20per%20lo%20sviluppo.png",
  },
  {
    name: "ETH",
    denounced: false,
    image: "th%20-%20logo.png",
  },
  {
    name: "The Bulgarian Fund for Women",
    denounced: false,
    image: "The%20Bulgarian%20Fund%20for%20Women.png",
  },
  {
    name: "The Feminist Association Union",
    denounced: false,
    image: "The%20Feminist%20Association%20Union.png",
  },
  {
    name: "Duke University",
    denounced: false,
    image: "uke_university_logo%20copy.png",
  },
  {
    name: "Tum",
    denounced: false,
    image: "um%20-%20logo_.png",
  },
  {
    name: "Human Rights Watch",
    denounced: false,
    image: "uman%20Rights%20Watch.png",
  },
  {
    name: "EVAW coaliation",
    denounced: false,
    image: "vaw%20coaliation.png",
  },
  {
    name: "IWDA",
    denounced: false,
    image: "wda3.png",
  },
  {
    name: "AWID",
    denounced: false,
    image: "WID.png",
  },
  {
    name: "Women International GWI",
    denounced: false,
    image: "Women%20International%20GWI.png",
  },
  {
    name: "NWSA",
    denounced: false,
    image: "wsagreen%201.png",
  },
  {
    name: "Oxford University",
    denounced: false,
    image: "xford%20-%20logo.png",
  },
  {
    name: "Czech Women's Lobby",
    denounced: false,
    image: "zech%20Women_s%20Lobby.png",
  },
  {
    name: "Central Information Point of Autinomous Women's Refugees",
    denounced: false,
    image:
      "Central%20Information%20Point%20of%20Autinomous%20Women_s%20Refugees.png",
  },
  {
    name: "Dare Feminism",
    denounced: false,
    image: "Dare%20Feminism.png",
  },
  {
    name: "Feminist Change",
    denounced: false,
    image: "Feminist%20Change.png",
  },
  {
    name: "Gender Alternatives",
    denounced: false,
    image: "Gender%20Alternatives.png",
  },
  {
    name: "MeToo",
    denounced: false,
    image: "MeToo.png",
  },
  {
    name: "National Council of French Women",
    denounced: false,
    image: "National%20Council%20of%20French%20Women.png",
  },
  {
    name: "Women Against Violence Europe",
    denounced: false,
    image: "omen%20Against%20Violence%20Europe.png",
  },
  {
    name: "Women Engage for a Common Future",
    denounced: false,
    image: "omen%20Engage%20for%20a%20Common%20Future.png",
  },
  {
    name: "The Coalition of Finnish Women's Associations NYTKIS",
    denounced: false,
    image:
      "The%20Coalition%20of%20Finnish%20Women_s%20Associations%20NYTKIS.png",
  },
  {
    name: "The Czech Women's Union",
    denounced: false,
    image: "The%20Czech%20Women_s%20Union.png",
  },
  {
    name: "The Estonian Women's Studies and Resource Centre",
    denounced: false,
    image: "The%20Estonian%20Womens%20Studies%20and%20Resource%20Centre.png",
  },
  {
    name: "The Federal Conference of Women's and Equal Opportunities Officers at Universities",
    denounced: false,
    image:
      "The%20Federal%20Conference%20of%20Women_s%20and%20Equal%20Opportunities%20Officers%20at%20Universities.png",
  },
  {
    name: "The Women's Council Denmark",
    denounced: false,
    image: "The%20Womens%20Council%20Denmark.png",
  },
  {
    name: "The World According to Women",
    denounced: false,
    image: "The%20World%20According%20to%20Women.png",
  },
  {
    name: "Women's International League for Peace and Freedom",
    denounced: false,
    image: "Womens%20International%20League%20for%20Peace%20and%20Freedom.png",
  },
  {
    name: "Women's Life",
    denounced: false,
    image: "Womens%20Life.png",
  },
  {
    name: "Women's Room",
    denounced: false,
    image: "Womens%20Room.png",
  },
].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

export default list;
