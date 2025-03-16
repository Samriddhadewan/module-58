import { form } from "motion/react-client";
import React from "react";
import { Form } from "react-router-dom";

const PostJobs = () => {

    const handleSubmitJob = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const {min, max, currency, ...newJob} = data;

        newJob.salaryRange = {min, max, currency};
        console.log(newJob);

    }


  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">Post A New job</h1>
      <div className="">
        <form onSubmit={handleSubmitJob} className=" mx-auto max-w-5xl fieldset px-4">
          {/* job title  */}
          <label className="fieldset-label">Job Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter Job Title"
            name="title"
          />
          {/* job location  */}
          <label className="fieldset-label">Job Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter Job Location"
            name="location"
          />
          {/* select job type  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Select Job Type</legend>
            <select
              name="jobType"
              defaultValue="Pick a browser"
              className="select"
              required
            >
              <option disabled={true}>Pick a Job type</option>
              <option>Remote</option>
              <option>Part-Time</option>
              <option>Contractual</option>
            </select>
          </fieldset>
          {/* select job type  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Pick up Job field</legend>
            <select
              name="category"
              defaultValue="Pick a browser"
              className="select"
              required
            >
              <option disabled={true}>Pick a Job type</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </fieldset>

          <p>Salary Range</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
            <input
              name="min"
              type="number"
              className="input "
              placeholder="Min"
            />
            <input
              name="max"
              type="number"
              className="input "
              placeholder="Max"
            />

            <fieldset className="">
              <select name="currency" defaultValue="Pick a browser" className="select" required>
                <option  disabled={true}>
                  Pick a Job type
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>EURO</option>
                <option>RUPE</option>
              </select>
            </fieldset>
          </div>

          {/* Job description  */}
          <label className="fieldset-label">Job Description</label>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="job description"
          ></textarea>
          {/* job requirements  */}
          <label className="fieldset-label">Job Requirements</label>
          <textarea
            name="requirements"
            className="textarea w-full"
            placeholder="Put each requirements in a new line"
          ></textarea>
          {/* job responsibilities */}
          <label className="fieldset-label">Job Responsibilities</label>
          <textarea
            name="responsibilities"
            className="textarea w-full"
            placeholder="Put each Responsibilities in a new line"
          ></textarea>

          {/* hr email  */}
          <label className="fieldset-label">HR Email</label>
          <input
            name="hr_email"
            type="email"
            className="input w-full"
            placeholder="Enter HR email"
          />
          {/* hr name  */}
          <label className="fieldset-label">HR Name</label>
          <input
            name="hr_name"
            type="text"
            className="input w-full"
            placeholder="Enter HR name"
          />

          {/* hr name  */}
          <label className="fieldset-label">Company Logo URL</label>
          <input
            name="company_logo"
            type="text"
            className="input w-full"
            placeholder="Company Logo URL"
          />

          {/* submit buttn  */}
          <button className="btn btn-neutral mt-4">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
