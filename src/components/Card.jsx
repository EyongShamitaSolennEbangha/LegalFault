import React from 'react';
import { FileText, FolderOpen, Search, Shield, Smartphone, Users } from 'lucide-react';

const Card= () => {
  const features = [
    {
      badge: "AI-Powered • 10x faster",
      icon: FileText,
      title: "Smart Document Digitization",
      description: "AI-powered OCR technology converts physical documents to searchable digital format with 99.9% accuracy."
    },
    {
      badge: "Auto-Sort • 95% time saved",
      icon: FolderOpen,
      title: "Intelligent Organization",
      description: "Auto-categorization and smart tagging system learns from your usage patterns for effortless organization."
    },
    {
      badge: "Instant Results • <1s response",
      icon: Search,
      title: "Advanced Search Engine",
      description: "Find any document instantly with our powerful full-text search, metadata filtering, and smart suggestions."
    },
    {
      badge: "Zero-Knowledge • 100% secure",
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level AES-256 encryption, zero-knowledge architecture, and compliance with legal industry standards."
    },
    {
      badge: "Offline Sync • 24/7 access",
      icon: Smartphone,
      title: "Mobile-First Access",
      description: "Native mobile apps and responsive design ensure seamless access to your documents anywhere, anytime."
    },
    {
      badge: "Team Ready • Unlimited sharing",
      icon: Users,
      title: "Secure Collaboration",
      description: "Granular permissions, secure sharing links, and real-time collaboration tools for teams and clients."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to digitize, organize, and collaborate on your documents with enterprise-grade security and AI-powered intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-100">
                    {feature.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

