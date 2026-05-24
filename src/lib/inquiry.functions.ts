import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const InquirySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(200).optional().default(""),
  country: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  product_interest: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => InquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("inquiries").insert(data);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
