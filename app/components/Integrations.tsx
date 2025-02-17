'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const integrations = [
  {
    name: "GitHub",
    description: "Seamless integration with your repositories",
    image: "https://dummyimage.com/80x80/000/fff"
  },
  {
    name: "VS Code",
    description: "Enhanced development experience",
    image: "https://dummyimage.com/80x80/000/fff"
  },
  {
    name: "Slack",
    description: "Real-time notifications and updates",
    image: "https://dummyimage.com/80x80/000/fff"
  },
  {
    name: "Jira",
    description: "Project management integration",
    image: "https://dummyimage.com/80x80/000/fff"
  },
  {
    name: "Docker",
    description: "Containerization made simple",
    image: "https://dummyimage.com/80x80/000/fff"
  },
  {
    name: "AWS",
    description: "Cloud deployment and scaling",
    image: "https://dummyimage.com/80x80/000/fff"
  }
];

export function Integrations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful integrations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with your favorite tools and services to streamline your workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm 
                transition-all duration-500 cursor-pointer
                ${activeIndex === index ? 'border-purple-500 scale-105' : 'hover:border-purple-500/50'}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-start gap-4">
                <img
                  src={integration.image}
                  alt={integration.name}
                  className={`w-16 h-16 rounded-lg transition-transform duration-300 
                    ${activeIndex === index ? 'scale-110' : ''}`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{integration.name}</h3>
                    <ArrowUpRight className={`h-5 w-5 transition-all duration-300
                      ${activeIndex === index ? 'text-purple-500 rotate-45' : 'text-gray-400'}`} />
                  </div>
                  <p className={`text-gray-400 mt-2 transition-opacity duration-300
                    ${activeIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                    {integration.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}