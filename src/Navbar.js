import React from "react";
import logo from "./images/js.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import heart from "./images/love.png";
import menu from "./images/menu.png";

function Navbar() {
  return (
    <div className="flex flex-col w-[100%]">
      {/* DESKTOP VIEW */}
      <div className=" hidden md:flex justify-evenly h-[75px] items-center border-b-2 border-slate-100 ">
        {/* logo and heading */}
        <div className="flex">
          <div className="flex ">
            <img
              src={logo}
              alt=""
              className=" w-[35px] object-contain mx-[30px] rounded-[10px] "
            />
          </div>
          <div className="flex font-display text-[25px] px-[30px]  border-l-2 ">
            Portfolio
          </div>
        </div>

        {/* I just love coding */}
        <div className="flex items-center justify-center text-[#ff5548] mx-[40px]">
          <span className=" underline ">I just love coding </span>
          <img src={heart} alt="" className=" h-[30px] object-contain " />
        </div>

        {/* icons */}
        <div className="flex">
          <a
            href="https://github.com/GmanSibs1906"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="" className=" header-icons " />
          </a>
          <a
            href="https://www.linkedin.com/in/gladman-sibanda-188a31272/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="" className=" header-icons " />
          </a>
          <a
            href="https://github.com/Gman1906Sibs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="" className=" header-icons " />
          </a>
        </div>
      </div>

      {/* CELLPHONE VIEW */}
      <div className=" flex justify-evenly h-[75px] items-center border-b-2 border-slate-100 md:hidden ">
        {/* logo and heading */}
        <div className="flex">
          <div className="flex font-display text-[25px] px-[5px] ">
            Portfolio
          </div>
        </div>

        {/* I just love coding */}
        <div className="flex items-center justify-center text-[#ff5548] ">
          <span className=" underline text-[10px] ">I just love coding </span>
          <img src={heart} alt="" className=" h-[30px] object-contain " />
        </div>

        <div className="flex">
          <img src={logo} alt="" className=" header-icons rounded-[6px] " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
