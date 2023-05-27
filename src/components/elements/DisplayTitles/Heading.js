import React from "react";

export default function Heading(props) {
  // Récupère les données de <Heading> </Heading> dans Product.js
  const {
    children,
    variant,
    theme, //style
    display, // color
  } = props;

  const classDefault = "mt-5 uppercase";
  let font, color;

  switch (theme) {
    case "secondary":
      font = "font-secondary";
      break;
    default:
      font = "tracking-tighter";
  }

  switch (display) {
    case "gray":
      color = "text-yellow-600";
      break;
    default:
      color = "text-secondary";
  }

  switch (variant) {
    case "h2":
      // ecrire return a cause de <div>
      return (
        <div className="flex items-center justify-center my-5">
          <h2 className={`text-2xl ${classDefault}  ${font}   ${color}`}>
            {children}
          </h2>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2
            className={` ${
              theme === "secondary" ? "text-5xl" : "text-3xl"
              // si theme est secondary alors text-5xl sinon si c'est default retourne text-3xl
            } ${classDefault} ${font} ${color}`}
          >
            {children}
          </h2>
        </div>
      );
  }
}
