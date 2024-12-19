import React from 'react';

const ProgressBar = () => {
  return (
    <div className="max-w-4xl mx-auto my-4 pb-4">
      {/* Step Labels - moved to top */}
      <div className="flex justify-between text-xs text-center mb-4">
        <div className="w-1/7 text-[#0099ff]">Invitation received</div>
        <div className="w-1/7 text-[#0099ff]">Personal details</div>
        <div className="w-1/7 text-[#0099ff]">Application details</div>
        <div className="w-1/7 text-[#0099ff]">Confirmation</div>
        <div className="w-1/7 text-[#0099ff]">Step 5</div>
        <div className="w-1/7 text-[#0099ff]">Step 6</div>
        <div className="w-1/7 text-[#0099ff]">Final</div>
      </div>

      <div className="flex items-center justify-between">
        {/* Step 1 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Step 4 (Active Step) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-white mx-auto rounded-full text-lg text-[#0099ff] flex items-center justify-center border-2 border-[#0099ff] opacity-100">
            <span className="text-[#0099ff]">4</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center justify-center px-2">
          <div className="w-full bg-gray-200 rounded h-1">
            <div className="bg-[#0099ff] h-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-10 h-10 bg-[#0099ff] mx-auto rounded-full text-lg text-white flex items-center justify-center border-2 border-[#0099ff] opacity-50">
            <span className="text-white">
              <i className="fa fa-check w-full"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
