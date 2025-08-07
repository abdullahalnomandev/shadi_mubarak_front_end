interface Option {
  value: string;
  label: string;
  children?: Option[];
}

// const searchLocation: Option[] = [
//   {
//     value: "all",
//     label: "Entire Bangladesh",
//   },
//   // Chittagong Division
//   {
//     value: "chittagong",
//     label: "Chittagong",
//     children: [
//       {
//         value: "all",
//         label: "Entire Chittagong Division",
//       },
//       {
//         value: "bandarban",
//         label: "Bandarban",
//         children: [
//           { value: "all", label: "Entire Bandarban District" },
//           { value: "bandarban_sadar", label: "Bandarban Sadar" },
//           { value: "alikadam", label: "Alikadam" },
//           { value: "lama", label: "Lama" },
//           { value: "naikhongchhari", label: "Naikhongchhari" },
//           { value: "rowangchhari", label: "Rowangchhari" },
//           { value: "ruma", label: "Ruma" },
//           { value: "thanchi", label: "Thanchi" },
//         ],
//       },
//       {
//         value: "brahmanbaria",
//         label: "Brahmanbaria",
//         children: [
//           { value: "all", label: "Entire Brahmanbaria District" },
//           { value: "brahmanbaria_sadar", label: "Brahmanbaria Sadar" },
//           { value: "akhaura", label: "Akhaura" },
//           { value: "bancharampur", label: "Bancharampur" },
//           { value: "bijoynagar", label: "Bijoynagar" },
//           { value: "kasba", label: "Kasba" },
//           { value: "nabinagar", label: "Nabinagar" },
//           { value: "nasirnagar", label: "Nasirnagar" },
//           { value: "sarail", label: "Sarail" },
//           { value: "ashuganj", label: "Ashuganj" },
//         ],
//       },
//       {
//         value: "chandpur",
//         label: "Chandpur",
//         children: [
//           { value: "all", label: "Entire Chandpur District" },
//           { value: "chandpur_sadar", label: "Chandpur Sadar" },
//           { value: "faridganj", label: "Faridganj" },
//           { value: "haimchar", label: "Haimchar" },
//           { value: "haziganj", label: "Haziganj" },
//           { value: "kachua", label: "Kachua" },
//           { value: "matlab_dakshin", label: "Matlab Dakshin" },
//           { value: "matlab_uttar", label: "Matlab Uttar" },
//           { value: "shahrasti", label: "Shahrasti" },
//         ],
//       },
//       {
//         value: "comilla",
//         label: "Comilla",
//         children: [
//           { value: "all", label: "Entire Comilla District" },
//           { value: "comilla_sadar", label: "Comilla Sadar" },
//           { value: "barura", label: "Barura" },
//           { value: "brahmanpara", label: "Brahmanpara" },
//           { value: "burichang", label: "Burichang" },
//           { value: "chandina", label: "Chandina" },
//           { value: "chauddagram", label: "Chauddagram" },
//           { value: "daudkandi", label: "Daudkandi" },
//           { value: "debidwar", label: "Debidwar" },
//           { value: "homna", label: "Homna" },
//           { value: "laksam", label: "Laksam" },
//           { value: "manoharganj", label: "Manoharganj" },
//           { value: "meghna", label: "Meghna" },
//           { value: "monohorgonj", label: "Monohorgonj" },
//           { value: "muradnagar", label: "Muradnagar" },
//           { value: "nangalkot", label: "Nangalkot" },
//           { value: "comilla_sadar_dakshin", label: "Comilla Sadar Dakshin" },
//           { value: "titas", label: "Titas" },
//         ],
//       },
//       {
//         value: "coxs_bazar",
//         label: "Cox's Bazar",
//         children: [
//           { value: "all", label: "Entire Cox's Bazar District" },
//           { value: "coxs_bazar_sadar", label: "Cox's Bazar Sadar" },
//           { value: "chakaria", label: "Chakaria" },
//           { value: "kutubdia", label: "Kutubdia" },
//           { value: "maheshkhali", label: "Maheshkhali" },
//           { value: "pekua", label: "Pekua" },
//           { value: "ramu", label: "Ramu" },
//           { value: "teknaf", label: "Teknaf" },
//           { value: "ukhia", label: "Ukhia" },
//         ],
//       },
//       {
//         value: "feni",
//         label: "Feni",
//         children: [
//           { value: "all", label: "Entire Feni District" },
//           { value: "feni_sadar", label: "Feni Sadar" },
//           { value: "chhagalnaiya", label: "Chhagalnaiya" },
//           { value: "daganbhuiyan", label: "Daganbhuiyan" },
//           { value: "fulgazi", label: "Fulgazi" },
//           { value: "parshuram", label: "Parshuram" },
//           { value: "sonagazi", label: "Sonagazi" },
//         ],
//       },
//       {
//         value: "chittagong",
//         label: "Chittagong",
//         children: [
//           { value: "all", label: "Entire Chittagong District" },
//           { value: "anwara", label: "Anwara" },
//           { value: "banshkhali", label: "Banshkhali" },
//           { value: "boalkhali", label: "Boalkhali" },
//           { value: "chandanaish", label: "Chandanaish" },
//           { value: "fatikchhari", label: "Fatikchhari" },
//           { value: "hathazari", label: "Hathazari" },
//           { value: "lohagara", label: "Lohagara" },
//           { value: "mirsharai", label: "Mirsharai" },
//           { value: "patiya", label: "Patiya" },
//           { value: "rangunia", label: "Rangunia" },
//           { value: "raozan", label: "Raozan" },
//           { value: "sandwip", label: "Sandwip" },
//           { value: "satkania", label: "Satkania" },
//           { value: "sitakunda", label: "Sitakunda" },
//           { value: "karnaphuli", label: "Karnaphuli" },
//         ],
//       },
//       {
//         value: "khagrachhari",
//         label: "Khagrachhari",
//         children: [
//           { value: "all", label: "Entire Khagrachhari District" },
//           { value: "khagrachhari_sadar", label: "Khagrachhari Sadar" },
//           { value: "dighinala", label: "Dighinala" },
//           { value: "lakshmichhari", label: "Lakshmichhari" },
//           { value: "mahalchhari", label: "Mahalchhari" },
//           { value: "manikchhari", label: "Manikchhari" },
//           { value: "matiranga", label: "Matiranga" },
//           { value: "panchhari", label: "Panchhari" },
//           { value: "ramgarh", label: "Ramgarh" },
//         ],
//       },
//       {
//         value: "lakshmipur",
//         label: "Lakshmipur",
//         children: [
//           { value: "all", label: "Entire Lakshmipur District" },
//           { value: "lakshmipur_sadar", label: "Lakshmipur Sadar" },
//           { value: "kamalnagar", label: "Kamalnagar" },
//           { value: "raipur", label: "Raipur" },
//           { value: "ramganj", label: "Ramganj" },
//           { value: "ramgati", label: "Ramgati" },
//         ],
//       },
//       {
//         value: "noakhali",
//         label: "Noakhali",
//         children: [
//           { value: "all", label: "Entire Noakhali District" },
//           { value: "noakhali_sadar", label: "Noakhali Sadar" },
//           { value: "begumganj", label: "Begumganj" },
//           { value: "chatkhil", label: "Chatkhil" },
//           { value: "companiganj", label: "Companiganj" },
//           { value: "hatiya", label: "Hatiya" },
//           { value: "kabir_hat", label: "Kabir Hat" },
//           { value: "senbagh", label: "Senbagh" },
//           { value: "sonaimuri", label: "Sonaimuri" },
//           { value: "subarna_char", label: "Subarna Char" },
//         ],
//       },
//       {
//         value: "rangamati",
//         label: "Rangamati",
//         children: [
//           { value: "all", label: "Entire Rangamati District" },

//           { value: "rangamati_sadar", label: "Rangamati Sadar" },
//           { value: "baghaichhari", label: "Baghaichhari" },
//           { value: "barkal", label: "Barkal" },
//           { value: "belaichhari", label: "Belaichhari" },
//           { value: "bilaichhari", label: "Bilaichhari" },
//           { value: "juraichhari", label: "Juraichhari" },
//           { value: "kaptai", label: "Kaptai" },
//           { value: "kawkhali", label: "Kawkhali" },
//           { value: "langadu", label: "Langadu" },
//           { value: "naniarchar", label: "Naniarchar" },
//         ],
//       },
//     ],
//   },
//   // Dhaka Division
//   {
//     value: "dhaka",
//     label: "Dhaka",
//     children: [
//       {
//         value: "all",
//         label: "Entire Dhaka Division",
//       },
//       {
//         value: "faridpur",
//         label: "Faridpur",
//         children: [
//           { value: "all", label: "Entire Faridpur District" },
//           { value: "faridpur_sadar", label: "Faridpur Sadar" },
//           { value: "alfadanga", label: "Alfadanga" },
//           { value: "boalmari", label: "Boalmari" },
//           { value: "charbhadrasan", label: "Charbhadrasan" },
//           { value: "madhukhali", label: "Madhukhali" },
//           { value: "nagarkanda", label: "Nagarkanda" },
//           { value: "sadarpur", label: "Sadarpur" },
//           { value: "saltha", label: "Saltha" },
//           { value: "bhanga", label: "Bhanga" },
//         ],
//       },
//       {
//         value: "gazipur",
//         label: "Gazipur",
//         children: [
//           { value: "all", label: "Entire Gazipur District" },
//           { value: "gazipur_sadar", label: "Gazipur Sadar" },
//           { value: "kaliakair", label: "Kaliakair" },
//           { value: "kaliganj", label: "Kaliganj" },
//           { value: "kapasia", label: "Kapasia" },
//           { value: "sreepur", label: "Sreepur" },
//         ],
//       },
//       {
//         value: "dhaka",
//         label: "Dhaka",
//         children: [
//           { value: "all", label: "Entire Dhaka District" },
//           {
//             value: "dhaka_north_city_corporation",
//             label: "Dhaka North City Corporation",
//           },
//           {
//             value: "dhaka_south_city_corporation",
//             label: "Dhaka South City Corporation",
//           },
//           { value: "sadar", label: "Sadar" },
//           { value: "dhamrai", label: "Dhamrai" },
//           { value: "dohar", label: "Dohar" },
//           { value: "keraniganj", label: "Keraniganj" },
//           { value: "nawabganj", label: "Nawabganj" },
//           { value: "savar", label: "Savar" },
//         ],
//       },
//       {
//         value: "gopalganj",
//         label: "Gopalganj",
//         children: [
//           { value: "all", label: "Entire Gopalganj District" },
//           { value: "gopalganj_sadar", label: "Gopalganj Sadar" },
//           { value: "kashiani", label: "Kashiani" },
//           { value: "kotalipara", label: "Kotalipara" },
//           { value: "muksudpur", label: "Muksudpur" },
//           { value: "tungipara", label: "Tungipara" },
//         ],
//       },
//       {
//         value: "kishoreganj",
//         label: "Kishoreganj",
//         children: [
//           { value: "all", label: "Entire Kishoreganj District" },
//           { value: "kishoreganj_sadar", label: "Kishoreganj Sadar" },
//           { value: "austagram", label: "Austagram" },
//           { value: "bajitpur", label: "Bajitpur" },
//           { value: "bhairab", label: "Bhairab" },
//           { value: "hossainpur", label: "Hossainpur" },
//           { value: "itna", label: "Itna" },
//           { value: "karimganj", label: "Karimganj" },
//           { value: "katiadi", label: "Katiadi" },
//           { value: "kuliarchar", label: "Kuliarchar" },
//           { value: "mithamain", label: "Mithamain" },
//           { value: "nikli", label: "Nikli" },
//           { value: "pakundia", label: "Pakundia" },
//           { value: "tarail", label: "Tarail" },
//         ],
//       },
//       {
//         value: "madaripur",
//         label: "Madaripur",
//         children: [
//           { value: "all", label: "Entire Madaripur District" },
//           { value: "madaripur_sadar", label: "Madaripur Sadar" },
//           { value: "kalkini", label: "Kalkini" },
//           { value: "rajoir", label: "Rajoir" },
//           { value: "shibchar", label: "Shibchar" },
//         ],
//       },
//       {
//         value: "manikganj",
//         label: "Manikganj",
//         children: [
//           { value: "all", label: "Entire Manikganj District" },
//           { value: "manikganj_sadar", label: "Manikganj Sadar" },
//           { value: "daulatpur", label: "Daulatpur" },
//           { value: "ghior", label: "Ghior" },
//           { value: "harirampur", label: "Harirampur" },
//           { value: "saturia", label: "Saturia" },
//           { value: "shivalaya", label: "Shivalaya" },
//           { value: "singair", label: "Singair" },
//         ],
//       },
//       {
//         value: "munshiganj",
//         label: "Munshiganj",
//         children: [
//           { value: "all", label: "Entire Munshiganj District" },
//           { value: "munshiganj_sadar", label: "Munshiganj Sadar" },
//           { value: "gazaria", label: "Gazaria" },
//           { value: "lohajang", label: "Lohajang" },
//           { value: "sirajdikhan", label: "Sirajdikhan" },
//           { value: "sreenagar", label: "Sreenagar" },
//           { value: "tongibari", label: "Tongibari" },
//         ],
//       },
//       {
//         value: "narayanganj",
//         label: "Narayanganj",
//         children: [
//           { value: "all", label: "Entire Narayanganj District" },
//           { value: "narayanganj_sadar", label: "Narayanganj Sadar" },
//           { value: "araihazar", label: "Araihazar" },
//           { value: "bandar", label: "Bandar" },
//           { value: "rupganj", label: "Rupganj" },
//           { value: "sonargaon", label: "Sonargaon" },
//         ],
//       },
//       {
//         value: "rajbari",
//         label: "Rajbari",
//         children: [
//           { value: "all", label: "Entire Rajbari District" },
//           { value: "rajbari_sadar", label: "Rajbari Sadar" },
//           { value: "baliakandi", label: "Baliakandi" },
//           { value: "goalandaghat", label: "Goalandaghat" },
//           { value: "kalukhali", label: "Kalukhali" },
//           { value: "pangsha", label: "Pangsha" },
//         ],
//       },
//       {
//         value: "shariatpur",
//         label: "Shariatpur",
//         children: [
//           { value: "all", label: "Entire Shariatpur District" },
//           { value: "shariatpur_sadar", label: "Shariatpur Sadar" },
//           { value: "bhedarganj", label: "Bhedarganj" },
//           { value: "damudya", label: "Damudya" },
//           { value: "gosairhat", label: "Gosairhat" },
//           { value: "naria", label: "Naria" },
//           { value: "zajira", label: "Zajira" },
//         ],
//       },
//       {
//         value: "tangail",
//         label: "Tangail",
//         children: [
//           { value: "all", label: "Entire Tangail District" },
//           { value: "tangail_sadar", label: "Tangail Sadar" },
//           { value: "basail", label: "Basail" },
//           { value: "bhuapur", label: "Bhuapur" },
//           { value: "delduar", label: "Delduar" },
//           { value: "dhanbari", label: "Dhanbari" },
//           { value: "ghatail", label: "Ghatail" },
//           { value: "gopalpur", label: "Gopalpur" },
//           { value: "kalihati", label: "Kalihati" },
//           { value: "madhupur", label: "Madhupur" },
//           { value: "mirzapur", label: "Mirzapur" },
//           { value: "nagarpur", label: "Nagarpur" },
//           { value: "sakhipur", label: "Sakhipur" },
//         ],
//       },
//     ],
//   },
//   // Khulna Division **
//   {
//     value: "khulna",
//     label: "Khulna",
//     children: [
//       {
//         value: "all",
//         label: "Entire Khulna Division",
//       },

