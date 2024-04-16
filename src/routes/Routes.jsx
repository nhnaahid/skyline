import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import FavoriteDeals from "../pages/FavoriteDeals";
import Login from "../pages/Login";
import PropertyDetails from "../pages/PropertyDetails";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../commercial.json')
      },
      {
        path: "/update",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/favorite",
        element: <PrivateRoute><FavoriteDeals></FavoriteDeals></PrivateRoute>,
        loader: () => fetch('../commercial.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/property-details/:id",
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: () => fetch('../commercial.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

export default router;