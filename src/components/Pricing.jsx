import React from 'react';
import { Check } from 'lucide-react';

function Pricing() {
  return (
    <div className="min-h-screen  bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your practice needs. All plans include our core security features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div id='price' className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 text-sm mb-6">
                Perfect for individual lawyers and small practices
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">$19</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">5GB secure document storage</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Basic folder organization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Mobile document scanning</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Email support</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Single user account</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>

          {/* Professional Plan */}
          <div id='price' className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 text-sm mb-6">
                Ideal for growing law practices with multiple cases
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">25GB secure document storage</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Advanced tagging system</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Client portal for sharing</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Priority email & phone support</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Up to 5 user accounts</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div id='price' className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 text-sm mb-6">
                Complete solution for established law firms
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">100GB secure document storage</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">AI-powered document categorization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Custom client portals</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">24/7 dedicated support</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700 text-sm">Unlimited user accounts</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Custom Solution Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need a custom solution for your firm?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored enterprise plans for larger law firms with specific requirements. Our team will work with you to create a custom solution.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;