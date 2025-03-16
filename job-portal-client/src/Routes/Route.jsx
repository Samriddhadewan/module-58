import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MainLayout from "../Layout/MainLayout";
import JobDetails from "../Components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Components/JobApply";
import MyApplications from "../Pages/MyApplications";
import PostJobs from "../Components/PostJobs";
import MyPostedJobs from "../Pages/myPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: "/myApplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path:"/postNewJob",
        element: <PrivateRoute> <PostJobs></PostJobs> </PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element:<PrivateRoute> <MyPostedJobs></MyPostedJobs> </PrivateRoute>
      }
    ],
  },
]);

export default router;
