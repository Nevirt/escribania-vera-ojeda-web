'use client';

import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  LocationOn,
  Phone,
  WhatsApp,
  Email,
} from '@mui/icons-material';

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

const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  color: '#294549',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2.5),
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: '#CA9954',
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(0.5),
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1.5),
    '& svg': {
      fontSize: '1.25rem',
    },
  },
}));

export default function ContactSection() {
  return (
    <SectionContainer id="contacto">
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
          Contacto
        </Typography>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <FormCard>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontFamily: 'Lato',
                  fontWeight: 700,
                  color: '#294549',
                  marginBottom: { xs: 2, md: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
                }}
              >
                Envíenos un mensaje
              </Typography>
              <Box component="form" sx={{ mt: { xs: 1, md: 2 } }}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: { xs: '0.9375rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#CA9954',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#CA9954',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: { xs: '0.9375rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#CA9954',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#CA9954',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Mensaje"
                  multiline
                  rows={5}
                  variant="outlined"
                  margin="normal"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: { xs: '0.9375rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#CA9954',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#CA9954',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    marginTop: { xs: 2, md: 3 },
                    backgroundColor: '#CA9954',
                    color: '#FFFFFF',
                    padding: { xs: '10px 24px', md: '12px 32px' },
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    '&:hover': {
                      backgroundColor: '#B88944',
                    },
                  }}
                >
                  Enviar mensaje
                </Button>
              </Box>
            </FormCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontFamily: 'Lato',
                  fontWeight: 700,
                  color: '#294549',
                  marginBottom: { xs: 3, md: 4 },
                  fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
                }}
              >
                Información de contacto
              </Typography>
              <ContactItem>
                <ContactIcon>
                  <LocationOn />
                </ContactIcon>
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
                  [Dirección mock del estudio notarial]
                </Typography>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <Phone />
                </ContactIcon>
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
                  [Teléfono mock]
                </Typography>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <WhatsApp />
                </ContactIcon>
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
                  [WhatsApp mock]
                </Typography>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <Email />
                </ContactIcon>
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
                  [Email mock]
                </Typography>
              </ContactItem>
            </ContactInfo>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

