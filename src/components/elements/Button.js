import React from "react";

const Button = ({ children, className, color, theme }) => {
  let background;
  //1ere Facon:
  // if (color === "secondary") {
  //   background = "bg-secondary hover:bg-secondary-hover";
  // } else if (color === "danger") {S
  //   background = "bg-red-primary hover:bg-red-primary-hover";
  // } else {
  //   background = "bg-primary hover:bg-primary-hover";
  // }

  //2eme Facon:

  switch (color) {
    case "secondary":
      background = "bg-secondary hover:bg-secondary-hover";
      break;
    case "danger":
      background = "bg-red-primary hover:bg-red-primary-hover";
      break;
    default:
      background = "bg-primary hover:bg-primary-hover";
  }

  switch (theme) {
    case "small":
      return (
        <div>
          <button
            className={`${className} ${background} mt-6 px-4 py-2 uppercase shadow-xl text-white text-xs
              font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
    case "big":
      return (
        <div>
          <button
            className={`${className} ${background} mt-6 px-8 py-4 uppercase shadow-xl tracking-widest text-white 
             text-base font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
    case "pop":
      return (
        <div>
          <button
            className={`${className} ${background} mt-6 px-8 py-4 uppercase shadow-xl  text-white 
             text-base font-secondary animate`}
          >
            {children}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button
            className={`${className} ${background} mt-6 px-4 py-3 uppercase shadow-xl text-white 
             text-sm font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
  }
};

export default Button;