//       {
//         value: "bagerhat",
//         label: "Bagerhat",
//         children: [
//           { value: "all", label: "Entire Bagerhat District" },
//           { value: "bagerhat_sadar", label: "Bagerhat Sadar" },
//           { value: "chitalmari", label: "Chitalmari" },
//           { value: "fakirhat", label: "Fakirhat" },
//           { value: "kachua", label: "Kachua" },
//           { value: "mollahat", label: "Mollahat" },
//           { value: "mongla", label: "Mongla" },
//           { value: "morrelganj", label: "Morrelganj" },
//           { value: "rampal", label: "Rampal" },
//           { value: "sarankhola", label: "Sarankhola" },
//         ],
//       },
//       {
//         value: "chuadanga",
//         label: "Chuadanga",
//         children: [
//           { value: "all", label: "Entire Chuadanga District" },
//           { value: "chuadanga_sadar", label: "Chuadanga Sadar" },
//           { value: "alamdanga", label: "Alamdanga" },
//           { value: "damurhuda", label: "Damurhuda" },
//           { value: "jibannagar", label: "Jibannagar" },
//         ],
//       },
//       {
//         value: "jessore",
//         label: "Jessore",
//         children: [
//           { value: "all", label: "Entire Jessore District" },
//           { value: "jessore_sadar", label: "Jessore Sadar" },
//           { value: "abhaynagar", label: "Abhaynagar" },
//           { value: "bagherpara", label: "Bagherpara" },
//           { value: "chaugachha", label: "Chaugachha" },
//           { value: "jhikargachha", label: "Jhikargachha" },
//           { value: "keshabpur", label: "Keshabpur" },
//           { value: "manirampur", label: "Manirampur" },
//           { value: "sharsha", label: "Sharsha" },
//         ],
//       },
//       {
//         value: "khulna",
//         label: "Khulna",
//         children: [
//           { value: "all", label: "Entire Khulna District" },
//           { value: "khulna_sadar", label: "Khulna Sadar" },
//           { value: "batiaghata", label: "Batiaghata" },
//           { value: "dacope", label: "Dacope" },
//           { value: "dumuria", label: "Dumuria" },
//           { value: "dighalia", label: "Dighalia" },
//           { value: "koyra", label: "Koyra" },
//           { value: "paikgachha", label: "Paikgachha" },
//           { value: "phultala", label: "Phultala" },
//           { value: "rupsa", label: "Rupsa" },
//           { value: "terokhada", label: "Terokhada" },
//         ],
//       },
//       {
//         value: "jhenaidah",
//         label: "Jhenaidah",
//         children: [
//           { value: "all", label: "Entire Jhenaidah District" },
//           { value: "jhenaidah_sadar", label: "Jhenaidah Sadar" },
//           { value: "harinakunda", label: "Harinakunda" },
//           { value: "kaliganj", label: "Kaliganj" },
//           { value: "kotchandpur", label: "Kotchandpur" },
//           { value: "maheshpur", label: "Maheshpur" },
//           { value: "shailkupa", label: "Shailkupa" },
//         ],
//       },
//       {
//         value: "kushtia",
//         label: "Kushtia",
//         children: [
//             "all": "সমগ্র চাঁদপুর জেলা",
//             "chandpur_sadar": "চাঁদপুর সদর",
//             "faridganj": "ফরিদগঞ্জ",
//             "haimchar": "হাইমচর",
//             "haziganj": "হাজীগঞ্জ",
//             "kachua": "কচুয়া",
//             "matlab_dakshin": "মতলব দক্ষিণ",
//             "matlab_uttar": "মতলব উত্তর",
//             "shahrasti": "শাহরাস্তি"
//         },
//         "comilla": {
//             "label": "কুমিল্লা",
//             "all": "সমগ্র কুমিল্লা জেলা",
//             "comilla_sadar": "কুমিল্লা সদর",
//             "barura": "বরুড়া",
//             "brahmanpara": "ব্রাহ্মণপাড়া",
//             "burichang": "বুড়িচং",
//             "chandina": "চান্দিনা",
//             "chauddagram": "চৌদ্দগ্রাম",
//             "daudkandi": "দাউদকান্দি",
//             "debidwar": "দেবিদ্বার",
//             "homna": "হোমনা",
//             "laksam": "লাকসাম",
//             "manoharganj": "মনোহরগঞ্জ",
//             "meghna": "মেঘনা",
//             "monohorgonj": "মনোহরগঞ্জ",
//             "muradnagar": "মুরাদনগর",
//             "nangalkot": "নাঙ্গলকোট",
//             "comilla_sadar_dakshin": "কুমিল্লা সদর দক্ষিণ",
//             "titas": "তিতাস"
//         },
//         "coxs_bazar": {
//             "label": "কক্সবাজার",
//             "all": "সমগ্র কক্সবাজার জেলা",
//             "coxs_bazar_sadar": "কক্সবাজার সদর",
//             "chakaria": "চকরিয়া",
//             "kutubdia": "কুতুবদিয়া",
//             "maheshkhali": "মহেশখালী",
//             "pekua": "পেকুয়া",
//             "ramu": "রামু",
//             "teknaf": "টেকনাফ",
//             "ukhia": "উখিয়া"
//         },
//         "feni": {
//             "label": "ফেনী",
//             "all": "সমগ্র ফেনী জেলা",
//             "feni_sadar": "ফেনী সদর",
//             "chhagalnaiya": "ছাগলনাইয়া",
//             "daganbhuiyan": "দাগনভূঞা",
//             "fulgazi": "ফুলগাজী",
//             "parshuram": "পরশুরাম",
//             "sonagazi": "সোনাগাজী"
//         },
//         "chittagong": {
//             "label": "চট্টগ্রাম",
//             "all": "সমগ্র চট্টগ্রাম জেলা",
//             "anwara": "আনোয়ারা",
//             "banshkhali": "বাঁশখালী",
//             "boalkhali": "বোয়ালখালী",
//             "chandanaish": "চন্দনাইশ",
//             "fatikchhari": "ফটিকছড়ি",
//             "hathazari": "হাটহাজারী",
//             "lohagara": "লোহাগাড়া",
//             "mirsharai": "মীরসরাই",
//             "patiya": "পটিয়া",
//             "rangunia": "রাঙ্গুনিয়া",
//             "raozan": "রাউজান",
//             "sandwip": "সন্দ্বীপ",
//             "satkania": "সাতকানিয়া",
//             "sitakunda": "সীতাকুন্ড",
//             "karnaphuli": "কর্ণফুলী"
//         },
//         "khagrachhari": {
//             "label": "খাগড়াছড়ি",
//             "all": "সমগ্র খাগড়াছড়ি জেলা",
//             "khagrachhari_sadar": "খাগড়াছড়ি সদর",
//             "dighinala": "দিঘীনালা",
//             "lakshmichhari": "লক্ষ্মীছড়ি",
//             "mahalchhari": "মহালছড়ি",
//             "manikchhari": "মানিকছড়ি",
//             "matiranga": "মাটিরাঙ্গা",
//             "panchhari": "পানছড়ি",
//             "ramgarh": "রামগড়"
//         },
//         "lakshmipur": {
//             "label": "লক্ষ্মীপুর",
//             "all": "সমগ্র লক্ষ্মীপুর জেলা",
//             "lakshmipur_sadar": "লক্ষ্মীপুর সদর",
//             "kamalnagar": "কমলনগর",
//             "raipur": "রায়পুর",
//             "ramganj": "রামগঞ্জ",
//             "ramgati": "রামগতি"
//         },
//         "noakhali": {
//             "label": "নোয়াখালী",
//             "all": "সমগ্র নোয়াখালী জেলা",
//             "noakhali_sadar": "নোয়াখালী সদর",
//             "begumganj": "বেগমগঞ্জ",
//             "chatkhil": "চাটখিল",
//             "companiganj": "কোম্পানীগঞ্জ",
//             "hatiya": "হাতিয়া",
//             "kabir_hat": "কবির হাট",
//             "senbagh": "সেনবাগ",
//             "sonaimuri": "সোনাইমুড়ি",
//             "subarna_char": "সুবর্ণচর"
//         },
//         "rangamati": {
//             "label": "রাঙ্গামাটি",
//             "all": "সমগ্র রাঙ্গামাটি জেলা",
//             "rangamati_sadar": "রাঙ্গামাটি সদর",
//             "baghaichhari": "বাঘাইছড়ি",
//             "barkal": "বরকল",
//             "belaichhari": "বিলাইছড়ি",
//             "bilaichhari": "বিলাইছড়ি",
//             "juraichhari": "জুরাছড়ি",
//             "kaptai": "কাপ্তাই",
//             "kawkhali": "কাউখালী",
//             "langadu": "লংগদু",
//             "naniarchar": "নানিয়ারচর"
//         }
//     }
// }
//           { value: "all", label: "Entire Kushtia District" },
//           { value: "kushtia_sadar", label: "Kushtia Sadar" },
//           { value: "bheramara", label: "Bheramara" },
//           { value: "daulatpur", label: "Daulatpur" },
//           { value: "khoksa", label: "Khoksa" },
//           { value: "kumarkhali", label: "Kumarkhali" },
//           { value: "mirpur", label: "Mirpur" },
//         ],
//       },
//       {
//         value: "magura",
//         label: "Magura",
//         children: [
//           { value: "all", label: "Entire Magura District" },
//           { value: "magura_sadar", label: "Magura Sadar" },
//           { value: "mohammadpur", label: "Mohammadpur" },
//           { value: "shalikha", label: "Shalikha" },
//           { value: "sreepur", label: "Sreepur" },
//         ],
//       },
//       {
//         value: "meherpur",
//         label: "Meherpur",
//         children: [
//           { value: "all", label: "Entire Meherpur District" },
//           { value: "meherpur_sadar", label: "Meherpur Sadar" },
//           { value: "gangni", label: "Gangni" },
//           { value: "mujibnagar", label: "Mujibnagar" },
//         ],
//       },
//       {
//         value: "narail",
//         label: "Narail",
//         children: [
//           { value: "all", label: "Entire Narail District" },
//           { value: "narail_sadar", label: "Narail Sadar" },
//           { value: "kalia", label: "Kalia" },
//           { value: "lohagara", label: "Lohagara" },
//         ],
//       },
//       {
//         value: "satkhira",
//         label: "Satkhira",
//         children: [
//           { value: "all", label: "Entire Satkhira District" },
//           { value: "satkhira_sadar", label: "Satkhira Sadar" },
//           { value: "assasuni", label: "Assasuni" },
//           { value: "debhata", label: "Debhata" },
//           { value: "kalaroa", label: "Kalaroa" },
//           { value: "kaliganj", label: "Kaliganj" },
//           { value: "shyamnagar", label: "Shyamnagar" },
//           { value: "tala", label: "Tala" },
//         ],
//       },
//     ],
//   },
//   // Rajshahi Division
//   {
//     value: "rajshahi",
//     label: "Rajshahi",
//     children: [
//       {
//         value: "all",
//         label: "Entire Rajshahi Division",
//       },
//       {
//         value: "bogura",
//         label: "Bogura",
//         children: [
//           { value: "all", label: "Entire Bogura District" },
//           { value: "bogura_sadar", label: "Bogura Sadar" },
//           { value: "adamdighi", label: "Adamdighi" },
//           { value: "dhunat", label: "Dhunat" },
//           { value: "dhupchanchia", label: "Dhupchanchia" },
//           { value: "gabtali", label: "Gabtali" },
//           { value: "kahaloo", label: "Kahaloo" },
//           { value: "nandigram", label: "Nandigram" },
//           { value: "sariakandi", label: "Sariakandi" },
//           { value: "shajahanpur", label: "Shajahanpur" },
//           { value: "sherpur", label: "Sherpur" },
//           { value: "shibganj", label: "Shibganj" },
//           { value: "sonatola", label: "Sonatola" },
//         ],
//       },
//       {
//         value: "chapainawabganj",
//         label: "Chapainawabganj",
//         children: [
//           { value: "all", label: "Entire Chapainawabganj District" },
//           { value: "chapainawabganj_sadar", label: "Chapainawabganj Sadar" },
//           { value: "bholahat", label: "Bholahat" },
//           { value: "gomastapur", label: "Gomastapur" },
//           { value: "nachole", label: "Nachole" },
//           { value: "shibganj", label: "Shibganj" },
//         ],
//       },
//       {
//         value: "joypurhat",
//         label: "Joypurhat",
//         children: [
//           { value: "all", label: "Entire Joypurhat District" },
//           { value: "joypurhat_sadar", label: "Joypurhat Sadar" },
//           { value: "akkelpur", label: "Akkelpur" },
//           { value: "kalai", label: "Kalai" },
//           { value: "khetlal", label: "Khetlal" },
//           { value: "panchbibi", label: "Panchbibi" },
//         ],
//       },
//       {
//         value: "rajshahi",
//         label: "Rajshahi",
//         children: [
//           { value: "all", label: "Entire Rajshahi District" },
//           { value: "rajshahi_sadar", label: "Rajshahi Sadar" },
//           { value: "bagha", label: "Bagha" },
//           { value: "bagmara", label: "Bagmara" },
//           { value: "charghat", label: "Charghat" },
//           { value: "durgapur", label: "Durgapur" },
//           { value: "godagari", label: "Godagari" },
//           { value: "mohanpur", label: "Mohanpur" },
//           { value: "paba", label: "Paba" },
//           { value: "puthia", label: "Puthia" },
//           { value: "tanore", label: "Tanore" },
//         ],
//       },
//       {
//         value: "naogaon",
//         label: "Naogaon",
//         children: [
//           { value: "all", label: "Entire Naogaon District" },
//           { value: "naogaon_sadar", label: "Naogaon Sadar" },
//           { value: "atrai", label: "Atrai" },
//           { value: "badalgachhi", label: "Badalgachhi" },
//           { value: "dhamoirhat", label: "Dhamoirhat" },
//           { value: "manda", label: "Manda" },
//           { value: "mahadebpur", label: "Mahadebpur" },
//           { value: "niamatpur", label: "Niamatpur" },
//           { value: "patnitala", label: "Patnitala" },
//           { value: "porsha", label: "Porsha" },
//           { value: "raninagar", label: "Raninagar" },
//           { value: "sapahar", label: "Sapahar" },
//         ],
//       },
//       {
//         value: "natore",
//         label: "Natore",
//         children: [
//           { value: "all", label: "Entire Natore District" },
//           { value: "natore_sadar", label: "Natore Sadar" },
//           { value: "bagatipara", label: "Bagatipara" },
//           { value: "baraigram", label: "Baraigram" },
//           { value: "gurudaspur", label: "Gurudaspur" },
//           { value: "lalpur", label: "Lalpur" },
//           { value: "singra", label: "Singra" },
//         ],
//       },
//       {
//         value: "pabna",
//         label: "Pabna",
//         children: [
//           { value: "all", label: "Entire Pabna District" },
//           { value: "pabna_sadar", label: "Pabna Sadar" },
//           { value: "ataikula", label: "Ataikula" },
//           { value: "atgharia", label: "Atgharia" },
//           { value: "bera", label: "Bera" },
//           { value: "bhangura", label: "Bhangura" },
//           { value: "chatmohar", label: "Chatmohar" },
//           { value: "faridpur", label: "Faridpur" },
//           { value: "ishwardi", label: "Ishwardi" },
//           { value: "santhia", label: "Santhia" },
//           { value: "sujanagar", label: "Sujanagar" },
//         ],
//       },
//       {
//         value: "sirajganj",
//         label: "Sirajganj",
//         children: [
//           { value: "all", label: "Entire Sirajganj District" },
//           { value: "sirajganj_sadar", label: "Sirajganj Sadar" },
//           { value: "belkuchi", label: "Belkuchi" },
//           { value: "chauhali", label: "Chauhali" },
//           { value: "kamarkhanda", label: "Kamarkhanda" },
//           { value: "kazipur", label: "Kazipur" },
//           { value: "raiganj", label: "Raiganj" },
//           { value: "shahjadpur", label: "Shahjadpur" },
//           { value: "tarash", label: "Tarash" },
//           { value: "ullahpara", label: "Ullahpara" },
//         ],
//       },
//     ],
//   },
//   // Rangpur
//   {
//     value: "rangpur",
//     label: "Rangpur",
//     children: [
//       {
//         value: "all",
//         label: "Entire Rangpur Division",
//       },

