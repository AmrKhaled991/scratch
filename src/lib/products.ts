export type Category =
  | "skincare"
  | "haircare"
  | "vitamins"
  | "oral-care"
  | "personal-care"
  | "pain-relief"
  | "antibiotics"
  | "stomach";

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionAr: string;
  image: string;
  badge?: string;
  badgeAr?: string;
  inStock: boolean;
  unit: string;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "كل المنتجات" },
  { value: "pain-relief", label: "مسكنات الألم" },
  { value: "antibiotics", label: "مضادات حيوية" },
  { value: "vitamins", label: "فيتامينات ومكملات" },
  { value: "stomach", label: "الجهاز الهضمي" },
  { value: "skincare", label: "العناية بالبشرة" },
  { value: "haircare", label: "العناية بالشعر" },
  { value: "oral-care", label: "العناية بالفم" },
  { value: "personal-care", label: "العناية الشخصية" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Panadol Extra 500mg",
    nameAr: "بنادول إكسترا 500 مجم",
    brand: "GSK",
    category: "pain-relief",
    price: 45,
    description:
      "Panadol Extra with Optizorb for fast and effective pain relief.",
    descriptionAr:
      "بنادول إكسترا لتسكين الألم السريع والفعّال. مناسب للصداع وآلام الأسنان والحمى.",
    image: "/products/1.jpg",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    inStock: true,
    unit: "24 قرص",
  },
  {
    id: "2",
    name: "Brufen 400mg Tablets",
    nameAr: "بروفين 400 مجم أقراص",
    brand: "Abbott",
    category: "pain-relief",
    price: 38,
    description: "Ibuprofen 400mg for pain, fever and inflammation relief.",
    descriptionAr:
      "إيبوبروفين 400 مجم لتخفيف الألم والحمى والالتهابات. مسكن قوي وفعّال.",
    image: "/products/2.jpg",
    inStock: true,
    unit: "20 قرص",
  },
  {
    id: "3",
    name: "Voltaren Emulgel 1%",
    nameAr: "فولتارين جيل 1%",
    brand: "Novartis",
    category: "pain-relief",
    price: 135,
    originalPrice: 175,
    description: "Voltaren Emulgel with diclofenac for muscle and joint pain.",
    descriptionAr:
      "فولتارين جيل بالديكلوفيناك لآلام العضلات والمفاصل. يُمتص مباشرة في موضع الألم.",
    image: "/products/3.jpg",
    badge: "Sale",
    badgeAr: "تخفيض",
    inStock: true,
    unit: "100 جم",
  },
  {
    id: "4",
    name: "Augmentin 625mg Duo",
    nameAr: "أوجمنتين 625 مجم",
    brand: "GSK",
    category: "antibiotics",
    price: 95,
    description: "Amoxicillin + Clavulanate broad-spectrum antibiotic.",
    descriptionAr:
      "أموكسيسيللين + كلافولانات - مضاد حيوي واسع النطاق لعلاج الالتهابات البكتيرية.",
    image: "/products/4.jpg",
    badge: "Pharmacy Choice",
    badgeAr: "اختيار الصيدلي",
    inStock: true,
    unit: "14 قرص",
  },
  {
    id: "5",
    name: "Amoxil 500mg Capsules",
    nameAr: "أموكسيل 500 مجم كبسولات",
    brand: "GSK",
    category: "antibiotics",
    price: 55,
    description: "Amoxicillin 500mg antibiotic for bacterial infections.",
    descriptionAr:
      "أموكسيسيللين 500 مجم مضاد حيوي لعلاج التهابات الجهاز التنفسي والأذن والحلق.",
    image: "/products/5.jpg",
    inStock: true,
    unit: "21 كبسولة",
  },
  {
    id: "6",
    name: "Centrum Adults Multivitamin",
    nameAr: "سنتروم للبالغين متعدد الفيتامينات",
    brand: "Centrum",
    category: "vitamins",
    price: 320,
    originalPrice: 420,
    description: "Complete multivitamin & mineral supplement for adults.",
    descriptionAr:
      "فيتامينات ومعادن متكاملة للبالغين. يحتوي على 30 مغذياً لدعم الطاقة والمناعة.",
    image: "/products/6.jpg",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    inStock: true,
    unit: "60 قرص",
  },
  {
    id: "7",
    name: "Vitamin D3 1000 IU",
    nameAr: "فيتامين د3 1000 وحدة",
    brand: "Pharma-D",
    category: "vitamins",
    price: 145,
    description: "Vitamin D3 supplement for bone health and immune support.",
    descriptionAr:
      "فيتامين د3 لصحة العظام ودعم المناعة. يعوض نقص فيتامين د الشائع.",
    image: "/products/7.jpg",
    inStock: true,
    unit: "60 كبسولة",
  },
  {
    id: "8",
    name: "Omega-3 Fish Oil 1000mg",
    nameAr: "أوميجا-3 زيت السمك 1000 مجم",
    brand: "Mega We Care",
    category: "vitamins",
    price: 285,
    description: "High-potency Omega-3 fish oil with EPA and DHA.",
    descriptionAr:
      "زيت سمك أوميجا-3 عالي الفاعلية بـ EPA وDHA لصحة القلب والدماغ والمفاصل.",
    image: "/products/8.jpg",
    badge: "New",
    badgeAr: "جديد",
    inStock: true,
    unit: "60 كبسولة",
  },
  {
    id: "9",
    name: "Nexium 20mg",
    nameAr: "نيكسيوم 20 مجم",
    brand: "AstraZeneca",
    category: "stomach",
    price: 110,
    description: "Esomeprazole for acid reflux and stomach ulcers treatment.",
    descriptionAr:
      "إيزوميبرازول لعلاج حموضة المعدة والقرحة وارتجاع الحمض. يحمي بطانة المعدة.",
    image: "/products/9.jpg",
    badge: "Pharmacy Choice",
    badgeAr: "اختيار الصيدلي",
    inStock: true,
    unit: "14 قرص",
  },
  {
    id: "10",
    name: "Gaviscon Liquid",
    nameAr: "جافيسكون سائل",
    brand: "Reckitt",
    category: "stomach",
    price: 85,
    originalPrice: 105,
    description:
      "Gaviscon liquid for fast relief of heartburn and indigestion.",
    descriptionAr:
      "جافيسكون سائل لتسكين الحموضة وعسر الهضم بسرعة. يكوّن طبقة واقية فوق المعدة.",
    image: "/products/10.jpg",
    badge: "Sale",
    badgeAr: "تخفيض",
    inStock: true,
    unit: "300 مل",
  },
  {
    id: "11",
    name: "Betadine Antiseptic Solution",
    nameAr: "بيتادين محلول مطهر",
    brand: "Mundipharma",
    category: "personal-care",
    price: 65,
    description: "Povidone-iodine antiseptic solution for wound care.",
    descriptionAr:
      "محلول بيتادين المطهر بالبوفيدون يودين لتطهير الجروح والحروق ومنع العدوى.",
    image: "/products/11.jpg",
    inStock: true,
    unit: "100 مل",
  },
  {
    id: "12",
    name: "Sensodyne Toothpaste",
    nameAr: "سنسوداين معجون أسنان",
    brand: "GSK",
    category: "oral-care",
    price: 75,
    originalPrice: 95,
    description: "Sensodyne toothpaste for sensitive teeth daily protection.",
    descriptionAr:
      "سنسوداين لحماية الأسنان الحساسة يومياً. يخفف الألم الناتج عن الحساسية.",
    image: "/products/12.jpg",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    inStock: true,
    unit: "100 مل",
  },
  {
    id: "13",
    name: "Listerine Cool Mint",
    nameAr: "ليسترين كول مينت",
    brand: "Johnson & Johnson",
    category: "oral-care",
    price: 95,
    description: "Listerine antiseptic mouthwash kills 99.9% of germs.",
    descriptionAr:
      "غسول فم ليسترين يقضي على 99.9% من الجراثيم. يمنح نفساً منعشاً لـ 12 ساعة.",
    image: "/products/13.jpg",
    inStock: true,
    unit: "500 مل",
  },
  {
    id: "14",
    name: "Nizoral Shampoo 2%",
    nameAr: "نيزورال شامبو 2%",
    brand: "Janssen",
    category: "haircare",
    price: 185,
    description: "Ketoconazole 2% medicated shampoo for dandruff treatment.",
    descriptionAr:
      "شامبو طبي بالكيتوكونازول 2% لعلاج القشرة والفطريات. مرخص صيدلياً.",
    image: "/products/14.jpg",
    badge: "Pharmacy Choice",
    badgeAr: "اختيار الصيدلي",
    inStock: true,
    unit: "60 مل",
  },
  {
    id: "15",
    name: "Minoxidil 5% Solution",
    nameAr: "مينوكسيديل 5% محلول",
    brand: "Kirkland",
    category: "haircare",
    price: 320,
    originalPrice: 420,
    description:
      "Minoxidil 5% topical solution to regrow hair and stop hair loss.",
    descriptionAr:
      "مينوكسيديل 5% موضعي لإعادة نمو الشعر وإيقاف التساقط. نتائج في 3 أشهر.",
    image: "/products/15.jpg",
    badge: "Sale",
    badgeAr: "تخفيض",
    inStock: true,
    unit: "60 مل",
  },
  {
    id: "16",
    name: "Bepanthen Cream",
    nameAr: "بيبانثين كريم",
    brand: "Bayer",
    category: "skincare",
    price: 120,
    description: "Dexpanthenol cream for wound healing and skin regeneration.",
    descriptionAr:
      "كريم ديكسبانثينول لعلاج الجروح والحروق والطفح الجلدي. يساعد في تجديد الخلايا.",
    image: "/products/16.jpg",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    inStock: true,
    unit: "30 جم",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category | "all"): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
