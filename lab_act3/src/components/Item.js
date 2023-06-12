import React, { useRef, useState } from 'react';
import './Item.css';
import { useMediaQuery } from 'react-responsive';

const Item = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'images/haircut2.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'images/haircut3.jpg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'images/haircut4.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'images/haircut6.jpg',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'images/Bald-Fades.jpg',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: 'images/haircut7.jpg',
      alt: 'Image 6',
    },
    {
      id: 7,
      src: 'images/haircut9.jpg',
      alt: 'Image 7',
    },
    {
      id: 8,
      src: 'images/Top-Knotd.jpg',
      alt: 'Image 8',
    },
    {
      id: 9,
      src: 'images/haircut10.jpg',
      alt: 'Image 9',
    },
  ];

  const overlayRef = useRef(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const handleMouseOver = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = 1;
    }
  };

  const handleMouseOut = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = 0;
    }
  };

  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="item-container" id="item-container">
      <h1 className="item-header">Check Out These Cool Haircuts!</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => openFullscreenImage(image)}
            className={`relative overflow-hidden image-container ${
              isDesktopOrLaptop ? 'desktop' : ''
            } ${isTabletOrMobileDevice ? 'mobile' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="overlay" ref={overlayRef}></div>
            <div className="overlay-text">
              <h2 className="text-lg">Get This Haircut Now!</h2>
            </div>
          </div>
        ))}
      </div>

      <h1 className="item-header my-20">The Best Shears in Town!</h1>
      <div className="video-trailer" id="video-trailer">
      <div className="video-trailer" id='video-trailer'>
        {isDesktopOrLaptop && (
          <iframe
            width="560"
            height="315"
            src="videos\BarberTrailer.mp4"
            title="Video Trailer"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        
        {isTabletOrMobileDevice && (
          <iframe
          width="560"
          height="315"
          src="videos\BarberTrailer.mp4"
          title="Video Trailer"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        )}
      </div>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-image-overlay">
          <button
            className="fullscreen-exit-button"
            onClick={closeFullscreenImage}
          >
            ✖
          </button>
          <img
            className="fullscreen-image"
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
          />
        </div>
      )}
    </div>
  );
};

export default Item;
