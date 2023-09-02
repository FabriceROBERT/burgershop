import React from "react";

export default function Heading(props) {
  // Récupère les données de <Heading> </Heading> dans Product.js
  const {
    children,
    variant,
    theme, //style
    display, // color
    alignement,
    className,
  } = props;

  const classDefault = " uppercase";
  let font, color, align;

  switch (theme) {
    case "secondary":
      font = "font-secondary";
      break;
    default:
      font = "tracking-tighter";
  }

  switch (alignement) {
    case "center":
      align = "justify-center";
      break;
    case "right":
      align = "justify-end";
      break;

    default:
      align = "text-start";
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
        <div className={`flex  ${align} `}>
          <h2
            className={`text-2xl ${classDefault}  ${font}   ${color}  ${className}`}
            >
            {children}
          </h2>
        </div>
      );
    case "h4":
      // ecrire return a cause de <div>
      return (
        <div className={`flex ${align}`}>
          <h4
            className={`text-lg ${classDefault}  ${font}   ${color}  ${className}`}
          >
            {children}
          </h4>
        </div>
      );
    default:
      return (
        <div className={`flex ${align}`}>
          <h2
            className={` ${
              theme === "secondary" ? "text-5xl" : "text-3xl"
              // si theme est secondary alors text-5xl sinon si c'est default retourne text-3xl
            } ${classDefault} ${font} ${color}  ${className}`}
          >
            {children}
          </h2>
        </div>
      );
  }
}
