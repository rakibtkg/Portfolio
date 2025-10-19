import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import About from './components/About/page'
import Services from './components/Services/page'
import Projects from './components/Projects/page'
import Education from './components/Education/page'
import Contact from './components/Contact/page'
import Footer from './components/Footer/page'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
