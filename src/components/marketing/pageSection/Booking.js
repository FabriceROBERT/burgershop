import React from "react";
import Container from "../../elements/Container";
import Assiette from "../../../medias/images/background/Assiette-burger-frites.png";
import Burger from "../../../medias/images/background/Burger.png";
import Sauce from "../../../medias/images/background/Sauce-pimente.png";
import Heading from "../../elements/DisplayTitles/Heading";

export default function Booking() {
  return (
    <Container>
      <div className="relative mb-20">
        <img src={Burger} alt="" className="absolute -top-20 -left-36  z-10" />
        <img src={Sauce} alt="" className="absolute -bottom-10 left-0" />
        <img src={Assiette} alt="" className=" absolute -right-96 -bottom-52" />
        <div className="max-w-3xl mx-auto py-20 px-10">
          <Heading variant="h2" alignement="center">
            Réservation
          </Heading>
          <Heading theme="secondary" alignement="center" className="mt-5 ">
            Réservez votre table
          </Heading>
          <form className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
            <div>
              <label htmlFor="name">Nom : </label>
              <input
                type="text"
                name="name"
                id="name"
                // evite les champs automatiques
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="ROBERT Fabrice"
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                // evite les champs automatiques
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="abc@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="date">Date : </label>
              <input
                type="date"
                name="date"
                id="date"
                // evite les champs automatiques
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="time">Heure : </label>
              <input
                type="time"
                name="time"
                id="time"
                // evite les champs automatiques
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="customers">Nombre de personnes :</label>
              <input
                type="text"
                name="customers"
                id="customers"
                // evite les champs automatiques
                autoComplete="off"
                placeholder="7 Personnes"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="Send" className="invisible">
                Reservez
              </label>
              <input
                type="button"
                name="Send"
                id="Send"
                // evite les champs automatiques
                autoComplete="off"
                className="bg-red-primary cursor-pointer hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest rounded-md animate uppercase py-5"
                value="Reservez votre table"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