//       {
//         value: "dinajpur",
//         label: "Dinajpur",
//         children: [
//           { value: "all", label: "Entire Dinajpur District" },
//           { value: "dinajpur_sadar", label: "Dinajpur Sadar" },
//           { value: "biral", label: "Biral" },
//           { value: "birampur", label: "Birampur" },
//           { value: "birganj", label: "Birganj" },
//           { value: "bochaganj", label: "Bochaganj" },
//           { value: "chirirbandar", label: "Chirirbandar" },
//           { value: "fulbari", label: "Fulbari" },
//           { value: "ghoraghat", label: "Ghoraghat" },
//           { value: "hakimpur", label: "Hakimpur" },
//           { value: "kaharole", label: "Kaharole" },
//           { value: "khansama", label: "Khansama" },
//           { value: "nawabganj", label: "Nawabganj" },
//           { value: "parbatipur", label: "Parbatipur" },
//         ],
//       },
//       {
//         value: "gaibandha",
//         label: "Gaibandha",
//         children: [
//           { value: "all", label: "Entire Gaibandha District" },
//           { value: "gaibandha_sadar", label: "Gaibandha Sadar" },
//           { value: "fulchhari", label: "Fulchhari" },
//           { value: "gobindaganj", label: "Gobindaganj" },
//           { value: "palashbari", label: "Palashbari" },
//           { value: "sadullapur", label: "Sadullapur" },
//           { value: "sughatta", label: "Sughatta" },
//           { value: "sundarganj", label: "Sundarganj" },
//         ],
//       },
//       {
//         value: "rangpur",
//         label: "Rangpur",
//         children: [
//           { value: "all", label: "Entire Rangpur District" },
//           { value: "rangpur_sadar", label: "Rangpur Sadar" },
//           { value: "badarganj", label: "Badarganj" },
//           { value: "gangachhara", label: "Gangachhara" },
//           { value: "kaunia", label: "Kaunia" },
//           { value: "mithapukur", label: "Mithapukur" },
//           { value: "pirgachha", label: "Pirgachha" },
//           { value: "pirganj", label: "Pirganj" },
//           { value: "taraganj", label: "Taraganj" },
//         ],
//       },
//       {
//         value: "kurigram",
//         label: "Kurigram",
//         children: [
//           { value: "all", label: "Entire Kurigram District" },
//           { value: "kurigram_sadar", label: "Kurigram Sadar" },
//           { value: "bhurungamari", label: "Bhurungamari" },
//           { value: "char_rajibpur", label: "Char Rajibpur" },
//           { value: "chilmari", label: "Chilmari" },
//           { value: "fulbari", label: "Fulbari" },
//           { value: "nageshwari", label: "Nageshwari" },
//           { value: "rajarhat", label: "Rajarhat" },
//           { value: "raomari", label: "Raomari" },
//           { value: "ulipur", label: "Ulipur" },
//         ],
//       },
//       {
//         value: "lalmonirhat",
//         label: "Lalmonirhat",
//         children: [
//           { value: "all", label: "Entire Lalmonirhat District" },
//           { value: "lalmonirhat_sadar", label: "Lalmonirhat Sadar" },
//           { value: "aditmari", label: "Aditmari" },
//           { value: "hatibandha", label: "Hatibandha" },
//           { value: "kaliganj", label: "Kaliganj" },
//           { value: "patgram", label: "Patgram" },
//         ],
//       },
//       {
//         value: "nilphamari",
//         label: "Nilphamari",
//         children: [
//           { value: "all", label: "Entire Nilphamari District" },
//           { value: "nilphamari_sadar", label: "Nilphamari Sadar" },
//           { value: "dimla", label: "Dimla" },
//           { value: "domar", label: "Domar" },
//           { value: "jaldhaka", label: "Jaldhaka" },
//           { value: "kishoreganj", label: "Kishoreganj" },
//           { value: "saidpur", label: "Saidpur" },
//         ],
//       },
//       {
//         value: "panchagarh",
//         label: "Panchagarh",
//         children: [
//           { value: "all", label: "Entire Panchagarh District" },
//           { value: "panchagarh_sadar", label: "Panchagarh Sadar" },
//           { value: "atwari", label: "Atwari" },
//           { value: "boda", label: "Boda" },
//           { value: "debiganj", label: "Debiganj" },
//           { value: "tetulia", label: "Tetulia" },
//         ],
//       },
//       {
//         value: "thakurgaon",
//         label: "Thakurgaon",
//         children: [
//           { value: "all", label: "Entire Thakurgaon District" },
//           { value: "thakurgaon_sadar", label: "Thakurgaon Sadar" },
//           { value: "baliadangi", label: "Baliadangi" },
//           { value: "haripur", label: "Haripur" },
//           { value: "pirganj", label: "Pirganj" },
//           { value: "ranisankail", label: "Ranisankail" },
//         ],
//       },
//     ],
//   },
//   // Mymensingh
//   {
//     value: "mymensingh",
//     label: "Mymensingh",
//     children: [
//       {
//         value: "all",
//         label: "Entire Mymensingh Division",
//       },

//       {
//         value: "jamalpur",
//         label: "Jamalpur",
//         children: [
//           { value: "all", label: "Entire Jamalpur District" },
//           { value: "jamalpur_sadar", label: "Jamalpur Sadar" },
//           { value: "baksiganj", label: "Baksiganj" },
//           { value: "dewanganj", label: "Dewanganj" },
//           { value: "islampur", label: "Islampur" },
//           { value: "madarganj", label: "Madarganj" },
//           { value: "melandaha", label: "Melandaha" },
//           { value: "sarishabari", label: "Sarishabari" },
//         ],
//       },
//       {
//         value: "netrokona",
//         label: "Netrokona",
//         children: [
//           { value: "all", label: "Entire Netrokona District" },
//           { value: "netrokona_sadar", label: "Netrokona Sadar" },
//           { value: "atpara", label: "Atpara" },
//           { value: "barhatta", label: "Barhatta" },
//           { value: "durgapur", label: "Durgapur" },
//           { value: "kalmakanda", label: "Kalmakanda" },
//           { value: "kendua", label: "Kendua" },
//           { value: "khaliajuri", label: "Khaliajuri" },
//           { value: "madan", label: "Madan" },
//           { value: "mohanganj", label: "Mohanganj" },
//           { value: "purbadhala", label: "Purbadhala" },
//         ],
//       },
//       {
//         value: "mymensingh",
//         label: "Mymensingh",
//         children: [
//           { value: "all", label: "Entire Mymensingh District" },
//           { value: "mymensingh_sadar", label: "Mymensingh Sadar" },
//           { value: "bhaluka", label: "Bhaluka" },
//           { value: "dhobaura", label: "Dhobaura" },
//           { value: "fulbaria", label: "Fulbaria" },
//           { value: "gaffargaon", label: "Gaffargaon" },
//           { value: "gauripur", label: "Gauripur" },
//           { value: "haluaghat", label: "Haluaghat" },
//           { value: "ishwarganj", label: "Ishwarganj" },
//           { value: "muktagachha", label: "Muktagachha" },
//           { value: "nandail", label: "Nandail" },
//           { value: "phulpur", label: "Phulpur" },
//           { value: "tarakanda", label: "Tarakanda" },
//           { value: "trishal", label: "Trishal" },
//         ],
//       },
//       {
//         value: "sherpur",
//         label: "Sherpur",
//         children: [
//           { value: "all", label: "Entire Sherpur District" },
//           { value: "sherpur_sadar", label: "Sherpur Sadar" },
//           { value: "jhenaigati", label: "Jhenaigati" },
//           { value: "nakla", label: "Nakla" },
//           { value: "nalitabari", label: "Nalitabari" },
//           { value: "sreebardi", label: "Sreebardi" },
//         ],
//       },
//     ],
//   },
//   // Sylhet
//   {
//     value: "sylhet",
//     label: "Sylhet",
//     children: [
//       {
//         value: "all",
//         label: "Entire Sylhet Division",
//       },

