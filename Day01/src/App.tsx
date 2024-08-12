import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import Person from "./assets/person.png";
import React, { useEffect, useState } from "react";
import RightArrow from "./assets/Vector.png";

const dataTestimonial = [
  {
    id: 1,
    name: "John Doe",
    rating: "96",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 2,
    name: "John One",
    rating: "98",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 3,
    name: "John Two",
    rating: "99",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 4,
    name: "John Three",
    rating: "96",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 5,
    name: "John Four",
    rating: "95",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 6,
    name: "Lance Jarvis",
    rating: "97",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 7,
    name: "Lance Jarvis",
    rating: "98",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 8,
    name: "Lance Jarvis",
    rating: "98",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 9,
    name: "Lance Jarvis",
    rating: "96",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
  {
    id: 10,
    name: "Lance Jarvis",
    rating: "97",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel varius quisque ac.",
    avatar: { Person },
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + 3 < dataTestimonial.length) {
      setDirection("next");
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setDirection("prev");
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="page">
      <div className={`testimonial-area ${direction}`}>
        {dataTestimonial
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card-wrapper">
              <TestimonialCard
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                userName={testimonial.name}
                image={Person}
              />
            </div>
          ))}
      </div>
      <div className="arrows-area">
        <div className="arrow">
          <button onClick={handlePrev} hidden={currentIndex === 0}>
            <img src={RightArrow} className="left-arrow-image" />
          </button>
        </div>
        <div className="arrow">
          <button
            onClick={handleNext}
            hidden={currentIndex + 3 >= dataTestimonial.length}
          >
            <img src={RightArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
