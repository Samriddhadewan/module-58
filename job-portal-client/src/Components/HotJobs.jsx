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

    
 
    return (
    <div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 my-4">Hot Jobs {jobs.length}</h1>
    
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            jobs.map(item => <JobCard key={item._id} item={item}></JobCard>)
        }
    </div>
    
    
    </div>
  )
}

export default HotJobs