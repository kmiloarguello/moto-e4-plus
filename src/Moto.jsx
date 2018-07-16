import React, { Component } from "react";
import styles from "./css/index.css";

export default class Moto extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section1}>
          <div class={styles.A} />
          <div class={styles.B} />
        </section>
        <section className={styles.section2}>
          <div class={styles.A} />
          <div class={styles.B} />
          <div class={styles.C} />
        </section>
        <section className={styles.section3}>
          <div class={styles.A} />
        </section>
        <section className={styles.section4}>
          <div class={styles.A} />
          <div class={styles.B} />
        </section>
        <section className={styles.section5}>
          <div class={styles.A} />
        </section>
      </div>
    );
  }
}
