import React from 'react';

function Testimony() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id='say' className="text-4xl font-bold text-gray-900 mb-4">
            What Legal Professionals <span className="text-blue-600">Say</span>
          </h1>
          <p id='textt' className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from lawyers and law firms who have transformed their document management with LegalVault.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div id='test' className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <div className="text-blue-600 text-6xl font-serif mb-4">"</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "LegalVault has transformed how our firm manages documents. We've cut down document prep time by 75% and eliminated the risk of losing critical case files."
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                J
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">James Wilson</div>
                <div className="text-gray-600 text-xs">Corporate Attorney, Wilson & Partners</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div id='test2' className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <div className="text-blue-600 text-6xl font-serif mb-4">"</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "As a solo practitioner, keeping track of all client documents was overwhelming. LegalVault's intuitive interface and powerful search has made my practice more efficient than ever."
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sarah Chen</div>
                <div className="text-gray-600 text-xs">Independent Legal Consultant</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div id='test3' className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <div className="text-blue-600 text-6xl font-serif mb-4">"</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "The security features give us peace of mind when handling sensitive client information. The ability to quickly share documents with clients while maintaining control is invaluable."
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                R
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Robert Johnson</div>
                <div className="text-gray-600 text-xs">Managing Partner, Johnson Legal Group</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-8">
            Trusted by legal organizations worldwide
          </p>
          
          {/* Logo placeholders */}
          <div id='block' className="flex justify-center items-center space-x-12 opacity-40">
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;