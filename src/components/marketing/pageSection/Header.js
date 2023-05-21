import React from "react";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Icone from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button.js";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <div className=" w-full">
        <img src={Logo} alt="Burger House App" className="w-64" />
      </div>
      <div className="w-full text-secondary ">
        <div className="flex items-center justify-end">
          <img src={Icone} alt="" className="w-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className={" bg-primary hover:bg-secondary mr-2"}>
            Inscription
          </Button>
          <Button className={" bg-secondary hover:bg-primary"}>
            Connexion
          </Button>
        </div>
        {/* Envie de gouter au bon goût des hamburgers ? */}
      </div>
    </div>
  );
};

export default Header;
