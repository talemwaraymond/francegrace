export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-2xl tracking-tight ${className}`}>
      <span className="text-foreground">Frances</span>
      <span className="italic text-gold">hgrace</span>
    </span>
  );
}
