-- 1) site_settings: restrict public SELECT to non-sensitive keys
DROP POLICY IF EXISTS "Public can read site settings" ON public.site_settings;

CREATE POLICY "Public can read non-sensitive site settings"
ON public.site_settings
FOR SELECT
TO public
USING (key IN ('footer_disclaimer', 'instagram_url', 'facebook_url', 'linkedin_url'));

-- 2) inquiries: replace permissive insert policy with a validating one
DROP POLICY IF EXISTS "Anyone can submit inquiry" ON public.inquiries;

CREATE POLICY "Anyone can submit valid inquiry"
ON public.inquiries
FOR INSERT
TO public
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 200
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 320
  AND length(coalesce(message, '')) <= 5000
  AND length(coalesce(company, '')) <= 200
  AND length(coalesce(country, '')) <= 100
  AND length(coalesce(phone, '')) <= 50
  AND length(coalesce(product_interest, '')) <= 200
  AND is_read = false
);