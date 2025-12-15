import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ValuesSection from '@/components/ValuesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Datos mock - reemplazar con datos reales
const testimonials = [
  {
    text: 'El profesionalismo y la atención personalizada del Estudio Vera Ojeda nos brindaron la seguridad jurídica que necesitábamos para nuestros trámites más importantes.',
    author: 'María González',
    title: 'Cliente Corporativo',
  },
  {
    text: 'Excelente servicio notarial. La confianza y el compromiso profesional se reflejan en cada acto. Altamente recomendado.',
    author: 'Carlos Rodríguez',
    title: 'Cliente Particular',
  },
  {
    text: 'Un estudio notarial que combina la tradición con la modernidad. La atención personalizada y la seriedad en el trato son sus principales valores.',
    author: 'Ana Martínez',
    title: 'Cliente Empresarial',
  },
];

const mapData = {
  address: '[Dirección completa del estudio notarial]',
  phone: '[Teléfono del estudio]',
  email: '[Email del estudio]',
  hours: 'Lunes a Viernes: 9:00 - 18:00 hs',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.838861544398!2d-57.64318802313578!3d-25.27600551776524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da78ba5186d5f%3A0x85d4cba27ed87805!2sPuerto%20de%20Asunci%C3%B3n!5e0!3m2!1sen!2spy!4v1765826437366!5m2!1sen!2spy', // Configurar con Google Maps Embed URL
};

const whatsappData = {
  phoneNumber: '[Número de WhatsApp sin espacios ni caracteres especiales, ej: 5491123456789]',
  message: 'Hola, me gustaría solicitar información sobre sus servicios notariales.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
        <MapSection {...mapData} />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppButton {...whatsappData} />
    </>
  );
}
