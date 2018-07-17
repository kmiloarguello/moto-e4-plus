import React, { Component } from "react";
import styles from "../css/index.css";
import Slideshow from "./Slideshow.jsx";

import s1 from "../arquivos/img/section4/s1.png";
import s2 from "../arquivos/img/section4/s2.png";
import s3 from "../arquivos/img/section4/s3.png";
import s4 from "../arquivos/img/section4/s4.png";
import s5 from "../arquivos/img/section4/s5.png";

import bg_s1 from "../arquivos/img/section4/bg-s1.png";
import bg_s2 from "../arquivos/img/section4/bg-s2.png";
import bg_s3 from "../arquivos/img/section4/bg-s3.png";
import bg_s4 from "../arquivos/img/section4/bg-s4.png";
import bg_s5 from "../arquivos/img/section4/bg-s5.png";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      isWhite: false,
      color: "#333f48"
    };
  }
  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }
  currentSlide(n) {
    this.showSlides((this.state.slideIndex = n));
  }
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(styles.slide);
    let dots = document.getElementsByClassName(styles.dot);
    let bg = document.getElementsByClassName(styles.section4)[0];

    if (n > slides.length) {
      this.setState({
        slideIndex: 1
      });
    }
    if (n < 1) {
      this.setstate({
        slideIndex: slides.length
      });
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex - 1].style.display = "block";
    dots[this.state.slideIndex - 1].className += " active";

    /**
     * To do: Refactor of this
     */
    if (this.state.slideIndex == 1) {
      bg.style.backgroundImage = "url(" + bg_s1 + ")";
      this.setState({
        color: "#333f48"
      });
    } else if (this.state.slideIndex == 2) {
      bg.style.backgroundImage = "url(" + bg_s2 + ")";
      this.setState({
        color: "white"
      });
    } else if (this.state.slideIndex == 3) {
      bg.style.backgroundImage = "url(" + bg_s3 + ")";
      this.setState({
        color: "white"
      });
    } else if (this.state.slideIndex == 4) {
      bg.style.backgroundImage = "url(" + bg_s4 + ")";
      this.setState({
        color: "white"
      });
    } else {
      bg.style.backgroundImage = "url(" + bg_s5 + ")";
      this.setState({
        color: "#333f48"
      });
    }
  }
  render() {
    return (
      <section className={styles.section4}>
        <div className={styles.row}>
          <Slideshow
            title="Grande y brillante"
            description="Cuando veas la vibrante pantalla de 5.5'' y su increíble diseño metálico, no querrás dejarla. Elige entre los sofisticados acabados en gris metálico, y dorado. "
            img={s1}

            color={this.state.color}
          />
          <Slideshow
            title="Sonrisas por todas partes"
            description="Nunca te pierdas un momento. La cámara de enfoque automático de 13 MP toma excelentes fotos, incluso con poca luz. Además, toma selfies dignas de compartir gracias a una cámara de 5MP con su flash para selfies. "
            img={s2}

            color={this.state.color}
          />
          <Slideshow
            title="Espera lo mejor"
            description={[
              "Funciona con Android",
              <sup>TM</sup>,
              " 7.1, una versión actualizada del sistema operativo más famosos del mundo. Ahora gastar menos no es sinónimo de conformarse con menos."
            ]}
            img={s3}
            color={this.state.color}
          />
          <Slideshow
            title="Super potente"
            description={[
              "Gracias a la batería de 5000 mAh, puedes usarlo días sin preocuparte por la duración de la batería.1 Y cuando sea hora de recargar, no bajes el ritmo. El ",
              <strong>Modo E Plus</strong>,
              "funciona con un cargador rápido de 10W.",
              <br />,
              "*El cargador rápido se vende por separado."
            ]}
            img={s4}
            color={this.state.color}
          />
          <Slideshow
            title="Toca y continúa"
            description="Ya no te preocupes si olvidas la contraseña sólo usa tu huella digital y desbloquea el smartphone para que puedas acceder a lo que más te gusta con mayor rapidez."
            img={s5}
            color={this.state.color}
          />
          <div id={styles.dot_container}>
            <span className={styles.dot} onClick={() => this.currentSlide(1)} />
            <span className={styles.dot} onClick={() => this.currentSlide(2)} />
            <span className={styles.dot} onClick={() => this.currentSlide(3)} />
            <span className={styles.dot} onClick={() => this.currentSlide(4)} />
            <span className={styles.dot} onClick={() => this.currentSlide(5)} />
          </div>
        </div>
      </section>
    );
  }
}
