import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../context/ThemeContext";

const Image = ({ src, alt, className, loading = "lazy", priority = false }) => {
  const { darkMode } = useTheme();
  const [imageSrc, setImageSrc] = useState(
    priority
      ? typeof src === "object"
        ? darkMode
          ? src.dark
          : src.light
        : src
      : ""
  );
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: priority,
  });

  useEffect(() => {
    if ((inView || priority) && !imageSrc) {
      const img = new window.Image();
      const currentSrc =
        typeof src === "object" ? (darkMode ? src.dark : src.light) : src;
      img.src = currentSrc;
      img.onload = () => {
        setImageSrc(currentSrc);
      };
      img.onerror = handleError;
    }
  }, [inView, src, imageSrc, priority, darkMode]);

  useEffect(() => {
    if (typeof src === "object") {
      setImageSrc(darkMode ? src.dark : src.light);
    }
  }, [darkMode, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setImageSrc("/fallback-image.png");
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        WebkitPerspective: 1000,
        perspective: 1000,
      }}
    >
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
          }}
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? "eager" : loading}
          className={`${className} ${
            !isLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300 max-w-full h-auto will-change-transform`}
          onLoad={handleLoad}
          onError={handleError}
          fetchPriority={priority ? "high" : "auto"}
          style={{
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            WebkitUserSelect: "none",
            userSelect: "none",
            WebkitTouchCallout: "none",
            touchCallout: "none",
          }}
          draggable="false"
        />
      )}
    </div>
  );
};

export default Image;
