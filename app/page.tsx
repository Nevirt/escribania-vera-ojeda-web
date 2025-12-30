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
  address: 'Ruta Py 01 (ex Acceso Sur) entre Belén y Juan S. Bogarín',
  phone: '+595 971 224 261',
  email: 'escribaniaveraojeda@hotmail.com',
  hours: 'Lunes a Viernes: 9:00 - 18:00 hs',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4283.92638047032!2d-57.516097344523715!3d-25.460375564537262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRuta%20Py%2001%20(ex%20Acceso%20Sur)%20entre%20Bel%C3%A9n%20y%20Juan%20S.%20Bogar%C3%ADn!5e0!3m2!1sen!2spy!4v1767114754842!5m2!1sen!2spy',
};

const whatsappData = {
  phoneNumber: '595971224261',
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
