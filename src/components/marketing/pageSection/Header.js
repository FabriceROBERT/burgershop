import React from "react";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Icone from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import Picto from "../../../medias/svg/picto-burger-house.svg";
const Header = () => {
  return (
    <div className=" relative z-10 flex items-center justify-between py-10">
      <div className=" w-full">
        <img
          src={Logo}
          alt="Burger House App"
          className="w-64 hidden md:block"
        />
        <img src={Picto} alt="Burger House App" className="w-10 md:hidden" />
      </div>
      <div className="w-full text-secondary ">
        <div className=" hidden md:flex items-center justify-end">
          <img src={Icone} alt="" className="w-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="sm:mb-5  flex items-center justify-end">
          <Button className="mr-3 tracking-widest">Inscription</Button>
          <Button className="tracking-widest" color="secondary">
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
