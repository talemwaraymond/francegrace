import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-emerald-deep text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo className="!text-cream" />
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Wellness backed by nature and science. Premium supplements crafted with intention.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Products</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link to="/products" className="hover:text-gold">All Products</Link></li>
              <li><Link to="/products" className="hover:text-gold">Immune Support</Link></li>
              <li><Link to="/products" className="hover:text-gold">Heart & Brain</Link></li>
              <li><Link to="/products" className="hover:text-gold">Stress & Sleep</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Journal</Link></li>
              <li><Link to="/distributor" className="hover:text-gold">Become a Distributor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /><span>franceshgrace123@gmail.com</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-8">
          <p className="text-xs italic text-cream/60">
            These statements have not been evaluated by health authorities. These products are not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cream/50">
            <span>© {new Date().getFullYear()} Franceshgrace. All rights reserved.</span>
            <Link to="/admin/login" className="text-cream/50 hover:text-gold">Admin Sign In</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
