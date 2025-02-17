'use client';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WorkflowSection } from './components/Workflow';
import { Showcase } from './components/Showcase';
import { Testimonials } from './components/Testimonials';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
// import { Tabs } from './components/Tabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <WorkflowSection />
      <Showcase />
      {/* <Tabs /> */}
      <Testimonials />
      <Integrations />
      <Pricing />
      <Footer />

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F6,transparent)]" />
      </div>
    </div>
  );
}