import React from 'react'
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router-dom';

const JobApply = () => {
  const {id} = useParams();
  const {user} = useAuth();
  console.log(user, id)

    const applyToTheJob = (e)=>{
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
        job_Id : id,
        user_email : user.email,
        linkedin,
        github,
        resume
        }

        console.log(jobApplication);
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Apply the job now</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={applyToTheJob} className="fieldset">
          <label className="fieldset-label">LinkedIn URL</label>
          <input type="url" className="input" name='linkedin' placeholder="Enter LinkedIn URL" />
          <label className="fieldset-label">Github URL</label>
          <input type="url" className="input" name='github' placeholder="Enter Github URL" />
          <label className="fieldset-label">Resume URL</label>
          <input type="url" className="input" name='resume' placeholder="Enter Resume URL" />
          <button className="btn btn-neutral mt-4">Apply</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default JobApply