import React, { FC } from "react";
import GradientText from "./GradientText";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = (props) => {
  return (
    <section className="flex min-h-screen pt-40">
      <GradientText
        purple
        className="flex w-full justify-center py-6 pb-12 pl-8 pr-1 text-5xl sm:pl-12 lg:w-fit lg:text-6xl xl:pl-0"
      >
        Technologies
      </GradientText>
    </section>
  );
};

export default Technologies;