//       {
//         value: "sunamganj",
//         label: "Sunamganj",
//         children: [
//           { value: "all", label: "Entire Sunamganj District" },
//           { value: "sunamganj_sadar", label: "Sunamganj Sadar" },
//           { value: "bishwamvarpur", label: "Bishwamvarpur" },
//           { value: "chhatak", label: "Chhatak" },
//           { value: "derai", label: "Derai" },
//           { value: "dharampasha", label: "Dharampasha" },
//           { value: "dowarabazar", label: "Dowarabazar" },
//           { value: "jagannathpur", label: "Jagannathpur" },
//           { value: "jamalganj", label: "Jamalganj" },
//           { value: "sulla", label: "Sulla" },
//           { value: "tahirpur", label: "Tahirpur" },
//           { value: "south_sunamganj", label: "South Sunamganj" },
//           { value: "madhyanagar", label: "Madhyanagar" },
//         ],
//       },
//       {
//         value: "habiganj",
//         label: "Habiganj",
//         children: [
//           { value: "all", label: "Entire Habiganj District" },
//           { value: "habiganj_sadar", label: "Habiganj Sadar" },
//           { value: "ajmiriganj", label: "Ajmiriganj" },
//           { value: "bahubal", label: "Bahubal" },
//           { value: "baniyachong", label: "Baniyachong" },
//           { value: "chunarughat", label: "Chunarughat" },
//           { value: "lakhai", label: "Lakhai" },
//           { value: "madhabpur", label: "Madhabpur" },
//           { value: "nabiganj", label: "Nabiganj" },
//           { value: "shaistaganj", label: "Shaistaganj" },
//         ],
//       },
//       {
//         value: "sylhet",
//         label: "Sylhet",
//         children: [
//           { value: "all", label: "Entire Sylhet District" },
//           { value: "sylhet_sadar", label: "Sylhet Sadar" },
//           { value: "balaganj", label: "Balaganj" },
//           { value: "beanibazar", label: "Beanibazar" },
//           { value: "bishwanath", label: "Bishwanath" },
//           { value: "companiganj", label: "Companiganj" },
//           { value: "dakshin_surma", label: "Dakshin Surma" },
//           { value: "fenchuganj", label: "Fenchuganj" },
//           { value: "golapganj", label: "Golapganj" },
//           { value: "gowainghat", label: "Gowainghat" },
//           { value: "jaintiapur", label: "Jaintiapur" },
//           { value: "kanaighat", label: "Kanaighat" },
//           { value: "osmani_nagar", label: "Osmani Nagar" },
//           { value: "zakiganj", label: "Zakiganj" },
//         ],
//       },
//       {
//         value: "moulvibazar",
//         label: "Moulvibazar",
//         children: [
//           { value: "all", label: "Entire Moulvibazar District" },
//           { value: "moulvibazar_sadar", label: "Moulvibazar Sadar" },
//           { value: "barlekha", label: "Barlekha" },
//           { value: "juri", label: "Juri" },
//           { value: "kamalganj", label: "Kamalganj" },
//           { value: "kulaura", label: "Kulaura" },
//           { value: "rajnagar", label: "Rajnagar" },
//           { value: "sreemangal", label: "Sreemangal" },
//         ],
//       },
//     ],
//   },
//   // Barishal
//   {
//     value: "barishal",
//     label: "Barishal",
//     children: [
//       {
//         value: "all",
//         label: "Entire Barishal Division",
//       },

//       {
//         value: "barguna",
//         label: "Barguna",
//         children: [
//           { value: "all", label: "Entire Barguna District" },
//           { value: "barguna_sadar", label: "Barguna Sadar" },
//           { value: "amtali", label: "Amtali" },
//           { value: "betagi", label: "Betagi" },
//           { value: "bamna", label: "Bamna" },
//           { value: "pathorghata", label: "Pathorghata" },
//           { value: "taltoli", label: "Taltoli" },
//         ],
//       },
//       {
//         value: "bhola",
//         label: "Bhola",
//         children: [
//           { value: "all", label: "Entire Bhola District" },
//           { value: "bhola_sadar", label: "Bhola Sadar" },
//           { value: "borhanuddin", label: "Borhanuddin" },
//           { value: "charfasson", label: "Charfasson" },
//           { value: "daulatkhan", label: "Daulatkhan" },
//           { value: "lalmohan", label: "Lalmohan" },
//           { value: "manpura", label: "Manpura" },
//           { value: "tazumuddin", label: "Tazumuddin" },
//         ],
//       },
//       {
//         value: "jhalokati",
//         label: "Jhalokati",
//         children: [
//           { value: "all", label: "Entire Jhalokati District" },
//           { value: "jhalokati_sadar", label: "Jhalokati Sadar" },
//           { value: "kathalia", label: "Kathalia" },
//           { value: "nalchity", label: "Nalchity" },
//           { value: "rajapur", label: "Rajapur" },
//         ],
//       },
//       {
//         value: "barishal",
//         label: "Barishal",
//         children: [
//           { value: "all", label: "Entire Barishal District" },
//           { value: "agailjhara", label: "Agailjhara" },
//           { value: "babuganj", label: "Babuganj" },
//           { value: "bakerganj", label: "Bakerganj" },
//           { value: "banaripara", label: "Banaripara" },
//           { value: "barishal_sadar", label: "Barishal Sadar" },
//           { value: "gournadi", label: "Gournadi" },
//           { value: "hizla", label: "Hizla" },
//           { value: "mehendiganj", label: "Mehendiganj" },
//           { value: "muladi", label: "Muladi" },
//           { value: "wazirpur", label: "Wazirpur" },
//         ],
//       },
//       {
//         value: "patuakhali",
//         label: "Patuakhali",
//         children: [
//           { value: "all", label: "Entire Patuakhali District" },
//           { value: "patuakhali_sadar", label: "Patuakhali Sadar" },
//           { value: "bauphal", label: "Bauphal" },
//           { value: "dashmina", label: "Dashmina" },
//           { value: "dumki", label: "Dumki" },
//           { value: "galachipa", label: "Galachipa" },
//           { value: "kalapara", label: "Kalapara" },
//           { value: "mirzaganj", label: "Mirzaganj" },
//           { value: "rangabali", label: "Rangabali" },
//         ],
//       },
//       {
//         value: "pirojpur",
//         label: "Pirojpur",
//         children: [
//           { value: "all", label: "Entire Pirojpur District" },
//           { value: "pirojpur_sadar", label: "Pirojpur Sadar" },
//           { value: "bhandaria", label: "Bhandaria" },
//           { value: "kawkhali", label: "Kawkhali" },
//           { value: "mathbaria", label: "Mathbaria" },
//           { value: "nazirpur", label: "Nazirpur" },
//           { value: "nesarabad", label: "Nesarabad" },
//           { value: "zianagar", label: "Zianagar" },
//         ],
//       },
//     ],
//   },
// ];

