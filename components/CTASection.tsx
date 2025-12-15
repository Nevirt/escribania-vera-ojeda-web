'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
  },
}));

export default function CTASection() {
  return (
    <CTAContainer>
      <Container maxWidth="lg">
        <CTAText>
          Un respaldo legal sólido para cada decisión importante
        </CTAText>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#CA9954',
            color: '#FFFFFF',
            padding: '14px 40px',
            fontSize: '1.125rem',
            '&:hover': {
              backgroundColor: '#B88944',
            },
          }}
        >
          Contactar al Estudio
        </Button>
      </Container>
    </CTAContainer>
  );
}

