import React from "react";
import HeroTop from "../components/marketing/pageSection/HeroTop";
import LastProduct from "../components/marketing/pageSection/LastProduct";
import Product from "../components/marketing/pageSection/Product";
import Event from "../components/marketing/pageSection/Event";
import Booking from "../components/marketing/pageSection/Booking";
// import TripleBurgers from "../components/marketing/pageSection/TripleBurgers";

const HomePage = () => {
  return (
    <div>
      <HeroTop />
      <LastProduct />
      <Product />
      <Event />
      <Booking />
      {/* <TripleBurgers />  */}
    </div>
  );
};

export default HomePage;
