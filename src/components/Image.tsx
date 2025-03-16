import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

/**
 * A wrapper component for images that properly handles both local and remote images
 */
const Image: React.FC<ImageProps> = ({ src, alt, className, width, height, style }) => {
  // Use a fallback image if the provided image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://i.imgur.com/YQjkBdx.jpg';
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default Image; 