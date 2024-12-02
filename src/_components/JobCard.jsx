import React from "react";
import Image from "next/image";

function JobCard(props) {
  const { img1, name } = props;
  console.log(img1);

  return (
    <div>
      <div class="w-full p-4 text-center rounded-full bg-white border border-transparent rounded-lg  dark:bg-gray-800 dark:border-gray-700 hover:border-gray-100 transition-colors duration-300 hover:bg-gray-100">
        <div className="flex items-center space-x-4">
          {/* Logo Section */}
          <Image
            src={img1}
            alt="Profile Logo"
            width={70} // Adjust the width as needed
            height={64} // Adjust the height as needed
            className="rounded-full"
          />

          {/* Text Section */}
          <div className="text-left">
            <p className="text-lg font-inter-semibold">{name}</p>
            <p className="text-sm font-inter-medium text-gray-500">
              Web App Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
