"use client";
import React, { FC } from "react";
import Button from "./Button";
import GradientText from "./GradientText";

interface IProps {}

const Hero: FC<IProps> = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 px-10">
      <small className="flex translate-y-3 items-center rounded-lg bg-white/10 px-2 py-1 text-[8px] opacity-80 sm:text-xs">
        BUILDING THINGS THAT MATTER
      </small>
      <h1 className="w-full text-balance text-center text-3xl font-bold leading-8 text-white sm:max-w-lg sm:text-nowrap sm:text-4xl md:text-5xl lg:max-w-2xl lg:text-6xl">
        Software Development <br className="hidden sm:flex" />
        as an art, a
        <GradientText purple className="pl-2">
          Process.
        </GradientText>
      </h1>
      <p className="max-w-2xl text-balance text-center text-sm sm:text-lg">
        <GradientText className="pr-1 text-lg lg:text-xl">
          Okoye Divine
        </GradientText>
        is a passionate, detail-oriented Software Engineer{" "}
        <br className="hidden sm:flex" /> that's been buillding and tinkering
        with apps for over 3 years.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button>Github</Button>
        <Button variant="light">Resume</Button>
      </div>
    </div>
  );
};

export default Hero;
