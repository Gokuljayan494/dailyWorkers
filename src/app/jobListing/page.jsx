"use client";

import Filter from "@/_components/Filters";
import React from "react";
import "./page.css";
import DeskTopJobCard from "@/_components/DeskTopJobCard";
import img1 from "../../../public/netflix.png";
import img2 from "../../../public/notion.png";
import useMediaQuery from "@/_hooks/mediaQuery";
function index() {
  const Jobs = [
    {
      name: "Cleaning",
      id: 44442,
      img: img1,
    },
    {
      name: "Food Cooking",
      id: 11112,
      img: img2,
    },
    {
      name: "Reception",
      id: 332323,
      img: img1,
    },
    {
      name: "Office Boy",
      id: 45344,
      img: img2,
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log(`isMobile :${isMobile}`);

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <Filter />
      </aside>
      <main className="job-container">
        {!isMobile &&
          Jobs.map((job) => {
            return (
              <DeskTopJobCard key={job.id} name={job.name} img1={job?.img} />
            );
          })}
      </main>
    </div>
  );
}

export default index;
