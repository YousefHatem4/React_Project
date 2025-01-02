import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import image1 from "./../../assets/images1.png";
import image2 from "./../../assets/images2.png";
import image3 from "./../../assets/images3.png";

export default function Portfolio() {
  const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const handleImageClick = (image) => {
    setShowImage(image);
  };

  const handleCloseClick = () => {
    setShowImage(null);
  };

  return (
    <>
      <section className={`${styles.bgContact} mb-4 position-relative`}>
        <h1
          className={`text-center ${styles.color} text-uppercase fw-bold fa-2 pt-4`}
        >
          Portfolio Component
        </h1>
        <div
          className={`${styles.color} d-flex align-items-center justify-content-center mt-1 mb-3`}
        >
          <div className={`${styles.line} me-3`}></div>
          <i className={`${styles.color} fa-solid fa-star`}></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
        <div className="container">
          <div className="row g-5">
            {[image1, image2, image3, image1, image2, image3].map(
              (img, index) => (
                <div className="col-md-4" key={index}>
                  <div className="position-relative">
                    <img
                      src={img}
                      className="w-100 rounded"
                      alt={`Portfolio ${index + 1}`}
                    />
                    <div
                      className={`position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center ${styles.layer}`}
                      onClick={() => handleImageClick(img)}
                    >
                      <i className="fa-5x fa-solid fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {showImage && (
          <div
            className={`position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center`}
            onClick={handleCloseClick}
          >
            <img
              src={showImage}
              className={`${styles.imageWidth} rounded`}
              alt="Enlarged View"
            />
            <button
              className="position-absolute top-0 end-0 m-4 btn btn-danger"
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        )}
      </section>
    </>
  );
}
