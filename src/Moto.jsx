import React, { Component } from "react";
import styles from "./css/index.css";

import "animate.css";
import WOW from "wowjs";

// Components
import Home from "./components/Home.jsx";
import Carousel from "./components/Carousel.jsx";
import Content from "./components/Content.jsx";

export default class Moto extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className={styles.container}>
        <Home />
        <Carousel />
        <Content />
        {/*
        <section className={styles.section4}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>A</div>
              <div className={styles.B}>B</div>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>A</div>
            </div>
          </div>
        </section>*/}
      </div>
    );
  }
}
