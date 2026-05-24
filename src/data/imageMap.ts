// Maps a product slug to a bundled image asset URL.
// New products created in the admin without a known slug fall back to PLACEHOLDER.
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

export const PLACEHOLDER_IMAGE = elderberry;

export const productImageMap: Record<string, string> = {
  "elderberry-vitc-zinc": elderberry,
  "triple-strength-omega-3": omega3,
  "skin-whitening": skinWhitening,
  "triple-magnesium-complex": magnesiumTriple,
  "magnesium-glycinate-quercetin": magnesiumGlycinate,
  "ashwagandha-1300mg": ashwagandha,
  "fat-burner": burn,
  "maca-1900mg": maca,
  "uric-acid-cleanse": uricAcid,
  "alpha-memory-focus": alphaMemory,
  "activated-charcoal-1200mg": activatedCharcoal,
  "acne-cleanse": acneCleanse,
  "apple-cider-vinegar": appleCiderVinegar,
  "kelp-whole-thallus": kelp,
  "alpha-lipoic-acid-600mg": alphaLipoicAcid,
  "essential-amino-acid": aminoAcid,
  "amino-acid-strawberry-burst": aminoStrawberry,
  "astragalus-extract-500mg": astragalus,
  "ashwagandha-2100mg": ashwagandha2100,
  "ashwagandha-500-calming": ashwagandha500Calming,
  "ashwagandha-1300-advanced": ashwagandha1300Advanced,
  "ashwa-premium-90": ashwaPremium,
  "ashwagandha-5in1-90": ashwagandha5in1Red,
  "ashwagandha-organic-usda": ashwagandhaOrganic90,
  "ashwagandha-5in1-180": ashwagandha5in1180,
  "ashwagandha-500-extra": ashwagandha500Extra,
  "ashwagandha-extra-500-bioperine": ashwagandhaExtra500Bioperine,
  "ashwagandha-organic-caplets": ashwagandhaOrganicCaplets,
  "ashwagandha-extra-120-bioperine": ashwagandhaExtra120Bioperine,
  "ashwagandha-anxiety-stress-support": ashwagandhaAnxietyStress,
};

export const productImage = (key: string | null | undefined): string =>
  (key && productImageMap[key]) || PLACEHOLDER_IMAGE;
