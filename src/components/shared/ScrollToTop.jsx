import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    const currentScroll = window.pageYOffset;
    const scrollStep = Math.PI / (450 / 15); // Adjust duration here (450ms)
    let count = 0;

    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        count += 1;
        window.scrollTo(0, currentScroll * Math.cos(count * scrollStep));
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg
            hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out
            transform hover:scale-110 z-50
            opacity-90 hover:opacity-100
            animate-fade-in"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
