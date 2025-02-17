'use client';

import { useState } from 'react';

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Features',
      content: 'Explore the amazing features of Nexus 2.0, designed to make development faster and easier.',
    },
    {
      title: 'Pricing',
      content: 'Choose the best plan that fits your needs. Get started with Nexus today.',
    },
    {
      title: 'About Us',
      content: 'Learn more about Nexus and the team behind this powerful tool.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center">
      <div className="space-x-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-lg font-medium ${
              activeTab === index
                ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg'
                : 'text-gray-300 hover:text-white'
            } transition-colors duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-8 p-8 bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">{tabs[activeTab].title}</h2>
        <p className="text-lg text-gray-400">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}
