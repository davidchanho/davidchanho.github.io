import Contacts from "components/Contacts";
import ContactsToast from "components/ContactsToast";
import Education from "components/Education";
import FavoriteTechnology from "components/FavoriteTechnology";
import Hero from "components/Hero";
import Footer from "components/layout/Footer";
import ScrollToTop from "components/layout/ScrollToTop";
import Template from "components/layout/Template";
import Projects from "components/Projects";
import React, { useState } from "react";

function Home() {
  const [message, setMessage] = useState<string>();

  return (
    <Template>
      <Hero />
      <Education />
      {/* <Element name="work">
        <Work />
      </Element> */}
      <Projects />
      <FavoriteTechnology />
      <Contacts setMessage={setMessage} />
      <Footer>{message && <ContactsToast message={message} />} <ScrollToTop /></Footer>
    </Template>
  );
}

export default Home;
