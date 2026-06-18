import { useEffect, useRef, useState } from "react";
import "./LoadingImage.css";

export default function LoadingImage({
  src,
  fallbackSrc = "",
  alt,
  className = "",
  wrapperClassName = "",
  onLoad = () => {},
  onError = () => {},
  ...props
}) {
  const imageRef = useRef(null);
  const triedFallbackRef = useRef(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    triedFallbackRef.current = false;
    setCurrentSrc(src);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || !image.complete || image.naturalWidth === 0) return;

    setIsLoaded(true);
    onLoad?.({ currentTarget: image, target: image });
  }, [currentSrc]);

  const handleLoad = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    if (fallbackSrc && !triedFallbackRef.current && currentSrc !== fallbackSrc) {
      triedFallbackRef.current = true;
      setIsLoaded(false);
      setCurrentSrc(fallbackSrc);
      return;
    }

    setIsLoaded(true);
    onError?.(event);
  };

  return (
    <span
      className={`loading-image ${isLoaded ? "loading-image--loaded" : ""} ${wrapperClassName}`}
      aria-busy={!isLoaded}
    >
      {!isLoaded && (
        <span className="loading-image__loader" aria-hidden="true">
          <span className="loading-image__spinner" />
        </span>
      )}
      <img
        ref={imageRef}
        src={currentSrc}
        alt={alt}
        className={`loading-image__img ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </span>
  );
}
