
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Services } from './components/Sections/Services';
import { Projects } from './components/Sections/Projects';
import { Testimonials } from './components/Sections/Testimonials';
import Timeline from './components/Sections/Timeline';
import ProjectShowcase from './components/Sections/LikeDemo';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import ProgressBar from './components/UI/ProgressBar';

import BackgroundMusic from './components/UI/BackgroundMusic';
import EasterEgg from './components/UI/EasterEgg';
import ParallaxBackground from './components/UI/ParallaxBackground';

function App() {
  return (
    <ThemeProvider>

      <ProgressBar />
      <ParallaxBackground />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <ProjectShowcase />
          <Timeline />
          <Contact />
        </main>
        <EasterEgg>
          <Footer />
        </EasterEgg>
        <ScrollToTop />

        <BackgroundMusic />
      </div>
    </ThemeProvider>
  );
}

export default App;