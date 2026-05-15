import elderberry from "@/assets/product-elderberry.jpg";
import omega3 from "@/assets/product-omega3.jpg";
import skinWhitening from "@/assets/product-skin-whitening.jpg";
import magnesiumTriple from "@/assets/product-magnesium-triple.jpg";
import magnesiumGlycinate from "@/assets/product-magnesium-glycinate.jpg";
import ashwagandha from "@/assets/product-ashwagandha.jpg";
import burn from "@/assets/product-burn.jpg";
import maca from "@/assets/product-maca.jpg";
import uricAcid from "@/assets/product-uric-acid.jpg";
import alphaMemory from "@/assets/product-alpha-memory.jpg";
import activatedCharcoal from "@/assets/product-activated-charcoal.jpg";
import acneCleanse from "@/assets/product-acne-cleanse.jpg";
import appleCiderVinegar from "@/assets/product-apple-cider-vinegar.jpg";
import kelp from "@/assets/product-kelp.jpg";
import alphaLipoicAcid from "@/assets/product-alpha-lipoic-acid.jpg";
import aminoAcid from "@/assets/product-amino-acid.jpg";

export type Category =
  | "Immune Support"
  | "Heart & Brain"
  | "Beauty & Skin"
  | "Stress & Sleep"
  | "Fitness & Performance"
  | "Joint & Mobility"
  | "Detox & Cleanse"
  | "Thyroid & Metabolism";

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
  "Detox & Cleanse",
  "Thyroid & Metabolism",
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
  },
  {
    slug: "alpha-memory-focus",
    name: "FSG Alpha — Memory & Focus",
    short: "Daily cognitive support for memory, focus & mental clarity.",
    category: "Heart & Brain",
    benefits: ["Memory", "Focus", "Mental Clarity"],
    image: alphaMemory,
    tagline: "Daily Cognitive Support Formula",
    size: "60 Capsules",
    description: [
      "Franceshgrace Alpha is formulated to support memory, focus, and overall cognitive wellness for a sharper, more productive day.",
      "Gluten-free and caffeine-free, this premium nootropic blend is designed for daily use to help support mental clarity, learning, and concentration.",
    ],
    facts: [
      { label: "Format", value: "60 Capsules" },
      { label: "Gluten Free", value: "Yes" },
      { label: "Caffeine Free", value: "Yes" },
    ],
    ingredients: [
      { name: "Cognitive Blend", description: "Supports memory, focus and mental performance." },
      { name: "Nootropic Botanicals", description: "Traditionally used for clarity and concentration." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "activated-charcoal-1200mg",
    name: "FSG Activated Charcoal 1200mg",
    short: "Coconut shell charcoal for natural detox & gas relief.",
    category: "Detox & Cleanse",
    benefits: ["Detox", "Bloating Relief", "Highly Absorbent"],
    image: activatedCharcoal,
    tagline: "Natural Detox & Digestive Comfort",
    size: "100 Veggie Capsules · 50 Servings",
    description: [
      "Franceshgrace Activated Charcoal is derived from premium coconut shells and provides 1200mg per serving for natural detoxification support.",
      "Highly absorbent and traditionally used to help alleviate occasional gas and bloating while supporting the body's natural cleansing process.",
    ],
    facts: [
      { label: "Activated Charcoal (Coconut Shell)", value: "1200mg" },
      { label: "Servings per Bottle", value: "50" },
      { label: "Capsule Type", value: "Veggie" },
    ],
    ingredients: [
      { name: "Coconut Shell Activated Charcoal", description: "Premium source known for high adsorption capacity." },
    ],
    use: "Take 2 capsules with water, away from food and medications.",
  },
  {
    slug: "acne-cleanse",
    name: "FSG Acne Cleanse — Skin Care",
    short: "Inner skin support for clear complexion & breakout balance.",
    category: "Beauty & Skin",
    benefits: ["Clear Skin", "Complexion", "Breakout Support"],
    image: acneCleanse,
    tagline: "Clear Skin from the Inside Out",
    size: "90 Capsules",
    description: [
      "Franceshgrace Acne Cleanse is formulated to support a clear complexion, reduce occasional breakouts, and promote skin health from the inside out.",
      "A daily skin wellness supplement combining botanical extracts and skin-supportive nutrients for visibly healthier-looking skin.",
    ],
    facts: [
      { label: "Format", value: "90 Capsules" },
      { label: "Daily Use", value: "Yes" },
    ],
    ingredients: [
      { name: "Skin Botanical Blend", description: "Traditionally used to support clear, balanced skin." },
      { name: "Antioxidant Nutrients", description: "Help protect skin cells from oxidative stress." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "apple-cider-vinegar",
    name: "FSG Apple Cider Vinegar 1877mg",
    short: "ACV blend for weight, glucose, cholesterol & immune support.",
    category: "Thyroid & Metabolism",
    benefits: ["Weight Wellness", "Metabolism", "Immune Support"],
    image: appleCiderVinegar,
    tagline: "Healthy Weight & Metabolism Support",
    size: "90 Capsules",
    description: [
      "Franceshgrace Apple Cider Vinegar provides a powerful 1877mg ACV blend with 750mg acetic acid per serving.",
      "Supports healthy weight, blood glucose, cholesterol levels, and immune wellness — all in convenient capsule form, no taste, no smell.",
    ],
    facts: [
      { label: "ACV Blend", value: "1877mg" },
      { label: "Acetic Acid", value: "750mg" },
      { label: "Format", value: "90 Capsules" },
    ],
    ingredients: [
      { name: "Apple Cider Vinegar", description: "Traditional wellness ingredient for metabolism and digestion." },
      { name: "Acetic Acid", description: "Active component supporting metabolic balance." },
    ],
    use: "Take 1 capsule daily before meals.",
  },
  {
    slug: "kelp-whole-thallus",
    name: "FSG Kelp Whole Thallus 450mg",
    short: "Natural iodine source for thyroid & immune wellness.",
    category: "Thyroid & Metabolism",
    benefits: ["Thyroid Support", "Iodine Source", "Immune Function"],
    image: kelp,
    tagline: "Natural Thyroid & Immune Support",
    size: "200 Capsules",
    description: [
      "Franceshgrace Kelp Whole Thallus delivers 450mg of pure kelp per capsule — a natural ocean source of iodine that supports thyroid function and overall wellness.",
      "Traditionally used to support healthy metabolism, energy production, and immune function.",
    ],
    facts: [
      { label: "Whole Kelp Thallus", value: "450mg" },
      { label: "Format", value: "200 Capsules" },
    ],
    ingredients: [
      { name: "Whole Kelp", description: "Natural source of iodine and trace minerals." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "alpha-lipoic-acid-600mg",
    name: "FSG Alpha Lipoic Acid 600mg",
    short: "Pure & potent antioxidant for energy & cellular wellness.",
    category: "Heart & Brain",
    benefits: ["Antioxidant", "Cellular Support", "Energy"],
    image: alphaLipoicAcid,
    tagline: "Pure & Potent Antioxidant Support",
    size: "120 Vegetable Capsules · 60 Servings",
    description: [
      "Franceshgrace Alpha Lipoic Acid delivers 600mg of pure ALA per serving for powerful antioxidant, cellular, and energy support.",
      "Manufactured without magnesium stearate, dioxides, preservatives, or other artificial ingredients — pure and potent in every capsule.",
    ],
    facts: [
      { label: "Alpha Lipoic Acid", value: "600mg" },
      { label: "Format", value: "120 Vegetable Capsules" },
      { label: "Servings", value: "60" },
    ],
    ingredients: [
      { name: "Alpha Lipoic Acid", description: "A universal antioxidant that supports cellular energy and protection." },
    ],
    use: "Take 2 capsules daily with food.",
  },
  {
    slug: "essential-amino-acid",
    name: "FSG Essential Amino Acid Profile",
    short: "Anytime energy & recovery in concord grape flavor.",
    category: "Fitness & Performance",
    benefits: ["Energy", "Recovery", "Muscle Support"],
    image: aminoAcid,
    tagline: "Anytime Energy & Recovery",
    size: "9.5 oz (270g) · 30 Servings",
    description: [
      "Franceshgrace Essential Amino Acid Profile delivers a complete blend of essential amino acids in a refreshing concord grape flavor.",
      "Formulated for anytime energy and recovery — 0g sugar with caffeine from natural sources for clean, sustained performance.",
    ],
    facts: [
      { label: "Flavor", value: "Concord Grape" },
      { label: "Net Weight", value: "9.5 oz (270g)" },
      { label: "Servings", value: "30" },
      { label: "Sugar", value: "0g" },
    ],
    ingredients: [
      { name: "Essential Amino Acids (EAAs)", description: "The complete set the body needs for muscle and recovery." },
      { name: "Natural Caffeine", description: "Clean energy from natural sources." },
    ],
    use: "Mix 1 scoop with 8–10 oz of water. Use anytime for energy or recovery.",
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
