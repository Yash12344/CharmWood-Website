'use client';

import { useEffect, useState } from 'react';

type Props = {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
};

/**
 * A drop-in <img> that tries the local file first and falls back to a
 * remote URL if the local file is missing (e.g. the client hasn't added
 * the real photo yet). Keeps the sample website looking complete while
 * letting the school swap in real photos by dropping files into
 * /public/images/... with the same filename.
 */
export function Photo({
  src,
  fallback,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
