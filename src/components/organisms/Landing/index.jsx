import React from "react";
import ClientHeaderSection from "../../molecules/ClientHeaderSection";
import Cards from "../Cards";
import ContentModule from "../../molecules/ContentModule";

const Landing = () => {
  return (
    <div>
      <ClientHeaderSection />
      <Cards />
      <ContentModule />
    </div>
  );
};

export default Landing;
