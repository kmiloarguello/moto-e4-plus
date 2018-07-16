import React, { Component } from "react";
import styles from "./css/index.css";

export default class Moto extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.A}>A</div>
              <div className={styles.B}>B</div>
            </div>
          </div>
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
