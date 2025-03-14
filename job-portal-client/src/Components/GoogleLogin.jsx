import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { div } from 'motion/react-client';

const GoogleLogin = () => {
    const {LoginWithGoogle} = useContext(AuthContext);

    const googleLogin = ()=>{
        LoginWithGoogle()
        .then((result)=>{
            
        })
        .them((error)=>{

        })
    }

  return (
    <div>
              <div className="divider">OR</div>

           <button className='btn btn-neutral w-full' onClick={googleLogin}>GoogleLogin</button>
    </div>
  )
}

export default GoogleLogin