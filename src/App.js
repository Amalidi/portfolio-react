import React from "react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;
