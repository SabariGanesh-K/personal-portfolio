import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import Image from "next/image";
export const MarqueeImgs = ({slides}:{slides:string[]}) => (
  <Marquee>
    {slides.map((item:string,k:number)=>{
        return(
            <Image
            key = {k}
            className="mr-2 ml-2"
                width={300}
                height={200}
                alt="NextUI hero Image with delay"
                src={item}
              />
        )

    })}

  </Marquee>
);