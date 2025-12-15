'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '450px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    height: '350px',
    marginBottom: theme.spacing(4),
  },
}));

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: '#FAFAFA',
  borderRadius: '8px',
  borderLeft: `4px solid #CA9954`,
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const InfoIcon = styled(Box)(({ theme }) => ({
  color: '#CA9954',
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(0.5),
  flexShrink: 0,
}));

interface MapSectionProps {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl?: string;
}

export default function MapSection({
  address,
  phone,
  email,
  hours,
  mapEmbedUrl,
}: MapSectionProps) {
  // Si no se proporciona mapEmbedUrl, usar un placeholder o Google Maps embed
  const defaultMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;

  return (
    <SectionContainer id="ubicacion">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'Lato',
            fontWeight: 700,
            color: '#294549',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Ubicación y Contacto
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <MapContainer>
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    color: '#999',
                    fontStyle: 'italic',
                  }}
                >
                  <Typography variant="body2">
                    [Configurar Google Maps Embed URL]
                  </Typography>
                </Box>
              )}
            </MapContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontFamily: 'Lato',
                  fontWeight: 700,
                  color: '#294549',
                  marginBottom: 3,
                }}
              >
                Información
              </Typography>
              <InfoItem>
                <InfoIcon>
                  <LocationOn />
                </InfoIcon>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    color: '#294549',
                    lineHeight: 1.7,
                  }}
                >
                  {address}
                </Typography>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <Phone />
                </InfoIcon>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    color: '#294549',
                    lineHeight: 1.7,
                  }}
                >
                  {phone}
                </Typography>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <Email />
                </InfoIcon>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    color: '#294549',
                    lineHeight: 1.7,
                  }}
                >
                  {email}
                </Typography>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <AccessTime />
                </InfoIcon>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    color: '#294549',
                    lineHeight: 1.7,
                  }}
                >
                  {hours}
                </Typography>
              </InfoItem>
            </InfoCard>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

