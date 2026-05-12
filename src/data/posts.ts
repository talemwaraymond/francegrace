import { products } from "./products";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readMinutes: number;
  body: string[];
  takeaways: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "omega-3-and-cardiovascular-wellness",
    title: "The Science Behind Omega-3 and Cardiovascular Wellness",
    category: "Heart & Brain",
    excerpt:
      "How EPA and DHA work together to support heart, brain, and joint wellness — and what research tells us about effective dosing.",
    image: products[1].image,
    date: "May 2026",
    readMinutes: 5,
    body: [
      "Omega-3 fatty acids are among the most extensively studied nutrients in modern nutrition science. The two that matter most for daily wellness are EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — both abundant in cold-water fish like salmon, sardines, and mackerel.",
      "EPA is most often associated with cardiovascular wellness and a healthy inflammatory response. DHA is a structural component of brain and eye tissue, which is why pregnant women, growing children, and aging adults are frequently encouraged to maintain a steady intake.",
      "The challenge is that the modern Western diet is heavy in omega-6 fats and light on omega-3s. Research suggests that a daily intake of around 1000–2000mg of combined EPA and DHA supports optimal cardiovascular markers in most adults, which is why our Triple Strength Omega-3 was formulated to deliver 2000mg per serving.",
      "Quality matters as much as quantity. Look for fish oils that are molecularly distilled, third-party tested for heavy metals, and stabilised against oxidation — rancid fish oil can do more harm than good.",
    ],
    takeaways: [
      "EPA supports cardiovascular and inflammatory health.",
      "DHA is structural for brain and eye tissue.",
      "Aim for 1000–2000mg combined EPA + DHA per day.",
      "Choose molecularly distilled, third-party tested oils.",
    ],
  },
  {
    slug: "ashwagandha-modern-stress",
    title: "Ashwagandha: Nature's Answer to Modern Stress",
    category: "Stress & Sleep",
    excerpt:
      "An adaptogen used for thousands of years, ashwagandha is having a modern moment. Here's why.",
    image: products[5].image,
    date: "May 2026",
    readMinutes: 4,
    body: [
      "Ashwagandha (Withania somnifera) has been used in Ayurvedic tradition for over three thousand years. The Sanskrit name translates roughly to 'smell of the horse' — a nod to its earthy aroma and the strength it was traditionally believed to impart.",
      "Modern researchers classify it as an adaptogen: a plant compound that helps the body modulate its response to stress. Multiple randomised trials have shown that standardised ashwagandha extracts can reduce cortisol levels, improve perceived stress, and support sleep quality in adults experiencing chronic stress.",
      "The benefits are not limited to stress. Athletes have studied ashwagandha for endurance and strength outcomes, and there is preliminary evidence supporting its role in healthy testosterone levels in men and balanced energy in women.",
      "As with any botanical, dose and standardisation matter. Our 1300mg formula pairs organic ashwagandha root with a small amount of black pepper to support absorption, taken once daily for steady support.",
    ],
    takeaways: [
      "Adaptogen with a 3000-year tradition of use.",
      "May help reduce cortisol and improve sleep.",
      "Dose and standardisation matter — look for organic root.",
      "Black pepper extract enhances absorption.",
    ],
  },
  {
    slug: "magnesium-deep-sleep",
    title: "Magnesium and the Science of Deep, Restorative Sleep",
    category: "Stress & Sleep",
    excerpt: "Three forms of magnesium, three different roles in your nightly recovery cycle.",
    image: products[3].image,
    date: "April 2026",
    readMinutes: 4,
    body: [
      "Magnesium is involved in more than 300 enzymatic reactions in the human body. It plays a central role in muscle relaxation, nervous system regulation, and the production of energy at the cellular level.",
      "Not all magnesium is created equal. Magnesium glycinate, bound to the amino acid glycine, is gentle on the stomach and supports calm and sleep. Magnesium citrate is highly absorbable and supports digestive balance. Magnesium malate is associated with daytime energy and muscle recovery.",
      "Combining all three — as we do in our Triple Magnesium Complex — covers the spectrum of needs without forcing you to choose between energy, calm, and digestion.",
      "If you struggle with falling asleep, waking in the night, or persistent muscle tension, a daily magnesium supplement is one of the simplest, most evidence-backed habits you can adopt.",
    ],
    takeaways: [
      "Magnesium powers 300+ enzymatic reactions.",
      "Glycinate calms, citrate aids digestion, malate energises.",
      "A combined complex covers the full spectrum.",
      "Supports sleep onset, sleep quality, and muscle relaxation.",
    ],
  },
  {
    slug: "daily-immune-support",
    title: "Daily Immune Support: What the Research Says",
    category: "Immune Support",
    excerpt: "Vitamin C, zinc, and elderberry — small daily habits that compound over time.",
    image: products[0].image,
    date: "April 2026",
    readMinutes: 4,
    body: [
      "The immune system is not something you 'boost' — it is something you support. The goal of daily nutrition is to give your body the raw materials it needs to mount a measured, balanced response when challenged.",
      "Vitamin C is essential for the function of immune cells and the integrity of skin and mucosal barriers. Zinc is a trace mineral that plays a direct role in immune cell signalling, and even mild deficiency can blunt your defences. Elderberry contains flavonoid antioxidants traditionally used to support seasonal wellness.",
      "Combining all three in a single daily capsule means you build a steady baseline rather than scrambling at the first sign of a sniffle. Consistency, not intensity, is what compounds.",
    ],
    takeaways: [
      "Support the immune system — don't try to 'boost' it.",
      "Vitamin C and zinc are foundational nutrients.",
      "Elderberry adds antioxidant flavonoids.",
      "Consistency beats intensity for daily wellness.",
    ],
  },
  {
    slug: "skin-wellness-from-within",
    title: "Skin Wellness from Within: The Role of Nutrition",
    category: "Beauty & Skin",
    excerpt: "Glutathione, vitamin C, and the antioxidant network that keeps skin glowing.",
    image: products[2].image,
    date: "March 2026",
    readMinutes: 4,
    body: [
      "Skin is the body's largest organ and the one most exposed to oxidative stress — UV light, pollution, and the by-products of metabolism. The body's primary defence is an interconnected antioxidant network in which glutathione, vitamin C, and vitamin E each play distinct roles.",
      "Glutathione is often called the master antioxidant because it regenerates other antioxidants and supports liver detoxification. Topical skincare can do a lot, but the foundation is built from within.",
      "Botanicals like licorice, amla, mulberry, and lemon have been used for centuries to support a clear, even complexion. Combined with steady hydration, sleep, and sun protection, an antioxidant formula is a meaningful piece of a real skin-wellness routine.",
    ],
    takeaways: [
      "Skin is constantly exposed to oxidative stress.",
      "Glutathione regenerates other antioxidants.",
      "Botanicals like amla and mulberry add traditional support.",
      "Pair supplementation with sleep, hydration, and SPF.",
    ],
  },
  {
    slug: "joint-health-active-lifestyles",
    title: "Joint Health Tips: Natural Support for Active Lifestyles",
    category: "Joint & Mobility",
    excerpt: "Boswellia, turmeric, and tart cherry — botanicals for moving comfortably for life.",
    image: products[8].image,
    date: "March 2026",
    readMinutes: 5,
    body: [
      "Joints are the meeting points where movement happens. Keeping them comfortable and mobile is one of the most important investments you can make in long-term quality of life.",
      "Three botanicals stand out in modern research for joint comfort. Boswellia serrata contains boswellic acids studied for their role in a balanced inflammatory response. Turmeric, standardised for curcumin, offers complementary support. Tart cherry is rich in anthocyanins and is increasingly studied in athletes for recovery.",
      "Combine these with hyaluronic acid for joint cushioning, regular movement, strength training, and adequate protein, and you have a foundation that supports comfortable mobility for decades.",
    ],
    takeaways: [
      "Boswellia and turmeric support a balanced inflammatory response.",
      "Tart cherry supports recovery in active people.",
      "Hyaluronic acid contributes to joint cushioning.",
      "Movement and strength training are non-negotiable.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const relatedPosts = (slug: string) => posts.filter((p) => p.slug !== slug).slice(0, 3);
