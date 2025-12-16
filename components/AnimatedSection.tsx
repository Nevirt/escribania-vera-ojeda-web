'use client';

import { Box, BoxProps } from '@mui/material';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { styled } from '@mui/material/styles';

interface AnimatedSectionProps extends BoxProps {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const AnimatedBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isVisible' && prop !== 'delay' && prop !== 'direction' && prop !== 'duration',
})<{ 
  isVisible: boolean; 
  delay: number; 
  direction: string;
  duration: number;
}>(({ theme, isVisible, delay, direction, duration }) => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      case 'fade':
      default:
        return 'none';
    }
  };

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) translateX(0)' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };
});

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  duration = 600,
  ...props
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <AnimatedBox
      ref={ref}
      isVisible={isVisible}
      delay={delay}
      direction={direction}
      duration={duration}
      {...props}
    >
      {children}
    </AnimatedBox>
  );
}

