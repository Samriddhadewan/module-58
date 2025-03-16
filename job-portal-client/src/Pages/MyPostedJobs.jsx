import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';

const MyPostedJobs = () => {
  const {user} = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/postedJobs?email=${user.email}`)
    .then(res=> res.json())
    .then(data => setJobs(data))
  } ,[user.email])
  return (
    <div>
      <h1>My Posted Jobs {jobs.length}</h1>
    </div>
  )
}

export default MyPostedJobs