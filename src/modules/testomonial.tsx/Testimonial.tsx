import Image from "next/image";
import Link from "next/link";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            &ldquo; Amidst the rush of curious minds and exciting stories, we are
            excited to share the story of Sabari Ganesh, a newbie Web3 developer
            who has been at the forefront of Web3 development and is a student
            at VIT Chennai. Sabari takes us on his Web3 journey that began with
            research on Dogecoin and cryptocurrencies to learn all about
            blockchain. His interest intensified with a desire to mint an NFT to
            impress his crush. This led to Sabari creating.....&ldquo;
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
           <Link href=""><cite className="pe-3 font-medium text-gray-900 dark:text-white">
              Read Full Story in Medium Today ➡️
            </cite></Link> 
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
              By Lumos Labs
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonial;
