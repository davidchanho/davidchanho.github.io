import Contacts from "components/Contacts";
import ContactsToast from "components/ContactsToast";
import Education from "components/Education";
import FavoriteTechnology from "components/FavoriteTechnology";
import Hero from "components/Hero";
import Footer from "components/layout/Footer";
import ScrollToTop from "components/layout/ScrollToTop";
import Template from "components/layout/Template";
import Projects from "components/Projects";
import Work from "components/Work";
import React, { useState } from "react";

function Home() {
  const [message, setMessage] = useState<string>();

  return (
    <Template>
      <div id='about' />
      <Hero />
      <div id='education' />
      <Education />
      <div id='work' />
      <Work />
      <div id='projects' />
      <Projects />
      <div id='tech' />
      <FavoriteTechnology />
      <div id='contacts' />
      <Contacts setMessage={setMessage} />
      <Footer>{message && <ContactsToast message={message} />} <ScrollToTop /></Footer>
    </Template>
  );
}

export default Home;
