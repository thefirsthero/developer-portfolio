import { ThemeProvider } from "./contexts/ThemeContext";
import { AppHeader } from "./components/app-header";
import { AppFooter } from "./components/app-footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <AppHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <ScrollToTop />
      </main>
      <AppFooter />
    </ThemeProvider>
  );
}
