import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import Display from "./Pages/Display/Display.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import AuthProvider from "./Pages/AuthProvider/AuthProvider.jsx";
import Blogs from "./Pages/Blog Page/Blogs.jsx";
import SingleBlog from "./Pages/Single Blog/SingleBlog.jsx";
import DashBoard from "./Pages/DashBoard/DashBoard.jsx";
import AddPost from "./Pages/Add Post/AddPost.jsx";
import ManageUser from "./Pages/Manage User/ManageUser.jsx";
import ManageComment from "./Pages/Manage Comment/ManageComment.jsx";
import ManageFavorit from "./Pages/Manage Favorit/ManageFavorit.jsx";
import ManagePost from "./Pages/Manage post/ManagePost.jsx";
import ManageOwnPost from "./Pages/Manage Own Post/ManageOwnPost.jsx";
import UpdatePost from "./Pages/Update post/UpdatePost";
import DashBoardPage from "./Pages/DashBoard/DashBoardPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Display />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "blog/:id",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "add-item",
        element: <AddPost />,
      },
      {
        path: "manage-post",
        element: <ManagePost />,
      },
      {
        path: "manage-own-post",
        element: <ManageOwnPost />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "manage-comment",
        element: <ManageComment />,
      },
      {
        path: "favorit",
        element: <ManageFavorit />,
      },
      {
        path: "update-post/:id",
        element: <UpdatePost />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
);
