'use client';

import { Box, BoxProps } from '@mui/material';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { styled } from '@mui/material/styles';

interface AnimatedCardProps extends BoxProps {
  delay?: number;
  duration?: number;
}

const AnimatedCardBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isVisible' && prop !== 'delay' && prop !== 'duration',
})<{ 
  isVisible: boolean; 
  delay: number; 
  duration: number;
}>(({ isVisible, delay, duration }) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
  transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  transitionDelay: `${delay}ms`,
  willChange: isVisible ? 'auto' : 'opacity, transform',
}));

export default function AnimatedCard({
  children,
  delay = 0,
  duration = 500,
  ...props
}: AnimatedCardProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
    triggerOnce: true,
  });

  return (
    <AnimatedCardBox
      ref={ref}
      isVisible={isVisible}
      delay={delay}
      duration={duration}
      {...props}
    >
      {children}
    </AnimatedCardBox>
  );
}

