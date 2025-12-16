'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '@/components/AnimatedSection';

const CTAContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#294549',
  padding: theme.spacing(10, 0),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const CTAText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1.5rem',
  color: '#FFFFFF',
  marginBottom: theme.spacing(5),
  lineHeight: 1.6,
  maxWidth: '700px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
  },
}));

export default function CTASection() {
  return (
    <CTAContainer>
      <Container maxWidth="lg">
        <AnimatedSection delay={0} direction="up" duration={700}>
          <CTAText>
            Un respaldo legal sólido para cada decisión importante
          </CTAText>
        </AnimatedSection>
        <AnimatedSection delay={200} direction="up" duration={700}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#CA9954',
              color: '#FFFFFF',
              padding: '14px 40px',
              fontSize: '1.125rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#B88944',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(202, 153, 84, 0.3)',
              },
            }}
          >
            Contactar al Estudio
          </Button>
        </AnimatedSection>
      </Container>
    </CTAContainer>
  );
}

