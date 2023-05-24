import React from "react";
import Container from "../../elements/Container";

const LastProduct = () => {
  return (
    <Container>
      {/* grid grid-2 = grille a 2 colonnes
              grid-row-2 = nombre de lignes que comporte les éléments
              px= padding axe des (x)
              py= padding axe des (y)
              gap-x = nombre d'ecart entre chaque container sur l'axe (x)
               */}
      <div className="grid grid-cols-2 grid-row-2 gap-x-9 gap-y-9 w-full h-96 my-19 px-11">
        <div className="bg-yellow-400 rounded-md row-span-2 h-full p-7 uppercase text-white ">
          <div className="">
            <span className="block font-bold text-lg">Killer Burger</span>
            <span className="text-2xl font-black">Le plus Populaire</span>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-md h-full p-7 uppercase text-white ">
          <div className="">
            <span className="block font-bold text-lg">Island Burger</span>
            <span className="text-2xl font-black">Plus de Plaisir</span>
          </div>
        </div>
        <div className="bg-yellow-600 rounded-md h-full p-7 uppercase text-white ">
          <div className="">
            <span className="block font-bold text-lg">Orlando Burger </span>
            <span className="text-2xl font-black">Frais & pimenté</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LastProduct;
