import React from "react";
import HeroTop from "../components/marketing/pageSection/HeroTop";
import LastProduct from "../components/marketing/pageSection/LastProduct";
import Product from "../components/marketing/pageSection/Product";
// import TripleBurgers from "../components/marketing/pageSection/TripleBurgers";

const HomePage = () => {
  return (
    <div>
      <HeroTop />
      <LastProduct />
      <Product />
      {/* <TripleBurgers />  */}
    </div>
  );
};

export default HomePage;
