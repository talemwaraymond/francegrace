import elderberry from "@/assets/product-elderberry.jpg";
import omega3 from "@/assets/product-omega3.jpg";
import skinWhitening from "@/assets/product-skin-whitening.jpg";
import magnesiumTriple from "@/assets/product-magnesium-triple.jpg";
import magnesiumGlycinate from "@/assets/product-magnesium-glycinate.jpg";
import ashwagandha from "@/assets/product-ashwagandha.jpg";
import burn from "@/assets/product-burn.jpg";
import maca from "@/assets/product-maca.jpg";
import uricAcid from "@/assets/product-uric-acid.jpg";

export type Category =
  | "Immune Support"
  | "Heart & Brain"
  | "Beauty & Skin"
  | "Stress & Sleep"
  | "Fitness & Performance"
  | "Joint & Mobility";

export interface Product {
  slug: string;
  name: string;
  short: string;
  category: Category;
  benefits: string[];
  image: string;
  tagline: string;
  description: string[];
  facts: { label: string; value: string }[];
  ingredients: { name: string; description: string }[];
  support?: { ingredient: string; detail: string; bullets?: string[] }[];
  use: string;
  size: string;
}

export const categories: Category[] = [
  "Immune Support",
  "Heart & Brain",
  "Beauty & Skin",
  "Stress & Sleep",
  "Fitness & Performance",
  "Joint & Mobility",
];

