import Lottie from "lottie-react";
import React, { useContext } from "react";
import lottieAnimation from "../assets/Animation - 1741718741656.json";
import AuthContext from "../Context/AuthContext";
import GoogleLogin from "../Components/GoogleLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errMessage = error.message;
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={lottieAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full p-10 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center text-3xl font-semibold">Register now</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Register Now</button>
            </form>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
