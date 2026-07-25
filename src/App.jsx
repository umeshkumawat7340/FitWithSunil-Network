import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Earn from './components/Earn'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Earn />
        <HowItWorks />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
