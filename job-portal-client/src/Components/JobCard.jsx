import React from "react";
import { CiLocationOn } from "react-icons/ci";

const JobCard = ({ item }) => {
  const {
    requirements,
    salaryRange,
    description,
    company_logo,
    location,
    company,
    category,
    title,
  } = item;

  console.log(item);

  return (
    <div className="card bg-base-100 px-3  p-4 shadow-sm space-y-5">
      <div className="flex  gap-4">
        <img src={company_logo} className="w-14 object-cover" />
        <div>
          <p className="text-2xl font-semibold text-gray-500">{company}</p>
          <div className="flex items-center gap-1">
            <CiLocationOn></CiLocationOn>
            <p className="text-base text-gray-400">{location}</p>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="card-title py-2">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-gray-600">{description}</p>
        <div className="">
          <div className="flex flex-wrap gap-2">
            {requirements.map((item) => (
              <p className="text-gray-500 border cursor-pointer rounded p-1">
                {item}
              </p>
            ))}
          </div>
          <div className="my-4 flex items-center justify-between">
            <p className="text-base text-gray-500">
              Salary : {salaryRange.min} - {salaryRange.max}$
            </p>
            <button className="btn bg-accent text-white">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
