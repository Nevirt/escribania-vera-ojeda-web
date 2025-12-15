'use client';

import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Description,
  Verified,
  Assignment,
  MenuBook,
  BusinessCenter,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#FAFAFA',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#FFFFFF',
  borderBottom: `3px solid #EDBD83`,
  borderRadius: '8px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
  '&:hover': {
    borderBottomColor: '#CA9954',
    transform: 'translateY(-4px)',
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  color: '#CA9954',
  marginBottom: theme.spacing(2),
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
    '& svg': {
      fontSize: '2rem',
    },
  },
}));

const services = [
  {
    title: 'Escrituras públicas',
    icon: <Description sx={{ fontSize: '2.5rem' }} />,
    description: 'Documentación notarial de actos y contratos con validez jurídica plena.',
  },
  {
    title: 'Certificaciones y autenticaciones',
    icon: <Verified sx={{ fontSize: '2.5rem' }} />,
    description: 'Autenticación de firmas y certificación de documentos con garantía legal.',
  },
  {
    title: 'Contratos y actos jurídicos',
    icon: <Assignment sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y documentación de contratos y actos jurídicos diversos.',
  },
  {
    title: 'Testamentos',
    icon: <MenuBook sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y formalización de testamentos con la máxima confidencialidad.',
  },
  {
    title: 'Trámites notariales generales',
    icon: <BusinessCenter sx={{ fontSize: '2.5rem' }} />,
    description: 'Servicios notariales integrales para necesidades jurídicas diversas.',
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer id="servicios">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'Lato',
            fontWeight: 700,
            color: '#294549',
            textAlign: 'center',
            marginBottom: { xs: 4, md: 8 },
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
          }}
        >
          Servicios Notariales
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <CardContent sx={{ padding: 0 }}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: 700,
                      color: '#294549',
                      marginBottom: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: 400,
                      color: '#294549',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9375rem', md: '1rem' },
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}

