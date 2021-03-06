import AboutSection from '../components/LandingPage/AboutSection'
import ContactSection from '../components/LandingPage/ContactSection'
import HeaderSection from '../components/LandingPage/HeaderSection'
import PrincipleSection from '../components/LandingPage/PrincipleSection'
import ProductSection from '../components/LandingPage/ProductSection'
import Footer from '../modules/Footer'
import Navbar from '../modules/Navbar'

export default function Home() {
  return (
    <Navbar className="wrap-landing">
      <HeaderSection />
      <PrincipleSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </Navbar>
  )
}
