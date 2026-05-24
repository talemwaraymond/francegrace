export interface ProductDTO {
  id: string;
  slug: string;
  name: string;
  category: string;
  short: string;
  tagline: string;
  size: string;
  description: string[];
  benefits: string[];
  facts: { label: string; value: string }[];
  ingredients: { name: string; description: string }[];
  support: { ingredient: string; detail: string; bullets?: string[] }[];
  use: string;
  image_key: string;
  status: string;
  featured_in_hero: boolean;
  display_order: number;
}

export interface BlogPostDTO {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  takeaways: string[];
  author: string;
  image_key: string;
  read_minutes: number;
  status: string;
  published_at: string;
}

export interface InquiryDTO {
  id: string;
  full_name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product_interest: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface SiteSettingsDTO {
  contact_email: string;
  footer_disclaimer: string;
  instagram_url: string;
  facebook_url: string;
  linkedin_url: string;
}
