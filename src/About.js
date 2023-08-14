import React from "react";
import user from "./images/gman.jpg";
import github from "./images/github.png";

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/CV.pdf"; // Replace with the actual path to your PDF file
    link.setAttribute("download", "CV.pdf");
    link.click();
  };
  return (
    <div className="flex flex-col">
      {/* DESKTOP VIEW */}
      <div className=" hidden lg:flex justify-center items-center h-[300px] ">
        <div className="flex">
          {/* user image */}
          <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-[200px] w-[200px] rounded-[50%] mr-[100px]">
            <div className="flex justify-center items-center bg-white w-[195px] h-[195px] rounded-[50%]">
              <img
                src={user}
                alt="gman himself"
                className=" w-[180px] h-[180px] rounded-[50%] "
              />
            </div>
          </div>

          {/* details */}
          <div className="flex-col">
            {/* row one with name and button */}
            <div className="flex items-center">
              <h3 className=" font-name text-[40px] mr-[20px] ">
                gladman sibanda
              </h3>

              <button
                onClick={handleDownload}
                className=" border-[1px] bg-[#ffd012] w-[120px] h-[32px] rounded-md border-red-500 font-bold mb-[8px] "
              >
                Download CV
              </button>
              {/* <div className="flex justify-center items-center h-[34px] w-[34px] object-contain mb-[8px] ml-[5px] opacity-[30%] bg-yellow-400 border-red-800 rounded-md font-bold text-slate-700">
                CV
              </div> */}
              <img
                img
                src={github}
                alt=""
                className="flex justify-center items-center h-[34px] w-[34px] object-contain mb-[8px] ml-[5px] bg-yellow-400 border-red-800 rounded-md font-bold text-slate-700"
              />
            </div>
            {/* row two with stats */}
            <div className="flex justify-between text-[17px] my-[4px]">
              <span className="flex">
                <span className="count">1.1k</span>
                <span>coding days</span>
              </span>
              <span className="flex">
                <span className=" count ">100%</span>
                <span>creativity</span>
              </span>
              <span className="flex">
                <span className=" count ">2</span>
                <span>github accounts</span>
              </span>
            </div>
            {/* row three about section */}
            <div className="flex-col">
              <div className="text-slate-400 mt-[8px] ">Software Developer</div>
              <div className="text-[14px] mt-[3px]">
                Passionate, creative mindset, ability to learn, good
                communicator
              </div>
              <div className="flex mt-[3px] text-[14px]">
                <span>083 250 4826</span>
                <span className=" ml-[10px] underline text-red-500 ">
                  gmansibs@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className=" hidden md:flex lg:hidden justify-center items-center h-[300px] ">
        <div className="flex">
          {/* user image */}
          <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-[200px] w-[200px] rounded-[50%] mr-[100px]">
            <div className="flex justify-center items-center bg-white w-[195px] h-[195px] rounded-[50%]">
              <img
                src={user}
                alt="gman himself"
                className=" w-[180px] h-[180px] rounded-[50%] "
              />
            </div>
          </div>

          {/* details */}
          <div className="flex-col">
            {/* row one with name and button */}
            <div className="flex items-center">
              <h3 className=" font-name text-[40px] mr-[20px] ">
                gladman sibanda
              </h3>

              <button
                onClick={handleDownload}
                className=" border-[1px] bg-[#ffd012] w-[120px] h-[32px] rounded-md border-red-500 font-bold mb-[8px] "
              >
                Download CV
              </button>
              {/* <div className="flex justify-center items-center h-[34px] w-[34px] object-contain mb-[8px] ml-[5px] opacity-[30%] bg-yellow-400 border-red-800 rounded-md font-bold text-slate-700">
                CV
              </div> */}
              <img
                img
                src={github}
                alt=""
                className="flex justify-center items-center h-[34px] w-[34px] object-contain mb-[8px] ml-[5px] bg-yellow-400 border-red-800 rounded-md font-bold text-slate-700"
              />
            </div>
            {/* row two with stats */}
            <div className="flex justify-between text-[17px] my-[4px]">
              <span className="flex">
                <span className="count">1.1k</span>
                <span>coding days</span>
              </span>
              <span className="flex">
                <span className=" count ">100%</span>
                <span>creativity</span>
              </span>
              <span className="flex">
                <span className=" count ">2</span>
                <span>github accounts</span>
              </span>
            </div>
            {/* row three about section */}
            <div className="flex-col">
              <div className="text-slate-400 mt-[8px] ">Software Developer</div>
              <div className="text-[14px] mt-[3px]">
                Passionate, creative mindset, ability to learn, good
                communicator
              </div>
              <div className="flex mt-[3px] text-[14px]">
                <span>083 250 4826</span>
                <span className=" ml-[10px] underline text-red-500 ">
                  gmansibs@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CELLPHONE VIEW */}
      <div className=" flex  md:hidden justify-center items-center h-[170px] ">
        <div className="flex w-[100%] justify-center">
          {/* user image */}
          <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-[93px] w-[93px] rounded-[50%] ml-[-5px] mt-[10px]">
            <div className="flex justify-center items-center bg-white w-[91px] h-[91px] rounded-[50%]">
              <img
                src={user}
                alt="gman himself"
                className=" w-[89px] h-[89px] rounded-[50%] "
              />
            </div>
          </div>

          {/* details */}
          <div className="flex-col">
            {/* row one with name and button */}
            <div className="flex items-center mt-[5px]">
              <h3 className=" font-name text-[18px] ml-[10px] ">
                gladman sibanda
              </h3>

              <button
                onClick={handleDownload}
                className=" text-[12px] border-[1px] bg-[#ffd012] w-[85px] h-[22px] rounded-[5px] border-red-500 font-bold ml-[10px] mb-[8px] "
              >
                Download CV
              </button>
              <a
                href="https://github.com/GmanSibs1906"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  img
                  src={github}
                  alt=""
                  className="flex justify-center items-center h-[22px] w-[22px] object-contain mb-[8px] ml-[5px] bg-yellow-400 border-red-800 rounded-md font-bold text-slate-700"
                />
              </a>
            </div>
            {/* row two with stats */}
            <div className="flex ml-[10px] text-[14px] my-[1px]">
              <span className="flex">
                <span className="count">1.1k</span>
                <span>coding days</span>
              </span>
              <span className="flex ml-[10px]">
                <span className=" count ">100%</span>
                <span>creativity</span>
              </span>
              {/* <span className="flex">
                <span className=" count ">2</span>
                <span>github accounts</span>
              </span> */}
            </div>
            {/* row three about section */}
            <div className="flex-col text-[12px] ml-[10px]">
              <div className="text-slate-400 mt-[8px] ">Software Developer</div>
              {/* <div className=" mt-[1px]">
                Passionate, creative mindset, ability to learn, good
                communicator
              </div> */}
              <div className="flex mt-[1px] text-[14px]">
                <span>083 250 4826</span>
                <span className=" ml-[10px] underline text-red-500 ">
                  gmansibs@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
