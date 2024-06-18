import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

export const UpdateJob = () => {
  const { id } = useParams();
  //console.log(id);

  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const [selectedOption, setSelectedoption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    //console.log(data);
    fetch(`http://localhost:5000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("job Update successfully");
        }
        reset();
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
    { value: "Dart", label: "Dart" },
    { value: "Flutter", label: "Flutter" },
  ];
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/*form */}
      <div className=" bg-[#efefef] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
          {/*first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/*second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20K"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/*third row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">job Location</label>
              <input
                type="text"
                placeholder="Ex: India"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/*four row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2024-2-20"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NOExperience">NO Experience</option>
                <option value="Internship">Internship</option>
                <option value="Workremotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/*fivth row */}
          <div>
            <label className=" block mb-2 text-lg ">Requires Skill Sets:</label>
            <CreatableSelect
              defaultInputValue={skills}
              onChange={setSelectedoption}
              options={options}
              isMulti
              className="create-job-input"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Company Logo</label>
              <input
                type="url"
                placeholder="Past Your Company Logo URL: http://weshare.com/img1"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg ">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div>
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              {...register("description")}
              className=" w-full pi-3 py-1.5 focus:outline-none"
              rows={6}
              defaultValue={description}
              placeholder="Job Discription"
            />
          </div>

          {/* last row */}
          <div>
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              defaultValue={postedBy}
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className=" block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};
