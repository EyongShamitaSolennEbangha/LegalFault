import React from 'react';
import { Upload, Folder, Users, Shield } from 'lucide-react';

function How() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p id='font' className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started with LegalVault in just a few simple steps and transform how you manage
            legal documents.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Step 1 */}
          <div id='card1' className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
                01
              </span>
              <h3 className="font-semibold text-gray-900">Upload Documents</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Upload existing digital files or scan physical documents directly through our mobile app.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div id='card1' className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
                02
              </span>
              <h3 className="font-semibold text-gray-900">Organize & Categorize</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Create folders for clients and cases, add tags and metadata for effortless organization.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Folder className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div id='card1' className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
                03
              </span>
              <h3 className="font-semibold text-gray-900">Access & Share</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Retrieve documents instantly, securely share with clients or colleagues when needed.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div id='card1' className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
                04
              </span>
              <h3 className="font-semibold text-gray-900">Stay Protected</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your data is encrypted and backed up automatically, ensuring maximum security and reliability.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
            Start Your Free Trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-gray-500 text-sm mt-3">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default How;