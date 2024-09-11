"use client";
import React, { FC } from "react";
import Button from "./Button";

interface IProps {}

const Hero: FC<IProps> = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 px-10">
      <h1 className="text-center text-4xl font-bold text-white sm:max-w-lg lg:max-w-2xl lg:text-6xl">
        Software Development as an art, a{" "}
        <span className="relative pl-3 text-purple-700">
          {" "}
          <span className="absolute -z-10 h-6 w-40 -translate-x-1 translate-y-2 -rotate-[5deg] skew-x-[20deg] rounded-xl bg-gradient-to-tr from-cyan-200 to-indigo-400"></span>
          process
        </span>
      </h1>
      <p className="max-w-2xl text-center lg:text-lg">
        <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent lg:text-xl">
          Okoye Divine
        </span>{" "}
        is a passionate, detail-oriented Software Engineer that's been building
        and tinkering with apps for over 3 years.
      </p>
      <div>
        <Button text="Resume" />
      </div>
    </div>
  );
};

export default Hero;
