import React from "react";
import Image1 from "../../../medias/images/products/LastProducts-1.jpg";
import Image2 from "../../../medias/images/products/LastProducts-2.jpg";
import Image3 from "../../../medias/images/products/LastProducts-3.jpg";
import Heading from "../../elements/DisplayTitles/Heading";
import Button from "../../elements/Button";

export default function TripleBurgers() {
  return (
    <div className="relative w-full h-96 grid grid-cols-3 mt-10 gap-1 ">
      <div className="h-full w-full">
        <img className=" w-full h-96 object-cover" src={Image1} alt="" />
        <div className="text-center">
          <Heading variant="">Lorem Ipsum Dolor</Heading>
          <p className="h2">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
          <Button color="danger" theme="pop">
            Commandez
          </Button>
        </div>
      </div>
      <div className=" relative w-full h-96">
        <img className="w-full h-full object-cover" src={Image2} alt="" />
        <div className="text-center"> 
          <Heading variant="">Lorem Ipsum Dolor</Heading>
          <p className="">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.{" "}
          </p>
          <Button color="danger" theme="pop">
            Commandez
          </Button>
        </div>
      </div>
      <div className=" relative w-full h-96 ">
        <img className="w-full h-full object-cover" src={Image3} alt="" />
        <div className="text-center">
          <Heading variant="">Lorem Ipsum Dolor</Heading>
          <p className="">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.{" "}
          </p>
          <Button color="danger" theme="pop">
            Commandez
          </Button>
        </div>
      </div>
    </div>
  );
}
