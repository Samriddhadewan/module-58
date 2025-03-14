import React from 'react'
import * as motion from "motion/react-client"
import { easeOut } from 'motion'
import Team1 from "../assets/team/team1.jpg"
import Team2 from "../assets/team/team2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      animate={{y: [50,100,50]}}
      transition={{duration: 10, repeat:Infinity}}
      src={Team1}
      className="max-w-sm w-72 border-5 border-blue-600 rounded-t-[40px] rounded-br-[40px] border-t-0 border-r-0 shadow-2xl" />
    <motion.img
      animate={{x: [100,150,100]}}
      transition={{duration: 10, delay:5, repeat:Infinity}}
      src={Team2}
      className="max-w-sm w-72 border-5 border-blue-600 rounded-t-[40px] rounded-br-[40px] border-t-0 border-r-0 shadow-2xl" />
    </div>
    <div className='flex-1'>
      <motion.h1 
        animate={{x: [0,50,0]}}
        transition={{duration: 5, delay:1, ease: easeOut,
            repeat:Infinity
        }}
        r
      className="text-5xl font-bold">Latest <motion.span 
      animate={{color: ["#99ff99", "#ff80ff", "#ff8c66"] }}
      transition={{duration:1.5,repeat:Infinity}}
      >Jobs</motion.span> For Your</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner