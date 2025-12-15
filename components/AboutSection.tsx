'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

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
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextContent>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: 'Lato',
                  fontWeight: 700,
                  color: '#294549',
                  marginBottom: { xs: 3, md: 4 },
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
                }}
              >
                Sobre el Estudio
              </Typography>
              <Paragraph>
                Con una sólida tradición en el ejercicio notarial, nuestro estudio se
                distingue por el compromiso inquebrantable con la seguridad jurídica y
                la excelencia profesional.
              </Paragraph>
              <Paragraph>
                Ofrecemos un servicio caracterizado por la responsabilidad profesional,
                la atención personalizada y el respaldo legal que cada cliente merece.
                Cada acto notarial es tratado con la máxima seriedad y dedicación.
              </Paragraph>
              <Paragraph>
                Nuestra experiencia y conocimiento se ponen al servicio de quienes
                confían en nosotros para proteger sus intereses y garantizar la validez
                jurídica de sus decisiones más importantes.
              </Paragraph>
            </TextContent>
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

