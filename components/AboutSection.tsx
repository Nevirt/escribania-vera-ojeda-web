'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '@/components/AnimatedSection';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  backgroundColor: '#F5F5F5',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #E0E0E0',
  [theme.breakpoints.down('md')]: {
    height: '280px',
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    height: '240px',
    marginTop: theme.spacing(2),
  },
}));

const TextContent = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1.125rem',
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
  color: '#294549',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: theme.spacing(2),
  },
}));

export default function AboutSection() {
  return (
    <SectionContainer id="sobre-nosotros">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <AnimatedSection delay={0} direction="up" duration={700}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'Lato',
              fontWeight: 700,
              color: '#294549',
              textAlign: 'center',
              marginBottom: { xs: 4, md: 6 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
            }}
          >
            Sobre el Estudio
          </Typography>
        </AnimatedSection>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={200} direction="right" duration={700}>
              <TextContent>
                <Paragraph>
                  Con más de 36 años de trayectoria en el ejercicio notarial, el Estudio
                  Notarial Vera Ojeda se distingue por el compromiso inquebrantable con
                  la seguridad jurídica y la excelencia profesional.
                </Paragraph>
                <Paragraph>
                  Dirigido por la Escribana Teresa Dejesus Vera Ojeda, Registro Notarial
                  N° 316, nuestro estudio ofrece servicios jurídicos integrales con
                  profesionalismo, ética y responsabilidad.
                </Paragraph>
                <Paragraph>
                  Brindamos seguridad jurídica eficiente para proteger tus derechos e
                  intereses, mediante una atención personalizada y un asesoramiento claro
                  y confiable. Cada acto notarial es tratado con la máxima seriedad y
                  dedicación.
                </Paragraph>
              </TextContent>
            </AnimatedSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={400} direction="left" duration={700}>
              <ImagePlaceholder>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#999',
                    fontStyle: 'italic',
                  }}
                >
                  [Imagen mock: Escribanía, documentos, firma, escritorio]
                </Typography>
              </ImagePlaceholder>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

