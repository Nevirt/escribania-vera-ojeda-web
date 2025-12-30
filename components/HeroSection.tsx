'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#294549',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingTop: '80px',
  paddingBottom: theme.spacing(8),
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '90vh',
    paddingTop: '70px',
    paddingBottom: theme.spacing(4),
  },
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(41, 69, 73, 0.75)',
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
}));

const TextContent = styled(Box)(({ theme }) => ({
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'left',
  width: '100%',
  height: '100%',
}));

const titleStyles = {
  fontFamily: 'Lato',
  fontWeight: 700,
  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '4rem' },
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  marginBottom: { xs: 1.5, md: 2 },
  color: '#FFFFFF',
  textAlign: { xs: 'center', sm: 'left' },
};

const subtitleStyles = {
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
  color: '#CA9954',
  marginBottom: { xs: 2, md: 4 },
  textAlign: { xs: 'center', sm: 'left' },
};

const claimStyles = {
  fontFamily: 'Lato',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
  marginBottom: { xs: 3, md: 5 },
  opacity: 0.95,
  lineHeight: 1.8,
  maxWidth: { xs: '100%', sm: '600px' },
  textAlign: { xs: 'center', sm: 'left' },
};

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeroContainer 
      id="inicio"
      sx={{
        animation: 'fadeIn 1s ease-out',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      }}
    >
      <BackgroundImage>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src="/images/hero-background.jpg"
            alt="Hero Background"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.3,
            }}
            priority
            quality={90}
          />
        </Box>
      </BackgroundImage>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <HeroContent>
          <Grid container spacing={{ xs: 3, sm: 2, md: 4 }} alignItems="center">
            <Grid item xs={12} sm={5} md={5}>
              <AnimatedSection delay={200} direction="fade" duration={800}>
                <LogoContainer>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '180px', sm: '250px', md: '300px', lg: '380px' },
                      aspectRatio: '1 / 1',
                      position: 'relative',
                      margin: { xs: '0 auto 2rem', sm: '0 auto', md: '0 auto' },
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Vera Ojeda Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </Box>
                </LogoContainer>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <AnimatedSection delay={400} direction="right" duration={800}>
                <TextContent sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography component="h1" sx={titleStyles}>
                    VERA OJEDA
                  </Typography>
                  <Typography component="h2" sx={subtitleStyles}>
                    ESTUDIO NOTARIAL
                  </Typography>
                  <Typography component="p" sx={claimStyles}>
                    Brindamos servicios jurídicos integrales, con profesionalismo, ética y
                    responsabilidad, ofreciendo seguridad jurídica eficiente para proteger
                    tus derechos e intereses, mediante una atención personalizada y un
                    asesoramiento claro y confiable.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={scrollToContact}
                      sx={{
                        backgroundColor: '#CA9954',
                        color: '#FFFFFF',
                        padding: { xs: '12px 28px', sm: '12px 32px', md: '16px 48px' },
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                        fontFamily: 'Lato',
                        fontWeight: 700,
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#B88944',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(202, 153, 84, 0.3)',
                        },
                      }}
                    >
                      Solicitar asesoramiento
                    </Button>
                  </Box>
                </TextContent>
              </AnimatedSection>
            </Grid>
          </Grid>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
}
