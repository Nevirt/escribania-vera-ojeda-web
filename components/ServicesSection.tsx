'use client';

import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Description,
  Verified,
  Assignment,
  MenuBook,
  BusinessCenter,
  Gavel,
  VerifiedUser,
} from '@mui/icons-material';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

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
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
  '&:hover': {
    borderBottomColor: '#CA9954',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
    title: 'Transferencia de inmuebles/muebles',
    icon: <Description sx={{ fontSize: '2.5rem' }} />,
    description: 'Documentación notarial para transferencias de propiedad con validez jurídica plena.',
  },
  {
    title: 'Poderes en general',
    icon: <Verified sx={{ fontSize: '2.5rem' }} />,
    description: 'Otorgamiento de poderes notariales para diversos trámites y representaciones legales.',
  },
  {
    title: 'Certificación de Firmas',
    icon: <Verified sx={{ fontSize: '2.5rem' }} />,
    description: 'Autenticación de firmas y certificación de documentos con garantía legal.',
  },
  {
    title: 'Contratos',
    icon: <Assignment sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y documentación de contratos diversos con validez notarial.',
  },
  {
    title: 'Actas notariales',
    icon: <MenuBook sx={{ fontSize: '2.5rem' }} />,
    description: 'Elaboración de actas notariales para diversos actos y situaciones jurídicas.',
  },
  {
    title: 'Autenticación de Documentos',
    icon: <Verified sx={{ fontSize: '2.5rem' }} />,
    description: 'Autenticación y legalización de documentos con validez jurídica.',
  },
  {
    title: 'Constitución/Modificación de Sociedades',
    icon: <BusinessCenter sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y documentación para constitución y modificación de sociedades comerciales.',
  },
  {
    title: 'Cesión de derechos/acciones',
    icon: <Assignment sx={{ fontSize: '2.5rem' }} />,
    description: 'Documentación notarial para cesión de derechos y acciones empresariales.',
  },
  {
    title: 'Gestión de chapas / Cédula Verde',
    icon: <BusinessCenter sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y gestión de trámites vehiculares y documentación automotriz.',
  },
  {
    title: 'Litigios Civiles y Penales',
    icon: <Gavel sx={{ fontSize: '2.5rem' }} />,
    description: 'Representación legal en procesos civiles y penales con profesionalismo y ética.',
  },
  {
    title: 'Asesoría Legal',
    icon: <VerifiedUser sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento legal integral para particulares y empresas.',
  },
  {
    title: 'Trámites Migratorios',
    icon: <BusinessCenter sx={{ fontSize: '2.5rem' }} />,
    description: 'Asesoramiento y gestión de trámites migratorios, residencias y nacionalización.',
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer id="servicios">
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
              marginBottom: { xs: 4, md: 8 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
            }}
          >
            Servicios Notariales
          </Typography>
        </AnimatedSection>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard delay={index * 100} duration={600}>
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
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}

