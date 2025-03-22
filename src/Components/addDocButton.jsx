import React, { useState } from 'react'

import Lottie from "lottie-react";
import magicBookanimation from "../animations/magicBookanimation.json";
import { BsPlusCircleDotted } from "react-icons/bs";
import UploadCard from './UploadCard';

function AddDocButton() {
    const [magicBookAnimation, setMagicBookAnimation] = useState(false);
    const [seeUploadCard, setSeeUploadCard] = useState(false)
  return (<>
  <div>
      <div
        onClick={() => setMagicBookAnimation(true)}
        className="cursor-pointer flex flex-wrap w-fit h-fit absolute bottom-6 left-1/2 -translate-x-1/2 text-[40px] text-emerald-500 shadow-violet-300 p-2 shadow-md active:shadow-zinc-800 active:scale-95 transition-all z-10 bg-zinc-800 duration-300"
      >
        <BsPlusCircleDotted />
        
      </div>
      {magicBookAnimation && (
        <Lottie
          className="w-30% h-[30%] absolute bottom-0 left-1/2 -translate-x-1/2 z-50"
          animationData={magicBookanimation}
          loop={false}
          speed={2}
          onComplete={() => {setSeeUploadCard(true), setMagicBookAnimation(false)}} // Hides after playing
        />
      )}
      </div>
      {seeUploadCard && (<UploadCard onClose={() => setSeeUploadCard(false)}/>)}
      
  </>
    
  )
}

export default AddDocButton