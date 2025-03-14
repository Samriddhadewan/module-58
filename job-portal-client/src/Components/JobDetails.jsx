import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const data = useLoaderData();
    const {company, title, _id} = data;


    return (
    <div className='text-center space-y-2'>
        <h1 className='text-3xl font-semibold text-gray-800'>Company name:{company}</h1>
        <h1 className='text-2xl font-semibold '>company Title: {title}</h1>
        <Link to={`/jobApply/${_id}`}>
        <button className='btn btn-accent text-white'>Apply</button>
        </Link>
    </div>
  )
}

export default JobDetails