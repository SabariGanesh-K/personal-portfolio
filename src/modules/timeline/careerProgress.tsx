import { careerItems } from "@/app/config/constants";
import CareerBox from "@/components/timeline/careerBox";
import React from "react";

const CareerProgress = () => {
  return (
    <ol
      
      className="w-[70%] relative border-s border-gray-200 dark:border-gray-700"
    >
      {careerItems.map((item: CareerItems, k: number) => {
        return (
          <CareerBox key={k} item={item} />
        );
      })}
    </ol>
  );
};

export default CareerProgress;
