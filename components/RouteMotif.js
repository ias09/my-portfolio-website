// A small decorative motif: nodes connected by routed paths, standing in for
// a vehicle-routing network. Used once, in the hero — not repeated elsewhere.
export default function RouteMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 170 C 70 140, 90 90, 150 80 S 230 40, 260 30"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
      <path
        d="M20 170 C 60 190, 120 195, 160 160 S 260 150, 300 190"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
      <path
        d="M150 80 C 170 110, 190 130, 230 150"
        stroke="var(--gold)"
        strokeWidth="1.75"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
      {[
        [20, 170, "var(--indigo)"],
        [150, 80, "var(--ink)"],
        [260, 30, "var(--ink-faint)"],
        [160, 160, "var(--ink-faint)"],
        [300, 190, "var(--ink)"],
        [230, 150, "var(--gold)"],
      ].map(([cx, cy, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 5 ? 4.5 : 3.5} fill={fill} />
      ))}
    </svg>
  );
}
