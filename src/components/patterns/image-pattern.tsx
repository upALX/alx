import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  needsCompleteLoad?: boolean;
  fallbackSrc?: string;
}

export function ImagePattern({
  src,
  alt,
  width,
  height,
  needsCompleteLoad = false,
  fallbackSrc = '/image-fallback.svg',
}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const isExternal = src.startsWith('http');

  useEffect(() => {
    if (isExternal) {
      const img = new window.Image();
      img.src = src;

      img.onload = () => {
        setIsLoading(false);
      };
    } else {
      setIsLoading(false);
    }
  }, [src, isExternal]);

  return (
    <div style={{ position: 'relative' }}>
      {isExternal && isLoading && (
        <Image
          src={fallbackSrc}
          alt="Image fallback"
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
        />
      )}

      {!isLoading && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          unoptimized={isExternal}
          priority={needsCompleteLoad}
        />
      )}
    </div>
  );
}
