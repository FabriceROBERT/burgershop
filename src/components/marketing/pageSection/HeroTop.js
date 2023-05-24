import React from "react";
import Illustration from "../../../medias/images/background/bg-food.jpg";
import Container from "../../elements/Container";
import Header from "./Header";
import Product from "../../../medias/images/heroTop/burger-hero-top.png";
import Button from "../../elements/Button";

const HeroTop = () => {
  return (
    <div className="bg-primary w-full ">
      <div
        className="bg-repeat w- pb-40 h-full"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="relative mt-28 w-full ">
            <img
              className="absolute z-0 -top-64 right-0 w-6/12"
              src={Product}
              alt="ue menu hamburger avec frites et coca-cola"
            />
            <div className="absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3">
              <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center">
                <div className="text-center">
                  <span className=" block font-extrabold ">
                    <span className="text-5xl">5</span>.49€
                  </span>
                  <span className="tracking-widest uppercase font-bold text-sm">
                    Seulement
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-1 text-secondary uppercase ">
              <h1 className=" mb-2 font-extrabold ">
                Envie de gouter au bon goût des hamburgers ?
              </h1>
              <h2 className=" shadowTitleSecondary font-secondary">
                <span className="text-8xl block">Burger </span>
                <span className="text-6xl">House </span>
                <span className="text-4xl ">
                  Click<span className="text-red-primary">&</span>Collect
                </span>
              </h2>
            </div>
          </div>
          {/* <Button className="mt-5" color="secondary" theme="small">
            Creer mon compte
          </Button>
          <Button className="mt-5">Creer mon compte</Button> */}
          <Button className="mt-5 rounded-md" color="secondary" theme="big">
            Créer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;
