'use client';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '150ms', label: 'Latency' },
  { value: '10k+', label: 'Users' },
  { value: '200+', label: 'Contributors' },
];

export function Showcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />
            <h2 className="text-4xl font-bold mb-6">Built for modern development teams</h2>
            <p className="text-gray-400 mb-8">
              Experience a development environment that adapts to your needs. From solo projects to enterprise teams, Nexus scales with you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg border border-white/10 bg-black/50">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://dummyimage.com/400x400/000/fff"
                alt="Feature preview 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden translate-y-8">
              <img
                src="https://dummyimage.com/400x400/000/fff"
                alt="Feature preview 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden -translate-y-8">
              <img
                src="https://dummyimage.com/400x400/000/fff"
                alt="Feature preview 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://dummyimage.com/400x400/000/fff"
                alt="Feature preview 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}