import React from "react";
import TailwindLogo from "./images/Tailwind.png";
import Js from "./images/js.png";
import ReactLogo from "./images/react.png";
import NextLogo from "./images/next.png";
import ReduxLogo from "./images/redux.png";
import OopLogo from "./images/oop.png";
import NodeLogo from "./images/node.png";
import HtmlLogo from "./images/html.png";
import CssLogo from "./images/css.png";
import BootstrapLogo from "./images/Bootstrap.png";
import Skill from "./Skill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageGallery.css"; // Create this CSS file for custom styling

function Skills({ skillsData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col">
      {/* DESKTOP VIEW */}
      <div className=" hidden lg:flex items-center justify-evenly text-[12px] text-slate-600 my-[20px] w-[75%]">
        {/* javascript */}
        <Skill logo={Js} name={"Javascript"} />

        {/* react js */}
        <Skill logo={ReactLogo} name={"React Js"} />

        {/* next js */}
        <Skill logo={NextLogo} name={"Next Js"} />

        {/* OOP */}
        <Skill logo={OopLogo} name={"OOP"} />

        {/* node js */}
        <Skill logo={NodeLogo} name={"Node Js"} />

        {/* Redux js */}
        <Skill logo={ReduxLogo} name={"Redux Js"} />

        {/* tailwind */}
        <Skill logo={TailwindLogo} name={"Tailwind Css"} />
      </div>

      {/* IPAD VIEW */}
      <div className=" hidden md:flex lg:hidden items-center justify-evenly text-[12px] text-slate-600 my-[20px] w-[95%]">
        {/* javascript */}
        <Skill logo={Js} name={"Javascript"} />

        {/* react js */}
        <Skill logo={ReactLogo} name={"React Js"} />

        {/* next js */}
        <Skill logo={NextLogo} name={"Next Js"} />

        {/* OOP */}
        <Skill logo={OopLogo} name={"OOP"} />

        {/* node js */}
        <Skill logo={NodeLogo} name={"Node Js"} />

        {/* Redux js */}
        <Skill logo={ReduxLogo} name={"Redux Js"} />

        {/* tailwind */}
        <Skill logo={TailwindLogo} name={"Tailwind Css"} />
      </div>

      {/* CELLPHONE VIEW */}
      <div className="  md:hidden image-gallery-container">
        <Slider {...settings}>
          <div className="image-slide">
            <Skill logo={Js} name={"Javascript"} />
          </div>
          <div className="image-slide">
            <Skill logo={ReactLogo} name={"React Js"} />
          </div>
          <div className="image-slide">
            <Skill logo={NextLogo} name={"Next Js"} />
          </div>
          <div className="image-slide">
            <Skill logo={OopLogo} name={"OOP"} />
          </div>
          <div className="image-slide">
            <Skill logo={NodeLogo} name={"Node Js"} />
          </div>
          <div className="image-slide">
            <Skill logo={ReduxLogo} name={"Redux Js"} />
          </div>
          <div className="image-slide">
            <Skill logo={TailwindLogo} name={"Tailwind Css"} />
          </div>
          <div className="image-slide">
            <Skill logo={HtmlLogo} name={"Html 5"} />
          </div>
          <div className="image-slide">
            <Skill logo={CssLogo} name={"Css"} />
          </div>
          <div className="image-slide">
            <Skill logo={BootstrapLogo} name={"Bootstraps"} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
