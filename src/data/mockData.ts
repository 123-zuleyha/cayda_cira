export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  images: string[];
  inStock: boolean;
  origin: string;
  producer: string;
  certifications: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "sebze",
    name: "Organik Sebzeler",
    description: "Taze ve doğal organik sebzeler",
    image: "/images/organik_sebze_meyve_2.jpeg"
  },
  {
    id: "meyve",
    name: "Organik Meyveler", 
    description: "Vitamin dolu organik meyveler",
    image: "/images/organik_sebze_meyve_4.jpeg"
  },
  {
    id: "tahil",
    name: "Tahıllar",
    description: "Doğal tahıl çeşitleri",
    image: "/images/organik_sebze_meyve_1.jpeg"
  },
  {
    id: "bakliyat",
    name: "Bakliyatlar",
    description: "Protein kaynağı bakliyatlar",
    image: "/images/organik_sebze_meyve_3.png"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organik Domates",
    description: "Güneşin bol olduğu Akdeniz bölgesinde, tamamen doğal yöntemlerle yetiştirilmiş organik domatesler. Kimyasal gübre ve pestisit kullanılmadan üretilen bu domatesler, yoğun aroması ve doğal tadıyla sofranızın vazgeçilmezi olacak.",
    shortDescription: "Doğal yöntemlerle yetiştirilen taze organik domates",
    price: 25,
    category: "sebze",
    images: ["/images/organik_sebze_meyve_2.jpeg", "/images/organik_sebze_meyve_1.jpeg"],
    inStock: true,
    origin: "Antalya",
    producer: "Akdeniz Organik Çiftliği",
    certifications: ["Organik Tarım Sertifikası", "ECOCERT"],
    nutritionalInfo: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2
    }
  },
  {
    id: "2", 
    name: "Organik Salatalık",
    description: "Serinletici ve ferahlatıcı organik salatalıklar. Yüksek su içeriği ile vücudunuzu nemlendirir, düşük kalori değeri ile diyet yapanların tercihi. Tamamen doğal koşullarda, toprak analizi yapılmış arazilerde yetiştirilmiştir.",
    shortDescription: "Serinletici ve sağlıklı organik salatalık",
    price: 18,
    category: "sebze",
    images: ["/images/organik_sebze_meyve_1.jpeg"],
    inStock: true,
    origin: "Bursa",
    producer: "Yeşil Vadi Çiftliği",
    certifications: ["Organik Tarım Sertifikası"],
    nutritionalInfo: {
      calories: 16,
      protein: 0.7,
      carbs: 4.0,
      fat: 0.1,
      fiber: 0.5
    }
  },
  {
    id: "3",
    name: "Organik Elma",
    description: "Anadolu'nun bereketli topraklarında yetişen organik elmalar. Yüksek C vitamini içeriği ile bağışıklık sisteminizi güçlendirir. Geleneksel yöntemlerle budanmış ağaçlardan toplanan bu elmalar, doğal şekeri ve lif içeriği ile sağlıklı atıştırmalık seçeneğiniz.",
    shortDescription: "Vitamin C açısından zengin organik elma",
    price: 22,
    category: "meyve",
    images: ["/images/organik_sebze_meyve_4.jpeg", "/images/organik_sebze_meyve_1.jpeg"],
    inStock: true,
    origin: "Isparta",
    producer: "Anadolu Meyve Bahçeleri",
    certifications: ["Organik Tarım Sertifikası", "GlobalGAP"],
    nutritionalInfo: {
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fat: 0.2,
      fiber: 2.4
    }
  },
  {
    id: "4",
    name: "Organik Portakal",
    description: "Akdeniz ikliminin eşsiz koşullarında yetişen organik portakallar. Doğal C vitamini deposu olan bu portakallar, soğuk sıkım yöntemiyle meyve suyu yapımına da uygundur. Kabuk kısmı da organik olduğu için reçel ve marmelat yapımında güvenle kullanabilirsiniz.",
    shortDescription: "C vitamini deposu taze organik portakal",
    price: 28,
    category: "meyve", 
    images: ["/images/organik_sebze_meyve_1.jpeg"],
    inStock: true,
    origin: "Mersin",
    producer: "Akdeniz Narenciye Kooperatifi",
    certifications: ["Organik Tarım Sertifikası", "ECOCERT", "BRC"],
    nutritionalInfo: {
      calories: 47,
      protein: 0.9,
      carbs: 12,
      fat: 0.1,
      fiber: 2.4
    }
  },
  {
    id: "5",
    name: "Organik Buğday",
    description: "Anadolu'nun kadim buğday çeşitlerinden olan organik buğday. Gluten oranı doğal seviyede olan bu buğdaydan elde edilen un, ekmek ve makarna yapımında mükemmel sonuçlar verir. Toprak rotasyonu ile üretilen bu buğday, toprağın verimliliğini koruyarak sürdürülebilir tarımın örneğidir.",
    shortDescription: "Geleneksel yöntemlerle üretilen organik buğday",
    price: 15,
    category: "tahil",
    images: ["/images/organik_sebze_meyve_3.png"],
    inStock: true,
    origin: "Konya",
    producer: "Anadolu Tahıl Üreticileri Birliği",
    certifications: ["Organik Tarım Sertifikası"],
    nutritionalInfo: {
      calories: 340,
      protein: 13,
      carbs: 72,
      fat: 2.5,
      fiber: 12
    }
  },
  {
    id: "6",
    name: "Organik Nohut",
    description: "Protein açısından zengin organik nohut. Vejetaryen ve vegan beslenmenin vazgeçilmez protein kaynağı. Geleneksel yöntemlerle kurutulmuş bu nohutlar, uzun süre saklanabilir ve çeşitli yemeklerde kullanılabilir. Hummus, çorba ve pilav yapımında mükemmel lezzet verir.",
    shortDescription: "Protein kaynağı organik nohut",
    price: 35,
    category: "bakliyat",
    images: ["/images/organik_sebze_meyve_1.jpeg"],
    inStock: true,
    origin: "Şanlıurfa",
    producer: "Güneydoğu Bakliyat Kooperatifi",
    certifications: ["Organik Tarım Sertifikası"],
    nutritionalInfo: {
      calories: 364,
      protein: 19,
      carbs: 61,
      fat: 6,
      fiber: 17
    }
  }
];