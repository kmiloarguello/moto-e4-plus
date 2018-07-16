import React, { Component } from "react";
import styles from "./css/index.css";

export default class Moto extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section1}>
          <div class={styles.A}>A</div>
          <div class={styles.B}>B</div>
        </section>
        <section className={styles.section2}>
          <div class={styles.A}>A</div>
          <div class={styles.B}>B</div>
          <div class={styles.C}>C</div>
        </section>
        <section className={styles.section3}>
          <div class={styles.A}>A</div>
        </section>
        <section className={styles.section4}>
          <div class={styles.A}>A</div>
          <div class={styles.B}>B</div>
        </section>
        <section className={styles.section5}>
          <div class={styles.A}>A</div>
        </section>
      </div>
    );
  }
}
