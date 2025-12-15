import type { Metadata } from 'next';
import ThemeProvider from '@/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vera Ojeda – Estudio Notarial',
  description: 'Seguridad jurídica, confianza y compromiso profesional',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

