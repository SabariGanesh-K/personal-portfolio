import { SLIDESPOLYGON, SLIDESTECHSPEAK } from "@/app/config/constants";
import { MarqueeImgs } from "@/components/carousel/Carousel";
import React from "react";

const EpicHighlights = () => {
  return (
    <div >
      <h1 className="mb-4 text-4xl sm:text-center md:text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {"ADVOCATE  "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          @Polygon
        </span>
      </h1>
      <MarqueeImgs slides  ={SLIDESPOLYGON} />
      <br/><br/>
      <h1 className="mb-4 text-4xl sm:text-center md:text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {"TECH   "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          SPEAKER 
        </span>
      </h1>
      <MarqueeImgs slides={SLIDESTECHSPEAK} />
    </div>
  );
};

export default EpicHighlights;
