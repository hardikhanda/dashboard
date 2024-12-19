import { px } from 'framer-motion';
import React, { useState } from 'react';

export default function ClaimDocumentsSection() {
  // State to store selected files for each section
  const [selectedStatementFile, setSelectedStatementFile] = useState(null);
  const [selectedAgreementFile, setSelectedAgreementFile] = useState(null);
  const [selectedAdditionalDocsFile, setSelectedAdditionalDocsFile] = useState(null);

  // Handle file selection for Statement
  const handleStatementFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedStatementFile(file);
    }
  };

  // Handle file selection for Agreement
  const handleAgreementFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedAgreementFile(file);
    }
  };

  // Handle file selection for Additional Documentation
  const handleAdditionalDocsFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedAdditionalDocsFile(file);
    }
  };

  // Handle file upload for Statement
  const handleStatementFileUpload = () => {
    if (selectedStatementFile) {
      console.log('Uploading Statement file:', selectedStatementFile.name);
      // Reset file selection
      setSelectedStatementFile(null);
    } else {
      alert('No file selected for Statement');
    }
  };

  // Handle file upload for Agreement
  const handleAgreementFileUpload = () => {
    if (selectedAgreementFile) {
      console.log('Uploading Agreement file:', selectedAgreementFile.name);
      // Reset file selection
      setSelectedAgreementFile(null);
    } else {
      alert('No file selected for Agreement');
    }
  };

  // Handle file upload for Additional Docs
  const handleAdditionalDocsFileUpload = () => {
    if (selectedAdditionalDocsFile) {
      console.log('Uploading Additional Docs file:', selectedAdditionalDocsFile.name);
      // Reset file selection
      setSelectedAdditionalDocsFile(null);
    } else {
      alert('No file selected for Additional Docs');
    }
  };

  return (
    <div className="bg-white p-6 shadow-md" style={{marginTop: '1px' } }>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Statement Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img src='paper.jpg' className="w-[30px] h-[30px]" />
        <h3 className="font-medium text-gray-700">Statement</h3>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 text-center">
        <p className="text-sm text-gray-600 mb-2">Write your Statement Here</p>
        <p className="text-sm text-gray-400 mb-4">or</p>
        <div className="flex justify-center">
          {/* File input for Statement */}
          <input
            type="file"
            accept=".pdf"
            id="fileInputStatement"
            className="hidden"
            onChange={handleStatementFileChange}
          />
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => document.getElementById('fileInputStatement').click()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            <span className="text-sm">Upload a Pdf</span>
          </button>
        </div>

        {/* Display selected Statement file */}
        {selectedStatementFile && (
          <div className="mt-4 text-gray-700">
            <p>Selected File: {selectedStatementFile.name}</p>
            <button
              onClick={handleStatementFileUpload}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Agreement Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img src='icon2.jpg' className="w-[20px] h-[23px]" />
        <h3 className="font-medium text-gray-700">Agreement</h3>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 text-center">
        <p className="text-sm text-gray-600 mb-2">Upload the Signed Agreement</p>
        <div className="flex justify-center">
          {/* File input for Agreement */}
          <input
            type="file"
            accept=".pdf"
            id="fileInputAgreement"
            className="hidden"
            onChange={handleAgreementFileChange}
          />
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => document.getElementById('fileInputAgreement').click()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            <span className="text-sm">Upload a Pdf</span>
          </button>
        </div>

        {/* Display selected Agreement file */}
        {selectedAgreementFile && (
          <div className="mt-4 text-gray-700">
            <p>Selected File: {selectedAgreementFile.name}</p>
            <button
              onClick={handleAgreementFileUpload}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Additional Documentation Section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>

        <h3 className="font-medium text-gray-700">Additional Documentation</h3>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 text-center">
        <p className="text-sm text-gray-600 mb-2">Upload Any Additional Docs</p>
        <div className="flex justify-center">
          {/* File input for Additional Docs */}
          <input
            type="file"
            accept=".pdf"
            id="fileInputAdditionalDocs"
            className="hidden"
            onChange={handleAdditionalDocsFileChange}
          />
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => document.getElementById('fileInputAdditionalDocs').click()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            <span className="text-sm">Upload a Pdf</span>
          </button>
        </div>

        {/* Display selected Additional Docs file */}
        {selectedAdditionalDocsFile && (
          <div className="mt-4 text-gray-700">
            <p>Selected File: {selectedAdditionalDocsFile.name}</p>
            <button
              onClick={handleAdditionalDocsFileUpload}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
  );
}
