import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Logo from "../assets/logo/job1 (1).jpg";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleUserLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
      });
  };

  const links = (
    <>
      <Link className="mr-2" to="/">
        Home
      </Link>
      {user && user?.email ? (
        <Link className="mr-2" to="/myApplications">
          my applications
        </Link>
      ) : (
        ""
      )}
      {user && user?.email ? (
        <Link className="mr-2" to="/postNewJob">
          Post New Jobs
        </Link>
      ) : (
        ""
      )}
      {user && user?.email ? (
        <Link className="mr-2" to="/myPostedJobs">
          My Posted Jobs
        </Link>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <div className="flex items-center gap-2 font-semibold">
            <img src={Logo} className="w-12" alt="" />
            <p>Job Portal</p>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <NavLink>
            <button onClick={handleUserLogOut}>logout</button>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
