import React from "react";
import Container from "../../elements/Container";
import HeadingTitles from "../../elements/DisplayTitles/HeadingTitles";
import Heading from "../../elements/DisplayTitles/Heading";
// import TripleBurgers from "./TripleBurgers";
import Button from "../../elements/Button";
import Image1 from "../../../medias/images/products/Product-1.jpg";
import Image2 from "../../../medias/images/products/Product-2.jpg";
import Image3 from "../../../medias/images/products/Product-3.jpg";

const Product = () => {
  return (
    <Container>
      <HeadingTitles>Toujours des délicieux burgers</HeadingTitles>
      <Heading theme="secondary">Choisissez et savourez</Heading>

      <p className="text-center">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </p>

      <div className="grid grid-cols-3 gap-x-2  my-10 ">
        <div className="w-full h-full ">
          <div className=" relative w-full h-96 ">
            <img
              src={Image1}
              alt=""
              className=" absolute top-0 left-0 h-full object-cover z-0"
            />
          </div>
          <div className="flex items-center justify-center flex-col px-5 pb-5 ">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full h-full ">
          <div className=" relative w-full h-96">
            <img
              src={Image2}
              alt=""
              className=" absolute top-0 left-0 h-full object-cover z-0"
            />
          </div>
          <div className="flex items-center justify-center flex-col px-5 pb-5">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full h-full ">
          <div className=" relative w-full h-96">
            <img
              src={Image3}
              alt=""
              className=" absolute top-0 left-0 h-full object-cover z-0"
            />
          </div>
          <div className="flex items-center justify-center flex-col px-5 pb-5 ">
            <Heading variant="h3">Lorem ipsum dolor</Heading>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
