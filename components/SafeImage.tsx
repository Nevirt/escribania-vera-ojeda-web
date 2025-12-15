'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  style?: React.CSSProperties;
  className?: string;
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  fill,
  priority = false,
  style,
  className,
  fallbackText,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <Box
        sx={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F5F5',
          color: '#999',
          fontStyle: 'italic',
          ...style,
        }}
        className={className}
      >
        <Typography variant="body2">
          {fallbackText || 'Imagen no disponible'}
        </Typography>
      </Box>
    );
  }

  const baseStyle = style || {};
  const objectFitValue = (baseStyle.objectFit as React.CSSProperties['objectFit']) || 'cover';
  
  const imageProps = fill
    ? {
        fill: true,
        style: { 
          ...baseStyle, 
          objectFit: objectFitValue,
        } as React.CSSProperties,
      }
    : {
        width,
        height,
        style: baseStyle,
      };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        className={className}
      />
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
          }}
        >
          <Typography variant="body2" sx={{ color: '#999' }}>
            Cargando...
          </Typography>
        </Box>
      )}
    </Box>
  );
}

