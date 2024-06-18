import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { PageHeader } from "./PageHeader";

export const Jobdetalis = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, []);

  const handleApplay = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Sigle Job Page"} path={"Single Job"} />
      <h1>{job.jobTitle}</h1>
      <h2>JobDetails: {id}</h2>
      <button
        className=" bg-blue mx-3 px-8 py-2 text-white"
        onClick={handleApplay}
      >
        Apply Now
      </button>
    </div>
  );
};
