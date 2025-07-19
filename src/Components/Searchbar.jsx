import React from "react";

function Searchbar() {
  return (
    <div className="flex gap-4 my-15 justify-center px-10">
      <select className="w-65 py-4 pl-5 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled selected hidden>
          Job Role
        </option>
        <option value="Front-end Engineer">Front-end Engineer</option>
        <option value="Back-end Engineer">Back-end Engineer</option>
        <option value="Ai Engineer">Ai Engineer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Prompt Engineer">Prompt Engineer</option>
      </select>
      <select className="w-65 py-4 pl-5 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled selected hidden>
          Location
        </option>
        <option value="On Office"> On Office</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Remote">Remote</option>
      </select>
      <select className="w-65 py-4 pl-5 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled selected hidden>
          Experience
        </option>
        <option value="Front-end Engineer">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <select className="w-65 py-4 pl-5 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled selected hidden>
          job type
        </option>
        <option value="Internship">Internship</option>
        <option value="Part-time">Part-time</option>
        <option value="Full-time">Full-time</option>
        <option value="Contract">Contract</option>
      </select>
      <button className="w-65 py-4 pl-5 bg-blue-300 hover:bg-blue-400  font-semibold rounded-md">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
