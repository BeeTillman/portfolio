/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
import Cursor from "./Components/Cursor";
import Skills from "./Components/Skills";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Billups Tillman",
  title: "Software Engineer",
  email: "bpt3creations@gmail.com",
  gitHub: "beetillman",
  instagram: "letschillwithbill",
  linkedIn: "billups-tillman",
  medium: "",
  twitter: "",
  youTube: "FortunaInteractive",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const isDesktop = () => {
    return (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
      window.innerWidth > 768
    );
  };

  return (
    <div id="main">
      {isDesktop() && <Cursor />}
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <Portfolio />
      <Skills />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
