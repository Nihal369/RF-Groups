import React, { useState } from 'react';
import './Gallery.css'; // We'll create this CSS file

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these with your actual image paths
  const images = [
    {
      src: '/images/storage-1.jpg',
      title: 'Main Storage Facility',
    },
    {
      src: '/images/storage-2.jpg',
      title: 'Main Storage Facility',
    },
    {
      src: '/images/storage-3.jpg',
      title: 'Main Storage Facility',
    },
    {
      src: '/images/storage-4.jpg',
      title: 'Main Storage Facility',
    },
    {
      src: '/images/storage-5.jpg',
      title: 'Main Storage Facility',
    },
    {
      src: '/images/storage-6.jpg',
      title: 'Main Storage Facility',
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image, index)}
            >
              <img src={image.src} alt={image.title} />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>{image.title}</h4>
                  <p>Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            
            <button className="nav-button prev-button" onClick={goToPrevious}>
              ‹
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
              />
              <div className="image-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <div className="image-counter">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </div>
            
            <button className="nav-button next-button" onClick={goToNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;