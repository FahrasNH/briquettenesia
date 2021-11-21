import AboutSection from '../components/LandingPage/AboutSection'
import ContactSection from '../components/LandingPage/ContactSection'
import PrincipleSection from '../components/LandingPage/PrincipleSection'
import ProductSection from '../components/LandingPage/ProductSection'

export default function Home() {
  return (
    <div className="wrap-landing">
      <PrincipleSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
