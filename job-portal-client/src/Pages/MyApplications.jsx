import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([])
  useEffect(()=>{

    fetch(`http://localhost:5000/jobApplications?email=${user.email}`)
    .then(res=> res.json())
    .then(data=> setApplications(data));
  } ,[user.email])
  console.log(applications);
  return <div>
    <h1>My applications {applications.length}
        <div>
            {
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                            applications.map(item =>                     <tr>
                                <th>
                                  <label>
                                    <input type="checkbox" className="checkbox" />
                                  </label>
                                </th>
                                <td>
                                  <div className="flex items-center gap-3">
                                    <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">
                                        <img
                                          src={item.company_logo}
                                          alt="Avatar Tailwind CSS Component" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold">Hart Hagerty</div>
                                      <div className="text-sm opacity-50">United States</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  {item.company_title}
                                  <br />
                                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{item.company}</td>
                                <th>
                                  <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                              </tr>)
                        }
                  </tbody>
                </table>
              </div>
            }
        </div>
    </h1>
  </div>;
};

export default MyApplications;
