import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";
import GestLayout from "../layouts/GestLayout";
import StudentDashboardLayout from "../layouts/StudentDashboardLayout";
import StudentDashboard from "../components/student/StudentDashboard";

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
          element: <StudentDashboard />,
        },
      ]
    }
    

  ]
); 
