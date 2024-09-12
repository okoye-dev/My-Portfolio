import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BubbleProps {
  variant?: string;
  children?: ReactNode;
  className?: string;
  wide?: boolean;
  nowrap?: boolean;
}

const Bubble: FC<BubbleProps> = ({
  variant,
  children,
  wide,
  nowrap,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center rounded-3xl px-10 py-6 text-sm text-black duration-300 sm:text-base md:rounded-[2rem] md:px-16 md:py-10 lg:text-[18px]",
        variant == "wordy"
          ? "bg-white"
          : variant == "single" && "bg-white leading-4 sm:leading-[18px]",
        wide && "w-full",
        nowrap && "text-nowrap",
        className,
      )}
    >
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default Bubble;
