
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Services } from './components/Sections/Services';
import { Projects } from './components/Sections/Projects';
import { Testimonials } from './components/Sections/Testimonials';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';

import ScrollToTop from './components/UI/ScrollToTop';
import ProgressBar from './components/UI/ProgressBar';

function App() {
  return (
    <ThemeProvider>

      <ProgressBar />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;