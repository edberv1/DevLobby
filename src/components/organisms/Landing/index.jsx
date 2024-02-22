import React from "react";
import ClientHeaderSection from "../../molecules/ClientHeaderSection";
import Cards from "../Cards";
import ContentModule from "../../molecules/ContentModule";
import Newsletter from "../../molecules/Newsletter";

const Landing = () => {
  return (
    <div>
      <ClientHeaderSection />
      <Cards />
      <ContentModule />
      <Newsletter />
    </div>
  );
};

export default Landing;
