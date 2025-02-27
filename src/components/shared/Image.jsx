import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Image = ({ src, alt, className, loading = "lazy", priority = false }) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : "");
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
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
      };
      img.onerror = handleError;
    }
  }, [inView, src, imageSrc, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setImageSrc("/fallback-image.png");
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" 
          style={{ backdropFilter: "blur(8px)" }}
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? "eager" : loading}
          className={`${className} ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </div>
  );
};

export default Image;
