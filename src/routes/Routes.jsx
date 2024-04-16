import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import FavoriteDeals from "../pages/FavoriteDeals";
import Login from "../pages/Login";
import PropertyDetails from "../pages/PropertyDetails";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../commercial.json')
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/favorite",
        element: <FavoriteDeals></FavoriteDeals>,
        loader: () => fetch('../commercial.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/property-details/:id",
        element: <PropertyDetails></PropertyDetails>,
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
        element: <Profile></Profile>
      }
    ]
  },
]);

export default router;