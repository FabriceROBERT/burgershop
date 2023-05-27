import React from "react";

export default function HeadingTitles(props) {
  const { children, variant } = props;
  const classDefault =
    "px-7 py-3 bg-primary text-secondary uppercase font-bold inline-block ";
  switch (variant) {
    case "h3":
      return (
        <div className="flex items-center justify-center my-5">
          <h2 className={`text-sm tracking-widest ${classDefault}`}>
            {children}
          </h2>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2 className={` ${classDefault}`}>{children}</h2>
        </div>
      );
  }
}
