"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "@/config/site";
import { cn } from "@/utils";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // The page behind the menu reads this to slide aside and stop scrolling.
  useEffect(() => {
    document.documentElement.dataset.menu = open ? "open" : "closed";
    return () => {
      delete document.documentElement.dataset.menu;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Close after navigating to another page.
  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-paper/70 px-5 py-4 backdrop-blur-xl md:px-10 xl:px-16">
        <Link
          href="/"
          className="text-[1.15rem] leading-none tracking-tight text-ink"
          aria-label={`${SITE.name}, home`}
        >
          Okoye{" "}
          <span className="font-display text-[1.25em] font-light italic">
            Divine
          </span>
          .
        </Link>

        <div className="flex items-center gap-8">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 text-[0.95rem] md:flex"
          >
            {SITE.nav.slice(1, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="group relative z-50 grid h-11 w-11 place-items-center rounded-full bg-ink text-paper transition-colors duration-500 hover:bg-accent"
          >
            <span
              className={cn(
                "absolute flex gap-1 transition-all duration-500",
                open ? "scale-50 opacity-0" : "group-hover:gap-1.5",
              )}
            >
              <i className="h-1 w-1 rounded-full bg-current" />
              <i className="h-1 w-1 rounded-full bg-current" />
            </span>
            <span
              className={cn(
                "absolute h-4 w-4 transition-all duration-500",
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
              )}
            >
              <i className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
              <i className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <aside
        id="site-menu"
        aria-label="Menu"
        className={cn(
          "fixed inset-y-0 right-0 z-30 flex w-full flex-col justify-between bg-cream px-6 pb-8 pt-28 transition-[transform,visibility] duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] md:w-[64vw] md:px-16 md:pb-12 xl:px-24",
          open ? "visible translate-x-0" : "invisible translate-x-full",
        )}
      >
        <nav aria-label="Menu" className="flex flex-1 items-center">
          <ul className="flex flex-col gap-2 md:gap-3">
            {SITE.nav.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));
              return (
                <li
                  key={item.href}
                  className="overflow-hidden"
                  style={{ transitionDelay: `${open ? 150 + i * 60 : 0}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "group flex items-baseline gap-4 py-0.5 md:gap-6 transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
                      open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                    style={{ transitionDelay: `${open ? 150 + i * 60 : 0}ms` }}
                  >
                    <span className="w-8 shrink-0 font-num text-xs font-extralight text-ink-soft md:w-10 md:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-[length:clamp(3rem,min(11vw,10vh),8.5rem)] font-light leading-[1.02] tracking-[-0.03em] transition-colors duration-300 group-hover:italic group-hover:text-orange",
                        active ? "italic text-accent" : "text-ink",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-end justify-between gap-6 text-[0.95rem]">
          <a
            href={`mailto:${SITE.email}`}
            className="text-orange-deep transition-colors hover:text-orange"
          >
            {SITE.email}
          </a>
          <ul className="flex flex-col items-end gap-1 text-ink-soft">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-orange"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
