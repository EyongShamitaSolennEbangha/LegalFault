import React, { useState, useEffect } from "react";

const LegalVaultDashboard = () => {
  const [currentTime, setCurrentTime] = useState("11:59:24 PM");

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;

      setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="secure4" className="h-fit w-[400px] bg-white shadow-md p-4 font-sans rounded-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Header with time */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-1 ">
            <div className="flex mt-2 gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-700">CV-Fault</h1>
            </div>
          </div>
          <div className="text-lg font-medium text-gray-700">{currentTime}</div>
        </div>

        <div className="mb-8">
          <hr className="border-gray-300 mb-8" />

          {/* Welcome section */}
          <div className="mb-8 ">
            <div className="flex">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Good evening, Sarah
                </h2>
                <p className="text-gray-600">You have 1 documents to review</p>
              </div>
              {/* Online status */}
              <div className="flex items-center text-green-600 mb-6">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Online
              </div>
            </div>
          </div>

          {/* Upload section */}
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center mb-8 bg-white">
            <p className="text-gray-700 mb-2">
              Click to upload or drag files here
            </p>
            <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 100MB</p>
          </div>

          <hr className="border-gray-300 mb-8" />
        </div>

        {/* Recent Documents section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Documents
          </h2>

          <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4">
            <div id="secure5" className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[100px] h-[100px] bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Client Agreement.pdf
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-600 flex items-center mr-3">
                      <svg
                        className="w-2 h-2 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Secured
                    </span>
                    <span>Contract • 2.4 MB</span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500">Today</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between mb-8">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-[100px] h-[50px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="w-2 h-2 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              New Folder
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalVaultDashboard;
