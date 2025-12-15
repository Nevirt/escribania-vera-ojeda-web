'use client';

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#294549',
  padding: theme.spacing(6, 0),
  color: '#FFFFFF',
  textAlign: 'center',
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1rem',
  color: '#FFFFFF',
  opacity: 0.9,
  marginBottom: theme.spacing(1),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 700,
  fontSize: '1.25rem',
  color: '#FFFFFF',
  marginBottom: theme.spacing(2),
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterTitle>
          Vera Ojeda – Estudio Notarial
        </FooterTitle>
        <FooterText>
          © {currentYear} Vera Ojeda – Estudio Notarial. Todos los derechos reservados.
        </FooterText>
      </Container>
    </FooterContainer>
  );
}

