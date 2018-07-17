import React, { Component } from "react";
import styles from "../css/index.css";
import s3_bateria from '../arquivos/img/section3/bateria.png'
import s3_camaras from '../arquivos/img/section3/camaras.png'
import s3_lector from '../arquivos/img/section3/lector.png';
import s3_pantalla from '../arquivos/img/section3/pantalla.png'
import s3_procesador from '../arquivos/img/section3/procesador.png'

export default class Content extends Component {
  render() {
    return (
      <section className={styles.section3}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.A}>
              <h2>Más metal. Más batería.</h2>
              <p id={styles.paragraph}>
                ¿Eres de los que siempre espera más? El nuevo
                <strong> Moto E Plus</strong> viene con una enorme pantalla HD de
                5.5" y una potente batería de 5000mAh.1 Desbloquea al instante
                tu teléfono con tu huella digital. Toma hermosas fotos y selfies
                incluso en condiciones de poca luz con Flash Selfie. Ve videos,
                juega y obtén más potencia gracias a un procesador quad-core con
                2GB de RAM y una velocidad 4G. El nuevo
                <strong> Moto E Plus</strong>.
              </p>
              <br />
              <ul>
                <li>
                    <img src={s3_pantalla} alt="Pantalla HD"/>
                    <p>Pantalla HD de 5.5" y diseño metálico.</p>
                </li>
                <li>
                    <img src={s3_bateria} alt="Batería de 5000mHh"/>
                    <p>Batería de 5000mAh y carga rápida.</p>
                </li>
                <li>
                    <img src={s3_lector} alt="Lector de huella"/>
                    <p>Lector de huella digital.</p>
                </li>
                <li>
                    <img src={s3_camaras} alt="Cámaras avanzadas"/>
                    <p>Cámaras avanzadas.</p>
                </li>
                <li>
                    <img src={s3_procesador} alt="Procesador Quad-core"/>
                    <p>Procesador Quad-core y velocidad 4G.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
