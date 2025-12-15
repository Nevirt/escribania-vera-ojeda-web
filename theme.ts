import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gold: {
      dark: string;
      light: string;
    };
  }

  interface PaletteOptions {
    gold?: {
      dark?: string;
      light?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#294549', // Verde petróleo institucional
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#CA9954', // Dorado institucional oscuro
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#294549',
      secondary: '#294549',
    },
    gold: {
      dark: '#CA9954',
      light: '#EDBD83',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontWeight: 700,
          textTransform: 'none',
          borderRadius: '4px',
          padding: '12px 32px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#CA9954',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#B88944',
          },
        },
        outlined: {
          borderColor: '#CA9954',
          color: '#CA9954',
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: '#B88944',
            backgroundColor: 'rgba(202, 153, 84, 0.04)',
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;

