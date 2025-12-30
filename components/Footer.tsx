'use client';

import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook, Instagram } from '@mui/icons-material';
import AnimatedSection from '@/components/AnimatedSection';

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

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: '#CA9954',
  },
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <AnimatedSection delay={0} direction="fade" duration={600}>
          <FooterTitle>
            Estudio Notarial Vera Ojeda
          </FooterTitle>
        </AnimatedSection>
        <AnimatedSection delay={200} direction="fade" duration={600}>
          <FooterText>
            Escribana Teresa Dejesus Vera Ojeda - Registro Notarial N° 316
          </FooterText>
          <FooterText>
            Ruta Py 01 (ex Acceso Sur) entre Belén y Juan S. Bogarín
          </FooterText>
          <FooterText>
            Tel: +595 971 224 261 | Email: escribaniaveraojeda@hotmail.com
          </FooterText>
        </AnimatedSection>
        <AnimatedSection delay={300} direction="fade" duration={600}>
          <SocialLinks>
            <Link
              href="https://www.instagram.com/notariaveraojeda"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <SocialIcon aria-label="Instagram">
                <Instagram />
              </SocialIcon>
            </Link>
            <Link
              href="https://www.facebook.com/EstudioNotarialVERAOJEDA"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <SocialIcon aria-label="Facebook">
                <Facebook />
              </SocialIcon>
            </Link>
          </SocialLinks>
        </AnimatedSection>
        <AnimatedSection delay={400} direction="fade" duration={600}>
          <FooterText>
            © {currentYear} Powered by Innomia. Todos los derechos reservados.
          </FooterText>
        </AnimatedSection>
      </Container>
    </FooterContainer>
  );
}

