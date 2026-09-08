import React, { useState } from 'react';
import Image from 'next/image';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/story1.JPG',
    '/story2.JPG',
    '/story3.JPG',
    '/story4.JPG',
    '/story5.JPG'
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const isActive = diff === 0;
    
    // Only show current image and 2 behind (left and right)
    let translateX = 0;
    let translateZ = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    
    if (diff === 0) {
      // Active image - front and center
      translateX = 0;
      translateZ = 0;
      scale = 1;
      opacity = 1;
      zIndex = 10;
    } else if (diff === 1 || (diff === -(images.length - 1))) {
      // Next image - right side behind
      translateX = 120;
      translateZ = -150;
      scale = 0.7;
      opacity = 0.4;
      zIndex = 5;
    } else if (diff === -1 || (diff === images.length - 1)) {
      // Previous image - left side behind
      translateX = -120;
      translateZ = -150;
      scale = 0.7;
      opacity = 0.4;
      zIndex = 5;
    } else {
      // Hide other images
      translateX = 0;
      translateZ = -300;
      scale = 0.5;
      opacity = 0;
      zIndex = 1;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
    };
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main carousel container */}
      <div 
        className="relative w-96 h-96 mx-auto"
        style={{ perspective: '1000px' }}
      >
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 cursor-pointer"
            style={getImageStyle(index)}
            onClick={goToNext}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={384}
              height={384}
              sizes="384px"
              priority={index === 0}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              draggable={false}
            />
            {/* Overlay for non-active images */}
            {index !== currentIndex && (
              <div className="absolute inset-0 rounded-lg transition-opacity duration-300" />
            )}
          </div>
        ))}
      </div>

      {/* Dot indicators at the bottom, outside carousel */}
      <div className="flex space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-brand-blue-200 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;