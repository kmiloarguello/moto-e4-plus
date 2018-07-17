import React, { Component } from "react";
import styles from "../css/index.css";
import Slideshow from "./Slideshow.jsx";

import s1 from "../arquivos/img/section4/s1.png";
import s2 from "../arquivos/img/section4/s2.png";
import s3 from "../arquivos/img/section4/s3.png";
import s4 from "../arquivos/img/section4/s4.png";
import s5 from "../arquivos/img/section4/s5.png";

export default class Slider extends Component {
  render() {
    return (
      <section className={styles.section4}>
        <div className={styles.row}>
          <Slideshow
            title="Grande y brillante"
            description="Cuando veas la vibrante pantalla de 5.5'' y su increíble diseño metálico, no querrás dejarla. Elige entre los sofisticados acabados en gris metálico, y dorado. "
            img={s1}
          />
        </div>
      </section>
    );
  }
}
