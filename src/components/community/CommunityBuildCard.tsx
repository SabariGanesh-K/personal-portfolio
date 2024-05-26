"use client";

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./styles/embla.css";
import { SLIDESDAO, SLIDESDEFY } from "@/app/config/constants";
const CommunityBuildCarousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold dark:text-white">
        Conducted National Level web3 Hackathon DeFy’24
      </h1>

      <h2 className="text-4xl  text-center font-bold dark:text-white">
        Recordbreaking event ever in My University
      </h2>
      <h2 className="text-4xl   text-center font-bold dark:text-white">
        “Web3 x Business” mission - Create web3 product with Business aspects
      </h2>
      <br/><br/>

      <Carousel slides={SLIDESDEFY} options={OPTIONS} />
      <br/><br/>

      <div className="flex flex-row justify-center">
        <div className="w-[90%] ">
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            From joining as a community member , to organizing a National Level
            Hackathon with DAO Community VIT Chennai as a lead organizer
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Being in this web3 industry for a while , I really wanted to shape
            the way things work.The way devs analyse ,solutions are built
            ,innovation being not just on coding,but also solving actual
            problems.Building in multiple hackathons,we realized one thing :-
            Nobody cares on the projects built once those x hours of coding
            period ends.We decided to change this ,transform the way Builders
            think and shift their perspectives towards having a long term
            vision. Thats when , DeFy was born.The place where web3 met
            business.{" "}
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {" "}
            The collab between DAO Community VIT Chennai & Business Innovation
            Community (BIC) combined the power of WEB3 technology and
            entrepreneurship paving way for the most unique hackathon ever
            conducted at VIT.We ensured participants didn&apos;t just code a solution
            , but thought broad enough to build a great Web3 product that can
            come out as startup.{" "}
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            And the speaker series of DeFy,where we brought the Co-Founder of
            WazirX - Siddharth Menon ,& many more added significant value to
            DeFy experience. From Ideating event & raising sponsorships to
            marketing all over India with our 40+ onboarded partners was such a
            wonderful experience. Hosting such a very niche hackathon with
            limited builders was not easy , but the determination showed by my
            team was excellent.{" "}
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            The budget a national wide hackathon demanded was huge for us.Still
            we achieved a significant milestone making DeFy&apos;24 most sponsored
            club-led hackathon in the history of VIT Chennai.
          </p>
        </div>
      </div>
      <br/><br/>
      <h1 className="text-5xl  text-center  font-extrabold dark:text-white">
        PRESIDENT + TECH FACILITATOR{" "}
      </h1>

      <h2 className="text-4xl   text-center font-bold dark:text-white">
        DAO Community VIT Chennai
      </h2>
      <h2 className="text-4xl  text-center  font-bold dark:text-white">
        FLAGBEARER OF VIT CHENNAI &apos;S WEB3 FLAGBEARER OF VIT CHENNAI &apos;S WEB3
        CULTURE
      </h2>
      <br/><br/>

      <Carousel slides={SLIDESDAO} options={OPTIONS} />
      <br/><br/>

      <div className="flex flex-row justify-center">
        <div className="w-[70%] ">
          <p className="mt-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            I managed a blockchain community as a president/overall facilitator
            at my College VIT Chennai with Hundreds of enthusiasts. Thi
            highlight is it is run by a DAO .As name goes we are building a real
            DAO with decentralized proposals, leaderboard,points-to-token system
            and more with our own governance and tokens all for a first time in
            a level of University.. We also have our own integrated Zero
            knowledge app that helps for voting and nominating facilitators
            built on Polygon.I am part of the tech team as well building the
            main DAO
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityBuildCarousel;
