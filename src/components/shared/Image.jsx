import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Image = ({ src, alt, className, loading = "lazy" }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !imageSrc) {
      setImageSrc(src);
    }
  }, [inView, src, imageSrc]);

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
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={loading}
          className={`${className} ${
            !isLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default Image;
