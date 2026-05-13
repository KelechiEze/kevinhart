/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import StackedProjects from './components/StackedProjects';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import BrandMarquee from './components/BrandMarquee';
import { ProjectsSection } from "./components/ProjectsSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        <Navbar />
        <BottomBar />
        
        <main className="relative z-0">
          <Hero />
          <LogoMarquee />
          <StackedProjects />
          <BrandMarquee />
          <ProjectsSection />
         <WhyChooseUsSection />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

