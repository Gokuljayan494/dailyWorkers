import React from "react";
import Image from "next/image";

function JobCard(props) {
  const { img1, name } = props;

  return (
    <div className="w-full p-4 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Logo Section */}
        <Image
          src={img1}
          alt="Profile Logo"
          width={64}
          height={64}
          className="rounded-full"
        />

        {/* Job Info Section */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-base font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Web App Developer</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            <div className="px-3 py-1 bg-gray-100 text-sm rounded-full">
              Part Time
            </div>
            <div className="px-3 py-1 bg-gray-100 text-sm rounded-full">
              Remote
            </div>
            <div className="px-3 py-1 bg-gray-100 text-sm rounded-full">
              Urgent
            </div>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="flex flex-col items-center sm:items-end text-gray-600 text-sm space-y-1">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.657-2.686 3-6 3s-6-1.343-6-3c0-1.1.607-2.053 1.528-2.684A9.972 9.972 0 0112 4a9.972 9.972 0 015.472 1.316A5.007 5.007 0 0118 11c0 1.657-2.686 3-6 3z"
              />
            </svg>
            <span>Tamil Nadu</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12l2-2m0 0l4-4m-4 4l4 4m-4-4l4 4m-2-6v6m0 0H6m6 0h6"
              />
            </svg>
            <span>4 hours ago</span>
          </div>
          <div>
            <span className="text-green-600 font-semibold">$400/day</span>
          </div>
          <div>
            <span className="text-red-600 font-semibold">Left: 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
