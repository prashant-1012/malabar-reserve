/**
 * Paper grain overlay. Turns a flat fill into something that reads as paper.
 *
 * Drop inside any `relative` section, before the content. Server component —
 * it's one div, no JS.
 *
 * Opacity guidance: 0.035 on cream, 0.05 on forest/dark (dark surfaces swallow
 * noise), 0.025 on white.
 */
export default function Grain({
  opacity = 0.035,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`bg-grain pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{ opacity }}
    />
  );
}
