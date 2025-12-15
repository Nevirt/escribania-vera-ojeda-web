'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

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
  textAlign: 'left',
};

const subtitleStyles = {
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
  color: '#CA9954',
  marginBottom: { xs: 2, md: 4 },
};

const claimStyles = {
  fontFamily: 'Lato',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
  marginBottom: { xs: 3, md: 5 },
  opacity: 0.95,
  lineHeight: 1.8,
  maxWidth: '600px',
  textAlign: 'left',
};

export default function HeroSection() {
  return (
    <HeroContainer id="inicio">
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
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 4 }} alignItems="center">
            <Grid item xs={5} sm={5} md={5}>
              <LogoContainer>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '200px', sm: '250px', md: '300px', lg: '380px' },
                    aspectRatio: '1 / 1',
                    position: 'relative',
                    margin: '0 auto',
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
            </Grid>
            <Grid item xs={7} sm={7} md={7}>
              <TextContent>
                <Typography component="h1" sx={titleStyles}>
                  VERA OJEDA
                </Typography>
                <Typography component="h2" sx={subtitleStyles}>
                  ESTUDIO NOTARIAL
                </Typography>
                <Typography component="p" sx={claimStyles}>
                  Seguridad jurídica, confianza y compromiso profesional
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#CA9954',
                    color: '#FFFFFF',
                    padding: { xs: '10px 24px', sm: '12px 32px', md: '16px 48px' },
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    fontFamily: 'Lato',
                    fontWeight: 700,
                    borderRadius: '4px',
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                    '&:hover': {
                      backgroundColor: '#B88944',
                    },
                  }}
                >
                  Solicitar asesoramiento
                </Button>
              </TextContent>
            </Grid>
          </Grid>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
}
