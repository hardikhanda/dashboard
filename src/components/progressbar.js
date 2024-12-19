import React from 'react';

const ProgressBar = () => {
  return (
    <div className="max-w-4xl mx-auto my-4 pb-4">
      {/* Step Labels */}
      <div className="flex justify-between text-xs text-center mb-4">
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">01</span>Preliminary</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">02</span>Your Details</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">03</span>KYC</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">04</span>Parties</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">05</span>Claim</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold mr-1">06</span>Review</div>
        <div className="w-1/7 text-black"><span className="text-xl font-bold">07</span>Payment</div>
      </div>

      {/* Progress Bar Steps */}
      <div className="flex items-center justify-between">
        {/* Step 1 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">✓</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">✓</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">✓</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Step 4 (Active Step) */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-[#0099ff] flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-[#0099ff]"></span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white"></span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white"></span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#0099ff]"></div>
        </div>

        {/* Progress bar between steps */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
