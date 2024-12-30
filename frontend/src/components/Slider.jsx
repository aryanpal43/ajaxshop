import { useEffect, useState } from "react";
import "./slider.css";

const Slider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [imageUrls.length]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{
              translate: `${-100 * imageIndex}%`,
              padding: "0  ",
              position: "relative",
              zIndex: 0,
              margin: "70px 0 0 0",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
