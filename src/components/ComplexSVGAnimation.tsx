import React, { useState, useEffect } from "react";
import styles from "../styles/ComplexSVGAnimation.module.css";

const ComplexSVGAnimation = () => {
  return (
    <div className={styles.centerContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250">
        {/* Place the title above the image */}

        {/* Use a 'g' element to apply the translation animation to the image */}
        <g className={styles.imageContainer}>
          <image
            href="/zeekezz.webp" // Update the path to your local image
            width="200" // Adjust the width as needed
            height="200" // Adjust the height as needed
          />
        </g>
      </svg>
    </div>
  );
};

export default ComplexSVGAnimation;
