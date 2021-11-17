import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../Components/LandingPage/AboutSection'
import ContactSection from '../Components/LandingPage/ContactSection'
import PrincipleSection from '../Components/LandingPage/PrincipleSection'
import ProductSection from '../Components/LandingPage/ProductSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <PrincipleSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
