import { useEffect, useState } from "react"
import { data } from "react-router-dom";
import JobCard from "./JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    console.log(jobs)
    
 
    return (
    <div>
        <h1>Hot Jobs {jobs.length}</h1>
    
    <div>
        {
            jobs.map(item => <JobCard key={item._id}></JobCard>)
        }
    </div>
    
    
    </div>
  )
}

export default HotJobs