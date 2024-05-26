import { skillSets } from "@/app/config/constants";
import React from "react";

const Skills = () => {
  return (
    <dl className="w-[80%] text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 text-center">
      <div className="flex flex-row justify-center">
      <h1 className="flex items-center text-9xl font-extrabold dark:text-white text-center">
        BUILD
        <span className="text-center bg-blue-100 text-blue-800 text-6xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          WITH ME
        </span>
      </h1>
      </div>
<br/><br/>
      {skillSets.map((item: SkillSet, k: number) => {
        return (
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-blue-600 dark:text-blue-500 md:text-lg ">
              {" "}
              {item.genre}{" "}
            </dt>
            <dd className="text-lg font-semibold">{item.stack}</dd>
          </div>
        );
      })}
    </dl>
  );
};

export default Skills;
