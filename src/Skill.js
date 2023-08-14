import React from "react";

function Skill({ logo, name }) {
  return (
    <div className="skills-container">
      <div className=" grad-container bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 ">
        <div className=" flex justify-center items-center absolute h-[72px] w-[72px] rounded-[50%] z-[10] bg-white ">
          <div className=" logo-container ">
            <img src={logo} alt="" className=" skills-logo " />
          </div>
        </div>
      </div>
      <div className="">{name}</div>
    </div>
  );
}

export default Skill;
