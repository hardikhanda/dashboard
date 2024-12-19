import React from 'react';

const FileClaimSection = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-tl-lg rounded-tr-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">File Your Claim</h2>
      <hr className="mb-6" />
      
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Claim Value Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>

            <h3 className="font-medium text-gray-700">Claim Value</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Contract Value</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="10,00,00"
                />
                <select className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 bg-transparent border-none focus:ring-0">
                  <option>USD</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Claim Value</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="15,00,00"
                />
                <select className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 bg-transparent border-none focus:ring-0">
                  <option>USD</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-orange-400">
              150% of Contract Value
            </div>
          </div>
        </div>

        {/* Place Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <h3 className="font-medium text-gray-700">Place</h3>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              placeholder="Select the Place for proceedings"
            />

            <div className="text-sm text-gray-600">
              Is the place for the proceedings the one mentioned in the agreement?
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" name="place" className="text-blue-500 focus:ring-blue-500" />
                <label className="text-sm text-gray-600">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="place" className="text-blue-500 focus:ring-blue-500" defaultChecked />
                <label className="text-sm text-gray-600">No</label>
              </div>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <h3 className="font-medium text-gray-700">Language</h3>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              placeholder="Select the language for proceedings"
            />

            <div className="text-sm text-gray-600">
              Is the language for the proceedings the one mentioned in the agreement?
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" name="language" className="text-blue-500 focus:ring-blue-500" />
                <label className="text-sm text-gray-600">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="language" className="text-blue-500 focus:ring-blue-500" defaultChecked />
                <label className="text-sm text-gray-600">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileClaimSection;
