'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          d="M0,256L1440,160L1440,320L0,320Z"
        ></path>
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          d="M0,192L1440,96L1440,320L0,320Z"
        ></path>
      </svg>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div
          className="flex items-center justify-center mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-4 py-1 text-sm font-medium text-purple-200 inline-flex items-center gap-2 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
          >
            <Star className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
            <span>Introducing Nexus 2.0</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 animate-gradient">
          Build faster with
          <br />modern tools
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 transform transition-all duration-500">
          Experience the future of development. Nexus combines powerful tools with an intuitive interface to help you build better software, faster.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto hover:bg-white/10 transition-colors duration-300"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
