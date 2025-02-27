import { Suspense, lazy, useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { useInitialLoading } from "./hooks/useInitialLoading";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import ScrollToTop from "./components/shared/ScrollToTop";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Works = lazy(() => import("./components/Works"));
const Footer = lazy(() => import("./components/Footer"));

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { darkMode } = useTheme();
  const isLoading = useInitialLoading();

  useEffect(() => {
    // Remove preload class after initial page load
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("preload");
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Add preload class to prevent transitions on initial load
  useEffect(() => {
    document.documentElement.classList.add("preload");
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`w-full min-h-screen bg-white ${darkMode ? "dark" : ""}`}>
      <div className="w-full min-h-screen bg-white dark:bg-[#030a1c]">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="flex flex-col w-full">
            <section
              id="home"
              className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10 lg:py-20"
            >
              <Header />
            </section>

            <section
              id="about"
              className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10 lg:py-20 bg-gray-50 dark:bg-[#061130]"
            >
              <About />
            </section>

            <section
              id="experience"
              className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10 lg:py-20"
            >
              <Experience />
            </section>

            <section
              id="skills"
              className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10 lg:py-20"
            >
              <Skills />
            </section>

            <section
              id="projects"
              className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10 lg:py-20 bg-gray-50 dark:bg-[#061130]"
            >
              <Works />
            </section>

            <footer className="w-full px-4 md:px-8 lg:px-16 2xl:px-40 py-10">
              <Footer />
            </footer>
          </main>
        </Suspense>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
