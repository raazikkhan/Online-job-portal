import dayjs from "dayjs";
import React from "react";

function Jobcard() {
  const skills = ["javascript", "react js", "css", "tailwind css"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2025-7-15", "day");
  return (
    <div className="mx-40 py-4">
      <div className="flex flex-row flex-wrap justify-between items-center bg-zinc-200 py-4 px-6 rounded-md border border-black hover:border-blue-200 shadow-lg hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-xl font-semibold">Frontend Developer - Amazon</h1>
          <p>Full time &#x2022; fresher &#x2022; In-Office</p>
          <div className="flex items-center gap-2">
            {skills.map((skillInx) => (
              <p
                key={skillInx}
                className="text-gray-500 border p-1 px-2 rounded-md"
              >
                {skillInx}
              </p>
            ))}
          </div>
        </div>
        <div className="items-center gap-4 flex">
          <p className="text-gray-500"> Posted {diffInDays} days ago</p>
          <button className="text-blue-500 border px-10 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;
