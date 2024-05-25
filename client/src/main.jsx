import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Main.css";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";
import AppPage from "./pages/AppPage";
import HomePage from "./pages/AppPages/HomePage";
import DealsPage from "./pages/AppPages/DealsPage";
import ApplicationsPage from "./pages/AppPages/ApplicationsPage";
import ContactsPage from "./pages/AppPages/ContactsPage";
import ProfilePage from "./pages/AppPages/ProfilePage";
import NewDealPage from "./pages/AppPages/NewDealPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainPage />,
      errorElement: "Ooops.. ",
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/reg",
      element: <RegPage />,
   },
   {
      path: "/app",
      element: <AppPage />,
      children: [
         {
            path: "home",
            element: <HomePage />,
         },
         {
            path: "deals",
            element: <DealsPage />,
         },
         {
            path: "requests",
            element: <ApplicationsPage />,
         },
         {
            path: "contacts",
            element: <ContactsPage />,
         },
         {
            path: "profile",
            element: <ProfilePage />,
         },
         {
            path: "newdeal",
            element: <NewDealPage />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
