'use client';

import { Terminal, Shield, Code2, ArrowUpRight, Boxes, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built on cutting-edge technology for maximum performance and minimal latency.',
    icon: <Terminal className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Type Safe',
    description: 'Full TypeScript support with automatic type checking and inference.',
    icon: <Shield className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Modern Stack',
    description: 'Leverages the latest web technologies and development practices.',
    icon: <Code2 className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Developer Experience',
    description: 'Intuitive APIs and comprehensive documentation for a smooth development process.',
    icon: <ArrowUpRight className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Scalable',
    description: 'Built to grow with your needs, from small projects to enterprise applications.',
    icon: <Boxes className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Community Driven',
    description: 'Backed by a strong community of developers and contributors.',
    icon: <ArrowRight className="h-6 w-6 text-purple-500" />,
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-16 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent 
                hover:border-purple-500/50 transition-all duration-300 transform cursor-pointer
                ${activeFeature === index ? 'scale-105 border-purple-500' : 'hover:scale-102'}`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={`w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 
                transition-transform duration-300 ${activeFeature === index ? 'rotate-12' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={`text-gray-400 transition-opacity duration-300 
                ${activeFeature === index ? 'opacity-100' : 'opacity-80'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}