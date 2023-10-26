import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Users from "../pages/users";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";

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
          path: '/login',
          element: <Login />,
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
    

  ]
);
