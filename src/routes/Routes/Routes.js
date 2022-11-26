import { createBrowserRouter } from "react-router-dom";
import Admin from "../../layouts/Admin";
import Main from "../../layouts/Main";
import AllBuyers from "../../pages/Admin/AllBuyers/AllBuyers";
import AllProducts from "../../pages/Admin/AllProducts/AllProducts";
import AllSellers from "../../pages/Admin/AllSellers/AllSellers";
import CreateProduct from "../../pages/Admin/CreateProduct/CreateProduct";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import MyOrders from "../../pages/Admin/MyOrders/MyOrders";
import ReportedItems from "../../pages/Admin/ReportedItems/ReportedItems";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Admin />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/create-product",
        element: <CreateProduct />,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/all-seller",
        element: <AllSellers />,
      },
      {
        path: "/dashboard/all-buyer",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/reported-items",
        element: <ReportedItems />,
      },
    ],
  },
]);

export default router;
