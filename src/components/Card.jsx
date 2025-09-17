import React from 'react';
import { FileText, FolderOpen, Search, Shield, Smartphone, Users } from 'lucide-react';

function Card() {
  const features = [
    {
      badge: "AI-Powered • 10x faster",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: FileText,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Smart Document Digitization",
      description: "AI-powered OCR technology converts physical documents to searchable digital format with 99.9% accuracy."
    },
    {
      badge: "Auto-Sort • 90% time saved",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: FolderOpen,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Intelligent Organization",
      description: "Auto-categorization and smart tagging system learns from your usage patterns for effortless organization."
    },
    {
      badge: "Instant Results • <1s response",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Search,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Advanced Search Engine",
      description: "Find any document instantly with our powerful full-text search, metadata filtering, and smart suggestions."
    },
    {
      badge: "Zero-Knowledge • 100% secure",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Shield,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Enterprise Security",
      description: "Bank-level AES-256 encryption, zero-knowledge architecture, and compliance with legal industry standards."
    },
    {
      badge: "Offline Sync • 24/7 access",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Smartphone,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Mobile-First Access",
      description: "Native mobile apps and responsive design ensure seamless access to your documents anywhere, anytime."
    },
    {
      badge: "Team Ready • Unlimited sharing",
      badgeColor: "bg-blue-50 text-blue-600",
      icon: Users,
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
      iconColor: "text-blue-500",
      title: "Secure Collaboration",
      description: "Granular permissions, secure sharing links, and real-time collaboration tools for teams and clients."
    }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Badge */}
                <div className={`inline-flex items-center ${feature.badgeColor} text-sm font-medium px-3 py-1 rounded-full mb-6`}>
                  {feature.badge}
                </div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
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

export default Card;
