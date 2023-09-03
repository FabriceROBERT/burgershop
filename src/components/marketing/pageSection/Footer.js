import React from "react";
import Container from "../../../components/elements/Container";
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import Logo from "../../../medias/svg/Logo-burger-house-white.svg";
import Facebook from "../../../medias/svg/facebook-f.svg";
import Instagram from "../../../medias/svg/instagram.svg";
import Twitter from "../../../medias/svg/twitter.svg";
import Whatsapp from "../../../medias/svg/whatsapp.svg";

export default function Footer() {
  return (
    // <Container>
    <div className="relative md:mt-40 md:mb-20 p-5 h-full text-white">
      <img
        src={BackgroundImage}
        alt=""
        className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative  md:grid grid-cols-2 z-10 ">
        <div className="  w-full p-5 mt-20 mb-10 md:mb-28">
          <img src={Logo} alt="" className=" w-full md:w-2/3" />
          <p className="text-center md:text-left mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorum, neque sapiente iure illum assumenda quae praesentium quidem
            ad laboriosam porro, sequi a atque natus. Velit aut itaque
            blanditiis impedit.
          </p>
        </div>
        <div className=" h-full w-full flex flex-col items-center md:justify-center">
          <div className="flex items-center">
            <LocationMarkerIcon className="h-10 w-10 " />
            <span className="uppercase font-extrabold text-sm md:text-lg tracking-tighter">
              40 Rue du Louvre, 75001 Paris
            </span>
          </div>
          <div className="flex items-center mb-20 md:mb-0 mt-3">
            <MailIcon className="h-10 w-10 md:ml-4" />
            <span className="uppercase font-extrabold text-sm md:text-lg tracking-tight">
              contact@burgerhouse.com
            </span>
          </div>
          {/* right */}
        </div>
      </div>
      <div className="flex items-center justify-between relative z-10">
        <div className="uppercase font-extrabold tracking-tighter text-base">
          copyright burger house 2023. All rights reserved
        </div>
        <div className="flex flex-row justify-around">
          <div>
            <a
              href="https://www.youtube.com/"
              target="_blank "
              rel="noreferrer"
            >
              <img
                src={Facebook}
                className="h-7 w-7 bg-white rounded-full p-1 mr-2"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src={Instagram}
                className="h-7 w-7 bg-white rounded-full p-1 mr-2"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src={Twitter}
                className="h-7 w-7 bg-white rounded-full p-1 mr-2"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src={Whatsapp}
                className="h-7 w-7 bg-white rounded-full p-1"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    // {/* </Container> */}
  );
}
