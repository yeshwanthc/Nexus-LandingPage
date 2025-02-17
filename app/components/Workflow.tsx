'use client';

import { Terminal, Code2, ArrowUpRight, Workflow } from 'lucide-react';

const workflowSteps = [
  {
    title: 'Initialize Your Project',
    description: 'Start with our CLI tool to scaffold your project in seconds.',
    icon: <Terminal className="h-4 w-4 text-purple-500" />,
  },
  {
    title: 'Develop & Test',
    description: 'Write code with real-time feedback and automated testing.',
    icon: <Code2 className="h-4 w-4 text-purple-500" />,
  },
  {
    title: 'Optimize & Scale',
    description: 'Built-in performance optimization and scaling capabilities.',
    icon: <ArrowUpRight className="h-4 w-4 text-purple-500" />,
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 px-4" id="workflow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined workflow helps you focus on what matters most - building great software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://dummyimage.com/800x600/000/fff"
                alt="Workflow demonstration"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 p-4 rounded-lg">
              <Workflow className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}