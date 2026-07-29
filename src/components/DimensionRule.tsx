type DimensionRuleProps = {
  label?: string;
  className?: string;
};

// A divider styled like a dimension line on a technical drawing — tick
// marks at each end, an optional measurement-style label in the middle.
// Used throughout the site as the section separator instead of a plain
// hairline, since the studio's whole identity is drafting/engineering.
export default function DimensionRule({ label, className = "" }: DimensionRuleProps) {
  return (
    <div className={`relative flex items-center gap-4 ${className}`} aria-hidden="true">
      {/* Left tick mark */}
      <span className="relative h-3 w-px bg-blueprint/30 rotate-12" />
      
      {/* Left line */}
      <span className="h-px flex-1 bg-gradient-to-r from-blueprint/30 via-blueprint/10 to-transparent" />
      
      {label && (
        <span className="relative font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-blueprint/50 whitespace-nowrap px-2">
          {label}
        </span>
      )}
      
      {/* Right line */}
      <span className="h-px flex-1 bg-gradient-to-l from-blueprint/30 via-blueprint/10 to-transparent" />
      
      {/* Right tick mark */}
      <span className="relative h-3 w-px bg-blueprint/30 -rotate-12" />
    </div>
  );
}