import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface GradientTextProps {
  children: string;
  className?: string;
  purple?: boolean;
}

const GradientText: FC<GradientTextProps> = ({
  children,
  purple,
  className,
}) => {
  return (
    <span
      className={twMerge(
        "bg-gradient-to-tr from-purple-400 to-orange-500 bg-clip-text font-bold tracking-tighter text-transparent",
        purple && "from-purple-800 to-purple-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
