import React from "react";
import { Shield, Lock, CheckCircle, Clock, Eye } from "lucide-react";

function Square() {
  return (
    <div>
      <div id="white" className="bg-white rounded-3xl shadow-lg p-12 relative overflow-hidden">
        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Shield className="w-4 h-4" />
          Bank-level security guaranteed
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 id="square" className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Enterprise-Grade{" "}
              <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">
                Security
              </span>{" "}
              for
              <br />
              Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Most Sensitive Documents
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We understand that legal documents contain highly sensitive
              information. Our platform employs{" "}
              <span className="text-blue-600 font-semibold">
                AES-256 encryption
              </span>{" "}
              and{" "}
              <span className="text-purple-600 font-semibold">
                zero-knowledge architecture
              </span>
              , the same technology used by financial institutions and
              government agencies.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Documents are encrypted before leaving your device with
                    unique keys
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Automated Backups
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Real-time synchronization with version control and recovery
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Access Controls
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Granular permissions with audit logs and compliance
                    reporting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Lock Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-80 h-80 opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30"></div>

              {/* Main lock container */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Lock className="w-12 h-12 text-white" />
                  </div>

                  {/* Small security badge */}
                  <div className="mt-6 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium text-center">
                    SECURE
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <Shield className="w-5 h-5 text-green-500" />
              </div>

              <div className="absolute bottom-12 left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Square;
