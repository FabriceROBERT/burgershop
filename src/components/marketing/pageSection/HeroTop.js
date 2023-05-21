import React from "react";
import Illustration from "../../../medias/images/background/bg-food.jpg";
import Container from "../../elements/Container";
import Header from "./Header";

const HeroTop = () => {
  return (
    <div className="bg-primary w-full h-screen">
      <div
        className="bg-repeat w-full h-full"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="bg-gray-500 w-full h-72">
            <dv className="bg-red-500"></dv>
            <div className="bg-green-500"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
