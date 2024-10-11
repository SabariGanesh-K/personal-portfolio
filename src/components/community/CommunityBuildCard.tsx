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
    <div className="w-[95%] md:w-full">
      <h1 className=" text-3xl md:text-5xl text-center font-extrabold dark:text-white">
        Conducted National Level  Hackathon DeFy’24
      </h1>

      <h2 className="text-2xl md:text-4xl  text-center font-bold dark:text-white">
        Recordbreaking event ever in My University
      </h2>
      <h2 className="text-2xl   text-center font-bold dark:text-white">
        “Web3 x Business” mission - Create web3 product with Business aspects
      </h2>
      <br/><br/>

      <Carousel slides={SLIDESDEFY} options={OPTIONS} />
      <br/><br/>

      <div className="w-full  flex flex-row justify-center">
      <div className="md:w-[80%] ">
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            From joining as a community member , to organizing a National Level
            Hackathon with DAO Community VIT Chennai as a lead organizer
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Being in this Fintech , Crypto industry for a while , I really wanted to shape
            the way things work.The way devs analyse ,solutions are built
            ,innovation being not just on coding,but also solving actual
            problems.Building in multiple hackathons,we realized one thing :-
            Nobody cares on the projects built once those x hours of coding
            period ends.We decided to change this ,transform the way Builders
            think and shift their perspectives towards having a long term
            vision. Thats when , DeFy was born.The place where crypto met
            business.{" "}
          </p>{" "}
          <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {" "}
            The collab between DAO Community VIT Chennai & Business Innovation
            Community (BIC) combined the power of  technology and
            entrepreneurship paving way for the most unique hackathon ever
            conducted at VIT.We ensured participants didn&apos;t just code a solution
            , but thought broad enough to build a great tech product that can
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
      <h1 className=" text-3xl md:text-5xl text-center font-extrabold dark:text-white">
        PRESIDENT + TECH FACILITATOR{" "}
      </h1>

      <h2 className="text-2xl   text-center font-bold dark:text-white">
        DAO Community VIT Chennai
      </h2>
      <h2 className="text-2xl   text-center font-bold dark:text-white">
        FLAGBEARER OF VIT CHENNAI's FINTECH CRYPTO CULTURE &apos;
      </h2>
      <br/><br/>

      <Carousel slides={SLIDESDAO} options={OPTIONS} />
      <br/><br/>

      <div className="flex flex-row justify-center">
        <div className="md:w-[80%] ">
          <p className="mt-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          I wanted to build something of my own to make a mark and legacy behind in my college .
           That's when I got an opportunity to join a newly started club just 2 days after it was  founded by seniors  
           called DAO Community . From joining as a member , just in the first year I got the opportunity to become the
            president directly . 
            </p>
            <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            I saw the potential in the club , I saw the limitations that were holding it down, and took
             a chance to pitch myself and grabbed this opportunity. Despite being a fresher , I decided to jump all in with 
             no experience but passion to build my legacy.
             </p>
             <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Despite it having a lot of starting troubles due to approval issues which almost resulted in  club  suspension , 
          I solved it and  scaled it to a very next level by concentrating on 2 major things ,Recruiting right people
           and aggressive outreach with the industry  . We conducted back to back  events starting just  from 10-12 participants
             and ended up conducting a flagship hackathon called DeFy'24 which created  the record of 
             "The most sponsored Hackathon in the history of VIT" with participants around India and not just VIT. 
             </p>
             <p className="mt-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
           We also have our own integrated Zero
            knowledge cryptography app that helps for voting and nominating facilitators democratically and anonymously 
            built on Polygon.I was part of the tech team as well building the main DAO
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityBuildCarousel;
