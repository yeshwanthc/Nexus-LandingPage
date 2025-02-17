'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Nexus</span>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#workflow" className="text-gray-300 hover:text-white transition-colors">Workflow</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}