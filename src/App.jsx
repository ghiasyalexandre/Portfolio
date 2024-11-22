import NavBar from "./components/NavBar";
import SelfCard from "./components/SelfCard";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import AppFooter from "./components/AppFooter";
import FadeInSection from "./components/FadeInSection";
import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const VFX = lazy(() => import("./components/VfxGallery"));
const Projects = lazy(() => import("./components/Projects"));

import "./App.css";
import Email from "./components/Email";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <div>
        <NavBar />

        <div className="bg-gradient group">
          <FadeInSection>
            <div className=" w-full flex justify-center py-4 sm:py-6">
              <h1 className="text-center font-semibold text-4xl sm:text-5xl lg:text-6xl fun-text group-hover:bg-right py-2">
                Ghiasy Alexandre
              </h1>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <SelfCard />
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Timeline />
        </FadeInSection>

        <Router>
          <Suspense>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/vfx" element={<VFX />} />
            </Routes>
          </Suspense>
        </Router>
        <FadeInSection>
          <Email />
        </FadeInSection>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
