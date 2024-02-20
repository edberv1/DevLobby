import React from "react";
import ClientHeaderSection from "../../molecules/ClientHeaderSection";
import Cards from "../Cards";
import Newsletter from "../../molecules/Newsletter";

const Landing = () => {
  return (
    <div>
      <ClientHeaderSection />
      <Cards />
      <Newsletter />
    </div>
  );
};

export default Landing;
