import React from "react";

const ProfileDescription = () => {
  return (
    <div className="flex flex-row justify-center w-[80%]">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          A Dedicated{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Full Stack Software Developer{" "}
          </span>{" "}
          Specializing in Cloud , Devops and Blockchains.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Currently immersed in my B.Tech journey at VIT Chennai, I anticipate
          graduating in 2025.
        </p>
        <br />
        <p className="text-lg">
          My professional identity is a unique blend of being a{" "}
          <span className="text-blue-600 dark:text-blue-500">
            tech developer
          </span>{" "}
          {
            "  and a enthusiast , a versatile individual with a knack for networking,  community building, and event organization. I've had the privilege of  sharing my insights at various events and workshops as a speaker &  host, collaborating with industry giants like Polygon Labs and Lumos  Labs."
          }
        </p>
        <br />
        <p className="text-lg">
          In the dynamic world of startups, I&lsquo;ve not only expressed my love for
          innovation but actively contributed to building some remarkable
          ventures while working alongside visionary founders. My freelancing
          experience has further honed my skills and provided a diverse range of
          challenges.
        </p>
        <br />
        <p className="text-lg">
          Beyond my technical prowess, I pride myself on being a strong-minded
          individual, capable of getting the job done efficiently. I thrive in
          multitasking, handling even the most challenging work with a
          stress-free demeanor, always giving my best. As an extrovert with
          excellent communication skills, I find great interest in
          entrepreneurship, making meaningful connections in the process.
        </p>
      </div>
    </div>
  );
};

export default ProfileDescription;
