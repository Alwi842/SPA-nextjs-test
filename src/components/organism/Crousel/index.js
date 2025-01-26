import { useEffect, useState } from "react";
const Carousel = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 4)); // Loop back when we reach the last set of images
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % (slides.length - 4) // Loop back when we reach the first set
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs once when the component mounts
  return (
    <section>
      <div className="py-10 relative w-full max-w-6xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 200}px)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[200px] h-[100px] flex-shrink-0 mx-2"
              >
                <img
                  src={slide}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          &#10095;
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
