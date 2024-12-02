import React from "react";
import "./filters.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <h2 className="text-base font-inter-bold my-10 mb-2">Filter</h2>
      <input
        type="text"
        placeholder="Company, skill, tag..."
        className="filter-search"
      />

      <div className="filter-group">
        <p className="text-base font-inter-bold mb-[10px]">Employment</p>
        <div className="flex items-center">
          <input
            id="default-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox1"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Full-Time
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked
            id="checked-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox1"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Part-Time
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox2"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Freelance
          </label>
        </div>
      </div>

      <div className="filter-group">
        <p className="text-base font-inter-bold mb-[10px]">Employment</p>
        <div className="flex items-center">
          <input
            id="default-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox1"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Full-Time
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked
            id="checked-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox1"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Part-Time
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox2"
            className="ms-2 text-sm font-inter-semibold text-gray-900 dark:text-gray-300"
          >
            Freelance
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
