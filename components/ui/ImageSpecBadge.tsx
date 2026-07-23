interface ImageSpecBadgeProps {
  label: string;
  ratio: string;
  size: string;
  format?: string;
  position?: "top" | "bottom";
}

/**
 * Temporary overlay shown on top of placeholder images so the client can see
 * exactly what replacement photo (dimensions/ratio/format) is needed for each spot.
 * Remove all usages (or set NEXT_PUBLIC_SHOW_IMAGE_SPECS=false) once real photos are in.
 */
export default function ImageSpecBadge({
  label,
  ratio,
  size,
  format = "JPG",
  position = "bottom",
}: ImageSpecBadgeProps) {
  if (process.env.NEXT_PUBLIC_SHOW_IMAGE_SPECS === "false") return null;

  const edge = position === "top" ? "top-0 border-b-2" : "bottom-0 border-t-2";

  return (
    <div className={`absolute ${edge} left-0 right-0 z-20 pointer-events-none border-gold bg-black/85 backdrop-blur-sm px-2.5 py-2`}>
      <p className="font-inter text-[10px] sm:text-[11px] leading-snug text-white">
        <span className="font-bold uppercase tracking-wide text-gold">Photo needed: </span>
        {label} &middot; {ratio} &middot; min {size}px &middot; {format}
      </p>
    </div>
  );
}