export const products: Product[] = [
  {
    slug: "elderberry-vitc-zinc",
    name: "FSG Elderberry + Vitamin C + Zinc",
    short: "Daily immune system support with antioxidant power.",
    category: "Immune Support",
    benefits: ["Immune Boost", "Antioxidant", "Vitamin C"],
    image: elderberry,
    tagline: "Premium Daily Immune Support",
    size: "60 Capsules",
    description: [
      "Franceshgrace Elderberry + Vitamin C + Zinc combines time-honored elderberry extract with two cornerstone immune nutrients to support your body's natural defenses.",
      "Each capsule delivers a balanced dose of antioxidants designed for everyday wellness, seasonal resilience, and daily vitality."
    ],
    facts: [
      { label: "Elderberry Extract", value: "300mg" },
      { label: "Vitamin C", value: "250mg" },
      { label: "Zinc", value: "15mg" },
    ],
    ingredients: [
      { name: "Elderberry", description: "Rich in flavonoid antioxidants traditionally used for immune support." },
      { name: "Vitamin C", description: "Essential nutrient for immune defense and collagen formation." },
      { name: "Zinc", description: "Trace mineral that supports immune cell function and wellness." },
    ],
    use: "Take 1 capsule daily with food, or as directed by your healthcare professional.",
  },
  {
    slug: "triple-strength-omega-3",
    name: "FSG Triple Strength Omega-3",
    short: "Advanced high-potency fish oil for heart, brain & joint wellness.",
    category: "Heart & Brain",
    benefits: ["Heart Health", "Brain Function", "Joint Mobility"],
    image: omega3,
    tagline: "Advanced High-Potency Omega-3 Formula",
    size: "180 Softgels",
    description: [
      "Franceshgrace Triple Strength Omega-3 is a premium fish oil supplement formulated to provide concentrated Omega-3 fatty acids for daily cardiovascular, brain, and joint wellness support.",
      "Each serving delivers 2200mg of fish oil with an impressive 2000mg total Omega-3 fatty acids, including 1400mg EPA and 480mg DHA.",
      "EPA and DHA are essential fatty acids known for supporting heart health, cognitive function, eye health, and overall body performance."
    ],
    facts: [
      { label: "Fish Oil", value: "2200mg" },
      { label: "Total Omega-3 Fatty Acids", value: "2000mg" },
      { label: "EPA (Eicosapentaenoic Acid)", value: "1400mg" },
      { label: "DHA (Docosahexaenoic Acid)", value: "480mg" },
      { label: "Total Fat", value: "2.5g" },
      { label: "Cholesterol", value: "0mg" },
      { label: "Sodium", value: "10mg" },
      { label: "Calories", value: "25" },
    ],
    ingredients: [
      { name: "EPA", description: "Supports cardiovascular wellness and a healthy inflammatory response." },
      { name: "DHA", description: "Essential for brain, eye, and nervous system function." },
      { name: "Wild Fish Oil", description: "Sustainably sourced for purity and potency." },
    ],
    use: "Take 2 softgels daily with food.",
  },
  {
    slug: "skin-whitening",
    name: "FSG Skin Whitening Capsules",
    short: "Radiance and skin wellness support from within.",
    category: "Beauty & Skin",
    benefits: ["Skin Radiance", "Brightening", "Anti-Aging"],
    image: skinWhitening,
    tagline: "Radiance & Skin Wellness Support",
    size: "60 Capsules · 36,600mg Glutathione Blend per Bottle",
    description: [
      "Franceshgrace Skin Whitening Capsules are specially formulated to support brighter, healthier-looking skin using a combination of antioxidants, botanical extracts, and skin wellness nutrients.",
      "This advanced beauty formula contains L-Glutathione, Vitamin C, Licorice, Amla, Lemon Juice Powder, and Mulberry to help support skin radiance, antioxidant protection, and overall complexion wellness."
    ],
    facts: [
      { label: "L-Glutathione", value: "50mg" },
      { label: "Vitamin C", value: "25mg" },
      { label: "Proprietary Blend", value: "1145mg" },
      { label: "  • Licorice", value: "—" },
      { label: "  • Amla", value: "—" },
      { label: "  • Lemon Juice Powder", value: "—" },
      { label: "  • Mulberry", value: "—" },
    ],
    ingredients: [
      { name: "L-Glutathione", description: "Master antioxidant supporting skin radiance and cellular protection." },
      { name: "Vitamin C", description: "Brightens complexion and supports collagen formation." },
      { name: "Botanical Blend", description: "Licorice, amla, and mulberry traditionally used for skin tone wellness." },
    ],
    use: "Take 1 capsule daily, preferably on an empty stomach with water.",
  },
  {
    slug: "triple-magnesium-complex",
    name: "FSG Triple Magnesium Complex 300mg",
    short: "Multi-source magnesium for relaxation, sleep & recovery.",
    category: "Stress & Sleep",
    benefits: ["Deep Sleep", "Relaxation", "Muscle Recovery"],
    image: magnesiumTriple,
    tagline: "Multi-Source Magnesium for Total Body Wellness",
    size: "90 Veggie Caps",
    description: [
      "Franceshgrace Triple Magnesium Complex combines three highly effective forms of magnesium — Malate, Glycinate, and Citrate — providing 300mg per serving to support muscle function, relaxation, energy production, and nervous system health.",
      "This advanced formula is designed for individuals experiencing stress, fatigue, muscle tension, or poor sleep quality."
    ],
    facts: [
      { label: "Total Magnesium Complex", value: "300mg" },
      { label: "Magnesium Malate", value: "Included" },
      { label: "Magnesium Glycinate", value: "Included" },
      { label: "Magnesium Citrate", value: "Included" },
    ],
    ingredients: [
      { name: "Magnesium Malate", description: "Supports energy production and muscle wellness." },
      { name: "Magnesium Glycinate", description: "Supports relaxation and restful sleep." },
      { name: "Magnesium Citrate", description: "Supports absorption and digestive balance." },
    ],
    use: "Take 1 capsule daily with a meal.",
  },
  {
    slug: "magnesium-glycinate-quercetin",
    name: "FSG Magnesium Glycinate + Quercetin 400mg",
    short: "Gentle magnesium with antioxidant quercetin support.",
    category: "Stress & Sleep",
    benefits: ["Sleep Quality", "Immunity", "Anti-Inflammatory"],
    image: magnesiumGlycinate,
    tagline: "Relaxation & Antioxidant Support Formula",
    size: "120 Capsules",
    description: [
      "Franceshgrace Magnesium Glycinate Quercetin combines gentle, highly absorbable magnesium with antioxidant-rich quercetin extract to support overall wellness, muscle relaxation, and immune health.",
      "Magnesium Glycinate is known for its calming properties and digestive friendliness, while quercetin provides plant-based antioxidant support for cellular wellness."
    ],
    facts: [
      { label: "Elemental Magnesium", value: "72mg" },
      { label: "Quercetin Extract", value: "50mg" },
    ],
    ingredients: [
      { name: "Magnesium Glycinate", description: "Highly absorbable, gentle on the stomach, supports calm and sleep." },
      { name: "Quercetin", description: "Plant flavonoid offering antioxidant and immune support." },
    ],
    use: "Take 1 capsule twice daily with food.",
  },
  {
    slug: "ashwagandha-1300mg",
    name: "FSG Ashwagandha 1300mg",
    short: "Organic adaptogen with black pepper for absorption.",
    category: "Stress & Sleep",
    benefits: ["Stress Relief", "Energy", "Hormonal Balance"],
    image: ashwagandha,
    tagline: "Natural Adaptogen for Stress, Energy & Balance",
    size: "120 Vegetarian Capsules",
    description: [
      "Franceshgrace Ashwagandha 1300mg combines high-potency organic ashwagandha with organic black pepper for enhanced absorption and effectiveness.",
      "Ashwagandha is a traditional adaptogenic herb widely used to help support stress management, mood balance, stamina, focus, and overall vitality."
    ],
    facts: [
      { label: "Organic Ashwagandha", value: "1300mg" },
      { label: "Organic Black Pepper", value: "10mg" },
    ],
    ingredients: [
      { name: "Organic Ashwagandha", description: "Time-honored adaptogen for stress, mood, and stamina support." },
      { name: "Black Pepper Extract", description: "Enhances absorption of active botanicals." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "fat-burner",
    name: "FSG Burn — Thermogenic Fat Burner",
    short: "Metabolism and energy support for active goals.",
    category: "Fitness & Performance",
    benefits: ["Fat Metabolism", "Energy Boost", "Performance"],
    image: burn,
    tagline: "Metabolism & Energy Support for Active Goals",
    size: "60 Veggie Capsules",
    description: [
      "Franceshgrace Burn is formulated to support metabolism, energy production, and active lifestyle goals.",
      "Featuring Beta Hydroxybutyrate (BHB) mineral salts and a proprietary wellness blend, this formula is designed to complement healthy diet and exercise routines."
    ],
    facts: [
      { label: "Calcium (BHB)", value: "62mg" },
      { label: "Magnesium (BHB)", value: "32mg" },
      { label: "Sodium (BHB)", value: "10mg" },
      { label: "Proprietary Blend", value: "800mg" },
    ],
    ingredients: [
      { name: "BHB Mineral Salts", description: "Support metabolism and ketone-based energy production." },
      { name: "Performance Blend", description: "Botanical and amino blend for active lifestyles." },
    ],
    use: "Take 2 capsules daily, 30 minutes before exercise or as directed.",
  },
  {
    slug: "maca-1900mg",
    name: "FSG Maca 1900mg",
    short: "Organic maca root for stamina, vitality & balance.",
    category: "Fitness & Performance",
    benefits: ["Stamina", "Vitality", "Performance"],
    image: maca,
    tagline: "Natural Vitality, Energy & Endurance Support",
    size: "150 Veggie Capsules",
    description: [
      "Franceshgrace Maca 1900mg Capsules are made with premium Organic Maca Root (Lepidium meyenii), traditionally used to support stamina, vitality, endurance, and overall wellness.",
      "This high-strength herbal supplement is suitable for both men and women seeking natural support for energy, performance, and hormonal balance."
    ],
    facts: [
      { label: "Organic Maca Root (Lepidium meyenii)", value: "1900mg" },
    ],
    ingredients: [
      { name: "Organic Maca Root", description: "Andean superfood traditionally used for energy and vitality." },
    ],
    use: "Take 2 capsules daily with food.",
  },
  {
    slug: "uric-acid-cleanse",
    name: "FSG Uric Acid Cleanse",
    short: "Joint comfort, mobility & natural cleansing support.",
    category: "Joint & Mobility",
    benefits: ["Joint Health", "Kidney Support", "Mobility"],
    image: uricAcid,
    tagline: "Joint, Mobility & Wellness Support Formula",
    size: "100 Veg Capsules",
    description: [
      "Franceshgrace Uric Acid Cleanse is a comprehensive wellness formula designed to support healthy uric acid balance, joint comfort, mobility, and the body's natural cleansing process.",
      "This advanced blend combines botanical extracts and wellness-support nutrients traditionally used for joint and mobility support."
    ],
    facts: [
      { label: "Boswellia Extract", value: "300mg" },
      { label: "Turmeric Extract", value: "300mg" },
      { label: "Tart Cherry Extract", value: "300mg" },
      { label: "TMG (Trimethylglycine)", value: "40mg" },
      { label: "Hyaluronic Acid", value: "40mg" },
      { label: "Garlic Extract", value: "10mg" },
      { label: "Ginger Extract", value: "10mg" },
    ],
    ingredients: [
      { name: "Boswellia & Turmeric", description: "Botanical extracts traditionally used for joint comfort." },
      { name: "Tart Cherry", description: "Antioxidant-rich fruit supporting healthy uric acid balance." },
      { name: "Hyaluronic Acid", description: "Supports flexibility and joint cushioning." },
    ],
    use: "Take 2 capsules daily with water.",
  },
];

const productSupport: Record<string, Product["support"]> = {
  "triple-strength-omega-3": [
    { ingredient: "Fish Oil (2200mg)", detail: "A rich source of Omega-3 fatty acids that helps support cardiovascular wellness, brain performance, eye health, and overall body function." },
    { ingredient: "EPA — Eicosapentaenoic Acid (1400mg)", detail: "Known for supporting heart health, healthy circulation, and joint comfort. Also helps support the body's natural inflammatory balance and overall wellness." },
    { ingredient: "DHA — Docosahexaenoic Acid (480mg)", detail: "An essential fatty acid highly concentrated in the brain and eyes. Helps support cognitive function, memory, focus, and visual wellness." },
    { ingredient: "Omega-3 Fatty Acids (2000mg)", detail: "Omega-3 fatty acids help support:", bullets: ["Heart wellness", "Brain performance", "Joint mobility", "Healthy aging", "Overall body balance"] },
  ],
  "triple-magnesium-complex": [
    { ingredient: "Magnesium Malate", detail: "Commonly associated with energy production and muscle support. May help support physical energy and reduce feelings of fatigue." },
    { ingredient: "Magnesium Glycinate", detail: "Known for its calming and relaxing properties. Gentle on digestion and highly absorbable. Helps support:", bullets: ["Relaxation", "Restful sleep", "Nervous system balance", "Stress management"] },
    { ingredient: "Magnesium Citrate", detail: "Supports healthy magnesium absorption and contributes to muscle function, nerve support, and digestive balance." },
    { ingredient: "Total Magnesium Complex (300mg)", detail: "Magnesium plays an important role in:", bullets: ["Muscle relaxation", "Nerve function", "Energy production", "Sleep support", "Mood balance"] },
  ],
  "skin-whitening": [
    { ingredient: "L-Glutathione (50mg)", detail: "A powerful antioxidant naturally produced in the body. Helps support:", bullets: ["Skin radiance", "Antioxidant protection", "Cellular wellness", "Healthy-looking complexion"] },
    { ingredient: "Vitamin C (25mg)", detail: "Helps support collagen production and protects skin cells from oxidative stress while promoting skin vitality and brightness." },
    { ingredient: "Licorice Extract", detail: "Traditionally used in beauty formulations to support skin clarity and a more even-looking complexion." },
    { ingredient: "Amla", detail: "Rich in natural antioxidants and Vitamin C, helping support skin wellness and overall antioxidant protection." },
    { ingredient: "Lemon Juice Powder", detail: "Contains natural antioxidant compounds that help support fresh, healthy-looking skin." },
    { ingredient: "Mulberry", detail: "Commonly used in skincare support formulas to help promote brighter-looking skin and complexion balance." },
  ],
  "magnesium-glycinate-quercetin": [
    { ingredient: "Elemental Magnesium (72mg)", detail: "Magnesium supports:", bullets: ["Muscle relaxation", "Nervous system function", "Calmness and relaxation", "Sleep quality", "Muscle recovery"] },
    { ingredient: "Magnesium Glycinate", detail: "This highly absorbable form of magnesium is especially known for helping support relaxation and stress balance without causing digestive discomfort." },
    { ingredient: "Quercetin Extract (50mg)", detail: "A plant-based antioxidant that helps support:", bullets: ["Immune wellness", "Cellular protection", "Recovery support", "Overall antioxidant balance"] },
  ],
  "ashwagandha-1300mg": [
    { ingredient: "Organic Ashwagandha (1300mg)", detail: "A traditional adaptogenic herb known for helping the body manage stress naturally. Helps support:", bullets: ["Stress management", "Calmness", "Mental focus", "Mood balance", "Energy and stamina", "Overall vitality"] },
    { ingredient: "Organic Black Pepper (10mg)", detail: "Commonly included to help enhance nutrient absorption and improve the effectiveness of herbal ingredients." },
  ],
  "fat-burner": [
    { ingredient: "Calcium Beta Hydroxybutyrate (BHB)", detail: "A ketone-support ingredient commonly used in fitness and metabolism support formulas. Helps support:", bullets: ["Energy production", "Active lifestyle performance", "Metabolic support"] },
    { ingredient: "Magnesium Beta Hydroxybutyrate", detail: "Magnesium contributes to muscle function, energy metabolism, and physical performance support." },
    { ingredient: "Sodium Beta Hydroxybutyrate", detail: "Sodium helps support hydration and electrolyte balance during active lifestyles." },
    { ingredient: "Proprietary Blend (800mg)", detail: "Formulated to complement metabolism and energy support as part of a healthy diet and exercise routine." },
  ],
  "uric-acid-cleanse": [
    { ingredient: "Boswellia Extract (300mg)", detail: "Traditionally used to support joint comfort, mobility, and overall wellness." },
    { ingredient: "Turmeric Extract (300mg)", detail: "Contains natural antioxidant compounds that help support joint wellness and the body's natural inflammatory balance." },
    { ingredient: "Tart Cherry Extract (300mg)", detail: "Commonly used in wellness formulas to support recovery, joint comfort, and healthy uric acid balance." },
    { ingredient: "TMG — Trimethylglycine (40mg)", detail: "Helps support cellular wellness and healthy metabolic processes." },
    { ingredient: "Hyaluronic Acid (40mg)", detail: "Helps support joint lubrication, flexibility, and connective tissue wellness." },
    { ingredient: "Garlic Extract (10mg)", detail: "Provides antioxidant support and contributes to overall wellness and circulation support." },
    { ingredient: "Ginger Extract (10mg)", detail: "Traditionally used to support digestion, joint comfort, and overall body wellness." },
  ],
  "maca-1900mg": [
    { ingredient: "Organic Maca Root (Lepidium meyenii) — 1900mg", detail: "Maca root is traditionally used to support:", bullets: ["Natural energy", "Physical stamina", "Endurance", "Vitality", "Reproductive wellness", "Hormonal balance support"] },
    { ingredient: "For men and women", detail: "Maca is widely valued as a natural wellness herb for both men and women seeking daily vitality and performance support." },
  ],
  "elderberry-vitc-zinc": [
    { ingredient: "Elderberry", detail: "Rich in antioxidants and traditionally used to support the immune system and overall wellness." },
    { ingredient: "Vitamin C", detail: "Vitamin C contributes to:", bullets: ["Normal immune function", "Antioxidant protection", "Collagen support", "Cellular wellness"] },
    { ingredient: "Zinc", detail: "An essential mineral that supports:", bullets: ["Immune health", "Cellular repair", "Skin wellness", "Normal body function"] },
  ],
};

products.forEach((p) => {
  if (productSupport[p.slug]) p.support = productSupport[p.slug];
});

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const relatedProducts = (slug: string, category: Category) =>
  products.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);
