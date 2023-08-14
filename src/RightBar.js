import React from "react";
import Sonny from "./images/sonny.jpg";
import Mosh from "./images/mosh.jpg";
import Bro from "./images/bro.png";
import Ninja from "./images/ninja.jpg";
import Melsoft from "./images/mel.png";
import Udemy from "./images/udemy.jpg";
import Edx from "./images/edx.png";
import Larreth from "./images/larreth.jpg";
import DetailsContainer from "./RightDetailsContainer";
import HtmlLogo from "./images/html.png";
import CssLogo from "./images/css.png";
import BootstrapLogo from "./images/Bootstrap.png";

function RightBar() {
  return (
    <div className="flex justify-end ">
      {/* DESKTOP */}
      <div class=" hidden lg:flex flex-col h-[100%] w-[21%] pt-[45px] bg-white pl-[10px] mb-[10px] ">
        {/* following */}
        <div className=" flex pl-[10px] text-[20px] font-display">
          Following
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex w-[100%] justify-between">
            <img src={Mosh} alt="" className=" w-[44%] object-contain " />
            <img src={Ninja} alt="" className=" w-[40%] object-contain " />
          </div>
          <div className="flex w-[100%] justify-between mt-[10px]">
            <img src={Bro} alt="" className=" w-[45%] object-contain " />
            <img src={Sonny} alt="" className=" w-[45%] object-contain " />
          </div>
        </div>
        <hr className="mt-[15px]" />

        {/* education */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          Education
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* melsoft */}
          <DetailsContainer
            icon={Melsoft}
            name={"Melsoft Academy"}
            details={" Full Stack Development"}
          />
          {/* udemy */}
          <DetailsContainer icon={Udemy} name={"Udemy"} details={"Html Css"} />
          {/* edx */}
          <DetailsContainer
            icon={Edx}
            name={"Edx"}
            details={"CS50 by Harvard"}
          />
        </div>
        <hr className="mt-[15px]" />

        {/* skils */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[25px]">
          Other Skills
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex w-[100%] justify-evenly">
            <img src={HtmlLogo} alt="" className=" w-[40px] object-contain " />
            <img src={CssLogo} alt="" className=" w-[40px] object-contain " />
            <img
              src={BootstrapLogo}
              alt=""
              className=" w-[40px] object-contain "
            />
          </div>
        </div>
        <hr className="mt-[15px]" />

        {/* references */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          References
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* larreth */}
          <DetailsContainer
            icon={Larreth}
            name={"Larreth Jimu"}
            details={"Founder Melsoft Academy"}
          />
        </div>
        <div className="flex text-[#ff5548] justify-center text-[14px] w-[100%] mt-[30px] ">
          Built using React Js By Gman®
        </div>
      </div>

      {/* TABLET */}
      <div class=" hidden md:flex lg:hidden flex-col h-[100%] w-[26%] pt-[45px] bg-white pl-[10px] mb-[10px] mt-[-2780px] ">
        {/* following */}
        <div className=" flex pl-[10px] text-[20px] font-display">
          Following
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex w-[100%] justify-between">
            <img src={Mosh} alt="" className=" w-[44%] object-contain " />
            <img src={Ninja} alt="" className=" w-[40%] object-contain " />
          </div>
          <div className="flex w-[100%] justify-between mt-[10px]">
            <img src={Bro} alt="" className=" w-[45%] object-contain " />
            <img src={Sonny} alt="" className=" w-[45%] object-contain " />
          </div>
        </div>
        <hr className="mt-[15px]" />

        {/* education */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          Education
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* melsoft */}
          <DetailsContainer
            icon={Melsoft}
            name={"Melsoft Academy"}
            details={" Full Stack Development"}
          />
          {/* udemy */}
          <DetailsContainer icon={Udemy} name={"Udemy"} details={"Html Css"} />
          {/* edx */}
          <DetailsContainer
            icon={Edx}
            name={"Edx"}
            details={"CS50 by Harvard"}
          />
        </div>
        <hr className="mt-[15px]" />

        {/* skils */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[25px]">
          Other Skills
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex w-[100%] justify-evenly">
            <img src={HtmlLogo} alt="" className=" w-[40px] object-contain " />
            <img src={CssLogo} alt="" className=" w-[40px] object-contain " />
            <img
              src={BootstrapLogo}
              alt=""
              className=" w-[40px] object-contain "
            />
          </div>
        </div>
        <hr className="mt-[15px]" />

        {/* references */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          References
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* larreth */}
          <DetailsContainer
            icon={Larreth}
            name={"Larreth Jimu"}
            details={"Founder Melsoft Academy"}
          />
        </div>
        <div className="flex text-[#ff5548] justify-center text-[14px] w-[100%] mt-[30px] ">
          Built using React Js By Gman®
        </div>
      </div>

      {/* CELLPHONE VIEW */}
      <div class=" flex md:hidden flex-col h-[100%] w-[100%] pt-[45px] bg-white pl-[10px] mb-[10px] ">
        {/* following */}
        <div className=" flex pl-[10px] text-[20px] font-display">
          Following
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex w-[100%] justify-between">
            <img src={Mosh} alt="" className=" w-[44%] object-contain " />
            <img src={Ninja} alt="" className=" w-[40%] object-contain " />
          </div>
          <div className="flex w-[100%] justify-between mt-[10px]">
            <img src={Bro} alt="" className=" w-[45%] object-contain " />
            <img src={Sonny} alt="" className=" w-[45%] object-contain " />
          </div>
        </div>
        <hr className="mt-[15px]" />

        {/* education */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          Education
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* melsoft */}
          <DetailsContainer
            icon={Melsoft}
            name={"Melsoft Academy"}
            details={" Full Stack Development"}
          />
          {/* udemy */}
          <DetailsContainer icon={Udemy} name={"Udemy"} details={"Html Css"} />
          {/* edx */}
          <DetailsContainer
            icon={Edx}
            name={"Edx"}
            details={"CS50 by Harvard"}
          />
        </div>
        <hr className="mt-[15px]" />

        {/* references */}
        <div className=" flex pl-[10px] text-[20px] font-display mt-[20px]">
          References
        </div>
        <div className="flex flex-col mt-[10px] ml-[10px]">
          {/* larreth */}
          <DetailsContainer
            icon={Larreth}
            name={"Larreth Jimu"}
            details={"Founder Melsoft Academy"}
          />
        </div>
        <div className="flex text-[#ff5548] justify-center text-[14px] w-[100%] mt-[30px] ">
          Built using React Js By Gman®
        </div>
      </div>
    </div>
  );
}

export default RightBar;
