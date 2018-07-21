import React, { Component } from "react";
import styles from "./css/index.css";
import Loadable from "react-loadable";
import WOW from "wowjs";

function Loading(props) {
  if (props.error) {
    console.log(props.error);
    return (
      <div className={styles.container_loader}>
        <div className={styles.error}>
          Lo sentimos hubo un error!
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div className={styles.container_loader}>
        <div className={styles.error}>
          Esta sección está tomando demasiado tiempo para cargar...
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container_loader}>
        <div className={styles.loader} />
      </div>
    );
  }
}

const AsyncHome = Loadable({
  loader: () => import("./components/Home.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncCarousel = Loadable({
  loader: () => import("./components/Carousel.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncContent = Loadable({
  loader: () => import("./components/Content.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncSlider = Loadable({
  loader: () => import("./components/Slider.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncFooter = Loadable({
  loader: () => import("./components/Footer.jsx"),
  loading: Loading,
  timeout: 20000
});

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
        <AsyncHome />
        <AsyncCarousel />
        <AsyncContent />
        <AsyncSlider />
        <AsyncFooter />
      </div>
    );
  }
}
