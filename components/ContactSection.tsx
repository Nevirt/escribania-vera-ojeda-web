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
    padding: theme.spacing(8, 0),
  },
}));

const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
    marginTop: theme.spacing(4),
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  color: '#294549',
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: '#CA9954',
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(0.5),
}));

export default function ContactSection() {
  return (
    <SectionContainer id="contacto">
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
          Contacto
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <FormCard>
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
                Envíenos un mensaje
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    '& .MuiOutlinedInput-root': {
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
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
                  rows={6}
                  variant="outlined"
                  margin="normal"
                  sx={{
                    '& .MuiOutlinedInput-root': {
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
                    marginTop: 3,
                    backgroundColor: '#CA9954',
                    color: '#FFFFFF',
                    padding: '12px 32px',
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
                  marginBottom: 4,
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

