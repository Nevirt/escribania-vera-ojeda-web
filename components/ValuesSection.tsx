'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Security,
  Lock,
  VerifiedUser,
  Person,
  Gavel,
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

const ValueItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1),
  },
}));

const ValueIcon = styled(Box)(({ theme }) => ({
  color: '#CA9954',
  marginBottom: theme.spacing(3),
  fontSize: '3rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: '2.5rem',
    },
  },
}));

const values = [
  {
    title: 'Seguridad jurídica',
    icon: <Security sx={{ fontSize: '3rem' }} />,
  },
  {
    title: 'Confidencialidad',
    icon: <Lock sx={{ fontSize: '3rem' }} />,
  },
  {
    title: 'Profesionalismo',
    icon: <VerifiedUser sx={{ fontSize: '3rem' }} />,
  },
  {
    title: 'Atención personalizada',
    icon: <Person sx={{ fontSize: '3rem' }} />,
  },
  {
    title: 'Ética y responsabilidad',
    icon: <Gavel sx={{ fontSize: '3rem' }} />,
  },
];

export default function ValuesSection() {
  return (
    <SectionContainer id="valores">
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
          Valores Institucionales
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {values.map((value, index) => {
            const isLast = index === values.length - 1;
            const isOdd = values.length % 2 !== 0;
            const isLastInOddList = isLast && isOdd;
            
            return (
              <Grid
                item
                xs={isLastInOddList ? 12 : 6}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: isLastInOddList ? 'center' : 'stretch',
                }}
              >
                <Box
                  sx={{
                    width: isLastInOddList ? { xs: '100%', sm: '66.666%' } : '100%',
                    maxWidth: isLastInOddList ? '400px' : 'none',
                  }}
                >
                  <ValueItem>
                    <ValueIcon>{value.icon}</ValueIcon>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: 'Lato',
                        fontWeight: 700,
                        color: '#294549',
                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                      }}
                    >
                      {value.title}
                    </Typography>
                  </ValueItem>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionContainer>
  );
}

