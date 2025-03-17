import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/postedJobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  console.log(jobs)
  return (
    <div>
      <h1>My Posted Jobs {jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Deadline</th>
              <th>Company Name</th>
              <th>Job Applied</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.deadline}</td>
                <td>{item.company}</td>
                <td>{item.applicationCount}</td>
                <td>
                  <Link to={`/viewApplication/job/${item._id}`}>
                  <button className="btn btn-info">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
