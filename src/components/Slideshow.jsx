import React, { Component } from "react";
import styles from "../css/index.css";

export default class Slideshow extends Component {
  render() {
    return (
      <div className={styles.column}>
        <div className={styles.A}>
          <h2>{this.props.title}</h2>
        </div>
        <div className={styles.B}>
          <p>{this.props.description}</p>
        </div>
        <div className={styles.C}>
          <img src={this.props.img} alt={this.props.title} />
        </div>
      </div>
    );
  }
}
