import React from "react";
import HeroTop from "../components/marketing/pageSection/HeroTop";
import LastProduct from "../components/marketing/pageSection/LastProduct";
import Product from "../components/marketing/pageSection/Product";

const HomePage = () => {
  return (
    <div>
      <HeroTop />
      <LastProduct />
      <Product/>
    </div>
  );
};

export default HomePage;
