import type { Metadata } from 'next';
import ThemeProvider from '@/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estudio Notarial Vera Ojeda | Servicios Jurídicos y Notariales en Paraguay',
  description: 'Estudio jurídico y notarial con más de 36 años de trayectoria. Servicios legales, notariales y migratorios en Paraguay. Seguridad jurídica, confianza y compromiso profesional.',
  keywords: [
    'estudio jurídico y notarial',
    'abogado en Paraguay',
    'servicios legales en Paraguay',
    'servicios migratorios Paraguay',
    'asesoría legal y migratoria',
    'notario público Paraguay',
    'escribanía en Paraguay',
    'legalización de documentos',
    'escrituras públicas',
    'abogado en Asunción',
    'estudio jurídico en Asunción',
    'notaría en Asunción',
  ],
  authors: [{ name: 'Estudio Notarial Vera Ojeda' }],
  openGraph: {
    title: 'Estudio Notarial Vera Ojeda | Servicios Jurídicos y Notariales',
    description: 'Estudio jurídico y notarial con más de 36 años de trayectoria. Servicios legales, notariales y migratorios en Paraguay.',
    type: 'website',
    locale: 'es_PY',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.estudioveraojeda.com',
  },
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
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
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

