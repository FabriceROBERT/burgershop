import React from "react";
import Container from "../../elements/Container";
import Image1 from "../../../medias/images/products/LastProducts-1.jpg";
import Image2 from "../../../medias/images/products/LastProducts-2.jpg";
import Image3 from "../../../medias/images/products/LastProducts-3.jpg";

const LastProduct = () => {
  return (
    <Container>
      {/* grid grid-2 = grille a 2 colonnes
              grid-row-2 = nombre de lignes que comporte les éléments
              px= padding axe des (x)
              py= padding axe des (y)
              gap-x = nombre d'ecart entre chaque container sur l'axe (x)
               */}
      <div className="grid grid-cols-1 md:grid-rows-2 grid-rows-3 md:grid-cols-2 gap-3 md:gap-5 lg:gap-9 w-full h-96 my-19 lg:px-11 uppercase text-white ">
        <div className="cursor-pointer rounded-md md:row-span-2 h-full p-7 relative z-11  hover:bg-primary-hover ">
          {/* EFFET DE COULEUR SUR L'IMAGE */}
          <div
            className="absolute z-10 top-0 left-0 w-full h-full 
          object-cover rounded-md bg-gradient-to-r from-yellow-400 via-red-primary to-pink-500 opacity-30"
          ></div>
          <img
            src={Image1}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md "
            alt=""
          />
          <div className="z-10 relative ">
            <span className="block font-bold text-sm md:text-lg">
              Killer Burger
            </span>
            <span className="md:text-2xl text-lg font-black">
              Le plus Populaire
            </span>
          </div>
        </div>

        <div className=" cursor-pointer rounded-md h-full p-7 text-white relative ">
          <div className="absolute z-10 top-0 left-0 w-full h-full object-cover rounded-md opacity-30"></div>
          <img
            src={Image2}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            alt=""
          />
          &
          <div className="z-10 relative">
            <span className="block font-bold text-sm md:text-lg">
              Island Burger
            </span>
            <span className="md:text-2xl text-lg font-black">
              Plus de Plaisir
            </span>
          </div>
        </div>

        <div className="cursor-pointer h-full p-7 text-white relative">
          <div className="absolute z-10 top-0 left-0 w-full h-full object-cover rounded-md opacity-30"></div>

          <img
            src={Image3}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            alt=""
          />

          <div className="z-10 relative ">
            <span className="block font-bold text-xs md:text-lg">
              Orlando Burger{" "}
            </span>
            <span className="md:text-2xl text-lg font-black">
              Frais & pimenté
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LastProduct;
