import Link from "next/link";
import { cn } from "@/utils";
import Arrow from "./Arrow";

interface IProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

export default function Pill({
  href,
  children,
  variant = "solid",
  className,
}: IProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] transition-colors duration-500",
        variant === "solid"
          ? "bg-ink text-paper hover:bg-accent"
          : "border border-ink/20 text-ink hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
      <Arrow className="h-[0.7em] w-[0.7em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
