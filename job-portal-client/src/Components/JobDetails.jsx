import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
  
    const data = useLoaderData();
    
    const {company, title} = data;


    return (
    <div className='text-center space-y-2'>
        <h1 className='text-3xl font-semibold text-gray-800'>Company name:{company}</h1>
        <h1 className='text-2xl font-semibold '>company Title: {title}</h1>
    </div>
  )
}

export default JobDetails