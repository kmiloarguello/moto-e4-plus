import React, { Component } from "react";
import styles from "../css/index.css";
import logo_footer from '../arquivos/img/section5/logo-motorola-footer.png'

export default class Slider extends Component {
  render() {
    return (
      <section className={styles.section5}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.A}>
              <img src={logo_footer} alt="Logo de Motorola" />
              <p>
                Moto E4 Plus está diseñado y fabricado por Motorola Mobility
                LLC, una filial de propiedad de Lenovo.
              </p>
              <p>
                MOTOROLA, el logo estilizado de la M, MOTO y la familia MOTO son
                marcas registradas de Motorola Trademark Holdings, LLC. Android
                es una marca registrada de Google Inc. Todas las demás marcas
                comerciales son propiedad de sus respectivos dueños. &#169; 2017
                Motorola Mobility LLC. Todos los derechos reservados.
              </p>
              <p>
                1) Todas las referencias de la vida de la batería son
                aproximadas y están basadas en el perfil de un uso variado
                estándar. El perfil de uso variado se basa en dispositivos
                Motorola en las principales redes 4G LTE con excelente cobertura
                e incluye tanto el tiempo de uso como en espera. El rendimiento
                real de la batería varía y depende de muchos factores, entre
                otros, la intensidad de la señal, la configuración de la red, la
                antigüedad de la batería, la temperatura de funcionamiento, las
                caracteríasticas seleccionadas, la configuración del dispositivo
                y los patrones de uso de las funciones de voz o datos y el resto
                de las aplicaciones.
              </p>
              <p>
                Los colores y disponibilidad pueden variar dependiendo del
                mercado. Ciertas funciones, la funcionalidad y las
                especificaciones del producto dependen de la red y están sujeras
                a términos, condiciones y cargos adicionales. Todas están
                sujetas a cambios sin previo aviso.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
