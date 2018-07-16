import React, { Component } from "react";
import styles from "./css/index.css";
import motorola_logo from "./arquivos/img/motorola-logo.png";
import seccion1_fondo from "./arquivos/img/background-section-1.jpg";

export default class Moto extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section1}>
          
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>
                <img src={motorola_logo} alt="Logo de Motorola" />
                <h1>
                  <span>nuevo</span>
                  <br /> moto e4 plus
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
              <div className={styles.B}>B</div>
            </div>
          </div>
          <img id={styles.bg} src={seccion1_fondo} alt="Fondo de seccion1" />
        </section>
        <section className={styles.section2}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>A</div>
              <div className={styles.B}>B</div>
              <div className={styles.C}>C</div>
            </div>
          </div>
        </section>
        <section className={styles.section3}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>A</div>
            </div>
          </div>
        </section>
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
        </section>
      </div>
    );
  }
}
