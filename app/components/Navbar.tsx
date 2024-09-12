import React, { FC } from "react";
import GradientText from "./GradientText";

interface IProps {}

const Navbar: FC<IProps> = (props) => {
  return (
    <nav className="absolute flex w-full justify-start px-8 py-6 sm:px-12 lg:w-fit xl:px-0">
      <div className="text-2xl tracking-tighter text-gray-200">
        Okoye
        <GradientText>Dev</GradientText>
      </div>
    </nav>
  );
};

export default Navbar;
