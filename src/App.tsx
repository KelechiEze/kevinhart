/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import StackedProjects from './components/StackedProjects';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';

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
          <AboutSection />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

