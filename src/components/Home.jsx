import React, { Component } from "react";
import styles from "../css/index.css";
import motorola_logo from "../arquivos/img/motorola-logo.png";
import phone_back from "../arquivos/img/section1/back.png";
import phone_front from "../arquivos/img/section1/front.png";

export default class Home extends Component {
  handleBuy() {
    console.log("Should make something!");
  }
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
            </div>
            <div className={styles.B}>
              <h3 className="wow fadeIn" data-wow-delay="1s">
                Pantalla de <br />
                <span>5.5" HD</span>
              </h3>
              <h3 className="wow fadeIn" data-wow-delay="1.5s">
                Una sola carga hasta <br />
                <span>2 días de batería</span>
              </h3>
              <button
                onClick={() => this.handleBuy()}
                className="wow bounceIn"
                data-wow-delay="2s"
              >
                Comprar
              </button>
            </div>
            <div className={styles.C}>
              <img
                id={styles.phone_front}
                src={phone_front}
                alt="Telefono frontal"
                className="wow fadeInUp"
                data-wow-delay=".3s"
              />
              <img
                id={styles.phone_back}
                src={phone_back}
                alt="Telefono atras"
                className="wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
