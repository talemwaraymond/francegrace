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
import aminoStrawberry from "@/assets/product-amino-strawberry.png";
import astragalus from "@/assets/product-astragalus.png";
import ashwagandha2100 from "@/assets/product-ashwagandha-2100.png";
import ashwagandha500Calming from "@/assets/product-ashwagandha-500-calming.png";
import ashwagandha1300Advanced from "@/assets/product-ashwagandha-1300-advanced.png";
import ashwaPremium from "@/assets/product-ashwa-premium.png";
import ashwagandha5in1Red from "@/assets/product-ashwagandha-5in1-red.png";
import ashwagandhaOrganic90 from "@/assets/product-ashwagandha-organic-90.png";
import ashwagandha5in1180 from "@/assets/product-ashwagandha-5in1-180.png";
import ashwagandha500Extra from "@/assets/product-ashwagandha-500-extra.png";
import ashwagandhaExtra500Bioperine from "@/assets/product-ashwagandha-extra-500-bioperine.png";
import ashwagandhaOrganicCaplets from "@/assets/product-ashwagandha-organic-caplets.png";
import ashwagandhaExtra120Bioperine from "@/assets/product-ashwagandha-extra-120-bioperine.png";
import ashwagandhaAnxietyStress from "@/assets/product-ashwagandha-anxiety-stress.png";

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
  featuredInHero?: boolean;
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
  {
    slug: "alpha-memory-focus",
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
    featuredInHero: true,
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
  {
    slug: "amino-acid-strawberry-burst",
    name: "FSG Essential Amino Acid — Strawberry Burst",
    short: "Anytime energy & recovery in strawberry burst flavor.",
    category: "Fitness & Performance",
    benefits: ["Energy", "Recovery", "0g Sugar"],
    image: aminoStrawberry,
    tagline: "Anytime Energy & Recovery — Strawberry Burst",
    size: "9.5 oz (270g) · 30 Servings",
    description: [
      "Franceshgrace Essential Amino Acid Profile in a refreshing Strawberry Burst flavor delivers a complete blend of EAAs for anytime energy and recovery.",
      "Featuring guarana extract and synephrine from natural sources, with 0g sugar — formulated for clean, sustained performance.",
    ],
    facts: [
      { label: "Flavor", value: "Strawberry Burst" },
      { label: "Net Weight", value: "9.5 oz (270g)" },
      { label: "Servings", value: "30" },
      { label: "Sugar", value: "0g" },
    ],
    ingredients: [
      { name: "Essential Amino Acids", description: "Complete EAAs for muscle support and recovery." },
      { name: "Guarana Extract", description: "Natural source of clean caffeine for energy." },
      { name: "Synephrine", description: "Natural compound supporting metabolism and energy." },
    ],
    use: "Mix 1 scoop with 8–10 oz of water. Use anytime for energy or recovery.",
  },
  {
    slug: "astragalus-extract-500mg",
    name: "FSG Astragalus Extract 500mg",
    short: "Clinically validated astragalus for daily immune support.",
    category: "Immune Support",
    benefits: ["Immune Support", "Dairy/Soy/Gluten Free", "Clinically Validated"],
    image: astragalus,
    tagline: "Immune System Support Formula",
    size: "150 Capsules",
    description: [
      "Franceshgrace Astragalus Extract delivers 500mg per capsule of a traditional adaptogenic herb long used in wellness practices.",
      "Dairy, soy, and gluten free with clinically validated strains — designed to support immune wellness and overall vitality.",
    ],
    facts: [
      { label: "Astragalus Extract", value: "500mg" },
      { label: "Capsules", value: "150" },
      { label: "Allergens", value: "Dairy / Soy / Gluten Free" },
    ],
    ingredients: [
      { name: "Astragalus Extract", description: "Traditional adaptogen used to support immune wellness." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-2100mg",
    name: "FSG Ashwagandha 2100mg Maximum Strength",
    short: "Maximum-strength ashwagandha with black pepper extract.",
    category: "Stress & Sleep",
    benefits: ["Stress Reduction", "Immune Support", "Mood Enhancer"],
    image: ashwagandha2100,
    tagline: "Maximum Strength Adaptogen Formula",
    size: "100 Veggie Capsules",
    description: [
      "Franceshgrace Ashwagandha 2100mg combines a high-potency ashwagandha dose with black pepper extract for enhanced absorption.",
      "Traditionally used to help promote stress reduction, support the immune system, and enhance mood balance.",
    ],
    facts: [
      { label: "Ashwagandha", value: "2100mg" },
      { label: "Black Pepper Extract", value: "Included" },
      { label: "Capsules", value: "100 Veggie" },
    ],
    ingredients: [
      { name: "Ashwagandha", description: "High-potency adaptogen for stress and vitality support." },
      { name: "Black Pepper Extract", description: "Enhances absorption of active compounds." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-500-calming",
    name: "FSG Ashwagandha Extract 500mg — Calming Serenity",
    short: "Gentle ashwagandha for occasional sleeplessness & energy.",
    category: "Stress & Sleep",
    benefits: ["Calming", "Sleep Support", "Energy"],
    image: ashwagandha500Calming,
    tagline: "Support Calming Serenity",
    size: "150 Capsules · Vegetarian/Vegan",
    description: [
      "Franceshgrace Ashwagandha Extract 500mg supports calming serenity and helps with occasional sleeplessness while boosting energy levels.",
      "Non-GMO, vegetarian and vegan-friendly — a daily wellness companion for balance and steady vitality.",
    ],
    facts: [
      { label: "Ashwagandha Extract", value: "500mg" },
      { label: "Capsules", value: "150" },
      { label: "Diet", value: "Vegetarian / Vegan · Non-GMO" },
    ],
    ingredients: [
      { name: "Ashwagandha Extract", description: "Adaptogen for calm, sleep, and steady energy." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-1300-advanced",
    name: "FSG Ashwagandha 1300mg Advanced Stress Relief",
    short: "Organic ashwagandha + black pepper for premium stress response.",
    category: "Stress & Sleep",
    benefits: ["Stress Response", "Energy & Mood", "Cortisol Balance"],
    image: ashwagandha1300Advanced,
    tagline: "Advanced Stress Relief Formula",
    size: "120 Vegetarian Capsules",
    description: [
      "Franceshgrace Ashwagandha 1300mg Advanced is made with organic ashwagandha and black pepper for premium stress response support.",
      "Helps enhance energy and mood while supporting balanced cortisol levels.",
    ],
    facts: [
      { label: "Organic Ashwagandha", value: "1300mg" },
      { label: "Black Pepper", value: "Included" },
      { label: "Capsules", value: "120 Vegetarian" },
    ],
    ingredients: [
      { name: "Organic Ashwagandha", description: "Premium adaptogen for stress and cortisol balance." },
      { name: "Black Pepper Extract", description: "Boosts absorption of active compounds." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwa-premium-90",
    name: "FSG ASHWA Premium Supplements",
    short: "Stress support formula with organic ashwagandha + black pepper.",
    category: "Stress & Sleep",
    benefits: ["Stress Support", "Organic", "Premium"],
    image: ashwaPremium,
    tagline: "Premium Stress Support Formula",
    size: "90 Capsules",
    description: [
      "Franceshgrace ASHWA Premium is a stress support formula made with organic ashwagandha and black pepper extract.",
      "A daily wellness supplement for everyday calm, focus, and resilience.",
    ],
    facts: [
      { label: "Capsules", value: "90" },
      { label: "Formula", value: "Organic Ashwagandha + Black Pepper" },
    ],
    ingredients: [
      { name: "Organic Ashwagandha", description: "Traditional adaptogen for stress balance." },
      { name: "Black Pepper Extract", description: "Supports nutrient absorption." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-5in1-90",
    name: "FSG Ashwagandha Extra Strength 5 in 1",
    short: "5-in-1 ashwagandha blend for energy, immunity & stress.",
    category: "Stress & Sleep",
    benefits: ["Energy & Mood", "Immune Support", "Stress Response"],
    image: ashwagandha5in1Red,
    tagline: "Extra Strength 5 in 1 Formula",
    size: "90 Capsules",
    description: [
      "Franceshgrace Ashwagandha Extra Strength 5 in 1 is made with 5 natural ingredients to support energy and mood, the immune system, and a healthy stress response.",
      "A comprehensive daily wellness formula for total vitality.",
    ],
    facts: [
      { label: "Formula", value: "5 in 1" },
      { label: "Capsules", value: "90" },
    ],
    ingredients: [
      { name: "Ashwagandha Blend", description: "5-herb adaptogen blend for energy, immunity, and calm." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-organic-usda",
    name: "FSG Ashwagandha — USDA Organic",
    short: "USDA Organic, Non-GMO ashwagandha for healthy stress response.",
    category: "Stress & Sleep",
    benefits: ["Healthy Stress Response", "USDA Organic", "Non-GMO"],
    image: ashwagandhaOrganic90,
    tagline: "Healthy Stress Response",
    size: "90 Vegetarian Caps",
    description: [
      "Franceshgrace Ashwagandha is USDA Organic and Non-GMO Project verified — a clean, herbal supplement for a healthy stress response.",
      "Certified B Corporation quality you can trust for daily calm and balance.",
    ],
    facts: [
      { label: "Capsules", value: "90 Vegetarian" },
      { label: "Certifications", value: "USDA Organic · Non-GMO · B Corp" },
    ],
    ingredients: [
      { name: "Organic Ashwagandha", description: "Certified organic adaptogen for stress wellness." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-5in1-180",
    name: "FSG Ashwagandha Maximum Strength 5 in 1 — 180 Caps",
    short: "Maximum-strength 5-in-1 ashwagandha, 180-count value bottle.",
    category: "Stress & Sleep",
    benefits: ["Energy & Mood", "Immune System", "Stress Response"],
    image: ashwagandha5in1180,
    tagline: "Maximum Strength 5 in 1 Formula",
    size: "180 Capsules",
    description: [
      "Franceshgrace Ashwagandha Maximum Strength 5 in 1 is made with 5 organic ingredients to support energy and mood, the immune system, and a healthy stress response.",
      "180-count value bottle for daily, long-term wellness routines.",
    ],
    facts: [
      { label: "Formula", value: "Maximum Strength · 5 in 1" },
      { label: "Capsules", value: "180" },
    ],
    ingredients: [
      { name: "Ashwagandha Blend", description: "5 organic ingredients for total stress, energy, and immune wellness." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-500-extra",
    name: "FSG Ashwagandha Extra Strength 500mg",
    short: "Extra-strength ashwagandha for stress relief & mood.",
    category: "Stress & Sleep",
    benefits: ["Stress Relief", "Energy & Mood", "Non-GMO"],
    image: ashwagandha500Extra,
    tagline: "Extra Strength Stress Relief",
    size: "60 Veggie Capsules",
    description: [
      "Franceshgrace Ashwagandha Extra Strength 500mg per serving delivers advanced stress relief and enhances energy and mood.",
      "Non-GMO Project verified, in vegetarian capsules — a clean daily wellness supplement.",
    ],
    facts: [
      { label: "Ashwagandha", value: "500mg per serving" },
      { label: "Capsules", value: "60 Veggie" },
      { label: "Certification", value: "Non-GMO Verified" },
    ],
    ingredients: [
      { name: "Ashwagandha Extract", description: "Adaptogen for advanced stress relief and energy." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-extra-500-bioperine",
    name: "FSG Ashwagandha Extra Strength 500mg + Bioperine",
    short: "Stress & mood support with bioperine for absorption.",
    category: "Stress & Sleep",
    benefits: ["Stress & Mood", "Bioperine Absorption", "Gluten & Soy Free"],
    image: ashwagandhaExtra500Bioperine,
    tagline: "Extra Strength Stress & Mood Support",
    size: "120 Vegetarian Capsules · 60 Servings",
    description: [
      "Franceshgrace Ashwagandha Extra Strength delivers 500mg per serving paired with bioperine for enhanced nutrient absorption.",
      "Formulated to support stress balance, mood, and daily resilience — free of gluten and soy.",
    ],
    facts: [
      { label: "Ashwagandha", value: "500mg per serving" },
      { label: "Bioperine", value: "Included" },
      { label: "Capsules", value: "120 Vegetarian" },
      { label: "Servings", value: "60" },
    ],
    ingredients: [
      { name: "Ashwagandha Extract", description: "Adaptogen traditionally used for stress and mood balance." },
      { name: "Bioperine (Black Pepper)", description: "Enhances absorption of active botanicals." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-organic-caplets",
    name: "FSG Organic Ashwagandha — Adrenal Support",
    short: "USDA Organic ashwagandha caplets to release stress & boost energy.",
    category: "Stress & Sleep",
    benefits: ["Stress Release", "Energy Boost", "Adrenal Support"],
    image: ashwagandhaOrganicCaplets,
    tagline: "Releases Stress & Boosts Energy",
    size: "60 Caplets",
    description: [
      "Franceshgrace Organic Ashwagandha is a USDA Organic, Non-GMO Project Verified herbal supplement traditionally used to release stress and boost energy.",
      "Supports healthy adrenal function and daily vitality in convenient caplet form.",
    ],
    facts: [
      { label: "Format", value: "60 Caplets" },
      { label: "Certifications", value: "USDA Organic · Non-GMO" },
    ],
    ingredients: [
      { name: "Organic Ashwagandha Root", description: "Certified organic adaptogen for stress, energy and adrenal wellness." },
    ],
    use: "Take 1 caplet daily with food.",
  },
  {
    slug: "ashwagandha-extra-120-bioperine",
    name: "FSG Ashwagandha Extra Strength 120ct — Withania Somnifera",
    short: "Withania Somnifera with black bioperine for enhanced absorption.",
    category: "Stress & Sleep",
    benefits: ["Stress Support", "Non-GMO", "Gluten & Soy Free"],
    image: ashwagandhaExtra120Bioperine,
    tagline: "Withania Somnifera with Black Bioperine",
    size: "120 Vegetarian Capsules",
    description: [
      "Franceshgrace Ashwagandha Extra Strength features authentic Withania Somnifera paired with black bioperine for enhanced nutrient absorption.",
      "A clean daily wellness supplement — Non-GMO, Gluten-Free, and Soy-Free.",
    ],
    facts: [
      { label: "Ashwagandha (Withania Somnifera)", value: "Extra Strength" },
      { label: "Black Bioperine", value: "Included" },
      { label: "Count", value: "120 Vegetarian Capsules" },
      { label: "Certifications", value: "Non-GMO · Gluten-Free · Soy-Free" },
    ],
    ingredients: [
      { name: "Withania Somnifera", description: "Authentic ashwagandha adaptogen for stress wellness." },
      { name: "Black Bioperine", description: "Improves absorption of active compounds." },
    ],
    use: "Take 1 capsule daily with food.",
  },
  {
    slug: "ashwagandha-anxiety-stress-support",
    name: "FSG Ashwagandha — Anxiety & Stress Support",
    short: "Clinically-studied ashwagandha for occasional anxiety & stress.",
    category: "Stress & Sleep",
    benefits: ["Anxiety Support", "Stress Support", "Clinically Studied"],
    image: ashwagandhaAnxietyStress,
    tagline: "Anxiety & Stress Support",
    size: "50 Capsules",
    description: [
      "Franceshgrace Ashwagandha Anxiety & Stress Support is formulated with clinically-studied ingredients to help support occasional anxiety and stress.",
      "A daily herbal health companion for calm, balance, and resilience.",
    ],
    facts: [
      { label: "Format", value: "50 Capsules" },
      { label: "Focus", value: "Occasional Anxiety & Stress" },
      { label: "Ingredients", value: "Clinically Studied" },
    ],
    ingredients: [
      { name: "Ashwagandha", description: "Adaptogen traditionally used to support occasional anxiety and stress." },
    ],
    use: "Take 1 capsule daily with food.",
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
  "alpha-memory-focus": [
    { ingredient: "Cognitive Support Blend", detail: "Formulated to help support:", bullets: ["Memory retention", "Mental focus", "Concentration", "Daily cognitive performance", "Mental clarity"] },
    { ingredient: "Gluten-Free & Caffeine-Free Formula", detail: "Designed for daily use without stimulants — supports natural focus without the jitters or crashes associated with caffeine." },
  ],
  "activated-charcoal-1200mg": [
    { ingredient: "Activated Charcoal from Coconut Shells (1200mg)", detail: "Highly absorbent natural ingredient traditionally used to help support:", bullets: ["Natural detoxification", "Relief from occasional gas and bloating", "Digestive comfort", "Internal cleansing"] },
    { ingredient: "Coconut Shell Source", detail: "Premium plant-based source known for its high adsorption capacity and purity compared to other charcoal sources." },
  ],
  "acne-cleanse": [
    { ingredient: "Skin Wellness Blend", detail: "Formulated to support clear, healthy-looking skin from within. Helps support:", bullets: ["Clear complexion", "Reduction of occasional breakouts", "Skin balance", "Healthy skin from the inside out"] },
    { ingredient: "Daily Skin Support", detail: "A gentle daily wellness formula that complements topical skincare routines for visibly healthier-looking skin." },
  ],
  "apple-cider-vinegar": [
    { ingredient: "ACV Blend (1877mg)", detail: "A potent apple cider vinegar concentrate that helps support:", bullets: ["Healthy weight levels", "Blood glucose levels", "Cholesterol levels", "Immune system wellness"] },
    { ingredient: "Acetic Acid (750mg)", detail: "The active component of apple cider vinegar, known for supporting metabolism, digestion, and overall wellness." },
    { ingredient: "Convenient Capsule Form", detail: "Delivers the benefits of ACV without the strong taste or smell — easy to take daily before meals." },
  ],
  "kelp-whole-thallus": [
    { ingredient: "Whole Kelp Thallus (450mg)", detail: "A natural ocean-sourced sea vegetable that helps support:", bullets: ["Thyroid function", "Healthy metabolism", "Energy production", "Immune wellness"] },
    { ingredient: "Iodine Source", detail: "Kelp is one of nature's richest sources of iodine — an essential trace mineral the body needs for thyroid hormone production and overall metabolic balance." },
  ],
  "alpha-lipoic-acid-600mg": [
    { ingredient: "Alpha Lipoic Acid (600mg)", detail: "A unique antioxidant that is both water- and fat-soluble, helping support:", bullets: ["Antioxidant protection", "Cellular wellness", "Energy production", "Healthy aging support"] },
    { ingredient: "Pure & Potent Formula", detail: "Manufactured without magnesium stearate, dioxides, preservatives, or other artificial ingredients — clean potency in every capsule." },
  ],
  "essential-amino-acid": [
    { ingredient: "Essential Amino Acids (EAAs)", detail: "The complete set of amino acids your body cannot produce on its own. Help support:", bullets: ["Muscle support", "Recovery", "Energy production", "Endurance during training"] },
    { ingredient: "Natural Caffeine", detail: "A clean, plant-based caffeine source that helps support sustained energy without the crash of synthetic stimulants." },
    { ingredient: "0g Sugar Formula", detail: "Refreshing concord grape flavor with no added sugar — perfect for anytime energy or post-workout recovery." },
  ],
  "amino-acid-strawberry-burst": [
    { ingredient: "Essential Amino Acids (EAAs)", detail: "Complete set of essential amino acids supporting:", bullets: ["Muscle support", "Recovery", "Energy production", "Training endurance"] },
    { ingredient: "Guarana Extract", detail: "Natural plant source of caffeine for clean, sustained energy." },
    { ingredient: "Synephrine", detail: "Naturally derived compound that helps support metabolism and active performance." },
    { ingredient: "0g Sugar — Strawberry Burst", detail: "Refreshing strawberry burst flavor with zero added sugar — perfect for anytime use." },
  ],
  "astragalus-extract-500mg": [
    { ingredient: "Astragalus Extract (500mg)", detail: "A traditional adaptogenic herb used for centuries to support:", bullets: ["Immune system wellness", "Daily vitality", "Resilience", "Overall wellness"] },
    { ingredient: "Clean Formula", detail: "Dairy, soy, and gluten free with clinically validated strains for trusted daily use." },
  ],
  "ashwagandha-2100mg": [
    { ingredient: "Ashwagandha (2100mg)", detail: "Maximum-strength adaptogenic herb that helps support:", bullets: ["Stress reduction", "Immune wellness", "Mood balance", "Daily vitality"] },
    { ingredient: "Black Pepper Extract", detail: "Enhances absorption and bioavailability of ashwagandha's active compounds." },
  ],
  "ashwagandha-500-calming": [
    { ingredient: "Ashwagandha Extract (500mg)", detail: "Gentle yet effective adaptogen helping support:", bullets: ["Calming serenity", "Occasional sleeplessness", "Healthy energy levels", "Stress balance"] },
    { ingredient: "Vegetarian / Vegan · Non-GMO", detail: "Clean formula suitable for plant-based lifestyles, free from GMO ingredients." },
  ],
  "ashwagandha-1300-advanced": [
    { ingredient: "Organic Ashwagandha (1300mg)", detail: "Premium adaptogen for advanced stress response. Helps support:", bullets: ["Premium stress response", "Energy and mood", "Cortisol balance", "Calm focus"] },
    { ingredient: "Black Pepper Extract", detail: "Improves absorption of ashwagandha's withanolides for enhanced effectiveness." },
  ],
  "ashwa-premium-90": [
    { ingredient: "Organic Ashwagandha + Black Pepper", detail: "A premium stress support formula. Helps support:", bullets: ["Stress balance", "Calm focus", "Daily resilience", "Overall wellness"] },
  ],
  "ashwagandha-5in1-90": [
    { ingredient: "5-in-1 Ashwagandha Blend", detail: "Five natural ingredients working together to support:", bullets: ["Energy and mood", "Immune system", "Healthy stress response", "Daily vitality"] },
  ],
  "ashwagandha-organic-usda": [
    { ingredient: "USDA Organic Ashwagandha", detail: "Certified organic adaptogen for a healthy stress response. Helps support:", bullets: ["Healthy stress response", "Calm focus", "Daily balance"] },
    { ingredient: "Certifications", detail: "USDA Organic, Non-GMO Project Verified, and Certified B Corporation — clean quality you can trust." },
  ],
  "ashwagandha-5in1-180": [
    { ingredient: "Maximum Strength 5-in-1 Blend (180 caps)", detail: "Five organic ingredients in a value-size bottle. Helps support:", bullets: ["Energy and mood", "Immune system", "Healthy stress response", "Long-term daily wellness"] },
  ],
  "ashwagandha-500-extra": [
    { ingredient: "Ashwagandha Extract (500mg per serving)", detail: "Extra strength adaptogen helping support:", bullets: ["Advanced stress relief", "Enhanced energy and mood", "Daily resilience"] },
    { ingredient: "Non-GMO Verified", detail: "Clean, plant-based vegetarian capsules — Non-GMO Project verified for trusted quality." },
  ],
};

products.forEach((p) => {
  if (productSupport[p.slug]) p.support = productSupport[p.slug];
});

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const relatedProducts = (slug: string, category: Category) =>
  products.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);
