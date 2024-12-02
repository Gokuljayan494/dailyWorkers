import Filter from "@/_components/Filters";
import React from "react";
import "./page.css";
import JobCard from "@/_components/JobCard";
import img1 from "../../../public/netflix.png";
import img2 from "../../../public/notion.png";
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

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <Filter />
      </aside>
      <main className="job-container">
        {Jobs.map((job) => {
          return <JobCard key={job.id} name={job.name} img1={job?.img} />;
        })}
      </main>
    </div>
  );
}

export default index;
