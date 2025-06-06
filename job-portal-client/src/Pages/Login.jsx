import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json";
import Lottie from "lottie-react";
import AuthContext from "../Context/AuthContext";
import GoogleLogin from "../Components/GoogleLogin";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = {
          email: email,
        };
        axios.post("http://localhost:5000/jwt", user, {withCredentials:true})
        .then((res)=> {
          console.log(res.data)
        })
        

        navigate(from);
      })
      .then((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full p-10 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center text-3xl font-semibold">Login now</h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-2">Login</button>
            </form>
            <GoogleLogin></GoogleLogin>
            <p>
              Don't have an Account?{" "}
              <Link className="underline text-blue-500" to="/register">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
