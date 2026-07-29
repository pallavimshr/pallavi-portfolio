// The signature element: an isometric schematic that draws itself in on
// load, like a technical drawing being plotted. Pure CSS animation via
// pathLength=1 + stroke-dasharray, so no client JS is required and it
// respects prefers-reduced-motion (handled globally in globals.css).
export default function BlueprintHero() {
  const lineStyle = (delayMs: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: 1,
    animation: `draw 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delayMs}ms forwards`,
  });

  return (
    <svg
      viewBox="0 0 480 360"
      className="h-auto w-full max-w-xl text-blueprint"
      role="img"
      aria-label="Isometric schematic diagram of a product taking shape from wireframe to solid form"
    >
      {/* Coordinate grid ticks - softer appearance */}
      <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.8">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1={0} x2={i * 60} y2={360} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 60} x2={480} y2={i * 60} />
        ))}
      </g>

      {/* Corner bracket accents */}
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none">
        <path d="M20 20 L60 20 L60 24" />
        <path d="M20 20 L20 60 L24 60" />
        <path d="M460 20 L420 20 L420 24" />
        <path d="M460 20 L460 60 L456 60" />
        <path d="M20 340 L60 340 L60 336" />
        <path d="M20 340 L20 300 L24 300" />
        <path d="M460 340 L420 340 L420 336" />
        <path d="M460 340 L460 300 L456 300" />
      </g>

      {/* Isometric cube — wireframe, drawn stroke by stroke */}
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path 
          pathLength={1} 
          style={lineStyle(0)} 
          d="M240 90 L340 145 L340 255 L240 310 L140 255 L140 145 Z" 
        />
        <path 
          pathLength={1} 
          style={lineStyle(250)} 
          d="M140 145 L240 200 L340 145" 
        />
        <path 
          pathLength={1} 
          style={lineStyle(400)} 
          d="M240 200 L240 310" 
        />
      </g>

      {/* Subtle glow effect for the cube */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M240 90 L340 145 L340 255 L240 310 L140 255 L140 145 Z" />
      </g>

      {/* Node markers at each vertex - with size variation */}
      <g fill="#F7F5F1" stroke="currentColor" strokeWidth="2">
        {[
          [240, 90],
          [340, 145],
          [340, 255],
          [240, 310],
          [140, 255],
          [140, 145],
          [240, 200],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 0 ? "5" : "4"}
            style={{ 
              opacity: 0, 
              animation: `fade-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${900 + i * 80}ms forwards` 
            }}
          />
        ))}
      </g>

      {/* Internal connection lines (subtle) */}
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4">
        {[
          [240, 90, 240, 200],
          [340, 145, 240, 200],
          [140, 145, 240, 200],
        ].map(([x1, y1, x2, y2], i) => (
          <line 
            key={`dash-${i}`}
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2}
            style={{ 
              opacity: 0, 
              animation: `fade-up 0.4s ease-out ${1200 + i * 100}ms forwards` 
            }}
          />
        ))}
      </g>

      {/* Dimension annotation - enhanced */}
      <g
        className="text-graphite"
        style={{ opacity: 0, animation: "fade-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1500ms forwards" }}
      >
        {/* Dimension line with tick marks */}
        <line x1="140" y1="330" x2="340" y2="330" stroke="currentColor" strokeWidth="1" />
        <line x1="140" y1="322" x2="140" y2="338" stroke="currentColor" strokeWidth="1" />
        <line x1="340" y1="322" x2="340" y2="338" stroke="currentColor" strokeWidth="1" />
        
        {/* Decorative end caps */}
        <circle cx="140" cy="330" r="1.5" fill="currentColor" />
        <circle cx="340" cy="330" r="1.5" fill="currentColor" />
        
        <text
          x="240"
          y="356"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="currentColor"
          letterSpacing="2.5"
          fontWeight="500"
          className="uppercase"
        >
          CONCEPT → SHIPPED
        </text>
      </g>

      {/* Small decorative element - compass rose */}
      <g
        style={{ opacity: 0, animation: "fade-up 0.4s ease-out 1700ms forwards" }}
        className="text-graphite/40"
        transform="translate(420, 50)"
      >
        <line x1="0" y1="-8" x2="0" y2="8" stroke="currentColor" strokeWidth="1" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="0" r="2" fill="currentColor" />
        <text
          x="0"
          y="-12"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="6"
          fill="currentColor"
          letterSpacing="0.5"
        >
          N
        </text>
      </g>
    </svg>
  );
}