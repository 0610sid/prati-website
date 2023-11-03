import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const three = useMediaQuery("(max-width: 1300px)");
  const two = useMediaQuery("(max-width: 1000px)");
  const one = useMediaQuery("(max-width: 700px)");
  const dividingFactor = three ? (two ? (one ? 1 : 2) : 3) : 4;

  const arrayLength = Math.ceil(
    React.Children.count(children) / dividingFactor
  );
  const repeat = Array.from(Array(arrayLength).keys());

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = arrayLength - 1;
    } else if (newIndex >= arrayLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            width: three ? (two ? (one ? "100%" : "50%") : "33.33%") : "25%",
          });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          &lt;
        </button>
        {repeat.map((dot, index) => {
          return (
            <button
              key={dot}
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              &bull;
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
