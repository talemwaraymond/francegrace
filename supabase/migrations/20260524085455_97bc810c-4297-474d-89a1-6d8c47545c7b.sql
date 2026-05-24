
-- Helper trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

-- =================== PRODUCTS ===================
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  short TEXT NOT NULL DEFAULT '',
  tagline TEXT NOT NULL DEFAULT '',
  size TEXT NOT NULL DEFAULT '',
  description JSONB NOT NULL DEFAULT '[]'::jsonb,
  benefits JSONB NOT NULL DEFAULT '[]'::jsonb,
  facts JSONB NOT NULL DEFAULT '[]'::jsonb,
  ingredients JSONB NOT NULL DEFAULT '[]'::jsonb,
  use TEXT NOT NULL DEFAULT '',
  image_key TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'active',
  featured_in_hero BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read active products"
  ON public.products FOR SELECT USING (status = 'active');
CREATE TRIGGER trg_products_updated BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =================== BLOG POSTS ===================
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  body JSONB NOT NULL DEFAULT '[]'::jsonb,
  takeaways JSONB NOT NULL DEFAULT '[]'::jsonb,
  author TEXT NOT NULL DEFAULT 'Franceshgrace',
  image_key TEXT NOT NULL DEFAULT '',
  read_minutes INTEGER NOT NULL DEFAULT 4,
  status TEXT NOT NULL DEFAULT 'published',
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT USING (status = 'published');
CREATE TRIGGER trg_blog_updated BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =================== INQUIRIES ===================
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  product_interest TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
-- Anyone can submit a new inquiry (via the public form)
CREATE POLICY "Anyone can submit inquiry"
  ON public.inquiries FOR INSERT WITH CHECK (true);
-- No public read — admin reads via service role only.

-- =================== SITE SETTINGS ===================
CREATE TABLE public.site_settings (
  key TEXT NOT NULL PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read site settings"
  ON public.site_settings FOR SELECT USING (true);
CREATE TRIGGER trg_settings_updated BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Default settings rows
INSERT INTO public.site_settings (key, value) VALUES
  ('contact_email', 'franceshgrace123@gmail.com'),
  ('footer_disclaimer', 'These statements have not been evaluated by health authorities. Our products are not intended to diagnose, treat, cure, or prevent any disease.'),
  ('instagram_url', ''),
  ('facebook_url', ''),
  ('linkedin_url', '');
