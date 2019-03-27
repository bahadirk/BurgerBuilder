import React from "react";

import styles from "./BuildControl.module.css";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}>More</button>
  </div>
);

export default buildControl;
