import Contacts from "components/Contacts";
import Education from "components/Education";
import FavoriteTechnology from "components/FavoriteTechnology";
import Hero from "components/Hero";
import Template from "components/layout/Template";
import Projects from "components/Projects";
import Work from "components/Work";
import React from "react";

function Home() {
  return (
    <Template>
      <Hero />
      <Education />
      <Work />
      <Projects />
      <FavoriteTechnology />
      <Contacts />
    </Template>
  );
}

export default Home;
