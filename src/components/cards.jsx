import React from 'react';
import { Zap, Globe, Shield, Clock } from 'lucide-react';

function Cards() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second search and loading times"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "99.9% uptime with worldwide servers"
    },
    {
      icon: Shield,
      title: "SOC 2 Certified",
      description: "Industry-leading security standards"
    },
    {
      icon: Clock,
      title: "Auto Backup",
      description: "Continuous data protection and versioning"
    }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div id='cards' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;