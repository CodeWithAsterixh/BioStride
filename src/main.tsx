import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  NotFoundPage,
  Root,
  MainLayout,
  Home,
  Patients,
} from "./App";
import PatientsLayout from "./Layouts/PagesLayout/Patients";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      
      {/* <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route> */}
      <Route element={<MainLayout />}>
        {/* Pages with header and footer */}
        <Route index element={<Home />} />
        <Route path="/patients" element={<PatientsLayout />}>
          <Route path=":name" element={<Patients />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
