import React, { Component } from "react";
import styles from "./css/index.css";

import WOW from "wowjs";

// Components
import Home from "./components/Home.jsx";
import Carousel from "./components/Carousel.jsx";
import Content from "./components/Content.jsx";
import Slider from "./components/Slider.jsx";
import Footer from "./components/Footer.jsx";

export default class Moto extends Component {
  componentDidMount() {
    let loader = document.getElementsByClassName("container_loader")[0];
    if (loader) {
      loader.style.display = "none";
    }

    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className={styles.container}>
        <Home />
        <Carousel />
        <Content />
        <Slider />
        <Footer />
      </div>
    );
  }
}
