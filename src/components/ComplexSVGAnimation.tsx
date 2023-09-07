import React, { useState, useEffect } from "react";
import styles from "../styles/ComplexSVGAnimation.module.css";

const ComplexSVGAnimation = () => {
  return (
    <div className={styles.centerContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        {/* Use a 'g' element to apply the translation animation to the image */}
        <g className={styles.imageContainer}>
          <image href="/zeekeezlogo.svg" width="180" height="180" />
        </g>
      </svg>
    </div>
  );
};

export default ComplexSVGAnimation;
