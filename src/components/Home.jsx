import React, { Component } from "react";
import styles from "../css/index.css";
import motorola_logo from "../arquivos/img/motorola-logo.png";
import seccion1_fondo from "../arquivos/img/background-section-1.jpg";
import phone_back from "../arquivos/img/section1/back.png";
import phone_front from "../arquivos/img/section1/front.png";

export default class Home extends Component {
  render() {
    return (
      <section className={styles.section1}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.A}>
              <img src={motorola_logo} alt="Logo de Motorola" />
              <h1>
                <span>nuevo</span>
                <br />moto e<sup>4</sup> plus
              </h1>
              <h3>
                Pantalla de <br />
                <span>5.5" HD</span>
              </h3>
              <h3>
                Una sola carga hasta <br />
                <span>2 días de batería</span>
              </h3>
              <button>Comprar</button>
            </div>
            <div className={styles.B}>
              <img
                id={styles.phone_front}
                src={phone_front}
                alt="Telefono frontal"
              />
              <img
                id={styles.phone_back}
                src={phone_back}
                alt="Telefono atras"
              />
            </div>
          </div>
        </div>
        {/*<img id={styles.bg} src={seccion1_fondo} alt="Fondo de seccion1" />*/}
      </section>
    );
  }
}