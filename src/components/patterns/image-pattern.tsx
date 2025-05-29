import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypographyPattern } from './typography-pattern';
import { FcIdea } from 'react-icons/fc';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  needsCompleteLoad?: boolean;
}

export function ImagePattern({
  src,
  alt,
  width,
  height,
  needsCompleteLoad = false,
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
        <div className="flex flex-col items-center">
          <FcIdea className="animate-pulse w-6 h-8" />
          <TypographyPattern
            type="small"
            text="Decoding photons..."
          />
        </div>
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
