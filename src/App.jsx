import NavBar from "./components/NavBar";
import SelfCard from "./components/SelfCard";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import AppFooter from "./components/AppFooter";
import FadeInSection from "./components/FadeInSection";
import { Suspense, lazy } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const VFX = lazy(() => import("./components/VfxGallery"));
const Projects = lazy(() => import("./components/Projects"));

import "./App.css";
import Email from "./components/Email";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Ghiasy Alexandre's Portfolio</title>
          <meta
            name="description"
            content="Explore the portfolio of Ghiasy Alexandre, a skilled software developer specializing in backend development, web design, client-server applications, and software development cycles. Former programmer at Daytona State College with expertise in SQL, SQR, and PeopleTools. Gained hands-on experience with simulations and C# during an internship at Lockheed Martin. Discover innovative projects, including an Audio VFX library, showcasing technical expertise and creativity."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <header>
          <NavBar />
        </header>

        <main>
          <div className="bg-gradient group">
            <FadeInSection>
              <div className="w-full flex justify-center py-4 sm:py-6">
                <h1
                  className="text-center font-semibold text-4xl sm:text-5xl lg:text-6xl fun-text group-hover:bg-right py-2"
                  aria-label="Ghiasy Alexandre"
                >
                  Ghiasy Alexandre
                </h1>
              </div>
            </FadeInSection>
          </div>

          <section aria-labelledby="about-me">
            <FadeInSection>
              <SelfCard />
              <Skills />
            </FadeInSection>
          </section>

          <section aria-labelledby="timeline">
            <FadeInSection>
              <Timeline />
            </FadeInSection>
          </section>

          <Router>
            <Suspense
              fallback={
                <div className=" flex justify-center place-items-center text-center text-5xl h-[80vh] animate-pulse uppercase">
                  Loading...
                </div>
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <section aria-labelledby="projects">
                      <Projects />
                    </section>
                  }
                />
                <Route
                  path="/vfx"
                  element={
                    <section
                      aria-labelledby="vfx"
                      className="overflow-y-hidden"
                    >
                      <VFX />
                    </section>
                  }
                />
                <Route
                  path="*"
                  element={
                    <section aria-labelledby="error page">
                      <Projects />
                    </section>
                  }
                />
              </Routes>
            </Suspense>
          </Router>

          <section aria-labelledby="contact">
            <FadeInSection>
              <Email />
            </FadeInSection>
          </section>
        </main>

        <footer aria-label="Footer">
          <AppFooter />
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
