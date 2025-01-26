import React, { useState, useEffect } from "react";

const ToTopPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll back to the top
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 flex items-center justify-center w-9 h-11 border-[1px] border-black bg-white cursor-pointer z-50"
          onClick={scrollToTop}
        >
          &#8593;
        </div>
      )}
    </>
  );
};

export default ToTopPage;