const getLocationDataInfo = (t: (key: string) => string) => {
  const searchLocation: Option[] = [
    {
      value: "all",
      label: t("location.all"),
    },
    // Chittagong Division
    {
      value: "chittagong",
      label: t("location.chittagong.label"),
      children: [
        {
          value: "all",
          label: t("location.chittagong.all"),
        },
        {
          value: "bandarban",
          label: t("location.chittagong.bandarban.label"),
          children: [
            { value: "all", label: t("location.chittagong.bandarban.all") },
            {
              value: "bandarban_sadar",
              label: t("location.chittagong.bandarban.bandarban_sadar"),
            },
            {
              value: "alikadam",
              label: t("location.chittagong.bandarban.alikadam"),
            },
            { value: "lama", label: t("location.chittagong.bandarban.lama") },
            {
              value: "naikhongchhari",
              label: t("location.chittagong.bandarban.naikhongchhari"),
            },
            {
              value: "rowangchhari",
              label: t("location.chittagong.bandarban.rowangchhari"),
            },
            { value: "ruma", label: t("location.chittagong.bandarban.ruma") },
            {
              value: "thanchi",
              label: t("location.chittagong.bandarban.thanchi"),
            },
          ],
        },
        {
          value: "brahmanbaria",
          label: t("location.chittagong.brahmanbaria.label"),
          children: [
            { value: "all", label: t("location.chittagong.brahmanbaria.all") },
            {
              value: "brahmanbaria_sadar",
              label: t("location.chittagong.brahmanbaria.brahmanbaria_sadar"),
            },
            {
              value: "akhaura",
              label: t("location.chittagong.brahmanbaria.akhaura"),
            },
            {
              value: "bancharampur",
              label: t("location.chittagong.brahmanbaria.bancharampur"),
            },
            {
              value: "bijoynagar",
              label: t("location.chittagong.brahmanbaria.bijoynagar"),
            },
            {
              value: "kasba",
              label: t("location.chittagong.brahmanbaria.kasba"),
            },
            {
              value: "nabinagar",
              label: t("location.chittagong.brahmanbaria.nabinagar"),
            },
            {
              value: "nasirnagar",
              label: t("location.chittagong.brahmanbaria.nasirnagar"),
            },
            {
              value: "sarail",
              label: t("location.chittagong.brahmanbaria.sarail"),
            },
            {
              value: "ashuganj",
              label: t("location.chittagong.brahmanbaria.ashuganj"),
            },
          ],
        },
        {
          value: "chandpur",
          label: t("location.chittagong.chandpur.label"),
          children: [
            { value: "all", label: t("location.chittagong.chandpur.all") },
            {
              value: "chandpur_sadar",
              label: t("location.chittagong.chandpur.chandpur_sadar"),
            },
            {
              value: "faridganj",
              label: t("location.chittagong.chandpur.faridganj"),
            },
            {
              value: "haimchar",
              label: t("location.chittagong.chandpur.haimchar"),
            },
            {
              value: "haziganj",
              label: t("location.chittagong.chandpur.haziganj"),
            },
            {
              value: "kachua",
              label: t("location.chittagong.chandpur.kachua"),
            },
            {
              value: "matlab_dakshin",
              label: t("location.chittagong.chandpur.matlab_dakshin"),
            },
            {
              value: "matlab_uttar",
              label: t("location.chittagong.chandpur.matlab_uttar"),
            },
            {
              value: "shahrasti",
              label: t("location.chittagong.chandpur.shahrasti"),
            },
          ],
        },
        {
          value: "comilla",
          label: t("location.chittagong.comilla.label"),
          children: [
            { value: "all", label: t("location.chittagong.comilla.all") },
            {
              value: "comilla_sadar",
              label: t("location.chittagong.comilla.comilla_sadar"),
            },
            { value: "barura", label: t("location.chittagong.comilla.barura") },
            {
              value: "brahmanpara",
              label: t("location.chittagong.comilla.brahmanpara"),
            },
            {
              value: "burichang",
              label: t("location.chittagong.comilla.burichang"),
            },
            {
              value: "chandina",
              label: t("location.chittagong.comilla.chandina"),
            },
            {
              value: "chauddagram",
              label: t("location.chittagong.comilla.chauddagram"),
            },
            {
              value: "daudkandi",
              label: t("location.chittagong.comilla.daudkandi"),
            },
            {
              value: "debidwar",
              label: t("location.chittagong.comilla.debidwar"),
            },
            { value: "homna", label: t("location.chittagong.comilla.homna") },
            { value: "laksam", label: t("location.chittagong.comilla.laksam") },
            {
              value: "manoharganj",
              label: t("location.chittagong.comilla.manoharganj"),
            },
            { value: "meghna", label: t("location.chittagong.comilla.meghna") },
            {
              value: "monohorgonj",
              label: t("location.chittagong.comilla.monohorgonj"),
            },
            {
              value: "muradnagar",
              label: t("location.chittagong.comilla.muradnagar"),
            },
            {
              value: "nangalkot",
              label: t("location.chittagong.comilla.nangalkot"),
            },
            {
              value: "comilla_sadar_dakshin",
              label: t("location.chittagong.comilla.comilla_sadar_dakshin"),
            },
            { value: "titas", label: t("location.chittagong.comilla.titas") },
          ],
        },
        {
          value: "coxs_bazar",
          label: t("location.chittagong.coxs_bazar.label"),
          children: [
            { value: "all", label: t("location.chittagong.coxs_bazar.all") },
            {
              value: "coxs_bazar_sadar",
              label: t("location.chittagong.coxs_bazar.coxs_bazar_sadar"),
            },
            {
              value: "chakaria",
              label: t("location.chittagong.coxs_bazar.chakaria"),
            },
            {
              value: "kutubdia",
              label: t("location.chittagong.coxs_bazar.kutubdia"),
            },
            {
              value: "maheshkhali",
              label: t("location.chittagong.coxs_bazar.maheshkhali"),
            },
            {
              value: "pekua",
              label: t("location.chittagong.coxs_bazar.pekua"),
            },
            { value: "ramu", label: t("location.chittagong.coxs_bazar.ramu") },
            {
              value: "teknaf",
              label: t("location.chittagong.coxs_bazar.teknaf"),
            },
            {
              value: "ukhia",
              label: t("location.chittagong.coxs_bazar.ukhia"),
            },
          ],
        },
        {
          value: "feni",
          label: t("location.chittagong.feni.label"),
          children: [
            { value: "all", label: t("location.chittagong.feni.all") },
            {
              value: "feni_sadar",
              label: t("location.chittagong.feni.feni_sadar"),
            },
            {
              value: "chhagalnaiya",
              label: t("location.chittagong.feni.chhagalnaiya"),
            },
            {
              value: "daganbhuiyan",
              label: t("location.chittagong.feni.daganbhuiyan"),
            },
            { value: "fulgazi", label: t("location.chittagong.feni.fulgazi") },
            {
              value: "parshuram",
              label: t("location.chittagong.feni.parshuram"),
            },
            {
              value: "sonagazi",
              label: t("location.chittagong.feni.sonagazi"),
            },
          ],
        },
        {
          value: "chittagong",
          label: t("location.chittagong.chittagong.label"),
          children: [
            { value: "all", label: t("location.chittagong.chittagong.all") },
            {
              value: "anwara",
              label: t("location.chittagong.chittagong.anwara"),
            },
            {
              value: "banshkhali",
              label: t("location.chittagong.chittagong.banshkhali"),
            },
            {
              value: "boalkhali",
              label: t("location.chittagong.chittagong.boalkhali"),
            },
            {
              value: "chandanaish",
              label: t("location.chittagong.chittagong.chandanaish"),
            },
            {
              value: "fatikchhari",
              label: t("location.chittagong.chittagong.fatikchhari"),
            },
            {
              value: "hathazari",
              label: t("location.chittagong.chittagong.hathazari"),
            },
            {
              value: "lohagara",
              label: t("location.chittagong.chittagong.lohagara"),
            },
            {
              value: "mirsharai",
              label: t("location.chittagong.chittagong.mirsharai"),
            },
            {
              value: "patiya",
              label: t("location.chittagong.chittagong.patiya"),
            },
            {
              value: "rangunia",
              label: t("location.chittagong.chittagong.rangunia"),
            },
            {
              value: "raozan",
              label: t("location.chittagong.chittagong.raozan"),
            },
            {
              value: "sandwip",
              label: t("location.chittagong.chittagong.sandwip"),
            },
            {
              value: "satkania",
              label: t("location.chittagong.chittagong.satkania"),
            },
            {
              value: "sitakunda",
              label: t("location.chittagong.chittagong.sitakunda"),
            },
            {
              value: "karnaphuli",
              label: t("location.chittagong.chittagong.karnaphuli"),
            },
          ],
        },
        {
          value: "khagrachhari",
          label: t("location.chittagong.khagrachhari.label"),
          children: [
            { value: "all", label: t("location.chittagong.khagrachhari.all") },
            {
              value: "khagrachhari_sadar",
              label: t("location.chittagong.khagrachhari.khagrachhari_sadar"),
            },
            {
              value: "dighinala",
              label: t("location.chittagong.khagrachhari.dighinala"),
            },
            {
              value: "lakshmichhari",
              label: t("location.chittagong.khagrachhari.lakshmichhari"),
            },
            {
              value: "mahalchhari",
              label: t("location.chittagong.khagrachhari.mahalchhari"),
            },
            {
              value: "manikchhari",
              label: t("location.chittagong.khagrachhari.manikchhari"),
            },
            {
              value: "matiranga",
              label: t("location.chittagong.khagrachhari.matiranga"),
            },
            {
              value: "panchhari",
              label: t("location.chittagong.khagrachhari.panchhari"),
            },
            {
              value: "ramgarh",
              label: t("location.chittagong.khagrachhari.ramgarh"),
            },
          ],
        },
        {
          value: "lakshmipur",
          label: t("location.chittagong.lakshmipur.label"),
          children: [
            { value: "all", label: t("location.chittagong.lakshmipur.all") },
            {
              value: "lakshmipur_sadar",
              label: t("location.chittagong.lakshmipur.lakshmipur_sadar"),
            },
            {
              value: "kamalnagar",
              label: t("location.chittagong.lakshmipur.kamalnagar"),
            },
            {
              value: "raipur",
              label: t("location.chittagong.lakshmipur.raipur"),
            },
            {
              value: "ramganj",
              label: t("location.chittagong.lakshmipur.ramganj"),
            },
            {
              value: "ramgati",
              label: t("location.chittagong.lakshmipur.ramgati"),
            },
          ],
        },
        {
          value: "noakhali",
          label: t("location.chittagong.noakhali.label"),
          children: [
            { value: "all", label: t("location.chittagong.noakhali.all") },
            {
              value: "noakhali_sadar",
              label: t("location.chittagong.noakhali.noakhali_sadar"),
            },
            {
              value: "begumganj",
              label: t("location.chittagong.noakhali.begumganj"),
            },
            {
              value: "chatkhil",
              label: t("location.chittagong.noakhali.chatkhil"),
            },
            {
              value: "companiganj",
              label: t("location.chittagong.noakhali.companiganj"),
            },
            {
              value: "hatiya",
              label: t("location.chittagong.noakhali.hatiya"),
            },
            {
              value: "kabir_hat",
              label: t("location.chittagong.noakhali.kabir_hat"),
            },
            {
              value: "senbagh",
              label: t("location.chittagong.noakhali.senbagh"),
            },
            {
              value: "sonaimuri",
              label: t("location.chittagong.noakhali.sonaimuri"),
            },
            {
              value: "subarna_char",
              label: t("location.chittagong.noakhali.subarna_char"),
            },
          ],
        },
        {
          value: "rangamati",
          label: t("location.chittagong.rangamati.label"),
          children: [
            { value: "all", label: t("location.chittagong.rangamati.all") },
            {
              value: "rangamati_sadar",
              label: t("location.chittagong.rangamati.rangamati_sadar"),
            },
            {
              value: "baghaichhari",
              label: t("location.chittagong.rangamati.baghaichhari"),
            },
            {
              value: "barkal",
              label: t("location.chittagong.rangamati.barkal"),
            },
            {
              value: "belaichhari",
              label: t("location.chittagong.rangamati.belaichhari"),
            },
            {
              value: "bilaichhari",
              label: t("location.chittagong.rangamati.bilaichhari"),
            },
            {
              value: "juraichhari",
              label: t("location.chittagong.rangamati.juraichhari"),
            },
            {
              value: "kaptai",
              label: t("location.chittagong.rangamati.kaptai"),
            },
            {
              value: "kawkhali",
              label: t("location.chittagong.rangamati.kawkhali"),
            },
            {
              value: "langadu",
              label: t("location.chittagong.rangamati.langadu"),
            },
            {
              value: "naniarchar",
              label: t("location.chittagong.rangamati.naniarchar"),
            },
          ],
        },
      ],
    },
    // Dhaka Division
    {
      value: "dhaka",
      label: t("location.dhaka.label"),
      children: [
        {
          value: "all",
          label: t("location.dhaka.all"),
        },
        {
          value: "faridpur",
          label: t("location.dhaka.faridpur.label"),
          children: [
            { value: "all", label: t("location.dhaka.faridpur.all") },
            {
              value: "faridpur_sadar",
              label: t("location.dhaka.faridpur.faridpur_sadar"),
            },
            {
              value: "alfadanga",
              label: t("location.dhaka.faridpur.alfadanga"),
            },
            { value: "boalmari", label: t("location.dhaka.faridpur.boalmari") },
            {
              value: "charbhadrasan",
              label: t("location.dhaka.faridpur.charbhadrasan"),
            },
            {
              value: "madhukhali",
              label: t("location.dhaka.faridpur.madhukhali"),
            },
            {
              value: "nagarkanda",
              label: t("location.dhaka.faridpur.nagarkanda"),
            },
            { value: "sadarpur", label: t("location.dhaka.faridpur.sadarpur") },
            { value: "saltha", label: t("location.dhaka.faridpur.saltha") },
            { value: "bhanga", label: t("location.dhaka.faridpur.bhanga") },
          ],
        },
        {
          value: "gazipur",
          label: t("location.dhaka.gazipur.label"),
          children: [
            { value: "all", label: t("location.dhaka.gazipur.all") },
            {
              value: "gazipur_sadar",
              label: t("location.dhaka.gazipur.gazipur_sadar"),
            },
            {
              value: "kaliakair",
              label: t("location.dhaka.gazipur.kaliakair"),
            },
            { value: "kaliganj", label: t("location.dhaka.gazipur.kaliganj") },
            { value: "kapasia", label: t("location.dhaka.gazipur.kapasia") },
            { value: "sreepur", label: t("location.dhaka.gazipur.sreepur") },
          ],
        },
        {
          value: "dhaka",
          label: t("location.dhaka.dhaka.label"),
          children: [
            { value: "all", label: t("location.dhaka.dhaka.all") },
            {
              value: "dhaka_north_city_corporation",
              label: t("location.dhaka.dhaka.dhaka_north_city_corporation"),
            },
            {
              value: "dhaka_south_city_corporation",
              label: t("location.dhaka.dhaka.dhaka_south_city_corporation"),
            },
            { value: "sadar", label: t("location.dhaka.dhaka.sadar") },
            { value: "dhamrai", label: t("location.dhaka.dhaka.dhamrai") },
            { value: "dohar", label: t("location.dhaka.dhaka.dohar") },
            {
              value: "keraniganj",
              label: t("location.dhaka.dhaka.keraniganj"),
            },
            { value: "nawabganj", label: t("location.dhaka.dhaka.nawabganj") },
            { value: "savar", label: t("location.dhaka.dhaka.savar") },
          ],
        },
        {
          value: "gopalganj",
          label: t("location.dhaka.gopalganj.label"),
          children: [
            { value: "all", label: t("location.dhaka.gopalganj.all") },
            {
              value: "gopalganj_sadar",
              label: t("location.dhaka.gopalganj.gopalganj_sadar"),
            },
            {
              value: "kashiani",
              label: t("location.dhaka.gopalganj.kashiani"),
            },
            {
              value: "kotalipara",
              label: t("location.dhaka.gopalganj.kotalipara"),
            },
            {
              value: "muksudpur",
              label: t("location.dhaka.gopalganj.muksudpur"),
            },
            {
              value: "tungipara",
              label: t("location.dhaka.gopalganj.tungipara"),
            },
          ],
        },
        {
          value: "kishoreganj",
          label: t("location.dhaka.kishoreganj.label"),
          children: [
            { value: "all", label: t("location.dhaka.kishoreganj.all") },
            {
              value: "kishoreganj_sadar",
              label: t("location.dhaka.kishoreganj.kishoreganj_sadar"),
            },
            {
              value: "austagram",
              label: t("location.dhaka.kishoreganj.austagram"),
            },
            {
              value: "bajitpur",
              label: t("location.dhaka.kishoreganj.bajitpur"),
            },
            {
              value: "bhairab",
              label: t("location.dhaka.kishoreganj.bhairab"),
            },
            {
              value: "hossainpur",
              label: t("location.dhaka.kishoreganj.hossainpur"),
            },
            { value: "itna", label: t("location.dhaka.kishoreganj.itna") },
            {
              value: "karimganj",
              label: t("location.dhaka.kishoreganj.karimganj"),
            },
            {
              value: "katiadi",
              label: t("location.dhaka.kishoreganj.katiadi"),
            },
            {
              value: "kuliarchar",
              label: t("location.dhaka.kishoreganj.kuliarchar"),
            },
            {
              value: "mithamain",
              label: t("location.dhaka.kishoreganj.mithamain"),
            },
            { value: "nikli", label: t("location.dhaka.kishoreganj.nikli") },
            {
              value: "pakundia",
              label: t("location.dhaka.kishoreganj.pakundia"),
            },
            { value: "tarail", label: t("location.dhaka.kishoreganj.tarail") },
          ],
        },
        {
          value: "madaripur",
          label: t("location.dhaka.madaripur.label"),
          children: [
            { value: "all", label: t("location.dhaka.madaripur.all") },
            {
              value: "madaripur_sadar",
              label: t("location.dhaka.madaripur.madaripur_sadar"),
            },
            { value: "kalkini", label: t("location.dhaka.madaripur.kalkini") },
            { value: "rajoir", label: t("location.dhaka.madaripur.rajoir") },
            {
              value: "shibchar",
              label: t("location.dhaka.madaripur.shibchar"),
            },
          ],
        },
        {
          value: "manikganj",
          label: t("location.dhaka.manikganj.label"),
          children: [
            { value: "all", label: t("location.dhaka.manikganj.all") },
            {
              value: "manikganj_sadar",
              label: t("location.dhaka.manikganj.manikganj_sadar"),
            },
            {
              value: "daulatpur",
              label: t("location.dhaka.manikganj.daulatpur"),
            },
            { value: "ghior", label: t("location.dhaka.manikganj.ghior") },
            {
              value: "harirampur",
              label: t("location.dhaka.manikganj.harirampur"),
            },
            { value: "saturia", label: t("location.dhaka.manikganj.saturia") },
            {
              value: "shivalaya",
              label: t("location.dhaka.manikganj.shivalaya"),
            },
            { value: "singair", label: t("location.dhaka.manikganj.singair") },
          ],
        },
        {
          value: "munshiganj",
          label: t("location.dhaka.munshiganj.label"),
          children: [
            { value: "all", label: t("location.dhaka.munshiganj.all") },
            {
              value: "munshiganj_sadar",
              label: t("location.dhaka.munshiganj.munshiganj_sadar"),
            },
            { value: "gazaria", label: t("location.dhaka.munshiganj.gazaria") },
            {
              value: "lohajang",
              label: t("location.dhaka.munshiganj.lohajang"),
            },
            {
              value: "sirajdikhan",
              label: t("location.dhaka.munshiganj.sirajdikhan"),
            },
            {
              value: "sreenagar",
              label: t("location.dhaka.munshiganj.sreenagar"),
            },
            {
              value: "tongibari",
              label: t("location.dhaka.munshiganj.tongibari"),
            },
          ],
        },
        {
          value: "narayanganj",
          label: t("location.dhaka.narayanganj.label"),
          children: [
            { value: "all", label: t("location.dhaka.narayanganj.all") },
            {
              value: "narayanganj_sadar",
              label: t("location.dhaka.narayanganj.narayanganj_sadar"),
            },
            {
              value: "araihazar",
              label: t("location.dhaka.narayanganj.araihazar"),
            },
            { value: "bandar", label: t("location.dhaka.narayanganj.bandar") },
            {
              value: "rupganj",
              label: t("location.dhaka.narayanganj.rupganj"),
            },
            {
              value: "sonargaon",
              label: t("location.dhaka.narayanganj.sonargaon"),
            },
          ],
        },
        {
          value: "rajbari",
          label: t("location.dhaka.rajbari.label"),
          children: [
            { value: "all", label: t("location.dhaka.rajbari.all") },
            {
              value: "rajbari_sadar",
              label: t("location.dhaka.rajbari.rajbari_sadar"),
            },
            {
              value: "baliakandi",
              label: t("location.dhaka.rajbari.baliakandi"),
            },
            {
              value: "goalandaghat",
              label: t("location.dhaka.rajbari.goalandaghat"),
            },
            {
              value: "kalukhali",
              label: t("location.dhaka.rajbari.kalukhali"),
            },
            { value: "pangsha", label: t("location.dhaka.rajbari.pangsha") },
          ],
        },
        {
          value: "shariatpur",
          label: t("location.dhaka.shariatpur.label"),
          children: [
            { value: "all", label: t("location.dhaka.shariatpur.all") },
            {
              value: "shariatpur_sadar",
              label: t("location.dhaka.shariatpur.shariatpur_sadar"),
            },
            {
              value: "bhedarganj",
              label: t("location.dhaka.shariatpur.bhedarganj"),
            },
            { value: "damudya", label: t("location.dhaka.shariatpur.damudya") },
            {
              value: "gosairhat",
              label: t("location.dhaka.shariatpur.gosairhat"),
            },
            { value: "naria", label: t("location.dhaka.shariatpur.naria") },
            { value: "zajira", label: t("location.dhaka.shariatpur.zajira") },
          ],
        },
        {
          value: "tangail",
          label: t("location.dhaka.tangail.label"),
          children: [
            { value: "all", label: t("location.dhaka.tangail.all") },
            {
              value: "tangail_sadar",
              label: t("location.dhaka.tangail.tangail_sadar"),
            },
            { value: "basail", label: t("location.dhaka.tangail.basail") },
            { value: "bhuapur", label: t("location.dhaka.tangail.bhuapur") },
            { value: "delduar", label: t("location.dhaka.tangail.delduar") },
            { value: "dhanbari", label: t("location.dhaka.tangail.dhanbari") },
            { value: "ghatail", label: t("location.dhaka.tangail.ghatail") },
            { value: "gopalpur", label: t("location.dhaka.tangail.gopalpur") },
            { value: "kalihati", label: t("location.dhaka.tangail.kalihati") },
            { value: "madhupur", label: t("location.dhaka.tangail.madhupur") },
            { value: "mirzapur", label: t("location.dhaka.tangail.mirzapur") },
            { value: "nagarpur", label: t("location.dhaka.tangail.nagarpur") },
            { value: "sakhipur", label: t("location.dhaka.tangail.sakhipur") },
          ],
        },
      ],
    },
    // Khulna Division **
    {
      value: "khulna",
      label: t("location.khulna.label"),
      children: [
        {
          value: "all",
          label: t("location.khulna.all"),
        },
        {
          value: "bagerhat",
          label: t("location.khulna.bagerhat.label"),
          children: [
            { value: "all", label: t("location.khulna.bagerhat.all") },
            {
              value: "bagerhat_sadar",
              label: t("location.khulna.bagerhat.bagerhat_sadar"),
            },
            {
              value: "chitalmari",
              label: t("location.khulna.bagerhat.chitalmari"),
            },
            {
              value: "fakirhat",
              label: t("location.khulna.bagerhat.fakirhat"),
            },
            { value: "kachua", label: t("location.khulna.bagerhat.kachua") },
            {
              value: "mollahat",
              label: t("location.khulna.bagerhat.mollahat"),
            },
            { value: "mongla", label: t("location.khulna.bagerhat.mongla") },
            {
              value: "morrelganj",
              label: t("location.khulna.bagerhat.morrelganj"),
            },
            { value: "rampal", label: t("location.khulna.bagerhat.rampal") },
            {
              value: "sarankhola",
              label: t("location.khulna.bagerhat.sarankhola"),
            },
          ],
        },
        {
          value: "chuadanga",
          label: t("location.khulna.chuadanga.label"),
          children: [
            { value: "all", label: t("location.khulna.chuadanga.all") },
            {
              value: "chuadanga_sadar",
              label: t("location.khulna.chuadanga.chuadanga_sadar"),
            },
            {
              value: "alamdanga",
              label: t("location.khulna.chuadanga.alamdanga"),
            },
            {
              value: "damurhuda",
              label: t("location.khulna.chuadanga.damurhuda"),
            },
            {
              value: "jibannagar",
              label: t("location.khulna.chuadanga.jibannagar"),
            },
          ],
        },
        {
          value: "jessore",
          label: t("location.khulna.jessore.label"),
          children: [
            { value: "all", label: t("location.khulna.jessore.all") },
            {
              value: "jessore_sadar",
              label: t("location.khulna.jessore.jessore_sadar"),
            },
            {
              value: "abhaynagar",
              label: t("location.khulna.jessore.abhaynagar"),
            },
            {
              value: "bagherpara",
              label: t("location.khulna.jessore.bagherpara"),
            },
            {
              value: "chaugachha",
              label: t("location.khulna.jessore.chaugachha"),
            },
            {
              value: "jhikargachha",
              label: t("location.khulna.jessore.jhikargachha"),
            },
            {
              value: "keshabpur",
              label: t("location.khulna.jessore.keshabpur"),
            },
            {
              value: "manirampur",
              label: t("location.khulna.jessore.manirampur"),
            },
            { value: "sharsha", label: t("location.khulna.jessore.sharsha") },
          ],
        },
        {
          value: "khulna",
          label: t("location.khulna.khulna.label"),
          children: [
            { value: "all", label: t("location.khulna.khulna.all") },
            {
              value: "khulna_sadar",
              label: t("location.khulna.khulna.khulna_sadar"),
            },
            {
              value: "batiaghata",
              label: t("location.khulna.khulna.batiaghata"),
            },
            { value: "dacope", label: t("location.khulna.khulna.dacope") },
            { value: "dumuria", label: t("location.khulna.khulna.dumuria") },
            { value: "dighalia", label: t("location.khulna.khulna.dighalia") },
            { value: "koyra", label: t("location.khulna.khulna.koyra") },
            {
              value: "paikgachha",
              label: t("location.khulna.khulna.paikgachha"),
            },
            { value: "phultala", label: t("location.khulna.khulna.phultala") },
            { value: "rupsa", label: t("location.khulna.khulna.rupsa") },
            {
              value: "terokhada",
              label: t("location.khulna.khulna.terokhada"),
            },
          ],
        },
        {
          value: "jhenaidah",
          label: t("location.khulna.jhenaidah.label"),
          children: [
            { value: "all", label: t("location.khulna.jhenaidah.all") },
            {
              value: "jhenaidah_sadar",
              label: t("location.khulna.jhenaidah.jhenaidah_sadar"),
            },
            {
              value: "harinakunda",
              label: t("location.khulna.jhenaidah.harinakunda"),
            },
            {
              value: "kaliganj",
              label: t("location.khulna.jhenaidah.kaliganj"),
            },
            {
              value: "kotchandpur",
              label: t("location.khulna.jhenaidah.kotchandpur"),
            },
            {
              value: "maheshpur",
              label: t("location.khulna.jhenaidah.maheshpur"),
            },
            {
              value: "shailkupa",
              label: t("location.khulna.jhenaidah.shailkupa"),
            },
          ],
        },
        {
          value: "kushtia",
          label: t("location.khulna.kushtia.label"),
          children: [
            { value: "all", label: t("location.khulna.kushtia.all") },
            {
              value: "kushtia_sadar",
              label: t("location.khulna.kushtia.kushtia_sadar"),
            },
            {
              value: "bheramara",
              label: t("location.khulna.kushtia.bheramara"),
            },
            {
              value: "daulatpur",
              label: t("location.khulna.kushtia.daulatpur"),
            },
            { value: "khoksa", label: t("location.khulna.kushtia.khoksa") },
            {
              value: "kumarkhali",
              label: t("location.khulna.kushtia.kumarkhali"),
            },
            { value: "mirpur", label: t("location.khulna.kushtia.mirpur") },
          ],
        },
        {
          value: "magura",
          label: t("location.khulna.magura.label"),
          children: [
            { value: "all", label: t("location.khulna.magura.all") },
            {
              value: "magura_sadar",
              label: t("location.khulna.magura.magura_sadar"),
            },
            {
              value: "mohammadpur",
              label: t("location.khulna.magura.mohammadpur"),
            },
            { value: "shalikha", label: t("location.khulna.magura.shalikha") },
            { value: "sreepur", label: t("location.khulna.magura.sreepur") },
          ],
        },
        {
          value: "meherpur",
          label: t("location.khulna.meherpur.label"),
          children: [
            { value: "all", label: t("location.khulna.meherpur.all") },
            {
              value: "meherpur_sadar",
              label: t("location.khulna.meherpur.meherpur_sadar"),
            },
            { value: "gangni", label: t("location.khulna.meherpur.gangni") },
            {
              value: "mujibnagar",
              label: t("location.khulna.meherpur.mujibnagar"),
            },
          ],
        },
        {
          value: "narail",
          label: t("location.khulna.narail.label"),
          children: [
            { value: "all", label: t("location.khulna.narail.all") },
            {
              value: "narail_sadar",
              label: t("location.khulna.narail.narail_sadar"),
            },
            { value: "kalia", label: t("location.khulna.narail.kalia") },
            { value: "lohagara", label: t("location.khulna.narail.lohagara") },
          ],
        },
        {
          value: "satkhira",
          label: t("location.khulna.satkhira.label"),
          children: [
            { value: "all", label: t("location.khulna.satkhira.all") },
            {
              value: "satkhira_sadar",
              label: t("location.khulna.satkhira.satkhira_sadar"),
            },
            {
              value: "assasuni",
              label: t("location.khulna.satkhira.assasuni"),
            },
            { value: "debhata", label: t("location.khulna.satkhira.debhata") },
            { value: "kalaroa", label: t("location.khulna.satkhira.kalaroa") },
            {
              value: "kaliganj",
              label: t("location.khulna.satkhira.kaliganj"),
            },
            {
              value: "shyamnagar",
              label: t("location.khulna.satkhira.shyamnagar"),
            },
            { value: "tala", label: t("location.khulna.satkhira.tala") },
          ],
        },
      ],
    },
    // Rajshahi Division
    {
      value: "rajshahi",
      label: t("location.rajshahi.label"),
      children: [
        {
          value: "all",
          label: t("location.rajshahi.all"),
        },
        {
          value: "bogura",
          label: t("location.rajshahi.bogura.label"),
          children: [
            { value: "all", label: t("location.rajshahi.bogura.all") },
            {
              value: "bogura_sadar",
              label: t("location.rajshahi.bogura.bogura_sadar"),
            },
            {
              value: "adamdighi",
              label: t("location.rajshahi.bogura.adamdighi"),
            },
            { value: "dhunat", label: t("location.rajshahi.bogura.dhunat") },
            {
              value: "dhupchanchia",
              label: t("location.rajshahi.bogura.dhupchanchia"),
            },
            { value: "gabtali", label: t("location.rajshahi.bogura.gabtali") },
            { value: "kahaloo", label: t("location.rajshahi.bogura.kahaloo") },
            {
              value: "nandigram",
              label: t("location.rajshahi.bogura.nandigram"),
            },
            {
              value: "sariakandi",
              label: t("location.rajshahi.bogura.sariakandi"),
            },
            {
              value: "shajahanpur",
              label: t("location.rajshahi.bogura.shajahanpur"),
            },
            { value: "sherpur", label: t("location.rajshahi.bogura.sherpur") },
            {
              value: "shibganj",
              label: t("location.rajshahi.bogura.shibganj"),
            },
            {
              value: "sonatola",
              label: t("location.rajshahi.bogura.sonatola"),
            },
          ],
        },
        {
          value: "chapainawabganj",
          label: t("location.rajshahi.chapainawabganj.label"),
          children: [
            { value: "all", label: t("location.rajshahi.chapainawabganj.all") },
            {
              value: "chapainawabganj_sadar",
              label: t(
                "location.rajshahi.chapainawabganj.chapainawabganj_sadar"
              ),
            },
            {
              value: "bholahat",
              label: t("location.rajshahi.chapainawabganj.bholahat"),
            },
            {
              value: "gomastapur",
              label: t("location.rajshahi.chapainawabganj.gomastapur"),
            },
            {
              value: "nachole",
              label: t("location.rajshahi.chapainawabganj.nachole"),
            },
            {
              value: "shibganj",
              label: t("location.rajshahi.chapainawabganj.shibganj"),
            },
          ],
        },
        {
          value: "joypurhat",
          label: t("location.rajshahi.joypurhat.label"),
          children: [
            { value: "all", label: t("location.rajshahi.joypurhat.all") },
            {
              value: "joypurhat_sadar",
              label: t("location.rajshahi.joypurhat.joypurhat_sadar"),
            },
            {
              value: "akkelpur",
              label: t("location.rajshahi.joypurhat.akkelpur"),
            },
            { value: "kalai", label: t("location.rajshahi.joypurhat.kalai") },
            {
              value: "khetlal",
              label: t("location.rajshahi.joypurhat.khetlal"),
            },
            {
              value: "panchbibi",
              label: t("location.rajshahi.joypurhat.panchbibi"),
            },
          ],
        },
        {
          value: "rajshahi",
          label: t("location.rajshahi.rajshahi.label"),
          children: [
            { value: "all", label: t("location.rajshahi.rajshahi.all") },
            {
              value: "rajshahi_sadar",
              label: t("location.rajshahi.rajshahi.rajshahi_sadar"),
            },
            { value: "bagha", label: t("location.rajshahi.rajshahi.bagha") },
            {
              value: "bagmara",
              label: t("location.rajshahi.rajshahi.bagmara"),
            },
            {
              value: "charghat",
              label: t("location.rajshahi.rajshahi.charghat"),
            },
            {
              value: "durgapur",
              label: t("location.rajshahi.rajshahi.durgapur"),
            },
            {
              value: "godagari",
              label: t("location.rajshahi.rajshahi.godagari"),
            },
            {
              value: "mohanpur",
              label: t("location.rajshahi.rajshahi.mohanpur"),
            },
            { value: "paba", label: t("location.rajshahi.rajshahi.paba") },
            { value: "puthia", label: t("location.rajshahi.rajshahi.puthia") },
            { value: "tanore", label: t("location.rajshahi.rajshahi.tanore") },
          ],
        },
        {
          value: "naogaon",
          label: t("location.rajshahi.naogaon.label"),
          children: [
            { value: "all", label: t("location.rajshahi.naogaon.all") },
            {
              value: "naogaon_sadar",
              label: t("location.rajshahi.naogaon.naogaon_sadar"),
            },
            { value: "atrai", label: t("location.rajshahi.naogaon.atrai") },
            {
              value: "badalgachhi",
              label: t("location.rajshahi.naogaon.badalgachhi"),
            },
            {
              value: "dhamoirhat",
              label: t("location.rajshahi.naogaon.dhamoirhat"),
            },
            { value: "manda", label: t("location.rajshahi.naogaon.manda") },
            {
              value: "mahadebpur",
              label: t("location.rajshahi.naogaon.mahadebpur"),
            },
            {
              value: "niamatpur",
              label: t("location.rajshahi.naogaon.niamatpur"),
            },
            {
              value: "patnitala",
              label: t("location.rajshahi.naogaon.patnitala"),
            },
            { value: "porsha", label: t("location.rajshahi.naogaon.porsha") },
            {
              value: "raninagar",
              label: t("location.rajshahi.naogaon.raninagar"),
            },
            { value: "sapahar", label: t("location.rajshahi.naogaon.sapahar") },
          ],
        },
        {
          value: "natore",
          label: t("location.rajshahi.natore.label"),
          children: [
            { value: "all", label: t("location.rajshahi.natore.all") },
            {
              value: "natore_sadar",
              label: t("location.rajshahi.natore.natore_sadar"),
            },
            {
              value: "bagatipara",
              label: t("location.rajshahi.natore.bagatipara"),
            },
            {
              value: "baraigram",
              label: t("location.rajshahi.natore.baraigram"),
            },
            {
              value: "gurudaspur",
              label: t("location.rajshahi.natore.gurudaspur"),
            },
            { value: "lalpur", label: t("location.rajshahi.natore.lalpur") },
            { value: "singra", label: t("location.rajshahi.natore.singra") },
          ],
        },
        {
          value: "pabna",
          label: t("location.rajshahi.pabna.label"),
          children: [
            { value: "all", label: t("location.rajshahi.pabna.all") },
            {
              value: "pabna_sadar",
              label: t("location.rajshahi.pabna.pabna_sadar"),
            },
            { value: "ataikula", label: t("location.rajshahi.pabna.ataikula") },
            { value: "atgharia", label: t("location.rajshahi.pabna.atgharia") },
            { value: "bera", label: t("location.rajshahi.pabna.bera") },
            { value: "bhangura", label: t("location.rajshahi.pabna.bhangura") },
            {
              value: "chatmohar",
              label: t("location.rajshahi.pabna.chatmohar"),
            },
            { value: "faridpur", label: t("location.rajshahi.pabna.faridpur") },
            { value: "ishwardi", label: t("location.rajshahi.pabna.ishwardi") },
            { value: "santhia", label: t("location.rajshahi.pabna.santhia") },
            {
              value: "sujanagar",
              label: t("location.rajshahi.pabna.sujanagar"),
            },
          ],
        },
        {
          value: "sirajganj",
          label: t("location.rajshahi.sirajganj.label"),
          children: [
            { value: "all", label: t("location.rajshahi.sirajganj.all") },
            {
              value: "sirajganj_sadar",
              label: t("location.rajshahi.sirajganj.sirajganj_sadar"),
            },
            {
              value: "belkuchi",
              label: t("location.rajshahi.sirajganj.belkuchi"),
            },
            {
              value: "chauhali",
              label: t("location.rajshahi.sirajganj.chauhali"),
            },
            {
              value: "kamarkhanda",
              label: t("location.rajshahi.sirajganj.kamarkhanda"),
            },
            {
              value: "kazipur",
              label: t("location.rajshahi.sirajganj.kazipur"),
            },
            {
              value: "raiganj",
              label: t("location.rajshahi.sirajganj.raiganj"),
            },
            {
              value: "shahjadpur",
              label: t("location.rajshahi.sirajganj.shahjadpur"),
            },
            { value: "tarash", label: t("location.rajshahi.sirajganj.tarash") },
            {
              value: "ullahpara",
              label: t("location.rajshahi.sirajganj.ullahpara"),
            },
          ],
        },
      ],
    },
    // Rangpur
    {
      value: "rangpur",
      label: t("location.rangpur.label"),
      children: [
        {
          value: "all",
          label: t("location.rangpur.all"),
        },
        {
          value: "dinajpur",
          label: t("location.rangpur.dinajpur.label"),
          children: [
            { value: "all", label: t("location.rangpur.dinajpur.all") },
            {
              value: "dinajpur_sadar",
              label: t("location.rangpur.dinajpur.dinajpur_sadar"),
            },
            { value: "biral", label: t("location.rangpur.dinajpur.biral") },
            {
              value: "birampur",
              label: t("location.rangpur.dinajpur.birampur"),
            },
            { value: "birganj", label: t("location.rangpur.dinajpur.birganj") },
            {
              value: "bochaganj",
              label: t("location.rangpur.dinajpur.bochaganj"),
            },
            {
              value: "chirirbandar",
              label: t("location.rangpur.dinajpur.chirirbandar"),
            },
            { value: "fulbari", label: t("location.rangpur.dinajpur.fulbari") },
            {
              value: "ghoraghat",
              label: t("location.rangpur.dinajpur.ghoraghat"),
            },
            {
              value: "hakimpur",
              label: t("location.rangpur.dinajpur.hakimpur"),
            },
            {
              value: "kaharole",
              label: t("location.rangpur.dinajpur.kaharole"),
            },
            {
              value: "khansama",
              label: t("location.rangpur.dinajpur.khansama"),
            },
            {
              value: "nawabganj",
              label: t("location.rangpur.dinajpur.nawabganj"),
            },
            {
              value: "parbatipur",
              label: t("location.rangpur.dinajpur.parbatipur"),
            },
          ],
        },
        {
          value: "gaibandha",
          label: t("location.rangpur.gaibandha.label"),
          children: [
            { value: "all", label: t("location.rangpur.gaibandha.all") },
            {
              value: "gaibandha_sadar",
              label: t("location.rangpur.gaibandha.gaibandha_sadar"),
            },
            {
              value: "fulchhari",
              label: t("location.rangpur.gaibandha.fulchhari"),
            },
            {
              value: "gobindaganj",
              label: t("location.rangpur.gaibandha.gobindaganj"),
            },
            {
              value: "palashbari",
              label: t("location.rangpur.gaibandha.palashbari"),
            },
            {
              value: "sadullapur",
              label: t("location.rangpur.gaibandha.sadullapur"),
            },
            {
              value: "sughatta",
              label: t("location.rangpur.gaibandha.sughatta"),
            },
            {
              value: "sundarganj",
              label: t("location.rangpur.gaibandha.sundarganj"),
            },
          ],
        },
        {
          value: "rangpur",
          label: t("location.rangpur.rangpur.label"),
          children: [
            { value: "all", label: t("location.rangpur.rangpur.all") },
            {
              value: "rangpur_sadar",
              label: t("location.rangpur.rangpur.rangpur_sadar"),
            },
            {
              value: "badarganj",
              label: t("location.rangpur.rangpur.badarganj"),
            },
            {
              value: "gangachhara",
              label: t("location.rangpur.rangpur.gangachhara"),
            },
            { value: "kaunia", label: t("location.rangpur.rangpur.kaunia") },
            {
              value: "mithapukur",
              label: t("location.rangpur.rangpur.mithapukur"),
            },
            {
              value: "pirgachha",
              label: t("location.rangpur.rangpur.pirgachha"),
            },
            { value: "pirganj", label: t("location.rangpur.rangpur.pirganj") },
            {
              value: "taraganj",
              label: t("location.rangpur.rangpur.taraganj"),
            },
          ],
        },
        {
          value: "kurigram",
          label: t("location.rangpur.kurigram.label"),
          children: [
            { value: "all", label: t("location.rangpur.kurigram.all") },
            {
              value: "kurigram_sadar",
              label: t("location.rangpur.kurigram.kurigram_sadar"),
            },
            {
              value: "bhurungamari",
              label: t("location.rangpur.kurigram.bhurungamari"),
            },
            {
              value: "char_rajibpur",
              label: t("location.rangpur.kurigram.char_rajibpur"),
            },
            {
              value: "chilmari",
              label: t("location.rangpur.kurigram.chilmari"),
            },
            { value: "fulbari", label: t("location.rangpur.kurigram.fulbari") },
            {
              value: "nageshwari",
              label: t("location.rangpur.kurigram.nageshwari"),
            },
            {
              value: "rajarhat",
              label: t("location.rangpur.kurigram.rajarhat"),
            },
            { value: "raomari", label: t("location.rangpur.kurigram.raomari") },
            { value: "ulipur", label: t("location.rangpur.kurigram.ulipur") },
          ],
        },
        {
          value: "lalmonirhat",
          label: t("location.rangpur.lalmonirhat.label"),
          children: [
            { value: "all", label: t("location.rangpur.lalmonirhat.all") },
            {
              value: "lalmonirhat_sadar",
              label: t("location.rangpur.lalmonirhat.lalmonirhat_sadar"),
            },
            {
              value: "aditmari",
              label: t("location.rangpur.lalmonirhat.aditmari"),
            },
            {
              value: "hatibandha",
              label: t("location.rangpur.lalmonirhat.hatibandha"),
            },
            {
              value: "kaliganj",
              label: t("location.rangpur.lalmonirhat.kaliganj"),
            },
            {
              value: "patgram",
              label: t("location.rangpur.lalmonirhat.patgram"),
            },
          ],
        },
        {
          value: "nilphamari",
          label: t("location.rangpur.nilphamari.label"),
          children: [
            { value: "all", label: t("location.rangpur.nilphamari.all") },
            {
              value: "nilphamari_sadar",
              label: t("location.rangpur.nilphamari.nilphamari_sadar"),
            },
            { value: "dimla", label: t("location.rangpur.nilphamari.dimla") },
            { value: "domar", label: t("location.rangpur.nilphamari.domar") },
            {
              value: "jaldhaka",
              label: t("location.rangpur.nilphamari.jaldhaka"),
            },
            {
              value: "kishoreganj",
              label: t("location.rangpur.nilphamari.kishoreganj"),
            },
            {
              value: "saidpur",
              label: t("location.rangpur.nilphamari.saidpur"),
            },
          ],
        },
        {
          value: "panchagarh",
          label: t("location.rangpur.panchagarh.label"),
          children: [
            { value: "all", label: t("location.rangpur.panchagarh.all") },
            {
              value: "panchagarh_sadar",
              label: t("location.rangpur.panchagarh.panchagarh_sadar"),
            },
            { value: "atwari", label: t("location.rangpur.panchagarh.atwari") },
            { value: "boda", label: t("location.rangpur.panchagarh.boda") },
            {
              value: "debiganj",
              label: t("location.rangpur.panchagarh.debiganj"),
            },
            {
              value: "tetulia",
              label: t("location.rangpur.panchagarh.tetulia"),
            },
          ],
        },
        {
          value: "thakurgaon",
          label: t("location.rangpur.thakurgaon.label"),
          children: [
            { value: "all", label: t("location.rangpur.thakurgaon.all") },
            {
              value: "thakurgaon_sadar",
              label: t("location.rangpur.thakurgaon.thakurgaon_sadar"),
            },
            {
              value: "baliadangi",
              label: t("location.rangpur.thakurgaon.baliadangi"),
            },
            {
              value: "haripur",
              label: t("location.rangpur.thakurgaon.haripur"),
            },
            {
              value: "pirganj",
              label: t("location.rangpur.thakurgaon.pirganj"),
            },
            {
              value: "ranisankail",
              label: t("location.rangpur.thakurgaon.ranisankail"),
            },
          ],
        },
      ],
    },
    // Mymensingh
    {
      value: "mymensingh",
      label: t("location.mymensingh.label"),
      children: [
        {
          value: "all",
          label: t("location.mymensingh.all"),
        },
        {
          value: "jamalpur",
          label: t("location.mymensingh.jamalpur.label"),
          children: [
            { value: "all", label: t("location.mymensingh.jamalpur.all") },
            {
              value: "jamalpur_sadar",
              label: t("location.mymensingh.jamalpur.jamalpur_sadar"),
            },
            {
              value: "baksiganj",
              label: t("location.mymensingh.jamalpur.baksiganj"),
            },
            {
              value: "dewanganj",
              label: t("location.mymensingh.jamalpur.dewanganj"),
            },
            {
              value: "islampur",
              label: t("location.mymensingh.jamalpur.islampur"),
            },
            {
              value: "madarganj",
              label: t("location.mymensingh.jamalpur.madarganj"),
            },
            {
              value: "melandaha",
              label: t("location.mymensingh.jamalpur.melandaha"),
            },
            {
              value: "sarishabari",
              label: t("location.mymensingh.jamalpur.sarishabari"),
            },
          ],
        },
        {
          value: "netrokona",
          label: t("location.mymensingh.netrokona.label"),
          children: [
            { value: "all", label: t("location.mymensingh.netrokona.all") },
            {
              value: "netrokona_sadar",
              label: t("location.mymensingh.netrokona.netrokona_sadar"),
            },
            {
              value: "atpara",
              label: t("location.mymensingh.netrokona.atpara"),
            },
            {
              value: "barhatta",
              label: t("location.mymensingh.netrokona.barhatta"),
            },
            {
              value: "durgapur",
              label: t("location.mymensingh.netrokona.durgapur"),
            },
            {
              value: "kalmakanda",
              label: t("location.mymensingh.netrokona.kalmakanda"),
            },
            {
              value: "kendua",
              label: t("location.mymensingh.netrokona.kendua"),
            },
            {
              value: "khaliajuri",
              label: t("location.mymensingh.netrokona.khaliajuri"),
            },
            { value: "madan", label: t("location.mymensingh.netrokona.madan") },
            {
              value: "mohanganj",
              label: t("location.mymensingh.netrokona.mohanganj"),
            },
            {
              value: "purbadhala",
              label: t("location.mymensingh.netrokona.purbadhala"),
            },
          ],
        },
        {
          value: "mymensingh",
          label: t("location.mymensingh.mymensingh.label"),
          children: [
            { value: "all", label: t("location.mymensingh.mymensingh.all") },
            {
              value: "mymensingh_sadar",
              label: t("location.mymensingh.mymensingh.mymensingh_sadar"),
            },
            {
              value: "bhaluka",
              label: t("location.mymensingh.mymensingh.bhaluka"),
            },
            {
              value: "dhobaura",
              label: t("location.mymensingh.mymensingh.dhobaura"),
            },
            {
              value: "fulbaria",
              label: t("location.mymensingh.mymensingh.fulbaria"),
            },
            {
              value: "gaffargaon",
              label: t("location.mymensingh.mymensingh.gaffargaon"),
            },
            {
              value: "gauripur",
              label: t("location.mymensingh.mymensingh.gauripur"),
            },
            {
              value: "haluaghat",
              label: t("location.mymensingh.mymensingh.haluaghat"),
            },
            {
              value: "ishwarganj",
              label: t("location.mymensingh.mymensingh.ishwarganj"),
            },
            {
              value: "muktagachha",
              label: t("location.mymensingh.mymensingh.muktagachha"),
            },
            {
              value: "nandail",
              label: t("location.mymensingh.mymensingh.nandail"),
            },
            {
              value: "phulpur",
              label: t("location.mymensingh.mymensingh.phulpur"),
            },
            {
              value: "tarakanda",
              label: t("location.mymensingh.mymensingh.tarakanda"),
            },
            {
              value: "trishal",
              label: t("location.mymensingh.mymensingh.trishal"),
            },
          ],
        },
        {
          value: "sherpur",
          label: t("location.mymensingh.sherpur.label"),
          children: [
            { value: "all", label: t("location.mymensingh.sherpur.all") },
            {
              value: "sherpur_sadar",
              label: t("location.mymensingh.sherpur.sherpur_sadar"),
            },
            {
              value: "jhenaigati",
              label: t("location.mymensingh.sherpur.jhenaigati"),
            },
            { value: "nakla", label: t("location.mymensingh.sherpur.nakla") },
            {
              value: "nalitabari",
              label: t("location.mymensingh.sherpur.nalitabari"),
            },
            {
              value: "sreebardi",
              label: t("location.mymensingh.sherpur.sreebardi"),
            },
          ],
        },
      ],
    },
    // Sylhet
    {
      value: "sylhet",
      label: t("location.sylhet.label"),
      children: [
        {
          value: "all",
          label: t("location.sylhet.all"),
        },
        {
          value: "sunamganj",
          label: t("location.sylhet.sunamganj.label"),
          children: [
            { value: "all", label: t("location.sylhet.sunamganj.all") },
            {
              value: "sunamganj_sadar",
              label: t("location.sylhet.sunamganj.sunamganj_sadar"),
            },
            {
              value: "bishwamvarpur",
              label: t("location.sylhet.sunamganj.bishwamvarpur"),
            },
            { value: "chhatak", label: t("location.sylhet.sunamganj.chhatak") },
            { value: "derai", label: t("location.sylhet.sunamganj.derai") },
            {
              value: "dharampasha",
              label: t("location.sylhet.sunamganj.dharampasha"),
            },
            {
              value: "dowarabazar",
              label: t("location.sylhet.sunamganj.dowarabazar"),
            },
            {
              value: "jagannathpur",
              label: t("location.sylhet.sunamganj.jagannathpur"),
            },
            {
              value: "jamalganj",
              label: t("location.sylhet.sunamganj.jamalganj"),
            },
            { value: "sulla", label: t("location.sylhet.sunamganj.sulla") },
            {
              value: "tahirpur",
              label: t("location.sylhet.sunamganj.tahirpur"),
            },
            {
              value: "south_sunamganj",
              label: t("location.sylhet.sunamganj.south_sunamganj"),
            },
            {
              value: "madhyanagar",
              label: t("location.sylhet.sunamganj.madhyanagar"),
            },
          ],
        },
        {
          value: "habiganj",
          label: t("location.sylhet.habiganj.label"),
          children: [
            { value: "all", label: t("location.sylhet.habiganj.all") },
            {
              value: "habiganj_sadar",
              label: t("location.sylhet.habiganj.habiganj_sadar"),
            },
            {
              value: "ajmiriganj",
              label: t("location.sylhet.habiganj.ajmiriganj"),
            },
            { value: "bahubal", label: t("location.sylhet.habiganj.bahubal") },
            {
              value: "baniyachong",
              label: t("location.sylhet.habiganj.baniyachong"),
            },
            {
              value: "chunarughat",
              label: t("location.sylhet.habiganj.chunarughat"),
            },
            { value: "lakhai", label: t("location.sylhet.habiganj.lakhai") },
            {
              value: "madhabpur",
              label: t("location.sylhet.habiganj.madhabpur"),
            },
            {
              value: "nabiganj",
              label: t("location.sylhet.habiganj.nabiganj"),
            },
            {
              value: "shaistaganj",
              label: t("location.sylhet.habiganj.shaistaganj"),
            },
          ],
        },
        {
          value: "sylhet",
          label: t("location.sylhet.sylhet.label"),
          children: [
            { value: "all", label: t("location.sylhet.sylhet.all") },
            {
              value: "sylhet_sadar",
              label: t("location.sylhet.sylhet.sylhet_sadar"),
            },
            { value: "balaganj", label: t("location.sylhet.sylhet.balaganj") },
            {
              value: "beanibazar",
              label: t("location.sylhet.sylhet.beanibazar"),
            },
            {
              value: "bishwanath",
              label: t("location.sylhet.sylhet.bishwanath"),
            },
            {
              value: "companiganj",
              label: t("location.sylhet.sylhet.companiganj"),
            },
            {
              value: "dakshin_surma",
              label: t("location.sylhet.sylhet.dakshin_surma"),
            },
            {
              value: "fenchuganj",
              label: t("location.sylhet.sylhet.fenchuganj"),
            },
            {
              value: "golapganj",
              label: t("location.sylhet.sylhet.golapganj"),
            },
            {
              value: "gowainghat",
              label: t("location.sylhet.sylhet.gowainghat"),
            },
            {
              value: "jaintiapur",
              label: t("location.sylhet.sylhet.jaintiapur"),
            },
            {
              value: "kanaighat",
              label: t("location.sylhet.sylhet.kanaighat"),
            },
            {
              value: "osmani_nagar",
              label: t("location.sylhet.sylhet.osmani_nagar"),
            },
            { value: "zakiganj", label: t("location.sylhet.sylhet.zakiganj") },
          ],
        },
        {
          value: "moulvibazar",
          label: t("location.sylhet.moulvibazar.label"),
          children: [
            { value: "all", label: t("location.sylhet.moulvibazar.all") },
            {
              value: "moulvibazar_sadar",
              label: t("location.sylhet.moulvibazar.moulvibazar_sadar"),
            },
            {
              value: "barlekha",
              label: t("location.sylhet.moulvibazar.barlekha"),
            },
            { value: "juri", label: t("location.sylhet.moulvibazar.juri") },
            {
              value: "kamalganj",
              label: t("location.sylhet.moulvibazar.kamalganj"),
            },
            {
              value: "kulaura",
              label: t("location.sylhet.moulvibazar.kulaura"),
            },
            {
              value: "rajnagar",
              label: t("location.sylhet.moulvibazar.rajnagar"),
            },
            {
              value: "sreemangal",
              label: t("location.sylhet.moulvibazar.sreemangal"),
            },
          ],
        },
      ],
    },

    // Barishal
    {
      value: "barishal",
      label: t("location.barishal.label"),
      children: [
        {
          value: "all",
          label: t("location.barishal.all"),
        },
        {
          value: "barguna",
          label: t("location.barishal.barguna.label"),
          children: [
            { value: "all", label: t("location.barishal.barguna.all") },
            {
              value: "barguna_sadar",
              label: t("location.barishal.barguna.barguna_sadar"),
            },
            { value: "amtali", label: t("location.barishal.barguna.amtali") },
            { value: "betagi", label: t("location.barishal.barguna.betagi") },
            { value: "bamna", label: t("location.barishal.barguna.bamna") },
            {
              value: "pathorghata",
              label: t("location.barishal.barguna.pathorghata"),
            },
            { value: "taltoli", label: t("location.barishal.barguna.taltoli") },
          ],
        },
        {
          value: "bhola",
          label: t("location.barishal.bhola.label"),
          children: [
            { value: "all", label: t("location.barishal.bhola.all") },
            {
              value: "bhola_sadar",
              label: t("location.barishal.bhola.bhola_sadar"),
            },
            {
              value: "borhanuddin",
              label: t("location.barishal.bhola.borhanuddin"),
            },
            {
              value: "charfasson",
              label: t("location.barishal.bhola.charfasson"),
            },
            {
              value: "daulatkhan",
              label: t("location.barishal.bhola.daulatkhan"),
            },
            { value: "lalmohan", label: t("location.barishal.bhola.lalmohan") },
            { value: "manpura", label: t("location.barishal.bhola.manpura") },
            {
              value: "tazumuddin",
              label: t("location.barishal.bhola.tazumuddin"),
            },
          ],
        },
        {
          value: "jhalokati",
          label: t("location.barishal.jhalokati.label"),
          children: [
            { value: "all", label: t("location.barishal.jhalokati.all") },
            {
              value: "jhalokati_sadar",
              label: t("location.barishal.jhalokati.jhalokati_sadar"),
            },
            {
              value: "kathalia",
              label: t("location.barishal.jhalokati.kathalia"),
            },
            {
              value: "nalchity",
              label: t("location.barishal.jhalokati.nalchity"),
            },
            {
              value: "rajapur",
              label: t("location.barishal.jhalokati.rajapur"),
            },
          ],
        },
        {
          value: "barishal",
          label: t("location.barishal.barishal.label"),
          children: [
            { value: "all", label: t("location.barishal.barishal.all") },
            {
              value: "agailjhara",
              label: t("location.barishal.barishal.agailjhara"),
            },
            {
              value: "babuganj",
              label: t("location.barishal.barishal.babuganj"),
            },
            {
              value: "bakerganj",
              label: t("location.barishal.barishal.bakerganj"),
            },
            {
              value: "banaripara",
              label: t("location.barishal.barishal.banaripara"),
            },
            {
              value: "barishal_sadar",
              label: t("location.barishal.barishal.barishal_sadar"),
            },
            {
              value: "gournadi",
              label: t("location.barishal.barishal.gournadi"),
            },
            { value: "hizla", label: t("location.barishal.barishal.hizla") },
            {
              value: "mehendiganj",
              label: t("location.barishal.barishal.mehendiganj"),
            },
            { value: "muladi", label: t("location.barishal.barishal.muladi") },
            {
              value: "wazirpur",
              label: t("location.barishal.barishal.wazirpur"),
            },
          ],
        },
        {
          value: "patuakhali",
          label: t("location.barishal.patuakhali.label"),
          children: [
            { value: "all", label: t("location.barishal.patuakhali.all") },
            {
              value: "patuakhali_sadar",
              label: t("location.barishal.patuakhali.patuakhali_sadar"),
            },
            {
              value: "bauphal",
              label: t("location.barishal.patuakhali.bauphal"),
            },
            {
              value: "dashmina",
              label: t("location.barishal.patuakhali.dashmina"),
            },
            { value: "dumki", label: t("location.barishal.patuakhali.dumki") },
            {
              value: "galachipa",
              label: t("location.barishal.patuakhali.galachipa"),
            },
            {
              value: "kalapara",
              label: t("location.barishal.patuakhali.kalapara"),
            },
            {
              value: "mirzaganj",
              label: t("location.barishal.patuakhali.mirzaganj"),
            },
            {
              value: "rangabali",
              label: t("location.barishal.patuakhali.rangabali"),
            },
          ],
        },
        {
          value: "pirojpur",
          label: t("location.barishal.pirojpur.label"),
          children: [
            { value: "all", label: t("location.barishal.pirojpur.all") },
            {
              value: "pirojpur_sadar",
              label: t("location.barishal.pirojpur.pirojpur_sadar"),
            },
            {
              value: "bhandaria",
              label: t("location.barishal.pirojpur.bhandaria"),
            },
            {
              value: "kawkhali",
              label: t("location.barishal.pirojpur.kawkhali"),
            },
            {
              value: "mathbaria",
              label: t("location.barishal.pirojpur.mathbaria"),
            },
            {
              value: "nazirpur",
              label: t("location.barishal.pirojpur.nazirpur"),
            },
            {
              value: "nesarabad",
              label: t("location.barishal.pirojpur.nesarabad"),
            },
            {
              value: "zianagar",
              label: t("location.barishal.pirojpur.zianagar"),
            },
          ],
        },
      ],
    },
  ];
  return searchLocation;
};
// export const locationData = {
//   searchLocationData: searchLocation,
//   filteredLocationData: searchLocation
//     .filter((item) => item.value !== "all")
//     .map((item) => ({
//       ...item,
//       children: item.children
//         ?.filter(
//           (child) => child.value !== "all" && !child.label.includes("Entire")
//         )
//         ?.map((child) => ({
//           ...child,
//           children: child.children?.filter(
//             (subChild) =>
//               subChild.value !== "all" && !subChild.label.includes("Entire")
//           ),
//         })),
//     })),
// };

export const getLocationData = (t) => {
  const filteredLocationData = getLocationDataInfo(t)
    .filter((item) => item.value !== "all")
    .map((item) => ({
      ...item,
      children: item.children
        ?.filter(
          (child) => child.value !== "all" && !child.label.includes("Entire")
        )
        ?.map((child) => ({
          ...child,
          children: child.children?.filter(
            (subChild) =>
              subChild.value !== "all" && !subChild.label.includes("Entire")
          ),
        })),
    }));

  return {
    searchLocationData: getLocationDataInfo(t),
    filteredLocationData,
  };
};
