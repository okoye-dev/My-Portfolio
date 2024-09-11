import React, { FC } from "react";

interface IProps {}

const Navbar: FC<IProps> = (props) => {
  return (
    <nav className="flex absolute w-full justify-start py-6 px-8">
      <div className="text-2xl tracking-tighter text-gray-200">
        Okoye
        <span className="bg-gradient-to-tr from-purple-400 to-orange-500 bg-clip-text font-bold text-transparent">
          Dev
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
