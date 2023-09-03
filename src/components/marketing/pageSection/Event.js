import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../css/carousel.css";
import Image1 from "../../../medias/images/Events/les-ardentes-festival-2023-concours.jpg";
import Image3 from "../../../medias/images/Events/32a1be58-148e-4869-8285-a58da0eacb9d_1024.jpeg";
import Image2 from "../../../medias/images/Events/837864-aya-nakamura-en-concert-a-l-accor-arena-de-paris-en-mai-2023.jpg";

import Heading from "../../elements/DisplayTitles/Heading";

export default function Event() {
  // const handleDragStart = (e) => e.preventDefault();

  const Slide = ({ children, category, title, Image }) => {
    return (
      <div className="grid md:grid-cols-2 p-6 ">
        <div className="py-10  px-5  ">
          <Heading variant="h4" className="">
            {category}
          </Heading>
          <Heading
            className="my-4 tracking-wide"
            theme="secondary"
            variant="h2"
            alignement=""
          >
            {title}
          </Heading>

          <p className="md:pb-10 pb-0 tracking-wide text-base leading-relaxed font-light">
            {children}
          </p>
        </div>
        <div className="relative w-full h-96 md:h-full">
          <img
            className=" absolute top-0 left-0 w-full h-80 object-cover object-center"
            src={Image}
            alt=""
          />
        </div>
      </div>
    );
  };
  const items = [
    <Slide
      Image={Image1}
      category="événement à venir"
      title="Pret à faire le show ?"
    >
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is
      sometimes known, is dummy text used in laying out print, graphic or web
      designs.
    </Slide>,
    <Slide
      Image={Image2}
      category="événement à venir"
      title="Gagne une place de concert d'Aya Nakamura avec le menu In&Out"
    >
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is
      sometimes known, is dummy text used in laying out print, graphic or web
      designs.
    </Slide>,
    <Slide
      Image={Image3}
      category="Evenement à venir"
      title="Radical Steak arrive à grand pas ! "
    >
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is
      sometimes known, is dummy text used in laying out print, graphic or web
      designs.
    </Slide>,
    // <Slide>Mon texte</Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 ">
        <AliceCarousel
          autoPlayInterval="3000"
          autoPlay
          infinite
          mouseTracking
          disableButtonsControls
          items={items}
        />
      </div>
    </Container>
  );
}
