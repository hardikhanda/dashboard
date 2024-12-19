import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import ProgressBar from '../components/progressbar';
import FileClaimSection from '../components/fileClaimSection';
import ClaimDocumentsSection from '../components/claimDocumentSection';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 p-6 bg-light-gray rounded-lg ml-4">
        {/* Icons above the content */}
        <div className="flex justify-end mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="bg-slate-100 p-8 rounded-lg shadow-md">
          {/* Progress Bar */}
          <ProgressBar />

          {/* New Div with Curved Corners */}
          
            {/* FileClaimSection Component */}
            <FileClaimSection />
            <ClaimDocumentsSection/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
