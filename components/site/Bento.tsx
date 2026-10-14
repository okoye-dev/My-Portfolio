import type { CSSProperties } from "react";
import { cn } from "@/utils";

const TONES = {
  deep: "bg-paper-deep text-ink",
  cream: "bg-cream text-ink border border-ink/10",
  ink: "bg-ink text-paper",
  accent: "bg-accent text-paper",
  sage: "bg-[#CBCDB0] text-ink",
  clay: "bg-[#DDC3A3] text-ink",
};

type Tone = keyof typeof TONES;

type Kind = "word" | "numeral" | "corner";

interface Tile {
  /** What the tile shows: one big word, one big number, or a quiet corner label */
  kind: Kind;
  /** Bigger type for large tiles */
  large?: boolean;
  /** Spans on phones and tablets (the grid flows by itself there) */
  span: string;
  /** Position on large screens: row start, column start, row end, column end (6 columns, 5 rows) */
  area: [number, number, number, number];
  tone: Tone;
  big?: boolean;
}

/**
 * A 6 by 5 grid on large screens with one big tile in the middle (columns 3 and 4,
 * rows 2 to 4) and tiles of every other size around it.
 */
const TILES: Tile[] = [
  { kind: "numeral", span: "row-span-2", area: [1, 1, 3, 2], tone: "deep" },
  { kind: "word", span: "", area: [1, 2, 2, 3], tone: "clay" },
  { kind: "corner", span: "col-span-2", area: [1, 3, 2, 5], tone: "cream" },
  { kind: "word", large: true, span: "col-span-2 row-span-2", area: [1, 5, 3, 7], tone: "sage" },
  { kind: "corner", span: "", area: [2, 2, 3, 3], tone: "deep" },
  { kind: "word", large: true, span: "col-span-2", area: [3, 1, 4, 3], tone: "sage" },
  { kind: "numeral", span: "", area: [3, 5, 4, 6], tone: "clay" },
  { kind: "word", large: true, span: "col-span-2 row-span-2", area: [2, 3, 5, 5], tone: "ink", big: true },
  { kind: "word", span: "row-span-2", area: [3, 6, 5, 7], tone: "accent" },
  { kind: "numeral", span: "", area: [4, 1, 5, 2], tone: "cream" },
  { kind: "corner", span: "row-span-2", area: [4, 2, 6, 3], tone: "clay" },
  { kind: "word", span: "", area: [4, 5, 5, 6], tone: "deep" },
  { kind: "corner", span: "", area: [5, 1, 6, 2], tone: "sage" },
  { kind: "word", large: true, span: "col-span-2", area: [5, 3, 6, 5], tone: "deep" },
  { kind: "numeral", span: "col-span-2", area: [5, 5, 6, 7], tone: "cream" },
];

/** Turn the layout half a turn, so a second grid on the same page looks different. */
function turn([rs, cs, re, ce]: Tile["area"]): Tile["area"] {
  return [7 - re, 8 - ce, 7 - rs, 8 - cs];
}

export default function Bento({
  labels,
  startAt = 1,
  turned = false,
}: {
  labels: string[];
  startAt?: number;
  turned?: boolean;
}) {
  return (
    <ul className="grid auto-rows-[8.5rem] grid-flow-dense grid-cols-2 gap-2.5 sm:auto-rows-[10rem] md:auto-rows-[11.5rem] md:grid-cols-4 md:gap-3 lg:auto-rows-[10.5rem] lg:grid-cols-6 xl:auto-rows-[13rem]">
      {TILES.map((t, i) => {
        const [rs, cs, re, ce] = turned ? turn(t.area) : t.area;
        const label = labels[i] ?? "Coming soon";
        const num = String(startAt + i).padStart(2, "0");
        const words = cn(
          "font-display font-light leading-[1.02] tracking-[-0.02em] text-balance",
          t.large
            ? "text-[clamp(1.75rem,3.2vw,3.25rem)]"
            : "text-[clamp(1.2rem,1.9vw,1.9rem)]",
        );
        return (
          <li
            key={i}
            style={{ "--area": `${rs}/${cs}/${re}/${ce}` } as CSSProperties}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[1.5rem] p-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[0.985] md:rounded-[1.75rem] md:p-6 lg:[grid-area:var(--area)]",
              t.span,
              TONES[t.tone],
              t.kind === "corner" ? "justify-between" : "items-center justify-center text-center",
            )}
          >
            {t.kind === "word" && !t.big && <span className={words}>{label}</span>}

            {t.kind === "numeral" && !t.big && (
              <>
                <span
                  className={cn(
                    "font-num font-extralight leading-none",
                    t.large
                      ? "text-[clamp(3.5rem,7vw,7rem)]"
                      : "text-[clamp(2.5rem,4.2vw,4.5rem)]",
                  )}
                >
                  {num}
                </span>
                <span className="mt-2 text-[0.75rem] opacity-60 md:text-[0.85rem]">
                  {label}
                </span>
              </>
            )}

            {t.kind === "corner" && !t.big && (
              <>
                <span className="text-[0.8rem] opacity-70 md:text-[0.9rem]">
                  {label}
                </span>
                <span className="self-end font-num text-xl font-extralight opacity-60 md:text-3xl">
                  {num}
                </span>
              </>
            )}

            {t.big && (
              <>
                <span className="absolute left-4 top-4 text-[0.9rem] opacity-70 md:left-6 md:top-6 md:text-base">
                  {label}
                </span>
                <span className="font-display text-[clamp(2rem,4vw,4rem)] font-light italic leading-none tracking-[-0.03em] opacity-90">
                  The centrepiece
                </span>
                <span className="absolute bottom-4 right-4 font-num text-4xl font-extralight opacity-60 md:bottom-6 md:right-6 md:text-6xl">
                  {num}
                </span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
