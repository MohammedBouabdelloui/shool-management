import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Users from "../pages/users";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";
import GestLayout from "../layouts/GestLayout";
import StudentDashboardLayout from "../layouts/StudentDashboardLayout";

// les route
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard';
export const LOGIN_ROUTE = "/login";

export const router = createBrowserRouter(
  [
    {
      element : <Layout/>,
      children : [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/user',
          element: <Users />,
        },

        {
          path: '*',
          element: <Notfound />,
        },
      ]
    },
    {
      element : <GestLayout />,
      children : [
        {
          path: LOGIN_ROUTE ,
          element: <Login />,
        },
      ]
    },
    {
      element : <StudentDashboardLayout />,
      children : [
        {
          path: STUDENT_DASHBOARD_ROUTE,
          element: <h1>page student dashboard </h1>,
        },
      ]
    }
    

  ]
); 
