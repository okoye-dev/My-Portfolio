import React, { FC } from "react";
import GradientText from "./GradientText";
import Bubble from "./Bubble";

interface IProps {}

const Timeline: FC<IProps> = (props) => {
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-[3rem] border border-gray-600 bg-gradient-to-br from-indigo-600/10 p-10">
      <GradientText
        purple
        className="flex w-full justify-center pb-8 pr-1 text-4xl sm:pb-10 sm:text-5xl lg:text-6xl"
      >
        Timeline
      </GradientText>
      <div className="flex flex-col gap-1 duration-300 sm:flex-row">
        <Bubble
          wide
          className="max-w-[14rem] border border-gray-600 bg-transparent sm:max-w-[17rem]"
        >
          <GradientText className="text-2xl sm:text-3xl">
            Starting Off...
          </GradientText>
        </Bubble>
        <Bubble wide variant={"wordy"}>
          <div className="md:text-lg">
            ..dabbling in <strong>Data Science</strong> back in{" "}
            <strong>2021</strong>, he soon pivoted to{" "}
            <strong>Software Development</strong>, and hasn't looked back since.
          </div>
        </Bubble>
      </div>
      <div className="flex w-full gap-1 pt-1">
        <Bubble
          variant={"single"}
          className="max-w-[10rem] px-6 font-bold text-gray-700"
        >
          Data <br />
          Science.
        </Bubble>
        <Bubble
          variant={"single"}
          wide
          nowrap
          className="bg-gradient-to-tr from-purple-400 to-orange-500/60 font-bold text-white"
        >
          Front-End <br className="sm:hidden" />
          Engineer.
        </Bubble>
        <Bubble
          variant={"single"}
          wide
          className="absolute right-12 max-w-60 translate-y-[5.25rem] bg-gradient-to-tr from-purple-400 text-gray-800 sm:relative sm:right-0 sm:translate-y-0"
        >
          <strong className="">
            FullStack <br /> Engineer.
          </strong>
        </Bubble>
      </div>
      <Bubble
        nowrap
        className="mt-28 border border-gray-600 bg-gradient-to-tr from-purple-400/30 text-base font-bold tracking-tighter text-gray-300 sm:mt-10 sm:text-2xl lg:text-3xl"
      >
        <ul className="flex gap-3 sm:gap-5">
          <li> Aug. 2021</li>
          <li>--</li>
          <li>Sept. 2024</li>
        </ul>
      </Bubble>
    </section>
  );
};

export default Timeline;
