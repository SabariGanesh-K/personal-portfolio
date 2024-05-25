import { VictoryItems } from "@/app/config/constants";
import EpicVictoryBox from "@/components/epics/epicVictory";
import React from "react";

const EpicVictories = () => {
  return (
    <div>
        {VictoryItems.map((item:Victory,k:number)=>{
            return(
                <EpicVictoryBox                 key={k} victory={item}/>
            )
        })}
    </div>

  );
};

export default EpicVictories;
