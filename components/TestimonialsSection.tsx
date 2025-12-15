'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormatQuote } from '@mui/icons-material';

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

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  padding: theme.spacing(4),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  borderTop: `3px solid #EDBD83`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
  '&:hover': {
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    transform: 'translateY(-4px)',
    borderTopColor: '#CA9954',
  },
}));

const QuoteIcon = styled(Box)(({ theme }) => ({
  color: '#EDBD83',
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  opacity: 0.3,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
    '& svg': {
      fontSize: '2.5rem',
    },
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: '1.125rem',
  lineHeight: 1.8,
  color: '#294549',
  marginBottom: theme.spacing(3),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: theme.spacing(2),
  },
}));

const AuthorName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#294549',
  marginBottom: theme.spacing(0.5),
}));

const AuthorTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '0.875rem',
  color: '#666',
  fontStyle: 'italic',
}));

interface Testimonial {
  text: string;
  author: string;
  title: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <SectionContainer id="clientes">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'Lato',
            fontWeight: 700,
            color: '#294549',
            textAlign: 'center',
            marginBottom: { xs: 1.5, md: 2 },
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
          }}
        >
          Algunos de Nuestros Clientes
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Lato',
            fontWeight: 400,
            color: '#666',
            textAlign: 'center',
            marginBottom: { xs: 4, md: 8 },
            fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.125rem' },
            fontStyle: 'italic',
          }}
        >
          La confianza de quienes confían en nosotros
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <TestimonialCard>
                <CardContent sx={{ padding: 0 }}>
                  <QuoteIcon>
                    <FormatQuote sx={{ fontSize: '3rem' }} />
                  </QuoteIcon>
                  <TestimonialText>
                    {testimonial.text}
                  </TestimonialText>
                  <Box sx={{ borderTop: '1px solid #E0E0E0', paddingTop: { xs: 1.5, md: 2 } }}>
                    <AuthorName sx={{ fontSize: { xs: '0.9375rem', md: '1rem' } }}>
                      {testimonial.author}
                    </AuthorName>
                    <AuthorTitle sx={{ fontSize: { xs: '0.8125rem', md: '0.875rem' } }}>
                      {testimonial.title}
                    </AuthorTitle>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}

