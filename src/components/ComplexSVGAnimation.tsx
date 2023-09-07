import React, { useState, useEffect } from "react";
import styles from "../styles/ComplexSVGAnimation.module.css";

const ComplexSVGAnimation = () => {
  return (
    <div className={styles.centerContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        {/* Place the title above the image */}

        {/* Use a 'g' element to apply the translation animation to the image */}
        <g className={styles.imageContainer}>
          <image
            href="/zeekeezlogo.svg" // Update the path to your local image
            width="180" // Adjust the width as needed
            height="180" // Adjust the height as needed
          />
        </g>
      </svg>
    </div>
  );
};

export default ComplexSVGAnimation;
