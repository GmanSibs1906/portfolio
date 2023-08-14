import React from "react";

function RightDetailsContainer({ icon, name, details }) {
  return (
    <div className="flex items-center mt-[10px]">
      <div className="skills-container">
        <div className=" school-container bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 ">
          <div className=" flex justify-center items-center absolute h-[52px] w-[52px] rounded-[50%] z-[10] bg-white ">
            <div className=" logo-container ">
              <img src={icon} alt="" className=" school-logo " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[10px]">
        <div className="font-bold text-[14px]">{name}</div>
        <div className=" text-[12px] text-slate-600">{details}</div>
      </div>
    </div>
  );
}

export default RightDetailsContainer;
