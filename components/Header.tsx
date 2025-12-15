'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Container, Drawer, IconButton, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu, Close } from '@mui/icons-material';
import Image from 'next/image';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#294549',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  position: 'fixed',
  top: 0,
  zIndex: 1300,
  transition: 'all 0.3s ease',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(2),
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  flexGrow: 1,
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '0.9375rem',
  color: '#294549',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  minWidth: 'auto',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#CA9954',
  },
}));

const MobileNavLink = styled(Button)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1.125rem',
  color: '#294549',
  textTransform: 'none',
  padding: theme.spacing(1.5, 2),
  width: '100%',
  justifyContent: 'flex-start',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'rgba(202, 153, 84, 0.1)',
    color: '#CA9954',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: '#294549',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Lato',
  fontWeight: 700,
  backgroundColor: '#CA9954',
  color: '#FFFFFF',
  padding: theme.spacing(1.25, 3),
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#B88944',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.875rem',
  },
}));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre el Estudio', id: 'sobre-nosotros' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Valores', id: 'valores' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <StyledAppBar
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
        boxShadow: scrolled ? '0 4px 16px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5 }}>
          <LogoContainer>
            <Box
              sx={{
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                position: 'relative',
                mr: 2,
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Vera Ojeda Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Lato',
                fontWeight: 700,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                color: '#294549',
              }}
            >
              VERA OJEDA
            </Typography>
          </LogoContainer>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <CTAButton onClick={() => scrollToSection('contacto')}>
              Contactar
            </CTAButton>
          </Box>
          <MenuButton
            aria-label="abrir menú de navegación"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <Menu />
          </MenuButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#FFFFFF',
            paddingTop: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#294549' }}>
            <Close />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <MobileNavLink onClick={() => scrollToSection(item.id)}>
                {item.label}
              </MobileNavLink>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <CTAButton
              fullWidth
              onClick={() => scrollToSection('contacto')}
              sx={{
                justifyContent: 'center',
              }}
            >
              Contactar
            </CTAButton>
          </ListItem>
        </List>
      </Drawer>
    </StyledAppBar>
  );
}

