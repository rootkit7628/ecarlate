import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Contact from '../components/Contact';

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </MainLayout>
  );
}

export default Home;