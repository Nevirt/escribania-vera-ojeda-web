'use client';

import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: '#25D366',
  color: '#FFFFFF',
  width: 60,
  height: 60,
  zIndex: 1000,
  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: 'bounceIn 0.8s ease-out 0.5s both',
  '@keyframes bounceIn': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.3) translateY(20px)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1.05)',
    },
    '70%': {
      transform: 'scale(0.9)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  '&:hover': {
    backgroundColor: '#20BA5A',
    transform: 'scale(1.1)',
    boxShadow: '0 6px 16px rgba(37, 211, 102, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 56,
    height: 56,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = 'Hola, me gustaría solicitar información sobre sus servicios notariales.' 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <StyledFab
      aria-label="Contactar por WhatsApp"
      onClick={handleClick}
    >
      <WhatsApp sx={{ fontSize: 32 }} />
    </StyledFab>
  );
}

