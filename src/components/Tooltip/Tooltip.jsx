import React from "react";
import styles from "./Tooltip.module.scss";

const Tooltip = () => {
  return (
    <>
      <div className={styles["tooltip"]}>
        <div className={styles["tooltip_box-1"]}></div>
        <div className={styles["tooltip_box-2"]}></div>
        <div className={styles["tooltip_box-3"]}></div>
      </div>
    </>
  );
};

export default Tooltip;
