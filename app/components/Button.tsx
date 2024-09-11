import React, { FC } from "react";
import Image from "next/image";

interface ButtonProps {
  children: string;
  icon?: string;
  variant?: string;
}

const Button: FC<ButtonProps> = ({ children, icon, variant }) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-3 rounded-full py-1 pl-1 pr-5 ${variant == "light" ? "border-none bg-white/90 text-black" : "border bg-white/10 border-gray-600"}`}
    >
      <Image
        src={icon ?? ""}
        alt="download"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400"
      />
      <>{children}</>
    </button>
  );
};

export default Button;
