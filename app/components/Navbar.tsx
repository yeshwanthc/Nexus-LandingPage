'use client';

import { Button } from '@/components/ui/button';
import { Github, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Brand & Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Nexus</span>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#workflow"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Workflow
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Right Section: Desktop Buttons & Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex space-x-4">
              <Button variant="ghost" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>Star on GitHub</span>
              </Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-4">
                  
                  <nav className="flex flex-col space-y-4 mt-4">
                    <a
                      href="#features"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      Features
                    </a>
                    <a
                      href="#workflow"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      Workflow
                    </a>
                    <a
                      href="#pricing"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      Pricing
                    </a>
                  </nav>
                  <div className="mt-6 space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Star on GitHub</span>
                    </Button>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
