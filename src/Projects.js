import React from "react";
import BGimage from "./images/codeBG.jpg";
import IceCream from "./images/ice-cream.png";
import IceCream1 from "./images/ice-cream1.jpg";
import Project from "./Project";
import RightSide from "./RightBar";
import Cake from "./images/cake1.png";
import Cake1 from "./images/cake.jpg";
import Calculator from "./images/calc1.png";
import Calculator1 from "./images/calc.jpg";
import Diamond from "./images/diamond1.png";
import Diamond1 from "./images/diamond.jpg";
import Maverick from "./images/mav1.png";
import Maverick1 from "./images/mav.jpg";
import VsCv from "./images/vs1.png";
import VsCv1 from "./images/vs.jpg";

function Projects() {
  return (
    <div className="flex flex-col relative ">
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col relative w-[100%] bg-[#a5a5a514]  ">
        {/* Right side */}
        <div className="flex w-[100%] justify-end  absolute z-10 ">
          <RightSide className=" z-40 " />
        </div>
        <div className=" relative min-h-[100vh] overflow-x-hidden w-[80%] mt-[45px]  ">
          {/* faded image background */}
          <div
            className="absolute z-10 inset-0 bg-cover bg-center opacity-5"
            style={{ backgroundImage: `url(${BGimage})` }}
          ></div>

          {/* Projects container */}
          <div className="relative z-10 flex items-center justify-center w-[70%] text-white text-2xl mt-[50px] ">
            <div className=" absolute z-20 flex flex-col w-[100%] bg-[#0000] p-[20px] ml-[35%] ">
              {/* header */}
              <div className="flex justify-between absolute z-30 mt-[2699px] w-[120%] h-[50px] ml-[-15%] bg-[#ffffff61] px-[50px]">
                <span className=" font-semibold text-black z-20 text-[20px] flex justify-between items-center ">
                  Projects
                </span>
                <div className="flex justify-between items-center w-[160px]">
                  <span className="flex justify-between items-center border-[2px] border-slate-100 w-[70px] h-[30px] text-slate-400 text-[18px] font-display pl-[15px] rounded-[10px] ">
                    Gman ®
                  </span>
                  <span className="flex justify-between items-center border-[2px] border-slate-100 w-[80px] h-[30px] text-black text-[14px] pl-[15px] rounded-[10px] ">
                    Recent
                  </span>
                </div>
              </div>
              {/* Projects */}
              <div className="flex flex-col w-[100%] mt-[2740px] bg-[#0000]">
                {/* project 1 */}
                <Project
                  img1={IceCream}
                  img2={IceCream1}
                  name={"Ice-cream Shop"}
                  gitlink={"https://github.com/GmanSibs1906/iceCreamShop"}
                  weblink={"https://cute-shortbread-92bad8.netlify.app/"}
                  tech1={"#Html"}
                  tech2={"#Css"}
                  tech3={"#Javascript"}
                  tech4={"Functional Cart"}
                  likes={43}
                />

                {/* project 2 */}
                <Project
                  img1={Cake}
                  img2={Cake1}
                  name={"Gmans Corner"}
                  gitlink={
                    "https://github.com/GmanSibs1906/gmansibs1906.github.io"
                  }
                  weblink={"https://gmansibs1906.github.io/"}
                  tech1={"#Html"}
                  tech2={"#Css"}
                  tech3={""}
                  tech4={"Landing Page"}
                  likes={32}
                />

                {/* project 3 */}
                <Project
                  img1={Diamond}
                  img2={Diamond1}
                  name={"Diamond Tech"}
                  gitlink={"https://github.com/GmanSibs1906/diamondTech"}
                  weblink={"https://cheerful-taffy-bd478c.netlify.app/"}
                  tech1={"#Html"}
                  tech2={"#Bootstrap"}
                  tech3={"#Javascript"}
                  tech4={"Landing Page"}
                  likes={35}
                />

                {/* project 4 */}
                <Project
                  img1={Calculator}
                  img2={Calculator1}
                  name={"Calculator"}
                  gitlink={"https://github.com/GmanSibs1906/Calculator"}
                  weblink={"https://clinquant-kangaroo-7fba76.netlify.app/"}
                  tech1={"#Html"}
                  tech2={"#Css"}
                  tech3={"#Javascript"}
                  tech4={"Functional Calculator"}
                  likes={49}
                />

                {/* project 5 */}
                <Project
                  img1={VsCv}
                  img2={VsCv1}
                  name={"Vs Code Clone"}
                  gitlink={"https://github.com/GmanSibs1906/VsCodeClone"}
                  weblink={
                    "http://gmanscv.s3-website.eu-north-1.amazonaws.com/index.html"
                  }
                  tech1={"#Html"}
                  tech2={"#Css"}
                  tech3={"#Aws C3"}
                  tech4={"Cv Project"}
                  likes={38}
                />

                {/* project 6 */}
                <Project
                  img1={Maverick}
                  img2={Maverick1}
                  name={"Maverick City"}
                  gitlink={"https://github.com/GmanSibs1906/maverick"}
                  weblink={"https://delightful-brioche-d571e4.netlify.app/"}
                  tech1={"#Html"}
                  tech2={"#Css"}
                  tech3={""}
                  tech4={"Landing Page"}
                  likes={22}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CELLPHONE VIEW */}
      <div className="flex lg:hidden flex-col w-[100%] relative h-[100vh] mt-[40px] ">
        {/* background image */}
        <div
          className="absolute z-10 inset-0 bg-repeat bg-center opacity-10 mt-[10px] "
          style={{ backgroundImage: `url(${BGimage})` }}
        ></div>

        {/* header section */}
        <div className="flex justify-between z-30 h-[50px] bg-[#ffffff61] px-[25px] mt-[20px] ">
          <span className=" font-semibold text-black z-20 text-[20px] flex justify-between items-center ">
            Projects
          </span>
          <div className="flex justify-between items-center w-[160px]">
            <span className="flex justify-between items-center border-[2px] border-slate-100 w-[70px] h-[30px] text-slate-400 text-[18px] font-display pl-[15px] rounded-[10px] ">
              Gman ®
            </span>
            <span className="flex justify-between items-center border-[2px] border-slate-100 w-[80px] h-[30px] text-black text-[14px] pl-[15px] rounded-[10px] ">
              Recent
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col w-[100%] bg-[#0000]">
          {/* project 1 */}
          <Project
            img1={IceCream}
            img2={IceCream1}
            name={"Ice-cream Shop"}
            gitlink={"https://github.com/GmanSibs1906/iceCreamShop"}
            weblink={"https://cute-shortbread-92bad8.netlify.app/"}
            tech1={"#Html"}
            tech2={"#Css"}
            tech3={"#Javascript"}
            tech4={"Functional Cart"}
            likes={43}
          />

          {/* project 2 */}
          <Project
            img1={Cake}
            img2={Cake1}
            name={"Gmans Corner"}
            gitlink={"https://github.com/GmanSibs1906/gmansibs1906.github.io"}
            weblink={"https://gmansibs1906.github.io/"}
            tech1={"#Html"}
            tech2={"#Css"}
            tech3={""}
            tech4={"Landing Page"}
            likes={32}
          />

          {/* project 3 */}
          <Project
            img1={Diamond}
            img2={Diamond1}
            name={"Diamond Tech"}
            gitlink={"https://github.com/GmanSibs1906/diamondTech"}
            weblink={"https://cheerful-taffy-bd478c.netlify.app/"}
            tech1={"#Html"}
            tech2={"#Bootstrap"}
            tech3={"#Javascript"}
            tech4={"Landing Page"}
            likes={35}
          />

          {/* project 4 */}
          <Project
            img1={Calculator}
            img2={Calculator1}
            name={"Calculator"}
            gitlink={"https://github.com/GmanSibs1906/Calculator"}
            weblink={"https://clinquant-kangaroo-7fba76.netlify.app/"}
            tech1={"#Html"}
            tech2={"#Css"}
            tech3={"#Javascript"}
            tech4={"Functional Calculator"}
            likes={49}
          />

          {/* project 5 */}
          <Project
            img1={VsCv}
            img2={VsCv1}
            name={"Vs Code Clone"}
            gitlink={"https://github.com/GmanSibs1906/VsCodeClone"}
            weblink={
              "http://gmanscv.s3-website.eu-north-1.amazonaws.com/index.html"
            }
            tech1={"#Html"}
            tech2={"#Css"}
            tech3={"#Aws C3"}
            tech4={"Cv Project"}
            likes={38}
          />

          {/* project 6 */}
          <Project
            img1={Maverick}
            img2={Maverick1}
            name={"Maverick City"}
            gitlink={"https://github.com/GmanSibs1906/maverick"}
            weblink={"https://delightful-brioche-d571e4.netlify.app/"}
            tech1={"#Html"}
            tech2={"#Css"}
            tech3={""}
            tech4={"Landing Page"}
            likes={22}
          />
        </div>

        {/* Details */}
        <div className="flex w-[100%] ">
          <RightSide className=" z-40 " />
        </div>
      </div>
    </div>
  );
}

export default Projects;
