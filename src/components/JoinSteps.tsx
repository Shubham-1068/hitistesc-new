import React from "react";
import customStyles from "@/styles/customStyles";

interface JoinStepsProps {
  number: string;
  text: string;
}
export default function JoinSteps({ number, text }: JoinStepsProps) {
  return (
    <div className={`${customStyles.flexCenter} flex-row cursor-default`}>
      <div
        className={`${customStyles.flexCenter} md:h-[60px] md:w-[60px] h-[45px] w-[45px] claymorphism hover:bg-slate-800`}
      >
        <p className="md:text-[16px] text-[13px] font-bold text-gray-400 pointer-events-none flex justify-center items-center">
          {number}
        </p>
      </div>
      <p className="ml-[30px] mt-4 flex-1 md:text-[17px] text-base leading-[24px] text-[#B0B0B0] cursor-default">
        {text}
      </p>
    </div>
  );
}
