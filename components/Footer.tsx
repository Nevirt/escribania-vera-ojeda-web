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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1rem',
  color: '#FFFFFF',
  opacity: 0.9,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(0.75),
    padding: theme.spacing(0, 2),
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 700,
  fontSize: '1.25rem',
  color: '#FFFFFF',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0, 2),
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
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
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
          <FooterText sx={{ 
            display: { xs: 'flex', sm: 'block' }, 
            flexDirection: { xs: 'column' },
            gap: { xs: 0.5 },
          }}>
            <Box component="span">Tel: +595 971 224 261</Box>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}> | </Box>
            <Box component="span">Email: escribaniaveraojeda@hotmail.com</Box>
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
          <FooterText sx={{ 
            fontSize: { xs: '0.8125rem', sm: '1rem' },
            opacity: 0.8,
            marginTop: { xs: 1, sm: 0 },
          }}>
            © {currentYear} Powered by Innomia. Todos los derechos reservados.
          </FooterText>
        </AnimatedSection>
      </Container>
    </FooterContainer>
  );
}

