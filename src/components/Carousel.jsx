import React, { Component } from "react";
import styles from "../css/index.css";
import Camara from "../arquivos/img/section2/camaras-increibles.png";
import Bateria from "../arquivos/img/section2/hasta-2-dias-de-bateria.png";
import Huella from "../arquivos/img/section2/lector-huella-digital.png";

export default class Carousel extends Component {
  render() {
    return (
      <section className={styles.section2}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.A}>
              <h3>Cámaras increíbles</h3>
              <p>Cámara 13MP + frontal 5MP con selfie flash.</p>
              <p>
                Toma fotos y selfies sumamente nítidas incluso en condiciones de
                poca luz con Flash Selfie.
              </p>
              <img className="wow fadeIn" src={Camara} alt="Cámaras increibles" />
            </div>
            <div className={styles.B}>
              <h3>Hasta 2 días de batería</h3>
              <p>
                + carga rápida<sup>1</sup>.
              </p>
              <p>
                Úsalo hasta por 2 días con una sola carga y cárgalo rápidamente
                con el cargador rápido de 10 W.<sup>1</sup>
              </p>
              <img
                id={styles.bateria}
                src={Bateria}
                alt="Hasta 2 días de batería"
                className="wow fadeIn" data-wow-delay="1s"
              />
            </div>
            <div className={styles.C}>
              <h3>Lector de huella digital</h3>
              <p>Desbloquea al instante tu teléfono con un touch de tu dedo.</p>
              <p>Desbloquea el smartphone al instante con tu huella digital.</p>
              <img src={Huella} alt="Lector de huella digital" className="wow fadeIn" data-wow-delay="2s" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
