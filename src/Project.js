import React, { useState } from "react";
import user from "./images/gman.jpg";
import github from "./images/github.png";
import web from "./images/web.png";
import heart from "./images/heart.png";

function Project({
  img1,
  img2,
  name,
  gitlink,
  weblink,
  tech1,
  tech2,
  tech3,
  tech4,
  likes,
}) {
  const [count, setCount] = useState(likes);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center">
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col w-[100%] h-[400px] border-[1px] border-slate-800 shadow-md bg-[#ffffff64] p-[20px] my-[30px]">
        {/* icon and name */}
        <div className="flex">
          <img src={user} alt="" className=" w-[30px] rounded-[50%] " />
          <span className="flex text-black text-[14px] font-bold ml-[15px]">
            {name}
          </span>
        </div>
        {/* images */}
        <div className="flex mt-[10px]">
          <img
            src={img1}
            alt=""
            className=" h-[250px] object-contain max-w-[70%] "
          />
          <img
            src={img2}
            alt=""
            className=" ml-[8%] h-[250px] object-contain "
          />
        </div>
        {/* links */}
        <div className="flex items-center mt-[10px] reletive">
          <a
            href={gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={github}
              alt=""
              className=" w-[25px] h-[25px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              github code
            </span>
          </a>
          <a
            href={weblink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={web}
              alt=""
              className=" w-[18px] h-[18px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              view site
            </span>
          </a>
          <div
            onClick={increment}
            className="flex absolute w-[60px] bg-[#ff2e90] right-[10%] mt-[20px] h-[30px] rounded-[10px] justify-center items-center border-[1px] border-[#ff2e90] shadow-lg cursor-pointer hover:bg-[#ff5548] "
          >
            <span className="flex items-center">
              <img src={heart} alt="" className=" h-[14px] " />
              <div className="text-[12px] text-white">{count}</div>
            </span>
          </div>
        </div>
        {/* technologies used */}
        <div className="flex text-[12px]">
          <span className="text-black font-bold ml-[25px]">
            technologies used
          </span>
          <span className="text-slate-600 ml-[10px]">
            <span className="text-[#4860ff]">{tech1}</span>
            <span className="text-[#ff5548] ml-1">{tech2}</span>
            <span className="text-[#b99437] ml-1">{tech3}</span>
            <span className="text-[#6b6b6b] ml-3">{tech4}</span>.
          </span>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden flex-col ml-[-22%] w-[66%] h-[400px] border-[1px] border-slate-800 shadow-md bg-[#ffffff64] p-[20px] my-[30px]">
        {/* icon and name */}
        <div className="flex">
          <img src={user} alt="" className=" w-[30px] rounded-[50%] " />
          <span className="flex text-black text-[14px] font-bold ml-[15px]">
            {name}
          </span>
        </div>
        {/* images */}
        <div className="flex mt-[10px] items-center ">
          <img
            src={img1}
            alt=""
            className=" h-[250px] object-contain max-w-[70%] "
          />
          <img
            src={img2}
            alt=""
            className=" ml-[3%] h-[193px] mt-[2px] object-contain "
          />
        </div>
        {/* links */}
        <div className="flex items-center mt-[0px] mb-[15px] reletive ml-[-21px]">
          <a
            href={gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={github}
              alt=""
              className=" w-[25px] h-[25px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              github code
            </span>
          </a>
          <a
            href={weblink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={web}
              alt=""
              className=" w-[18px] h-[18px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              view site
            </span>
          </a>
          <div
            onClick={increment}
            className="flex absolute w-[60px] bg-[#ff2e90] right-[30%] mt-[0px] h-[30px] rounded-[10px] justify-center items-center border-[1px] border-[#ff2e90] shadow-lg cursor-pointer hover:bg-[#ff5548] "
          >
            <span className="flex items-center">
              <img src={heart} alt="" className=" h-[14px] " />
              <div className="text-[12px] text-white">{count}</div>
            </span>
          </div>
        </div>
        {/* technologies used */}
        <div className="flex text-[12px]">
          <span className="text-black font-bold ml-[5px]">
            technologies used
          </span>
          <span className="text-slate-600 ml-[10px]">
            <span className="text-[#4860ff]">{tech1}</span>
            <span className="text-[#ff5548] ml-1">{tech2}</span>
            <span className="text-[#b99437] ml-1">{tech3}</span>
            <span className="text-[#6b6b6b] ml-3">{tech4}</span>.
          </span>
        </div>
      </div>

      {/* CELLPHONE VIEW */}
      <div className=" md:hidden flex flex-col w-[95%] h-[400px] border-[1px] border-slate-100 shadow-md bg-[#ffffff64] p-[20px] my-[30px]">
        {/* icon and name */}
        <div className="flex">
          <img src={user} alt="" className=" w-[30px] rounded-[50%] " />
          <span className="flex text-black text-[14px] font-bold ml-[15px]">
            {name}
          </span>
        </div>
        {/* images */}
        <div className="flex mt-[10px]">
          <img
            src={img1}
            alt=""
            className=" h-[250px] object-contain max-w-[100%] "
          />
        </div>
        {/* links */}
        <div className="flex items-center mt-[-10px] mb-[15px] reletive">
          <a
            href={gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={github}
              alt=""
              className=" w-[25px] h-[25px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              github code
            </span>
          </a>
          <a
            href={weblink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-[20px]"
          >
            <img
              src={web}
              alt=""
              className=" w-[18px] h-[18px] rounded-[50%] "
            />
            <span className="text-[12px] text-black font-bold ml-[6px]">
              view site
            </span>
          </a>
          <div
            onClick={increment}
            className="flex absolute w-[60px] bg-[#ff2e90] right-[10%] mt-[-5px] h-[30px] rounded-[10px] justify-center items-center border-[1px] border-[#ff2e90] shadow-lg cursor-pointer hover:bg-[#ff5548] "
          >
            <span className="flex items-center">
              <img src={heart} alt="" className=" h-[14px] " />
              <div className="text-[12px] text-white">{count}</div>
            </span>
          </div>
        </div>
        {/* technologies used */}
        <div className="flex text-[12px]">
          <span className="text-black font-bold ml-[25px]">
            technologies used
          </span>
          <span className="text-slate-600 ml-[10px]">
            <span className="text-[#4860ff]">{tech1}</span>
            <span className="text-[#ff5548] ml-1">{tech2}</span>
            <span className="text-[#b99437] ml-1">{tech3}</span>
            <span className="text-[#6b6b6b] ml-3">{tech4}</span>.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
