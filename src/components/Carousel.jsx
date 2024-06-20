import React, { useState } from 'react';
import styles from './Carousel.module.css'; // Import CSS module for styling
import Image from 'next/image';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrevImage} className={styles.prevButton}>
        Prev
      </button>
      <Image src={images[currentImageIndex]} alt="carousel" width={150} height={150} className={styles.image} />
      <button onClick={goToNextImage} className={styles.nextButton}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
