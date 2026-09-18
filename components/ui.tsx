import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 md:px-8 ${wide ? "max-w-7xl" : "max-w-6xl"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
      {children}
    </p>
  );
}

export function PreviewBadge({
  children = "PRODUCT PREVIEW",
}: {
  children?: ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-nivo-gold/30 bg-nivo-gold/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-nivo-gold-bright">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-[#f4f7ff] md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
