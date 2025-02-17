'use client';

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus has transformed how we build software. The development speed is incredible.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    image: "https://dummyimage.com/100x100/000/fff"
  },
  {
    quote: "The best developer tools I've used in years. It's like coding in the future.",
    author: "Marcus Rodriguez",
    role: "Lead Developer at Innovate",
    image: "https://dummyimage.com/100x100/000/fff"
  },
  {
    quote: "Our team's productivity doubled after switching to Nexus. Simply amazing.",
    author: "Emily Watson",
    role: "Engineering Manager at Scale",
    image: "https://dummyimage.com/100x100/000/fff"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by developers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with Nexus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm"
            >
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-purple-500/40" />
              <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}